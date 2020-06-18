-- FUNCTION: public.search(text, integer)
DROP FUNCTION public.search_item_prefer_vendor(text, integer, integer);
CREATE OR REPLACE FUNCTION public.search_item_prefer_vendor(
        query_text text,
        prefer_vendor_id int DEFAULT NULL,
        return_limit integer DEFAULT 100
    ) RETURNS SETOF item LANGUAGE 'plpgsql' COST 100 STABLE ROWS 1000 AS $BODY$ -- DECLARE
    --   like_query_text TEXT := replace( replace(query_text, '*', ''), '%', '');
    BEGIN RETURN QUERY
SELECT item.id,
    item.class,
    item.object,
    item.stock
FROM (
        SELECT item.id,
            item.class,
            item.object,
            item.stock
        FROM public.item
            JOIN public.search(query_text, return_limit) ON item.id = search.id
    ) as item
    LEFT JOIN (
        SELECT item_id,
            count(*) as matching_vendor_items
        FROM vendor_item
        WHERE vendor_item.vendor_id = prefer_vendor_id
        GROUP BY item_id
    ) as vendor_item ON vendor_item.item_id = item.id
    LEFT JOIN (
        SELECT item_id,
            count(*) as manufacturer_item_count
        FROM manufacturer_item
        GROUP BY item_id
    ) as manufacturer_item ON manufacturer_item.item_id = item.id
ORDER BY matching_vendor_items asc,
    manufacturer_item_count asc;
END;
$BODY$;
ALTER FUNCTION public.search_item(text, integer) OWNER TO eric;
GRANT EXECUTE ON FUNCTION public.search_item(text, integer) TO hasura;
GRANT EXECUTE ON FUNCTION public.search_item(text, integer) TO eric;
GRANT EXECUTE ON FUNCTION public.search_item(text, integer) TO PUBLIC;