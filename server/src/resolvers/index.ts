import * as fs from 'fs';
import * as mkdirp from 'mkdirp';
import * as shortid from 'shortid';
import uint8_resolver from '../schema/type_uint8'
import {uint8} from '../schema/type_uint8'
import {print as printLabel} from '../lib/epson';
import { HttpLink } from 'apollo-link-http/lib/httpLink';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloClient } from 'apollo-client';
import fetch from 'node-fetch';
import { HASURA_GRAPHQL_API_URL, HASURA_ACCESS_KEY } from '../config';

export default {
  uint8: uint8_resolver,
  Mutation: {
    async uploadFiles(obj: any, { files }: any) {
      try {
        // load files to fs
        const uploadedFiles = await Promise.all(
          files.map(async (uploadPromise: any) => saveFile(await uploadPromise, 'public'))
        );
        // return filename and path to file
        return uploadedFiles;
      } catch (e) {
        console.log('error', e);
        throw new Error('upload:fileNotLoaded');
      }
    },
    putLabelMonochromeBuffer(obj: any, { imageBuffer }: {
      // __typename: "LabelMonochromeBuffer",
      imageBuffer: uint8[][][]
    }){
      console.log("received imageBuffer", imageBuffer, "\n received ", new Date().toISOString() );
      printLabel( imageBuffer );
      return {
        // __typename: "LabelMonochromeBuffer",
        imageBuffer: imageBuffer,
      };
    }
  }
};


const cache = new InMemoryCache();
const link = new HttpLink( { uri: HASURA_GRAPHQL_API_URL, headers: { 'content-type': 'application/json', 'x-hasura-admin-secret': HASURA_ACCESS_KEY }, fetch } );
const client = new ApolloClient( {
  cache,
  link
} );

const saveFile = (uploadFileStream: any, location: string): Promise<any> => {
  console.log( uploadFileStream);
  const { createReadStream, filename, mimetype } = uploadFileStream;
  const stream = createReadStream();
  const id = `${shortid.generate()}-`;
  const sanitizedFilename = filename.replace(/[^a-z0-9_.\-]/gi, '_').toLowerCase();
  const path = `${location}/${id}${sanitizedFilename}`;

  // Check if UPLOAD_DIR exists, create one if not
  if (!fs.existsSync(location)) {
    mkdirp.sync(location);
  }

  return new Promise((resolve, reject) =>
    stream
      .on('error', async (error: Error) => {
        if (stream.truncated) {
          // Delete the truncated file
          await stream.delete(path);
        }
        reject(error);
      })
      .pipe(fs.createWriteStream(path))
      .on('error', (error: Error) => reject(error))
      .on('finish', async () => {
        resolve( { path, name: filename, type: mimetype, base64: stream.toString('base64') } );


    //     return client.mutate( {
    //       mutation: gql`
    //   mutation insert_icons (
    //     objects: {
    //       data: 
    //     }
    //   )
    //   }
    // `
    //     } )
    //       .then( result => {
    //         let featuretypes = result[ "data" ][ "route_featuretypes" ]
    //         console.log( "route featuretypes result", result );
    //         console.log( "route featuretypes", featuretypes );
    //         return fetch( `${ GEOSERVER_URL }/rest/layers.json`,
    //           {
    //             method: 'GET',
    //             headers: {
    //               'Authorization': `Basic ` + btoa( `${ GEOSERVER_USERNAME }:${ GEOSERVER_PASSWORD }` )
    //             },
    //           } ).then(
    //             response => response.json()
    //           ).then(
    //             response => {
    //               console.log( "response\n========", JSON.stringify( response, null, 4 ) );
    //               let layers = response[ "layers" ][ "layer" ]
    //               console.log( "layers\n========", JSON.stringify( layers, null, 4 ) );
    //               return response[ "layers" ][ "layer" ]
    //             }
    //             // ).catch(
    //             //   error => console.error('Error:', error)
    //           )
    //           .then(
    //             layers => {
    //               let names = layers.map( layer => layer.name )
    //               console.log( "names", names );

    //               let found = featuretypes.filter( r => !names.includes( `mmi:${ r.name }` ) );
    //               console.log( "found", found );
    //               return found;
    //             }
    //           )
    //           .catch( error => console.warn( error ) );
    //       } );


      })
  );
}
