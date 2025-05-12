import { CognitoUserPool } from "amazon-cognito-identity-js"

const poolData = {
  UserPoolId: "us-east-1_2026CSBmX", // replace if your pool ID is different
  ClientId: "78o168p3end6vv7hfk662jcmne", // your actual app client ID
}

export const userPool = new CognitoUserPool(poolData)
