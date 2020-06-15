import * as express from 'express';


// TODO
async function getFavicon(url: string) {
    const html = ( await( await fetch( url,  ) ).text() ); // html as text
    const doc = new DOMParser().parseFromString( html, 'text/html' );


    var favicon = undefined;
    var nodeList = doc.getElementsByTagName( "link" );
    for ( var i = 0; i < nodeList.length; i++ ) {
        if ( ( nodeList[ i ].getAttribute( "rel" ) == "icon" ) || ( nodeList[ i ].getAttribute( "rel" ) == "shortcut icon" ) ) {
            favicon = nodeList[ i ].getAttribute( "href" );
        }
    }
    return favicon;
}

getFavicon("http://amazon.com");



export const faviconCache = ( req: express.Request, res: express.Response ) => {
    console.log( "params=", req.params );

    let doc_file_id = req.params.doc_file_id;

    // const cache = new InMemoryCache();
    // const link = new HttpLink( { uri: HASURA_GRAPHQL_API_URL, headers: { 'content-type': 'application/json', 'x-hasura-admin-secret': HASURA_ACCESS_KEY }, fetch } );
    // const client = new ApolloClient( {
    //     cache,
    //     link
    // } );

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
            console.log( `received graphql result for file with id=${ doc_file_id }\n`, result, result[ "data" ][ "doc_file" ][ 0 ] );
            let filename = result[ "data" ][ "doc_file" ][ 0 ][ "original_filename" ] || 'unknown_filename';
            let s3_obj_id = result[ "data" ][ "doc_file" ][ 0 ][ "file_id" ];
            res.writeHead( 200, {
                "Content-Type": "application/octet-stream",
                "Content-Disposition": "attachment; filename=" + filename
            } );
            new StorageDriverS3().getObject( s3_obj_id ).pipe( res );
        } );
};