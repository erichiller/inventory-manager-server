

import { v4 as UUIDv4 } from 'uuid';
import { EnumIconCategoryEnum } from '../../types/graphql';


class LabelConstituent {
    id: UUIDStringT;
    x: number;
    y: number;
    constructor ( options?: Partial<LabelConstituent> ) {
        if ( options && options.id ) {
            this.id = options.id;
        }
        this.id = UUIDv4();
        this.x = 0;
        this.y = 0;
    }

}


type UUIDStringT = string;
export type FormatOptionsT = "bold" | "italic" | "underline";



export class LabelText extends LabelConstituent {
    text: string;
    _fontSize: number;
    bold: boolean;
    italic: boolean;
    underline: boolean;


    get fontSize (): number {
        return this._fontSize;
    }
    set fontSize ( value: number ) {
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



export class LabelImage extends LabelConstituent {
    data: string;
    width?: number;
    height?: number;
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
