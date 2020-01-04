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
        """
        Retrieve Printer and Label status and properties
        """
        PrinterStatus: PrinterStatus!
    }


    """
    Current Label size and that size's properties.
    """
    type LabelCharacteristic {
        widthMillimeters: Int!
        pinsLeft: Int!
        pinsPrint: Int!
        pinsRight: Int!
    }

    """
    Label characteristics and properties
    """
    type PrinterLabelStatus {
        # mediaType: MEDIA_TYPE;
        # mediaWidth: MEDIA_WIDTH;
        labelCharacteristic: LabelCharacteristic
        # /** NodeJS buffer */
        # bytes: Buffer;
    }

    """
    Printer and label status and properies
    """
    type PrinterStatus {
        labelType: String!
        uptime: Int!
        model: String!
        firmwareVersion: Float!
        heightInch: Float
        heightMillimeter: Float
        labelStatus: PrinterLabelStatus!
    }
  
    """
    unsigned byte
    0 - 255
    """
    scalar uint8

    """
    Image Buffer / Raster data arranged as [page][column][pixels] of uint8 to the printer
    """
    type LabelMonochromeBuffer {
        # __typename: String
        imageBuffer: [[[uint8]]]!
    }

    type Mutation {
        uploadFiles(files: [Upload]!): [File]!
        """
        Send a label to be printed
        """
        putLabelMonochromeBuffer(imageBuffer: [[[uint8]]]!): [LabelMonochromeBuffer]
    }

`;

export const fileSchema = makeExecutableSchema( {
    typeDefs: typeDefs,
    resolvers: resolvers
} );