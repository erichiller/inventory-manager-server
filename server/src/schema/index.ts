import { makeRemoteExecutableSchema , makeExecutableSchema , introspectSchema , mergeSchemas } from 'graphql-tools';
import { gql } from "apollo-server"
import { HttpLink } from 'apollo-link-http';

import fetch from 'node-fetch';

import resolvers from '../resolvers';
// import * as typeDefs from './schema.graphql';

import { HASURA_GRAPHQL_API_URL , ACCESS_KEY } from '../config';

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