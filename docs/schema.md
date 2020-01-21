# Schema and Data Structure




about below.
format is

<data_media> <data_name> (
    <field_name> : <field_data_type> [ → fkey ]
    ...
)


key here is to always make from the most specific item to the least specific.

item_hardware_fastener_bolt → item.id (Item)
item_hardware_fastener_bolt → manufacturer_item
item_hardware_fastener_bolt → (for bundle) = .item.bundle

also, all item_id must remain unique


Use schema comments:

```sql

COMMENT ON TABLE public.icon
    IS 'Image / icon data for labels';

COMMENT ON COLUMN public.icon.data
    IS 'Store image data in Base64';

```

====== Schema Start =====

```sql

(TypeScript)
abstract class GenericItem {
    id : Integer
    __typename : string
    icon (getter) : dataurl (SVG) -- common lookup of icon
    iconMatches
    icons
    labelTemplate
    labelTemplateMatches
    labelTemplates
    labelProps: [string] -- optional, all if not defined on extending class
    columnProps: [string] -- optional, all if not defined on extending class ; ordered
    searchProps: [string] -- optional, all if not defined on extending class ; ordered
    filterProps: [string] -- optional, all if not defined on extending class ; ordered
    sortProps: [string] -- optional, all if not defined on extending class ; ordered
    defaultQrProps: [string] -- or just use last
    item {
            name: string
            description: string
        } : Item
    tableRowComponent : ReactElement -- if not defined it is drawn from the props
    editComponent : ReactElement -- modal
    detailComponent : ReactElement -- single view
}

```


## fetch based on presence of sub-objects and arrays

https://docs.hasura.io/1.0/graphql/manual/queries/query-filters.html#filter-based-on-nested-objects-fields
    → fetch based on null, true
https://docs.hasura.io/1.0/graphql/manual/queries/query-filters.html#the-true-expression


## search with a single large document containing multiple queries

* USE [FUNCTIONS](https://docs.hasura.io/1.0/graphql/manual/schema/custom-functions.html)
  * or I suppose there is no harm in querying a bunch of fields in one GraphQL field
  * If multiple queries are part of the same request, they are executed in parallel


https://docs.hasura.io/1.0/graphql/manual/queries/multiple-queries.html
    → text queries
https://docs.hasura.io/1.0/graphql/manual/queries/query-filters.html#text-search-or-pattern-matching-operators-like-similar-etc
    → use directives
https://docs.hasura.io/1.0/graphql/manual/queries/variables-aliases-fragments-directives.html#using-directives
    → paginate (search and table display)
https://docs.hasura.io/1.0/graphql/manual/queries/pagination.html

    make GraphQL queries in a normal class
https://www.apollographql.com/docs/react/api/core/#ApolloClient.query


[no] alias fields ? ( item.name → name ) ( __typename → type_class ; to make compatible with the base `item` class )


## generated Columns

not sure they're even useful ? they're basically trigger functions to create locked columns.
<https://www.postgresql.org/docs/12/ddl-generated-columns.html>