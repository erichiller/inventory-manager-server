import { makeExecutableSchema } from 'graphql-tools';
import resolvers from '../resolvers';
// import * as typeDefs from './schema.graphql';

import {gql} from "apollo-server"

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




const executableSchema = makeExecutableSchema({
  typeDefs,
  resolvers
});

export default executableSchema;

