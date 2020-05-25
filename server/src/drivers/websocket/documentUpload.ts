import { v4 as uuidv4 } from 'uuid';
import { StorageDriverS3 } from '../storage/S3';
import * as WebSocket from 'ws';
import { IncomingMessage as HttpIncomingMessage } from 'http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { HASURA_GRAPHQL_API_URL, HASURA_ACCESS_KEY, TIKA_URL } from '../../config';
import ApolloClient from 'apollo-client';
import { gql } from 'apollo-server';
import { IFileUploadHeader } from '../IFileUploadHeader';
import fetch from 'cross-fetch';


function toHexString ( byteArray: ArrayBuffer ): string {
    return Array.prototype.map.call( byteArray, function ( byte ) {
        return ( '0' + ( byte & 0xFF ).toString( 16 ) ).slice( -2 );
    } ).join( ' ' );
}
function buf2str ( buf: ArrayBuffer ): string {
    return String.fromCharCode.apply( null, new Uint16Array( buf ) );
}


// event: "connection", cb: ( this: , socket: WebSocket, request: IncomingMessage
export function HandleWebsocketUploadConnection ( ws: WebSocket, req: HttpIncomingMessage ) {
    const ip = req.connection.remoteAddress;
    console.log( `----------------\nnew connection from ip ${ ip }` );

    ws.on( 'message', function incoming ( message: Uint8Array ) {
        console.log( message[ 0 ] );
        console.log( message[ 1 ] );
        console.log( message[ 2 ] );
        console.log( message[ 3 ] );

        if ( message[ 0 ] != 0x01 ) {
            return "Not a valid message type";
        }

        let headerLength = (
            ( message[ 1 ] * 0xFFFF ) +
            ( message[ 2 ] * 0xFF ) +
            message[ 3 ]
        );
        let header = JSON.parse( buf2str( message.slice( 4, 4 + headerLength ) ).toString() );
        console.log( 4, 4 + headerLength, buf2str( message.slice( 4, 4 + headerLength ) ).toString() );

        // fs.writeFile( 'message.txt', message.slice(headerLength+4), ( err ) => {
        //     if ( err ) throw err;
        //     console.log( 'It\'s saved!' );
        //     console.log( `received: ${ message.byteLength } bytes` );
        //     ws.send( "success" );
        // } );

        // const makeId = ( name: string ) => atob( name );

        let fileId = uuidv4();
        let fileData = message.slice( headerLength + 4 );
        new StorageDriverS3().setObject( fileId, fileData, ( err, data ) => {
            if ( err ) throw err;
            ws.send( "success" );
            console.log( `Saved file to ${ fileId }\n\t message:\n`, message );
            fetch( `${ TIKA_URL }/meta`, {
                method: 'PUT',
                headers: {
                    "Accept": "application/json"
                },
                body: fileData
            } )
                .then( res => {
                    if ( !res.ok ) { console.error( res.ok, res.headers ); return; }
                    res.json().then( metadata => {
                        console.log( { event: 'json() received', metadata } );
                        fetch( `${ TIKA_URL }/tika`, {
                            method: 'PUT',
                            // headers: {
                            //     "Accept": "application/json"
                            // },
                            body: fileData
                        } )
                            .then( res => {
                                if ( !res.ok ) { console.error( res.ok, res.headers ); return; }
                                res.text().then( content => {
                                    console.log( { event: 'text() received', content } );
                                    CreateDocumentGql( fileId, header, fileData.byteLength, content, metadata );
                                } );

                            } )
                            .catch( err => console.error( err ) );

                    } );

                } )
                .catch( err => console.error( err ) );
        } );
    } );

    ws.onopen = ( ev ) => console.log( ev );


    ws.on( 'close', function () {
        console.log( 'stopping client interval' );
        // clearInterval( id );
    } );
    ws.send( "hello" );
    console.log( "connection made" );
}

// function 


export function CreateDocumentGql (
    id: string,
    header: IFileUploadHeader,
    sizeBytes: number,
    content: string = "",
    metadata: object = {}
): Promise<boolean> {

    const cache = new InMemoryCache();
    const link = new HttpLink(
        {
            uri: HASURA_GRAPHQL_API_URL,
            headers: {
                'content-type': 'application/json',
                'x-hasura-admin-secret': HASURA_ACCESS_KEY
            },
            fetchOptions: {

            }
            , fetch
        } );
    const client = new ApolloClient( {
        cache,
        link,
    } );

    let lastModifiedDate = new Date( 0 );
    lastModifiedDate.setUTCMilliseconds( header.lastModified );
    console.log( {
        last_modified_date: lastModifiedDate.toISOString(),
        metadata: JSON.stringify( metadata, null, 2 ),
        sizeBytes
    } );

    console.log( "****************************************" );


    return client.mutate( {
        mutation: gql`
        mutation InsertDocFile(
            $add_user: uuid!
            $content: String
            $metadata: jsonb
            $mime_type: String
            $original_filename: String
            $last_modified: timestamp!
            $title: String
            $url: String
            $file_id: uuid!
            $size_bytes: Int
            $objects: [doc_object_map_insert_input!]!
        ) {
            insert_doc_file(
                objects: {
                    add_user: $add_user,
                    content: $content,
                    original_filename: $original_filename, 
                    last_modified: $last_modified,
                    metadata: $metadata
                    mime_type: $mime_type
                    title: $title, 
                    url: $url,
                    file_id: $file_id,
                    size_bytes: $size_bytes,
                    objects: { data: $objects }
                }
            ) {
                affected_rows
                returning {
                    id
                    metadata
                }
            }
        }
        `,
        variables: {
            add_user: header.userUuid,
            content: content,
            metadata: metadata,
            mime_type: metadata[ "Content-Type" ] ?? null,
            original_filename: header.fileName,
            last_modified: lastModifiedDate.toISOString(),
            title: '',
            url: '',
            file_id: id,
            size_bytes: sizeBytes,
            objects: header.objects
        }
    },
    )
        .then( result => {
            console.log( JSON.stringify( result ) );
            return result.data.insert_doc_file.affected_rows ? true : false;
        }
            , err => { console.error( "rejected with error\n", err ); return true; } )
        .catch( err => { console.error( "caught error", err ); return true; } );

}
