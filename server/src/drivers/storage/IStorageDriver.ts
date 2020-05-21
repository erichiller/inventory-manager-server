
import { Readable } from 'stream';

// Generic interface to implmenent alternative storage drivers
export interface IStorageDriver {
    setObject: ( id: string, content: Uint8Array, callback?: ( err: Error, data: AWS.S3.ManagedUpload.SendData ) => void ) => void;
    getObject: ( id: string ) => Readable;
}