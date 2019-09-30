import { makeRemoteExecutableSchema , makeExecutableSchema , introspectSchema , mergeSchemas } from 'graphql-tools';
import { gql } from "apollo-server"
import { HttpLink } from 'apollo-link-http';

import fetch from 'node-fetch';

import resolvers from '../resolvers';
// import * as typeDefs from './schema.graphql';

import { HASURA_GRAPHQL_API_URL , HASURA_ACCESS_KEY } from '../config';

/** 
 * GraphQL Schema
 **/
export const typeDefs = gql`
  scalar Upload

  type File {
    name: String!
    path: String!
    type: String!
  }

  type Query {
    files: [File]
  }

  type Mutation {
    uploadFiles(files: [Upload]!): [File]!
  }
`




const fileSchema = makeExecutableSchema({
  typeDefs,
  resolvers
});




const link = new HttpLink({ uri: HASURA_GRAPHQL_API_URL, fetch });

export default async () => {
  const schema = await introspectSchema(link);

  const executableRemoteSchema = makeRemoteExecutableSchema({
    schema,
    link,
  });

  // merge custom resolvers with Hasura schema
  return mergeSchemas({
    schemas: [
      fileSchema,
      executableRemoteSchema,
    ]
  });
}
/**
 * 
 * 
 * Remote schemas
 * https://github.com/hasura/graphql-engine/blob/5916b97b86fa30c29e35073a923472f84c6782a7/community/boilerplates/custom-resolvers/src/index.js#L27
 * 
 * https://www.apollographql.com/docs/graphql-tools/remote-schemas
 * 
 * Mutations
 * https://docs.hasura.io/1.0/graphql/manual/mutations/insert.html
 */