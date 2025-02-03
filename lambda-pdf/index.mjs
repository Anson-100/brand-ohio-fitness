import { DynamoDBClient } from "@aws-sdk/client-dynamodb"
import { DynamoDBDocumentClient, PutCommand } from "@aws-sdk/lib-dynamodb"
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3"
import PDFDocument from "pdfkit"
import fs from "fs"

// Initialize AWS clients
const dynamoClient = new DynamoDBClient({})
const dynamoDB = DynamoDBDocumentClient.from(dynamoClient)
const s3 = new S3Client({})

// Bucket name
const BUCKET_NAME = "gym-waivers"

export const handler = async event => {
  try {
    console.log("Received event:", JSON.stringify(event, null, 2))

    const requestBody = JSON.parse(event.body)
    const waiverId = `waiver_${Date.now()}`

    // Standardized structure for DynamoDB
    const waiverItem = {
      waiverId,
      waiverType: requestBody.waiverType, // "fitness" or "martial_arts"
      createdAt: new Date().toISOString(),
      firstName: requestBody.firstName,
      lastName: requestBody.lastName,
      email: requestBody.email,
      phone: requestBody.phone,
      dateOfBirth: requestBody.dateOfBirth,
      signingForChild: requestBody.signingForChild || false,
      emergencyContactName: requestBody.emergencyContactName,
      emergencyContactPhone: requestBody.emergencyContactPhone,
      agreeToTerms: requestBody.agreeToTerms,
      typedSignature: requestBody.typedSignature,
      waiverData: {}, // Holds waiver-specific fields
    }

    // Handle child waiver details
    if (requestBody.signingForChild) {
      waiverItem.child = {
        firstName: requestBody.childFirstName || null,
        lastName: requestBody.childLastName || null,
        dateOfBirth: requestBody.childDateOfBirth || null,
      }
    }

    // Store waiver-specific fields inside `waiverData`
    if (requestBody.waiverType === "martial_arts") {
      waiverItem.waiverData = {
        assumptionOfRiskResponsibility:
          requestBody.assumptionOfRiskResponsibility,
        medicalTreatmentEmergencyCare:
          requestBody.medicalTreatmentEmergencyCare,
        liabilityWaiverIndemnification:
          requestBody.liabilityWaiverIndemnification,
        consentInstructionRules: requestBody.consentInstructionRules,
      }
    } else if (requestBody.waiverType === "fitness") {
      waiverItem.waiverData = {
        assumptionOfRisk: requestBody.assumptionOfRisk,
        awarenessOfStrenuousActivity: requestBody.awarenessOfStrenuousActivity,
        releaseOfLiability: requestBody.releaseOfLiability,
        unauthorizedAccess: requestBody.unauthorizedAccess,
      }
    }

    console.log(
      "Attempting to store in DynamoDB:",
      JSON.stringify(waiverItem, null, 2)
    )

    await dynamoDB.send(
      new PutCommand({
        TableName: "IT_LiabilityWaivers",
        Item: waiverItem,
      })
    )

    console.log("DynamoDB Put Response: Success")

    // ✅ Generate PDF and Upload to S3
    const pdfBuffer = await generatePDF(waiverItem)
    await uploadToS3(
      pdfBuffer,
      waiverId,
      requestBody.waiverType,
      requestBody.firstName,
      requestBody.lastName
    )

    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "OPTIONS, POST, GET",
        "Access-Control-Allow-Headers": "Content-Type",
      },
      body: JSON.stringify({
        message: "Waiver submitted successfully",
        waiverId,
      }),
    }
  } catch (error) {
    console.error("Error storing waiver:", error)
    return {
      statusCode: 500,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "OPTIONS, POST, GET",
        "Access-Control-Allow-Headers": "Content-Type",
      },
      body: JSON.stringify({
        message: "Error submitting waiver",
        error: error.message,
      }),
    }
  }
}

// 🔹 Generate PDF from waiver data
const generatePDF = async waiverData => {
  return new Promise((resolve, reject) => {
    const doc = new PDFDocument()
    const buffers = []

    doc.on("data", buffers.push.bind(buffers))
    doc.on("end", () => {
      resolve(Buffer.concat(buffers))
    })

    doc.fontSize(16).text("Liability Waiver", { align: "center" })
    doc.moveDown()
    doc.fontSize(12).text(`Waiver ID: ${waiverData.waiverId}`)
    doc.text(`Type: ${waiverData.waiverType}`)
    doc.text(`Name: ${waiverData.firstName} ${waiverData.lastName}`)
    doc.text(`Email: ${waiverData.email}`)
    doc.text(`Phone: ${waiverData.phone}`)
    doc.text(`Date of Birth: ${waiverData.dateOfBirth}`)
    doc.text(
      `Emergency Contact: ${waiverData.emergencyContactName} (${waiverData.emergencyContactPhone})`
    )
    doc.text(`Agreement to Terms: ${waiverData.agreeToTerms ? "Yes" : "No"}`)

    if (waiverData.typedSignature) {
      doc.text(`Signed by: ${waiverData.typedSignature}`)
    }

    doc.end()
  })
}

// 🔹 Upload PDF to S3
const uploadToS3 = async (
  pdfBuffer,
  waiverId,
  waiverType,
  firstName,
  lastName
) => {
  const fileName = `${
    waiverType === "martial_arts" ? "MA" : "F"
  }_${firstName}${lastName}_${waiverId}.pdf`

  const params = {
    Bucket: BUCKET_NAME,
    Key: fileName,
    Body: pdfBuffer,
    ContentType: "application/pdf",
  }

  console.log(`Uploading PDF to S3: ${fileName}`)

  await s3.send(new PutObjectCommand(params))
}
