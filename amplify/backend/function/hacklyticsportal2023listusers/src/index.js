/* Amplify Params - DO NOT EDIT
	AUTH_HACKLYTICSPORTAL2023_USERPOOLID
	ENV
	REGION
Amplify Params - DO NOT EDIT */

const AWS = require("aws-sdk");

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = async (event) => {
  try {
    var params = {
      UserPoolId: process.env.AUTH_HACKLYTICSPORTAL2023_USERPOOLID,
      AttributesToGet: ["name", "email"],
    };

    AWS.config.update({
      region: process.env.USER_POOL_REGION,
      accessKeyId: process.env.AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.AWS_SECRET_KEY,
    });
    var cognitoidentityserviceprovider =
      new AWS.CognitoIdentityServiceProvider();
    let x = await new Promise((resolve, reject) => {
      cognitoidentityserviceprovider.listUsers(params, (err, data) => {
        if (err) {
          reject(err);
        } else {
          resolve(data);
        }
      });
    });
    var users = x.Users;
    if (users.length > 0) {
      return JSON.stringify({
        statusCode: 200,
        //  Uncomment below to enable CORS requests
        //  headers: {
        //      "Access-Control-Allow-Origin": "*",
        //      "Access-Control-Allow-Headers": "*"
        //  },
        body: { ok: 1, users: users },
      });
    } else {
      return JSON.stringify({
        statusCode: 400,
        //  Uncomment below to enable CORS requests
        //  headers: {
        //      "Access-Control-Allow-Origin": "*",
        //      "Access-Control-Allow-Headers": "*"
        //  },
        body: { ok: 0, error: "No users found in user pool." },
      });
    }
  } catch (err) {
    return JSON.stringify({
      statusCode: 500,
      //  Uncomment below to enable CORS requests
      //  headers: {
      //      "Access-Control-Allow-Origin": "*",
      //      "Access-Control-Allow-Headers": "*"
      //  },
      body: { ok: 0, error: err.message },
    });
  }
};
