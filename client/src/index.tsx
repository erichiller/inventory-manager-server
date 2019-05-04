import * as React from 'react';
import { ApolloProvider } from 'react-apollo';
import { render } from 'react-dom';
import { createUploadLink } from 'apollo-upload-client';
import { InMemoryCache, NormalizedCacheObject } from 'apollo-cache-inmemory';

import { ApolloClient } from "apollo-client";
import { ApolloCache } from 'apollo-cache';
import { CacheResolverMap } from 'apollo-cache-inmemory';

import App from './App';
import { ApolloLink } from 'apollo-link';

const GRAPHQL_API_URL = 'http://localhost:8080/graphql';
// const GRAPHQL_API_URL = 'http://localhost:8080/graphql';
// const GRAPHQL_API_URL = 'http://localhost:8090/v1alpha1/graphql';

const link = createUploadLink({ uri: GRAPHQL_API_URL }) as ApolloLink;

const cache = new InMemoryCache() as ApolloCache<NormalizedCacheObject>;

const client = new ApolloClient({
  link,
  cache
});

render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
  ,
  document.getElementById('root')
);