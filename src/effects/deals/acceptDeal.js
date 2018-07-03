import { GraphQLClient } from 'graphql-request';

import graphQLEndpoint from '../../constants/graphQLEndpoint';

const query = `
  mutation acceptDeal($uuid: String!) {
    acceptDeal(uuid: $uuid) {
      deal {
        dealID
        date
        agentName
        agentType
        leadSource
        dealType
        propertyAddress
        state
        city
        apartmentNumber
        managementOrCobrokeCompany
        price
        clientName
        clientEmail
        paymentsTotal
        deductionsTotal
        total
        agentNotes
        status
      }
      userErrors {
        field
        message
      }
      otherError
    }
  }
`;

const client = new GraphQLClient(graphQLEndpoint, {
  credentials: 'same-origin',
});

const acceptDeal = uuid => {
  let res;

  const variables = {
    uuid,
  };

  const finalResponseObj = {
    deal: null,
    otherError: null,
    userErrors: [],
  };

  return client
    .request(query, variables)
    .then(result => {
      res = result;
      console.log(res);

      const { acceptDeal: data } = res;
      const { deal, otherError, userErrors } = data;

      if (userErrors && userErrors.length) {
        finalResponseObj.userErrors = userErrors;
      }

      if (otherError) {
        finalResponseObj.otherError = otherError;
      }

      if (!finalResponseObj.error && !finalResponseObj.userErrors.length) {
        finalResponseObj.deal = deal;
      }

      return finalResponseObj;
    })
    .catch(err => {
      console.log(err);
      finalResponseObj.error = 'Error reaching the server';
      return finalResponseObj;
    });
};

export default acceptDeal;
