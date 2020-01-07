import { GraphQLEnumType, GraphQLEnumValueConfigMap } from "graphql/type";

import { MEDIA_TYPE as MediaTypeEnum, TAPE_COLOR, TEXT_COLOR } from '../../../lib/epson';
import { EXTENDED_ERROR as ExtendedErrorEnum } from '../../../lib/epson';

function makeGraphQLEnumType ( tsEnum: { [ id: string ]: string | number }, name: string ): GraphQLEnumType {
    const values: GraphQLEnumValueConfigMap = {};
    Object.keys(tsEnum).forEach( key => {
        if ( !( parseInt( key ) >= 0 ) ) { 
            values[key] = { value: tsEnum[key]};
        }
    });
    return new GraphQLEnumType({
        name: name,
        values: values
    });
}

export const GQL_ENUMS = {
    MEDIA_TYPE: makeGraphQLEnumType(MediaTypeEnum, 'MEDIA_TYPE'),
    EXTENDED_ERROR: makeGraphQLEnumType( ExtendedErrorEnum, 'EXTENDED_ERROR' ),
    TAPE_COLOR: makeGraphQLEnumType( TAPE_COLOR, 'TAPE_COLOR' ),
    TEXT_COLOR: makeGraphQLEnumType( TEXT_COLOR, 'TEXT_COLOR' ),
};


/**
 * Example hand written GraphQL Enum
 */
// export const RGB = new GraphQLEnumType( {
//     name: 'RGB',
//     values: {
//         RED: { value: '#f00' },
//         GREEN: { value: '#0f0' },
//         BLUE: { value: '#00f' }
//     }
// } );


