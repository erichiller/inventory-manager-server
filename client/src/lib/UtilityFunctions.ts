import { Integer } from './types/uint8';
import { Store } from 'antd/lib/form/interface';
import { Item } from './item';

export * from './types/UtilityTypes';

export function buf2hex ( buffer: ArrayBuffer ): string { // buffer is an ArrayBuffer
    return Array.prototype.map.call( new Uint8Array( buffer ), x => ( '00' + x.toString( 16 ) ).slice( -2 ) ).join( '' );
}

export function toTitleCase ( s: string ): string {
    /** if null return blank string */
    if ( !s || typeof s !== 'string' ) { return ''; }
    /** do not change `id` or `ID` */
    if ( [ 'ID', 'id' ].includes( s ) ) { return s; }
    /** string takes the form _0 (underscore, numeric) then this is assumed to be an ENUM with an underscore prefix to allow for starting numbers */
    if ( s.length >= 2 && s[ 0 ] === "_" && /[0-9]/.exec( s[ 1 ] ) !== null ) { return s.replace( /_/g, '' ); }
    /** if string is ALL CAPS return as is */
    if ( s.toUpperCase() === s ) { return s; }
    return s.replace( /_/g, ' ' ).split( ' ' ).map( function ( word ) {
        return word.charAt( 0 ).toUpperCase() + word.slice( 1 ).toLowerCase();
    } ).join( ' ' );
}

/**
 * Filter properties of object returning new object possessing only the requested properties.
 * `allow` and `exclude` are exclusive, they can not be supplied together. If they are `allow` will always take precedence.
 * @param o object to filter properties of
 * @param allow array of propertyname strings that should be **included**
 * @param exclude array of propertyname strings that should be **excluded**
 */
export function filterObject ( o: object, allow: undefined | null | string[], exclude: undefined | null | string[] ): object {
    let f: ( key ) => boolean = allow
        ? ( key ) => allow.includes( key )
        : exclude
            ? ( key ) => !exclude.includes( key )
            : ( key ) => true;

    return Object.keys( o )
        .filter( f )
        .reduce( ( obj, key ) => {
            obj[ key ] = o[ key ];
            return obj;
        }, {} );
}


export function filterObjectKeysWithProperty<T extends object> ( o: T, k: keyof T[ keyof T ] ): Array<keyof T> {
    let filteredObjects: Array<keyof T> = [];
    ( Object.keys( o ) as Array<keyof T> ).forEach( propertyValue => {
        if ( k in o[ propertyValue ] ) {
            filteredObjects.push( propertyValue );
        }
    } );
    return filteredObjects;
}
// should work but unused:
// export function filterObjectWithProperty<T> ( o: T, k: keyof T[ keyof T ] ): T[ keyof T ][] {
//     let filteredObjects: T[ keyof T ][] = [];
//     Object.keys( o ).forEach( propertyValue => {
//         if ( k in o[ propertyValue ] ) {
//             filteredObjects.push( o[ propertyValue ] );
//         }
//     } );
//     return filteredObjects;
// }
// export function filterObjectWithPropertiesHavingValue<T, V> ( o: T, k: keyof T, v: V ): T[ keyof T ][] {
//     let filteredObjects: T[ keyof T ][] = [];
//     Object.keys( o ).forEach( propertyValue => {
//         if ( k in o[ propertyValue ] ) {
//             filteredObjects.push( o[ propertyValue ] );
//         }
//     } );
//     return filteredObjects;
// }

// export function firstOfArrayOrNull<T> ( array: T[] ): T | null {
//     if ( Array.isArray( array ) && array.length > 0 ) {
//         return array[ 0 ];
//     }
//     return null;
// }
/**
 * If length of array is 0, return null
 * If match is specified, return the first element that matches.
 * If no match is found or match is not specified return the first element
 * @param array array to search
 * @param match element match
 */
export function matchFirstOfArrayOrNull<T> ( array: T[], match?: T ): T | null {
    if ( !Array.isArray( array ) || array.length === 0 ) {
        return null;
    }
    if ( match ) {
        return array.find( el => el === match ) || array[ 0 ];
    }
    return array[ 0 ];
}

/**
 * ParseInt, but it won't error when passed a number
 */
export function parseIntSafe ( input: string | number ): Integer {
    if ( typeof input === "number" ) { return input; }
    return parseInt( input );
}
/**
 * ParseFloat, but it won't error when passed a number, and it will return default if NaN
 */
export function parseFloatSafeWithDefault ( input: string | number, defaultValue: number ): number {
    if ( typeof input === "number" ) { return input; }
    let f = parseFloat( input );
    return f !== NaN ? f : defaultValue;
}

/**
 * Split at word boundaries and underscores, then rejoined in **`UpperCamelCase`** style.
 * @param s input string which (may) container underscores and spaces.
 */
export function toUpperCamelCase ( s: string ): string {
    return s.split( /[_ ]/ ).map( function ( word ) {
        return word.charAt( 0 ).toUpperCase() + word.slice( 1 ).toLowerCase();
    } ).join( '' );
}

/**
 * Split at word boundaries and underscores, then rejoined in **`lowerCamelCase`** style.
 * @param s input string which (may) container underscores and spaces.
 */
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
    if ( typeof n !== "number" ) { return n; }
    let curr = n.toFixed( max );
    // console.log( { 'f': 'toMinimumFixed', n, min, max, curr, n_type: typeof n } );
    if ( max > min && curr.substr( -1 ) === "0" ) {
        // console.log( { 'f': 'toMinimumFixed calling next', n, min, max, curr, n_type: typeof n, last: curr.substr( -1 ), is_zero: curr.substr( -1 ) === "0" } );
        return toMinimumFixed( n, min, max - 1 );
    }
    return curr;
}

/**
 * Elimnate duplicate elements within an array.
 * @param arr input array
 */
export function eliminateArrayDuplicates<T> ( arr: Array<T> ): Array<T> {
    return arr.filter( ( el, idx ) => arr.indexOf( el ) === idx );
}

/**
 * Log data and return same.
 * @param logparams arbitrary object to add to log message
 * @param input Value which is passed in, printed to the log, and returned unchanges
 */
export function transparentLog<T> ( logparams: { [ key: string ]: any; }, input: T ): T {
    console.log( logparams, input );
    return input;
}


/**
 * Return number of days in the given month
 *
 * @param dateString YYYY-MM-?DD formatted datestring
 */
export function getDaysInMonth ( dateString: string ): number;
/**
 * Return number of days in the given month
 *
 * @param month 1 based month; 1=January, 12=December
 * @param year year
 */
export function getDaysInMonth ( month: number, year: number ): number;
export function getDaysInMonth ( a: number | string, b?: number ): number {
    let year: number = 0;
    let month: number = 1;
    if ( typeof a === "string" ) {
        let split = a.split( '-', 2 );
        month = parseInt( split[ 1 ] );
        year = parseInt( split[ 0 ] );
    } else {
        month = a;
        year = b;
    }
    // Date is actually based on month 0=January,
    // but Day 0 is the last day in the previous month
    return new Date( year, month, 0 ).getDate();
}



// export function isNumberArray ( arg: any ): arg is number[] {
//     if ( Array.isArray( arg ) ) {
//         if ( arg.length !== 0 ) {
//             if ( typeof arg[ 0 ] === "number" ) {
//                 return true;
//             }
//         }
//     }
//     return false;
// }


// export function isStringArray ( arg: any ): arg is string[] {
//     if ( Array.isArray( arg ) ) {
//         if ( arg.length !== 0 ) {
//             if ( typeof arg[ 0 ] === "string" ) {
//                 return true;
//             }
//         }
//     }
//     return false;
// }

// export function isArray<T> ( arg: any, elementType: T ): arg is T[] {
//     if ( Array.isArray( arg ) ) {
//         if ( arg.length !== 0 ) {
//             if ( typeof arg[ 0 ] === typeof elementType ) {
//                 if ( typeof arg[0] === "object" ){
//                     return Object.keys(arg[0]) === Object.keys(elementType);
//                 }
//                 return true;
//             }
//         }
//     }
//     return false;
// }

/**
 * NOTE: `enumerable` on a property only controls whether it will appear in `for ... in` and does not add it to `Object.keys()`
 * @param value whether the wrapped property should be enumerable
 */
export function enumerable ( value: boolean ) {
    return function ( target: any, propertyKey: string, descriptor: PropertyDescriptor ) {
        descriptor.enumerable = value;
    };
}


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


/**
 * VERY basic function to ROUGHLY compute the number of items per page in table.  
 * **NOTE**: this math is entirely rough
 */
export function computeDefaultPagination (): number {
    return ( window.innerHeight - 50 ) / 22;
}