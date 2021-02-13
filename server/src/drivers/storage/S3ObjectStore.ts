// Load the SDK for JavaScript
import * as minio from 'minio';
import * as fs from 'fs';
import { S3_BUCKET, S3_SECRET_ACCESS_KEY, S3_ACCESS_KEY } from '../../config';
import { IStorageDriver } from './IStorageDriver';
import { Stream, Duplex } from 'stream';



export class S3ObjectStore implements IStorageDriver {

    private readonly client: minio.Client;

    constructor () {
        this.client = new minio.Client( {
            endPoint: 'play.min.io', // TODO
            port: 9000,
            useSSL: true,
            accessKey: S3_ACCESS_KEY,
            secretKey: S3_SECRET_ACCESS_KEY
            
        } );
    }

    getObject ( id: string ): Promise<Stream> {
        // Setting up S3 upload parameters
        console.log( `StorageDriverS3 getting object with id=${id}` );
        return this.client.getObject( S3_BUCKET, id );
    }
    setFromFile( id: string, filePath: string ){
        // Read content from the file
        const fileContent = fs.readFileSync( filePath );
        return this.setObject( id, fileContent );
    }

    setObject ( id: string, fileContent: string | ReadableStream | Buffer | Uint8Array, callback?: ( err: Error | null, etag: string ) => void ){
        // Setting up S3 upload parameters
        if ( ! callback ){
            callback = function ( err, etag ) {
                if ( err ) {
                    throw err;
                }
                console.log( `File uploaded successfully. ${etag}` );
            };
        }
        if ( fileContent instanceof ReadableStream ){
            this.client.putObject( S3_BUCKET, id, fileContent, callback );
        }
        // Uploading files to the bucket
        this.client.putObject( S3_BUCKET, id, Buffer.from( fileContent ), callback );
    }

}
