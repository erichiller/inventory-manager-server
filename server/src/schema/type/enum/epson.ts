import { GraphQLEnumType, GraphQLEnumValueConfigMap } from "graphql/type";

import { MEDIA_TYPE as MediaTypeEnum } from '../../../lib/epson';

function makeGraphQLEnumType ( tsEnum: { [ id: string ]: string | number }, name: string ): GraphQLEnumType {
    const values: GraphQLEnumValueConfigMap = {};
    Object.keys(tsEnum).forEach( key => {

        if ( !( parseInt( key ) >= 0 ) ) { 
            values[key] = { value: tsEnum[key]};
        }
    })
    return new GraphQLEnumType({
        name: name,
        values: values
    });
}

export const GQL_ENUMS = {
    MEDIA_TYPE: makeGraphQLEnumType(MediaTypeEnum, 'MEDIA_TYPE')
}


export const RGB = new GraphQLEnumType( {
    name: 'RGB',
    values: {
        RED: { value: '#f00' },
        GREEN: { value: '#0f0' },
        BLUE: { value: '#00f' }
    }
} );


