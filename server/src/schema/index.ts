/** 
 * MUST USE graphql-tools-fork because of this issue with mergeSchemas
 * See:  
 * - https://github.com/apollographql/graphql-tools/pull/1206
 * - https://github.com/apollographql/graphql-tools/issues/1033
 * - https://github.com/graphql/graphql-js/issues/1997
 */
import { makeRemoteExecutableSchema, makeExecutableSchema, introspectSchema, mergeSchemas, ITypedef } from 'graphql-tools';
import { addResolveFunctionsToSchema } from 'apollo-server';

import { GQL_ENUMS as EpsonEnum } from '../schema/type/enum/epson';
import { GraphQLSchema, GraphQLObjectType, GraphQLScalarType, GraphQLString, GraphQLNonNull, GraphQLInt, GraphQLFloat } from 'graphql/type';

import { fileSchema } from './schema_ast';
import { resolvers, GraphQLSchemaResolvers } from '../resolvers';



const LabelCharacteristicT = new GraphQLObjectType( {
    name: 'LabelCharacteristic',
    description: 'Label characteristics and properties',
    fields: {
        widthMillimeters: { type: GraphQLNonNull( GraphQLInt ) },
        pinsLeft: { type: GraphQLNonNull( GraphQLInt ) },
        pinsPrint: { type: GraphQLNonNull( GraphQLInt ) },
        pinsRight: { type: GraphQLNonNull( GraphQLInt ) }
    }
} );


const PrinterLabelStatusT = new GraphQLObjectType( {
    name: 'PrinterLabelStatus',
    description: 'Printer and label status and properies',
    fields: {
        mediaType: { type: EpsonEnum.MEDIA_TYPE },
        mediaWidth: { type: GraphQLNonNull( GraphQLInt ) },
        labelCharacteristic: { type: LabelCharacteristicT },
        tapeColor: { type: EpsonEnum.TAPE_COLOR },
        textColor: { type: EpsonEnum.TEXT_COLOR }
    }
} );

const PrinterStatusT = new GraphQLObjectType( {
    name: 'PrinterStatus',
    description: 'Label characteristics and properties',
    fields: {
        labelType: { type: GraphQLNonNull( GraphQLString ) },
        uptime: { type: GraphQLNonNull( GraphQLInt ) },
        model: { type: GraphQLNonNull( GraphQLString ) },
        firmwareVersion: { type: GraphQLNonNull( GraphQLFloat ) },
        heightInch: { type: GraphQLFloat },
        heightMillimeter: { type: GraphQLFloat },
        labelStatus: { type: GraphQLNonNull( PrinterLabelStatusT ) },
    }
} );


/** 
 * second schema containing more advanced types than could be implemented using the gql syntax
 * resolve is being set by `addResolveFunctionsToSchema` wrapping this `GraphQLSchema` 
 **/
const enumSchema = addResolveFunctionsToSchema( {
    schema: new GraphQLSchema( {
        query:
            new GraphQLObjectType( {
                name: 'Query',
                // description: 'query root',
                fields: {
                    PrinterStatus: {
                        description: 'Retrieve Printer and Label status and properties',
                        type: PrinterStatusT,
                        // resolve: () => {
                        //     console.log( "RESOLVING PrinterStatus" );
                        //     return { color: '#f00' };
                        // }
                    },
                    // getMediaType: {
                    //     type:
                    // }
                }
            } ),

        types: [
            PrinterStatusT,
            PrinterLabelStatusT
        ]
    } ),
    resolvers: GraphQLSchemaResolvers
}
);

export const schema = enumSchema;



export default mergeSchemas( {
    schemas: [
        fileSchema,
        enumSchema
    ]
} );
/**
 *
 *
// const link = new HttpLink({
//   uri: HASURA_GRAPHQL_API_URL,
//   headers: {
//     "x-hasura-admin-secret": HASURA_ACCESS_KEY
//   },
//   fetch
// });

 * Remote schemas
 * https://github.com/hasura/graphql-engine/blob/5916b97b86fa30c29e35073a923472f84c6782a7/community/boilerplates/custom-resolvers/src/index.js#L27
 *
 * https://www.apollographql.com/docs/graphql-tools/remote-schemas
 *
 * Mutations
 * https://docs.hasura.io/1.0/graphql/manual/mutations/insert.html
 */