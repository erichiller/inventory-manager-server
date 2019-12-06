// const ThermalPrinter = require("node-thermal-printer").printer;
// const this.printerTypes = require("node-thermal-printer").types;

// import tprint from '../../deps/node-thermal-printer/lib/core.js';

import { ThermalPrinter, PrinterTypes } from '../deps/node-thermal-printer';
// import tprint from 'node-thermal-printer';


import { uint8 } from '../schema/type_uint8';

import * as config from '../config';

import * as snmp from 'net-snmp';
import * as util from 'util';



function buf2hex ( buffer ) { // buffer is an ArrayBuffer
    return Array.prototype.map.call( new Uint8Array( buffer ), x => ( '00' + x.toString( 16 ) ).slice( -2 ) ).join( '' );
}

export class PrinterStatus {
    labelType: string = null;
    uptime: number = null;
}

/**
 * run with:
 * rm epson.js ; tsc -t ES2016 epson.ts ; node .\epson.js
 */

type millimeter = number;
type inch = number;

enum LengthType {
    millimenter = "mm",
    inch = "in",
    dots = "dots"
}

// type currency = "usd" | "eur";


// interface length {
//     mm?: number,
//     inch?: number
// }
// type length = { mm: number; inch?: undefined } |
//               { inch: number; mm?: undefined }

class Length {
    private _inches: number;
    private _dots: number;

    get inches (): number {
        return this._inches;
    }
    /**
     * dots are 1/180th of an inch.
     * Thus, 1 inch = 180 dots
     */
    get dots (): number {
        return this._dots;
    }
    constructor ( len: number, unit = LengthType.inch ) {
        if ( unit == LengthType.inch ) {

        }
        this._inches = len;
        this._dots = len * 180;
        if ( unit == LengthType.dots ) {
            this._inches = len / 180;
            this._dots = len;
        }
        if ( unit == LengthType.millimenter ) {
            throw Error( " mm are not yet supported " );
        }
    }
}


/**
 * Spec pars:
 * 1. Horizontal Dot Density
 * 2. Vertical Dot Density
 * 3. Horizontal Dot Resolution in 360th of an inch
 * 4. Vertical Dot Resolution
 */
class ImageBitMode {
    public static readonly mode0 = { mode: 0, bytesMultiple: 1 };
    // ... many more
    public static readonly mode32 = { mode: 32, bytesMultiple: 3 };
    // ... many more
    public static readonly mode73 = { mode: 73, bytesMultiple: 6 };

}


/**
 *
 * @param remarks
 * ```text
 Type | Width | Vert. area | Top/bot margin | Vert. range |  Max
      |  (mm) | (mm/dots)  |      (mm)      |    (dots)   | Lines
 -----|-------|------------|----------------|-------------|------
 18   | 18    | 16.5 / 234 | 0.75           | 156-389     | 9
 ```
 _See page 10 in ESC/P Guide_
 *
 */
export class BrotherLabeler {

    /**
     * Command resets all parameters to their default settings  
     * `0x1b` `0x40`
     */
    public readonly init = Buffer.from( [ 0x1b, 0x40 ] );
    /** Newline, aka LF (Line Feed)  
     * `0x0a` */
    public readonly newline = Buffer.from( [ 0x0a ] );

    public printer: ThermalPrinter;

    printerHostname: string;
    constructor () {
        this.printerHostname = config.PRINTER_HOST;
        this.printer = new ThermalPrinter( {
            type: PrinterTypes.EPSON,  // 'star' or 'epson'
            interface: `tcp://${ config.PRINTER_HOST }:9100`,                       // this.printer interface
            options: {
                timeout: 1000
            },
            characterSet: 'PC437_USA',
        } );
    }

    /**
     * Returns byte array of command required for Brother Labeler in ESC/P
     *
     * @param len -
     *  Provide length in mm or inches as length object
     *
     * @remarks
     *  - Brother output Specifies length in 1/180th of an inch
     *  - Range can be from 0.2 to 40 inches
     *  - length of 0 specifies AUTO
     *
     * @returns byte array of command required
     *
     */
    setLength ( len: Length ): ArrayBuffer {
        let lengthBytes = Buffer.from( [
            0x1b, 0x69, 0x6c,
            ( len.dots % 256 ),
            ( Math.floor( len.dots / 256 ) )
        ] );
        return lengthBytes;
    }

    /**
     *
     * @param len - can not have a margin less than 0.04 inches ( 7 dots )
     *              nor greater than 4 inchess ( 720 dots )
     */
    setMarginWidth ( len: Length ): ArrayBuffer {
        let marginBytes = Buffer.from( [
            0x1b, 0x69, 0x6d,
            ( len.dots % 256 ),
            ( Math.floor( len.dots / 256 ) )
        ] );
        return marginBytes;
    }

    /**
     * _See page 40 in ESC/P guide for meanings of Modes, etc._
     *
     */
    selectBitImage ( mode = ImageBitMode.mode73 ): ArrayBuffer {
        throw Error( "not implemented yet" );
        /** Image Data Length in Bytes */
        let len = new Length( 0 );
        // let mode = 73;

        let imageBytes = Buffer.from( [
            0x1b, 0x2a,
            ( len.dots % 256 ),
            ( Math.floor( len.dots / 256 ) )
        ] );
        return imageBytes;
    }

    /** getPrinterStatus
     *
     */
    async getPrinterStatus (): Promise<PrinterStatus>{
        try {
            var session = snmp.createSession( this.printerHostname, "public" );

            var oids = {
                "1.3.6.1.2.1.43.8.2.1.12.1.1": "labelType" ,
                "1.3.6.1.2.1.1.3.0": "uptime"
            };
            let retObj: PrinterStatus = new PrinterStatus();

                return await new Promise( ( resolve, reject ) => {
                    session.get( Object.keys( oids ), function ( error, varbinds ) {
                        if ( error ) {
                            console.error( error );
                        } else {
                            for ( var i = 0; i < varbinds.length; i++ ) {
                                if ( snmp.isVarbindError( varbinds[ i ] ) ) {
                                    console.error( snmp.varbindError( varbinds[ i ] ) )
                                } else {
                                    console.log( oids[ varbinds[ i ].oid ], varbinds[ i ].oid + " = " + varbinds[ i ].value );
                                    let val = varbinds[ i ].value;
                                    retObj[ oids[ varbinds[ i ].oid ] ] = val instanceof Buffer ? val.toString() : val;
                                    // console.log( "retObj is now", retObj )
                                }
                            }
                        }
                        resolve( retObj );
                        // If done, close the session
                        session.close();

                    } );
                } );
        } catch ( error ) {
            console.error( error );
        }
    }

    /**
     *
     * @param imageHex - this should be an array of Buffers, where each array entry is one output "line".
     * @remarks
     * 1 dot = 1 "pixel"
     */
    // imageMode73Density ( imageLinesBuf: Buffer[] ): Buffer {
    imageMode73Density ( imageLinesBuf: uint8[][][] | Array<Buffer> ): Buffer {
        let outputLinesBuf: Buffer = Buffer.from( [] );
        imageLinesBuf.forEach( ( buf, index ) => {
            if ( !Buffer.isBuffer( buf ) ) {
                buf = Buffer.from( ( Array.isArray( buf ) ? ( buf as Array<any>).flat() : buf ) );
            }
            if ( Buffer.isBuffer( buf ) ) {
                let dotPositions = buf.byteLength / ImageBitMode.mode73.bytesMultiple;
                let n1 = ( dotPositions % 256 );
                let n2 = ( Math.floor( dotPositions / 256 ) );
                console.log( `Line # ${index}: creating imageMode73Density image line of size ${ buf.byteLength } bytes , ${ dotPositions } positions [ ${ n1 } , ${ n2 } ]` );
                outputLinesBuf = Buffer.concat( [
                    outputLinesBuf,
                    Buffer.from( [
                        0x1b,
                        0x2a,
                        73,
                        n1,
                        n2,
                    ] ),
                    buf
                ] );
                // add a newline if NOT the last line
                if ( index < ( imageLinesBuf.length - 1 ) ) {
                    console.log( `Line # ${ index}: adding newline as ${index} is less than ${imageLinesBuf.length}`)
                    outputLinesBuf = Buffer.concat( [
                        outputLinesBuf,
                        this.newline
                    ] );
                }
            } else {
                throw `Invalid buffer ${ buf }`;
            }
        } );
        console.log( "imageMode73Density is returning:", buf2hex( outputLinesBuf ) );
        return outputLinesBuf;
    }


    /**
     *
     * @param inputBuffer Array of Buffers or Array of uint8[][][] ; 4th (outer / wrapping) array is for multiple labels.
     */
    async print ( inputBuffer: Array<Array<Array<Array<uint8>>>> ) {
        // async print( inputBuffer: Array<Array<Array<Array<uint8>>>> | Array<Buffer> ) {

        let labeler = new BrotherLabeler();

        let labelLen = new Length( 0.75 );


        try {
            await this.printer.raw(
                Buffer.concat( [

                    Buffer.from( [
                        0x1b, 0x69, 0x61, 0x00,          // select ESC/P mode
                        0x1b, 0x40,                      // initialize ESC/P mode

                        0x1b, 0x33, 0,                   // line feed = 48 / 180th of an inch


                        // , 0x1b, 0x52, 0x0 // char set = USA

                        /**
                         * Set label length
                         * set to 0 for AUTO
                        **/
                        0x1b, 0x69, 0x6c,
                        // ( labelLen.dots % 256 ),
                        // ( Math.floor( labelLen.dots / 256 ) ),
                        0, 0, // trying auto

                        /**
                         * Set margin width
                         * default is 2mm (see page 38)
                         * this is measured in 1/180th of an inch, with the smallest being 0.04" (~1mm)
                         * 7/180 = .0355, so I'm thinking this is the end.
                        **/
                        0x1b, 0x69, 0x6d, 7, 0,          // set margin to smallest possible (7)

                        /** 
                         * Specify cut
                         *  see page 82
                         * 
                         * 0 = full cut
                         * 1 = half cut
                         * 2 = chain print
                         * 3 = special tape
                         * 4+  unused
                         */
                        0x1b, 0x69, 0x43, 0b00000100,    // specify cut setting = chain print

                        0x1b, 0x24, 0, 0,                // specify horizontal position
                    ] ),
                    // imageBuf,
                    // labeler.newline,
                        ...inputBuffer.map( (page, idx) => {
                            let imageBuf73 = labeler.imageMode73Density( page );
                            // let imageBuf73 = labeler.imageMode73Density(labeler.imageMode73DensityTestData());
                            console.log( `Page # ${ idx } of ${ inputBuffer.length }: \n\timageBuf73 is ${ imageBuf73.byteLength } bytes in length\n\tTerminating with ${ idx === inputBuffer.length - 1 ? 'lastpage, cut: 0x0c' : 'intermediary page, new page: 0xff' }` );

                            return Buffer.concat([
                                imageBuf73,
                                Buffer.from( [ 
                                    // 0xFF if a new page is desired. This can auto-cut.
                                    0x0c,
                                    // also try with 0x0c only last
                                    // idx === inputBuffer.length -1 ? 0x0c : 0xff
                                ] )
                            ]);
                        })

                    // labeler.newline,

                    // imageBuf,

                ] ) );
            // console.log()
        } catch ( error ) {
            console.error("ERROR", error );
        }
    }


    static testImageData = () => {
        const buf = Buffer.from( [
            0b01111110,
            0b00111100,
            0b00011000,
            0b01010101,
            0b10101010,
            0b01010101,
            0b10101010,
            0x01,
            0b10000000,
            0xFF,
            0xFF,
            0x00,
            0xFF,
            0xFF,
            0xFF,
            0xFF,
            0xFF,
            0xFF,
            0xFF,
            0xFF,
            0xFF,
            0xFF,
            0xFF,
            0x0F,
            0xFF,
            0x0F,
            0xFF,
            0x0F,
            0xFF,
            0x0F,
            0xFF,
            // 0b01010101,
            // 0b10101010,
            0b01010101,
            0b10101010,
            0b01010101,
            0b10101010,
            0b01010101,
            0b10101010 ] );
        let lenDots = Buffer.byteLength( buf );
        console.log( `sending test image of size ${ lenDots } bytes` );
        return {
            buffer: buf,
            bytes: lenDots
        }
    }



    static imageMode73DensityTestData (): Buffer[] {
        return [ Buffer.from( [
            0xF8, 0x3E, 0x00, 0x00, 0x00, 0x00, 0xF8, 0x3E, 0x00, 0x00, 0x00, 0x00, 0xF8, 0x3E, 0x00, 0x00, 0x00, 0x00, 0x00, 0x3E, 0x00, 0x00, 0x00, 0x00, 0x00, 0x3E, 0x00, 0x00, 0x00, 0x00, 0x00, 0x3E, 0x00, 0x00, 0x00, 0x00, 0x00, 0x3E, 0x00, 0x00, 0x00, 0x00, 0x00, 0x3E, 0x00, 0x00, 0x00, 0x00, 0x00, 0x3E, 0x00, 0x00, 0x00, 0x00, 0x00, 0x3E, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0xFF, 0xFF, 0xF1, 0xFF, 0xFF, 0xF8, 0xFF, 0xFF, 0xF1, 0xFF, 0xFF, 0xF8, 0x01, 0x80, 0x01, 0x80, 0xC0, 0x18, 0x01, 0x80, 0x01, 0x80, 0xC0, 0x18, 0x01, 0x80, 0x01, 0x80, 0xC0, 0x18, 0x01, 0x80, 0x01, 0x80, 0xC0, 0x18, 0x01, 0x80, 0x01, 0x80, 0xC0, 0x18, 0x01, 0x80, 0x01, 0x80, 0xC0, 0x18, 0x01, 0x80, 0x01, 0x80, 0xC0, 0x18, 0x01, 0x80, 0x01, 0x80, 0xC0, 0x18, 0x01, 0x80, 0x01, 0x80, 0xC0, 0x18, 0x01, 0x80, 0x01, 0x80, 0xC0, 0x18, 0x01, 0x80, 0x01, 0x80, 0xC0, 0x18, 0x01, 0x80, 0x01, 0x80, 0xC0, 0x18, 0xFF, 0xFF, 0xF0, 0x00, 0x00, 0x18, 0xFF, 0xFF, 0xF0, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x07, 0xFF, 0xF8, 0x00, 0xFF, 0x00, 0x01, 0x80, 0x00, 0x03, 0x99, 0xC0, 0x01, 0x00, 0x00, 0x06, 0x18, 0x60, 0x02, 0x00, 0x00, 0x06, 0x18, 0x60, 0x06, 0x00, 0x00, 0x04, 0x18, 0x20, 0x06, 0x00, 0x00, 0x0C, 0x18, 0x30, 0x00, 0x00, 0x00, 0x0C, 0x18, 0x30, 0x00, 0x00, 0x00, 0x0C, 0x18, 0x30, 0x00, 0x00, 0x00, 0x04, 0x18, 0x20, 0x00, 0x00, 0x00, 0x06, 0x18, 0x61, 0xC7, 0xFF, 0xF8, 0x03, 0x18, 0xC0, 0x00, 0x00, 0x00, 0x01, 0xF8, 0x80, 0x00, 0x00, 0x00, 0x00, 0x38, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x7F, 0x80, 0x00, 0x00, 0x00, 0x01, 0xC0, 0xE0, 0xFF, 0xFF, 0xF0, 0x03, 0x00, 0x30, 0x00, 0x00, 0x00, 0x03, 0x00, 0x30, 0x00, 0x00, 0x00, 0x02, 0x00, 0x10, 0x00, 0x00, 0x00, 0x06, 0x00, 0x18, 0x00, 0x00, 0x00, 0x06, 0x00, 0x18, 0x00, 0x00, 0x00, 0x06, 0x00, 0x10, 0x00, 0x00, 0x00, 0x02, 0x00, 0x30, 0xFF, 0xFF, 0xF0, 0x03, 0x00, 0x30, 0x00, 0x00, 0x00, 0x01, 0x80, 0xE0, 0x00, 0x00, 0x00, 0x00, 0x00, 0x80, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x18, 0x00, 0x00, 0x00, 0x00, 0x01, 0xFF, 0x80, 0x00, 0x00, 0x00, 0x03, 0x81, 0xC0, 0x00, 0x00, 0x00, 0x06, 0x00, 0x60, 0x00, 0x00, 0x00, 0x06, 0x00, 0x60, 0x00, 0x00, 0x00, 0x04, 0x00, 0x20, 0x00, 0x00, 0x00, 0x0C, 0x00, 0x30, 0x00, 0x00, 0x00, 0x0C, 0x00, 0x30, 0x00, 0x00, 0x00, 0x0C, 0x00, 0x30, 0x00, 0x00, 0x00, 0x04, 0x00, 0x20, 0x00, 0x00, 0x00, 0x06, 0x00, 0x61, 0xFF, 0xFF, 0xF8, 0x03, 0x00, 0xC1, 0xFF, 0xFF, 0xF8, 0x01, 0xFF, 0x80, 0x00, 0xC0, 0x00, 0x00, 0x7E, 0x00, 0x00, 0xC0, 0x00, 0x00, 0x00, 0x00, 0x00, 0xC0, 0x00, 0x00, 0x00, 0x00, 0x00, 0xC0, 0x00, 0x00, 0x00, 0x00, 0x00, 0xC0, 0x00, 0x00, 0x00, 0x00, 0x00, 0xC0, 0x00, 0x00, 0x00, 0x00, 0x00, 0xC0, 0x00, 0x00, 0x00, 0x00, 0x00, 0xC0, 0x00, 0x00, 0x00, 0x00, 0x00, 0xC0, 0x00, 0x00, 0x00, 0x00, 0x00, 0xC0, 0x00, 0x00, 0x00, 0x00, 0x00, 0xC0, 0x00, 0x00, 0x00, 0x00, 0x00, 0xC0, 0x00, 0x00, 0x00, 0x01, 0xFF, 0xFF, 0xF8, 0x80, 0x00, 0x01, 0xFF, 0xFF, 0xF8, 0xF0, 0x00, 0x00, 0x00, 0x00, 0x00, 0x3F, 0x00, 0x00, 0x00, 0x00, 0x00, 0x01, 0xF0, 0x00, 0x00, 0x00, 0x00, 0x00, 0x1F, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0xF0, 0x00, 0x00, 0x00, 0x00, 0x00, 0x71, 0xC7, 0xFF, 0xF8, 0x00, 0x01, 0xE1, 0xC7, 0xFF, 0xF8, 0x00, 0x1E, 0x00, 0x00, 0x00, 0x00, 0x01, 0xE0, 0x00, 0x00, 0x00, 0x00, 0x1F, 0x00, 0x00, 0x00, 0x00, 0x00, 0xF0, 0x00, 0x00, 0x00, 0x00, 0x00, 0x80, 0x00, 0x00, 0x00, 0x00, 0x00, 0x80, 0x00, 0x01, 0xFF, 0xFF, 0xF8, 0xF0, 0x00, 0x00, 0x00, 0x00, 0x00, 0x1F, 0x00, 0x00, 0x00, 0x00, 0x00, 0x01, 0xE0, 0x00, 0x00, 0x00, 0x00, 0x00, 0x3E, 0x00, 0x00, 0x00, 0x00, 0x00, 0x01, 0xE0, 0x00, 0x00, 0x00, 0x00, 0x00, 0x70, 0x00, 0x00, 0x00, 0x00, 0x01, 0xE1, 0xFF, 0xFF, 0xF8, 0x00, 0x1E, 0x00, 0x00, 0x00, 0x00, 0x01, 0xF0, 0x00, 0x00, 0x00, 0x00, 0x1F, 0x00, 0x00, 0x00, 0x00, 0x00, 0xF0, 0x00, 0x00, 0x00, 0x00, 0x00, 0x80, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x7F, 0x80, 0x00, 0x00, 0x00, 0x01, 0xCC, 0xE0, 0x00, 0x7E, 0x00, 0x03, 0x0C, 0x30, 0x01, 0xFF, 0x80, 0x03, 0x0C, 0x30, 0x03, 0x00, 0xC0, 0x02, 0x0C, 0x10, 0x06, 0x00, 0x60, 0x06, 0x0C, 0x18, 0x04, 0x00, 0x20, 0x06, 0x0C, 0x18, 0x0C, 0x00, 0x30, 0x06, 0x0C, 0x18, 0x0C, 0x00, 0x30, 0x02, 0x0C, 0x10, 0x0C, 0x00, 0x30, 0x03, 0x0C, 0x30, 0x04, 0x00, 0x20, 0x01, 0x8C, 0x60, 0x06, 0x00, 0x60, 0x00, 0xFC, 0x40, 0x06, 0x00, 0x60, 0x00, 0x1C, 0x00, 0x03, 0x81, 0xC0, 0x00, 0x00, 0x00, 0x00, 0xFF, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x07, 0xFF, 0xF8, 0x00, 0x00, 0x00, 0x01, 0xC0, 0x00, 0x00, 0x00, 0x00, 0x01, 0x00, 0x00, 0x0F, 0xFF, 0xF0, 0x02, 0x00, 0x00, 0x03, 0x80, 0x00, 0x06, 0x00, 0x00, 0x02, 0x00, 0x00, 0x06, 0x00, 0x00, 0x04, 0x00, 0x00, 0x02, 0x00, 0x00, 0x0C, 0x00, 0x00, 0x00, 0x00, 0x00, 0x0C, 0x00, 0x00, 0x00, 0x00, 0x00, 0x04, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0xFF, 0xFF, 0xF0, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x18, 0x00, 0x00, 0x00, 0x00, 0x01, 0xFF, 0x00, 0x00, 0x00, 0x00, 0x03, 0x81, 0xC0, 0x00, 0x00, 0x00, 0x06, 0x00, 0x60, 0x00, 0x00, 0x00, 0x04, 0x00, 0x60, 0x00, 0x00, 0x00, 0x0C, 0x00, 0x30, 0x00, 0x00, 0x00, 0x0C, 0x00, 0x30, 0x00, 0x00, 0x00, 0x0C, 0x00, 0x30, 0x00, 0x00, 0x00, 0x04, 0x00, 0x20, 0x00, 0x00, 0x00, 0x02, 0x00, 0x60, 0x00, 0x00, 0x00, 0x03, 0x00, 0xC0, 0x00, 0x00, 0x00, 0xFF, 0xE7, 0xF0, 0x00, 0x00, 0x00, 0xFF, 0xFF, 0xF0, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00

        ] ),
        Buffer.from( [
            0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0xFF, 0xFF, 0xFC, 0x00, 0x00, 0x00, 0xF8, 0x00, 0x00, 0x00, 0x00, 0x00, 0x78, 0x00, 0x00, 0x00, 0x00, 0x00, 0x1C, 0x00, 0x00, 0x00, 0x00, 0x00, 0x06, 0x00, 0x00, 0x00, 0x00, 0x00, 0x03, 0x80, 0x00, 0x00, 0x00, 0x00, 0x00, 0xE0, 0x00, 0x00, 0x00, 0x00, 0x00, 0x70, 0x00, 0x00, 0x00, 0x00, 0x00, 0x1C, 0x00, 0x00, 0x00, 0x00, 0x00, 0x0E, 0x00, 0x00, 0x00, 0x00, 0x00, 0x03, 0x80, 0x00, 0x00, 0x00, 0x00, 0x01, 0xC0, 0x00, 0x00, 0x00, 0x00, 0x00, 0x70, 0x00, 0x00, 0x00, 0x00, 0x00, 0x78, 0x00, 0x00, 0x00, 0xFF, 0xFF, 0xFC, 0x00, 0x00, 0x00, 0xFF, 0xFF, 0xFC, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x3F, 0xC0, 0x00, 0x00, 0x00, 0x00, 0xE6, 0x70, 0x00, 0x00, 0x00, 0x01, 0x86, 0x18, 0x00, 0x00, 0x00, 0x01, 0x86, 0x18, 0x00, 0x00, 0x00, 0x01, 0x06, 0x08, 0x00, 0x00, 0x00, 0x03, 0x06, 0x0C, 0x00, 0x00, 0x00, 0x03, 0x06, 0x0C, 0x00, 0x00, 0x00, 0x03, 0x06, 0x0C, 0x00, 0x00, 0x00, 0x01, 0x06, 0x08, 0x00, 0x00, 0x00, 0x01, 0x86, 0x18, 0x00, 0x00, 0x00, 0x00, 0xC6, 0x30, 0x00, 0x00, 0x00, 0x00, 0x7E, 0x20, 0x00, 0x00, 0x00, 0x00, 0x0E, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0xE3, 0xFF, 0xFC, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0xFF, 0xFF, 0xFC, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0xE3, 0xFF, 0xFC, 0x00, 0x00, 0x00, 0xE3, 0xFF, 0xFC, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0xFF, 0xFF, 0xFC, 0x00, 0x00, 0x00, 0x00, 0x0F, 0x00, 0x00, 0x00, 0x00, 0x00, 0x0C, 0x00, 0x00, 0x00, 0x00, 0x00, 0x0C, 0x00, 0x00, 0x00, 0x00, 0x00, 0x1C, 0x00, 0x00, 0x00, 0x00, 0x00, 0x26, 0x00, 0x00, 0x00, 0x00, 0x00, 0x43, 0x80, 0x00, 0x00, 0x00, 0x00, 0x80, 0xE0, 0x00, 0x00, 0x00, 0x03, 0x00, 0x70, 0x00, 0x00, 0x00, 0x02, 0x00, 0x1C, 0x00, 0x00, 0x00, 0x00, 0x00, 0x0C, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0xFF, 0xFF, 0xFC, 0x00, 0x00, 0x00, 0x00, 0x0F, 0x00, 0x00, 0x00, 0x00, 0x00, 0x0C, 0x00, 0x00, 0x00, 0x00, 0x00, 0x0C, 0x00, 0x00, 0x00, 0x00, 0x00, 0x1C, 0x00, 0x00, 0x00, 0x00, 0x00, 0x26, 0x00, 0x00, 0x00, 0x00, 0x00, 0x43, 0x80, 0x00, 0x00, 0x00, 0x00, 0x80, 0xE0, 0x00, 0x00, 0x00, 0x03, 0x00, 0x70, 0x00, 0x00, 0x00, 0x02, 0x00, 0x1C, 0x00, 0x00, 0x00, 0x00, 0x00, 0x0C, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0xF0, 0x00, 0x00, 0x00, 0x00, 0xC1, 0xF8, 0x00, 0x00, 0x00, 0x01, 0x83, 0x18, 0x00, 0x00, 0x00, 0x01, 0x82, 0x0C, 0x00, 0x00, 0x00, 0x01, 0x06, 0x0C, 0x00, 0x00, 0x00, 0x03, 0x06, 0x0C, 0x00, 0x00, 0x00, 0x03, 0x06, 0x08, 0x00, 0x00, 0x00, 0x03, 0x06, 0x08, 0x00, 0x00, 0x00, 0x03, 0x04, 0x18, 0x00, 0x00, 0x00, 0x01, 0x84, 0x10, 0x00, 0x00, 0x00, 0x01, 0xCC, 0x70, 0x00, 0x00, 0x00, 0x00, 0xFF, 0xFC, 0x00, 0x00, 0x00, 0x00, 0x00, 0x0C, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0xFF, 0xFF, 0xFC, 0x00, 0x00, 0x00, 0xFF, 0xFF, 0xFC, 0x00, 0x00, 0x00, 0x00, 0x60, 0x00, 0x00, 0x00, 0x00, 0x00, 0x60, 0x00, 0x00, 0x00, 0x00, 0x00, 0x60, 0x00, 0x00, 0x00, 0x00, 0x00, 0x60, 0x00, 0x00, 0x00, 0x00, 0x00, 0x60, 0x00, 0x00, 0x00, 0x00, 0x00, 0x60, 0x00, 0x00, 0x00, 0x00, 0x00, 0x60, 0x00, 0x00, 0x00, 0x00, 0x00, 0x60, 0x00, 0x00, 0x00, 0x00, 0x00, 0x60, 0x00, 0x00, 0x00, 0x00, 0x00, 0x60, 0x00, 0x00, 0x00, 0x00, 0x00, 0x60, 0x00, 0x00, 0x00, 0x00, 0x00, 0x60, 0x00, 0x00, 0x00, 0x00, 0xFF, 0xFF, 0xFC, 0x00, 0x00, 0x00, 0xFF, 0xFF, 0xFC, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0xE3, 0xFF, 0xFC, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0xFF, 0xFF, 0xFC, 0x00, 0x00, 0x00, 0xFF, 0xFF, 0xFC, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0xFF, 0xFF, 0xFC, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x3F, 0xC0, 0x00, 0x00, 0x00, 0x00, 0x76, 0x70, 0x00, 0x00, 0x00, 0x00, 0xC6, 0x18, 0x00, 0x00, 0x00, 0x01, 0x86, 0x18, 0x00, 0x00, 0x00, 0x01, 0x06, 0x08, 0x00, 0x00, 0x00, 0x03, 0x06, 0x0C, 0x00, 0x00, 0x00, 0x03, 0x06, 0x0C, 0x00, 0x00, 0x00, 0x03, 0x06, 0x0C, 0x00, 0x00, 0x00, 0x01, 0x06, 0x08, 0x00, 0x00, 0x00, 0x01, 0x86, 0x18, 0x00, 0x00, 0x00, 0x00, 0xC6, 0x38, 0x00, 0x00, 0x00, 0x00, 0x7E, 0x70, 0x00, 0x00, 0x00, 0x00, 0x1E, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x03, 0xFF, 0xFC, 0x00, 0x00, 0x00, 0x03, 0xFF, 0xFC, 0x00, 0x00, 0x00, 0x00, 0xC0, 0x00, 0x00, 0x00, 0x00, 0x01, 0x00, 0x00, 0x00, 0x00, 0x00, 0x01, 0x00, 0x00, 0x00, 0x00, 0x00, 0x03, 0x00, 0x00, 0x00, 0x00, 0x00, 0x03, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00
        ] ) ];
    }



}