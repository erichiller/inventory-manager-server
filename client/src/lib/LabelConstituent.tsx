import * as React from 'react';

import { v4 as UUIDv4 } from 'uuid';

import { EnumItemClassEnum, Scalars, LabelAggregate } from './types/graphql';
import { Integer } from './types/uint8';
import { Label } from "./types/graphql";
import { Item } from "./item";
import bwipjs from 'bwip-js';
import { DrawingSVG } from './BwipJsSvg';
import { message, Alert } from 'antd';




export type UUIDStringT = Scalars[ 'uuid' ];
export type FormatOptionsT = "bold" | "italic" | "underline";



class LabelExportConstituents {
    texts: LabelText[];
    images: LabelImage[];
    qrs: LabelQR[];
}

interface LabelExportConstructorProps extends LabelExportConstituents {
    imgData: ImageData;
    width: Integer;
    height: Integer;
    item_id?: Integer;
}

// QueryResult


export class LabelExport implements Partial<Omit<Label, 'parent_of_aggregate' | 'item'>> {
    static DEFAULT_WIDTH = 300;
    id: UUIDStringT;

    // texts: LabelText[];
    // images: LabelImage[];
    // qrs: LabelQR[];

    // buffer: PixelMap;
    imgData: ImageData;
    // dataURL: string;
    width: Integer = LabelExport.DEFAULT_WIDTH;
    height: Integer;

    created_at: Scalars[ 'timestamptz' ];
    updated_at: Scalars[ 'timestamptz' ];
    edit_of_id?: Scalars[ 'uuid' ];
    parent_of: Label[] = [];
    item_id?: Integer;
    title?: string;
    item?: Item<any>;


    content: LabelExportConstituents = {
        texts: [],
        images: [],
        qrs: []
    };

    // private static isLabel( label: any ): is Label {

    // }

    /** 
     * () ; generatures uuid 
     * (Label) : uses imported Label from GraphQL
     * (id)
     */
    constructor ();
    constructor ( label: Label );
    constructor ( constituents: LabelExportConstructorProps );
    constructor ( id?: UUIDStringT );
    constructor ( props?: UUIDStringT | LabelExportConstructorProps | Label ) {
        console.group( "LabelExport constructor" );
        console.log( "Props Received:", { props } );
        if ( !props ) {
            this.id = UUIDv4();
            console.log( `LabelExport - constructor received no props, generating UUIDv4 = ${ this.id }` );
        } else if ( typeof props === "string" ) {
            this.id = props;
            console.log( `LabelExport - props as id '${ props }' received, setting as id: UUIDv4 = '${ this.id }'` );
        } else {
            if ( 'id' in props ) {
                console.log( `LabelExport - 'id' in props: ${ props.id }` );
                // console.log( "Object.getOwnPropertyNames(this)", Object.getOwnPropertyNames( this ) );
                // console.log( "Object.getOwnPropertyNames(props)", Object.getOwnPropertyNames( this ) );
                // console.log( "Object.keys(this)", Object.keys( this ) );
                console.log( "Object.keys(props)", Object.keys( props ) );
                Object.keys( props ).forEach( propName => {
                    this[ propName ] = props[ propName ];
                    console.log( `    LabelExport - 'id' in props, ${ propName } = `, this[ propName ], "\n set to", props[ propName ] );
                } );
            } else {
                this.id = UUIDv4();
                console.trace();
                console.warn( `LabelExport - props.id not received, creating new uuid as id: UUIDv4 ${ this.id }` );
            }
            if ( props ) {
                if ( 'content' in props ) {
                    this.content = props.content;
                    console.log( "LabelExport - 'content' in props", this.content );  /*******   HERE !!!!!!!!!!!!!!!!!!! *****/
                } else if ( props.texts ) {
                    console.log( "LabelExport - 'texts' in props" );
                    this.content = {
                        texts: props.texts.map( text => new LabelText( text ) ),
                        images: props.images,
                        qrs: props.qrs
                    };
                }
                if ( 'imgData' in props ) {
                    console.log( "LabelExport - 'imgData' in props" );
                    this.imgData = props.imgData;
                }
            }
        }
        console.log( "LabelExport constructor result=", this, this.content );
        console.groupEnd();
    }

    /**
     * 
     * @param values update values
     * @returns self
     */
    setValues ( values: LabelExportConstructorProps ): LabelExport {
        console.log( "LabelConstituent.setValues ( #LabelComponent )\n********************\n", { ...values, ...{ imgData_width: values.imgData.width, imgData_height: values.imgData.height } }, "\n********************\n" );
        this.content = {
            texts: values.texts,
            images: values.images,
            qrs: values.qrs
        };
        this.imgData = values.imgData;
        this.width = values.width;
        this.height = values.height;
        this.item_id = values.item_id;
        return this;
    }

    /**
     * see HTMLCanvasElement
     *  https://developer.mozilla.org/en-US/docs/Web/HTML/Element/canvas
     */
    get canvas (): HTMLCanvasElement {
        let canvas = document.createElement( 'canvas' );
        console.log( `LabelConstituent.canvas (getter) initial canvas create ( #LabelComponent )\n********************\n`,
            `\t imgData_width:     ${ this.imgData.width }\n`,
            `\t imgData_height:    ${ this.imgData.height }\n`,
            `\t canvas_width:      ${ canvas.width }\n`,
            `\t canvas_height:     ${ canvas.height }\n`,
            `********************\n` );

        let ctx = canvas.getContext( '2d' );
        if ( this.imgData instanceof ImageData ) {
            canvas.width = this.imgData.width;
            canvas.height = this.imgData.height;
            ctx.putImageData( this.imgData, 0, 0 );
        } else { console.warn( "can not create canvas without image data" ); console.trace(); }
        console.log( `LabelConstituent.canvas (getter) after fill canvas create ( #LabelComponent )\n********************\n`,
            `\t imgData_width:     ${ this.imgData.width }\n`,
            `\t imgData_height:    ${ this.imgData.height }\n`,
            `\t canvas_width:      ${ canvas.width }\n`,
            `\t canvas_height:     ${ canvas.height }\n`,
            `********************\n` );
        return canvas;
    }

    get thumbnail (): React.ReactElement {
        let image: HTMLImageElement = document.createElement( 'img' );
        image.width = 50;
        // image.
        image.src = this.canvas.toDataURL();
        // return <img width={ 50; } src = { icon.data } />;
        return <img width={50} style={{
            border: '1px solid #cacaca',
            marginRight: '16px',
            display: 'inline-block'
        }} src={this.canvas.toDataURL()} />;
    }

    public isEqual ( comparisonLabel: LabelExport ): boolean {
        return this.content.qrs && this.content.texts === comparisonLabel.content.texts && this.content.qrs === comparisonLabel.content.qrs && this.content.images === comparisonLabel.content.images && this.imgData === comparisonLabel.imgData;
    }
}

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
        if ( options && options.id ) {
            this.id = options.id;
        }
        this.id = UUIDv4();
        this.x = 0;
        this.y = 0;
        this.scaleX = 1.0;
        this.scaleY = 1.0;
        this.rotation = 0.0;
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

}



export class LabelText extends LabelConstituent {
    text: string = "";
    _fontSize: Integer;
    bold: boolean;
    italic: boolean;
    underline: boolean;

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
    properties: string[] = [];
    canvasElement: HTMLCanvasElement | HTMLOrSVGImageElement;
    dataURL: string;
    item: Item<any>;

    constructor ( options?: Partial<LabelConstituent> & { item: Item<any>; } ) {
        super();
        const { item } = options;
        this.item = item;
        if ( item ) {
            this.properties = Object.getOwnPropertyNames( item );
        }
    }

    get itemProperties (): string[] {
        return Object.getOwnPropertyNames( this.item );
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
            scale = 2;
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
            message.error('nothing is being encoded within the QR');
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
        const src = bwipjs.render( opts, new DrawingSVG( opts, bwipjs.FontLib ));
        console.log({method: 'get svg ()', src, opts});
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
        if ( this.properties ) {
            let result = this.properties.map( p => {
                console.log( "QRCanvas is adding props from labelQR", { property: p, value: this.item[ p ] } );
                return `${ p }: ${ this.item[ p ] }`;
            } ).join( '\n' ).replace( '_', ' ' );
            console.log( "LabelQR.encodeText()", result );
            return result;
        }
    }

    static is ( input: any ): input is LabelQR {
        return LabelConstituent.is( input ) && ( "properties" in input ) && ( "canvasElement" in input ) && ( "dataURL" in input );
    }
}
