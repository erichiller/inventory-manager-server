import { gql } from "apollo-server";

import { resolvers } from '../resolvers';
import { makeExecutableSchema } from 'apollo-server';

/** 
 * GraphQL Schema
 **/
const typeDefs = gql`
    scalar Upload

    type File {
        # __typename: String
        name: String!
        path: String!
        type: String!
        base64: String!
    }

    type Query {
        files: [File]
    }

    """
    unsigned byte
    0 - 255
    """
    scalar uint8

    type OperationResult {
        result: Boolean!
    }

    type Mutation {
        uploadFiles(files: [Upload]!): [File]!
        """
        Send a label to be printed
        Image Buffer / Raster data arranged as [page][column][pixels] of uint8 to the printer
        """
        putLabelMonochromeBuffer(imageBuffer: [[[uint8]]]!): OperationResult
    }

`;

export const fileSchema = makeExecutableSchema( {
    typeDefs: typeDefs,
    resolvers: resolvers,
    logger: { log: e => console.log( "ERROR IN GRAPHQL", e ) }
} );