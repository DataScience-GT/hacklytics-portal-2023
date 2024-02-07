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
    };

    AWS.config.update({
      region: process.env.USER_POOL_REGION,
      accessKeyId: process.env.AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.AWS_SECRET_KEY,
    });
    var cognitoidentityserviceprovider =
      new AWS.CognitoIdentityServiceProvider();

    let users = [];
    let paginationToken = null;

    do {
      const data = await cognitoidentityserviceprovider.listUsers({
        ...params,
        PaginationToken: paginationToken,
      }).promise();
      console.log(data); // send to cloudwatch

      users = users.concat(data.Users);
      paginationToken = data.PaginationToken;
    } while (paginationToken);

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
