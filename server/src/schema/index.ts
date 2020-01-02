/** 
 * MUST USE graphql-tools-fork because of this issue with mergeSchemas
 * See:  
 * - https://github.com/apollographql/graphql-tools/pull/1206
 * - https://github.com/apollographql/graphql-tools/issues/1033
 * - https://github.com/graphql/graphql-js/issues/1997
 */
import { makeRemoteExecutableSchema , makeExecutableSchema , introspectSchema , mergeSchemas, ITypedef } from 'graphql-tools-fork';

import { RGB, GQL_ENUMS as EpsonEnum } from '../schema/type/enum/epson';
import { GraphQLSchema, GraphQLObjectType, GraphQLScalarType } from 'graphql/type';

import { fileSchema } from './schema_ast';
import { MEDIA_TYPE } from '../lib/epson';

const myStruct = new GraphQLObjectType( {
    name: 'myStruct',
    fields: {
        color: { type: RGB },
        mediaType: { type: EpsonEnum.MEDIA_TYPE }
    }
} );

const enumSchema = new GraphQLSchema({
    query:
        new GraphQLObjectType( {
            name: 'Query',
            // description: 'query root',
            fields: {
                getColor: {
                    description: 'get color, returns RGB',
                    type: myStruct,
                    // resolve: async () => RGB.getValue( 'RED' )
                    resolve: () => {
                        console.log( "RESOLVING getColor" );
                        // console.log( typeof MEDIA_TYPE );
                        // console.log( RGB.astNode);
                        // console.log( RGB.getValue( 'RED' ) );
                        // console.log( RGB.getValues() );
                        // return { color: 'RED' };
                        return { color: '#f00' };
                        // return { color: RGB.getValue( 'RED' ) };
                    }
                },
                // getMediaType: {
                //     type:
                // }
            }
        } ),

    types: [
        RGB,
        myStruct,
    ]
});

export const schema = enumSchema;



export default mergeSchemas( {
    schemas: [
        fileSchema,
        enumSchema
    ]
});
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