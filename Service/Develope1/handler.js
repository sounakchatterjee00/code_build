'use strict';

module.exports.hello = async event => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Forced change1',
        input: event,
      },
      null,
      2
    ),
  };
};