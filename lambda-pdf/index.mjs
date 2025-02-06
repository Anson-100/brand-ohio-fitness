import { DynamoDBClient } from "@aws-sdk/client-dynamodb"
import { DynamoDBDocumentClient, PutCommand } from "@aws-sdk/lib-dynamodb"

// Initialize AWS DynamoDB Client
const dynamoClient = new DynamoDBClient({})
const dynamoDB = DynamoDBDocumentClient.from(dynamoClient)

export const handler = async event => {
  try {
    console.log("Received event:", JSON.stringify(event, null, 2))

    const requestBody = JSON.parse(event.body)
    const waiverId = `waiver_${Date.now()}`

    // Constructing waiver item for DynamoDB
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
      signature: requestBody.signature, // Base64 encoded signature (saved for future use)
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
      "Storing waiver in DynamoDB:",
      JSON.stringify(waiverItem, null, 2)
    )

    await dynamoDB.send(
      new PutCommand({
        TableName: "IT_LiabilityWaivers",
        Item: waiverItem,
      })
    )

    console.log("DynamoDB Put Response: Success")

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
