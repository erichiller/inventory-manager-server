// Load the SDK for JavaScript
import * as AWS from 'aws-sdk';
import * as fs from 'fs';
import { S3_BUCKET, S3_SECRET_ACCESS_KEY, S3_ACCESS_KEY_ID } from '../../config';
import { IStorageDriver } from './IStorageDriver';
import { Readable } from 'stream';

// Set the Region 
AWS.config.update( { region: 'us-west-2' } );



export class StorageDriverS3 implements IStorageDriver {

    private readonly s3: AWS.S3;

    constructor () {
        this.s3 = new AWS.S3( {
            accessKeyId: S3_ACCESS_KEY_ID,
            secretAccessKey: S3_SECRET_ACCESS_KEY
        } );
    }

    getObject ( id: string ): Readable {
        // Setting up S3 upload parameters
        console.log(`StorageDriverS3 getting object with id=${id}`);
        const params: AWS.S3.GetObjectRequest = {
            Bucket: S3_BUCKET,
            Key: id, // File name you want to save as in S3
        };
        return this.s3.getObject( params ).createReadStream();
    }
    setFromFile(id: string, filePath: string){
        // Read content from the file
        const fileContent = fs.readFileSync( filePath );
        return this.setObject(id, fileContent);
    }

    setObject ( id: string, fileContent: AWS.S3.Body, callback?: ( err: Error, data: AWS.S3.ManagedUpload.SendData ) => void ){
        // Setting up S3 upload parameters
        const params: AWS.S3.PutObjectRequest = {
            Bucket: S3_BUCKET,
            Key: id, // File name you want to save as in S3
            Body: fileContent
        };
        if ( ! callback ){
            callback = function ( err, data, ) {
                if ( err ) {
                    throw err;
                }
                console.log( `File uploaded successfully. ${ data.Location }` );
            }
        }
        // Uploading files to the bucket
        this.s3.upload( params, callback );
    };

}
