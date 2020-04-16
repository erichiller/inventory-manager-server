export * from './types/UtilityTypes';

export function buf2hex ( buffer: ArrayBuffer ): string { // buffer is an ArrayBuffer
    return Array.prototype.map.call( new Uint8Array( buffer ), x => ( '00' + x.toString( 16 ) ).slice( -2 ) ).join( '' );
}

export function toTitleCase ( s: string ): string {
    if ( [ 'ID', 'id'].includes(s) ){ return s; }
    return s.replace( '_', ' ' ).split( ' ' ).map( function ( word ) {
        return word.charAt( 0 ).toUpperCase() + word.slice( 1 ).toLowerCase();
    } ).join( ' ' );
}

export function filterObject ( o: object, allow: undefined | null | string[], exclude: undefined | null | string[]): object {

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



export function toUpperCamelCase ( s: string ): string {
    return s.split( '_' ).join( ' ' ).split( ' ' ).map( function ( word ) {
        return word.charAt( 0 ).toUpperCase() + word.slice( 1 ).toLowerCase();
    } ).join( '' );
}

export function toLowerCamelCase ( s: string ): string {
    return toUpperCamelCase( s ).charAt( 0 ).toLowerCase() + toUpperCamelCase( s ).substr( 1 );
}
