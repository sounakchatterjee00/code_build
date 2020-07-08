'use strict';

module.exports.hello = async event => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Forced change- v7',
        input: event,
      },
      null,
      2
    ),
  };
};
