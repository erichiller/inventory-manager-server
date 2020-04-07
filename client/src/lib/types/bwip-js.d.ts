// // Type definitions for bwip-js 2.0.6
// // Project: bwip-js <https://github.com/metafloor/bwip-js>
// // Definitions by: Eric D Hiller <https://github.com/erichiller

// /// <reference types="node" />

// import { IncomingMessage as Request, ServerResponse as Response } from 'http';

// // declare module 'bwip-js';

// declare namespace BwipJs {
//     export function loadFont ( fontName: string, sizeMulti: number, fontFile: string ): void;
//     export function toBuffer ( opts: ToBufferOptions, callback: ( err: string | Error, png: Buffer ) => void ): void;


declare module 'bwip-js' {
    export interface DrawingOptions {
        bcid: string;
        text: string;

        parse?: boolean;
        parsefunc?: boolean;

        height?: number;
        width?: number;

        scaleX?: number;
        scaleY?: number;
        scale?: number;

        rotate?: RotateType;

        paddingwidth?: number;
        paddingheight?: number;

        monochrome?: boolean;
        alttext?: boolean;

        includetext?: boolean;
        textfont?: string;
        textsize?: number;
        textgaps?: number;

        textxalign?: 'offleft' | 'left' | 'center' | 'right' | 'offright' | 'justify';
        textyalign?: 'below' | 'center' | 'above';
        textxoffset?: number;
        textyoffset?: number;

        showborder?: boolean;
        borderwidth?: number;
        borderleft?: number;
        borderright?: number;
        bordertop?: number;
        boraderbottom?: number;

        barcolor?: string;
        backgroundcolor?: string;
        bordercolor?: string;
        textcolor?: string;

        addontextxoffset?: number;
        addontextyoffset?: number;
        addontextfont?: string;
        addontextsize?: number;

        guardwhitespace?: boolean;
        guardwidth?: number;
        guardheight?: number;
        guardleftpos?: number;
        guardrightpos?: number;
        guardleftypos?: number;
        guardrightypos?: number;

        sizelimit?: number;

        includecheck?: boolean;
        includecheckintext?: boolean;

        inkspread?: number;
        inkspreadh?: number;
        inkspreadv?: number;
    }

    export interface CanvasOptions extends DrawingOptions {
        /**
         * Most of the public methods of the bwip - js export use an options object.Only two values are required:
        **/

        /** The name of the barcode type / symbol. */
        bcid: string;
        /** The text to encode */
        text: string;

        /**
         * All remaining options are optional, though you may find some quite useful.
         * 
         * The options values can be divided into two parts, bwip - js specific options and BWIPP options.
         * The bwip-js options are:
         */

        /** The x-axis scaling factor.Must be an integer > 0. Default is 2. */
        scaleX?: Integer;

        /** The y-axis scaling factor.Must be an integer > 0. Default is scaleX. */
        scaleY?: Integer;

        /** Sets both the x-axis and y-axis scaling factors.Must be an integer > 0. */
        scale?: Integer;

        /** Allows rotating the image to one of the four orthogonal orientations. */
        rotate?: RotateT;

        /** Shorthand for setting paddingtop, paddingleft, paddingright, and paddingbottom. */
        padding?: string;

        /** Shorthand for setting `paddingleft` and `paddingright`. */
        paddingwidth?: number;

        /** Shorthand for setting `paddingtop` and `paddingbottom`. */
        paddingheight?: number;

        /** 
         * Sets the height of the padding area, in points, on the top of the barcode image.
         * Rotates and scales with the image. 
         * */
        paddingtop?: number;

        /**
         * Sets the width of the padding area, in points, on the left side of the barcode image.
         * Rotates and scales with the image.
         */
        paddingleft?: number;

        /**
         * Sets the width of the padding area, in points, on the right side of the barcode image.
         * Rotates and scales with the image.
         */
        paddingright?: number;

        /**
         * Sets the height of the padding area, in points, on the bottom of the barcode image.
         * Rotates and scales with the image.
         */
        paddingbottom?: number;

        /**
         * This is actually a BWIPP option but is better handled by the bwip-js drawing code.  
         * Takes either a hex RRGGBB or hex CCMMYYKK string value.
         */
        backgroundcolor?: ColorString;
    }

    export type Paths = Array & {
        ascent: number;
        descent: number;
        advance: number;
    };

    export interface Measurement {
        ascent: number;
        descent: number;
        width: number;
    }

    // TODO: requires other Drawing types
    export class Drawing {
        constructor (opts, ...args);
        scale( sx: number, sy: number);
        measure ( str: string, font: string, fwidth: number, fheight: number ): Measurement;
        init ( width: number, height: number ): void;
        line ( x0: number, y0: number, x1: number, y1: number, lw: number, rgb: string ): void;
        polygon ( pts: Points ): void;
        hexagon ( pts: Points, rgb: string ): void;
        ellipse ( x, y, rx, ry, ccw ): void; // TODO
        fill ( rgb: string ): void;
        text ( x, y, str, rgb, font ); // TODO
        end(): void;
    }
    /**
     * src: `src/drawing-builtin.js`
     */
    export class DrawingBuiltin extends Drawing {
        // TODO: theres a ton here, I'm only doing what's necessary
    }

    export class DrawingCanvas extends Drawing {
        constructor ( options: DrawingCanvasOptions, canvas: HTMLCanvasElement );
        image ( width, height ): { buffer: ImageData, ispng: false; };
        end (): void;
    }

    /**
     * `FixupOptions` within `exports.js`
     * Call this before passing your options object to a drawing constructor.
     * Modifies `opts` inline.
     * @param opts Options input to be transformed for BWIP operations
     */
    export function fixupOptions(opts: DrawingOptions): void;
    export namespace fixupOptions {
        function padding( a: number, b: number, c: number, s: number ): number;
    }
    // namespace 
    //     type: string;
    //     x: number;
    //     y: number;
    // } | {
    //     type: string;
    //     x: number;
    //     y: number;
    //     cx: number;
    //     cy: number;
    // } | {
    //     type: string;
    //     x: number;
    //     y: number;
    //     cx1: number;
    //     cy1: number;
    //     cx2: number;
    //     cy2: number;
    // } )[];

    export interface GlyphPoint {
        next;
        prev;
    }

    namespace stbtt {
        function stbtt_GetGlyphHMetrics( info: any, glyph_index: any ): {
            advanceWidth: any;
            leftSideBearing: any;
        }
    }

    export interface Glpyh {
        prev: GlyphPoint;
        next: GlyphPoint;
        pixels: Uint8Array;
        bytes: Uint8Array;
        cachekey: string;
        offet: 0;


        height: number;

        top: number;
        left: number;
        width: number;
        advance: number;
    }

    export namespace FontLib {

        /**
         * Always returns a valid font-id  
         * Default returns is `1` for OCR-B
         * @param name font name
         */
        function lookup ( name );

        /**
         * Not supported by stbtt
         * @throws {Error}
         */
        function monochrome ( mono ): void;
        
        
        function getglyph ( fontid, charcode, width, height ): Glpyh;
        
        
        function getpaths ( fontid, charcode, width, height ): Paths;


        /**
         * 
         * @param name 
         * @param data data must be the font data, either a binary or base64 encoded string.
         * @returns FontID
         */
        function loadFont(name, data): number;
        /**
         * 
         * @param name 
         * @param mult 
         * @param data data must be the font data, either a binary or base64 encoded string.
         * @returns FontID
         */
        function loadFont ( name, mult, data ): number;
        /**
         * **Note order: `y`,`x`**
         * @param name 
         * @param multy 
         * @param multx 
         * @param data data must be the font data, either a binary or base64 encoded string.
         * @returns FontID
         */
        function loadFont ( name, multy, multx, data ): number;
        function loadFont ( name /*...args*/ ): number;
    }

    /** Integer placeholder since JavaScript has no integer type */
    type Integer = number;


    /**
     * A string value.Must be one of:
     * * `'N'` : Normal( not rotated ).The default.
     * * `'R'` : Clockwise( right ) 90 degree rotation.
     * * `'L'` : Counter - clockwise( left ) 90 degree rotation.
     * * `'I'` : Inverted 180 degree rotation.
     */
    type RotateType = 'N' | 'R' | 'L' | 'I';

    /**
     * Takes either a hex RRGGBB or hex CCMMYYKK string value.
     */
    type ColorString = string;


    /** in `exports.js` it's `Render` */
    function Render ( params: DrawingOptions, drawing: Drawing ): Drawing;

    export const render = Render;

    export class BWIPJS {
        constructor ( drawing: Drawing );
    }


    /** must be the ID of an HTML Element that is present in the DOM */
    type HTMLElementID = string;

    declare namespace BwipJs {
        /**
         * bwipjs.toCanvas(canvas, options)
         * bwipjs.toCanvas(options, canvas)
         *
         * The Browser version of the library's functionality, which makes use of an HTMLCanvasElement for rendering.
         * Uses the built-in canvas drawing.  Identical rendering as toBuffer().
         * 
         * This function is synchronous and throws on error.
         * 
         * Browser usage only.
         * 
         * @param canvas can be an HTMLCanvasElement, or a Canvas Element's ID string / unique selector string for the canvas to render within.
         * @param opts are a bwip-js/BWIPP options object.
         * Returns the HTMLCanvasElement.
        **/
        function toCanvas (
            canvas: HTMLCanvasElement | string,
            opts: CanvasOptions
        ): HTMLCanvasElement;
        function toCanvas (
            opts: CanvasOptions,
            canvas: HTMLCanvasElement | string
        ): HTMLCanvasElement;

        export type render = Render;
    }

    export = BwipJs;

}


// export = BwipJs;
