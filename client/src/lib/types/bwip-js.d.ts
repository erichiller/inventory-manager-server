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
        /** Barcode symbol name/type. */
        bcid: string;
        /** The text to encode. */
        text: string;

        /**
         * In supporting barcode symbologies, when the `parse` option is specified,
         * any instances of `^NNN` in the data field are replaced with their equivalent
         * ASCII value, useful for specifying unprintable characters. 
         **/
        parse?: boolean;
        /**
         * In supporting barcode symbologies, when the `parsefnc` option is specified,
         * non-data function characters can be specified by escaped combinations such
         * as `^FNC1`, `^FNC4` and `^SFT`. 
         **/
        parsefunc?: boolean;

        /**
         * Height of longest bar, in millimeters.
         **/
        height?: float;
        /**
         * Stretch the symbol to precisely this width, in millimeters.
         **/
        width?: float;

        /** The x-axis scaling factor. Must be an integer > 0. Default is 2. */
        scaleX?: int;
        /** The y-axis scaling factor. Must be an integer > 0. Default is scaleX. */
        scaleY?: int;
        /** Sets both the x-axis and y-axis scaling factors. Must be an integer > 0. */
        scale?: int;

        /** Rotates the image to one of the four orthogonal orientations. */
        rotate?: RotateType;

        /** Shorthand for setting `paddingleft` and `paddingright`. */
        paddingwidth?: number;
        /** Shorthand for setting `paddingtop` and `paddingbottom`. */
        paddingheight?: number;

        monochrome?: boolean;
        /** The human-readable text to use instead of the encoded text. */
        alttext?: string;

        /** Show human readable text for data in symbol. */
        includetext?: boolean;
        /** The font name to use for the text. */
        textfont?: string;
        /**
         * The font size of the text, in points.
         */
        textsize?: points;
        /**
         * The inter-character spacing of the text.
         */
        textgaps?: int;

        /** Specifies where to horizontally position the text. */
        textxalign?: 'offleft' | 'left' | 'center' | 'right' | 'offright' | 'justify';
        /** Specifies where to vertically position the text. */
        textyalign?: 'below' | 'center' | 'above';
        /**
         * The horizontal position of the text, in points, relative to the
         * default position.
         */
        textxoffset?: points;
        /**
         * 'The vertical position of the text, in points, relative to the
         * default position.
         */
        textyoffset?: points;

        /** Display a border around the symbol. */
        showborder?: boolean;
        /**
         * Width of a border, in points.
         */
        borderwidth?: points;
        /**
         * Left margin gap of the border, in points.
         */
        borderleft?: points;
        /**
         * Right margin gap of the border, in points.
         */
        borderright?: points;
        /**
         * Top margin gap of the border, in points.
         */
        bordertop?: points;
        /**
         * Bottom margin gap of the border, in points.
         */
        boraderbottom?: points;

        /** Color of the bars, either as a hex `RRGGBB` value or a hex `CCMMYYKK` value. */
        barcolor?: string;
        /** 
         * Color of a the image background, either as a hex RRGGBB value or a
         * hex CCMMYYKK value.  The default is a transparent background. 
         **/
        backgroundcolor?: string;
        /**
         * Color of the border, either as a hex RRGGBB value or a hex CCMMYYKK value.
         * You must specify `showborder` for this option to take effect.
         */
        bordercolor?: string;
        /** Color of the text, either as a hex RRGGBB value or a hex CCMMYYKK value. */
        textcolor?: string;

        /** Overrides the default positioning for the add on text. */
        addontextxoffset?: int;
        /** Overrides the default positioning for the add on text. */
        addontextyoffset?: int;
        addontextfont?: string;
        /** The font size of the add on text, in points. */
        addontextsize?: points;

        /** Display white space guards. */
        guardwhitespace?: boolean;
        /** Width of white space guards, in points. */
        guardwidth?: points;
        /** Height of white space guards, in points. */
        guardheight?: points;
        /** Amount of white space to guard to left of the symbol, in points. */
        guardleftpos?: points;
        /** Amount of white space to guard to right of the symbol, in points. */
        guardrightpos?: points;
        /** Vertical position of the guard symbols on the left, in points. */
        guardleftypos?: points;
        /** Vertical position of the guard symbols on the right, in points. */
        guardrightypos?: points;

        sizelimit?: number;

        /** Generate check digit(s) for symbologies where the use of check digits is */
        includecheck?: boolean;
        /** Show the calculated check digit in the human readable text. */
        includecheckintext?: boolean;

        /**
         * Amount by which to reduce the bar widths to compensate for inkspread in points.
         */
        inkspread?: pointsFloat;
        /**
         * For matrix barcodes, the amount by which the reduce the width of dark
         * modules to compensate for inkspread, in points.
         * **Note:** `inkspreadh` is most useful for stacked-linear type barcodes such as
         * 'PDF417 and Codablock F.
         */
        inkspreadh?: pointsFloat;
        /**
         * For matrix barcodes, the amount by which the reduce the height of dark
         * modules to compensate for inkspread, in points.
         */
        inkspreadv?: pointsFloat;


        /**
         * Did not find this in code
         {
             name: 'dotty', 
             type: 'boolean',
             desc: 'For matrix barcodes, render the modules as dots rather than squares.\n' +
            'The dot radius can be adjusted using the inkspread option.';
         }
         **/
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
        paddingtop?: points;

        /**
         * Sets the width of the padding area, in points, on the left side of the barcode image.
         * Rotates and scales with the image.
         */
        paddingleft?: points;

        /**
         * Sets the width of the padding area, in points, on the right side of the barcode image.
         * Rotates and scales with the image.
         */
        paddingright?: points;

        /**
         * Sets the height of the padding area, in points, on the bottom of the barcode image.
         * Rotates and scales with the image.
         */
        paddingbottom?: points;

        /**
         * This is actually a BWIPP option but is better handled by the bwip-js drawing code.  
         */
        backgroundcolor?: ColorString;
    }


    /**
     * Rotates the image to one of the four orthogonal orientations
     * A string value. Must be one of:
     * - `N` : Normal orientation
     * - `R` : Rotated right 90 degrees
     * - `L` : Rotated left 90 degrees
     * - `I` : Inverted, rotated 180 degrees
     */
    export type RotateT = 'N' | 'R' | 'L' | 'I';


    export type PathVertex = {
        x: number;
        y: number;
    } & (
            {
                type: 'M' | 'L';
            } | {
                type: 'Q';
                cx: number;
                cy: number;
            } | {
                type: 'C';
                cx1: number;
                cy1: number;
                cx2: number;
                cy2: number;
            } );
    export type Paths = Array<PathVertex> & {
        ascent: number;
        descent: number;
        advance: number;
    };

    export interface Measurement {
        ascent: number;
        descent: number;
        width: number;
    }

    export type Point = [ number, number ];

    /** Integer */
    type int = number;
    /** Floating point number */
    type float = number;
    /** Points, expressed as integer */
    type points = int;
    /** Dimension in points, expressed as a float */
    type pointsFloat = float;

    export class Drawing {
        constructor ( opts, ...args );
        /**
         * Adjust scale.  The return value is a two-element array with the
         * scale-x and scale-y values adjusted as desired.
         * 
         * The builtin drawing returns [ floor(sx), floor(sy) ] to ensure all
         * bars and spaces are sized uniformly.
         * 
         * Composite symbols cause this method to be called multiple times; be
         * consistent if you adjust the values.
         * @param sx ScaleX
         * @param sy ScaleY
         */
        scale ( sx: number, sy: number ): [ number, number ] | null | void;
        measure ( str: string, font: string, fwidth: number, fheight: number ): Measurement;
        init ( width: number, height: number ): void;
        line ( x0: number, y0: number, x1: number, y1: number, lw: number, rgb: string ): void;
        polygon ( pts: Point[] ): void;
        hexagon ( pts: Point[], rgb: string ): void;
        ellipse ( x: number, y: number, rx: number, ry: number, ccw: boolean ): void;
        fill ( rgb: string ): void;
        text ( x: number, y: number, str: string, rgb: string, font: Font ): void;
        end (): void;
        transform ( x: number, y: number ): string;
    }

    /**
     * src: `src/drawing-builtin.js`
     */
    export class DrawingBuiltin extends Drawing {
        // TODO: theres a ton here, I'm only doing what's necessary
    }

    export class DrawingCanvas extends Drawing {
        constructor ( options: CanvasOptions, canvas: HTMLCanvasElement );
        image ( width: number, height: number ): { buffer: ImageData, ispng: false; };
        end (): void;
    }

    /**
     * `FixupOptions` within `exports.js`
     * Call this before passing your options object to a drawing constructor.
     * Modifies `opts` inline.
     * @param opts Options input to be transformed for BWIP operations
     */
    export function fixupOptions ( opts: DrawingOptions ): void;
    export namespace fixupOptions {
        function padding ( a: number, b: number, c: number, s: number ): number;
    }

    export interface GlyphPoint {
        next;
        prev;
    }

    namespace stbtt {
        function stbtt_GetGlyphHMetrics ( info: any, glyph_index: any ): {
            advanceWidth: any;
            leftSideBearing: any;
        };
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

    export interface Font {
        name: string;
        width: number;
        height: number;
        dx: number;
    }

    export namespace FontLib {

        /**
         * Always returns a valid font-id  
         * Default returns is `1` for OCR-B
         * @param name font name
         */
        function lookup ( name ): number;

        /**
         * Not supported by stbtt
         * @throws {Error}
         */
        function monochrome ( mono ): void;


        function getglyph ( fontid: number, charcode: number, width: number, height: number ): Glpyh;


        function getpaths ( fontid: number, charcode: number, width: number, height: number ): Paths;


        /**
         * 
         * @param name 
         * @param data data must be the font data, either a binary or base64 encoded string.
         * @returns FontID
         */
        function loadFont ( name: string, data ): number;
        /**
         * 
         * @param name 
         * @param mult aka `size-mult`
         * @param data data must be the font data, either a binary or base64 encoded string.
         * @returns FontID
         */
        function loadFont ( name: string, mult, data ): number;
        /**
         * **Note order: `y`,`x`**
         * @param name 
         * @param multy 
         * @param multx 
         * @param data data must be the font data, either a binary or base64 encoded string.
         * @returns FontID
         */
        function loadFont ( name: string, multy: number, multx: number, data ): number;
        function loadFont ( name: string /*...args*/ ): number;
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
     * Takes either a hex `RRGGBB` or hex `CCMMYYKK` string value.
     */
    type ColorString = string;


    /** in `exports.js` it's `Render` */
    function Render ( params: DrawingOptions, drawing: Drawing ): string;


    export class BWIPJS {
        constructor ( drawing: Drawing );
        /** BWIPJS version */
        static VERSION: string;
    }
    export class BWIPP {
        /** Underlying BWIPP version */
        static VERSION: string;
    }


    /** must be the ID of an HTML Element that is present in the DOM */
    type HTMLElementID = string;

    // export namespace BwipJs {
    /**
     * `bwipjs.toCanvas(canvas, options)`  
     * `bwipjs.toCanvas(options, canvas)`
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
    export function toCanvas (
        canvas: HTMLCanvasElement | string,
        opts: CanvasOptions
    ): HTMLCanvasElement;
    export function toCanvas (
        opts: CanvasOptions,
        canvas: HTMLCanvasElement | string
    ): HTMLCanvasElement;

    // type render = Render;
    // }

    // export = BwipJs;
    export {
        Render as render,
        // * as bwipjs
    };

}


// export = BwipJs;
