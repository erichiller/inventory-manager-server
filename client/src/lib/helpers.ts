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

/**
 * @summary
 * Returns a string that has _at least_ `min` number of digits after the decimal and no more than `max`.  
 * If a string is passed in, it is immediately returned.
 * 
 * @param n number
 * @param min minimum number of decimal places
 * @param max maximum number of decimal places. Defaults to 4
 * 
 * @example
 * input: 4.0, 2  => 4.00
 * input: 4.12, 1  => 4.12
 * input: 4.95672, 2, 3  => 4.956
 */
export function toMinimumFixed ( n: number | string, min: 0 | 1 | 2 | 3 | 4, max: number = 4 ): string {
    if ( typeof n !== "number"){ return n; }
    let curr = n.toFixed(max);
    // console.log( { 'f': 'toMinimumFixed', n, min, max, curr, n_type: typeof n } );
    if ( max > min && curr.substr( -1 ) === "0" ) {
        // console.log( { 'f': 'toMinimumFixed calling next', n, min, max, curr, n_type: typeof n, last: curr.substr( -1 ), is_zero: curr.substr( -1 ) === "0" } );
        return toMinimumFixed(n, min, max - 1);
    }
    return curr;
}