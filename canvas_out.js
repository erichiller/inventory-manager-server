
// defs

// let widthInches = 0.75;
const widthInches = 0.1;

const heightInches = 10 / 25.4; // 10mm
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
    ctx.fillRect(0, 0, 10, 5);
    ctx.fillRect(0, 10, 10, 5);
    ctx.fillStyle = "#000000";
    ctx.font = "30px Arial";
    ctx.fillText("Hello World", 10, 50);

    // load image from data url
    // var myImg = new Image();
    // myImg.src = "https://www.w3schools.com/graphics/pic_the_scream.jpg";
    // myImg.onload = function () {
    //     ctx.drawImage(myImg, 0, 0);
    // }
    // ctx.drawImage(myImg, 0, 0);

    const imgData = ctx.getImageData(0, 0, 8, 7);
    // const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);

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
    for (i = 0, pxl = 0; i < imgData.data.length; i += 4, pxl++) {
        let col = pxl % imgData.width;
        let row = Math.floor(pxl / widthDots);

        let line = Math.floor(row / pxlPerLine);
        // let linebit = (pxlPerLine - 1) - (row % pxlPerLine);
        let linebit = row % pxlPerLine;
        let byteBit = linebit % 8;
        let lineByte = Math.floor(linebit / 8);
        // if (pxl > 37) {
        //     break;
        // }
        // white = 1 ; black = 0
        isWhite = 1
        // Color set to max 3, 4th bit is alpha, and would always trigger it
        for (colorByte = 0; colorByte < 3; colorByte++) {
            if (imgData.data[i + colorByte] > 200) {
                isWhite = 0;
                break;
            }
        }
        console.log(`[{${line}} ${col}, ${row} (${lineByte} + ${byteBit})] = ${isWhite}`)

        buf[line][col][lineByte] = buf[line][col][lineByte] | (isWhite << byteBit)

        console.log(`${(buf[line][col][lineByte] >>> 0).toString(2)} [0x${(buf[line][col][lineByte] >>> 0).toString(16).toUpperCase()}]`)
        // console.log(buf[line][col] )
    }
    displayConsoleBuf(buf);
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

let buf = zeroBuf();
document.addEventListener("DOMContentLoaded", loadCanvas);