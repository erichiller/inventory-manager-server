import { QueryResult } from "@apollo/react-common";
import { QueryHookOptions } from 'react-apollo';

export function buf2hex ( buffer: ArrayBuffer ) { // buffer is an ArrayBuffer
    return Array.prototype.map.call( new Uint8Array( buffer ), x => ( '00' + x.toString( 16 ) ).slice( -2 ) ).join( '' );
}

export function toTitleCase ( s: string ) {
    return s.replace( '_', ' ' ).split( ' ' ).map( function ( word ) {
        return word.charAt( 0 ).toUpperCase() + word.slice( 1 ).toLowerCase();
    } ).join( ' ' );
}

export function filterObject( o: Object, allow: undefined | null | string[], exclude: undefined | null | string[]){

    let f: (key) => boolean = allow 
        ? (key) => allow.includes(key) 
        : exclude 
            ? (key) => ! exclude.includes(key)
            : (key) => true;

    return Object.keys( o )
        .filter( f )
        .reduce( ( obj, key ) => {
            obj[ key ] = o[ key ];
            return obj;
        }, {} );
}



export function toUpperCamelCase ( s: string ) {
    return s.split( '_' ).join( ' ' ).split( ' ' ).map( function ( word ) {
        return word.charAt( 0 ).toUpperCase() + word.slice( 1 ).toLowerCase();
    } ).join( '' );
}

export function toLowerCamelCase ( s: string ) {
    return toUpperCamelCase( s ).charAt( 0 ).toLowerCase() + toUpperCamelCase( s ).substr( 1 );
}

export type Union<A, B> = A & B;

export type ClassType<T> = Union<keyof T, new () => T>;


/**
 * Return Type of elements within an Array
 */
export type Unpacked<T> =
    T extends ( infer U )[] ? U :
    T extends ( ...args: any[] ) => infer U ? U :
    T extends Promise<infer U> ? U :
    T;

export type IQuery = ( baseOptions?: QueryHookOptions<any, any> ) => QueryResult;

export type QueryResultReturnKey<Q extends IQuery> = keyof Omit<Exclude<ReturnType<Q>[ 'data' ], undefined>, '__typename'>;

/** Returns Type that is the result of the Query , this is the type when fully unpacked, the result of the GraphQL query. */
export type QueryResultTypePlus<Q extends IQuery> = Unpacked<Exclude<ReturnType<Q>[ 'data' ], undefined>[ QueryResultReturnKey<Q> ]>;
