import * as React from 'react';
// import { ApolloProvider } from 'react-apollo';
import { render } from 'react-dom';
import { createUploadLink } from 'apollo-upload-client';
// import { InMemoryCache, NormalizedCacheObject } from 'apollo-cache-inmemory';

// import { ApolloClient } from "apollo-client";
// import { ApolloCache } from 'apollo-cache';
// import { CacheResolverMap } from 'apollo-cache-inmemory';

import App from './App';
import { ApolloLink } from 'apollo-link';
import { ApolloProvider } from '@apollo/react-hooks';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { HASURA_GRAPHQL_API_URL, HASURA_ACCESS_KEY } from '../../server/src/config';

import './styles/index.css';

// const link = createUploadLink({ 
//   uri: HASURA_GRAPHQL_API_URL,
//   headers: {
//     "x-hasura-admin-secret": HASURA_ACCESS_KEY
//   }
// }) as ApolloLink;

// const cache = new InMemoryCache() as ApolloCache<NormalizedCacheObject>;

// const client = new ApolloClient({
//   link,
//   cache
// });


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
const link = new HttpLink({
  uri: HASURA_GRAPHQL_API_URL,
  headers: {
    "x-hasura-admin-secret": HASURA_ACCESS_KEY
  }
});

const apolloClient = new ApolloClient({
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
});

render(
  <ApolloProvider client={apolloClient}>
    <App />
  </ApolloProvider>
  ,
  document.getElementById('root')
);