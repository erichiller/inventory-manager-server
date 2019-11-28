import * as React from 'react';

import { v4 as UUIDv4 } from 'uuid';

import { EnumIconCategoryEnum, Scalars, LabelAggregate } from '../types/graphql';
import { Integer } from '../types/uint8';
import { Item, Label } from "../types/graphql";




export type UUIDStringT = string;
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

    created_at: Scalars['timestamptz'];
    is_template: boolean;
    edit_of_id?: Scalars['uuid'];
    parent_of: Label[] = [];
    item_id?: Integer;
    title: string;


    content: LabelExportConstituents<T>;

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
        if ( typeof props === "string" ) {
            this.id = props;
        } else if ( 'id' in props){
            Object.getOwnPropertyNames(this).forEach( propName => {
                this[propName] = props[propName];
            });
        } else {
            this.id = UUIDv4();
            if ( props ) {
                if ( props.texts ){
                    this.content = {
                        texts: props.texts,
                        images: props.images,
                        qrs: props.qrs
                    }
                }
            }
            this.imgData = props.imgData;
        }
    }

    setValues ( values: LabelExportConstructorProps<T>){
        this.content = {

            texts: values.texts,
            images: values.images,
            qrs: values.qrs
        }
        this.imgData = values.imgData;
        this.width = values.width;
        this.height = values.height;
    }

    /**
     * see HTMLCanvasElement
     *  https://developer.mozilla.org/en-US/docs/Web/HTML/Element/canvas
     */
    get canvas (): HTMLCanvasElement {
        let canvas = document.createElement( 'canvas' );
        let ctx = canvas.getContext( '2d' );
        ctx.putImageData( this.imgData, 0, 0 );
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


class LabelConstituent {
    id: UUIDStringT;
    x: Integer;
    y: Integer;
    constructor ( options?: Partial<LabelConstituent> ) {
        if ( options && options.id ) {
            this.id = options.id;
        }
        this.id = UUIDv4();
        this.x = 0;
        this.y = 0;
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
