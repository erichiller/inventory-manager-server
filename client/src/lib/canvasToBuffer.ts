import { uint8 } from "./types/uint8";
import { buf2hex } from "./helpers";


/**
 * Shape of `[Columns][Pixels]`
 * 
 * When printing multiple pages, an array of `PixelMap` is used.
 * 
 * Such as `[Pages][Columns][Pixels]`
 */
export type PixelMap = Array<Array<uint8>>;

/**
 *
    size is
    ```
    [linesCount][widthDots][bytesPerLine]
    ```
 */
export function canvasToBuffer ( canvas: HTMLCanvasElement ): PixelMap {
    const dpi = 360;

    // const widthInches  = 48 / dpi;
    // const heightInches = 48 / dpi;

    const canvasContext = canvas.getContext( "2d" );
    const canvasWidth = canvas.width;
    const canvasHeight = canvas.height;

    // const widthInches = canvasWidth / dpi;
    // const heightInches = canvasHeight / dpi;
    // const widthDots = Math.floor( dpi * widthInches );
    // const heightDots = Math.floor( dpi * heightInches );

    const widthDots = canvasWidth;
    const heightDots = canvasHeight;

    const bytesPerColumn = Math.ceil( heightDots / 8 );
    const columnsCount = widthDots;

    const imgData = canvasContext.getImageData( 0, 0, canvasWidth, canvasHeight );

    // zero out and size `PixelMap`
    let buf: PixelMap = [];
    for ( let col = 0; col < columnsCount; col++ ) {
        buf[ col ] = [];
        for ( let byte = 0; byte < bytesPerColumn; byte++ ) {
            buf[ col ][ byte ] = 0x00;
        }

    }

    console.log( `
            canvasWidth                         = ${ canvasWidth }
            canvasHeight                        = ${ canvasHeight }
            imageData.width                     = ${ imgData.width }
            imageData.height                    = ${ imgData.height }
            imageData.length                    = ${ imgData.data.length }
            imageData.length/4                  = ${ imgData.data.length / 4 }
            imageData.length/4/imgData.width    = ${ ( imgData.data.length / 4 / imgData.width ) }
            widthDots                           = ${ widthDots }
            heightDots                          = ${ heightDots }
            bytesPerColumn                      = ${ bytesPerColumn }
            columnsCount                        = ${ columnsCount }
            `);

    // const setBufByte = (buf: Uint8ClampedArray, value: uint8, line: number, col: number, lineByte: number): Uint8ClampedArray {
    //     if ( line >= linesCount ) { throw `line number (${ line }) cannot be equal to or greater than ${ linesCount }`; }
    //     if ( col >= widthDots ) { throw `col number (${ col }) cannot be equal to or greater than ${ widthDots }`; }
    //     if ( lineByte >= bytesPerLine ) { throw `lineByte (${ lineByte }) cannot be equal to or greater than ${ bytesPerLine}`; }
    //     let pos: number = ( line * widthDots ) + 
    //         ( col * bytesPerLine ) +
    //         lineByte;
    //     buf[ pos ] = value;
    //     return buf;
    // }
    /** 
    ARGGG Javascript only does Bit math in 32 bits. doing `1 << 33` is the same as `1 << 1`
    */
    for ( let i = 0, pxl = 0; i < imgData.data.length && i < ( widthDots * heightDots * 4 ); i += 4, pxl++ ) {
        // for ( let i = 0, pxl = 0; i < imgData.data.length && i < ( widthDots * heightDots * 4 ) && i < 104*4; i += 4, pxl++ ) {
        let row = Math.floor( pxl / widthDots );
        let col = pxl % columnsCount;

        let linebit = row % heightDots;
        let byteBit = 8 - 1 - ( linebit % 8 );
        let lineByte = Math.floor( linebit / 8 );
        // white = 0 ; black = 1
        let isBlack = 0;
        /**
         * Canvas sets 
         *  black to: 00,00,00,FF
         *  white (default) : 00,00,00,00
         *  white (user-written) : ff,ff,ff,ff
         */

        if ( ( !imgData.data.slice( i, i + 3 ).every( value => value === 0xff ) ) && ( imgData.data[ i + 3 ] >= 0x27 ) ) {
            isBlack = 1;
        }

        // for ( let colorByte = 0; colorByte < 4; colorByte++ ) {
        //     if ( imgData.data[ i + colorByte ] > 200 ) {
        //         isBlack = 1;
        //         break;
        //     }
        // }

        // var {red, green, blue, alpha} = imgData.data.slice(i, i+4);
        // let [ red, green, blue, alpha ] = Array.from( imgData.data.slice( i, i + 4 ) );
        // console.log( `[{${ line }} ${ col }, ${ row } (${ lineByte } + ${ byteBit })] = ${ isBlack } (red=${ red } blue=${ blue } green=${ green } alpha=${ alpha })`,
        //     "\n", "buf:", buf,
        //     "\n", "lineByte:", lineByte,
        //     "\n", buf[ line ][ col ],
        //     "\n", `line=${ line } col=${ col }`, buf[ line ][ col ] ? true : false, buf[ line ][ col ])
        // console.log(
        //     "\n", `line=${ line } col=${ col } lineByte=${ lineByte }`, buf[ line ][ col ][ lineByte ] ? true : false, buf[ line ][ col ].length, buf[ line ][ col ][ lineByte ],
        //     "\n", "set to:", [ ( buf[ line ][ col ][ lineByte ] ? buf[ line ][ col ][ lineByte ] : 0 ) | ( isBlack << byteBit ) ],
        //     "\n", ( isBlack << byteBit ) )
        // console.log( `${ pxl.toString().padStart( 4, "0" ) } ( ${ Math.floor( pxl / widthDots ).toString().padStart( 4, "0" ) } ) ${ ( pxl % widthDots ).toString().padStart( 4, "0" ) } : buf[${ line.toString().padStart( 2, "0" ) }][${ col.toString().padStart( 2, "0" ) }][${ lineByte.toString().padStart( 2, "0" ) }] = (${ i }) = ${ isBlack } from byte ${ i.toString().padStart( 4, "0" ) }+${ byteBit } ${ imgData.data[ i ] },${ imgData.data[ i + 1 ] },${ imgData.data[ i + 2 ] },${ imgData.data[ i + 3 ] } [ ${ Math.floor( pxl / imgData.width ) }, ${ pxl % imgData.width } ] → [ ${ col }, ${ row } ] ; ${ ( buf[ line ][ col ][ lineByte ] ).toString( 2 ).padStart( 8, "0" )} (${  buf[ line ][ col ][ lineByte ]  ? true : false }) | ${ (isBlack << byteBit).toString( 2 ).padStart( 8, "0")}` )
        // buf[ line ][ col ][ lineByte ] = ( buf[ line ][ col ][ lineByte ] ? buf[ line ][ col ][ lineByte ] : 0 ) | ( isBlack << byteBit )
        buf[ col ][ lineByte ] = ( ( buf[ col ][ lineByte ] ? buf[ col ][ lineByte ] : 0 ) | ( isBlack << byteBit ) ) as uint8;

        // console.log( buf )

        // console.log( `${ ( buf[ line ][ col ][ lineByte ] >>> 0 ).toString( 2 ).padStart( 8, "0" ) } [0x${ ( buf[ line ][ col ][ lineByte ] >>> 0 ).toString( 16 ).toUpperCase().padStart( 2, "0" ) }]` )
        // console.log(buf[line][col] )
    }

    console.log( imgData.data );
    console.log( "buf2hex (imgData):", buf2hex( imgData.data ) );
    console.log( "buf2hex (imgData 48x48):", buf2hex( canvasContext.getImageData( 0, 0, 48, 48 ).data ) );
    // console.log( "buf2hex ( buf ):", Buffer.from( ( Array.isArray( buf ) ? buf[0]. : buf ) ); );
    // buf.forEach( bufLine => (
    //     bufLine.forEach(bufCol => {
    //         console.log( buf2hex( Buffer.from( bufCol ) ) );

    //         // row.forEach( byte => {
    //         //     console.log( buf2hex( Buffer.from( byte ) ) );
    //         // })
    //     })
    // ));


    let binstr = "";
    let hexstr = "";
    buf.forEach( col => {
        col.forEach( byte => {
            binstr += byte.toString( 2 ).padStart( 8, "0" );
            hexstr += byte.toString( 16 ).padStart( 2, "0" );
        } );
        binstr += "\n";
    } );
    console.log( "buffer", buf, "\n" + binstr + "\n" + hexstr );



    const bufDebugImageSize = () => {
        console.log( `imgDataLength is ${ imgData.data.length }` );
        console.log( `imgDataLength pixels ${ Math.floor( imgData.data.length / 4 ) }` );
        console.log( `imgDataLength pixels ${ Math.floor( imgData.data.length / 4 / 300 ) }` );
    };


    return buf;
}


