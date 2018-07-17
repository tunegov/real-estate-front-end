import { GraphQLClient } from 'graphql-request';
import graphQLEndpoint from '../../../constants/graphQLEndpoint';

const query = `
    mutation loginUser($input: LoginUserInput!) {
      loginUser(input: $input) {
        user {
          uuid
          role
          admin {
            isAdminOwner
          }
        }
        wasSuccessful
        userErrors {
          field
          message
        }
      }
    }
  `;

const client = new GraphQLClient(graphQLEndpoint, {
  credentials: 'same-origin',
});

async function loginUser(self, values) {
  let res;
  let response;
  let error;

  const variables = {
    input: {
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

  const { loginUser: data } = res;
  const { user } = data;

  if (!data.wasSuccessful) {
    finalResponseObj.error = data.userErrors.length
      ? data.userErrors[0].message
      : data.otherError;
  }

  if (user && user.admin && user.admin.isAdminOwner) {
    user.isAdminOwner = true;
  }

  if (!finalResponseObj.error) {
    self.setUser(user);
  }

  return finalResponseObj;
}

export default loginUser;
