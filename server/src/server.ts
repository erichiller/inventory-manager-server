import { ApolloServer } from 'apollo-server-express';
import * as GraphiQL from 'apollo-server-module-graphiql';
import cors from 'cors';
import express from "express";
import bodyParser from 'body-parser';

import getSchema from './schema';

import { execute, subscribe } from 'graphql';
import { createServer as createHttpsServer, Server as HttpsServer, ServerOptions } from 'https';
import { createServer as createHttpServer, Server as HttpServer } from 'http';
import { SubscriptionServer } from 'subscriptions-transport-ws';
import * as url from 'url';
import * as WebSocket from 'ws';
import { HandleWebsocketUploadConnection } from './drivers/websocket/documentUpload';
import { s3FileDownload } from './drivers/storage/S3FileDownload';


type ExpressGraphQLOptionsFunction = ( req?: express.Request, res?: express.Response ) => any | Promise<any>;

function graphiqlExpress ( options: GraphiQL.GraphiQLData | ExpressGraphQLOptionsFunction ) {
    const graphiqlHandler = ( req: express.Request, res: express.Response, next: any ) => {
        const query = req.url && url.parse( req.url, true ).query;
        GraphiQL.resolveGraphiQLString( query, options, req ).then(
            ( graphiqlString: any ) => {
                res.setHeader( 'Content-Type', 'text/html' );
                res.write( graphiqlString );
                res.end();
            },
            ( error: any ) => next( error )
        );
    };

    return graphiqlHandler;
}

export async function startServer ( port: number ): Promise<HttpServer | HttpsServer> {
    //   const schema = await getSchema();
    const schema = getSchema;
    const app = express();

    const server: HttpServer = createHttpServer( app );

    app.use( '*', cors( { origin: 'http://localhost:3000' } ) );
    app.use( '/public', express.static( 'public' ) );
    app.use( bodyParser.json( { limit: '5mb' } ) );

    const apolloServer = new ApolloServer( {
        introspection: true,
        playground: true,
        schema
    } );

    apolloServer.applyMiddleware( { app, path: '/graphql' } );

    if (module.hot) {
        console.log( "module is hot" );
    }
    app.use(
        '/graphiql',
        graphiqlExpress( {
            endpointURL: '/graphql',
            query:
                '# Welcome to your own GraphQL server!\n#\n' +
                '# Press Play button above to execute GraphQL query\n#\n' +
                '# You can start editing source code and see results immediately\n\n' +
                'query hello($subject:String) {\n  hello(subject: $subject)\n}',
            subscriptionsEndpoint: `ws://localhost:${ port }/subscriptions`,
            variables: { subject: 'World' }
        } )
    );


    app.get( '/file/:doc_file_id', s3FileDownload );


    var wsServer = new WebSocket.Server( {
        noServer: true,
        maxPayload: 1000000000 // 1 GB
    } );
    wsServer.on( 'connection', HandleWebsocketUploadConnection );

    server.on( 'upgrade', function ( request, socket, head ) {
        console.log( "upgrade" );
        var pathname = url.parse( request.url ).pathname;

        if ( pathname === '/uploadFile' ) {
            console.log( "uploadFile" );
            wsServer.handleUpgrade( request, socket, head, function ( ws ) {
                console.log( "handleUpgrade for uploadFile" );
                wsServer.emit( 'connection', ws, request );
            } );
        } else if ( pathname === '/subscriptions' ) {
            console.log( "apollo - /subscriptions" );
            wsServer.handleUpgrade( request, socket, head, function ( ws ) {
                console.log( "handleUpgrade for apollo - /subscriptions" );
                wsServer.emit( 'connection', ws, request );
            } );
        } else {
            socket.destroy();
        }
    } );

    var wsApolloServer = new WebSocket.Server( {
        noServer: true
    } );



    return new Promise<HttpServer | HttpsServer>( resolve => {
        server.listen( port, () => {
            // tslint:disable-next-line
            new SubscriptionServer(
                {
                    execute,
                    schema,
                    subscribe
                },
                wsApolloServer
            );
            resolve( server );
        } );
    } );
};
