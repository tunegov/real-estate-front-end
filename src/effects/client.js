import { GraphQLClient } from 'graphql-request';

const isDev = process.env.NODE_ENV !== 'production';

const endpoint = isDev ? 'http://localhost:4000/graphql' : '/api/graphql';
const credentials = isDev ? 'include' : 'same-origin';

export const graphQlClient = new GraphQLClient(endpoint, {
  credentials,
});
