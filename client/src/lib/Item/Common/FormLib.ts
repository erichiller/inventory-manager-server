import { Store } from "antd/lib/form/interface";

import { Item } from "~item/Item";


export function applyDefaults<T extends Item<any>> ( fieldValues: Store, defaults: Partial<T> ): Store {
    fieldValues.default_fields = Array.isArray( fieldValues.default_fields ) ? fieldValues.default_fields : [];
    Object.keys( defaults ).forEach( key => {
        if ( !fieldValues[ key ] ) {
            fieldValues[ key ] = defaults[ key ];
            fieldValues.default_fields.push( key );
        }
    } );
    return fieldValues;
}