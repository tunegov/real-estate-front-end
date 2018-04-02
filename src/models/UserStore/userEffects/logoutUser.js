import { GraphQLClient } from 'graphql-request';

const endpoint = '/api/graphql';

const query = `
    mutation logoutUser {
      logoutUser {
        wasSuccessful
        userError
      }
    }
  `;

const client = new GraphQLClient(endpoint, { credentials: 'same-origin' });

async function logoutUser(self) {
  let res;
  let response;
  let error;

  const finalResponseObj = {
    response,
    error,
  };

  try {
    res = await client.request(query);
  } catch (err) {
    console.log(err);
    finalResponseObj.error = 'Error reaching the server';
    return finalResponseObj;
  }

  const { logoutUser: data } = res;

  if (!data.wasSuccessful) {
    finalResponseObj.error = data.userError;
  }

  if (!finalResponseObj.error) {
    self.unsetUser();
  }

  return finalResponseObj;
}

export default logoutUser;
