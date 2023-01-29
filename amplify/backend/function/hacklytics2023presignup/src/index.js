/* Amplify Params - DO NOT EDIT
	API_HACKLYTICSPORTAL2023_GRAPHQLAPIENDPOINTOUTPUT
	API_HACKLYTICSPORTAL2023_GRAPHQLAPIIDOUTPUT
	API_HACKLYTICSPORTAL2023_GRAPHQLAPIKEYOUTPUT
	ENV
	REGION
Amplify Params - DO NOT EDIT */

const AWS = require("aws-sdk");

const GRAPHQL_ENDPOINT =
  process.env.API_HACKLYTICSPORTAL2023_GRAPHQLAPIENDPOINTOUTPUT;
const GRAPHQL_API_KEY =
  process.env.API_HACKLYTICSPORTAL2023_GRAPHQLAPIKEYOUTPUT;
const GRAPHQL_API_ID = process.env.API_HACKLYTICSPORTAL2023_GRAPHQLAPIIDOUTPUT;

const query = `
  query MyQuery {
    listAdminSettings {
      nextToken
      startedAt
      items {
        id
        participantEmails
        hacklyticsOpen
      }
    }
  }
    `;

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
export const handler = async (event, context, callback) => {
  console.log(`Trigger Function = EVENT: ${JSON.stringify(event)}`);

  try {
    // check if user email is in the database
    let email = event.request.userAttributes.email;
    let gtemail = event.request.userAttributes["custom:gtemail"];

    var params = {
      apiId: GRAPHQL_API_ID,
      domainName: GRAPHQL_ENDPOINT,
    };

    AWS.config.update({
      region: process.env.USER_POOL_REGION,
      accessKeyId: process.env.AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.AWS_SECRET_KEY,
    });
    var appsync = new AWS.AppSync();

    appsync.associateApi(params, function (err, data) {
      if (err) console.log(err, err.stack); // an error occurred
      else console.log(data); // successful response
    });
  } catch (err) {
    callback(err, event);
  }

  //   const options = {
  //     method: "POST",
  //     headers: {
  //       //   "Content-Type": "application/json",
  //       "x-api-key": GRAPHQL_API_KEY,
  //     },
  //     body: JSON.stringify({
  //       query,
  //     }),
  //   };

  //   const request = new Request(GRAPHQL_ENDPOINT, options);

  //   let body;
  //   let response;

  //   try {
  //     response = await fetch(request);
  //     body = await response.json();
  //     console.log(body);
  //     let items = body.data.listAdminSettings.items;
  //     console.log(items);
  //   } catch (err) {
  //     console.log(err);
  //     callback(err, event);
  //   }

  let err = new Error("error 2");
  callback(err, event);
};
