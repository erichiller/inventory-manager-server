import * as React from 'react';

import { v4 as UUIDv4 } from 'uuid';

import { EnumIconCategoryEnum, Scalars, LabelAggregate } from '../types/graphql';
import { Integer } from '../types/uint8';
import { Item, Label } from "../types/graphql";




export type UUIDStringT = Scalars[ 'uuid' ];
export type FormatOptionsT = "bold" | "italic" | "underline";



class LabelExportConstituents<T> {
    texts: LabelText[];
    images: LabelImage[];
    qrs: LabelQR<T>[];
}

interface LabelExportConstructorProps<T> extends LabelExportConstituents<T> {
    imgData: ImageData;
    width: Integer;
    height: Integer;
}


export class LabelExport<T> implements Omit<Label, 'parent_of_aggregate'> {
    id: UUIDStringT;

    // texts: LabelText[];
    // images: LabelImage[];
    // qrs: LabelQR<T>[];

    // buffer: PixelMap;
    imgData: ImageData;
    // dataURL: string;
    width: Integer;
    height: Integer;

    created_at: Scalars[ 'timestamptz' ];
    is_template: boolean = false;
    edit_of_id?: Scalars[ 'uuid' ];
    parent_of: Label[] = [];
    item_id?: Integer;
    title?: string;


    content: LabelExportConstituents<T> = {
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
    constructor ( constituents: LabelExportConstructorProps<T> );
    constructor ( id?: UUIDStringT );
    constructor ( props?: UUIDStringT | LabelExportConstructorProps<T> | Label ) {
        console.group( "LabelExport constructor" );
        console.log( "Props Received:", { props } );
        if ( !props ) {
            this.id = UUIDv4();
            console.warn( `LabelExport - no props received, generating UUIDv4 = ${ this.id }` );
            console.trace();
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
                    console.log( "LabelExport - 'content' in props", this.content );
                } else if ( props.texts ) {
                    console.log( "LabelExport - 'texts' in props" );
                    this.content = {
                        texts: props.texts,
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
    setValues ( values: LabelExportConstructorProps<T> ): LabelExport<T> {
        this.content = {
            texts: values.texts,
            images: values.images,
            qrs: values.qrs
        };
        this.imgData = values.imgData;
        this.width = values.width;
        this.height = values.height;
        return this;
    }

    /**
     * see HTMLCanvasElement
     *  https://developer.mozilla.org/en-US/docs/Web/HTML/Element/canvas
     */
    get canvas (): HTMLCanvasElement {
        let canvas = document.createElement( 'canvas' );
        let ctx = canvas.getContext( '2d' );
        if ( this.imgData instanceof ImageData ) {
            ctx.putImageData( this.imgData, 0, 0 );
        } else { console.warn( "can not create canvas without image data" ); console.trace(); }
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

    public isEqual ( comparisonLabel: LabelExport<any> ): boolean {
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
        this.scaleX     = 1.0; 
        this.scaleY     = 1.0;
        this.rotation   = 0.0;
    }

    set drawAttrs(newAttrs: Partial<DrawAttrs>){
        Object.entries(newAttrs).forEach( ([k, v]) => this[k] = v );
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
        console.log(`LabelText.toJSON(${key}) being called`);
        console.log(
            [
                ...Object.keys( this ).filter( element => element === "_fontSize" ? false : true )
                , "fontSize"
            ].forEach( k => ret[ k ] = this[ k ] )
        );
        console.log("LabelText.toJSON() returns", ret);
        return ret;
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
    category?: EnumIconCategoryEnum;
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
}



export class LabelQR<T extends Item> extends LabelConstituent {
    properties: [ Partial<keyof T> ];
    canvasElement: HTMLCanvasElement;
    dataURL: string;
}
