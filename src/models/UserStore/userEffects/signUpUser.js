import { GraphQLClient } from 'graphql-request';

const endpoint = '/api/graphql';

const query = `
    mutation registerUser($input: RegisterUserInput!) {
      registerUser(input: $input) {
        user {
          uuid
          roles
        }
        wasSuccessful
        userErrors {
          field
          message
        }
      }
    }
  `;

const client = new GraphQLClient(endpoint, { credentials: 'same-origin' });

async function signUpUser(self, values) {
  let res;
  let response;
  let error;

  const variables = {
    input: {
      firstName: values.firstName,
      lastName: values.lastName,
      email: values.email,
      password: values.password,
    },
  };

  const finalResponseObj = {
    response,
    error,
  };

  try {
    res = await client.request(query, variables);
  } catch (err) {
    console.log(err);
    finalResponseObj.error = 'Error reaching the server';
    return finalResponseObj;
  }

  const { registerUser: data } = res;
  const { user } = data;

  if (!data.wasSuccessful) {
    finalResponseObj.error =
      data.userErrors.length ? data.userErrors[0].message : data.otherError;
  }

  if (!finalResponseObj.error) {
    self.setUser(user);
  }

  return finalResponseObj;
}

export default signUpUser;
