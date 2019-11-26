import * as React from 'react';

import { v4 as UUIDv4 } from 'uuid';

import { EnumIconCategoryEnum } from '../types/graphql';
import { Integer } from '../types/uint8';




export type UUIDStringT = string;
export type FormatOptionsT = "bold" | "italic" | "underline";



class LabelExportConstituents<T> {
    texts: LabelText[];
    images: LabelImage[];
    qrs: LabelQR<T>[];
    // buffer: PixelMap;
    imgData: ImageData;
    // dataURL: string;
    width: Integer;
    height: Integer;
}



export class LabelExport<T> extends LabelExportConstituents<T> {
    uuid: UUIDStringT;

    // texts: LabelText[];
    // images: LabelImage[];
    // qrs: LabelQR<T>[];

    constructor ( constituents: LabelExportConstituents<T> );
    constructor ( uuid?: UUIDStringT );
    constructor ( props?: UUIDStringT | LabelExportConstituents<T> ) {
        super();
        if ( typeof props === "string" ) {
            this.uuid = props;
        } else {
            this.uuid = UUIDv4();
            if ( props ) {
                this.texts = props.texts;
                this.images = props.images;
                this.qrs = props.qrs;
                this.imgData = props.imgData;
            }
        }
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
        return this.qrs && this.texts === comparisonLabel.texts && this.qrs === comparisonLabel.qrs && this.images === comparisonLabel.images && this.imgData === comparisonLabel.imgData;
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



export class LabelQR<T> extends LabelConstituent {
    properties: [ Partial<keyof T> ];
    canvasElement: HTMLCanvasElement;
    dataURL: string;
}
