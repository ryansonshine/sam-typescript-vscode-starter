import 'source-map-support/register';
import type { APIGatewayProxyHandler } from 'aws-lambda';

export const handler: APIGatewayProxyHandler = async event => {
  console.log('Processing event: ', event);
  const response = {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Go AWS SAM! Your function executed successfully!',
        input: event,
      },
      null,
      2
    ),
  };

  return Promise.resolve(response);
};
