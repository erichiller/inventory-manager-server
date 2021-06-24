
import { v4 as UUIDv4 } from 'uuid';

import { EnumItemClassEnum, Scalars } from '../types/graphql';
import type { Integer } from '../types/uint8';
import { enumerable } from '~lib/UtilityFunctions';



export type UUIDStringT = Scalars[ 'uuid' ];
export type FormatOptionsT = "bold" | "italic" | "underline";


class DrawAttrs {

    id: UUIDStringT;
    x: Integer;
    y: Integer;
    /** from Transform - default 1.0 */
    scaleX: number;
    /** from Transform - default 1.0 */
    scaleY: number;
    /** from Transform - in decimal degrees, default 0.0 */
    rotation: number;

}


export class LabelConstituent extends DrawAttrs {

    constructor ( options?: Partial<LabelConstituent> ) {
        super();
        this.id = UUIDv4();
        this.x = 0;
        this.y = 0;
        this.scaleX = 1.0;
        this.scaleY = 1.0;
        this.rotation = 0.0;

        if ( options && options.id && options != null ) {
            for ( const key of Object.keys( options ) ) {
                this[ key ] = options[ key ];
            }
        }
    }

    get drawAttrs () { return undefined; }
    set drawAttrs ( newAttrs: Partial<DrawAttrs> ) {
        Object.entries( newAttrs ).forEach( ( [ k, v ] ) => {
            console.log( `drawAttrs ${ k } = ${ v }` );
            this[ k ] = v;
        } );
    }

    setDrawAttrs ( newAttrs: Partial<DrawAttrs> ) {
        console.log( "in setDrawAttrs()", newAttrs );
        Object.entries( newAttrs ).forEach( ( [ k, v ] ) => {
            console.log( `drawAttrs ${ k } = ${ v }` );
            this[ k ] = v;
        } );
    }

    static is ( input: any ): input is LabelConstituent {
        return ( "x" in input ) && ( "y" in input ) && ( "scaleX" in input ) && ( "scaleY" in input ) && ( "rotation" in input );
    }

    /**
     * Returns self as a simple object. `get prop(): string` converted to `{ prop: string }`
     */
    get simpleObject () { // TODO: to add type information I will have to make LabelConstituent generic
        let simpleObject: { [ key: string ]: any; } = {};
        for ( let propertyKey in this ) {
            simpleObject[ propertyKey ] = this[ propertyKey ];
        }
        return simpleObject;
    }

}



export class LabelText extends LabelConstituent {

    _text: string;
    // text: string = "";
    // _fontSize: Integer = 36; // default is 36
    _fontSize: Integer; // default is 36
    bold: boolean;
    italic: boolean;
    underline: boolean;

    @enumerable( true )
    get text (): string {
        return this._text;
    }
    set text ( value: string ) {
        this._text = value;
    }

    @enumerable( true )
    get fontSize (): Integer {
        return this._fontSize;
    }
    set fontSize ( value: Integer ) {
        if ( typeof value == "string" ) {
            value = parseInt( value );
        }
        this._fontSize = value;
    }

    get position () {
        return [ this.x, this.y ];
    }
    get signature () {
        return `${ this.text }-${ this.fontSize }-${ this.bold }-${ this.italic }-${ this.underline }-${ this.x }-${ this.y }`;
    }
    @enumerable( true )
    get formatOptions (): FormatOptionsT[] {
        let opts: FormatOptionsT[] = [];
        if ( this.bold ) { opts.push( "bold" ); }
        if ( this.italic ) { opts.push( "italic" ); }
        if ( this.underline ) { opts.push( "underline" ); }

        return opts;
    }

    /**
     *
     * @param key empty - called directly on this object
     *            - if this object is a property value, the property name
     *            - if it is in an array, the index in the array, as a string
     *            - an empty string if JSON.stringify() was directly called on this object  
     *            <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#toJSON_behavior>
     */
    toJSON ( key?: string ) {
        // no op for key
        let ret: Object = {};
        console.log( `LabelText.toJSON(${ key }) being called` );
        console.log(
            [
                ...Object.keys( this ).filter( element => element === "_fontSize" ? false : true )
                , "fontSize"
            ].forEach( k => ret[ k ] = this[ k ] )
        );
        console.log( "LabelText.toJSON() returns", ret );
        return ret;
    }

    static is ( input: any ): input is LabelText {
        return LabelConstituent.is( input ) && ( "text" in input );
    }

}


/**
 * -----------------------------------------------------------------------------
 */

export class LabelImage extends LabelConstituent {

    data: string;
    width: Integer;
    height: Integer;
    label?: string;
    class?: EnumItemClassEnum;
    description?: string;

    constructor ( options?: Partial<LabelImage> ) {
        super( options );
        // defaults
        this.width = 50;
        this.height = 50;

        if ( options ) {
            Object.getOwnPropertyNames( options ).forEach( propName => this[ propName ] = options[ propName ] );
        }
    }

    static is ( input: any ): input is LabelImage {
        return LabelConstituent.is( input ) && ( "data" in input ) && ( "width" in input ) && ( "height" in input );
    }

}




