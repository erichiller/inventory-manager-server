# Apollo Client ( Apollo React Client )

## Types

* [Naming Conventions](https://www.apollographql.com/docs/apollo-server/schema/schema/#naming-conventions)
  * `camelCase` for field names
  * `PascalCase` for Type names (Objects/Classes)
  * `PascalCase` for Enum Names
  * `ALL_CAPS` for Enum Values
* [Basic GraphQL Types](https://www.apollographql.com/docs/apollo-server/schema/schema/#supported-types)
  * [Scalars](https://www.apollographql.com/docs/apollo-server/schema/schema/#scalar-types)
    * `Int`: A signed 32‐bit integer
    * `Float`: A signed double-precision floating-point value
    * `String`: A UTF‐8 character sequence
    * `Boolean`: `true` or `false`
    * `ID` (serialized as a `String`): A unique identifier that's often used to refetch an object or as the key for a cache. Although it's serialized as a `String`, an `ID` is not intended to be human‐readable.
* [Underlying type (src)](https://github.com/apollographql/apollo-client/blob/master/src/core/networkStatus.ts#L4)
* [Apollo Codegen source for generating type definitions](https://github.com/apollographql/apollo-tooling/blob/master/packages/apollo-codegen-typescript/src/codeGeneration.ts)


* [Apollo Client API & Types](https://www.apollographql.com/docs/react/api/apollo-client/#types)

