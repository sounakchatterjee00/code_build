'use strict';

module.exports.hello = async event => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Go Serverless v 3.0!',
        input: event,
      },
      null,
      2
    ),
  };
};
