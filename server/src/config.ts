// static configs

export const HASURA_GRAPHQL_ENGINE_URL = process.env.HASURA_GRAPHQL_ENGINE_URL || `http://pgsql-gql:8080`;

export const HASURA_GRAPHQL_API_URL = HASURA_GRAPHQL_ENGINE_URL + '/v1alpha1/graphql';

export const ACCESS_KEY = process.env.X_HASURA_ACCESS_KEY;

export const PORT = 8080;