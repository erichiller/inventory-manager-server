import { Integer } from './types/uint8';
import { Store } from 'antd/lib/form/interface';
import { Item, ItemHardwareFastenerScrewMachine } from './item';
import { EnumUnitKeys, SubType } from './types/UtilityTypes';
import { EnumUnitEnum } from './types/graphql';
import { GenericItem } from './item/Item';
import { ColumnProps } from 'antd/lib/table';

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
export function filterObject<T, P extends keyof T> ( o: T, allow: Array<P>, exclude: null | undefined ): Pick<T, P>;
export function filterObject<T, P extends keyof T> ( o: T, allow: null | undefined, exclude: Array<P> ): Omit<T, P>;
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
 * Decorator to mark a property as enumerable.  
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



/**
 * Accept Unit enum and return the string for representation of the unit system's dimensions
 * @param sys EnumUnit or its keys
 */
export function getUnitFromUnitSystem ( sys: EnumUnitKeys | EnumUnitEnum ) {
    switch ( sys ) {
        case EnumUnitEnum.metric:
        case 'metric':
            return "mm";
        case EnumUnitEnum.usc:
        case 'usc':
            return "in.";
        default:
            return '';
    }
}


/** simple sort function to order strings, not case sensitive */
export function sortByCaseInsensitiveText<T> ( propertyName: Extract<keyof SubType<T, string>, string> ) {
    return ( a: T, b: T ) => {
        let nameA: string = a[propertyName.toString()]?.toUpperCase(); // ignore upper and lowercase
        let nameB: string = b[propertyName.toString()]?.toUpperCase(); // ignore upper and lowercase
        if ( nameA < nameB ) {
            return -1;
        }
        if ( nameA > nameB ) {
            return 1;
        }
        // names must be equal
        return 0;
    };
}
/**
 * simple sort function to order numbers 
 * @returns
 * * < 0 = a comes first
 * * = 0 = tied  ;  _Note: the ECMAscript standard does not guarantee this behavior, thus, not all browsers (e.g. Mozilla versions dating back to at least 2003) respect this._
 * * > 0 = b comes first
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort}
 * */
export function sortByNumber<T> ( propertyName: Extract<keyof SubType<T, number>, string> ) {
    return ( a: T, b: T ) => {
        return parseFloat( b[ propertyName ].toString() ) - parseFloat( a[ propertyName ].toString() );
    };
}

/**
 * Return antd table usable filter options.
 * @param e any object that has keys and values
 */
export function tableFilterFromEnum( e: object){
    return Object.keys( e ).map( k => {
        return {
            text: toTitleCase( k ),
            value: k
        };
    } );
}

/**
 * Returns a copy of the input object with no references to the input object.
 * @param obj object to copy
 * @returns new object with no references to input object
 * 
 * @description
 * Currently this uses JSON parse, stringify, which seems like a hack, but thats the best I've found.
 * Maybe using a recursive `Object.assign` would be faster?
 * 
 * **foo**
 * 
 * @see 
 * - {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign MDN - Object.assign}
 * - {@link https://stackoverflow.com/questions/59140106/angular-how-can-i-clone-an-object-in-typescript Stack Overflow - How to clone object in TypeScript}
 */
export function deepCopy<T extends Object>( obj: T ): T {
    return JSON.parse( JSON.stringify( obj ) );
}



export interface TypedColumnProps<T> extends Omit<ColumnProps<T>, 'dataIndex' | 'key'> {
    key: keyof T;
    dataIndex?: keyof T;
}




/**
 * Quick function to create ColumnProps for use in Ant Design Table
 * @param columns When providing a ColumnProps object, only the key is needed (unless custom props are required), `title` and `dataIndex` will be auto-added.
 *
 * @description Breakpoint
 * options: 'xxl' | 'xl' | 'lg' | 'md' | 'sm' | 'xs';
 * ```
 * label | definition
 * ------|------------
 * xs    | '(max-width: 575px)',
 * sm    | '(min-width: 576px)',
 * md    | '(min-width: 768px)',
 * lg    | '(min-width: 992px)',
 * xl    | '(min-width: 1200px)',
 * xxl   | '(min-width: 1600px)',
 * ```
 * @see {@link https://github.com/ant-design/ant-design/blob/015109b42b85c63146371b4e32b883cf97b088e8/components/_util/responsiveObserve.ts#L1 antd Table Breakpoints}
 *
 */
export function makeColumn<T> ( columns: Array<keyof T | TypedColumnProps<T>> ): Array<ColumnProps<T>>;
export function makeColumn<T> ( keys: Array<keyof T> ): ColumnProps<T>;
export function makeColumn<T> ( key: keyof T ): ColumnProps<T>;
export function makeColumn<T> ( key:
    keyof T
    | Array<keyof T>
    | Array<
        keyof T
        | TypedColumnProps<T>
    > ): any {
    return ( !Array.isArray( key ) ? [ key ] : key ).map( k => {
        let kKey: string = typeof k === 'object' ? k.key as string : k as string;
        return Object.assign(
            {},
            {
                key: kKey,
                title: toTitleCase( kKey ),
                dataIndex: kKey,
            },
            typeof k === 'object' ? k : {}
        );
    } );
}

/**
 * 
 * @param property keyof object to be filtered
 * @param optionObject 
 */
export function commonFilterConfig<T> ( property: Extract<keyof T, string>, optionObject: object ) {
    return {
        filters: tableFilterFromEnum( optionObject ),
        filterMultiple: true,
        onFilter: ( value: string | number | boolean, record: T ) => record[ property as string ] === value,
    };
}