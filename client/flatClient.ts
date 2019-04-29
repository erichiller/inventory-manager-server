import {flatbuffers} from "flatbuffers";

// import 


// let builder = new flatbuffers.Builder(0);
// let weaponOne = builder.createString('Sword');



// note: import flabuffers with your desired import method
import { Label } from './labelDef';




let data = new Uint8Array([ 0x33, 0x34 ]);
let buf = new flatbuffers.ByteBuffer(data);
let label = Label.Label.getRootAsLabel(buf);

let data = 