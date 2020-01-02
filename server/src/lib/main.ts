import {BrotherLabeler, buf2hex} from './epson';
import { uint8 } from '../schema/type_uint8';


let printer = new BrotherLabeler();


const inputBuffer: uint8[][][] = [ [ [
    0xff,
    0x00,
    0xff,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0xff,
    0xff,
    0xff,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    // 0b00000111,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
] ] ];

let dotPositions = 20; // 150 / 8 for 12mm
for ( let i = 1; i < dotPositions; i++ ) {
    inputBuffer[ 0 ][ i ] = inputBuffer[ 0 ][ 0 ];
}
let pages = 2;
for ( let i = 1; i<pages ; i++ ){
    inputBuffer[i] = inputBuffer[0];
}


let x = printer.printRaster( inputBuffer );

x.then( result => console.log( "result is", result ) );

// let x = printer.getPrinterStatus();

// x.then( result => {

//     console.log("result is", result);
//     // console.log(result.statusBytes;
//     result.statusBytes.forEach( (b, i) => console.log(`${i}: ${buf2hex([b])}`));
// })

// console.log(x);


// ( async function () {
//     let res = await printer.getPrinterStatus();
//     console.log( res );
// } )();

// uptime
// iso.3.6.1.2.1.25.1.1.0

// // let printerUrl = "http://hp//";
// // let printerUrl = "http://deepthought:80/printers/BMP41/.printer";
// // let printerUsername = "eric@hiller.pro"
// let printerUrl = "http://deepthought:80//printers/Brother PT-P950NW/.printer";

// import * as ipp from "ipp";
// // import * as PDFDocument from 'pdfkit';

// var PDFDocument = require("pdfkit");



// var printer = ipp.Printer(printerUrl, {version: "1.0"});

// // var msg = {
// // 	"operation-attributes-tag": {
// // 		"requesting-user-name": "eric",
// // 		"message": "These are not the droids you are looking for"
// // 	}
// // };
// // printer.execute("Identify-Printer", msg, function(err, res){
// //     console.log(err);
// // 	console.log(res);
// // });



// printer.execute("Get-Printer-Attributes", null, function(err, res){
// 	console.log(err);
// 	console.log(res);
// });


// const buf = Buffer.from('eric');



// var file = {
// 	"operation-attributes-tag":{
// 		"requesting-user-name": printerUsername,
// 	"job-name": "Print Job",
// 	"document-format": "application/octet-stream"
// 	// "document-format": "application/pdf"
// 	},
// 	data: buf
// };

// printer.execute("Print-Job", file, function (err, res) {
// 	console.log( err);
// 	console.log( res);
// 	console.log("Printed: "+res.statusCode);
// });




// var doc = new PDFDocument;
// doc.text("Hello World");

// var buffers = [];
// doc.on('data', buffers.push.bind(buffers));
// doc.on('end', function () {
//     // var printer = ipp.Printer(printerUrl, {version: "1.0"});
//     var file = {
//         "operation-attributes-tag":{
//             "requesting-user-name": printerUsername,
//         "job-name": "Print Job",
//         "document-format": "application/octet-stream"
//         // "document-format": "application/pdf"
//         },
//         data: Buffer.concat(buffers)
//     };

//     printer.execute("Print-Job", file, function (err, res) {
//         console.log( err);
//         console.log( res);
//         console.log("Printed: "+res.statusCode);
//     });
// });
// doc.end();

