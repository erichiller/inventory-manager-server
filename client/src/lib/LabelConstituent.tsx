
import { v4 as UUIDv4 } from 'uuid';

import { EnumItemClassEnum, Scalars } from './types/graphql';
import type { Integer } from './types/uint8';
import { Item } from "./Item";
import bwipjs from 'bwip-js';
import { DrawingSVG } from './BwipJsSvg';
import { message, Alert } from 'antd';
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


class LabelConstituent extends DrawAttrs {

    constructor ( options?: Partial<LabelConstituent> ) {
        super();
        this.id = UUIDv4();
        this.x = 0;
        this.y = 0;
        this.scaleX = 1.0;
        this.scaleY = 1.0;
        this.rotation = 0.0;

        if ( options && options.id && options != null ) {
            for ( const key of Object.keys(options) ) {
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
    category?: EnumItemClassEnum;
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



export class LabelQR extends LabelConstituent {

    // properties: [ Partial<keyof T> ];
    // get properties() {
    //     return this.
    // }
    /**
     * `properties` are the CURRENT properties that constitute the text of the QR Image
     */
    properties: string[] = [];
    canvasElement: HTMLCanvasElement | HTMLOrSVGImageElement;
    dataURL: string;
    item: Item<any>;

    constructor ( options: Partial<LabelConstituent> & { item: Item<any>; } ) {
        super();
        const { item } = options;
        this.item = item;
        if ( item ) {
            this.properties = item.defaultQrProps;
        }
    }

    /**
     * `itemProperties` are the full set of possible properties of the item that can be in the QR Image
     */
    get itemProperties (): string[] {
        return this.item.labelProps;
    }


    setCanvas ( refresh: true ): HTMLCanvasElement;
    setCanvas ( refresh: true, height: number ): HTMLCanvasElement;
    setCanvas ( text?: string, height?: number ): HTMLCanvasElement;
    /**
     * 
     * @param text if text is not supplied, the currant instances will be;
     * @param height 
     */
    setCanvas ( text?: string | true, height: number = 20, el: HTMLCanvasElement | string = 'tempCanvas' ): HTMLCanvasElement {
        let scale = 1;
        if ( text === true ) {
            text = this.encodedText;
            el = ( this.canvasElement as HTMLCanvasElement ) ?? null;
            scale = 2; // TODO: try with scale = 1
        }
        return bwipjs.toCanvas( el, {
            bcid: 'datamatrix',       // Barcode type
            text: text,    // Text to encode
            scale: scale,               // 3x scaling factor
            // width: props.width,
            height: height,              // Bar height, in millimeters
            monochrome: true,

            // includetext: true,            // Show human-readable text
            // textxalign: 'center',        // Always good to set this
        } );
    }

    get svgDataURL (): string {
        // get svg(): HTMLImageElement {
        // console.group( 'DrawingSVG' );
        if ( ! this.encodedText ){
            message.error( 'nothing is being encoded within the QR' );
            return;
        }
        let opts = {
            bcid: 'datamatrix',       // Barcode type
            text: this.encodedText,    // Text to encode
            // scale: scale,               // 3x scaling factor
            // width: props.width,
            // height: height,              // Bar height, in millimeters
            monochrome: true,
        };
        bwipjs.fixupOptions( opts );
        const src = bwipjs.render( opts, new DrawingSVG( opts, bwipjs.FontLib ) );
        console.log( {method: 'get svg ()', src, opts} );
        // image.src = `data:image/svg+xml;base64,${ btoa(src) }`;
        
        // image.src = `data:image/svg+xml,${src}`;
        console.groupEnd();
        // return image;
        return `data:image/svg+xml;base64,${ btoa( src ) }`;
    }
    
    get svgImage (): HTMLImageElement {
        let image: HTMLImageElement = document.createElement( 'img' );
        image.src = this.svgDataURL ?? '';
        return image;
    }

    get encodedText (): string {
        let result: string = "";
        if ( this.properties ) {
            if ( this.properties.length === 1 && this.properties.includes( 'url' ) ){
                result = this.item['url'];
            } else {
                result = this.properties.map( p => {
                    console.log( "QRCanvas is adding props from labelQR", { property: p, value: this.item[ p ] } );
                    return `${ p }: ${ this.item[ p ] }`;
                } ).join( '\n' ).replace( '_', ' ' );
            }
        }
        console.log( "LabelQR.encodeText()", result, 
                        "\nfrom Properties: ", this.properties );
        return result;
    }

    static is ( input: any ): input is LabelQR {
        return LabelConstituent.is( input ) && ( "properties" in input ) && ( "canvasElement" in input ) && ( "dataURL" in input );
    }

}
