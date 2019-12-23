import {BrotherLabeler, buf2hex} from './epson';


let printer = new BrotherLabeler();

let x = printer.printRaster([]);

x.then( result => console.log("result is", result))

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

