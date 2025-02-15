import { DynamoDBClient } from "@aws-sdk/client-dynamodb"
import { DynamoDBDocumentClient, PutCommand } from "@aws-sdk/lib-dynamodb"
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3"
import PDFDocument from "pdfkit"
import fs from "fs"
import { Buffer } from "buffer" // Required for Base64 decoding

import { fitnessClauses, martialArtsClauses } from "/opt/nodejs/waiverClauses.js";




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
    const waiverId = waiver_${Date.now()}

    // STUFF USED FOR PDF==========================================
    const waiverItem = {
      waiverId,
      waiverType: requestBody.waiverType,
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
      signature: requestBody.signature, // ✅ Store the Base64 signature
      waiverData: {},
      clauses: requestBody.waiverType === "martial_arts" ? martialArtsClauses : fitnessClauses,
    }
    // STUFF ACTUALLY STORED IN DYNAMO DB TABLE====================
    const dynamoItem = {
      waiverId: waiverItem.waiverId,
      waiverType: waiverItem.waiverType,
      createdAt: waiverItem.createdAt,
      firstName: waiverItem.firstName,
      lastName: waiverItem.lastName,
      email: waiverItem.email,
      phone: waiverItem.phone,
      dateOfBirth: waiverItem.dateOfBirth,
      signingForChild: waiverItem.signingForChild,
      emergencyContactName: waiverItem.emergencyContactName,
      emergencyContactPhone: waiverItem.emergencyContactPhone,
      agreeToTerms: waiverItem.agreeToTerms,
      typedSignature: waiverItem.typedSignature,
    };

    if (requestBody.signingForChild) {
      waiverItem.child = {
        firstName: requestBody.childFirstName || null,
        lastName: requestBody.childLastName || null,
        dateOfBirth: requestBody.childDateOfBirth || null,
      }
    }

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
        Item: dynamoItem, // ✅ Only saves selected fields
      })
    )

    console.log("DynamoDB Put Response: Success")

    // ✅ Generate PDF with signature and Upload to S3
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

// 🔹 Generate PDF with Signature
const generatePDF = async waiverData => {
  return new Promise((resolve, reject) => {
    const doc = new PDFDocument();
    const buffers = [];

    doc.on("data", buffers.push.bind(buffers));
    doc.on("end", () => {
      resolve(Buffer.concat(buffers));
    });

    // ✅ Title Change Based on Waiver Type
    const title =
      waiverData.waiverType === "martial_arts"
        ? "Martial Arts Liability Waiver"
        : "Fitness Liability Waiver";
        
    doc.fontSize(10).text("Ohio Fitness & Martial Arts", { align: "center" });
    doc.moveDown();
    doc.fontSize(16).text(title, { align: "center" });
    doc.moveDown();

    doc.fontSize(12).font("Helvetica-Oblique").text("Signee Information");
    doc.moveDown();

    doc.fontSize(12).font("Helvetica-Bold").text("Waiver ID: ", { continued: true });
    doc.font("Helvetica").text(waiverData.waiverId);
    
    doc.font("Helvetica-Bold").text("Name: ", { continued: true });
    doc.font("Helvetica").text(${waiverData.firstName} ${waiverData.lastName});

    doc.font("Helvetica-Bold").text("Email: ", { continued: true });
    doc.font("Helvetica").text(waiverData.email);

    doc.font("Helvetica-Bold").text("Phone: ", { continued: true });
    doc.font("Helvetica").text(waiverData.phone);

    doc.font("Helvetica-Bold").text("Date of Birth: ", { continued: true });
    doc.font("Helvetica").text(waiverData.dateOfBirth);

    doc.font("Helvetica-Bold").text("Emergency Contact: ", { continued: true });
    doc.font("Helvetica").text(${waiverData.emergencyContactName} (${waiverData.emergencyContactPhone}));
    
    doc.font("Helvetica-Bold").text("Signing for Child: ", { continued: true });
    doc.font("Helvetica").text(waiverData.signingForChild ? "Yes" : "No");
    // doc.font("Helvetica-Bold").text("Agreement to Terms: ", { continued: true });
    // doc.font("Helvetica").text(waiverData.agreeToTerms ? "Yes" : "No");

    // ✅ Add child details if applicable
    if (waiverData.signingForChild && waiverData.child) {
      doc.moveDown();
      doc.moveDown();

      
      

      doc.font("Helvetica-Oblique").text("Child Information");
     
      doc.moveDown();
      

      doc.font("Helvetica-Bold").text("Child Name: ", { continued: true });
      doc.font("Helvetica").text(${waiverData.child.firstName} ${waiverData.child.lastName});
      
      doc.font("Helvetica-Bold").text("Child Date of Birth: ", { continued: true });
      doc.font("Helvetica").text(waiverData.child.dateOfBirth);
    }

    // Add Clauses
    doc.moveDown()
    doc.moveDown();

    doc.font("Helvetica-Oblique").text("Terms & Conditions");
    doc.moveDown();
    waiverData.clauses.forEach((clause) => {
      doc.font("Helvetica-Bold").text(clause.title);
      doc.font("Helvetica").text(clause.text, { width: 500 });
      doc.moveDown();
      doc.font("Helvetica-Bold").text("[x] ", { continued: true });
      doc.font("Helvetica").text(clause.acknowledgment);
      doc.moveDown()
      
    });
    doc.moveDown();
    doc.moveDown();
    doc.font("Helvetica-Oblique").text("Signature");
    doc.moveDown();
    doc.font("Helvetica-Bold").text("[x] ", { continued: true });
    doc.font("Helvetica").text("I agree to the terms and conditions of this liability waiver")
    doc.moveDown()
    if (waiverData.typedSignature) {
      
      doc.font("Helvetica-Bold").text("Signed by: ", { continued: true });
      doc.font("Helvetica").text(waiverData.typedSignature);
    }

    // ✅ Embed Signature Image if Available
    if (waiverData.signature) {
      try {
        const signatureBuffer = Buffer.from(
          waiverData.signature.replace(/^data:image\/png;base64,/, ""),
          "base64"
        );

        doc.moveDown();
        doc.font("Helvetica-Bold").text("Signature:");
        doc.image(signatureBuffer, { width: 150, height: 50 }); // ✅ Adjust size as needed
      } catch (err) {
        console.error("Error embedding signature image:", err);
      }
    }

    doc.end();
  });
};


// 🔹 Upload PDF to S3
const uploadToS3 = async (
  pdfBuffer,
  waiverId,
  waiverType,
  firstName,
  lastName
) => {
  const fileName = ${
    waiverType === "martial_arts" ? "MA" : "F"
  }_${firstName}${lastName}_${waiverId}.pdf

  const params = {
    Bucket: BUCKET_NAME,
    Key: fileName,
    Body: pdfBuffer,
    ContentType: "application/pdf",
  }

  console.log(Uploading PDF to S3: ${fileName})

  await s3.send(new PutObjectCommand(params))
}