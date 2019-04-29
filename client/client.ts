import {
    createHttpConnection,
    HttpConnection,
    TJSONProtocol,
    createHttpClient,
    TBufferedTransport
} from 'thrift'

import hello_svcClient from '../gen-js/hello_svc'

// The location of the server endpoint
const CONFIG = {
    hostName: 'localhost',
    port: 8045
}
 
const options = {
    transport: TBufferedTransport,
    protocol: TJSONProtocol,
    https: false,
    headers: {
        Host: CONFIG.hostName,
    }
}


const connection: HttpConnection = createHttpConnection(CONFIG.hostName, CONFIG.port, options);
const thriftClient: hello_svcClient = createHttpClient(hello_svcClient, connection);
 

// (function() {
// var nameElement: HTMLInputElement = <HTMLInputElement>document.getElementById("name_in");

// var outputElement = document.getElementById("output") as HTMLInputElement
// ( document.getElementById("get_msg") as HTMLButtonElement )
//     .addEventListener("click", 
thriftClient.get_message(name).then((result: string) => console.log(result))
//     )
// })();
