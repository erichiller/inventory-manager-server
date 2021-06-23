import { Integer } from './types/uint8';
import { EnumUnitKeys, SubType, Unpacked, StringKeys } from './types/UtilityTypes';
import { EnumUnitEnum } from './types/graphql';
import { ColumnProps } from 'antd/lib/table';
import { LabeledValue } from 'antd/lib/select';
import { KeyboardEvent } from 'react';
import { KeyboardEventKey } from './types/KeyboardEventKey';
import { FormInstance } from 'antd/lib/form/hooks/useForm';

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
 * @param exclude array of propertyname strings that should be **excluded**. defaults to `null`
 */
export function filterObject<T, P extends StringKeys<T>> ( o: T, allow: Array<P> ): Pick<T, P>;
export function filterObject<T, P extends StringKeys<T>> ( o: T, allow: null | undefined, exclude: Array<P> ): Omit<T, P>;
export function filterObject<T, P extends StringKeys<T>> ( o: object, allow: undefined | null | Array<P>, exclude: undefined | null | Array<P> = null ): object {
    if ( o === null || o === undefined ){
        return {};
    }
    let f: ( key: P ) => boolean = allow
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
 * Returns `null` if the `inputArray.length === 0`
 * @param inputArray array to check length of
 */
export function lengthZeroArrayToNull<T extends ReadonlyArray<any>> ( inputArray: T ):  T | null  {
    if ( Array.isArray( inputArray ) && inputArray['length'] !== 0 ){
        // if ( inputArray[0] === undefined || inputArray[0] === null ){
        //     return null;
        // }
        return inputArray;
    }
    return null;
}


/**
 * ParseInt, but it won't error when passed a number
 */
export function parseIntSafe ( input: string | number | LabeledValue | ( string | number | LabeledValue )[] ): Integer {
    // export function parseIntSafe ( input: string | number | (string | number)[] ): Integer {
    if ( Array.isArray( input ) ){
        if ( input.length !== 1 ){
            throw new Error( "input is an array with more than one value; undefined behavior" );
        }
        input = input[0];
    }
    if ( typeof input === "number" ) { return input; }
    if ( typeof input === "string" ) { return parseInt( input ); }
    if ( typeof input !== "string" && "key" in input ) { return typeof input.value === "string" ? parseInt( input.value ) : input.value ; };
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


/**
 * Type Guard / Check for type equality to `number[]`
 * @param arg variable to be checked for type === `number[]`
 */
export function isNumberArray ( arg: any ): arg is number[] {
    if ( Array.isArray( arg ) ) {
        if ( arg.length !== 0 ) {
            if ( typeof arg[ 0 ] === "number" ) { // this is lazy and could be improved, but for now, fine.
                return true;
            }
        }
    }
    return false;
}


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
 * This is a very generalized `x is T` function  
 * input a type `T` and whether or not `subject` is of this type  
 * This allows for general type equality testing based on user defined input
 * @param subject variable whose type equality we desire
 * @param equality is `subject` equal to `T`
 * 
 * @typeparam T is the type that subject is being checked against.
 * 
 * @example
 * 
 */
export function is<T> ( subject: any, equality: boolean ): subject is T {
    return equality;
}



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
 * Sort using input strings that can be converted to a `Date`
 * @param propertyName Name of property that can be converted to a `Date`
 */
export function sortByDateString<T> ( propertyName: Extract<keyof SubType<T, string>, string> ) {
    return ( a: T, b: T ) => {
        // let nameA: string = a[propertyName.toString()]; // ignore upper and lowercase
        // let foo: string = a[propertyName].toString();
        let date_a = new Date( a[propertyName].toString() );
        let date_b = new Date( b[propertyName].toString() );
        return date_a < date_b ? -1 : 1;
    };
}
/**
 * Sort using input `Date` objects
 * @param propertyName Name of property with type `Date`
 */
export function sortByDate<T> ( propertyName: Extract<keyof SubType<T, Date>, string> ) {
    return ( a: T, b: T ) => {
        return a[propertyName] < b[propertyName];
    };
}

/**
 * Return antd table usable filter options.
 * @param e any object that has keys and values
 */
export function tableFilterFromEnum( e: object ){
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
    if ( ! ( typeof obj === "object" ) ){
        return obj;
    }
    console.log( {obj, obj_string: JSON.stringify( obj ), } );
    return JSON.parse( JSON.stringify( obj ) );
}

/**
 * Check if `objA` and `objB` are equal, even in nested properties.
 * @param objA first comparison object
 * @param objB second comparison object
 * @returns true when `objA` and `objB` are equal, even in nested properties.
 */
export function deepEqual( objA: any, objB: any ): objA is typeof objB {
    if ( ! ( ( typeof objA === "object" ) && ( typeof objB === "object" ) ) ){
        return false;
    }
    console.log( {objA, objB, } );
    console.log( {parsedA: JSON.stringify( objA, Object.keys( objA ).sort() ), parsedB: JSON.stringify( objB, Object.keys( objB ).sort() )} );
    return JSON.stringify( objA, Object.keys( objA ).sort() ) === JSON.stringify( objB, Object.keys( objB ).sort() );
}



export interface TypedColumnProps< T > extends Omit<ColumnProps<T>, 'dataIndex' | 'key'> {
    key: keyof T | [ keyof T, keyof T[keyof T] ] | 
        [ keyof T, keyof T[keyof T], keyof ( T[ keyof T][keyof T[keyof T]] ) ];
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

/**
 * Take an array of objects, select on of each objects properties values, and create a flat array
 * @param arr The array of objects to start with
 * @param property A string property of `arr` which will be flattened
 * @example
 * let arr = [
 *      {
 *          propA: [ 1 , 2 , 3]
 *      },
 *      {
 *          propA: 4
 *      },
 *      {
 *          propA: [5 , 6]
 *      }
 * ]
 * flatArrayObjectProperty(arr, 'propA');
 * // returns [ 1, 2, 3, 4, 5, 6 ] of type `number[]`
 */
export function flatArrayObjectProperty<T extends SubType<T, string>, K extends keyof T>( arr: T[], property: K ): Array< Unpacked<T[K]> > {
    let ret: Array<Unpacked<T[ K ]>> = [];
    arr.forEach( ( obj => {
        let propertyValue: Array< T[K] > = obj[property];
        if ( propertyValue == null ){
            return [];
        }
        if ( Array.isArray( propertyValue ) ){
            propertyValue.forEach( v => {
                ret.push( v );
            } );
        } else {
            ret.push( propertyValue );
        }
    } ) );
    return ret;
}

/**
 * Simulate xor which JavaScript does not have
 * @param a 
 * @param b 
 */
export function xor ( a: boolean, b: boolean ): boolean {
    return ( a ? 1 : 0 ) ^ ( b ? 1 : 0 ) ? true : false;
}

// export function eitherOfTypes<T>( inputs: [a: any, b: any] )

/** check if the values in `a` equal the values in `b` */
export function propValuesEqual ( a: object | Array<any>, b: object | Array<any> ): boolean {
    if ( xor( a === undefined, b === undefined ) || xor( a=== null, b===null ) ){
        return false;
    }
    for ( let i in a ){
        if( a[i] !== b[i] ){
            return false;
        }
    }
    return true;
}

export function formatCurrency( number: number, decPlaces: Integer = 2, decSep: string = ".", thouSep: string = "," ) {
    decPlaces = isNaN( decPlaces = Math.abs( decPlaces ) ) ? 2 : decPlaces,
    decSep = typeof decSep === "undefined" ? "." : decSep;
    thouSep = typeof thouSep === "undefined" ? "," : thouSep;
    let numberString: string;
    let sign = number < 0 ? "-" : "";
    let i = parseInt( numberString = Math.abs( Number( number ) || 0 ).toFixed( decPlaces ) );
    let iString: string = String( i );
    let j: number = 0;
    j = ( j = iString.length ) > 3 ? j % 3 : 0;

    return sign +
        ( j ? iString.substr( 0, j ) + thouSep : "" ) +
        iString.substr( j ).replace( /(\decSep{3})(?=\decSep)/g, "$1" + thouSep ) +
        ( decPlaces ? decSep + Math.abs( number - i ).toFixed( decPlaces ).slice( 2 ) : "" );
}

/**
 * Prevent form submission when user presses `Enter` key. Especially for use to keep `Enter` from submitting form within `<Select>`s so that autofill options can be triggered and selected.
 * For use within `onKeyPress` of `<Form>` element
 */
export function preventEnterKeyDefault ( event: KeyboardEvent ): void {
    if ( event.nativeEvent.key === KeyboardEventKey.Enter ) { event.preventDefault(); }
}
/**
 * Submit form when user presses enter key. For use within `onKeyPress` of `<Form>` element
 * @param form from `useForm`
 * @returns a function to submit the form with an enter key
 */
export function submitFormWithEnterKey ( form: FormInstance ): ( event: KeyboardEvent ) => void {
    return ( event: KeyboardEvent ) => {
        console.log( { log: "onKeyPress", target: event.target, currentTarget: event.currentTarget, event, key: event.key, native: event.nativeEvent.key } );
        if ( event.nativeEvent.key === KeyboardEventKey.Enter ) { form.submit(); }
    };
}




// export type WithOnConflict<T extends object, CONSTRAINT extends string, UPDATE extends string> = T & { 
//     on_conflict: {
//         constraint: CONSTRAINT;
//         update: UPDATE;
//     };
// };
// export type OnConflictInjectedDataGql<
//     T extends object,
//     P extends keyof T, 
//     CONSTRAINT extends string, 
//     UPDATE extends string
// > = 
//     T[P] extends object ?
//     Omit<T, P> & WithOnConflict<T[P], CONSTRAINT, UPDATE>
//     : T; 


// export function injectOnConflictGql<T extends object, P extends keyof T, C extends string, U extends string>( 
//     obj: T, 
//     prop: P, 
//     constraint: C, 
//     update_column: U 
// ): OnConflictInjectedDataGql<T, P, C, U> {
//     if ( typeof obj[prop] !== "object" ) {
//         throw TypeError( `property ${prop} of object is not an object, it is of type ${typeof obj[prop]}` );
//     }
//     obj[prop] = {
//         ...obj[prop],
//         on_conflict: {
//             constraint: constraint,
//             update_columns: update_column
//         }
//     };
//     return obj as OnConflictInjectedDataGql<T, P, C, U>;
// }


// type DataObjectT<T> = 
//     T extends Array<{ data: infer U}> ? 

// Unpacked<T> =
//     T extends (infer U)[] ? U :
//     T extends (...args: any[]) => infer U ? U :
//     T extends Promise<infer U> ? U :
//     T;

// export function injectOnConflictRecurringGql<T extends Array<{data: U; }>, U extends object>( arr: T, subObjProp: keyofconflictConstraint: string, conflictColumn: keyof U ){
//     if ( ! Array.isArray(obj) || obj)


// }



// interface LogMessageParameters {
//     /** class */
//     c: string;
//     /** event */
//     e: string;
//     /** message */
//     m: string;
// }

// // type LogT = ( message: LogMessageParameters, data: object ) => void;
// interface LocalLogT {
//     ( message: string, data: object ): void;
// }
// // TODO: make a global version, have it return a pre-prefixed (with `cls`) function ; have it remove duplicates
// const log: LocalLogT = ( msg, data ) => console.log( {cls: 'PopOverMenu', msg}, data );
