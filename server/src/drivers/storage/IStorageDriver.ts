
import { Stream } from 'stream';

// Generic interface to implmenent alternative storage drivers
export interface IStorageDriver {
    setObject: ( id: string, content: string | Stream | Buffer | Uint8Array, callback?: ( err: Error, etag: string ) => void ) => void;
    getObject: ( id: string ) => Promise<Stream>;
}