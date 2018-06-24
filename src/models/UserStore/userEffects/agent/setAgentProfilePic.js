import { GraphQLClient } from 'graphql-request';

import graphQLEndpoint from '../../../../constants/graphQLEndpoint';

const query = `
    mutation setAgentProfilePic($input: setAgentProfilePicInput!) {
      setAgentProfilePic(input: $input) {
        wasSuccessful
        otherError
      }
    }
  `;

const client = new GraphQLClient(graphQLEndpoint, {
  credentials: 'same-origin',
});

const setAgentProfilePic = (agentID, fileName) => {
  let res;
  let response;
  let error;

  const variables = {
    input: {
      agentID,
      fileName,
    },
  };

  const finalResponseObj = {
    error,
  };

  return client
    .request(query, variables)
    .then(result => {
      res = result;

      const { setAgentProfilePic: data } = res;

      if (!data.wasSuccessful) {
        finalResponseObj.error = data.otherError;
      }

      return finalResponseObj;
    })
    .catch(err => {
      console.log(err);
      finalResponseObj.error = 'Error reaching the server';
      return finalResponseObj;
    });
};

export default setAgentProfilePic;
