import * as express from 'express';
import { S3ObjectStore } from './S3ObjectStore';
import { gql } from "apollo-server";
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import fetch from 'cross-fetch';
import { HASURA_GRAPHQL_API_URL, HASURA_ACCESS_KEY } from '../../config';

export const s3FileDownload = ( req: express.Request, res: express.Response ) => {
    console.log( "params=", req.params );

    let doc_file_id = req.params.doc_file_id;

    const cache = new InMemoryCache();
    const link = new HttpLink( { uri: HASURA_GRAPHQL_API_URL, headers: { 'content-type': 'application/json', 'x-hasura-admin-secret': HASURA_ACCESS_KEY }, fetch } );
    const client = new ApolloClient( {
        cache,
        link
    } );

    client.query( {
        query: gql`
            query MyQuery( $id: Int) {
                doc_file(where: {id: {_eq: $id}}) {
                    add_date
                    add_user
                    file_id
                    last_modified
                    original_filename
                    title
                }
            }
        `,
        variables: {
            id: doc_file_id
        }
    } )
        .then( result => {
            console.log( `received graphql result for file with id=${doc_file_id}\n`, result, result["data"]["doc_file"][0] );
            let filename = result[ "data" ][ "doc_file" ][0][ "original_filename" ] || 'unknown_filename';
            let s3_obj_id = result[ "data" ][ "doc_file" ][0][ "file_id" ];
            res.writeHead( 200, {
                "Content-Type": "application/octet-stream",
                "Content-Disposition": "attachment; filename=" + filename
            } );
            return new S3ObjectStore().getObject( s3_obj_id );
        } )
        .then( objectResponseStream => objectResponseStream.pipe( res ) );
};