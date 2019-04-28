const ThermalPrinter = require("node-thermal-printer").printer;
const PrinterTypes = require("node-thermal-printer").types;


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

    get inches(): number {
        return this._inches;
    }
    /**
     * dots are 1/180th of an inch.
     * Thus, 1 inch = 180 dots
     */
    get dots(): number {
        return this._dots;
    }
    constructor(len: number, unit = LengthType.inch) {
        if (unit == LengthType.inch) {

        }
        this._inches = len;
        this._dots = len * 180;
        if (unit == LengthType.dots) {
            this._inches = len / 180;
            this._dots = len;
        }
        if (unit == LengthType.millimenter) {
            throw Error(" mm are not yet supported ");
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
    public static readonly mode0 = { mode: 0, bytesMultiple: 1 }
    // ... many more
    public static readonly mode32 = { mode: 32, bytesMultiple: 3 }
    // ... many more
    public static readonly mode73 = { mode: 73, bytesMultiple: 6 }

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
class BrotherLabeler {

    /**
     * Command resets all parameters to their default settings
     */
    public readonly init = Buffer.from([0x1b, 0x40])
    public readonly newline = Buffer.from([0x0a])



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
    setLength(len: Length): ArrayBuffer {
        let lengthBytes = Buffer.from([
            0x1b, 0x69, 0x6c,
            (len.dots % 256),
            (Math.floor(len.dots / 256))
        ])
        return lengthBytes;
    }

    /**
     * 
     * @param len - can not have a margin less than 0.04 inches ( 7 dots )
     *              nor greater than 4 inchess ( 720 dots )
     */
    setMarginWidth(len: Length): ArrayBuffer {
        let marginBytes = Buffer.from([
            0x1b, 0x69, 0x6d,
            (len.dots % 256),
            (Math.floor(len.dots / 256))
        ])
        return marginBytes;
    }

    /**
     * _See page 40 in ESC/P guide for meanings of Modes, etc._
     * 
     */
    selectBitImage(mode = ImageBitMode.mode73): ArrayBuffer {
        throw Error("not implemented yet");
        /** Image Data Length in Bytes */
        let len = new Length(0);
        // let mode = 73;


        let imageBytes = Buffer.from([
            0x1b, 0x2a,
            (len.dots % 256),
            (Math.floor(len.dots / 256))
        ])
        return imageBytes;
    }


    /** imageSingleDensity
     * 
     * Each dot is 6 / 360th of an inch
     * One bit is expanded to 6 x 6 dots
     * 
     */
    static imageSingleDensity(): ArrayBuffer {
        
        let lenDots = 32;

        let imageBytes = Buffer.from([
            0x1b, 0x2a,
            (lenDots % 256),
            (Math.floor(lenDots / 256)),
            0xFF, 0xF0,
            0xFF, 0xF0,
            0xFF, 0xF0,
            0xFF, 0xF0,
            0xFF, 0xFF,
            0xFF, 0xFF,
            0xFF, 0xFF,
            0xFF, 0xFF,
            0xFF, 0xFF,
            0xFF, 0xFF,
            0xFF, 0xFF,
            0xFF, 0xFF,
            0x0F, 0xFF,
            0x0F, 0xFF,
            0x0F, 0xFF,
            0x0F, 0xFF,
        ])
        return imageBytes;
    }

    /**
     * same as mode39
     */
    imageQuadDensity() {
        /** max length is 256*256 + 256 ; around 64k */
        let len = 0;

    }

    /**
     * 1 dot = 1 "pixel"
     */
    imageMode73Density() {

    }



}

// works
async function example1() {
    let printer = new ThermalPrinter({
        type: PrinterTypes.EPSON,  // 'star' or 'epson'
        interface: 'tcp://192.168.10.41:9100',                       // Printer interface
        options: {
            timeout: 1000
        },
        characterSet: 'USA',          // Character set default SLOVENIA
    });

    // printer.print("eric")
    // await printer.execute()
    try {
        await printer.raw(
            Buffer.from([
                0x1b, 0x69, 0x61, 0x00
                , 0x1b, 0x40,
                // 0x1b, 0x69,
                // 0x1b, 0x40        // reset
                , 0x1b, 0x52, 0x0 // char set = USA
                , "E".charCodeAt(0)



                , 0x0c // send
                // , 0x1b, 0x69, 0x53
            ]))
    } catch (error) {
        console.error(error);
    }
}

async function example() {
    let printer = new ThermalPrinter({
        type: PrinterTypes.EPSON,  // 'star' or 'epson'
        interface: 'tcp://192.168.10.41:9100',                       // Printer interface
        options: {
            timeout: 1000
        },
        characterSet: 'USA',          // Character set default SLOVENIA
    });

    let labeler = new BrotherLabeler();

    let labelLen = new Length(0.75);

    let imageData = Buffer.from([
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
        0b10101010]);
    let lenDots = Buffer.byteLength(imageData);
    console.log(`sending image of size ${lenDots} bytes`);


    let imageBuf = Buffer.concat([
        Buffer.from([
            0x1b,
            0x4b,
            (lenDots % 256),
            (Math.floor(lenDots / 256))
        ]),
        imageData
    ]);

    try {
        await printer.raw(
            Buffer.concat([

                Buffer.from([
                    0x1b, 0x69, 0x61, 0x00,          // select ESC/P mode
                    0x1b, 0x40,                   // initialize ESC/P mode

                    0x1b, 0x33, 0,                 // line feed = 48 / 180th of an inch


                    // , 0x1b, 0x52, 0x0 // char set = USA

                    // set label length
                    0x1b, 0x69, 0x6c,
                    (labelLen.dots % 256),
                    (Math.floor(labelLen.dots / 256)),

                    // set margin width
                    0x1b, 0x69, 0x6d, 7, 0,          // set margin to smallest possible (7)

                    // 0x1b, 0x69, 0x43, 0b00000100,    // specify cut setting = chain print




                    0x1b, 0x24, 0, 0,                // specify horizontal position
                ]),
                imageBuf,

                labeler.newline,

                imageBuf,

                // labeler.newline,

                // Buffer.from([
                //     0x1b, 0x4b,
                //     (lenDots % 256),
                //     (Math.floor(lenDots / 256)),
                //     0b01010101,
                //     0b10101010,
                //     0b01010101,
                //     0b10101010,
                //     0x01, 0b10000000,
                //     0xFF, 0xFF,
                //     0x00, 0xFF,
                //     0xFF, 0xFF,
                //     0xFF, 0xFF,
                //     0xFF, 0xFF,
                //     0xFF, 0xFF,
                //     0xFF, 0xFF,
                //     0xFF, 0xFF,
                //     0xFF, 0xFF,
                //     0x0F,
                //     0xFF,
                //     0x0F,
                //     0xFF,
                //     0x0F, 0xFF,
                //     0x0F, 0xFF,
                //     0b01010101,
                //     0b10101010,
                //     0b01010101,
                //     0b10101010,
                //     0b01010101,
                //     0b10101010,
                //     0b01010101,
                //     0b10101010,
                //     0b01010101,
                //     0b10101010,
                //     0b01010101,
                //     0b10101010,


                Buffer.from([
                    // 0xFF if a new page is desired. This can auto-cut.

                    0x0c])
            ]))
        // console.log()
    } catch (error) {
        console.error(error);
    }
}



// Print all avaliable charcodes
// for (var i = 33; i < 255; i++) {
//     printer.print(i + ": ");
//     printer.add(Buffer.from([i]));
//     printer.print(", ");
// }

// printer.cut();
// await printer.execute();


//   let isConnected = await printer.isPrinterConnected();
//   console.log("Printer connected:", isConnected);

//   printer.setBuffer(Buffer.from("This is a test"));
//   printer.clear();

//   printer.alignCenter();
//   await printer.printImage('./Untitled.png');

//   printer.alignLeft();
//   printer.newLine();
//   printer.println("Hello World!");
//   printer.drawLine();

//   printer.upsideDown(true);
//   printer.println("Hello World upside down!");
//   printer.upsideDown(false);
//   printer.drawLine();

//   printer.invert(true);
//   printer.println("Hello World inverted!");
//   printer.invert(false);
//   printer.drawLine();

//   printer.println("Special characters: ČčŠšŽžĐđĆćßẞöÖÄäüÜé");
//   printer.drawLine();

//   printer.setTypeFontB();
//   printer.println("Type font B");
//   printer.setTypeFontA();
//   printer.println("Type font A");
//   printer.drawLine();

//   printer.alignLeft();
//   printer.println("This text is on the left");
//   printer.alignCenter();
//   printer.println("This text is in the middle");
//   printer.alignRight();
//   printer.println("This text is on the right");
//   printer.alignLeft();
//   printer.drawLine();

//   printer.setTextDoubleHeight();
//   printer.println("This is double height");
//   printer.setTextDoubleWidth();
//   printer.println("This is double width");
//   printer.setTextQuadArea();
//   printer.println("This is quad");
//   printer.setTextSize(7,7);
//   printer.println("Wow");
//   printer.setTextSize(0,0);
//   printer.setTextNormal();
//   printer.println("This is normal");
//   printer.drawLine();

//   try {
//     printer.printBarcode("4126570807191");
//     // printer.code128("4126570807191", {
//     //   height: 50,
//     //   text: 1
//     // });
//     printer.beep();
//   } catch (error) {
//     console.error(error);
//   }

//   printer.pdf417("4126565129008670807191");
//   printer.printQR("https://olaii.com");

//   printer.newLine();

//   printer.leftRight("Left", "Right");

//   printer.table(["One", "Two", "Three", "Four"]);

//   printer.tableCustom([
//     { text:"Left", align:"LEFT", width:0.5 },
//     { text:"Center", align:"CENTER", width:0.25, bold:true },
//     { text:"Right", align:"RIGHT", width:0.25 }
//   ]);


//   printer.cut();
//   printer.openCashDrawer();

//   try {
//     await printer.execute();
//     console.log("Print success.");
//   } catch (error) {
//     console.error("Print error:", error);
//   }
example();