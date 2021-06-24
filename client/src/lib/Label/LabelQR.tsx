import { Item } from "../Item";
import bwipjs, { DrawingOptions } from 'bwip-js';
import { DrawingSVG } from '../types/BwipJsSvg';
import { message } from 'antd';
import { LabelConstituent } from './LabelConstituent';

// const bwipjs = import( 'bwip-js' );





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
            bcid: 'datamatrix',
            text: text,
            scale: scale,

            // width: props.width,
            height: height,
            monochrome: true,
            // includetext: true,            // Show human-readable text
            // textxalign: 'center',        // Always good to set this
        } );
    }

    get svgDataURL (): string {
        // get svg(): HTMLImageElement {
        // console.group( 'DrawingSVG' );
        if ( !this.encodedText ) {
            message.error( 'nothing is being encoded within the QR' );
            return;
        }
        let opts: DrawingOptions = {
            bcid: 'datamatrix',
            text: this.encodedText,



            // scale: scale,               // 3x scaling factor
            // width: props.width,
            // height: height,              // Bar height, in millimeters
            monochrome: true,
        };
        bwipjs.fixupOptions( opts );
        const src = bwipjs.render( opts, new DrawingSVG( opts, bwipjs.FontLib ) );
        console.log( { method: 'get svg ()', src, opts } );
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
            if ( this.properties.length === 1 && this.properties.includes( 'url' ) ) {
                result = this.item[ 'url' ];
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
