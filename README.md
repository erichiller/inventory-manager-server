# Inventory Manager & Labeler

## Apollo Client Setup

For code completion and other features of the [Apollo VSCode Extension]() an `apollo.config.js` must be created. Contents should be like:

```js
module.exports = {
    client: {
        service: {
            name: 'inventory-hasura',
            url: 'http://graphql:8080/v1/graphql',

            // optional headers
            headers: {
                "x-hasura-admin-secret": 'PASSWORD HERE'
            },
            // optional disable SSL validation check
            skipSSLValidation: true
        }
    }
};
```