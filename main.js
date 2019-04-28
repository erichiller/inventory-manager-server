"use strict";
exports.__esModule = true;
var foo = /** @class */ (function () {
    function foo() {
    }
    foo.prototype.foo = function () {
        console.log("this");
    };
    return foo;
}());
var f = new foo();
console.log(f);
console.log("done");
// let printerUrl = "http://hp//";
// let printerUrl = "http://deepthought:80/printers/BMP41/.printer";
// let printerUsername = "eric@hiller.pro"
var printerUrl = "http://deepthought:80//printers/Brother PT-P950NW/.printer";
var ipp = require("ipp");
// import * as PDFDocument from 'pdfkit';
var PDFDocument = require("pdfkit");
var printer = ipp.Printer(printerUrl, { version: "1.0" });
// var msg = {
// 	"operation-attributes-tag": {
// 		"requesting-user-name": "eric",
// 		"message": "These are not the droids you are looking for"
// 	}
// };
// printer.execute("Identify-Printer", msg, function(err, res){
//     console.log(err);
// 	console.log(res);
// });
printer.execute("Get-Printer-Attributes", null, function (err, res) {
    console.log(err);
    console.log(res);
});
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
