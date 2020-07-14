
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';

import { createBrowserHistory } from 'history';

// export const history = createBrowserHistory({
//   basename: '', // The base URL of the app (see below)
//   forceRefresh: false, // Set true to force full page refreshes
//   keyLength: 6, // The length of location.key
//   // A function to use to confirm navigation with the user (see below)
//   getUserConfirmation: (message, callback) => callback(window.confirm(message))
// });

// history.listen((location, action) => {
//   console.log(
//     `The current URL is ${location.pathname}${location.search}${location.hash}`
//   );
//   console.log(`The last navigation action was ${action}`);
// });


// export const _history: string[] = [];

// history.listen((location, action) => {
//   console.log(
//     `The current URL is ${location.pathname}${location.search}${location.hash}`
//   );
//   console.log(`The last navigation action was ${action}`);
//   _history.push("eric was here");
// });

// Instantiate required constructor fields
const cache = new InMemoryCache();
const link = new HttpLink( {
    uri: process.env.HASURA_GRAPHQL_API_URL,
    headers: {
        "x-hasura-admin-secret": process.env.HASURA_ACCESS_KEY
    }
} );

export const apolloClient = new ApolloClient( {
    // Provide required constructor fields
    cache: cache,
    link: link,

    // Provide some optional constructor fields
    name: 'react-web-client',
    version: '1.3',
    queryDeduplication: false,
    defaultOptions: {
        watchQuery: {
            fetchPolicy: 'cache-and-network',
        },
    },
} );

export const history = createBrowserHistory( {
    basename: '', // The base URL of the app (see below)
    forceRefresh: false, // Set true to force full page refreshes
    keyLength: 6, // The length of location.key
    // A function to use to confirm navigation with the user (see below)
    getUserConfirmation: ( message, callback ) => callback( window.confirm( message ) )
} );


// export const _history: string[] = [];

// history.listen( ( location, action ) => {
//     console.log(
//         `The current URL is ${ location.pathname }${ location.search }${ location.hash }`
//     );
//     console.log( `The last navigation action was ${ action }` );
//     _history.push( "eric was here" );
// } );
