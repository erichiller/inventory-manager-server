// Type definitions for bwip-js 3.0.1
// Project: bwip-js <https://github.com/metafloor/bwip-js>
// Definitions by: Eric D Hiller <https://github.com/erichiller

declare module 'bwip-js' {


    // Region Begin Utility Types //
    ////////////////////////////////
    interface DrawingOptions {
        /** Barcode symbol name/type. */
        bcid: BCID;
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

    interface CanvasOptions extends DrawingOptions {
        /**
         * Most of the public methods of the bwip - js export use an options object.Only two values are required:
        **/

        /** The name of the barcode type / symbol. */
        bcid: BCID;
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
    type RotateT = 'N' | 'R' | 'L' | 'I';


    type PathVertex = {
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
    type Paths = Array<PathVertex> & {
        ascent: number;
        descent: number;
        advance: number;
    };

    interface Measurement {
        ascent: number;
        descent: number;
        width: number;
    }

    type Point = [ number, number ];

    /** Integer */
    type int = number;
    /** Floating point number */
    type float = number;
    /** Points, expressed as integer */
    type points = int;
    /** Dimension in points, expressed as a float */
    type pointsFloat = float;

    class Drawing {

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

    type BCID = 'auspost' | 'azteccode' | 'azteccodecompact' | 'aztecrune' | 'bc412' | 'channelcode' | 'codablockf' | 'code11' | 'code128' | 'code16k' | 'code2of5' | 'code32' | 'code39' | 'code39ext' | 'code49' | 'code93' | 'code93ext' | 'codeone' | 'coop2of5' | 'daft' | 'databarexpanded' | 'databarexpandedcomposite' | 'databarexpandedstacked' | 'databarexpandedstackedcomposite' | 'databarlimited' | 'databarlimitedcomposite' | 'databaromni' | 'databaromnicomposite' | 'databarstacked' | 'databarstackedcomposite' | 'databarstackedomni' | 'databarstackedomnicomposite' | 'databartruncated' | 'databartruncatedcomposite' | 'datalogic2of5' | 'datamatrix' | 'datamatrixrectangular' | 'datamatrixrectangularextension' | 'default' | 'dotcode' | 'ean13' | 'ean13composite' | 'ean14' | 'ean2' | 'ean5' | 'ean8' | 'ean8composite' | 'flattermarken' | 'gs1_128' | 'gs1_128composite' | 'gs1_cc' | 'gs1datamatrix' | 'gs1datamatrixrectangular' | 'gs1dotcode' | 'gs1northamericancoupon' | 'gs1qrcode' | 'hanxin' | 'hibcazteccode' | 'hibccodablockf' | 'hibccode128' | 'hibccode39' | 'hibcdatamatrix' | 'hibcdatamatrixrectangular' | 'hibcmicropdf417' | 'hibcpdf417' | 'hibcqrcode' | 'iata2of5' | 'identcode' | 'industrial2of5' | 'interleaved2of5' | 'isbn' | 'ismn' | 'issn' | 'itf14' | 'jabcode' | 'japanpost' | 'kix' | 'leitcode' | 'mailmark' | 'matrix2of5' | 'maxicode' | 'micropdf417' | 'microqrcode' | 'msi' | 'onecode' | 'pdf417' | 'pdf417compact' | 'pharmacode' | 'pharmacode2' | 'planet' | 'plessey' | 'posicode' | 'postnet' | 'pzn' | 'qrcode' | 'rationalizedCodabar' | 'raw' | 'rectangularmicroqrcode' | 'royalmail' | 'sscc18' | 'swissqrcode' | 'symbol' | 'telepen' | 'telepennumeric' | 'ultracode' | 'upca' | 'upcacomposite' | 'upce' | 'upcecomposite';

    ////////////////////////////////
    //// endregion Utility Types ///


    /**
     * src: `src/drawing-builtin.js`
     */
    class DrawingBuiltin extends Drawing {
        // TODO: theres a ton here, I'm only doing what's necessary
    }

    class DrawingCanvas extends Drawing {

        constructor ( options: CanvasOptions, canvas: HTMLCanvasElement );
        image ( width: number, height: number ): { buffer: ImageData; ispng: false; };
        end (): void;

    }

    /**
     * `FixupOptions` within `exports.js`
     * Call this before passing your options object to a drawing constructor.
     * Modifies `opts` inline.
     * @param opts Options input to be transformed for BWIP operations
     */
    function FixupOptions ( opts: DrawingOptions ): void;
    namespace FixupOptions {
        function padding ( a: number, b: number, c: number, s: number ): number;
    }

    interface GlyphPoint {
        next;
        prev;
    }

    namespace STBTT {
        function stbtt_GetGlyphHMetrics ( info: any, glyph_index: any ): {
            advanceWidth: any;
            leftSideBearing: any;
        };
    }

    interface Glpyh {
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

    interface Font {
        name: string;
        width: number;
        height: number;
        dx: number;
    }

    namespace FontLib {

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
    // function Render ( params: DrawingOptions, drawing: Drawing ): string;


    // export class BWIPJS {

    //     constructor ( drawing: Drawing );
    //     /** BWIPJS version */
    //     static BWIPJS_VERSION: string;

    // }
    // export class BWIPP {

    //     /** Underlying BWIPP version */
    //     static BWIPP_VERSION: string;

    // }


    /** must be the ID of an HTML Element that is present in the DOM */
    type HTMLElementID = string;

    // export namespace BwipJs {
    // namespace bwipjs {

    // export const DrawingOptions: DrawingOptions;

    class BWIPJS {

        constructor ( drawing: Drawing );

    }



    /** BWIPJS version */
    const BWIPJS_VERSION: string;
    /** Underlying BWIPP version */
    const BWIPP_VERSION: string;



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
    function ToCanvas (
        canvas: HTMLCanvasElement | string,
        opts: CanvasOptions
    ): HTMLCanvasElement;
    function ToCanvas (
        opts: CanvasOptions,
        canvas: HTMLCanvasElement | string
    ): HTMLCanvasElement;

    /**
     * Invokes the low level BWIPP code and returns the raw encoding data.
     * 
     * This function is synchronous and throws on error.
     * 
     * Browser and nodejs usage.
     * @see {@link https://github.com/metafloor/bwip-js/wiki/Notes-on-the-Raw-BWIPP-Data}
     */
    function ToRaw ( options: DrawingOptions ): Uint8Array;
    function ToRaw ( bcid: BCID, text: string, options: string ): Uint8Array;


    function Render ( params: DrawingOptions, drawing: Drawing ): string;


    const loadFont: typeof FontLib.loadFont;
    type bwipjs = typeof Render;
    /** bwipjs default export */
    namespace bwipjs {
        export {
            // The public interface
            ToCanvas as toCanvas,
            Render as render,
            ToRaw as raw,
            FixupOptions as fixupOptions,
            loadFont,
            BWIPJS_VERSION,
            BWIPP_VERSION,
            // Internals
            BWIPJS,
            STBTT,
            FontLib,
            DrawingBuiltin,
            DrawingCanvas
        };
    }
    export {
        DrawingOptions,
        CanvasOptions,
        Measurement,
        Font,
        Render as auspost,
        Render as azteccode,
        Render as azteccodecompact,
        Render as aztecrune,
        Render as bc412,
        Render as channelcode,
        Render as codablockf,
        Render as code11,
        Render as code128,
        Render as code16k,
        Render as code2of5,
        Render as code32,
        Render as code39,
        Render as code39ext,
        Render as code49,
        Render as code93,
        Render as code93ext,
        Render as codeone,
        Render as coop2of5,
        Render as daft,
        Render as databarexpanded,
        Render as databarexpandedcomposite,
        Render as databarexpandedstacked,
        Render as databarexpandedstackedcomposite,
        Render as databarlimited,
        Render as databarlimitedcomposite,
        Render as databaromni,
        Render as databaromnicomposite,
        Render as databarstacked,
        Render as databarstackedcomposite,
        Render as databarstackedomni,
        Render as databarstackedomnicomposite,
        Render as databartruncated,
        Render as databartruncatedcomposite,
        Render as datalogic2of5,
        Render as datamatrix,
        Render as datamatrixrectangular,
        Render as datamatrixrectangularextension,
        Render as dotcode,
        Render as ean13,
        Render as ean13composite,
        Render as ean14,
        Render as ean2,
        Render as ean5,
        Render as ean8,
        Render as ean8composite,
        Render as flattermarken,
        Render as gs1_128,
        Render as gs1_128composite,
        Render as gs1_cc,
        Render as gs1datamatrix,
        Render as gs1datamatrixrectangular,
        Render as gs1dotcode,
        Render as gs1northamericancoupon,
        Render as gs1qrcode,
        Render as hanxin,
        Render as hibcazteccode,
        Render as hibccodablockf,
        Render as hibccode128,
        Render as hibccode39,
        Render as hibcdatamatrix,
        Render as hibcdatamatrixrectangular,
        Render as hibcmicropdf417,
        Render as hibcpdf417,
        Render as hibcqrcode,
        Render as iata2of5,
        Render as identcode,
        Render as industrial2of5,
        Render as interleaved2of5,
        Render as isbn,
        Render as ismn,
        Render as issn,
        Render as itf14,
        Render as jabcode,
        Render as japanpost,
        Render as kix,
        Render as leitcode,
        Render as mailmark,
        Render as matrix2of5,
        Render as maxicode,
        Render as micropdf417,
        Render as microqrcode,
        Render as msi,
        Render as onecode,
        Render as pdf417,
        Render as pdf417compact,
        Render as pharmacode,
        Render as pharmacode2,
        Render as planet,
        Render as plessey,
        Render as posicode,
        Render as postnet,
        Render as pzn,
        Render as qrcode,
        Render as rationalizedCodabar,
        Render as raw,
        Render as rectangularmicroqrcode,
        Render as royalmail,
        Render as sscc18,
        Render as swissqrcode,
        Render as symbol,
        Render as telepen,
        Render as telepennumeric,
        Render as ultracode,
        Render as upca,
        Render as upcacomposite,
        Render as upce,
        Render as upcecomposite
    };

    export default bwipjs;
}
