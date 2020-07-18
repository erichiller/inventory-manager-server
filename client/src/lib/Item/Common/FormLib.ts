
import { GenericItem } from "~item/Item";
import { is } from "~lib/UtilityFunctions";

type ItemGqlWithDefaultField<T extends GenericItem> = T & {
    default_fields?: Array<keyof T>;
};

export function applyDefaults<S extends GenericItem> ( fieldValues: ItemGqlWithDefaultField<S>, defaults: Partial<ItemGqlWithDefaultField<S>> ): ItemGqlWithDefaultField<S> {
    fieldValues.default_fields = Array.isArray( fieldValues.default_fields ) ? fieldValues.default_fields : [];
    Object.keys( defaults ).forEach( key => {
        if ( !fieldValues[ key ] 
            // && is<KeysOfType<ItemGqlWithDefaultField<S>, string>>( key, Object.keys( fieldValues ).includes( key ) ) 
            && is< keyof S>( key, true )
            ) {
            fieldValues[ key ] = defaults[ key ];
            fieldValues.default_fields.push( key );
        }
    } );
    return fieldValues;
}