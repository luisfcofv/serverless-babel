import { hello } from './services/hello';

export const helloLambda = (event, context, callback) => {
  const result = hello({ name: 'World' });

  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: result,
      input: event,
    }),
  };

  callback(null, response);
};

export default { helloLambda };
