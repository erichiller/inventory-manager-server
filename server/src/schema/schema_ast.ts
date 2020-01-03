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
    PrinterStatus: PrinterStatus
  }

  type LabelCharacteristic {
    widthMillimeters: Int
    pinsLeft: Int
    pinsPrint: Int
    pinsRight: Int
  }

  type PrinterLabelStatus {
        # mediaType: MEDIA_TYPE;
        # mediaWidth: MEDIA_WIDTH;
        labelCharacteristic: LabelCharacteristic
        # /** NodeJS buffer */
        # bytes: Buffer;
  }

  type PrinterStatus {
    labelType: String!
    uptime: Int
    model: String
    firmwareVersion: Float
    heightInch: Float
    heightMillimeter: Float
    labelStatus: PrinterLabelStatus
  }
  
  scalar uint8

  type LabelMonochromeBuffer {
    # __typename: String
    imageBuffer: [[[uint8]]]
  }

  type Mutation {
    uploadFiles(files: [Upload]!): [File]!
    putLabelMonochromeBuffer(imageBuffer: [[[uint8]]]!): [LabelMonochromeBuffer]
  }

`;

export const fileSchema = makeExecutableSchema( {
    typeDefs: typeDefs,
    resolvers: resolvers
} );