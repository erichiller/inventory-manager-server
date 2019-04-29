
// defs

// let widthInches = 0.75;
// const heightInches = 10 / 25.4 / 3 ; // 10mm !!! #note: need a better way to determine height of "line"
const widthInches = 0.55;
const heightInches = 0.2

const dpi = 360;

const widthDots = Math.floor(dpi * widthInches);
const heightDots = Math.floor(dpi * heightInches);

const pxlPerLine = 6 * 8; // ( 6 bytes, will be packed as 1 pixel = 1 bit in line = 1 dot (in mode73))
const linesCount = Math.ceil(heightDots / pxlPerLine);

if (pxlPerLine % 8 != 0) {
    throw Error("There can not be a non 8 multiple amount of pxlPerLine")
}
const bytesPerLine = pxlPerLine / 8;




function zeroBuf() {
    let buf = [];
    console.log(`canvas size is ${widthDots} x ${heightDots}`);
    console.log(`array ( lines * cols * bytes ) ${linesCount} x ${widthDots} x ${bytesPerLine}`)
    for (line = 0; line < linesCount; line++) {
        buf[line] = [];
        for (col = 0; col < widthDots; col++) {
            buf[line][col] = []
            for (bytePos = 0; bytePos < bytesPerLine; bytePos++) {
                buf[line][col][bytePos] = 0
            }
        }
    }
    return buf;
}

function loadCanvas() {

    console.log("loadCanvas")

    let canvas = document.getElementById("labelCanvas");
    canvas.width = widthDots;
    canvas.height = heightDots;

    let ctx = canvas.getContext("2d");
    ctx.fillStyle = "#FF0000";
    ctx.fillRect(0, 0, 3, 5);
    ctx.fillRect(0, 10, 10, 5);
    ctx.fillStyle = "#000000";
    ctx.font = "30px Arial";
    ctx.fillText("Hello World", 10, 20);
    ctx.fillText("Eric Hiller", 10, 45);
    ctx.fillText("Neilikka Hiller", 10, 70);

    // load image from data url
    // var myImg = new Image();
    // myImg.src = "https://www.w3schools.com/graphics/pic_the_scream.jpg";
    // myImg.onload = function () {
    //     ctx.drawImage(myImg, 0, 0);
    // }
    // ctx.drawImage(myImg, 0, 0);

    const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);

    // function getImageSize(){
    //   console.log(`imgDataLength is ${imgData.data.length}`)
    //   console.log(`imgDataLength pixels ${Math.floor(imgData.data.length/4)}`)
    //   console.log(`imgDataLength pixels ${Math.floor(imgData.data.length/4 / 300)}`)
    // }

    if (pxlPerLine == 0) {
        throw Error("There can not be 0 pixels per line output");
    }

    console.log(`imageData.width = ${imgData.width}
    widthDots = ${widthDots}
    `)

    /** 
    ARGGG Javascript only does Bit math in 32 bits. doing `1 << 33` is the same as `1 << 1`
    */
    for (i = 0, pxl = 0; i < imgData.data.length && i < (widthDots * heightDots * 4); i += 4, pxl++) {
        let col = pxl % widthDots;
        let row = Math.floor(pxl / widthDots);

        let line = Math.floor(row / pxlPerLine);
        // let linebit = (pxlPerLine - 1) - (row % pxlPerLine);
        let linebit = row % pxlPerLine;
        let byteBit = 8 - 1 - (linebit % 8)
        let lineByte = Math.floor(linebit / 8);
        // white = 0 ; black = 1
        isBlack = 0
        // Canvas sets black 00,00,00,FF to black and 00,00,00,00 to white
        for (colorByte = 0; colorByte < 4; colorByte++) {
            if (imgData.data[i + colorByte] > 200) {
                isBlack = 1;
                break;
            }
        }

        // var {red, green, blue, alpha} = imgData.data.slice(i, i+4);
        var [red, green, blue, alpha] = imgData.data.slice(i, i+4);
        console.log(`[{${line}} ${col}, ${row} (${lineByte} + ${byteBit})] = ${isBlack} (red=${red} blue=${blue} green=${green} alpha=${alpha})`)

        buf[line][col][lineByte] = buf[line][col][lineByte] | (isBlack << byteBit)

        console.log(`${(buf[line][col][lineByte] >>> 0).toString(2).padStart(8, 0)} [0x${(buf[line][col][lineByte] >>> 0).toString(16).toUpperCase().padStart(2, 0)}]`)
        // console.log(buf[line][col] )
    }
    displayConsoleBuf(buf);
    outputHex(buf);
}

function displayConsoleBuf(buf) {
    console.log(`buffer length is ${buf.length}`)
    for (line = 0; line < buf.length; line++) {
        for (col = 0; col < widthDots; col++) {
            logMsg = "";
            for (lineByte = 0; lineByte < bytesPerLine; lineByte++) {
                logMsg += `${(buf[line][col][lineByte] >>> 0).toString(2).padStart(8, 0)} [0x${(buf[line][col][lineByte] >>> 0).toString(16).toUpperCase().padStart(2, 0)}]  `
            }
            console.log(logMsg)
        }
    }
}

function outputHex(buf) {
    for ( line = 0; line < buf.length; line++){
        // console.log(`{${buf[line]}} length of ${buf[line].length}`)
        let lineHex = ""
        for ( col = 0; col < buf[line].length; col++){
            // console.log(`{${line}} , ${col}`)
            for ( lineByte = 0; lineByte < buf[line][col].length ; lineByte++ ){
                lineHex += `0x${(buf[line][col][lineByte] >>> 0).toString(16).toUpperCase().padStart(2, 0)} , `
            }
        }
        lineHex = lineHex.slice(0, -2); // remove trailing comma
        console.log(lineHex)
    }
}

let buf = zeroBuf();
document.addEventListener("DOMContentLoaded", loadCanvas);