# Schema and Data Structure

* [ ] use the default icon for a class as it's identifying icon in graphical elements.






about below, the format is:

```text
<data_media> <data_name> (
    <field_name> : <field_data_type> [ → fkey ]
    ...
)
```


key here is to always make from the most specific item to the least specific.

* `item_hardware_fastener_bolt` → `item.id` (`Item`)
* `item_hardware_fastener_bolt` → `manufacturer_item`
* `item_hardware_fastener_bolt` → (for `bundle`) = `.item.bundle`


also, all `item_id` must remain unique


Use schema comments:

```sql

COMMENT ON TABLE public.icon
    IS 'Image / icon data for labels';

COMMENT ON COLUMN public.icon.data
    IS 'Store image data in Base64';

```

## Schema Start

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

[Filtering based on nested/child objects' fields](https://docs.hasura.io/1.0/graphql/manual/queries/query-filters.html#filter-based-on-nested-objects-fields)

[fetch based on null, true](https://docs.hasura.io/1.0/graphql/manual/queries/query-filters.html#the-true-expression)

## Document / bulk text search

> Search with a single large query document containing multiple queries

* USE [FUNCTIONS](https://docs.hasura.io/1.0/graphql/manual/schema/custom-functions.html)
  * or I suppose there is no harm in querying a bunch of fields in one GraphQL field
* If [multiple queries][multiple_queries] are part of the same request, they are executed in parallel.
* [Text search and text matching queries][text_search]
* [Directives to conditionally control outputs][directives]



* [paginate (search and table display)][paginate] ( even if the data is displayed as a continuous scroll, the queries should be executed in chunks.)

* [How to make GraphQL queries in a normal class](https://www.apollographql.com/docs/react/api/core/#ApolloClient.query)


[no] alias fields ? ( item.name → name ) ( __typename → type_class ; to make compatible with the base `item` class )


## Generated Columns

I'm not even sure [Generated Columns][generated_columns] are useful ? they're essentially trigger functions to create locked columns.





***************************************************

[multiple_queries]: https://docs.hasura.io/1.0/graphql/manual/queries/multiple-queries.html

[text_search]: https://docs.hasura.io/1.0/graphql/manual/queries/query-filters.html#text-search-or-pattern-matching-operators-like-similar-etc

[directives]: https://docs.hasura.io/1.0/graphql/manual/queries/variables-aliases-fragments-directives.html#using-directives

[paginate]: https://docs.hasura.io/1.0/graphql/manual/queries/pagination.html

[generated_columns]: https://www.postgresql.org/docs/12/ddl-generated-columns.html


























see OneNote
... PostgreSQL


about below.
format is

```sql
<data_media> <data_name> (
    <field_name> : <field_data_type> [ → fkey ]
    ...
)
```

key here is to always make from the most specific item to the least specific.

`item_hardware_fastener_bolt` → `item.id` (`Item`)
`item_hardware_fastener_bolt` → `manufacturer_item`
`item_hardware_fastener_bolt` → (for bundle) = `item.bundle`

also, all `item_id` must remain unique

## Schema Start


```sql
table order (
    id : Integer
    vendor_order_id : text
    url : text
    pon : text # purchase order
    vendor_id : Integer → Vendor
    placed_date: Date
    fulfilled_date: Date
    items_cost: numeric
    tax_cost: numeric
    total_cost: numeric
    payment_method_id : Integer → payment_method
) -- ✔

-- shipments, since many ship multiple for 1 order
table shipment (
    id: Integer
    order_id: Integer
    vendor_invoice_id: text
    shipped_date: Date
    received_date: Date
    shipping_cost: numeric
    tracking_id: text
    shipping_carrier: ENUM ?
) -- ✔

table vendor (
    id : Integer
    name : text
    url : text
    account_id : text
) -- ✔

table payment_method (
    id : Integer
    name : text
    class : PAYMENT_METHOD_ENUM
) -- ✔

enum PAYMENT_METHOD_ENUM (
    CC | ACH | CHECK | CASH
) -- ✔

-- manufacturer_item kept here as opposed to vendor_item because in some cases the vendor's item id can stay the same while the manufacturer changes
table order_item (
    manufacturer_item_id - integer, nullable -- link to manufacturer item, which in turn links to item
    serial_no - text, nullable               -- individual items unique id (as provided by manufacturer)
    cost_item - money, nullable
    order_id - integer, primary key
    shipment_id - integer, nullable
    cost_tax - money, nullable
    cost_total - money, nullable
    vendor_item_id - integer, nullable
    quantity - numeric, nullable
    item_id - integer, primary key           -- provided in addition to `manufacturer_item_id` because the manufacturer isn't always known
) -- ✔

table vendor_item (
    id
    vendor_id
    vendor_part_id
    item_id → item  -- if its a bundle then the bundle's items can be taken into account
) -- ✔


table manufacturer (
    id : seq
    name : Text
    url : Text
    vendor_id? : Text
) -- ✔

table manufacturer_item (
    id : Integer
    manufacturer_id: Integer
    product_url : text
    manufacturer_item_id: text
    item_id → item              -- if its a bundle then the bundle's items can be taken into account
) -- ✔

/**
 * individual items from all classes tracked here
**/
table item (
    id: Integer
    class: item_class → item_class (enum)
    metadata : string  -- object metadata is kept up to date with triggers
    -- links / relationships here are not in sql,
    -- are relationships defined in GraphQL
    labelTemplates : → label_template[ ]
    vendorItems : → vendor_item[ ]
    manufacturerItems → manufacturer_item[ ]
    bundles → item_bundle[ ]
) -- ✔

table item_bundle (
    item_id → item
) -- ✔

table image_icon_map (
    image_id → image
    item_class → enum
    sequence : integer
    criteria : jsonb    -- json rules in the form of:
                        -- { [propKey: keyof item_class]: regex }
                        -- this is then evaluated for each entry
                        -- evaluation is done in the sequence order
                        -- see jsonb filtering
-- https://docs.hasura.io/1.0/graphql/manual/queries/query-filters.html#jsonb-operators-contains-has-key-etc
) -- ✔

view item_class (
    -- enum of any tables that start with `item_`
    -- or... maybe a new schema (not containing item view)
    -- exposed in GraphQL as ENUM
)

table label_template_map (
    label_id : uuid
    item_class : item_class ( → enum)
    sequence : smallint             -- order in which chosen
                                    -- unique index is then all 3 to keep duplicates from occurring
    criteria : jsonb  -- json rules in the form of:
                      -- { [propKey: keyof item_class]: regex }
                      -- this is then evaluated for each entry
                      -- evaluation is done in the sequence order
                      -- see jsonb filtering
-- https://docs.hasura.io/1.0/graphql/manual/queries/query-filters.html#jsonb-operators-contains-has-key-etc
) -- ✔

table label_item_map (
    label_id : uuid
    item_id: Integer  -- must be in item table
) -- ✔
```


(TypeScript)

```ts
abstract class GenericItem {
    id : Integer
    __typename : string
    icon (getter) : dataurl (SVG) # common lookup of icon
    iconMatches
    icons
    labelTemplate
    labelTemplateMatches
    labelTemplates
    labelProps: [string] # optional, all if not defined on extending class
    columnProps: [string] # optional, all if not defined on extending class ; ordered
    searchProps: [string] # optional, all if not defined on extending class ; ordered
    filterProps: [string] # optional, all if not defined on extending class ; ordered
    sortProps: [string] # optional, all if not defined on extending class ; ordered
    defaultQrProps: [string] # or just use last
    item {
            name: string
            description: string
        } : Item
    tableRowComponent : ReactElement # if not defined it is drawn from the props
    editComponent : ReactElement # modal
    detailComponent : ReactElement # single view
}
```

... then

```ts
class ItemHardwareFastenerBolt extends GenericItem {
# specific props here
} ✔
```

## Items and their presence in `Order`, `Vendor`, `Manufacturer`, `Shipment`

Item search should:

For item entry within the form:
- Type into searchable field as currently.
- searches through 3 tables / objects and displays all results, sorted as the below order:
    1. `vendor_item.item` when _`vendor_item.vendor_id == order.vendor_id`_
        - if a `vendor_item` is selected, and if it has `manufacturer`. **DONE**  
        - a `vendor_item` is selected, and if it does not have a `manufacturer`. **continue, the user should create a new `vendor_item`**

    2. `manufacturer_item.item`
         - if selected, allow the user to create a new vendor_item

    3. `item`
        - if selected allow the user to assign/create a `manufacturer_item` and `vendor_item`

    ! create extra item related objects 
        - `manufacturer_item`
        - `vendor_item`
        - `shipment`
      with forms embedded inside an [antd collapse](https://ant.design/components/collapse/)


- assign a value for `item_id`
- (optional) set `vendor_item_id`
    - create if required  
        basic: `vendor_item_id` & `item_id`
- (optional) set `manufacturer_item_id`
    - create if required  
        basic: `manufacturer` & `item_id`
- (optional) set `shipment`  
    - create if required  
        basic: `tracking_id` ?
        - no can't be required, because the `tracking_id` isn't always known when the items on an order are split into shipments.  
        - use groups of items and an optional `tracking_id` field  
        - **as items are assigned shipments sort them in the form so that items on the same shipment are adjacent. This should ease the confusion of an initially arbitrary `shipment.id` ( rather than `shipment.tracking_id` ).**
- (optional) `serial_no`
- (optional) `cost_item`
- (optional) `cost_tax`
- (optional) `cost_total`
- (optional) `quantity`



### order_item:
 - **order_id**
 - **item_id**
 - vendor_item_id
 - manufacturer_item_id
 - shipment_id
 - serial_no
 - cost_item
 - cost_tax
 - cost_total
 - quantity

`item_id` -- it's redundant, but so what? as long as there's a check constraint ????? 
  * [ ] try: foreign key on  
    - `vendor_item_id`
    - `item_id`  
        ?? would this enforce :
        ```
        if vendor_item_id then:    
            vendor_item_id.item_id === this.item_id
        ```
        otherwise I could write a constraint for this  
        **this would probably make writing code faster, but lookups slower**



_unique_ on: ( `item_id`, `order_id` ) 

`order_item` represents a real-world item that is an instance of `item`, 
- with a `manufacturer` attached (potentially)
- with the vendor item attached ?? not sure if this should be mandatory. In fact I'm pretty sure it shouldn't be mandatory. (mandatory, but anonymous/generated vendor items are allowed



vendor_item:
 - id
 - vendor_id
 - sku
 - item_id
 - description
 # this should track "variations" of the item_id.
     For example the item might be cat6 550mhz
     but the vendor item would be 1000ft of it.

manufacturer_item:
 - id
 - manufacturer_product_id
 - manufacturer_product_name
 - manufacturer_product_series
 - product_url
 - manufacturer_id
 - item_id
 


## Additional Notes

* [fetch based on presence of sub-objects and arrays](https://docs.hasura.io/1.0/graphql/manual/queries/query-filters.html#filter-based-on-nested-objects-fields)
* [fetch based on null, true](https://docs.hasura.io/1.0/graphql/manual/queries/query-filters.html#the-true-expression)


    search with a single large document containing multiple queries ?
    = USE [FUNCTIONS](https://docs.hasura.io/1.0/graphql/manual/schema/custom-functions.html)
    = or I suppose there is no harm in querying a bunch of fields in one GraphQL field
    → If [multiple queries are part of the same request, they are executed in parallel](https://docs.hasura.io/1.0/graphql/manual/queries/multiple-queries.html)
    → [text queries](https://docs.hasura.io/1.0/graphql/manual/queries/query-filters.html#text-search-or-pattern-matching-operators-like-similar-etc)

use [directives](https://docs.hasura.io/1.0/graphql/manual/queries/variables-aliases-fragments-directives.html#using-directives)

[paginate (search and table display)](https://docs.hasura.io/1.0/graphql/manual/queries/pagination.html)

[make GraphQL queries in a normal class](https://www.apollographql.com/docs/react/api/core/#ApolloClient.query)


~~alias fields ? ( `item.name` → `name` ) ( `__typename` → `type_class` ; to make compatible with the base `item` class )~~


~~[generated Columns](https://www.postgresql.org/docs/12/ddl-generated-columns.html) - I'm not sure they're even useful ? they're basically trigger functions to create locked columns.~~

