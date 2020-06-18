--
-- PostgreSQL database dump
--

-- Dumped from database version 12.3
-- Dumped by pg_dump version 12.3

-- Started on 2020-06-18 09:42:48

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- TOC entry 3883 (class 1262 OID 16927)
-- Name: inventory; Type: DATABASE; Schema: -; Owner: hasura
--

CREATE DATABASE inventory WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'C' LC_CTYPE = 'C';


ALTER DATABASE inventory OWNER TO hasura;

\connect inventory

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- TOC entry 13 (class 2615 OID 16928)
-- Name: enum; Type: SCHEMA; Schema: -; Owner: hasura
--

CREATE SCHEMA enum;


ALTER SCHEMA enum OWNER TO hasura;

--
-- TOC entry 11 (class 2615 OID 31915)
-- Name: enum_item; Type: SCHEMA; Schema: -; Owner: hasura
--

CREATE SCHEMA enum_item;


ALTER SCHEMA enum_item OWNER TO hasura;

--
-- TOC entry 15 (class 2615 OID 31816)
-- Name: enum_item_cable; Type: SCHEMA; Schema: -; Owner: hasura
--

CREATE SCHEMA enum_item_cable;


ALTER SCHEMA enum_item_cable OWNER TO hasura;

--
-- TOC entry 14 (class 2615 OID 31916)
-- Name: enum_item_hardware; Type: SCHEMA; Schema: -; Owner: hasura
--

CREATE SCHEMA enum_item_hardware;


ALTER SCHEMA enum_item_hardware OWNER TO hasura;

--
-- TOC entry 23 (class 2615 OID 31913)
-- Name: enum_item_hardware_fastener; Type: SCHEMA; Schema: -; Owner: hasura
--

CREATE SCHEMA enum_item_hardware_fastener;


ALTER SCHEMA enum_item_hardware_fastener OWNER TO hasura;

--
-- TOC entry 12 (class 2615 OID 31919)
-- Name: enum_item_hardware_fastener_nut; Type: SCHEMA; Schema: -; Owner: hasura
--

CREATE SCHEMA enum_item_hardware_fastener_nut;


ALTER SCHEMA enum_item_hardware_fastener_nut OWNER TO hasura;

--
-- TOC entry 17 (class 2615 OID 31917)
-- Name: enum_item_hardware_fastener_screw; Type: SCHEMA; Schema: -; Owner: hasura
--

CREATE SCHEMA enum_item_hardware_fastener_screw;


ALTER SCHEMA enum_item_hardware_fastener_screw OWNER TO hasura;

--
-- TOC entry 9 (class 2615 OID 31918)
-- Name: enum_item_hardware_fastener_screw_machine; Type: SCHEMA; Schema: -; Owner: hasura
--

CREATE SCHEMA enum_item_hardware_fastener_screw_machine;


ALTER SCHEMA enum_item_hardware_fastener_screw_machine OWNER TO hasura;

--
-- TOC entry 21 (class 2615 OID 31920)
-- Name: enum_item_hardware_fastener_washer; Type: SCHEMA; Schema: -; Owner: hasura
--

CREATE SCHEMA enum_item_hardware_fastener_washer;


ALTER SCHEMA enum_item_hardware_fastener_washer OWNER TO hasura;

--
-- TOC entry 22 (class 2615 OID 31914)
-- Name: enum_item_tool; Type: SCHEMA; Schema: -; Owner: hasura
--

CREATE SCHEMA enum_item_tool;


ALTER SCHEMA enum_item_tool OWNER TO hasura;

--
-- TOC entry 7 (class 2615 OID 16929)
-- Name: hdb_catalog; Type: SCHEMA; Schema: -; Owner: hasura
--

CREATE SCHEMA hdb_catalog;


ALTER SCHEMA hdb_catalog OWNER TO hasura;

--
-- TOC entry 10 (class 2615 OID 16930)
-- Name: hdb_views; Type: SCHEMA; Schema: -; Owner: hasura
--

CREATE SCHEMA hdb_views;


ALTER SCHEMA hdb_views OWNER TO hasura;

--
-- TOC entry 19 (class 2615 OID 27092)
-- Name: item; Type: SCHEMA; Schema: -; Owner: eric
--

CREATE SCHEMA item;


ALTER SCHEMA item OWNER TO eric;

--
-- TOC entry 20 (class 2615 OID 31375)
-- Name: property; Type: SCHEMA; Schema: -; Owner: hasura
--

CREATE SCHEMA property;


ALTER SCHEMA property OWNER TO hasura;

--
-- TOC entry 6 (class 2615 OID 31921)
-- Name: property_item_hardware_fastener_screw_machine; Type: SCHEMA; Schema: -; Owner: hasura
--

CREATE SCHEMA property_item_hardware_fastener_screw_machine;


ALTER SCHEMA property_item_hardware_fastener_screw_machine OWNER TO hasura;

--
-- TOC entry 2 (class 3079 OID 16931)
-- Name: pgcrypto; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS pgcrypto WITH SCHEMA public;


--
-- TOC entry 3887 (class 0 OID 0)
-- Dependencies: 2
-- Name: EXTENSION pgcrypto; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION pgcrypto IS 'cryptographic functions';


--
-- TOC entry 353 (class 1255 OID 25086)
-- Name: check_violation(text); Type: FUNCTION; Schema: hdb_catalog; Owner: hasura
--

CREATE FUNCTION hdb_catalog.check_violation(msg text) RETURNS boolean
    LANGUAGE plpgsql
    AS $$
  BEGIN
    RAISE check_violation USING message=msg;
  END;
$$;


ALTER FUNCTION hdb_catalog.check_violation(msg text) OWNER TO hasura;

--
-- TOC entry 369 (class 1255 OID 16968)
-- Name: hdb_schema_update_event_notifier(); Type: FUNCTION; Schema: hdb_catalog; Owner: hasura
--

CREATE FUNCTION hdb_catalog.hdb_schema_update_event_notifier() RETURNS trigger
    LANGUAGE plpgsql
    AS $$
  DECLARE
    instance_id uuid;
    occurred_at timestamptz;
    invalidations json;
    curr_rec record;
  BEGIN
    instance_id = NEW.instance_id;
    occurred_at = NEW.occurred_at;
    invalidations = NEW.invalidations;
    PERFORM pg_notify('hasura_schema_update', json_build_object(
      'instance_id', instance_id,
      'occurred_at', occurred_at,
      'invalidations', invalidations
      )::text);
    RETURN curr_rec;
  END;
$$;


ALTER FUNCTION hdb_catalog.hdb_schema_update_event_notifier() OWNER TO hasura;

--
-- TOC entry 366 (class 1255 OID 16969)
-- Name: inject_table_defaults(text, text, text, text); Type: FUNCTION; Schema: hdb_catalog; Owner: hasura
--

CREATE FUNCTION hdb_catalog.inject_table_defaults(view_schema text, view_name text, tab_schema text, tab_name text) RETURNS void
    LANGUAGE plpgsql
    AS $$
    DECLARE
        r RECORD;
    BEGIN
      FOR r IN SELECT column_name, column_default FROM information_schema.columns WHERE table_schema = tab_schema AND table_name = tab_name AND column_default IS NOT NULL LOOP
          EXECUTE format('ALTER VIEW %I.%I ALTER COLUMN %I SET DEFAULT %s;', view_schema, view_name, r.column_name, r.column_default);
      END LOOP;
    END;
$$;


ALTER FUNCTION hdb_catalog.inject_table_defaults(view_schema text, view_name text, tab_schema text, tab_name text) OWNER TO hasura;

--
-- TOC entry 367 (class 1255 OID 16970)
-- Name: insert_event_log(text, text, text, text, json); Type: FUNCTION; Schema: hdb_catalog; Owner: hasura
--

CREATE FUNCTION hdb_catalog.insert_event_log(schema_name text, table_name text, trigger_name text, op text, row_data json) RETURNS text
    LANGUAGE plpgsql
    AS $$
  DECLARE
    id text;
    payload json;
    session_variables json;
    server_version_num int;
  BEGIN
    id := gen_random_uuid();
    server_version_num := current_setting('server_version_num');
    IF server_version_num >= 90600 THEN
      session_variables := current_setting('hasura.user', 't');
    ELSE
      BEGIN
        session_variables := current_setting('hasura.user');
      EXCEPTION WHEN OTHERS THEN
                  session_variables := NULL;
      END;
    END IF;
    payload := json_build_object(
      'op', op,
      'data', row_data,
      'session_variables', session_variables
    );
    INSERT INTO hdb_catalog.event_log
                (id, schema_name, table_name, trigger_name, payload)
    VALUES
    (id, schema_name, table_name, trigger_name, payload);
    RETURN id;
  END;
$$;


ALTER FUNCTION hdb_catalog.insert_event_log(schema_name text, table_name text, trigger_name text, op text, row_data json) OWNER TO hasura;

--
-- TOC entry 372 (class 1255 OID 16971)
-- Name: insert_update_item_to_base(); Type: FUNCTION; Schema: item; Owner: eric
--

CREATE FUNCTION item.insert_update_item_to_base() RETURNS trigger
    LANGUAGE plpgsql
    AS $$DECLARE
	row_json jsonb := row_to_json(NEW);
	tsv tsvector := jsonb_to_tsvector('simple', row_json, '["string"]');
  classname TEXT := (TG_TABLE_SCHEMA || '_' || TG_TABLE_NAME)::text;
BEGIN
  -- INSERT ----------------------------------------------------------------------
  IF TG_OP = 'INSERT' THEN
  
    INSERT INTO 
      public."item" ( "id", "class", "object" )
    VALUES
	    (NEW.id, classname, row_json);
      
    INSERT INTO 
      public."search_data" ( "id", "class", "text", "metadata", "search_vector" )
    VALUES
	    (NEW.id, classname, NEW.name, row_json, tsv);
  -- UPDATE ----------------------------------------------------------------------
  ELSIF TG_OP = 'UPDATE' THEN
  
    UPDATE public."item" 
  	  SET 
		  object=row_json
	  WHERE id=OLD.id;
    
    UPDATE public."search_data"
      SET
	    text=NEW.name,
      metadata=row_json,
      search_vector=tsv
   WHERE id=OLD.id;

/** UPSERT ? 
INSERT INTO customers (name, email)
VALUES
	(
		'Microsoft',
		'hotline@microsoft.com'
	) 
ON CONFLICT (name) 
DO
		UPDATE
	  SET email = EXCLUDED.email || ';' || customers.email;

**/
END IF;
  RETURN NEW;
END;
$$;


ALTER FUNCTION item.insert_update_item_to_base() OWNER TO eric;

--
-- TOC entry 368 (class 1255 OID 16972)
-- Name: class(regclass); Type: FUNCTION; Schema: public; Owner: hasura
--

CREATE FUNCTION public.class(_tbl regclass) RETURNS text
    LANGUAGE sql STABLE
    AS $$
  SELECT _tbl::regclass::text;
$$;


ALTER FUNCTION public.class(_tbl regclass) OWNER TO hasura;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 283 (class 1259 OID 31053)
-- Name: search_data; Type: TABLE; Schema: public; Owner: hasura
--

CREATE TABLE public.search_data (
    id bigint NOT NULL,
    class text NOT NULL,
    text text,
    metadata jsonb,
    search_vector tsvector
);


ALTER TABLE public.search_data OWNER TO hasura;

--
-- TOC entry 3889 (class 0 OID 0)
-- Dependencies: 283
-- Name: COLUMN search_data.text; Type: COMMENT; Schema: public; Owner: hasura
--

COMMENT ON COLUMN public.search_data.text IS 'Searchable text';


--
-- TOC entry 375 (class 1255 OID 31063)
-- Name: search(text, integer); Type: FUNCTION; Schema: public; Owner: eric
--

CREATE FUNCTION public.search(query_text text, return_limit integer DEFAULT 100) RETURNS SETOF public.search_data
    LANGUAGE plpgsql STABLE
    AS $_$
DECLARE
  like_query_text TEXT := replace( replace(query_text, '*', ''), '%', '');
BEGIN
  -- check if contains *; if yes, replace with % and do like instead
  IF like_query_text <> query_text THEN
    RETURN QUERY
    SELECT
      *
    FROM public.search_data
    WHERE
      jsonb_path_exists(
        metadata, 
        format( '$.* ? (@ like_regex "%s" flag "i")', like_query_text)::jsonpath );
  ELSE 
    RETURN QUERY
    SELECT 
		  * 
  	FROM 
  		public.search_data
    WHERE 
  		websearch_to_tsquery(query_text) @@ search_vector
  	ORDER BY ts_rank_cd(search_vector, websearch_to_tsquery(query_text)) DESC
  	LIMIT return_limit
  	;
  END IF;
END;
$_$;


ALTER FUNCTION public.search(query_text text, return_limit integer) OWNER TO eric;

--
-- TOC entry 246 (class 1259 OID 17178)
-- Name: item; Type: TABLE; Schema: public; Owner: hasura
--

CREATE TABLE public.item (
    id integer NOT NULL,
    class text NOT NULL,
    object jsonb,
    stock smallint
);


ALTER TABLE public.item OWNER TO hasura;

--
-- TOC entry 3892 (class 0 OID 0)
-- Dependencies: 246
-- Name: COLUMN item.stock; Type: COMMENT; Schema: public; Owner: hasura
--

COMMENT ON COLUMN public.item.stock IS 'null means that there is stock, but of an unknown quantity.';


--
-- TOC entry 373 (class 1255 OID 32456)
-- Name: search_item(text, integer); Type: FUNCTION; Schema: public; Owner: eric
--

CREATE FUNCTION public.search_item(query_text text, return_limit integer DEFAULT 100) RETURNS SETOF public.item
    LANGUAGE plpgsql STABLE
    AS $$
-- DECLARE
--   like_query_text TEXT := replace( replace(query_text, '*', ''), '%', '');
BEGIN
  RETURN QUERY 
    SELECT
      item.id,
      item.class,
      item.object,
      item.stock
    FROM
      public.item
    JOIN
      public.search(query_text, return_limit)
    ON item.id = search.id;
END;
$$;


ALTER FUNCTION public.search_item(query_text text, return_limit integer) OWNER TO eric;

--
-- TOC entry 308 (class 1259 OID 32196)
-- Name: global_id_seq; Type: SEQUENCE; Schema: public; Owner: eric
--

CREATE SEQUENCE public.global_id_seq
    START WITH 100
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.global_id_seq OWNER TO eric;

--
-- TOC entry 259 (class 1259 OID 24773)
-- Name: manufacturer_item; Type: TABLE; Schema: public; Owner: hasura
--

CREATE TABLE public.manufacturer_item (
    id integer DEFAULT nextval('public.global_id_seq'::regclass) NOT NULL,
    manufacturer_id integer NOT NULL,
    product_url text,
    manufacturer_product_id text NOT NULL,
    item_id integer NOT NULL,
    manufacturer_product_name text,
    manufacturer_product_series text
);


ALTER TABLE public.manufacturer_item OWNER TO hasura;

--
-- TOC entry 3896 (class 0 OID 0)
-- Dependencies: 259
-- Name: COLUMN manufacturer_item.manufacturer_product_id; Type: COMMENT; Schema: public; Owner: hasura
--

COMMENT ON COLUMN public.manufacturer_item.manufacturer_product_id IS 'example - Cisco 7204VXR';


--
-- TOC entry 3897 (class 0 OID 0)
-- Dependencies: 259
-- Name: COLUMN manufacturer_item.manufacturer_product_name; Type: COMMENT; Schema: public; Owner: hasura
--

COMMENT ON COLUMN public.manufacturer_item.manufacturer_product_name IS 'example - Cisco 7204';


--
-- TOC entry 3898 (class 0 OID 0)
-- Dependencies: 259
-- Name: COLUMN manufacturer_item.manufacturer_product_series; Type: COMMENT; Schema: public; Owner: hasura
--

COMMENT ON COLUMN public.manufacturer_item.manufacturer_product_series IS 'example - Cisco 7200 series';


--
-- TOC entry 251 (class 1259 OID 17211)
-- Name: order_item; Type: TABLE; Schema: public; Owner: hasura
--

CREATE TABLE public.order_item (
    manufacturer_item_id integer,
    serial_no text,
    cost_item money,
    order_id integer NOT NULL,
    shipment_id integer,
    cost_tax money,
    cost_total money,
    vendor_item_id integer,
    quantity numeric,
    item_id integer NOT NULL,
    id integer DEFAULT nextval('public.global_id_seq'::regclass) NOT NULL
);


ALTER TABLE public.order_item OWNER TO hasura;

--
-- TOC entry 3899 (class 0 OID 0)
-- Dependencies: 251
-- Name: TABLE order_item; Type: COMMENT; Schema: public; Owner: hasura
--

COMMENT ON TABLE public.order_item IS 'represents a single line item on an order';


--
-- TOC entry 3900 (class 0 OID 0)
-- Dependencies: 251
-- Name: COLUMN order_item.manufacturer_item_id; Type: COMMENT; Schema: public; Owner: hasura
--

COMMENT ON COLUMN public.order_item.manufacturer_item_id IS 'link to manufacturer item, which in turn links to item';


--
-- TOC entry 3901 (class 0 OID 0)
-- Dependencies: 251
-- Name: COLUMN order_item.serial_no; Type: COMMENT; Schema: public; Owner: hasura
--

COMMENT ON COLUMN public.order_item.serial_no IS 'individual items unique id (as provided by manufacturer)';


--
-- TOC entry 257 (class 1259 OID 24730)
-- Name: vendor_item; Type: TABLE; Schema: public; Owner: hasura
--

CREATE TABLE public.vendor_item (
    id integer DEFAULT nextval('public.global_id_seq'::regclass) NOT NULL,
    vendor_id integer NOT NULL,
    vendor_sku text NOT NULL,
    item_id integer NOT NULL,
    description text
);


ALTER TABLE public.vendor_item OWNER TO hasura;

--
-- TOC entry 3902 (class 0 OID 0)
-- Dependencies: 257
-- Name: COLUMN vendor_item.description; Type: COMMENT; Schema: public; Owner: hasura
--

COMMENT ON COLUMN public.vendor_item.description IS 'this should track "variations" of the item_id.      For example the item might be cat6 550mhz      but the vendor item would be 1000ft of it.';


--
-- TOC entry 316 (class 1259 OID 32754)
-- Name: item_variant; Type: VIEW; Schema: public; Owner: eric
--

CREATE VIEW public.item_variant AS
 SELECT DISTINCT ON (item.item_id, item.vendor_item_id, item.manufacturer_item_id) item.id,
    item.class,
    item.object,
    item.item_id,
    item.vendor_id,
    item.vendor_item_id,
    item.manufacturer_id,
    item.manufacturer_item_id,
    item.order_id,
    item.order_item_id
   FROM ( SELECT item_1.id,
            item_1.class,
            item_1.object,
            item_1.id AS item_id,
            NULL::integer AS vendor_id,
            NULL::integer AS vendor_item_id,
            NULL::integer AS manufacturer_id,
            NULL::integer AS manufacturer_item_id,
            NULL::integer AS order_id,
            NULL::integer AS order_item_id
           FROM public.item item_1) item
UNION
 SELECT vendor_item.id,
    item.class,
    item.object,
    item.id AS item_id,
    vendor_item.vendor_id,
    vendor_item.id AS vendor_item_id,
    NULL::integer AS manufacturer_id,
    NULL::integer AS manufacturer_item_id,
    NULL::integer AS order_id,
    NULL::integer AS order_item_id
   FROM (public.item
     JOIN public.vendor_item ON ((vendor_item.item_id = item.id)))
UNION
 SELECT manufacturer_item.id,
    item.class,
    item.object,
    item.id AS item_id,
    NULL::integer AS vendor_id,
    NULL::integer AS vendor_item_id,
    manufacturer_item.manufacturer_id,
    manufacturer_item.id AS manufacturer_item_id,
    NULL::integer AS order_id,
    NULL::integer AS order_item_id
   FROM (public.item
     JOIN public.manufacturer_item ON ((manufacturer_item.item_id = item.id)))
UNION
 SELECT order_item.id,
    item.class,
    item.object,
    item.id AS item_id,
    vendor_item.vendor_id,
    vendor_item.id AS vendor_item_id,
    manufacturer_item.manufacturer_id,
    manufacturer_item.id AS manufacturer_item_id,
    order_item.order_id,
    order_item.id AS order_item_id
   FROM (((public.item
     JOIN public.order_item ON ((order_item.item_id = item.id)))
     LEFT JOIN public.vendor_item ON ((vendor_item.id = order_item.vendor_item_id)))
     LEFT JOIN public.manufacturer_item ON ((manufacturer_item.id = order_item.manufacturer_item_id)))
  WHERE ((order_item.vendor_item_id IS NOT NULL) AND (order_item.manufacturer_item_id IS NOT NULL));


ALTER TABLE public.item_variant OWNER TO eric;

--
-- TOC entry 3903 (class 0 OID 0)
-- Dependencies: 316
-- Name: VIEW item_variant; Type: COMMENT; Schema: public; Owner: eric
--

COMMENT ON VIEW public.item_variant IS 'All existing combinations of vendor and manufacturer for an item, including null for both.';


--
-- TOC entry 374 (class 1255 OID 32759)
-- Name: search_item_variant(text, integer); Type: FUNCTION; Schema: public; Owner: eric
--

CREATE FUNCTION public.search_item_variant(query_text text, return_limit integer DEFAULT 100) RETURNS SETOF public.item_variant
    LANGUAGE plpgsql STABLE
    AS $$
BEGIN
  RETURN QUERY 
    SELECT
      item_variant.*
    FROM
      public.item_variant
    JOIN
      public.search(query_text, return_limit)
    ON item_variant.item_id = search.id;
END;
$$;


ALTER FUNCTION public.search_item_variant(query_text text, return_limit integer) OWNER TO eric;

--
-- TOC entry 370 (class 1255 OID 16983)
-- Name: set_current_timestamp_updated_at(); Type: FUNCTION; Schema: public; Owner: hasura
--

CREATE FUNCTION public.set_current_timestamp_updated_at() RETURNS trigger
    LANGUAGE plpgsql
    AS $$
DECLARE
  _new record;
BEGIN
  _new := NEW;
  _new."updated_at" = NOW();
  RETURN _new;
END;
$$;


ALTER FUNCTION public.set_current_timestamp_updated_at() OWNER TO hasura;

--
-- TOC entry 371 (class 1255 OID 31065)
-- Name: update_vector(); Type: FUNCTION; Schema: public; Owner: eric
--

CREATE FUNCTION public.update_vector() RETURNS trigger
    LANGUAGE plpgsql
    AS $$DECLARE
  _new record;
BEGIN
  _new := NEW;
--   Only generate the tsvector if one isn't specified.
-- IF _new."search_vector" IS NULL THEN
    _new."search_vector" = to_tsvector('simple'::regconfig, _new."text") || jsonb_to_tsvector( 'simple', _new."metadata", '["string"]');
  --END IF;
  RETURN _new;
END;
$$;


ALTER FUNCTION public.update_vector() OWNER TO eric;

--
-- TOC entry 222 (class 1259 OID 17002)
-- Name: item_class; Type: TABLE; Schema: enum; Owner: hasura
--

CREATE TABLE enum.item_class (
    id text NOT NULL,
    description text
);


ALTER TABLE enum.item_class OWNER TO hasura;

--
-- TOC entry 284 (class 1259 OID 31100)
-- Name: mapped_class; Type: TABLE; Schema: enum; Owner: hasura
--

CREATE TABLE enum.mapped_class (
    id text NOT NULL,
    description text
);


ALTER TABLE enum.mapped_class OWNER TO hasura;

--
-- TOC entry 3908 (class 0 OID 0)
-- Dependencies: 284
-- Name: TABLE mapped_class; Type: COMMENT; Schema: enum; Owner: hasura
--

COMMENT ON TABLE enum.mapped_class IS 'possible <schema>_<table> classes that can be used in object_maps';


--
-- TOC entry 256 (class 1259 OID 24707)
-- Name: payment_method_type; Type: TABLE; Schema: enum; Owner: hasura
--

CREATE TABLE enum.payment_method_type (
    id text NOT NULL,
    description text NOT NULL
);


ALTER TABLE enum.payment_method_type OWNER TO hasura;

--
-- TOC entry 307 (class 1259 OID 32096)
-- Name: space_type; Type: TABLE; Schema: enum; Owner: hasura
--

CREATE TABLE enum.space_type (
    id text NOT NULL,
    description text
);


ALTER TABLE enum.space_type OWNER TO hasura;

--
-- TOC entry 3909 (class 0 OID 0)
-- Dependencies: 307
-- Name: TABLE space_type; Type: COMMENT; Schema: enum; Owner: hasura
--

COMMENT ON TABLE enum.space_type IS 'Storage space type';


--
-- TOC entry 223 (class 1259 OID 17008)
-- Name: unit; Type: TABLE; Schema: enum; Owner: hasura
--

CREATE TABLE enum.unit (
    id text NOT NULL,
    description text
);


ALTER TABLE enum.unit OWNER TO hasura;

--
-- TOC entry 268 (class 1259 OID 30164)
-- Name: handedness; Type: TABLE; Schema: enum_item; Owner: hasura
--

CREATE TABLE enum_item.handedness (
    id text NOT NULL,
    description text
);


ALTER TABLE enum_item.handedness OWNER TO hasura;

--
-- TOC entry 304 (class 1259 OID 31830)
-- Name: connector; Type: TABLE; Schema: enum_item_cable; Owner: hasura
--

CREATE TABLE enum_item_cable.connector (
    id text NOT NULL,
    description text
);


ALTER TABLE enum_item_cable.connector OWNER TO hasura;

--
-- TOC entry 221 (class 1259 OID 16996)
-- Name: finish; Type: TABLE; Schema: enum_item_hardware; Owner: hasura
--

CREATE TABLE enum_item_hardware.finish (
    id text NOT NULL,
    description text
);


ALTER TABLE enum_item_hardware.finish OWNER TO hasura;

--
-- TOC entry 3910 (class 0 OID 0)
-- Dependencies: 221
-- Name: TABLE finish; Type: COMMENT; Schema: enum_item_hardware; Owner: hasura
--

COMMENT ON TABLE enum_item_hardware.finish IS 'aka coatings';


--
-- TOC entry 274 (class 1259 OID 30277)
-- Name: use_material; Type: TABLE; Schema: enum_item_hardware; Owner: hasura
--

CREATE TABLE enum_item_hardware.use_material (
    id text NOT NULL,
    description text
);


ALTER TABLE enum_item_hardware.use_material OWNER TO hasura;

--
-- TOC entry 3911 (class 0 OID 0)
-- Dependencies: 274
-- Name: TABLE use_material; Type: COMMENT; Schema: enum_item_hardware; Owner: hasura
--

COMMENT ON TABLE enum_item_hardware.use_material IS 'Material which the fastener is to be used in, ie. _Wood_ for _Wood Screws_';


--
-- TOC entry 267 (class 1259 OID 30156)
-- Name: drive; Type: TABLE; Schema: enum_item_hardware_fastener; Owner: hasura
--

CREATE TABLE enum_item_hardware_fastener.drive (
    id text NOT NULL,
    description text
);


ALTER TABLE enum_item_hardware_fastener.drive OWNER TO hasura;

--
-- TOC entry 3912 (class 0 OID 0)
-- Dependencies: 267
-- Name: TABLE drive; Type: COMMENT; Schema: enum_item_hardware_fastener; Owner: hasura
--

COMMENT ON TABLE enum_item_hardware_fastener.drive IS 'Drive type for fastener, such as Hex, Torx, Phillips, etc';


--
-- TOC entry 219 (class 1259 OID 16984)
-- Name: material; Type: TABLE; Schema: enum_item_hardware_fastener; Owner: hasura
--

CREATE TABLE enum_item_hardware_fastener.material (
    id text NOT NULL,
    description text
);


ALTER TABLE enum_item_hardware_fastener.material OWNER TO hasura;

--
-- TOC entry 3913 (class 0 OID 0)
-- Dependencies: 219
-- Name: TABLE material; Type: COMMENT; Schema: enum_item_hardware_fastener; Owner: hasura
--

COMMENT ON TABLE enum_item_hardware_fastener.material IS 'Relevant Information:
- https://www.sppusa.com/stainlesssteel_overview.php
- https://www.boltdepot.com/fastener-information/Materials-and-Grades/Materials.aspx';


--
-- TOC entry 282 (class 1259 OID 30930)
-- Name: standoff_shape; Type: TABLE; Schema: enum_item_hardware_fastener; Owner: hasura
--

CREATE TABLE enum_item_hardware_fastener.standoff_shape (
    id text NOT NULL,
    description text
);


ALTER TABLE enum_item_hardware_fastener.standoff_shape OWNER TO hasura;

--
-- TOC entry 270 (class 1259 OID 30211)
-- Name: thread_label; Type: TABLE; Schema: enum_item_hardware_fastener; Owner: hasura
--

CREATE TABLE enum_item_hardware_fastener.thread_label (
    id text NOT NULL,
    description text
);


ALTER TABLE enum_item_hardware_fastener.thread_label OWNER TO hasura;

--
-- TOC entry 3914 (class 0 OID 0)
-- Dependencies: 270
-- Name: TABLE thread_label; Type: COMMENT; Schema: enum_item_hardware_fastener; Owner: hasura
--

COMMENT ON TABLE enum_item_hardware_fastener.thread_label IS 'descriptor of thread';


--
-- TOC entry 286 (class 1259 OID 31404)
-- Name: thread_standard; Type: TABLE; Schema: enum_item_hardware_fastener; Owner: hasura
--

CREATE TABLE enum_item_hardware_fastener.thread_standard (
    id text NOT NULL,
    description text
);


ALTER TABLE enum_item_hardware_fastener.thread_standard OWNER TO hasura;

--
-- TOC entry 3915 (class 0 OID 0)
-- Dependencies: 286
-- Name: TABLE thread_standard; Type: COMMENT; Schema: enum_item_hardware_fastener; Owner: hasura
--

COMMENT ON TABLE enum_item_hardware_fastener.thread_standard IS 'For more information on thread standards see https://en.wikipedia.org/wiki/Screw_thread#Standardization';


--
-- TOC entry 299 (class 1259 OID 31703)
-- Name: form; Type: TABLE; Schema: enum_item_hardware_fastener_nut; Owner: hasura
--

CREATE TABLE enum_item_hardware_fastener_nut.form (
    id text NOT NULL,
    description text NOT NULL
);


ALTER TABLE enum_item_hardware_fastener_nut.form OWNER TO hasura;

--
-- TOC entry 301 (class 1259 OID 31756)
-- Name: strength; Type: TABLE; Schema: enum_item_hardware_fastener_nut; Owner: hasura
--

CREATE TABLE enum_item_hardware_fastener_nut.strength (
    id text NOT NULL,
    description text
);


ALTER TABLE enum_item_hardware_fastener_nut.strength OWNER TO hasura;

--
-- TOC entry 287 (class 1259 OID 31412)
-- Name: thread_fit; Type: TABLE; Schema: enum_item_hardware_fastener_nut; Owner: hasura
--

CREATE TABLE enum_item_hardware_fastener_nut.thread_fit (
    id text NOT NULL,
    description text
);


ALTER TABLE enum_item_hardware_fastener_nut.thread_fit OWNER TO hasura;

--
-- TOC entry 3916 (class 0 OID 0)
-- Dependencies: 287
-- Name: TABLE thread_fit; Type: COMMENT; Schema: enum_item_hardware_fastener_nut; Owner: hasura
--

COMMENT ON TABLE enum_item_hardware_fastener_nut.thread_fit IS 'metric internal (nut) thread fits are defined by capital G or H ; UTS internal (nut) threads are specified by a appended B';


--
-- TOC entry 272 (class 1259 OID 30237)
-- Name: hardness; Type: TABLE; Schema: enum_item_hardware_fastener_screw; Owner: hasura
--

CREATE TABLE enum_item_hardware_fastener_screw.hardness (
    id text NOT NULL,
    description text
);


ALTER TABLE enum_item_hardware_fastener_screw.hardness OWNER TO hasura;

--
-- TOC entry 269 (class 1259 OID 30178)
-- Name: head; Type: TABLE; Schema: enum_item_hardware_fastener_screw; Owner: hasura
--

CREATE TABLE enum_item_hardware_fastener_screw.head (
    id text NOT NULL,
    description text
);


ALTER TABLE enum_item_hardware_fastener_screw.head OWNER TO hasura;

--
-- TOC entry 220 (class 1259 OID 16990)
-- Name: point; Type: TABLE; Schema: enum_item_hardware_fastener_screw_machine; Owner: hasura
--

CREATE TABLE enum_item_hardware_fastener_screw_machine.point (
    id text NOT NULL,
    description text
);


ALTER TABLE enum_item_hardware_fastener_screw_machine.point OWNER TO hasura;

--
-- TOC entry 273 (class 1259 OID 30245)
-- Name: strength; Type: TABLE; Schema: enum_item_hardware_fastener_screw_machine; Owner: hasura
--

CREATE TABLE enum_item_hardware_fastener_screw_machine.strength (
    id text NOT NULL,
    description text
);


ALTER TABLE enum_item_hardware_fastener_screw_machine.strength OWNER TO hasura;

--
-- TOC entry 3917 (class 0 OID 0)
-- Dependencies: 273
-- Name: TABLE strength; Type: COMMENT; Schema: enum_item_hardware_fastener_screw_machine; Owner: hasura
--

COMMENT ON TABLE enum_item_hardware_fastener_screw_machine.strength IS 'Generally a higher number means a stronger, more hardened part, but also more brittle. US units use Grade and Metric uses Class';


--
-- TOC entry 271 (class 1259 OID 30224)
-- Name: thread_fit; Type: TABLE; Schema: enum_item_hardware_fastener_screw_machine; Owner: hasura
--

CREATE TABLE enum_item_hardware_fastener_screw_machine.thread_fit (
    id text NOT NULL,
    description text
);


ALTER TABLE enum_item_hardware_fastener_screw_machine.thread_fit OWNER TO hasura;

--
-- TOC entry 3918 (class 0 OID 0)
-- Dependencies: 271
-- Name: TABLE thread_fit; Type: COMMENT; Schema: enum_item_hardware_fastener_screw_machine; Owner: hasura
--

COMMENT ON TABLE enum_item_hardware_fastener_screw_machine.thread_fit IS 'Thread fit is a combination of allowances and tolerances and a measure of tightness or looseness between them.';


--
-- TOC entry 297 (class 1259 OID 31594)
-- Name: form; Type: TABLE; Schema: enum_item_hardware_fastener_washer; Owner: hasura
--

CREATE TABLE enum_item_hardware_fastener_washer.form (
    id text NOT NULL,
    description text
);


ALTER TABLE enum_item_hardware_fastener_washer.form OWNER TO hasura;

--
-- TOC entry 3919 (class 0 OID 0)
-- Dependencies: 297
-- Name: TABLE form; Type: COMMENT; Schema: enum_item_hardware_fastener_washer; Owner: hasura
--

COMMENT ON TABLE enum_item_hardware_fastener_washer.form IS 'Shape of the washer';


--
-- TOC entry 298 (class 1259 OID 31602)
-- Name: mechanism; Type: TABLE; Schema: enum_item_hardware_fastener_washer; Owner: hasura
--

CREATE TABLE enum_item_hardware_fastener_washer.mechanism (
    id text NOT NULL,
    description text
);


ALTER TABLE enum_item_hardware_fastener_washer.mechanism OWNER TO hasura;

--
-- TOC entry 295 (class 1259 OID 31573)
-- Name: pattern; Type: TABLE; Schema: enum_item_hardware_fastener_washer; Owner: hasura
--

CREATE TABLE enum_item_hardware_fastener_washer.pattern (
    id text NOT NULL,
    description text
);


ALTER TABLE enum_item_hardware_fastener_washer.pattern OWNER TO hasura;

--
-- TOC entry 3920 (class 0 OID 0)
-- Dependencies: 295
-- Name: TABLE pattern; Type: COMMENT; Schema: enum_item_hardware_fastener_washer; Owner: hasura
--

COMMENT ON TABLE enum_item_hardware_fastener_washer.pattern IS 'For Flat washers: Washer patterns define the outer diameter of the washer.';


--
-- TOC entry 294 (class 1259 OID 31505)
-- Name: drill_bit_finish; Type: TABLE; Schema: enum_item_tool; Owner: hasura
--

CREATE TABLE enum_item_tool.drill_bit_finish (
    id text NOT NULL,
    description text
);


ALTER TABLE enum_item_tool.drill_bit_finish OWNER TO hasura;

--
-- TOC entry 291 (class 1259 OID 31465)
-- Name: drill_bit_length_class; Type: TABLE; Schema: enum_item_tool; Owner: hasura
--

CREATE TABLE enum_item_tool.drill_bit_length_class (
    id text NOT NULL,
    description text
);


ALTER TABLE enum_item_tool.drill_bit_length_class OWNER TO hasura;

--
-- TOC entry 293 (class 1259 OID 31497)
-- Name: drill_bit_material; Type: TABLE; Schema: enum_item_tool; Owner: hasura
--

CREATE TABLE enum_item_tool.drill_bit_material (
    id text NOT NULL,
    description text
);


ALTER TABLE enum_item_tool.drill_bit_material OWNER TO hasura;

--
-- TOC entry 290 (class 1259 OID 31447)
-- Name: drill_bit_point; Type: TABLE; Schema: enum_item_tool; Owner: hasura
--

CREATE TABLE enum_item_tool.drill_bit_point (
    id text NOT NULL,
    description text
);


ALTER TABLE enum_item_tool.drill_bit_point OWNER TO hasura;

--
-- TOC entry 289 (class 1259 OID 31439)
-- Name: drill_bit_shank; Type: TABLE; Schema: enum_item_tool; Owner: hasura
--

CREATE TABLE enum_item_tool.drill_bit_shank (
    id text NOT NULL,
    description text
);


ALTER TABLE enum_item_tool.drill_bit_shank OWNER TO hasura;

--
-- TOC entry 292 (class 1259 OID 31484)
-- Name: drill_bit_style; Type: TABLE; Schema: enum_item_tool; Owner: hasura
--

CREATE TABLE enum_item_tool.drill_bit_style (
    id text NOT NULL,
    description text
);


ALTER TABLE enum_item_tool.drill_bit_style OWNER TO hasura;

--
-- TOC entry 224 (class 1259 OID 17014)
-- Name: event_invocation_logs; Type: TABLE; Schema: hdb_catalog; Owner: hasura
--

CREATE TABLE hdb_catalog.event_invocation_logs (
    id text DEFAULT public.gen_random_uuid() NOT NULL,
    event_id text,
    status integer,
    request json,
    response json,
    created_at timestamp without time zone DEFAULT now()
);


ALTER TABLE hdb_catalog.event_invocation_logs OWNER TO hasura;

--
-- TOC entry 225 (class 1259 OID 17022)
-- Name: event_log; Type: TABLE; Schema: hdb_catalog; Owner: hasura
--

CREATE TABLE hdb_catalog.event_log (
    id text DEFAULT public.gen_random_uuid() NOT NULL,
    schema_name text NOT NULL,
    table_name text NOT NULL,
    trigger_name text NOT NULL,
    payload jsonb NOT NULL,
    delivered boolean DEFAULT false NOT NULL,
    error boolean DEFAULT false NOT NULL,
    tries integer DEFAULT 0 NOT NULL,
    created_at timestamp without time zone DEFAULT now(),
    locked boolean DEFAULT false NOT NULL,
    next_retry_at timestamp without time zone,
    archived boolean DEFAULT false NOT NULL
);


ALTER TABLE hdb_catalog.event_log OWNER TO hasura;

--
-- TOC entry 226 (class 1259 OID 17035)
-- Name: event_triggers; Type: TABLE; Schema: hdb_catalog; Owner: hasura
--

CREATE TABLE hdb_catalog.event_triggers (
    name text NOT NULL,
    type text NOT NULL,
    schema_name text NOT NULL,
    table_name text NOT NULL,
    configuration json,
    comment text
);


ALTER TABLE hdb_catalog.event_triggers OWNER TO hasura;

--
-- TOC entry 275 (class 1259 OID 30540)
-- Name: hdb_action; Type: TABLE; Schema: hdb_catalog; Owner: hasura
--

CREATE TABLE hdb_catalog.hdb_action (
    action_name text NOT NULL,
    action_defn jsonb NOT NULL,
    comment text,
    is_system_defined boolean DEFAULT false
);


ALTER TABLE hdb_catalog.hdb_action OWNER TO hasura;

--
-- TOC entry 277 (class 1259 OID 30563)
-- Name: hdb_action_log; Type: TABLE; Schema: hdb_catalog; Owner: hasura
--

CREATE TABLE hdb_catalog.hdb_action_log (
    id uuid DEFAULT public.gen_random_uuid() NOT NULL,
    action_name text,
    input_payload jsonb NOT NULL,
    request_headers jsonb NOT NULL,
    session_variables jsonb NOT NULL,
    response_payload jsonb,
    errors jsonb,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    response_received_at timestamp with time zone,
    status text NOT NULL,
    CONSTRAINT hdb_action_log_status_check CHECK ((status = ANY (ARRAY['created'::text, 'processing'::text, 'completed'::text, 'error'::text])))
);


ALTER TABLE hdb_catalog.hdb_action_log OWNER TO hasura;

--
-- TOC entry 276 (class 1259 OID 30549)
-- Name: hdb_action_permission; Type: TABLE; Schema: hdb_catalog; Owner: hasura
--

CREATE TABLE hdb_catalog.hdb_action_permission (
    action_name text NOT NULL,
    role_name text NOT NULL,
    definition jsonb DEFAULT '{}'::jsonb NOT NULL,
    comment text
);


ALTER TABLE hdb_catalog.hdb_action_permission OWNER TO hasura;

--
-- TOC entry 227 (class 1259 OID 17041)
-- Name: hdb_allowlist; Type: TABLE; Schema: hdb_catalog; Owner: hasura
--

CREATE TABLE hdb_catalog.hdb_allowlist (
    collection_name text
);


ALTER TABLE hdb_catalog.hdb_allowlist OWNER TO hasura;

--
-- TOC entry 228 (class 1259 OID 17047)
-- Name: hdb_check_constraint; Type: VIEW; Schema: hdb_catalog; Owner: hasura
--

CREATE VIEW hdb_catalog.hdb_check_constraint AS
 SELECT (n.nspname)::text AS table_schema,
    (ct.relname)::text AS table_name,
    (r.conname)::text AS constraint_name,
    pg_get_constraintdef(r.oid, true) AS "check"
   FROM ((pg_constraint r
     JOIN pg_class ct ON ((r.conrelid = ct.oid)))
     JOIN pg_namespace n ON ((ct.relnamespace = n.oid)))
  WHERE (r.contype = 'c'::"char");


ALTER TABLE hdb_catalog.hdb_check_constraint OWNER TO hasura;

--
-- TOC entry 231 (class 1259 OID 17067)
-- Name: hdb_computed_field; Type: TABLE; Schema: hdb_catalog; Owner: hasura
--

CREATE TABLE hdb_catalog.hdb_computed_field (
    table_schema text NOT NULL,
    table_name text NOT NULL,
    computed_field_name text NOT NULL,
    definition jsonb NOT NULL,
    comment text
);


ALTER TABLE hdb_catalog.hdb_computed_field OWNER TO hasura;

--
-- TOC entry 232 (class 1259 OID 17073)
-- Name: hdb_computed_field_function; Type: VIEW; Schema: hdb_catalog; Owner: hasura
--

CREATE VIEW hdb_catalog.hdb_computed_field_function AS
 SELECT hdb_computed_field.table_schema,
    hdb_computed_field.table_name,
    hdb_computed_field.computed_field_name,
        CASE
            WHEN (((hdb_computed_field.definition -> 'function'::text) ->> 'name'::text) IS NULL) THEN (hdb_computed_field.definition ->> 'function'::text)
            ELSE ((hdb_computed_field.definition -> 'function'::text) ->> 'name'::text)
        END AS function_name,
        CASE
            WHEN (((hdb_computed_field.definition -> 'function'::text) ->> 'schema'::text) IS NULL) THEN 'public'::text
            ELSE ((hdb_computed_field.definition -> 'function'::text) ->> 'schema'::text)
        END AS function_schema
   FROM hdb_catalog.hdb_computed_field;


ALTER TABLE hdb_catalog.hdb_computed_field_function OWNER TO hasura;

--
-- TOC entry 311 (class 1259 OID 32387)
-- Name: hdb_cron_event_invocation_logs; Type: TABLE; Schema: hdb_catalog; Owner: hasura
--

CREATE TABLE hdb_catalog.hdb_cron_event_invocation_logs (
    id text DEFAULT public.gen_random_uuid() NOT NULL,
    event_id text,
    status integer,
    request json,
    response json,
    created_at timestamp without time zone DEFAULT now()
);


ALTER TABLE hdb_catalog.hdb_cron_event_invocation_logs OWNER TO hasura;

--
-- TOC entry 310 (class 1259 OID 32368)
-- Name: hdb_cron_events; Type: TABLE; Schema: hdb_catalog; Owner: hasura
--

CREATE TABLE hdb_catalog.hdb_cron_events (
    id text DEFAULT public.gen_random_uuid() NOT NULL,
    trigger_name text NOT NULL,
    scheduled_time timestamp with time zone NOT NULL,
    additional_payload json,
    status text DEFAULT 'scheduled'::text NOT NULL,
    tries integer DEFAULT 0 NOT NULL,
    created_at timestamp without time zone DEFAULT now(),
    next_retry_at timestamp with time zone,
    CONSTRAINT valid_status CHECK ((status = ANY (ARRAY['scheduled'::text, 'locked'::text, 'delivered'::text, 'error'::text, 'dead'::text])))
);


ALTER TABLE hdb_catalog.hdb_cron_events OWNER TO hasura;

--
-- TOC entry 309 (class 1259 OID 32359)
-- Name: hdb_cron_triggers; Type: TABLE; Schema: hdb_catalog; Owner: hasura
--

CREATE TABLE hdb_catalog.hdb_cron_triggers (
    name text NOT NULL,
    webhook_conf json NOT NULL,
    cron_schedule text NOT NULL,
    payload json,
    retry_conf json,
    header_conf json,
    include_in_metadata boolean DEFAULT false NOT NULL,
    comment text
);


ALTER TABLE hdb_catalog.hdb_cron_triggers OWNER TO hasura;

--
-- TOC entry 312 (class 1259 OID 32402)
-- Name: hdb_cron_events_stats; Type: VIEW; Schema: hdb_catalog; Owner: hasura
--

CREATE VIEW hdb_catalog.hdb_cron_events_stats AS
 SELECT ct.name,
    COALESCE(ce.upcoming_events_count, (0)::bigint) AS upcoming_events_count,
    COALESCE(ce.max_scheduled_time, now()) AS max_scheduled_time
   FROM (hdb_catalog.hdb_cron_triggers ct
     LEFT JOIN ( SELECT hdb_cron_events.trigger_name,
            count(*) AS upcoming_events_count,
            max(hdb_cron_events.scheduled_time) AS max_scheduled_time
           FROM hdb_catalog.hdb_cron_events
          WHERE ((hdb_cron_events.tries = 0) AND (hdb_cron_events.status = 'scheduled'::text))
          GROUP BY hdb_cron_events.trigger_name) ce ON ((ct.name = ce.trigger_name)));


ALTER TABLE hdb_catalog.hdb_cron_events_stats OWNER TO hasura;

--
-- TOC entry 278 (class 1259 OID 30574)
-- Name: hdb_custom_types; Type: TABLE; Schema: hdb_catalog; Owner: hasura
--

CREATE TABLE hdb_catalog.hdb_custom_types (
    custom_types jsonb NOT NULL
);


ALTER TABLE hdb_catalog.hdb_custom_types OWNER TO hasura;

--
-- TOC entry 229 (class 1259 OID 17052)
-- Name: hdb_foreign_key_constraint; Type: VIEW; Schema: hdb_catalog; Owner: hasura
--

CREATE VIEW hdb_catalog.hdb_foreign_key_constraint AS
 SELECT (q.table_schema)::text AS table_schema,
    (q.table_name)::text AS table_name,
    (q.constraint_name)::text AS constraint_name,
    (min(q.constraint_oid))::integer AS constraint_oid,
    min((q.ref_table_table_schema)::text) AS ref_table_table_schema,
    min((q.ref_table)::text) AS ref_table,
    json_object_agg(ac.attname, afc.attname) AS column_mapping,
    min((q.confupdtype)::text) AS on_update,
    min((q.confdeltype)::text) AS on_delete,
    json_agg(ac.attname) AS columns,
    json_agg(afc.attname) AS ref_columns
   FROM ((( SELECT ctn.nspname AS table_schema,
            ct.relname AS table_name,
            r.conrelid AS table_id,
            r.conname AS constraint_name,
            r.oid AS constraint_oid,
            cftn.nspname AS ref_table_table_schema,
            cft.relname AS ref_table,
            r.confrelid AS ref_table_id,
            r.confupdtype,
            r.confdeltype,
            unnest(r.conkey) AS column_id,
            unnest(r.confkey) AS ref_column_id
           FROM ((((pg_constraint r
             JOIN pg_class ct ON ((r.conrelid = ct.oid)))
             JOIN pg_namespace ctn ON ((ct.relnamespace = ctn.oid)))
             JOIN pg_class cft ON ((r.confrelid = cft.oid)))
             JOIN pg_namespace cftn ON ((cft.relnamespace = cftn.oid)))
          WHERE (r.contype = 'f'::"char")) q
     JOIN pg_attribute ac ON (((q.column_id = ac.attnum) AND (q.table_id = ac.attrelid))))
     JOIN pg_attribute afc ON (((q.ref_column_id = afc.attnum) AND (q.ref_table_id = afc.attrelid))))
  GROUP BY q.table_schema, q.table_name, q.constraint_name;


ALTER TABLE hdb_catalog.hdb_foreign_key_constraint OWNER TO hasura;

--
-- TOC entry 233 (class 1259 OID 17077)
-- Name: hdb_function; Type: TABLE; Schema: hdb_catalog; Owner: hasura
--

CREATE TABLE hdb_catalog.hdb_function (
    function_schema text NOT NULL,
    function_name text NOT NULL,
    is_system_defined boolean DEFAULT false,
    configuration jsonb DEFAULT '{}'::jsonb NOT NULL
);


ALTER TABLE hdb_catalog.hdb_function OWNER TO hasura;

--
-- TOC entry 234 (class 1259 OID 17085)
-- Name: hdb_function_agg; Type: VIEW; Schema: hdb_catalog; Owner: hasura
--

CREATE VIEW hdb_catalog.hdb_function_agg AS
 SELECT (p.proname)::text AS function_name,
    (pn.nspname)::text AS function_schema,
    pd.description,
        CASE
            WHEN (p.provariadic = (0)::oid) THEN false
            ELSE true
        END AS has_variadic,
        CASE
            WHEN ((p.provolatile)::text = ('i'::character(1))::text) THEN 'IMMUTABLE'::text
            WHEN ((p.provolatile)::text = ('s'::character(1))::text) THEN 'STABLE'::text
            WHEN ((p.provolatile)::text = ('v'::character(1))::text) THEN 'VOLATILE'::text
            ELSE NULL::text
        END AS function_type,
    pg_get_functiondef(p.oid) AS function_definition,
    (rtn.nspname)::text AS return_type_schema,
    (rt.typname)::text AS return_type_name,
    (rt.typtype)::text AS return_type_type,
    p.proretset AS returns_set,
    ( SELECT COALESCE(json_agg(json_build_object('schema', q.schema, 'name', q.name, 'type', q.type)), '[]'::json) AS "coalesce"
           FROM ( SELECT pt.typname AS name,
                    pns.nspname AS schema,
                    pt.typtype AS type,
                    pat.ordinality
                   FROM ((unnest(COALESCE(p.proallargtypes, (p.proargtypes)::oid[])) WITH ORDINALITY pat(oid, ordinality)
                     LEFT JOIN pg_type pt ON ((pt.oid = pat.oid)))
                     LEFT JOIN pg_namespace pns ON ((pt.typnamespace = pns.oid)))
                  ORDER BY pat.ordinality) q) AS input_arg_types,
    to_json(COALESCE(p.proargnames, ARRAY[]::text[])) AS input_arg_names,
    p.pronargdefaults AS default_args,
    (p.oid)::integer AS function_oid
   FROM ((((pg_proc p
     JOIN pg_namespace pn ON ((pn.oid = p.pronamespace)))
     JOIN pg_type rt ON ((rt.oid = p.prorettype)))
     JOIN pg_namespace rtn ON ((rtn.oid = rt.typnamespace)))
     LEFT JOIN pg_description pd ON ((p.oid = pd.objoid)))
  WHERE (((pn.nspname)::text !~~ 'pg_%'::text) AND ((pn.nspname)::text <> ALL (ARRAY['information_schema'::text, 'hdb_catalog'::text, 'hdb_views'::text])) AND (NOT (EXISTS ( SELECT 1
           FROM pg_aggregate
          WHERE ((pg_aggregate.aggfnoid)::oid = p.oid)))));


ALTER TABLE hdb_catalog.hdb_function_agg OWNER TO hasura;

--
-- TOC entry 235 (class 1259 OID 17090)
-- Name: hdb_function_info_agg; Type: VIEW; Schema: hdb_catalog; Owner: hasura
--

CREATE VIEW hdb_catalog.hdb_function_info_agg AS
 SELECT hdb_function_agg.function_name,
    hdb_function_agg.function_schema,
    row_to_json(( SELECT e.*::record AS e
           FROM ( SELECT hdb_function_agg.description,
                    hdb_function_agg.has_variadic,
                    hdb_function_agg.function_type,
                    hdb_function_agg.return_type_schema,
                    hdb_function_agg.return_type_name,
                    hdb_function_agg.return_type_type,
                    hdb_function_agg.returns_set,
                    hdb_function_agg.input_arg_types,
                    hdb_function_agg.input_arg_names,
                    hdb_function_agg.default_args,
                    (EXISTS ( SELECT 1
                           FROM information_schema.tables
                          WHERE (((tables.table_schema)::text = hdb_function_agg.return_type_schema) AND ((tables.table_name)::text = hdb_function_agg.return_type_name)))) AS returns_table) e)) AS function_info
   FROM hdb_catalog.hdb_function_agg;


ALTER TABLE hdb_catalog.hdb_function_info_agg OWNER TO hasura;

--
-- TOC entry 236 (class 1259 OID 17095)
-- Name: hdb_permission; Type: TABLE; Schema: hdb_catalog; Owner: hasura
--

CREATE TABLE hdb_catalog.hdb_permission (
    table_schema name NOT NULL,
    table_name name NOT NULL,
    role_name text NOT NULL,
    perm_type text NOT NULL,
    perm_def jsonb NOT NULL,
    comment text,
    is_system_defined boolean DEFAULT false,
    CONSTRAINT hdb_permission_perm_type_check CHECK ((perm_type = ANY (ARRAY['insert'::text, 'select'::text, 'update'::text, 'delete'::text])))
);


ALTER TABLE hdb_catalog.hdb_permission OWNER TO hasura;

--
-- TOC entry 264 (class 1259 OID 25077)
-- Name: hdb_permission_agg; Type: VIEW; Schema: hdb_catalog; Owner: hasura
--

CREATE VIEW hdb_catalog.hdb_permission_agg AS
 SELECT hdb_permission.table_schema,
    hdb_permission.table_name,
    hdb_permission.role_name,
    json_object_agg(hdb_permission.perm_type, hdb_permission.perm_def) AS permissions
   FROM hdb_catalog.hdb_permission
  GROUP BY hdb_permission.table_schema, hdb_permission.table_name, hdb_permission.role_name;


ALTER TABLE hdb_catalog.hdb_permission_agg OWNER TO hasura;

--
-- TOC entry 230 (class 1259 OID 17057)
-- Name: hdb_primary_key; Type: VIEW; Schema: hdb_catalog; Owner: hasura
--

CREATE VIEW hdb_catalog.hdb_primary_key AS
 SELECT tc.table_schema,
    tc.table_name,
    tc.constraint_name,
    json_agg(constraint_column_usage.column_name) AS columns
   FROM (information_schema.table_constraints tc
     JOIN ( SELECT x.tblschema AS table_schema,
            x.tblname AS table_name,
            x.colname AS column_name,
            x.cstrname AS constraint_name
           FROM ( SELECT DISTINCT nr.nspname,
                    r.relname,
                    a.attname,
                    c.conname
                   FROM pg_namespace nr,
                    pg_class r,
                    pg_attribute a,
                    pg_depend d,
                    pg_namespace nc,
                    pg_constraint c
                  WHERE ((nr.oid = r.relnamespace) AND (r.oid = a.attrelid) AND (d.refclassid = ('pg_class'::regclass)::oid) AND (d.refobjid = r.oid) AND (d.refobjsubid = a.attnum) AND (d.classid = ('pg_constraint'::regclass)::oid) AND (d.objid = c.oid) AND (c.connamespace = nc.oid) AND (c.contype = 'c'::"char") AND (r.relkind = ANY (ARRAY['r'::"char", 'p'::"char"])) AND (NOT a.attisdropped))
                UNION ALL
                 SELECT nr.nspname,
                    r.relname,
                    a.attname,
                    c.conname
                   FROM pg_namespace nr,
                    pg_class r,
                    pg_attribute a,
                    pg_namespace nc,
                    pg_constraint c
                  WHERE ((nr.oid = r.relnamespace) AND (r.oid = a.attrelid) AND (nc.oid = c.connamespace) AND (r.oid =
                        CASE c.contype
                            WHEN 'f'::"char" THEN c.confrelid
                            ELSE c.conrelid
                        END) AND (a.attnum = ANY (
                        CASE c.contype
                            WHEN 'f'::"char" THEN c.confkey
                            ELSE c.conkey
                        END)) AND (NOT a.attisdropped) AND (c.contype = ANY (ARRAY['p'::"char", 'u'::"char", 'f'::"char"])) AND (r.relkind = ANY (ARRAY['r'::"char", 'p'::"char"])))) x(tblschema, tblname, colname, cstrname)) constraint_column_usage ON ((((tc.constraint_name)::text = (constraint_column_usage.constraint_name)::text) AND ((tc.table_schema)::text = (constraint_column_usage.table_schema)::text) AND ((tc.table_name)::text = (constraint_column_usage.table_name)::text))))
  WHERE ((tc.constraint_type)::text = 'PRIMARY KEY'::text)
  GROUP BY tc.table_schema, tc.table_name, tc.constraint_name;


ALTER TABLE hdb_catalog.hdb_primary_key OWNER TO hasura;

--
-- TOC entry 237 (class 1259 OID 17107)
-- Name: hdb_query_collection; Type: TABLE; Schema: hdb_catalog; Owner: hasura
--

CREATE TABLE hdb_catalog.hdb_query_collection (
    collection_name text NOT NULL,
    collection_defn jsonb NOT NULL,
    comment text,
    is_system_defined boolean DEFAULT false
);


ALTER TABLE hdb_catalog.hdb_query_collection OWNER TO hasura;

--
-- TOC entry 238 (class 1259 OID 17114)
-- Name: hdb_relationship; Type: TABLE; Schema: hdb_catalog; Owner: hasura
--

CREATE TABLE hdb_catalog.hdb_relationship (
    table_schema name NOT NULL,
    table_name name NOT NULL,
    rel_name text NOT NULL,
    rel_type text,
    rel_def jsonb NOT NULL,
    comment text,
    is_system_defined boolean DEFAULT false,
    CONSTRAINT hdb_relationship_rel_type_check CHECK ((rel_type = ANY (ARRAY['object'::text, 'array'::text])))
);


ALTER TABLE hdb_catalog.hdb_relationship OWNER TO hasura;

--
-- TOC entry 315 (class 1259 OID 32436)
-- Name: hdb_remote_relationship; Type: TABLE; Schema: hdb_catalog; Owner: hasura
--

CREATE TABLE hdb_catalog.hdb_remote_relationship (
    remote_relationship_name text NOT NULL,
    table_schema name NOT NULL,
    table_name name NOT NULL,
    definition jsonb NOT NULL
);


ALTER TABLE hdb_catalog.hdb_remote_relationship OWNER TO hasura;

--
-- TOC entry 279 (class 1259 OID 30580)
-- Name: hdb_role; Type: VIEW; Schema: hdb_catalog; Owner: hasura
--

CREATE VIEW hdb_catalog.hdb_role AS
 SELECT DISTINCT q.role_name
   FROM ( SELECT hdb_permission.role_name
           FROM hdb_catalog.hdb_permission
        UNION ALL
         SELECT hdb_action_permission.role_name
           FROM hdb_catalog.hdb_action_permission) q;


ALTER TABLE hdb_catalog.hdb_role OWNER TO hasura;

--
-- TOC entry 314 (class 1259 OID 32421)
-- Name: hdb_scheduled_event_invocation_logs; Type: TABLE; Schema: hdb_catalog; Owner: hasura
--

CREATE TABLE hdb_catalog.hdb_scheduled_event_invocation_logs (
    id text DEFAULT public.gen_random_uuid() NOT NULL,
    event_id text,
    status integer,
    request json,
    response json,
    created_at timestamp without time zone DEFAULT now()
);


ALTER TABLE hdb_catalog.hdb_scheduled_event_invocation_logs OWNER TO hasura;

--
-- TOC entry 313 (class 1259 OID 32407)
-- Name: hdb_scheduled_events; Type: TABLE; Schema: hdb_catalog; Owner: hasura
--

CREATE TABLE hdb_catalog.hdb_scheduled_events (
    id text DEFAULT public.gen_random_uuid() NOT NULL,
    webhook_conf json NOT NULL,
    scheduled_time timestamp with time zone NOT NULL,
    retry_conf json,
    payload json,
    header_conf json,
    status text DEFAULT 'scheduled'::text NOT NULL,
    tries integer DEFAULT 0 NOT NULL,
    created_at timestamp without time zone DEFAULT now(),
    next_retry_at timestamp with time zone,
    comment text,
    CONSTRAINT valid_status CHECK ((status = ANY (ARRAY['scheduled'::text, 'locked'::text, 'delivered'::text, 'error'::text, 'dead'::text])))
);


ALTER TABLE hdb_catalog.hdb_scheduled_events OWNER TO hasura;

--
-- TOC entry 239 (class 1259 OID 17122)
-- Name: hdb_schema_update_event; Type: TABLE; Schema: hdb_catalog; Owner: hasura
--

CREATE TABLE hdb_catalog.hdb_schema_update_event (
    instance_id uuid NOT NULL,
    occurred_at timestamp with time zone DEFAULT now() NOT NULL,
    invalidations json NOT NULL
);


ALTER TABLE hdb_catalog.hdb_schema_update_event OWNER TO hasura;

--
-- TOC entry 240 (class 1259 OID 17126)
-- Name: hdb_table; Type: TABLE; Schema: hdb_catalog; Owner: hasura
--

CREATE TABLE hdb_catalog.hdb_table (
    table_schema name NOT NULL,
    table_name name NOT NULL,
    is_system_defined boolean DEFAULT false,
    is_enum boolean DEFAULT false NOT NULL,
    configuration jsonb DEFAULT '{}'::jsonb NOT NULL
);


ALTER TABLE hdb_catalog.hdb_table OWNER TO hasura;

--
-- TOC entry 265 (class 1259 OID 25081)
-- Name: hdb_table_info_agg; Type: VIEW; Schema: hdb_catalog; Owner: hasura
--

CREATE VIEW hdb_catalog.hdb_table_info_agg AS
 SELECT schema.nspname AS table_schema,
    "table".relname AS table_name,
    jsonb_build_object('oid', ("table".oid)::integer, 'columns', COALESCE(columns.info, '[]'::jsonb), 'primary_key', primary_key.info, 'unique_constraints', COALESCE(unique_constraints.info, '[]'::jsonb), 'foreign_keys', COALESCE(foreign_key_constraints.info, '[]'::jsonb), 'view_info',
        CASE "table".relkind
            WHEN 'v'::"char" THEN jsonb_build_object('is_updatable', ((pg_relation_is_updatable(("table".oid)::regclass, true) & 4) = 4), 'is_insertable', ((pg_relation_is_updatable(("table".oid)::regclass, true) & 8) = 8), 'is_deletable', ((pg_relation_is_updatable(("table".oid)::regclass, true) & 16) = 16))
            ELSE NULL::jsonb
        END, 'description', description.description) AS info
   FROM ((((((pg_class "table"
     JOIN pg_namespace schema ON ((schema.oid = "table".relnamespace)))
     LEFT JOIN pg_description description ON (((description.classoid = ('pg_class'::regclass)::oid) AND (description.objoid = "table".oid) AND (description.objsubid = 0))))
     LEFT JOIN LATERAL ( SELECT jsonb_agg(jsonb_build_object('name', "column".attname, 'position', "column".attnum, 'type', COALESCE(base_type.typname, type.typname), 'is_nullable', (NOT "column".attnotnull), 'description', col_description("table".oid, ("column".attnum)::integer))) AS info
           FROM ((pg_attribute "column"
             LEFT JOIN pg_type type ON ((type.oid = "column".atttypid)))
             LEFT JOIN pg_type base_type ON (((type.typtype = 'd'::"char") AND (base_type.oid = type.typbasetype))))
          WHERE (("column".attrelid = "table".oid) AND ("column".attnum > 0) AND (NOT "column".attisdropped))) columns ON (true))
     LEFT JOIN LATERAL ( SELECT jsonb_build_object('constraint', jsonb_build_object('name', class.relname, 'oid', (class.oid)::integer), 'columns', COALESCE(columns_1.info, '[]'::jsonb)) AS info
           FROM ((pg_index index
             JOIN pg_class class ON ((class.oid = index.indexrelid)))
             LEFT JOIN LATERAL ( SELECT jsonb_agg("column".attname) AS info
                   FROM pg_attribute "column"
                  WHERE (("column".attrelid = "table".oid) AND ("column".attnum = ANY ((index.indkey)::smallint[])))) columns_1 ON (true))
          WHERE ((index.indrelid = "table".oid) AND index.indisprimary)) primary_key ON (true))
     LEFT JOIN LATERAL ( SELECT jsonb_agg(jsonb_build_object('name', class.relname, 'oid', (class.oid)::integer)) AS info
           FROM (pg_index index
             JOIN pg_class class ON ((class.oid = index.indexrelid)))
          WHERE ((index.indrelid = "table".oid) AND index.indisunique AND (NOT index.indisprimary))) unique_constraints ON (true))
     LEFT JOIN LATERAL ( SELECT jsonb_agg(jsonb_build_object('constraint', jsonb_build_object('name', foreign_key.constraint_name, 'oid', foreign_key.constraint_oid), 'columns', foreign_key.columns, 'foreign_table', jsonb_build_object('schema', foreign_key.ref_table_table_schema, 'name', foreign_key.ref_table), 'foreign_columns', foreign_key.ref_columns)) AS info
           FROM hdb_catalog.hdb_foreign_key_constraint foreign_key
          WHERE ((foreign_key.table_schema = schema.nspname) AND (foreign_key.table_name = "table".relname))) foreign_key_constraints ON (true))
  WHERE ("table".relkind = ANY (ARRAY['r'::"char", 't'::"char", 'v'::"char", 'm'::"char", 'f'::"char", 'p'::"char"]));


ALTER TABLE hdb_catalog.hdb_table_info_agg OWNER TO hasura;

--
-- TOC entry 241 (class 1259 OID 17140)
-- Name: hdb_unique_constraint; Type: VIEW; Schema: hdb_catalog; Owner: hasura
--

CREATE VIEW hdb_catalog.hdb_unique_constraint AS
 SELECT tc.table_name,
    tc.constraint_schema AS table_schema,
    tc.constraint_name,
    json_agg(kcu.column_name) AS columns
   FROM (information_schema.table_constraints tc
     JOIN information_schema.key_column_usage kcu USING (constraint_schema, constraint_name))
  WHERE ((tc.constraint_type)::text = 'UNIQUE'::text)
  GROUP BY tc.table_name, tc.constraint_schema, tc.constraint_name;


ALTER TABLE hdb_catalog.hdb_unique_constraint OWNER TO hasura;

--
-- TOC entry 242 (class 1259 OID 17145)
-- Name: hdb_version; Type: TABLE; Schema: hdb_catalog; Owner: hasura
--

CREATE TABLE hdb_catalog.hdb_version (
    hasura_uuid uuid DEFAULT public.gen_random_uuid() NOT NULL,
    version text NOT NULL,
    upgraded_on timestamp with time zone NOT NULL,
    cli_state jsonb DEFAULT '{}'::jsonb NOT NULL,
    console_state jsonb DEFAULT '{}'::jsonb NOT NULL
);


ALTER TABLE hdb_catalog.hdb_version OWNER TO hasura;

--
-- TOC entry 243 (class 1259 OID 17154)
-- Name: remote_schemas; Type: TABLE; Schema: hdb_catalog; Owner: hasura
--

CREATE TABLE hdb_catalog.remote_schemas (
    id bigint NOT NULL,
    name text,
    definition json,
    comment text
);


ALTER TABLE hdb_catalog.remote_schemas OWNER TO hasura;

--
-- TOC entry 244 (class 1259 OID 17160)
-- Name: remote_schemas_id_seq; Type: SEQUENCE; Schema: hdb_catalog; Owner: hasura
--

CREATE SEQUENCE hdb_catalog.remote_schemas_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE hdb_catalog.remote_schemas_id_seq OWNER TO hasura;

--
-- TOC entry 3921 (class 0 OID 0)
-- Dependencies: 244
-- Name: remote_schemas_id_seq; Type: SEQUENCE OWNED BY; Schema: hdb_catalog; Owner: hasura
--

ALTER SEQUENCE hdb_catalog.remote_schemas_id_seq OWNED BY hdb_catalog.remote_schemas.id;


--
-- TOC entry 247 (class 1259 OID 17184)
-- Name: bundle; Type: TABLE; Schema: item; Owner: hasura
--

CREATE TABLE item.bundle (
    id integer DEFAULT nextval('public.global_id_seq'::regclass) NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL,
    name text NOT NULL,
    description text
);


ALTER TABLE item.bundle OWNER TO hasura;

--
-- TOC entry 3922 (class 0 OID 0)
-- Dependencies: 247
-- Name: TABLE bundle; Type: COMMENT; Schema: item; Owner: hasura
--

COMMENT ON TABLE item.bundle IS 'for items purchased as a bundle or kit (a box of screws for example)';


--
-- TOC entry 260 (class 1259 OID 24890)
-- Name: bundle_map; Type: TABLE; Schema: item; Owner: hasura
--

CREATE TABLE item.bundle_map (
    item_bundle_id integer NOT NULL,
    item_member_id integer NOT NULL,
    quantity numeric
);


ALTER TABLE item.bundle_map OWNER TO hasura;

--
-- TOC entry 303 (class 1259 OID 31817)
-- Name: cable_conductive; Type: TABLE; Schema: item; Owner: hasura
--

CREATE TABLE item.cable_conductive (
    id integer DEFAULT nextval('public.global_id_seq'::regclass) NOT NULL,
    name text NOT NULL,
    conductor_count integer NOT NULL,
    strand_count integer,
    conductor_material text,
    conductor_sheath_material text,
    cable_sheath_material text,
    sheath_type text,
    sheath_max_temperature numeric,
    unit text NOT NULL,
    connector_a text NOT NULL,
    connector_b text NOT NULL,
    connector_extra jsonb,
    length numeric,
    cable_diameter numeric,
    conductor_diameter numeric,
    conductor_diameter_label text,
    shield_material text,
    max_frequency integer,
    fire_rating text,
    smoke_rating text,
    standards_met jsonb
);


ALTER TABLE item.cable_conductive OWNER TO hasura;

--
-- TOC entry 3923 (class 0 OID 0)
-- Dependencies: 303
-- Name: TABLE cable_conductive; Type: COMMENT; Schema: item; Owner: hasura
--

COMMENT ON TABLE item.cable_conductive IS 'electrically conductive cables (cables consist of multiple wires) ';


--
-- TOC entry 288 (class 1259 OID 31431)
-- Name: hardware_drill_bit; Type: TABLE; Schema: item; Owner: hasura
--

CREATE TABLE item.hardware_drill_bit (
    id integer DEFAULT nextval('public.global_id_seq'::regclass) NOT NULL,
    unit text NOT NULL,
    name text NOT NULL,
    diameter numeric NOT NULL,
    length numeric NOT NULL,
    shank text NOT NULL,
    point text,
    point_angle numeric,
    label text,
    length_class text,
    flute_direction text NOT NULL,
    hammer boolean DEFAULT false NOT NULL,
    specifications_met jsonb,
    maximum_drilling_depth numeric,
    shank_size numeric,
    style text,
    finish text,
    material text,
    use_material jsonb
);


ALTER TABLE item.hardware_drill_bit OWNER TO hasura;

--
-- TOC entry 3924 (class 0 OID 0)
-- Dependencies: 288
-- Name: COLUMN hardware_drill_bit.length_class; Type: COMMENT; Schema: item; Owner: hasura
--

COMMENT ON COLUMN item.hardware_drill_bit.length_class IS 'NOTE: CAN BE DEFAULT';


--
-- TOC entry 3925 (class 0 OID 0)
-- Dependencies: 288
-- Name: COLUMN hardware_drill_bit.flute_direction; Type: COMMENT; Schema: item; Owner: hasura
--

COMMENT ON COLUMN item.hardware_drill_bit.flute_direction IS 'NOTE: CAN BE DEFAULT';


--
-- TOC entry 3926 (class 0 OID 0)
-- Dependencies: 288
-- Name: COLUMN hardware_drill_bit.hammer; Type: COMMENT; Schema: item; Owner: hasura
--

COMMENT ON COLUMN item.hardware_drill_bit.hammer IS 'NOTE: CAN BE DEFAULT';


--
-- TOC entry 302 (class 1259 OID 31799)
-- Name: hardware_fastener_insert; Type: TABLE; Schema: item; Owner: hasura
--

CREATE TABLE item.hardware_fastener_insert (
    id integer DEFAULT nextval('public.global_id_seq'::regclass) NOT NULL,
    name text NOT NULL
);


ALTER TABLE item.hardware_fastener_insert OWNER TO hasura;

--
-- TOC entry 248 (class 1259 OID 17193)
-- Name: hardware_fastener_nut; Type: TABLE; Schema: item; Owner: hasura
--

CREATE TABLE item.hardware_fastener_nut (
    id integer DEFAULT nextval('public.global_id_seq'::regclass) NOT NULL,
    name text NOT NULL,
    description text NOT NULL,
    form text NOT NULL,
    unit text NOT NULL,
    thread_fit text,
    strength text
);


ALTER TABLE item.hardware_fastener_nut OWNER TO hasura;

--
-- TOC entry 3927 (class 0 OID 0)
-- Dependencies: 248
-- Name: TABLE hardware_fastener_nut; Type: COMMENT; Schema: item; Owner: hasura
--

COMMENT ON TABLE item.hardware_fastener_nut IS 'Nuts are used to fasten machine threaded fasteners in through-hole applications. Lock nuts help prevent loosening.';


--
-- TOC entry 266 (class 1259 OID 30121)
-- Name: hardware_fastener_screw; Type: TABLE; Schema: item; Owner: hasura
--

CREATE TABLE item.hardware_fastener_screw (
    id integer DEFAULT nextval('public.global_id_seq'::regclass) NOT NULL,
    name text NOT NULL,
    description text,
    unit text NOT NULL,
    point text NOT NULL,
    use_material text
);


ALTER TABLE item.hardware_fastener_screw OWNER TO hasura;

--
-- TOC entry 218 (class 1259 OID 16975)
-- Name: hardware_fastener_screw_machine; Type: TABLE; Schema: item; Owner: hasura
--

CREATE TABLE item.hardware_fastener_screw_machine (
    id integer DEFAULT nextval('public.global_id_seq'::regclass) NOT NULL,
    unit text NOT NULL,
    thread_length numeric,
    countersunk_height numeric,
    head_type text NOT NULL,
    embedded_length numeric NOT NULL,
    drive_type text NOT NULL,
    drive_size text,
    head_diameter numeric,
    head_height numeric,
    thread_diameter numeric NOT NULL,
    name text NOT NULL,
    description text,
    finish text,
    material text,
    thread_direction text DEFAULT 'right'::text,
    countersunk_angle numeric,
    tensile_strength numeric,
    thread_label text,
    specifications_met jsonb,
    thread_fit text,
    point_type text DEFAULT 'bolt_flat'::text,
    hardness text,
    strength_class text,
    thread_pitch numeric NOT NULL,
    use_material text DEFAULT 'machine'::text,
    thread_standard text NOT NULL,
    default_fields jsonb
);


ALTER TABLE item.hardware_fastener_screw_machine OWNER TO hasura;

--
-- TOC entry 3928 (class 0 OID 0)
-- Dependencies: 218
-- Name: COLUMN hardware_fastener_screw_machine.unit; Type: COMMENT; Schema: item; Owner: hasura
--

COMMENT ON COLUMN item.hardware_fastener_screw_machine.unit IS 'ENUM:Unit';


--
-- TOC entry 3929 (class 0 OID 0)
-- Dependencies: 218
-- Name: COLUMN hardware_fastener_screw_machine.thread_length; Type: COMMENT; Schema: item; Owner: hasura
--

COMMENT ON COLUMN item.hardware_fastener_screw_machine.thread_length IS 'if fully threaded, this should be === `shaft_length`';


--
-- TOC entry 3930 (class 0 OID 0)
-- Dependencies: 218
-- Name: COLUMN hardware_fastener_screw_machine.countersunk_height; Type: COMMENT; Schema: item; Owner: hasura
--

COMMENT ON COLUMN item.hardware_fastener_screw_machine.countersunk_height IS 'Any value here means it is countersunk; A value != the `head_height` means it is only partially countersunk';


--
-- TOC entry 3931 (class 0 OID 0)
-- Dependencies: 218
-- Name: COLUMN hardware_fastener_screw_machine.embedded_length; Type: COMMENT; Schema: item; Owner: hasura
--

COMMENT ON COLUMN item.hardware_fastener_screw_machine.embedded_length IS 'This is what is typically stated as a fastener''s length. Length of bolt that is within the material it is screwed into';


--
-- TOC entry 3932 (class 0 OID 0)
-- Dependencies: 218
-- Name: COLUMN hardware_fastener_screw_machine.thread_diameter; Type: COMMENT; Schema: item; Owner: hasura
--

COMMENT ON COLUMN item.hardware_fastener_screw_machine.thread_diameter IS 'ie. M3 or #6. Measure of the outer diameter. For US items, diameters smaller than ¼" get #<numbers>';


--
-- TOC entry 3933 (class 0 OID 0)
-- Dependencies: 218
-- Name: COLUMN hardware_fastener_screw_machine.finish; Type: COMMENT; Schema: item; Owner: hasura
--

COMMENT ON COLUMN item.hardware_fastener_screw_machine.finish IS 'Coating';


--
-- TOC entry 3934 (class 0 OID 0)
-- Dependencies: 218
-- Name: COLUMN hardware_fastener_screw_machine.material; Type: COMMENT; Schema: item; Owner: hasura
--

COMMENT ON COLUMN item.hardware_fastener_screw_machine.material IS 'Material, such as Zinc coated steel or Stainless Steel';


--
-- TOC entry 3935 (class 0 OID 0)
-- Dependencies: 218
-- Name: COLUMN hardware_fastener_screw_machine.tensile_strength; Type: COMMENT; Schema: item; Owner: hasura
--

COMMENT ON COLUMN item.hardware_fastener_screw_machine.tensile_strength IS 'psi';


--
-- TOC entry 3936 (class 0 OID 0)
-- Dependencies: 218
-- Name: COLUMN hardware_fastener_screw_machine.specifications_met; Type: COMMENT; Schema: item; Owner: hasura
--

COMMENT ON COLUMN item.hardware_fastener_screw_machine.specifications_met IS 'Specifications Met ; array of Organizations that certified this
Examples:
ASME
DIN
ISO
ASTM
Mil. Spec.
Fed. Spec.
NAS
JIS';


--
-- TOC entry 3937 (class 0 OID 0)
-- Dependencies: 218
-- Name: COLUMN hardware_fastener_screw_machine.thread_pitch; Type: COMMENT; Schema: item; Owner: hasura
--

COMMENT ON COLUMN item.hardware_fastener_screw_machine.thread_pitch IS 'TPI for usc, Pitch for metric ; ie. the 0.5 in M3 x 0.5';


--
-- TOC entry 3938 (class 0 OID 0)
-- Dependencies: 218
-- Name: COLUMN hardware_fastener_screw_machine.use_material; Type: COMMENT; Schema: item; Owner: hasura
--

COMMENT ON COLUMN item.hardware_fastener_screw_machine.use_material IS 'Material this fastener is meant to thread into.';


--
-- TOC entry 281 (class 1259 OID 30920)
-- Name: hardware_fastener_standoff; Type: TABLE; Schema: item; Owner: hasura
--

CREATE TABLE item.hardware_fastener_standoff (
    id integer DEFAULT nextval('public.global_id_seq'::regclass) NOT NULL,
    unit text NOT NULL,
    shape text NOT NULL,
    female_length numeric,
    male_length numeric,
    female_thread_length numeric,
    male_thread_length numeric,
    female_od numeric,
    max_od numeric,
    material text NOT NULL,
    male_thread_diameter numeric,
    male_thread_pitch numeric,
    male_thread_tolerance text,
    hardness text NOT NULL,
    name text NOT NULL,
    description text,
    female_thread_diameter numeric,
    female_thread_pitch numeric,
    female_thread_tolerance text,
    CONSTRAINT no_double_null_check CHECK ((NOT (((female_length IS NULL) AND (male_length IS NULL)) OR ((female_thread_diameter IS NULL) AND (male_thread_diameter IS NULL)))))
);


ALTER TABLE item.hardware_fastener_standoff OWNER TO hasura;

--
-- TOC entry 3941 (class 0 OID 0)
-- Dependencies: 281
-- Name: COLUMN hardware_fastener_standoff.female_thread_length; Type: COMMENT; Schema: item; Owner: hasura
--

COMMENT ON COLUMN item.hardware_fastener_standoff.female_thread_length IS 'In a typical male-female standoff, this is usually listed as the item''s length';


--
-- TOC entry 3942 (class 0 OID 0)
-- Dependencies: 281
-- Name: COLUMN hardware_fastener_standoff.max_od; Type: COMMENT; Schema: item; Owner: hasura
--

COMMENT ON COLUMN item.hardware_fastener_standoff.max_od IS 'Male threads don''t have an OD, but there may still be a portion of the spacer that is wider than the female portion ( or there is no female end )';


--
-- TOC entry 296 (class 1259 OID 31581)
-- Name: hardware_fastener_washer; Type: TABLE; Schema: item; Owner: hasura
--

CREATE TABLE item.hardware_fastener_washer (
    id integer DEFAULT nextval('public.global_id_seq'::regclass) NOT NULL,
    name text NOT NULL,
    description text,
    unit text NOT NULL,
    diameter_use numeric NOT NULL,
    diameter_inner numeric,
    diameter_outer numeric,
    thickness numeric,
    material text,
    finish text,
    lock_method text,
    pattern text,
    form text NOT NULL
);


ALTER TABLE item.hardware_fastener_washer OWNER TO hasura;

--
-- TOC entry 3943 (class 0 OID 0)
-- Dependencies: 296
-- Name: TABLE hardware_fastener_washer; Type: COMMENT; Schema: item; Owner: hasura
--

COMMENT ON TABLE item.hardware_fastener_washer IS 'Washers spread the load over a greater surface area when tightening a bolt, screw, or nut. Lock washers help prevent loosening.';


--
-- TOC entry 285 (class 1259 OID 31376)
-- Name: item_hardware_fastener_bolt_strength; Type: TABLE; Schema: property; Owner: hasura
--

CREATE TABLE property.item_hardware_fastener_bolt_strength (
    diameter numeric NOT NULL,
    thread_pitch numeric NOT NULL,
    strength_grade text NOT NULL,
    max_tightening_torque numeric NOT NULL,
    proof_load numeric NOT NULL
);


ALTER TABLE property.item_hardware_fastener_bolt_strength OWNER TO hasura;

--
-- TOC entry 305 (class 1259 OID 31922)
-- Name: diameter; Type: TABLE; Schema: property_item_hardware_fastener_screw_machine; Owner: hasura
--

CREATE TABLE property_item_hardware_fastener_screw_machine.diameter (
    diameter_label text NOT NULL,
    diameter_pitch_label text NOT NULL,
    diameter_major numeric NOT NULL,
    fit text NOT NULL,
    standard text NOT NULL,
    thread_label text,
    unit text NOT NULL,
    pitch numeric NOT NULL,
    pitch_mm numeric NOT NULL,
    tap_drill_size numeric
);


ALTER TABLE property_item_hardware_fastener_screw_machine.diameter OWNER TO hasura;

--
-- TOC entry 4065 (class 0 OID 0)
-- Dependencies: 305
-- Name: TABLE diameter; Type: COMMENT; Schema: property_item_hardware_fastener_screw_machine; Owner: hasura
--

COMMENT ON TABLE property_item_hardware_fastener_screw_machine.diameter IS 'Lookup table for items with the same diameter, pitch, and fit';


--
-- TOC entry 245 (class 1259 OID 17170)
-- Name: icon; Type: TABLE; Schema: public; Owner: hasura
--

CREATE TABLE public.icon (
    id uuid DEFAULT public.gen_random_uuid() NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    title text,
    description text,
    data text NOT NULL
);


ALTER TABLE public.icon OWNER TO hasura;

--
-- TOC entry 4066 (class 0 OID 0)
-- Dependencies: 245
-- Name: TABLE icon; Type: COMMENT; Schema: public; Owner: hasura
--

COMMENT ON TABLE public.icon IS 'Image / icon data for labels';


--
-- TOC entry 4067 (class 0 OID 0)
-- Dependencies: 245
-- Name: COLUMN icon.data; Type: COMMENT; Schema: public; Owner: hasura
--

COMMENT ON COLUMN public.icon.data IS 'Store image data in Base64';


--
-- TOC entry 261 (class 1259 OID 24913)
-- Name: icon_item_category_map; Type: TABLE; Schema: public; Owner: hasura
--

CREATE TABLE public.icon_item_category_map (
    icon_id uuid NOT NULL,
    category text NOT NULL,
    sequence smallint DEFAULT 0 NOT NULL,
    criteria jsonb
);


ALTER TABLE public.icon_item_category_map OWNER TO hasura;

--
-- TOC entry 4068 (class 0 OID 0)
-- Dependencies: 261
-- Name: COLUMN icon_item_category_map.criteria; Type: COMMENT; Schema: public; Owner: hasura
--

COMMENT ON COLUMN public.icon_item_category_map.criteria IS 'json rules in the form of:
    { [propKey: keyof item_class]: regex }
this is then evaluated for each entry
evaluation is done in the sequence order';


--
-- TOC entry 280 (class 1259 OID 30894)
-- Name: icon_item_map; Type: TABLE; Schema: public; Owner: hasura
--

CREATE TABLE public.icon_item_map (
    icon_id uuid NOT NULL,
    item_id integer NOT NULL
);


ALTER TABLE public.icon_item_map OWNER TO hasura;

--
-- TOC entry 4069 (class 0 OID 0)
-- Dependencies: 280
-- Name: TABLE icon_item_map; Type: COMMENT; Schema: public; Owner: hasura
--

COMMENT ON TABLE public.icon_item_map IS 'map icon to specific individual items';


--
-- TOC entry 262 (class 1259 OID 24942)
-- Name: icon_label_map; Type: TABLE; Schema: public; Owner: hasura
--

CREATE TABLE public.icon_label_map (
    icon_id uuid NOT NULL,
    label_id uuid NOT NULL
);


ALTER TABLE public.icon_label_map OWNER TO hasura;

--
-- TOC entry 249 (class 1259 OID 17200)
-- Name: label; Type: TABLE; Schema: public; Owner: hasura
--

CREATE TABLE public.label (
    title text,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    content jsonb NOT NULL,
    item_id integer,
    id uuid NOT NULL,
    edit_of_id uuid,
    width integer NOT NULL,
    height integer NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL
);


ALTER TABLE public.label OWNER TO hasura;

--
-- TOC entry 4070 (class 0 OID 0)
-- Dependencies: 249
-- Name: TABLE label; Type: COMMENT; Schema: public; Owner: hasura
--

COMMENT ON TABLE public.label IS 'For saved labels, use to reprint or template';


--
-- TOC entry 263 (class 1259 OID 24982)
-- Name: label_item_map; Type: TABLE; Schema: public; Owner: hasura
--

CREATE TABLE public.label_item_map (
    label_id uuid NOT NULL,
    item_id integer NOT NULL
);


ALTER TABLE public.label_item_map OWNER TO hasura;

--
-- TOC entry 250 (class 1259 OID 17208)
-- Name: label_template_map; Type: TABLE; Schema: public; Owner: hasura
--

CREATE TABLE public.label_template_map (
    item_id integer NOT NULL,
    label_id uuid NOT NULL,
    item_class text NOT NULL,
    sequence smallint NOT NULL,
    criteria jsonb
);


ALTER TABLE public.label_template_map OWNER TO hasura;

--
-- TOC entry 4071 (class 0 OID 0)
-- Dependencies: 250
-- Name: TABLE label_template_map; Type: COMMENT; Schema: public; Owner: hasura
--

COMMENT ON TABLE public.label_template_map IS 'map label to item use for template';


--
-- TOC entry 4072 (class 0 OID 0)
-- Dependencies: 250
-- Name: COLUMN label_template_map.criteria; Type: COMMENT; Schema: public; Owner: hasura
--

COMMENT ON COLUMN public.label_template_map.criteria IS 'json rules in the form of:
            { [propKey: keyof item_class]: regex }
this is then evaluated for each entry
evaluation is done in the sequence order';


--
-- TOC entry 258 (class 1259 OID 24755)
-- Name: manufacturer; Type: TABLE; Schema: public; Owner: hasura
--

CREATE TABLE public.manufacturer (
    id integer DEFAULT nextval('public.global_id_seq'::regclass) NOT NULL,
    name text NOT NULL,
    url text NOT NULL,
    vendor_id integer
);


ALTER TABLE public.manufacturer OWNER TO hasura;

--
-- TOC entry 252 (class 1259 OID 24627)
-- Name: order; Type: TABLE; Schema: public; Owner: hasura
--

CREATE TABLE public."order" (
    id integer DEFAULT nextval('public.global_id_seq'::regclass) NOT NULL,
    pon text,
    vendor_id integer NOT NULL,
    placed_date date NOT NULL,
    items_cost numeric,
    tax_cost numeric,
    total_cost numeric,
    payment_method_id integer,
    vendor_order_id text NOT NULL,
    url text,
    fulfilled_date date
);


ALTER TABLE public."order" OWNER TO hasura;

--
-- TOC entry 255 (class 1259 OID 24698)
-- Name: payment_method; Type: TABLE; Schema: public; Owner: hasura
--

CREATE TABLE public.payment_method (
    id integer DEFAULT nextval('public.global_id_seq'::regclass) NOT NULL,
    name text NOT NULL,
    class text NOT NULL
);


ALTER TABLE public.payment_method OWNER TO hasura;

--
-- TOC entry 253 (class 1259 OID 24674)
-- Name: shipment; Type: TABLE; Schema: public; Owner: hasura
--

CREATE TABLE public.shipment (
    id integer DEFAULT nextval('public.global_id_seq'::regclass) NOT NULL,
    order_id integer,
    vendor_invoice_id text,
    shipped_date date,
    received_date date NOT NULL,
    tracking_id text,
    shipping_carrier text NOT NULL
);


ALTER TABLE public.shipment OWNER TO hasura;

--
-- TOC entry 4073 (class 0 OID 0)
-- Dependencies: 253
-- Name: TABLE shipment; Type: COMMENT; Schema: public; Owner: hasura
--

COMMENT ON TABLE public.shipment IS 'shipment or invoices, multiple allowed per order';


--
-- TOC entry 306 (class 1259 OID 32081)
-- Name: storage; Type: TABLE; Schema: public; Owner: hasura
--

CREATE TABLE public.storage (
    id integer DEFAULT nextval('public.global_id_seq'::regclass) NOT NULL,
    parent_id integer,
    name text NOT NULL,
    space_type text NOT NULL,
    abbreviation text NOT NULL,
    description text
);


ALTER TABLE public.storage OWNER TO hasura;

--
-- TOC entry 300 (class 1259 OID 31711)
-- Name: tag; Type: TABLE; Schema: public; Owner: hasura
--

CREATE TABLE public.tag (
    id integer DEFAULT nextval('public.global_id_seq'::regclass),
    text text NOT NULL
);


ALTER TABLE public.tag OWNER TO hasura;

--
-- TOC entry 254 (class 1259 OID 24688)
-- Name: vendor; Type: TABLE; Schema: public; Owner: hasura
--

CREATE TABLE public.vendor (
    id integer DEFAULT nextval('public.global_id_seq'::regclass) NOT NULL,
    name text NOT NULL,
    url text,
    account_id text
);


ALTER TABLE public.vendor OWNER TO hasura;

--
-- TOC entry 3253 (class 2604 OID 17217)
-- Name: remote_schemas id; Type: DEFAULT; Schema: hdb_catalog; Owner: hasura
--

ALTER TABLE ONLY hdb_catalog.remote_schemas ALTER COLUMN id SET DEFAULT nextval('hdb_catalog.remote_schemas_id_seq'::regclass);


--
-- TOC entry 3426 (class 2606 OID 17231)
-- Name: item_class icon_category_id_key; Type: CONSTRAINT; Schema: enum; Owner: hasura
--

ALTER TABLE ONLY enum.item_class
    ADD CONSTRAINT icon_category_id_key UNIQUE (id);


--
-- TOC entry 3428 (class 2606 OID 17233)
-- Name: item_class icon_category_pkey; Type: CONSTRAINT; Schema: enum; Owner: hasura
--

ALTER TABLE ONLY enum.item_class
    ADD CONSTRAINT icon_category_pkey PRIMARY KEY (id);


--
-- TOC entry 3577 (class 2606 OID 31107)
-- Name: mapped_class mapped_class_pkey; Type: CONSTRAINT; Schema: enum; Owner: hasura
--

ALTER TABLE ONLY enum.mapped_class
    ADD CONSTRAINT mapped_class_pkey PRIMARY KEY (id);


--
-- TOC entry 3512 (class 2606 OID 24714)
-- Name: payment_method_type payment_method_typ_pkey; Type: CONSTRAINT; Schema: enum; Owner: hasura
--

ALTER TABLE ONLY enum.payment_method_type
    ADD CONSTRAINT payment_method_typ_pkey PRIMARY KEY (id);


--
-- TOC entry 3627 (class 2606 OID 32103)
-- Name: space_type space_type_pkey; Type: CONSTRAINT; Schema: enum; Owner: hasura
--

ALTER TABLE ONLY enum.space_type
    ADD CONSTRAINT space_type_pkey PRIMARY KEY (id);


--
-- TOC entry 3430 (class 2606 OID 17235)
-- Name: unit unit_pkey; Type: CONSTRAINT; Schema: enum; Owner: hasura
--

ALTER TABLE ONLY enum.unit
    ADD CONSTRAINT unit_pkey PRIMARY KEY (id);


--
-- TOC entry 3546 (class 2606 OID 30171)
-- Name: handedness hardware_fastener_thread_direction_pkey; Type: CONSTRAINT; Schema: enum_item; Owner: hasura
--

ALTER TABLE ONLY enum_item.handedness
    ADD CONSTRAINT hardware_fastener_thread_direction_pkey PRIMARY KEY (id);


--
-- TOC entry 3619 (class 2606 OID 31837)
-- Name: connector connector_pkey; Type: CONSTRAINT; Schema: enum_item_cable; Owner: hasura
--

ALTER TABLE ONLY enum_item_cable.connector
    ADD CONSTRAINT connector_pkey PRIMARY KEY (id);


--
-- TOC entry 3558 (class 2606 OID 30284)
-- Name: use_material hardware_fastener_use_material_pkey; Type: CONSTRAINT; Schema: enum_item_hardware; Owner: hasura
--

ALTER TABLE ONLY enum_item_hardware.use_material
    ADD CONSTRAINT hardware_fastener_use_material_pkey PRIMARY KEY (id);


--
-- TOC entry 3424 (class 2606 OID 17229)
-- Name: finish hardware_finish_pkey; Type: CONSTRAINT; Schema: enum_item_hardware; Owner: hasura
--

ALTER TABLE ONLY enum_item_hardware.finish
    ADD CONSTRAINT hardware_finish_pkey PRIMARY KEY (id);


--
-- TOC entry 3544 (class 2606 OID 30163)
-- Name: drive hardware_fastener_drive_pkey; Type: CONSTRAINT; Schema: enum_item_hardware_fastener; Owner: hasura
--

ALTER TABLE ONLY enum_item_hardware_fastener.drive
    ADD CONSTRAINT hardware_fastener_drive_pkey PRIMARY KEY (id);


--
-- TOC entry 3420 (class 2606 OID 17225)
-- Name: material hardware_fastener_material_pkey; Type: CONSTRAINT; Schema: enum_item_hardware_fastener; Owner: hasura
--

ALTER TABLE ONLY enum_item_hardware_fastener.material
    ADD CONSTRAINT hardware_fastener_material_pkey PRIMARY KEY (id);


--
-- TOC entry 3570 (class 2606 OID 30937)
-- Name: standoff_shape hardware_fastener_standoff_shape_pkey; Type: CONSTRAINT; Schema: enum_item_hardware_fastener; Owner: hasura
--

ALTER TABLE ONLY enum_item_hardware_fastener.standoff_shape
    ADD CONSTRAINT hardware_fastener_standoff_shape_pkey PRIMARY KEY (id);


--
-- TOC entry 3581 (class 2606 OID 31411)
-- Name: thread_standard hardware_fastener_thread_standard_pkey; Type: CONSTRAINT; Schema: enum_item_hardware_fastener; Owner: hasura
--

ALTER TABLE ONLY enum_item_hardware_fastener.thread_standard
    ADD CONSTRAINT hardware_fastener_thread_standard_pkey PRIMARY KEY (id);


--
-- TOC entry 3550 (class 2606 OID 30218)
-- Name: thread_label hardware_fastener_thread_type_pkey; Type: CONSTRAINT; Schema: enum_item_hardware_fastener; Owner: hasura
--

ALTER TABLE ONLY enum_item_hardware_fastener.thread_label
    ADD CONSTRAINT hardware_fastener_thread_type_pkey PRIMARY KEY (id);


--
-- TOC entry 3607 (class 2606 OID 31710)
-- Name: form hardware_fastener_nut_form_pkey; Type: CONSTRAINT; Schema: enum_item_hardware_fastener_nut; Owner: hasura
--

ALTER TABLE ONLY enum_item_hardware_fastener_nut.form
    ADD CONSTRAINT hardware_fastener_nut_form_pkey PRIMARY KEY (id);


--
-- TOC entry 3613 (class 2606 OID 31763)
-- Name: strength hardware_fastener_nut_strength_pkey; Type: CONSTRAINT; Schema: enum_item_hardware_fastener_nut; Owner: hasura
--

ALTER TABLE ONLY enum_item_hardware_fastener_nut.strength
    ADD CONSTRAINT hardware_fastener_nut_strength_pkey PRIMARY KEY (id);


--
-- TOC entry 3583 (class 2606 OID 31419)
-- Name: thread_fit hardware_fastener_nut_thread_fit_pkey; Type: CONSTRAINT; Schema: enum_item_hardware_fastener_nut; Owner: hasura
--

ALTER TABLE ONLY enum_item_hardware_fastener_nut.thread_fit
    ADD CONSTRAINT hardware_fastener_nut_thread_fit_pkey PRIMARY KEY (id);


--
-- TOC entry 3554 (class 2606 OID 30244)
-- Name: hardness hardware_fastener_hardness_pkey; Type: CONSTRAINT; Schema: enum_item_hardware_fastener_screw; Owner: hasura
--

ALTER TABLE ONLY enum_item_hardware_fastener_screw.hardness
    ADD CONSTRAINT hardware_fastener_hardness_pkey PRIMARY KEY (id);


--
-- TOC entry 3548 (class 2606 OID 30185)
-- Name: head hardware_fastener_head_pkey; Type: CONSTRAINT; Schema: enum_item_hardware_fastener_screw; Owner: hasura
--

ALTER TABLE ONLY enum_item_hardware_fastener_screw.head
    ADD CONSTRAINT hardware_fastener_head_pkey PRIMARY KEY (id);


--
-- TOC entry 3422 (class 2606 OID 17227)
-- Name: point hardware_fastener_screw_point_pkey; Type: CONSTRAINT; Schema: enum_item_hardware_fastener_screw_machine; Owner: hasura
--

ALTER TABLE ONLY enum_item_hardware_fastener_screw_machine.point
    ADD CONSTRAINT hardware_fastener_screw_point_pkey PRIMARY KEY (id);


--
-- TOC entry 3556 (class 2606 OID 30252)
-- Name: strength hardware_fastener_strength_class_pkey; Type: CONSTRAINT; Schema: enum_item_hardware_fastener_screw_machine; Owner: hasura
--

ALTER TABLE ONLY enum_item_hardware_fastener_screw_machine.strength
    ADD CONSTRAINT hardware_fastener_strength_class_pkey PRIMARY KEY (id);


--
-- TOC entry 3552 (class 2606 OID 30231)
-- Name: thread_fit hardware_fastener_thread_fit_pkey; Type: CONSTRAINT; Schema: enum_item_hardware_fastener_screw_machine; Owner: hasura
--

ALTER TABLE ONLY enum_item_hardware_fastener_screw_machine.thread_fit
    ADD CONSTRAINT hardware_fastener_thread_fit_pkey PRIMARY KEY (id);


--
-- TOC entry 3603 (class 2606 OID 31601)
-- Name: form hardware_fastener_washer_form_pkey; Type: CONSTRAINT; Schema: enum_item_hardware_fastener_washer; Owner: hasura
--

ALTER TABLE ONLY enum_item_hardware_fastener_washer.form
    ADD CONSTRAINT hardware_fastener_washer_form_pkey PRIMARY KEY (id);


--
-- TOC entry 3605 (class 2606 OID 31609)
-- Name: mechanism hardware_fastener_washer_lock_mechanism_pkey; Type: CONSTRAINT; Schema: enum_item_hardware_fastener_washer; Owner: hasura
--

ALTER TABLE ONLY enum_item_hardware_fastener_washer.mechanism
    ADD CONSTRAINT hardware_fastener_washer_lock_mechanism_pkey PRIMARY KEY (id);


--
-- TOC entry 3599 (class 2606 OID 31580)
-- Name: pattern hardware_fastener_washer_pattern_pkey; Type: CONSTRAINT; Schema: enum_item_hardware_fastener_washer; Owner: hasura
--

ALTER TABLE ONLY enum_item_hardware_fastener_washer.pattern
    ADD CONSTRAINT hardware_fastener_washer_pattern_pkey PRIMARY KEY (id);


--
-- TOC entry 3597 (class 2606 OID 31512)
-- Name: drill_bit_finish drill_bit_finish_pkey; Type: CONSTRAINT; Schema: enum_item_tool; Owner: hasura
--

ALTER TABLE ONLY enum_item_tool.drill_bit_finish
    ADD CONSTRAINT drill_bit_finish_pkey PRIMARY KEY (id);


--
-- TOC entry 3591 (class 2606 OID 31472)
-- Name: drill_bit_length_class drill_bit_length_class_pkey; Type: CONSTRAINT; Schema: enum_item_tool; Owner: hasura
--

ALTER TABLE ONLY enum_item_tool.drill_bit_length_class
    ADD CONSTRAINT drill_bit_length_class_pkey PRIMARY KEY (id);


--
-- TOC entry 3595 (class 2606 OID 31504)
-- Name: drill_bit_material drill_bit_material_pkey; Type: CONSTRAINT; Schema: enum_item_tool; Owner: hasura
--

ALTER TABLE ONLY enum_item_tool.drill_bit_material
    ADD CONSTRAINT drill_bit_material_pkey PRIMARY KEY (id);


--
-- TOC entry 3593 (class 2606 OID 31491)
-- Name: drill_bit_style drill_bit_style_pkey; Type: CONSTRAINT; Schema: enum_item_tool; Owner: hasura
--

ALTER TABLE ONLY enum_item_tool.drill_bit_style
    ADD CONSTRAINT drill_bit_style_pkey PRIMARY KEY (id);


--
-- TOC entry 3589 (class 2606 OID 31454)
-- Name: drill_bit_point drill_point_pkey; Type: CONSTRAINT; Schema: enum_item_tool; Owner: hasura
--

ALTER TABLE ONLY enum_item_tool.drill_bit_point
    ADD CONSTRAINT drill_point_pkey PRIMARY KEY (id);


--
-- TOC entry 3587 (class 2606 OID 31446)
-- Name: drill_bit_shank drill_shaft_pkey; Type: CONSTRAINT; Schema: enum_item_tool; Owner: hasura
--

ALTER TABLE ONLY enum_item_tool.drill_bit_shank
    ADD CONSTRAINT drill_shaft_pkey PRIMARY KEY (id);


--
-- TOC entry 3433 (class 2606 OID 17237)
-- Name: event_invocation_logs event_invocation_logs_pkey; Type: CONSTRAINT; Schema: hdb_catalog; Owner: hasura
--

ALTER TABLE ONLY hdb_catalog.event_invocation_logs
    ADD CONSTRAINT event_invocation_logs_pkey PRIMARY KEY (id);


--
-- TOC entry 3438 (class 2606 OID 17239)
-- Name: event_log event_log_pkey; Type: CONSTRAINT; Schema: hdb_catalog; Owner: hasura
--

ALTER TABLE ONLY hdb_catalog.event_log
    ADD CONSTRAINT event_log_pkey PRIMARY KEY (id);


--
-- TOC entry 3441 (class 2606 OID 17241)
-- Name: event_triggers event_triggers_pkey; Type: CONSTRAINT; Schema: hdb_catalog; Owner: hasura
--

ALTER TABLE ONLY hdb_catalog.event_triggers
    ADD CONSTRAINT event_triggers_pkey PRIMARY KEY (name);


--
-- TOC entry 3564 (class 2606 OID 30573)
-- Name: hdb_action_log hdb_action_log_pkey; Type: CONSTRAINT; Schema: hdb_catalog; Owner: hasura
--

ALTER TABLE ONLY hdb_catalog.hdb_action_log
    ADD CONSTRAINT hdb_action_log_pkey PRIMARY KEY (id);


--
-- TOC entry 3562 (class 2606 OID 30557)
-- Name: hdb_action_permission hdb_action_permission_pkey; Type: CONSTRAINT; Schema: hdb_catalog; Owner: hasura
--

ALTER TABLE ONLY hdb_catalog.hdb_action_permission
    ADD CONSTRAINT hdb_action_permission_pkey PRIMARY KEY (action_name, role_name);


--
-- TOC entry 3560 (class 2606 OID 30548)
-- Name: hdb_action hdb_action_pkey; Type: CONSTRAINT; Schema: hdb_catalog; Owner: hasura
--

ALTER TABLE ONLY hdb_catalog.hdb_action
    ADD CONSTRAINT hdb_action_pkey PRIMARY KEY (action_name);


--
-- TOC entry 3443 (class 2606 OID 17243)
-- Name: hdb_allowlist hdb_allowlist_collection_name_key; Type: CONSTRAINT; Schema: hdb_catalog; Owner: hasura
--

ALTER TABLE ONLY hdb_catalog.hdb_allowlist
    ADD CONSTRAINT hdb_allowlist_collection_name_key UNIQUE (collection_name);


--
-- TOC entry 3445 (class 2606 OID 17245)
-- Name: hdb_computed_field hdb_computed_field_pkey; Type: CONSTRAINT; Schema: hdb_catalog; Owner: hasura
--

ALTER TABLE ONLY hdb_catalog.hdb_computed_field
    ADD CONSTRAINT hdb_computed_field_pkey PRIMARY KEY (table_schema, table_name, computed_field_name);


--
-- TOC entry 3634 (class 2606 OID 32396)
-- Name: hdb_cron_event_invocation_logs hdb_cron_event_invocation_logs_pkey; Type: CONSTRAINT; Schema: hdb_catalog; Owner: hasura
--

ALTER TABLE ONLY hdb_catalog.hdb_cron_event_invocation_logs
    ADD CONSTRAINT hdb_cron_event_invocation_logs_pkey PRIMARY KEY (id);


--
-- TOC entry 3632 (class 2606 OID 32380)
-- Name: hdb_cron_events hdb_cron_events_pkey; Type: CONSTRAINT; Schema: hdb_catalog; Owner: hasura
--

ALTER TABLE ONLY hdb_catalog.hdb_cron_events
    ADD CONSTRAINT hdb_cron_events_pkey PRIMARY KEY (id);


--
-- TOC entry 3629 (class 2606 OID 32367)
-- Name: hdb_cron_triggers hdb_cron_triggers_pkey; Type: CONSTRAINT; Schema: hdb_catalog; Owner: hasura
--

ALTER TABLE ONLY hdb_catalog.hdb_cron_triggers
    ADD CONSTRAINT hdb_cron_triggers_pkey PRIMARY KEY (name);


--
-- TOC entry 3447 (class 2606 OID 17247)
-- Name: hdb_function hdb_function_pkey; Type: CONSTRAINT; Schema: hdb_catalog; Owner: hasura
--

ALTER TABLE ONLY hdb_catalog.hdb_function
    ADD CONSTRAINT hdb_function_pkey PRIMARY KEY (function_schema, function_name);


--
-- TOC entry 3449 (class 2606 OID 25064)
-- Name: hdb_permission hdb_permission_pkey; Type: CONSTRAINT; Schema: hdb_catalog; Owner: hasura
--

ALTER TABLE ONLY hdb_catalog.hdb_permission
    ADD CONSTRAINT hdb_permission_pkey PRIMARY KEY (table_schema, table_name, role_name, perm_type);


--
-- TOC entry 3451 (class 2606 OID 17251)
-- Name: hdb_query_collection hdb_query_collection_pkey; Type: CONSTRAINT; Schema: hdb_catalog; Owner: hasura
--

ALTER TABLE ONLY hdb_catalog.hdb_query_collection
    ADD CONSTRAINT hdb_query_collection_pkey PRIMARY KEY (collection_name);


--
-- TOC entry 3453 (class 2606 OID 25050)
-- Name: hdb_relationship hdb_relationship_pkey; Type: CONSTRAINT; Schema: hdb_catalog; Owner: hasura
--

ALTER TABLE ONLY hdb_catalog.hdb_relationship
    ADD CONSTRAINT hdb_relationship_pkey PRIMARY KEY (table_schema, table_name, rel_name);


--
-- TOC entry 3641 (class 2606 OID 32443)
-- Name: hdb_remote_relationship hdb_remote_relationship_pkey; Type: CONSTRAINT; Schema: hdb_catalog; Owner: hasura
--

ALTER TABLE ONLY hdb_catalog.hdb_remote_relationship
    ADD CONSTRAINT hdb_remote_relationship_pkey PRIMARY KEY (remote_relationship_name, table_schema, table_name);


--
-- TOC entry 3639 (class 2606 OID 32430)
-- Name: hdb_scheduled_event_invocation_logs hdb_scheduled_event_invocation_logs_pkey; Type: CONSTRAINT; Schema: hdb_catalog; Owner: hasura
--

ALTER TABLE ONLY hdb_catalog.hdb_scheduled_event_invocation_logs
    ADD CONSTRAINT hdb_scheduled_event_invocation_logs_pkey PRIMARY KEY (id);


--
-- TOC entry 3637 (class 2606 OID 32419)
-- Name: hdb_scheduled_events hdb_scheduled_events_pkey; Type: CONSTRAINT; Schema: hdb_catalog; Owner: hasura
--

ALTER TABLE ONLY hdb_catalog.hdb_scheduled_events
    ADD CONSTRAINT hdb_scheduled_events_pkey PRIMARY KEY (id);


--
-- TOC entry 3456 (class 2606 OID 25021)
-- Name: hdb_table hdb_table_pkey; Type: CONSTRAINT; Schema: hdb_catalog; Owner: hasura
--

ALTER TABLE ONLY hdb_catalog.hdb_table
    ADD CONSTRAINT hdb_table_pkey PRIMARY KEY (table_schema, table_name);


--
-- TOC entry 3459 (class 2606 OID 17257)
-- Name: hdb_version hdb_version_pkey; Type: CONSTRAINT; Schema: hdb_catalog; Owner: hasura
--

ALTER TABLE ONLY hdb_catalog.hdb_version
    ADD CONSTRAINT hdb_version_pkey PRIMARY KEY (hasura_uuid);


--
-- TOC entry 3461 (class 2606 OID 17259)
-- Name: remote_schemas remote_schemas_name_key; Type: CONSTRAINT; Schema: hdb_catalog; Owner: hasura
--

ALTER TABLE ONLY hdb_catalog.remote_schemas
    ADD CONSTRAINT remote_schemas_name_key UNIQUE (name);


--
-- TOC entry 3463 (class 2606 OID 17261)
-- Name: remote_schemas remote_schemas_pkey; Type: CONSTRAINT; Schema: hdb_catalog; Owner: hasura
--

ALTER TABLE ONLY hdb_catalog.remote_schemas
    ADD CONSTRAINT remote_schemas_pkey PRIMARY KEY (id);


--
-- TOC entry 3617 (class 2606 OID 31824)
-- Name: cable_conductive conductive_pkey; Type: CONSTRAINT; Schema: item; Owner: hasura
--

ALTER TABLE ONLY item.cable_conductive
    ADD CONSTRAINT conductive_pkey PRIMARY KEY (id);


--
-- TOC entry 3585 (class 2606 OID 31438)
-- Name: hardware_drill_bit hardware_drill_bit_pkey; Type: CONSTRAINT; Schema: item; Owner: hasura
--

ALTER TABLE ONLY item.hardware_drill_bit
    ADD CONSTRAINT hardware_drill_bit_pkey PRIMARY KEY (id);


--
-- TOC entry 3615 (class 2606 OID 31806)
-- Name: hardware_fastener_insert hardware_fastener_insert_pkey; Type: CONSTRAINT; Schema: item; Owner: hasura
--

ALTER TABLE ONLY item.hardware_fastener_insert
    ADD CONSTRAINT hardware_fastener_insert_pkey PRIMARY KEY (id);


--
-- TOC entry 3542 (class 2606 OID 30129)
-- Name: hardware_fastener_screw hardware_fastener_screw_pkey; Type: CONSTRAINT; Schema: item; Owner: hasura
--

ALTER TABLE ONLY item.hardware_fastener_screw
    ADD CONSTRAINT hardware_fastener_screw_pkey PRIMARY KEY (id);


--
-- TOC entry 3568 (class 2606 OID 30928)
-- Name: hardware_fastener_standoff hardware_fastener_standoff_pkey; Type: CONSTRAINT; Schema: item; Owner: hasura
--

ALTER TABLE ONLY item.hardware_fastener_standoff
    ADD CONSTRAINT hardware_fastener_standoff_pkey PRIMARY KEY (id);


--
-- TOC entry 3601 (class 2606 OID 31588)
-- Name: hardware_fastener_washer hardware_fastener_washer_pkey; Type: CONSTRAINT; Schema: item; Owner: hasura
--

ALTER TABLE ONLY item.hardware_fastener_washer
    ADD CONSTRAINT hardware_fastener_washer_pkey PRIMARY KEY (id);


--
-- TOC entry 3532 (class 2606 OID 24894)
-- Name: bundle_map item_bundle_map_pkey; Type: CONSTRAINT; Schema: item; Owner: hasura
--

ALTER TABLE ONLY item.bundle_map
    ADD CONSTRAINT item_bundle_map_pkey PRIMARY KEY (item_bundle_id, item_member_id);


--
-- TOC entry 3474 (class 2606 OID 17271)
-- Name: bundle item_bundle_name_key; Type: CONSTRAINT; Schema: item; Owner: hasura
--

ALTER TABLE ONLY item.bundle
    ADD CONSTRAINT item_bundle_name_key UNIQUE (name);


--
-- TOC entry 3476 (class 2606 OID 17273)
-- Name: bundle item_bundle_pkey; Type: CONSTRAINT; Schema: item; Owner: hasura
--

ALTER TABLE ONLY item.bundle
    ADD CONSTRAINT item_bundle_pkey PRIMARY KEY (id);


--
-- TOC entry 3418 (class 2606 OID 25088)
-- Name: hardware_fastener_screw_machine item_hardware_fastener_bolt_pkey; Type: CONSTRAINT; Schema: item; Owner: hasura
--

ALTER TABLE ONLY item.hardware_fastener_screw_machine
    ADD CONSTRAINT item_hardware_fastener_bolt_pkey PRIMARY KEY (id);


--
-- TOC entry 3478 (class 2606 OID 17277)
-- Name: hardware_fastener_nut items_hardware_nut_pkey; Type: CONSTRAINT; Schema: item; Owner: hasura
--

ALTER TABLE ONLY item.hardware_fastener_nut
    ADD CONSTRAINT items_hardware_nut_pkey PRIMARY KEY (id);


--
-- TOC entry 3579 (class 2606 OID 31383)
-- Name: item_hardware_fastener_bolt_strength item_hardware_fastener_bolt_strength_pkey; Type: CONSTRAINT; Schema: property; Owner: hasura
--

ALTER TABLE ONLY property.item_hardware_fastener_bolt_strength
    ADD CONSTRAINT item_hardware_fastener_bolt_strength_pkey PRIMARY KEY (diameter, thread_pitch, strength_grade);


--
-- TOC entry 3621 (class 2606 OID 31929)
-- Name: diameter diameter_pkey; Type: CONSTRAINT; Schema: property_item_hardware_fastener_screw_machine; Owner: hasura
--

ALTER TABLE ONLY property_item_hardware_fastener_screw_machine.diameter
    ADD CONSTRAINT diameter_pkey PRIMARY KEY (diameter_major, pitch, fit);


--
-- TOC entry 3534 (class 2606 OID 24923)
-- Name: icon_item_category_map icon_item_category_map_category_sequence_key; Type: CONSTRAINT; Schema: public; Owner: hasura
--

ALTER TABLE ONLY public.icon_item_category_map
    ADD CONSTRAINT icon_item_category_map_category_sequence_key UNIQUE (category, sequence);


--
-- TOC entry 3536 (class 2606 OID 24921)
-- Name: icon_item_category_map icon_item_category_map_pkey; Type: CONSTRAINT; Schema: public; Owner: hasura
--

ALTER TABLE ONLY public.icon_item_category_map
    ADD CONSTRAINT icon_item_category_map_pkey PRIMARY KEY (icon_id, category, sequence);


--
-- TOC entry 3566 (class 2606 OID 30898)
-- Name: icon_item_map icon_item_map_pkey; Type: CONSTRAINT; Schema: public; Owner: hasura
--

ALTER TABLE ONLY public.icon_item_map
    ADD CONSTRAINT icon_item_map_pkey PRIMARY KEY (icon_id, item_id);


--
-- TOC entry 3538 (class 2606 OID 24976)
-- Name: icon_label_map icon_label_map_pkey; Type: CONSTRAINT; Schema: public; Owner: hasura
--

ALTER TABLE ONLY public.icon_label_map
    ADD CONSTRAINT icon_label_map_pkey PRIMARY KEY (icon_id, label_id);


--
-- TOC entry 3465 (class 2606 OID 17267)
-- Name: icon icons_id_key; Type: CONSTRAINT; Schema: public; Owner: hasura
--

ALTER TABLE ONLY public.icon
    ADD CONSTRAINT icons_id_key UNIQUE (id);


--
-- TOC entry 3467 (class 2606 OID 17269)
-- Name: icon icons_pkey; Type: CONSTRAINT; Schema: public; Owner: hasura
--

ALTER TABLE ONLY public.icon
    ADD CONSTRAINT icons_pkey PRIMARY KEY (id);


--
-- TOC entry 3471 (class 2606 OID 17275)
-- Name: item item_pkey; Type: CONSTRAINT; Schema: public; Owner: hasura
--

ALTER TABLE ONLY public.item
    ADD CONSTRAINT item_pkey PRIMARY KEY (id);


--
-- TOC entry 3480 (class 2606 OID 17279)
-- Name: label label_id_key; Type: CONSTRAINT; Schema: public; Owner: hasura
--

ALTER TABLE ONLY public.label
    ADD CONSTRAINT label_id_key UNIQUE (id);


--
-- TOC entry 3540 (class 2606 OID 24986)
-- Name: label_item_map label_item_map_pkey; Type: CONSTRAINT; Schema: public; Owner: hasura
--

ALTER TABLE ONLY public.label_item_map
    ADD CONSTRAINT label_item_map_pkey PRIMARY KEY (label_id, item_id);


--
-- TOC entry 3482 (class 2606 OID 17281)
-- Name: label label_pkey; Type: CONSTRAINT; Schema: public; Owner: hasura
--

ALTER TABLE ONLY public.label
    ADD CONSTRAINT label_pkey PRIMARY KEY (id);


--
-- TOC entry 3484 (class 2606 OID 17283)
-- Name: label_template_map label_template_map_item_id_label_id_key; Type: CONSTRAINT; Schema: public; Owner: hasura
--

ALTER TABLE ONLY public.label_template_map
    ADD CONSTRAINT label_template_map_item_id_label_id_key UNIQUE (item_id, label_id);


--
-- TOC entry 3486 (class 2606 OID 24941)
-- Name: label_template_map label_template_map_pkey; Type: CONSTRAINT; Schema: public; Owner: hasura
--

ALTER TABLE ONLY public.label_template_map
    ADD CONSTRAINT label_template_map_pkey PRIMARY KEY (item_class, label_id, sequence);


--
-- TOC entry 3530 (class 2606 OID 24781)
-- Name: manufacturer_item manufacturer_item_pkey; Type: CONSTRAINT; Schema: public; Owner: hasura
--

ALTER TABLE ONLY public.manufacturer_item
    ADD CONSTRAINT manufacturer_item_pkey PRIMARY KEY (id);


--
-- TOC entry 3523 (class 2606 OID 24763)
-- Name: manufacturer manufacturer_pkey; Type: CONSTRAINT; Schema: public; Owner: hasura
--

ALTER TABLE ONLY public.manufacturer
    ADD CONSTRAINT manufacturer_pkey PRIMARY KEY (id);


--
-- TOC entry 3525 (class 2606 OID 32277)
-- Name: manufacturer manufacturer_vendor_id_key; Type: CONSTRAINT; Schema: public; Owner: hasura
--

ALTER TABLE ONLY public.manufacturer
    ADD CONSTRAINT manufacturer_vendor_id_key UNIQUE (vendor_id);


--
-- TOC entry 3493 (class 2606 OID 32526)
-- Name: order_item order_item_id_key; Type: CONSTRAINT; Schema: public; Owner: hasura
--

ALTER TABLE ONLY public.order_item
    ADD CONSTRAINT order_item_id_key UNIQUE (id);


--
-- TOC entry 3495 (class 2606 OID 32338)
-- Name: order_item order_item_item_id_vendor_item_id_serial_no_key; Type: CONSTRAINT; Schema: public; Owner: hasura
--

ALTER TABLE ONLY public.order_item
    ADD CONSTRAINT order_item_item_id_vendor_item_id_serial_no_key UNIQUE (item_id, vendor_item_id, serial_no);


--
-- TOC entry 3497 (class 2606 OID 32538)
-- Name: order_item order_item_pkey; Type: CONSTRAINT; Schema: public; Owner: hasura
--

ALTER TABLE ONLY public.order_item
    ADD CONSTRAINT order_item_pkey PRIMARY KEY (id);


--
-- TOC entry 3499 (class 2606 OID 24852)
-- Name: order_item order_item_vendor_item_id_order_id_serial_no_key; Type: CONSTRAINT; Schema: public; Owner: hasura
--

ALTER TABLE ONLY public.order_item
    ADD CONSTRAINT order_item_vendor_item_id_order_id_serial_no_key UNIQUE (vendor_item_id, order_id, serial_no);


--
-- TOC entry 3503 (class 2606 OID 24635)
-- Name: order order_pkey; Type: CONSTRAINT; Schema: public; Owner: hasura
--

ALTER TABLE ONLY public."order"
    ADD CONSTRAINT order_pkey PRIMARY KEY (id);


--
-- TOC entry 3510 (class 2606 OID 24706)
-- Name: payment_method payment_method_pkey; Type: CONSTRAINT; Schema: public; Owner: hasura
--

ALTER TABLE ONLY public.payment_method
    ADD CONSTRAINT payment_method_pkey PRIMARY KEY (id);


--
-- TOC entry 3575 (class 2606 OID 31061)
-- Name: search_data search_pkey; Type: CONSTRAINT; Schema: public; Owner: hasura
--

ALTER TABLE ONLY public.search_data
    ADD CONSTRAINT search_pkey PRIMARY KEY (id);


--
-- TOC entry 3505 (class 2606 OID 24682)
-- Name: shipment shipment_pkey; Type: CONSTRAINT; Schema: public; Owner: hasura
--

ALTER TABLE ONLY public.shipment
    ADD CONSTRAINT shipment_pkey PRIMARY KEY (id);


--
-- TOC entry 3623 (class 2606 OID 32091)
-- Name: storage storage_parent_name_key; Type: CONSTRAINT; Schema: public; Owner: hasura
--

ALTER TABLE ONLY public.storage
    ADD CONSTRAINT storage_parent_name_key UNIQUE (parent_id, name);


--
-- TOC entry 3625 (class 2606 OID 32095)
-- Name: storage storage_pkey; Type: CONSTRAINT; Schema: public; Owner: hasura
--

ALTER TABLE ONLY public.storage
    ADD CONSTRAINT storage_pkey PRIMARY KEY (id);


--
-- TOC entry 3609 (class 2606 OID 31720)
-- Name: tag tag_id_key; Type: CONSTRAINT; Schema: public; Owner: hasura
--

ALTER TABLE ONLY public.tag
    ADD CONSTRAINT tag_id_key UNIQUE (id);


--
-- TOC entry 3611 (class 2606 OID 31718)
-- Name: tag tag_pkey; Type: CONSTRAINT; Schema: public; Owner: hasura
--

ALTER TABLE ONLY public.tag
    ADD CONSTRAINT tag_pkey PRIMARY KEY (text);


--
-- TOC entry 3515 (class 2606 OID 32331)
-- Name: vendor_item vendor_item_id_item_id_key; Type: CONSTRAINT; Schema: public; Owner: hasura
--

ALTER TABLE ONLY public.vendor_item
    ADD CONSTRAINT vendor_item_id_item_id_key UNIQUE (id, item_id);


--
-- TOC entry 3518 (class 2606 OID 24737)
-- Name: vendor_item vendor_item_pkey; Type: CONSTRAINT; Schema: public; Owner: hasura
--

ALTER TABLE ONLY public.vendor_item
    ADD CONSTRAINT vendor_item_pkey PRIMARY KEY (id);


--
-- TOC entry 3508 (class 2606 OID 24695)
-- Name: vendor vendor_pkey; Type: CONSTRAINT; Schema: public; Owner: hasura
--

ALTER TABLE ONLY public.vendor
    ADD CONSTRAINT vendor_pkey PRIMARY KEY (id);


--
-- TOC entry 3431 (class 1259 OID 17288)
-- Name: event_invocation_logs_event_id_idx; Type: INDEX; Schema: hdb_catalog; Owner: hasura
--

CREATE INDEX event_invocation_logs_event_id_idx ON hdb_catalog.event_invocation_logs USING btree (event_id);


--
-- TOC entry 3434 (class 1259 OID 30584)
-- Name: event_log_created_at_idx; Type: INDEX; Schema: hdb_catalog; Owner: hasura
--

CREATE INDEX event_log_created_at_idx ON hdb_catalog.event_log USING btree (created_at);


--
-- TOC entry 3435 (class 1259 OID 17289)
-- Name: event_log_delivered_idx; Type: INDEX; Schema: hdb_catalog; Owner: hasura
--

CREATE INDEX event_log_delivered_idx ON hdb_catalog.event_log USING btree (delivered);


--
-- TOC entry 3436 (class 1259 OID 17290)
-- Name: event_log_locked_idx; Type: INDEX; Schema: hdb_catalog; Owner: hasura
--

CREATE INDEX event_log_locked_idx ON hdb_catalog.event_log USING btree (locked);


--
-- TOC entry 3439 (class 1259 OID 17291)
-- Name: event_log_trigger_name_idx; Type: INDEX; Schema: hdb_catalog; Owner: hasura
--

CREATE INDEX event_log_trigger_name_idx ON hdb_catalog.event_log USING btree (trigger_name);


--
-- TOC entry 3630 (class 1259 OID 32386)
-- Name: hdb_cron_event_status; Type: INDEX; Schema: hdb_catalog; Owner: hasura
--

CREATE INDEX hdb_cron_event_status ON hdb_catalog.hdb_cron_events USING btree (status);


--
-- TOC entry 3635 (class 1259 OID 32420)
-- Name: hdb_scheduled_event_status; Type: INDEX; Schema: hdb_catalog; Owner: hasura
--

CREATE INDEX hdb_scheduled_event_status ON hdb_catalog.hdb_scheduled_events USING btree (status);


--
-- TOC entry 3454 (class 1259 OID 17292)
-- Name: hdb_schema_update_event_one_row; Type: INDEX; Schema: hdb_catalog; Owner: hasura
--

CREATE UNIQUE INDEX hdb_schema_update_event_one_row ON hdb_catalog.hdb_schema_update_event USING btree (((occurred_at IS NOT NULL)));


--
-- TOC entry 3457 (class 1259 OID 17293)
-- Name: hdb_version_one_row; Type: INDEX; Schema: hdb_catalog; Owner: hasura
--

CREATE UNIQUE INDEX hdb_version_one_row ON hdb_catalog.hdb_version USING btree (((version IS NOT NULL)));


--
-- TOC entry 3571 (class 1259 OID 31099)
-- Name: class_idx; Type: INDEX; Schema: public; Owner: hasura
--

CREATE INDEX class_idx ON public.search_data USING btree (class);


--
-- TOC entry 3468 (class 1259 OID 32736)
-- Name: idx_item_class; Type: INDEX; Schema: public; Owner: hasura
--

CREATE INDEX idx_item_class ON public.item USING btree (class);


--
-- TOC entry 3469 (class 1259 OID 32735)
-- Name: idx_item_id; Type: INDEX; Schema: public; Owner: hasura
--

CREATE INDEX idx_item_id ON public.item USING btree (id);


--
-- TOC entry 3520 (class 1259 OID 32747)
-- Name: idx_manufacturer_id; Type: INDEX; Schema: public; Owner: hasura
--

CREATE INDEX idx_manufacturer_id ON public.manufacturer USING btree (id);


--
-- TOC entry 3526 (class 1259 OID 32744)
-- Name: idx_manufacturer_item_id; Type: INDEX; Schema: public; Owner: hasura
--

CREATE INDEX idx_manufacturer_item_id ON public.manufacturer_item USING btree (id);


--
-- TOC entry 3527 (class 1259 OID 32745)
-- Name: idx_manufacturer_item_item_id; Type: INDEX; Schema: public; Owner: hasura
--

CREATE INDEX idx_manufacturer_item_item_id ON public.manufacturer_item USING btree (item_id);


--
-- TOC entry 3528 (class 1259 OID 32746)
-- Name: idx_manufacturer_item_manufacturer_id; Type: INDEX; Schema: public; Owner: hasura
--

CREATE INDEX idx_manufacturer_item_manufacturer_id ON public.manufacturer_item USING btree (manufacturer_id);


--
-- TOC entry 3521 (class 1259 OID 32748)
-- Name: idx_manufacturer_vendor_id; Type: INDEX; Schema: public; Owner: hasura
--

CREATE INDEX idx_manufacturer_vendor_id ON public.manufacturer USING btree (vendor_id);


--
-- TOC entry 3500 (class 1259 OID 32742)
-- Name: idx_order_id; Type: INDEX; Schema: public; Owner: hasura
--

CREATE INDEX idx_order_id ON public."order" USING btree (id);


--
-- TOC entry 3487 (class 1259 OID 32741)
-- Name: idx_order_item_id; Type: INDEX; Schema: public; Owner: hasura
--

CREATE INDEX idx_order_item_id ON public.order_item USING btree (id);


--
-- TOC entry 3488 (class 1259 OID 32737)
-- Name: idx_order_item_item_id; Type: INDEX; Schema: public; Owner: hasura
--

CREATE INDEX idx_order_item_item_id ON public.order_item USING btree (item_id);


--
-- TOC entry 3489 (class 1259 OID 32740)
-- Name: idx_order_item_manufacturer_item_id; Type: INDEX; Schema: public; Owner: hasura
--

CREATE INDEX idx_order_item_manufacturer_item_id ON public.order_item USING btree (manufacturer_item_id);


--
-- TOC entry 3490 (class 1259 OID 32738)
-- Name: idx_order_item_order_id; Type: INDEX; Schema: public; Owner: hasura
--

CREATE INDEX idx_order_item_order_id ON public.order_item USING btree (order_id);


--
-- TOC entry 3491 (class 1259 OID 32739)
-- Name: idx_order_item_vendor_item_id; Type: INDEX; Schema: public; Owner: hasura
--

CREATE INDEX idx_order_item_vendor_item_id ON public.order_item USING btree (vendor_item_id);


--
-- TOC entry 3501 (class 1259 OID 32743)
-- Name: idx_order_vendor_id; Type: INDEX; Schema: public; Owner: hasura
--

CREATE INDEX idx_order_vendor_id ON public."order" USING btree (vendor_id);


--
-- TOC entry 3472 (class 1259 OID 31140)
-- Name: json_item_obj_idx; Type: INDEX; Schema: public; Owner: hasura
--

CREATE INDEX json_item_obj_idx ON public.item USING gin (object);


--
-- TOC entry 3572 (class 1259 OID 31139)
-- Name: json_metadata_idx; Type: INDEX; Schema: public; Owner: hasura
--

CREATE INDEX json_metadata_idx ON public.search_data USING gin (metadata);


--
-- TOC entry 3573 (class 1259 OID 31095)
-- Name: search_idx; Type: INDEX; Schema: public; Owner: hasura
--

CREATE INDEX search_idx ON public.search_data USING gin (search_vector);


--
-- TOC entry 3506 (class 1259 OID 32734)
-- Name: vendor_id_idx; Type: INDEX; Schema: public; Owner: hasura
--

CREATE INDEX vendor_id_idx ON public.vendor USING btree (id);


--
-- TOC entry 3513 (class 1259 OID 32731)
-- Name: vendor_item_id_idx; Type: INDEX; Schema: public; Owner: hasura
--

CREATE INDEX vendor_item_id_idx ON public.vendor_item USING btree (id);


--
-- TOC entry 3516 (class 1259 OID 32732)
-- Name: vendor_item_item_id_idx; Type: INDEX; Schema: public; Owner: hasura
--

CREATE INDEX vendor_item_item_id_idx ON public.vendor_item USING btree (item_id);


--
-- TOC entry 3519 (class 1259 OID 32733)
-- Name: vendor_item_vendor_id_idx; Type: INDEX; Schema: public; Owner: hasura
--

CREATE INDEX vendor_item_vendor_id_idx ON public.vendor_item USING btree (vendor_id);


--
-- TOC entry 3733 (class 2620 OID 17294)
-- Name: hdb_schema_update_event hdb_schema_update_event_notifier; Type: TRIGGER; Schema: hdb_catalog; Owner: hasura
--

CREATE TRIGGER hdb_schema_update_event_notifier AFTER INSERT OR UPDATE ON hdb_catalog.hdb_schema_update_event FOR EACH ROW EXECUTE FUNCTION hdb_catalog.hdb_schema_update_event_notifier();


--
-- TOC entry 3734 (class 2620 OID 30870)
-- Name: bundle insert_update; Type: TRIGGER; Schema: item; Owner: hasura
--

CREATE TRIGGER insert_update BEFORE INSERT OR UPDATE ON item.bundle FOR EACH ROW EXECUTE FUNCTION item.insert_update_item_to_base();


--
-- TOC entry 3735 (class 2620 OID 30871)
-- Name: hardware_fastener_nut insert_update; Type: TRIGGER; Schema: item; Owner: hasura
--

CREATE TRIGGER insert_update BEFORE INSERT OR UPDATE ON item.hardware_fastener_nut FOR EACH ROW EXECUTE FUNCTION item.insert_update_item_to_base();


--
-- TOC entry 3737 (class 2620 OID 31016)
-- Name: hardware_fastener_screw insert_update; Type: TRIGGER; Schema: item; Owner: hasura
--

CREATE TRIGGER insert_update BEFORE INSERT OR UPDATE ON item.hardware_fastener_screw FOR EACH ROW EXECUTE FUNCTION item.insert_update_item_to_base();


--
-- TOC entry 3732 (class 2620 OID 30864)
-- Name: hardware_fastener_screw_machine insert_update; Type: TRIGGER; Schema: item; Owner: hasura
--

CREATE TRIGGER insert_update BEFORE INSERT OR UPDATE ON item.hardware_fastener_screw_machine FOR EACH ROW EXECUTE FUNCTION item.insert_update_item_to_base();


--
-- TOC entry 3738 (class 2620 OID 31017)
-- Name: hardware_fastener_standoff insert_update; Type: TRIGGER; Schema: item; Owner: hasura
--

CREATE TRIGGER insert_update BEFORE INSERT OR UPDATE ON item.hardware_fastener_standoff FOR EACH ROW EXECUTE FUNCTION item.insert_update_item_to_base();


--
-- TOC entry 3736 (class 2620 OID 17299)
-- Name: label set_public_label_updated_at; Type: TRIGGER; Schema: public; Owner: hasura
--

CREATE TRIGGER set_public_label_updated_at BEFORE UPDATE ON public.label FOR EACH ROW EXECUTE FUNCTION public.set_current_timestamp_updated_at();


--
-- TOC entry 4074 (class 0 OID 0)
-- Dependencies: 3736
-- Name: TRIGGER set_public_label_updated_at ON label; Type: COMMENT; Schema: public; Owner: hasura
--

COMMENT ON TRIGGER set_public_label_updated_at ON public.label IS 'trigger to set value of column "updated_at" to current timestamp on row update';


--
-- TOC entry 3739 (class 2620 OID 31066)
-- Name: search_data update_vector_if_null; Type: TRIGGER; Schema: public; Owner: hasura
--

CREATE TRIGGER update_vector_if_null BEFORE INSERT OR UPDATE ON public.search_data FOR EACH ROW WHEN ((new.search_vector IS NULL)) EXECUTE FUNCTION public.update_vector();


--
-- TOC entry 3656 (class 2606 OID 17300)
-- Name: event_invocation_logs event_invocation_logs_event_id_fkey; Type: FK CONSTRAINT; Schema: hdb_catalog; Owner: hasura
--

ALTER TABLE ONLY hdb_catalog.event_invocation_logs
    ADD CONSTRAINT event_invocation_logs_event_id_fkey FOREIGN KEY (event_id) REFERENCES hdb_catalog.event_log(id);


--
-- TOC entry 3657 (class 2606 OID 25022)
-- Name: event_triggers event_triggers_schema_name_fkey; Type: FK CONSTRAINT; Schema: hdb_catalog; Owner: hasura
--

ALTER TABLE ONLY hdb_catalog.event_triggers
    ADD CONSTRAINT event_triggers_schema_name_fkey FOREIGN KEY (schema_name, table_name) REFERENCES hdb_catalog.hdb_table(table_schema, table_name) ON UPDATE CASCADE;


--
-- TOC entry 3700 (class 2606 OID 30558)
-- Name: hdb_action_permission hdb_action_permission_action_name_fkey; Type: FK CONSTRAINT; Schema: hdb_catalog; Owner: hasura
--

ALTER TABLE ONLY hdb_catalog.hdb_action_permission
    ADD CONSTRAINT hdb_action_permission_action_name_fkey FOREIGN KEY (action_name) REFERENCES hdb_catalog.hdb_action(action_name) ON UPDATE CASCADE;


--
-- TOC entry 3658 (class 2606 OID 17310)
-- Name: hdb_allowlist hdb_allowlist_collection_name_fkey; Type: FK CONSTRAINT; Schema: hdb_catalog; Owner: hasura
--

ALTER TABLE ONLY hdb_catalog.hdb_allowlist
    ADD CONSTRAINT hdb_allowlist_collection_name_fkey FOREIGN KEY (collection_name) REFERENCES hdb_catalog.hdb_query_collection(collection_name);


--
-- TOC entry 3659 (class 2606 OID 25027)
-- Name: hdb_computed_field hdb_computed_field_table_schema_fkey; Type: FK CONSTRAINT; Schema: hdb_catalog; Owner: hasura
--

ALTER TABLE ONLY hdb_catalog.hdb_computed_field
    ADD CONSTRAINT hdb_computed_field_table_schema_fkey FOREIGN KEY (table_schema, table_name) REFERENCES hdb_catalog.hdb_table(table_schema, table_name) ON UPDATE CASCADE;


--
-- TOC entry 3729 (class 2606 OID 32397)
-- Name: hdb_cron_event_invocation_logs hdb_cron_event_invocation_logs_event_id_fkey; Type: FK CONSTRAINT; Schema: hdb_catalog; Owner: hasura
--

ALTER TABLE ONLY hdb_catalog.hdb_cron_event_invocation_logs
    ADD CONSTRAINT hdb_cron_event_invocation_logs_event_id_fkey FOREIGN KEY (event_id) REFERENCES hdb_catalog.hdb_cron_events(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- TOC entry 3728 (class 2606 OID 32381)
-- Name: hdb_cron_events hdb_cron_events_trigger_name_fkey; Type: FK CONSTRAINT; Schema: hdb_catalog; Owner: hasura
--

ALTER TABLE ONLY hdb_catalog.hdb_cron_events
    ADD CONSTRAINT hdb_cron_events_trigger_name_fkey FOREIGN KEY (trigger_name) REFERENCES hdb_catalog.hdb_cron_triggers(name) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- TOC entry 3660 (class 2606 OID 25065)
-- Name: hdb_permission hdb_permission_table_schema_fkey; Type: FK CONSTRAINT; Schema: hdb_catalog; Owner: hasura
--

ALTER TABLE ONLY hdb_catalog.hdb_permission
    ADD CONSTRAINT hdb_permission_table_schema_fkey FOREIGN KEY (table_schema, table_name) REFERENCES hdb_catalog.hdb_table(table_schema, table_name) ON UPDATE CASCADE;


--
-- TOC entry 3661 (class 2606 OID 25051)
-- Name: hdb_relationship hdb_relationship_table_schema_fkey; Type: FK CONSTRAINT; Schema: hdb_catalog; Owner: hasura
--

ALTER TABLE ONLY hdb_catalog.hdb_relationship
    ADD CONSTRAINT hdb_relationship_table_schema_fkey FOREIGN KEY (table_schema, table_name) REFERENCES hdb_catalog.hdb_table(table_schema, table_name) ON UPDATE CASCADE;


--
-- TOC entry 3731 (class 2606 OID 32444)
-- Name: hdb_remote_relationship hdb_remote_relationship_table_schema_table_name_fkey; Type: FK CONSTRAINT; Schema: hdb_catalog; Owner: hasura
--

ALTER TABLE ONLY hdb_catalog.hdb_remote_relationship
    ADD CONSTRAINT hdb_remote_relationship_table_schema_table_name_fkey FOREIGN KEY (table_schema, table_name) REFERENCES hdb_catalog.hdb_table(table_schema, table_name) ON UPDATE CASCADE;


--
-- TOC entry 3730 (class 2606 OID 32431)
-- Name: hdb_scheduled_event_invocation_logs hdb_scheduled_event_invocation_logs_event_id_fkey; Type: FK CONSTRAINT; Schema: hdb_catalog; Owner: hasura
--

ALTER TABLE ONLY hdb_catalog.hdb_scheduled_event_invocation_logs
    ADD CONSTRAINT hdb_scheduled_event_invocation_logs_event_id_fkey FOREIGN KEY (event_id) REFERENCES hdb_catalog.hdb_scheduled_events(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- TOC entry 3721 (class 2606 OID 31825)
-- Name: cable_conductive conductive_unit_fkey; Type: FK CONSTRAINT; Schema: item; Owner: hasura
--

ALTER TABLE ONLY item.cable_conductive
    ADD CONSTRAINT conductive_unit_fkey FOREIGN KEY (unit) REFERENCES enum.unit(id) ON UPDATE RESTRICT ON DELETE RESTRICT;


--
-- TOC entry 3714 (class 2606 OID 31518)
-- Name: hardware_drill_bit hardware_drill_bit_finish_fkey; Type: FK CONSTRAINT; Schema: item; Owner: hasura
--

ALTER TABLE ONLY item.hardware_drill_bit
    ADD CONSTRAINT hardware_drill_bit_finish_fkey FOREIGN KEY (finish) REFERENCES enum_item_tool.drill_bit_finish(id) ON UPDATE RESTRICT ON DELETE RESTRICT;


--
-- TOC entry 3708 (class 2606 OID 31473)
-- Name: hardware_drill_bit hardware_drill_bit_flute_direction_fkey; Type: FK CONSTRAINT; Schema: item; Owner: hasura
--

ALTER TABLE ONLY item.hardware_drill_bit
    ADD CONSTRAINT hardware_drill_bit_flute_direction_fkey FOREIGN KEY (flute_direction) REFERENCES enum_item.handedness(id) ON UPDATE RESTRICT ON DELETE RESTRICT;


--
-- TOC entry 3709 (class 2606 OID 31478)
-- Name: hardware_drill_bit hardware_drill_bit_length_class_fkey; Type: FK CONSTRAINT; Schema: item; Owner: hasura
--

ALTER TABLE ONLY item.hardware_drill_bit
    ADD CONSTRAINT hardware_drill_bit_length_class_fkey FOREIGN KEY (length_class) REFERENCES enum_item_tool.drill_bit_length_class(id) ON UPDATE RESTRICT ON DELETE RESTRICT;


--
-- TOC entry 3713 (class 2606 OID 31513)
-- Name: hardware_drill_bit hardware_drill_bit_material_fkey; Type: FK CONSTRAINT; Schema: item; Owner: hasura
--

ALTER TABLE ONLY item.hardware_drill_bit
    ADD CONSTRAINT hardware_drill_bit_material_fkey FOREIGN KEY (material) REFERENCES enum_item_tool.drill_bit_material(id) ON UPDATE RESTRICT ON DELETE RESTRICT;


--
-- TOC entry 3712 (class 2606 OID 31460)
-- Name: hardware_drill_bit hardware_drill_bit_point_fkey; Type: FK CONSTRAINT; Schema: item; Owner: hasura
--

ALTER TABLE ONLY item.hardware_drill_bit
    ADD CONSTRAINT hardware_drill_bit_point_fkey FOREIGN KEY (point) REFERENCES enum_item_tool.drill_bit_point(id) ON UPDATE RESTRICT ON DELETE RESTRICT;


--
-- TOC entry 3711 (class 2606 OID 31455)
-- Name: hardware_drill_bit hardware_drill_bit_shank_fkey; Type: FK CONSTRAINT; Schema: item; Owner: hasura
--

ALTER TABLE ONLY item.hardware_drill_bit
    ADD CONSTRAINT hardware_drill_bit_shank_fkey FOREIGN KEY (shank) REFERENCES enum_item_tool.drill_bit_shank(id) ON UPDATE RESTRICT ON DELETE RESTRICT;


--
-- TOC entry 3710 (class 2606 OID 31492)
-- Name: hardware_drill_bit hardware_drill_bit_style_fkey; Type: FK CONSTRAINT; Schema: item; Owner: hasura
--

ALTER TABLE ONLY item.hardware_drill_bit
    ADD CONSTRAINT hardware_drill_bit_style_fkey FOREIGN KEY (style) REFERENCES enum_item_tool.drill_bit_style(id) ON UPDATE RESTRICT ON DELETE RESTRICT;


--
-- TOC entry 3647 (class 2606 OID 30191)
-- Name: hardware_fastener_screw_machine hardware_fastener_bolt_drive_type_fkey; Type: FK CONSTRAINT; Schema: item; Owner: hasura
--

ALTER TABLE ONLY item.hardware_fastener_screw_machine
    ADD CONSTRAINT hardware_fastener_bolt_drive_type_fkey FOREIGN KEY (drive_type) REFERENCES enum_item_hardware_fastener.drive(id) ON UPDATE RESTRICT ON DELETE RESTRICT;


--
-- TOC entry 3645 (class 2606 OID 30151)
-- Name: hardware_fastener_screw_machine hardware_fastener_bolt_finish_fkey; Type: FK CONSTRAINT; Schema: item; Owner: hasura
--

ALTER TABLE ONLY item.hardware_fastener_screw_machine
    ADD CONSTRAINT hardware_fastener_bolt_finish_fkey FOREIGN KEY (finish) REFERENCES enum_item_hardware.finish(id) ON UPDATE RESTRICT ON DELETE RESTRICT;


--
-- TOC entry 3652 (class 2606 OID 30258)
-- Name: hardware_fastener_screw_machine hardware_fastener_bolt_hardness_fkey; Type: FK CONSTRAINT; Schema: item; Owner: hasura
--

ALTER TABLE ONLY item.hardware_fastener_screw_machine
    ADD CONSTRAINT hardware_fastener_bolt_hardness_fkey FOREIGN KEY (hardness) REFERENCES enum_item_hardware_fastener_screw.hardness(id) ON UPDATE RESTRICT ON DELETE RESTRICT;


--
-- TOC entry 3648 (class 2606 OID 30206)
-- Name: hardware_fastener_screw_machine hardware_fastener_bolt_head_type_fkey; Type: FK CONSTRAINT; Schema: item; Owner: hasura
--

ALTER TABLE ONLY item.hardware_fastener_screw_machine
    ADD CONSTRAINT hardware_fastener_bolt_head_type_fkey FOREIGN KEY (head_type) REFERENCES enum_item_hardware_fastener_screw.head(id) ON UPDATE RESTRICT ON DELETE RESTRICT;


--
-- TOC entry 3644 (class 2606 OID 30146)
-- Name: hardware_fastener_screw_machine hardware_fastener_bolt_material_fkey; Type: FK CONSTRAINT; Schema: item; Owner: hasura
--

ALTER TABLE ONLY item.hardware_fastener_screw_machine
    ADD CONSTRAINT hardware_fastener_bolt_material_fkey FOREIGN KEY (material) REFERENCES enum_item_hardware_fastener.material(id) ON UPDATE RESTRICT ON DELETE RESTRICT;


--
-- TOC entry 3651 (class 2606 OID 30253)
-- Name: hardware_fastener_screw_machine hardware_fastener_bolt_point_fkey; Type: FK CONSTRAINT; Schema: item; Owner: hasura
--

ALTER TABLE ONLY item.hardware_fastener_screw_machine
    ADD CONSTRAINT hardware_fastener_bolt_point_fkey FOREIGN KEY (point_type) REFERENCES enum_item_hardware_fastener_screw_machine.point(id) ON UPDATE RESTRICT ON DELETE RESTRICT;


--
-- TOC entry 3653 (class 2606 OID 30263)
-- Name: hardware_fastener_screw_machine hardware_fastener_bolt_strength_class_fkey; Type: FK CONSTRAINT; Schema: item; Owner: hasura
--

ALTER TABLE ONLY item.hardware_fastener_screw_machine
    ADD CONSTRAINT hardware_fastener_bolt_strength_class_fkey FOREIGN KEY (strength_class) REFERENCES enum_item_hardware_fastener_screw_machine.strength(id) ON UPDATE RESTRICT ON DELETE RESTRICT;


--
-- TOC entry 3646 (class 2606 OID 30173)
-- Name: hardware_fastener_screw_machine hardware_fastener_bolt_thread_direction_fkey; Type: FK CONSTRAINT; Schema: item; Owner: hasura
--

ALTER TABLE ONLY item.hardware_fastener_screw_machine
    ADD CONSTRAINT hardware_fastener_bolt_thread_direction_fkey FOREIGN KEY (thread_direction) REFERENCES enum_item.handedness(id) ON UPDATE RESTRICT ON DELETE RESTRICT;


--
-- TOC entry 3650 (class 2606 OID 30232)
-- Name: hardware_fastener_screw_machine hardware_fastener_bolt_thread_fit_fkey; Type: FK CONSTRAINT; Schema: item; Owner: hasura
--

ALTER TABLE ONLY item.hardware_fastener_screw_machine
    ADD CONSTRAINT hardware_fastener_bolt_thread_fit_fkey FOREIGN KEY (thread_fit) REFERENCES enum_item_hardware_fastener_screw_machine.thread_fit(id) ON UPDATE RESTRICT ON DELETE RESTRICT;


--
-- TOC entry 3655 (class 2606 OID 31421)
-- Name: hardware_fastener_screw_machine hardware_fastener_bolt_thread_standard_fkey; Type: FK CONSTRAINT; Schema: item; Owner: hasura
--

ALTER TABLE ONLY item.hardware_fastener_screw_machine
    ADD CONSTRAINT hardware_fastener_bolt_thread_standard_fkey FOREIGN KEY (thread_standard) REFERENCES enum_item_hardware_fastener.thread_standard(id) ON UPDATE RESTRICT ON DELETE RESTRICT;


--
-- TOC entry 3649 (class 2606 OID 30219)
-- Name: hardware_fastener_screw_machine hardware_fastener_bolt_thread_type_fkey; Type: FK CONSTRAINT; Schema: item; Owner: hasura
--

ALTER TABLE ONLY item.hardware_fastener_screw_machine
    ADD CONSTRAINT hardware_fastener_bolt_thread_type_fkey FOREIGN KEY (thread_label) REFERENCES enum_item_hardware_fastener.thread_label(id) ON UPDATE RESTRICT ON DELETE RESTRICT;


--
-- TOC entry 3654 (class 2606 OID 30657)
-- Name: hardware_fastener_screw_machine hardware_fastener_bolt_use_material_fkey; Type: FK CONSTRAINT; Schema: item; Owner: hasura
--

ALTER TABLE ONLY item.hardware_fastener_screw_machine
    ADD CONSTRAINT hardware_fastener_bolt_use_material_fkey FOREIGN KEY (use_material) REFERENCES enum_item_hardware.use_material(id) ON UPDATE RESTRICT ON DELETE RESTRICT;


--
-- TOC entry 3665 (class 2606 OID 31721)
-- Name: hardware_fastener_nut hardware_fastener_nut_form_fkey; Type: FK CONSTRAINT; Schema: item; Owner: hasura
--

ALTER TABLE ONLY item.hardware_fastener_nut
    ADD CONSTRAINT hardware_fastener_nut_form_fkey FOREIGN KEY (form) REFERENCES enum_item_hardware_fastener_nut.form(id) ON UPDATE RESTRICT ON DELETE RESTRICT;


--
-- TOC entry 3668 (class 2606 OID 31764)
-- Name: hardware_fastener_nut hardware_fastener_nut_strength_fkey; Type: FK CONSTRAINT; Schema: item; Owner: hasura
--

ALTER TABLE ONLY item.hardware_fastener_nut
    ADD CONSTRAINT hardware_fastener_nut_strength_fkey FOREIGN KEY (strength) REFERENCES enum_item_hardware_fastener_nut.strength(id) ON UPDATE RESTRICT ON DELETE RESTRICT;


--
-- TOC entry 3666 (class 2606 OID 31726)
-- Name: hardware_fastener_nut hardware_fastener_nut_thread_fit_fkey; Type: FK CONSTRAINT; Schema: item; Owner: hasura
--

ALTER TABLE ONLY item.hardware_fastener_nut
    ADD CONSTRAINT hardware_fastener_nut_thread_fit_fkey FOREIGN KEY (thread_fit) REFERENCES enum_item_hardware_fastener_nut.thread_fit(id) ON UPDATE RESTRICT ON DELETE RESTRICT;


--
-- TOC entry 3667 (class 2606 OID 31731)
-- Name: hardware_fastener_nut hardware_fastener_nut_unit_fkey; Type: FK CONSTRAINT; Schema: item; Owner: hasura
--

ALTER TABLE ONLY item.hardware_fastener_nut
    ADD CONSTRAINT hardware_fastener_nut_unit_fkey FOREIGN KEY (unit) REFERENCES enum.unit(id) ON UPDATE RESTRICT ON DELETE RESTRICT;


--
-- TOC entry 3698 (class 2606 OID 30140)
-- Name: hardware_fastener_screw hardware_fastener_screw_id_fkey; Type: FK CONSTRAINT; Schema: item; Owner: hasura
--

ALTER TABLE ONLY item.hardware_fastener_screw
    ADD CONSTRAINT hardware_fastener_screw_id_fkey FOREIGN KEY (id) REFERENCES public.item(id) ON UPDATE RESTRICT ON DELETE RESTRICT;


--
-- TOC entry 3696 (class 2606 OID 30130)
-- Name: hardware_fastener_screw hardware_fastener_screw_point_fkey; Type: FK CONSTRAINT; Schema: item; Owner: hasura
--

ALTER TABLE ONLY item.hardware_fastener_screw
    ADD CONSTRAINT hardware_fastener_screw_point_fkey FOREIGN KEY (point) REFERENCES enum_item_hardware_fastener_screw_machine.point(id) ON UPDATE RESTRICT ON DELETE RESTRICT;


--
-- TOC entry 3697 (class 2606 OID 30135)
-- Name: hardware_fastener_screw hardware_fastener_screw_unit_fkey; Type: FK CONSTRAINT; Schema: item; Owner: hasura
--

ALTER TABLE ONLY item.hardware_fastener_screw
    ADD CONSTRAINT hardware_fastener_screw_unit_fkey FOREIGN KEY (unit) REFERENCES enum.unit(id) ON UPDATE RESTRICT ON DELETE RESTRICT;


--
-- TOC entry 3699 (class 2606 OID 30285)
-- Name: hardware_fastener_screw hardware_fastener_screw_use_material_fkey; Type: FK CONSTRAINT; Schema: item; Owner: hasura
--

ALTER TABLE ONLY item.hardware_fastener_screw
    ADD CONSTRAINT hardware_fastener_screw_use_material_fkey FOREIGN KEY (use_material) REFERENCES enum_item_hardware.use_material(id) ON UPDATE RESTRICT ON DELETE RESTRICT;


--
-- TOC entry 3705 (class 2606 OID 31167)
-- Name: hardware_fastener_standoff hardware_fastener_standoff_hardness_fkey; Type: FK CONSTRAINT; Schema: item; Owner: hasura
--

ALTER TABLE ONLY item.hardware_fastener_standoff
    ADD CONSTRAINT hardware_fastener_standoff_hardness_fkey FOREIGN KEY (hardness) REFERENCES enum_item_hardware_fastener_screw.hardness(id) ON UPDATE RESTRICT ON DELETE RESTRICT;


--
-- TOC entry 3706 (class 2606 OID 31172)
-- Name: hardware_fastener_standoff hardware_fastener_standoff_material_fkey; Type: FK CONSTRAINT; Schema: item; Owner: hasura
--

ALTER TABLE ONLY item.hardware_fastener_standoff
    ADD CONSTRAINT hardware_fastener_standoff_material_fkey FOREIGN KEY (material) REFERENCES enum_item_hardware_fastener.material(id) ON UPDATE RESTRICT ON DELETE RESTRICT;


--
-- TOC entry 3704 (class 2606 OID 30943)
-- Name: hardware_fastener_standoff hardware_fastener_standoff_shape_fkey; Type: FK CONSTRAINT; Schema: item; Owner: hasura
--

ALTER TABLE ONLY item.hardware_fastener_standoff
    ADD CONSTRAINT hardware_fastener_standoff_shape_fkey FOREIGN KEY (shape) REFERENCES enum_item_hardware_fastener.standoff_shape(id) ON UPDATE RESTRICT ON DELETE RESTRICT;


--
-- TOC entry 3703 (class 2606 OID 30938)
-- Name: hardware_fastener_standoff hardware_fastener_standoff_unit_fkey; Type: FK CONSTRAINT; Schema: item; Owner: hasura
--

ALTER TABLE ONLY item.hardware_fastener_standoff
    ADD CONSTRAINT hardware_fastener_standoff_unit_fkey FOREIGN KEY (unit) REFERENCES enum.unit(id) ON UPDATE RESTRICT ON DELETE RESTRICT;


--
-- TOC entry 3717 (class 2606 OID 31616)
-- Name: hardware_fastener_washer hardware_fastener_washer_finish_fkey; Type: FK CONSTRAINT; Schema: item; Owner: hasura
--

ALTER TABLE ONLY item.hardware_fastener_washer
    ADD CONSTRAINT hardware_fastener_washer_finish_fkey FOREIGN KEY (finish) REFERENCES enum_item_hardware.finish(id) ON UPDATE RESTRICT ON DELETE RESTRICT;


--
-- TOC entry 3720 (class 2606 OID 31631)
-- Name: hardware_fastener_washer hardware_fastener_washer_form_fkey; Type: FK CONSTRAINT; Schema: item; Owner: hasura
--

ALTER TABLE ONLY item.hardware_fastener_washer
    ADD CONSTRAINT hardware_fastener_washer_form_fkey FOREIGN KEY (form) REFERENCES enum_item_hardware_fastener_washer.form(id) ON UPDATE RESTRICT ON DELETE RESTRICT;


--
-- TOC entry 3719 (class 2606 OID 31626)
-- Name: hardware_fastener_washer hardware_fastener_washer_lock_method_fkey; Type: FK CONSTRAINT; Schema: item; Owner: hasura
--

ALTER TABLE ONLY item.hardware_fastener_washer
    ADD CONSTRAINT hardware_fastener_washer_lock_method_fkey FOREIGN KEY (lock_method) REFERENCES enum_item_hardware_fastener_washer.mechanism(id) ON UPDATE RESTRICT ON DELETE RESTRICT;


--
-- TOC entry 3718 (class 2606 OID 31621)
-- Name: hardware_fastener_washer hardware_fastener_washer_material_fkey; Type: FK CONSTRAINT; Schema: item; Owner: hasura
--

ALTER TABLE ONLY item.hardware_fastener_washer
    ADD CONSTRAINT hardware_fastener_washer_material_fkey FOREIGN KEY (material) REFERENCES enum_item_hardware_fastener.material(id) ON UPDATE RESTRICT ON DELETE RESTRICT;


--
-- TOC entry 3715 (class 2606 OID 31589)
-- Name: hardware_fastener_washer hardware_fastener_washer_pattern_fkey; Type: FK CONSTRAINT; Schema: item; Owner: hasura
--

ALTER TABLE ONLY item.hardware_fastener_washer
    ADD CONSTRAINT hardware_fastener_washer_pattern_fkey FOREIGN KEY (pattern) REFERENCES enum_item_hardware_fastener_washer.pattern(id) ON UPDATE RESTRICT ON DELETE RESTRICT;


--
-- TOC entry 3716 (class 2606 OID 31611)
-- Name: hardware_fastener_washer hardware_fastener_washer_unit_fkey; Type: FK CONSTRAINT; Schema: item; Owner: hasura
--

ALTER TABLE ONLY item.hardware_fastener_washer
    ADD CONSTRAINT hardware_fastener_washer_unit_fkey FOREIGN KEY (unit) REFERENCES enum.unit(id) ON UPDATE RESTRICT ON DELETE RESTRICT;


--
-- TOC entry 3663 (class 2606 OID 17335)
-- Name: bundle item_bundle_id_fkey; Type: FK CONSTRAINT; Schema: item; Owner: hasura
--

ALTER TABLE ONLY item.bundle
    ADD CONSTRAINT item_bundle_id_fkey FOREIGN KEY (id) REFERENCES public.item(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- TOC entry 3688 (class 2606 OID 24895)
-- Name: bundle_map item_bundle_map_item_bundle_id_fkey; Type: FK CONSTRAINT; Schema: item; Owner: hasura
--

ALTER TABLE ONLY item.bundle_map
    ADD CONSTRAINT item_bundle_map_item_bundle_id_fkey FOREIGN KEY (item_bundle_id) REFERENCES item.bundle(id) ON UPDATE RESTRICT ON DELETE RESTRICT;


--
-- TOC entry 3689 (class 2606 OID 24900)
-- Name: bundle_map item_bundle_map_item_member_id_fkey; Type: FK CONSTRAINT; Schema: item; Owner: hasura
--

ALTER TABLE ONLY item.bundle_map
    ADD CONSTRAINT item_bundle_map_item_member_id_fkey FOREIGN KEY (item_member_id) REFERENCES public.item(id) ON UPDATE RESTRICT ON DELETE RESTRICT;


--
-- TOC entry 3642 (class 2606 OID 17345)
-- Name: hardware_fastener_screw_machine item_hardware_fastener_bolt_id_fkey; Type: FK CONSTRAINT; Schema: item; Owner: hasura
--

ALTER TABLE ONLY item.hardware_fastener_screw_machine
    ADD CONSTRAINT item_hardware_fastener_bolt_id_fkey FOREIGN KEY (id) REFERENCES public.item(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- TOC entry 3664 (class 2606 OID 17350)
-- Name: hardware_fastener_nut item_hardware_nut_id_fkey; Type: FK CONSTRAINT; Schema: item; Owner: hasura
--

ALTER TABLE ONLY item.hardware_fastener_nut
    ADD CONSTRAINT item_hardware_nut_id_fkey FOREIGN KEY (id) REFERENCES public.item(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- TOC entry 3643 (class 2606 OID 17355)
-- Name: hardware_fastener_screw_machine items_hardware_fastener_bolt_unit_fkey; Type: FK CONSTRAINT; Schema: item; Owner: hasura
--

ALTER TABLE ONLY item.hardware_fastener_screw_machine
    ADD CONSTRAINT items_hardware_fastener_bolt_unit_fkey FOREIGN KEY (unit) REFERENCES enum.unit(id) ON UPDATE RESTRICT ON DELETE RESTRICT;


--
-- TOC entry 3722 (class 2606 OID 31930)
-- Name: diameter diameter_fit_fkey; Type: FK CONSTRAINT; Schema: property_item_hardware_fastener_screw_machine; Owner: hasura
--

ALTER TABLE ONLY property_item_hardware_fastener_screw_machine.diameter
    ADD CONSTRAINT diameter_fit_fkey FOREIGN KEY (fit) REFERENCES enum_item_hardware_fastener_screw_machine.thread_fit(id) ON UPDATE RESTRICT ON DELETE RESTRICT;


--
-- TOC entry 3723 (class 2606 OID 31945)
-- Name: diameter diameter_standard_fkey; Type: FK CONSTRAINT; Schema: property_item_hardware_fastener_screw_machine; Owner: hasura
--

ALTER TABLE ONLY property_item_hardware_fastener_screw_machine.diameter
    ADD CONSTRAINT diameter_standard_fkey FOREIGN KEY (standard) REFERENCES enum_item_hardware_fastener.thread_standard(id) ON UPDATE RESTRICT ON DELETE RESTRICT;


--
-- TOC entry 3724 (class 2606 OID 31940)
-- Name: diameter diameter_thread_label_fkey; Type: FK CONSTRAINT; Schema: property_item_hardware_fastener_screw_machine; Owner: hasura
--

ALTER TABLE ONLY property_item_hardware_fastener_screw_machine.diameter
    ADD CONSTRAINT diameter_thread_label_fkey FOREIGN KEY (thread_label) REFERENCES enum_item_hardware_fastener.thread_label(id) ON UPDATE RESTRICT ON DELETE RESTRICT;


--
-- TOC entry 3725 (class 2606 OID 31935)
-- Name: diameter diameter_unit_fkey; Type: FK CONSTRAINT; Schema: property_item_hardware_fastener_screw_machine; Owner: hasura
--

ALTER TABLE ONLY property_item_hardware_fastener_screw_machine.diameter
    ADD CONSTRAINT diameter_unit_fkey FOREIGN KEY (unit) REFERENCES enum.unit(id) ON UPDATE RESTRICT ON DELETE RESTRICT;


--
-- TOC entry 3690 (class 2606 OID 24924)
-- Name: icon_item_category_map icon_item_category_map_category_fkey; Type: FK CONSTRAINT; Schema: public; Owner: hasura
--

ALTER TABLE ONLY public.icon_item_category_map
    ADD CONSTRAINT icon_item_category_map_category_fkey FOREIGN KEY (category) REFERENCES enum.item_class(id) ON UPDATE RESTRICT ON DELETE RESTRICT;


--
-- TOC entry 3691 (class 2606 OID 24957)
-- Name: icon_item_category_map icon_item_category_map_icon_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: hasura
--

ALTER TABLE ONLY public.icon_item_category_map
    ADD CONSTRAINT icon_item_category_map_icon_id_fkey FOREIGN KEY (icon_id) REFERENCES public.icon(id) ON UPDATE RESTRICT ON DELETE RESTRICT;


--
-- TOC entry 3692 (class 2606 OID 24947)
-- Name: icon_label_map icon_item_map_icon_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: hasura
--

ALTER TABLE ONLY public.icon_label_map
    ADD CONSTRAINT icon_item_map_icon_id_fkey FOREIGN KEY (icon_id) REFERENCES public.icon(id) ON UPDATE RESTRICT ON DELETE RESTRICT;


--
-- TOC entry 3701 (class 2606 OID 30899)
-- Name: icon_item_map icon_item_map_icon_id_fkey1; Type: FK CONSTRAINT; Schema: public; Owner: hasura
--

ALTER TABLE ONLY public.icon_item_map
    ADD CONSTRAINT icon_item_map_icon_id_fkey1 FOREIGN KEY (icon_id) REFERENCES public.icon(id) ON UPDATE RESTRICT ON DELETE RESTRICT;


--
-- TOC entry 3702 (class 2606 OID 30904)
-- Name: icon_item_map icon_item_map_item_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: hasura
--

ALTER TABLE ONLY public.icon_item_map
    ADD CONSTRAINT icon_item_map_item_id_fkey FOREIGN KEY (item_id) REFERENCES public.item(id) ON UPDATE RESTRICT ON DELETE RESTRICT;


--
-- TOC entry 3693 (class 2606 OID 24977)
-- Name: icon_label_map icon_label_map_label_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: hasura
--

ALTER TABLE ONLY public.icon_label_map
    ADD CONSTRAINT icon_label_map_label_id_fkey FOREIGN KEY (label_id) REFERENCES public.label(id) ON UPDATE RESTRICT ON DELETE RESTRICT;


--
-- TOC entry 3662 (class 2606 OID 27107)
-- Name: item item_class_fkey; Type: FK CONSTRAINT; Schema: public; Owner: hasura
--

ALTER TABLE ONLY public.item
    ADD CONSTRAINT item_class_fkey FOREIGN KEY (class) REFERENCES enum.item_class(id) ON UPDATE RESTRICT ON DELETE RESTRICT;


--
-- TOC entry 3669 (class 2606 OID 17360)
-- Name: label label_edit_of_fkey; Type: FK CONSTRAINT; Schema: public; Owner: hasura
--

ALTER TABLE ONLY public.label
    ADD CONSTRAINT label_edit_of_fkey FOREIGN KEY (edit_of_id) REFERENCES public.label(id) ON UPDATE RESTRICT ON DELETE RESTRICT;


--
-- TOC entry 3670 (class 2606 OID 17365)
-- Name: label label_item_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: hasura
--

ALTER TABLE ONLY public.label
    ADD CONSTRAINT label_item_id_fkey FOREIGN KEY (item_id) REFERENCES public.item(id) ON UPDATE RESTRICT ON DELETE RESTRICT;


--
-- TOC entry 3695 (class 2606 OID 24992)
-- Name: label_item_map label_item_map_item_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: hasura
--

ALTER TABLE ONLY public.label_item_map
    ADD CONSTRAINT label_item_map_item_id_fkey FOREIGN KEY (item_id) REFERENCES public.item(id) ON UPDATE RESTRICT ON DELETE RESTRICT;


--
-- TOC entry 3694 (class 2606 OID 24987)
-- Name: label_item_map label_item_map_label_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: hasura
--

ALTER TABLE ONLY public.label_item_map
    ADD CONSTRAINT label_item_map_label_id_fkey FOREIGN KEY (label_id) REFERENCES public.label(id) ON UPDATE RESTRICT ON DELETE RESTRICT;


--
-- TOC entry 3671 (class 2606 OID 17370)
-- Name: label_template_map label_template_map_item_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: hasura
--

ALTER TABLE ONLY public.label_template_map
    ADD CONSTRAINT label_template_map_item_id_fkey FOREIGN KEY (item_id) REFERENCES public.item(id) ON UPDATE RESTRICT ON DELETE RESTRICT;


--
-- TOC entry 3672 (class 2606 OID 17375)
-- Name: label_template_map label_template_map_label_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: hasura
--

ALTER TABLE ONLY public.label_template_map
    ADD CONSTRAINT label_template_map_label_id_fkey FOREIGN KEY (label_id) REFERENCES public.label(id) ON UPDATE RESTRICT ON DELETE RESTRICT;


--
-- TOC entry 3687 (class 2606 OID 24787)
-- Name: manufacturer_item manufacturer_item_item_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: hasura
--

ALTER TABLE ONLY public.manufacturer_item
    ADD CONSTRAINT manufacturer_item_item_id_fkey FOREIGN KEY (item_id) REFERENCES public.item(id) ON UPDATE RESTRICT ON DELETE RESTRICT;


--
-- TOC entry 3686 (class 2606 OID 24782)
-- Name: manufacturer_item manufacturer_item_manufacturer_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: hasura
--

ALTER TABLE ONLY public.manufacturer_item
    ADD CONSTRAINT manufacturer_item_manufacturer_id_fkey FOREIGN KEY (manufacturer_id) REFERENCES public.manufacturer(id) ON UPDATE RESTRICT ON DELETE RESTRICT;


--
-- TOC entry 3685 (class 2606 OID 32278)
-- Name: manufacturer manufacturer_vendor_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: hasura
--

ALTER TABLE ONLY public.manufacturer
    ADD CONSTRAINT manufacturer_vendor_id_fkey FOREIGN KEY (vendor_id) REFERENCES public.vendor(id) ON UPDATE SET NULL ON DELETE SET NULL;


--
-- TOC entry 3678 (class 2606 OID 24885)
-- Name: order_item order_item_item_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: hasura
--

ALTER TABLE ONLY public.order_item
    ADD CONSTRAINT order_item_item_id_fkey FOREIGN KEY (item_id) REFERENCES public.item(id) ON UPDATE RESTRICT ON DELETE RESTRICT;


--
-- TOC entry 3673 (class 2606 OID 32332)
-- Name: order_item order_item_item_id_vendor_item_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: hasura
--

ALTER TABLE ONLY public.order_item
    ADD CONSTRAINT order_item_item_id_vendor_item_id_fkey FOREIGN KEY (item_id, vendor_item_id) REFERENCES public.vendor_item(item_id, id) ON UPDATE RESTRICT ON DELETE RESTRICT;


--
-- TOC entry 3675 (class 2606 OID 24860)
-- Name: order_item order_item_manufacturer_item_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: hasura
--

ALTER TABLE ONLY public.order_item
    ADD CONSTRAINT order_item_manufacturer_item_id_fkey FOREIGN KEY (manufacturer_item_id) REFERENCES public.manufacturer_item(id) ON UPDATE RESTRICT ON DELETE RESTRICT;


--
-- TOC entry 3676 (class 2606 OID 24865)
-- Name: order_item order_item_order_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: hasura
--

ALTER TABLE ONLY public.order_item
    ADD CONSTRAINT order_item_order_id_fkey FOREIGN KEY (order_id) REFERENCES public."order"(id) ON UPDATE RESTRICT ON DELETE RESTRICT;


--
-- TOC entry 3674 (class 2606 OID 24832)
-- Name: order_item order_item_shipment_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: hasura
--

ALTER TABLE ONLY public.order_item
    ADD CONSTRAINT order_item_shipment_id_fkey FOREIGN KEY (shipment_id) REFERENCES public.shipment(id) ON UPDATE RESTRICT ON DELETE RESTRICT;


--
-- TOC entry 3677 (class 2606 OID 24880)
-- Name: order_item order_item_vendor_item_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: hasura
--

ALTER TABLE ONLY public.order_item
    ADD CONSTRAINT order_item_vendor_item_id_fkey FOREIGN KEY (vendor_item_id) REFERENCES public.vendor_item(id) ON UPDATE RESTRICT ON DELETE RESTRICT;


--
-- TOC entry 3679 (class 2606 OID 24792)
-- Name: order order_payment_method_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: hasura
--

ALTER TABLE ONLY public."order"
    ADD CONSTRAINT order_payment_method_id_fkey FOREIGN KEY (payment_method_id) REFERENCES public.payment_method(id) ON UPDATE RESTRICT ON DELETE RESTRICT;


--
-- TOC entry 3680 (class 2606 OID 24797)
-- Name: order order_vendor_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: hasura
--

ALTER TABLE ONLY public."order"
    ADD CONSTRAINT order_vendor_id_fkey FOREIGN KEY (vendor_id) REFERENCES public.vendor(id) ON UPDATE RESTRICT ON DELETE RESTRICT;


--
-- TOC entry 3682 (class 2606 OID 24715)
-- Name: payment_method payment_method_class_fkey; Type: FK CONSTRAINT; Schema: public; Owner: hasura
--

ALTER TABLE ONLY public.payment_method
    ADD CONSTRAINT payment_method_class_fkey FOREIGN KEY (class) REFERENCES enum.payment_method_type(id) ON UPDATE RESTRICT ON DELETE RESTRICT;


--
-- TOC entry 3707 (class 2606 OID 31108)
-- Name: search_data search_data_class_fkey; Type: FK CONSTRAINT; Schema: public; Owner: hasura
--

ALTER TABLE ONLY public.search_data
    ADD CONSTRAINT search_data_class_fkey FOREIGN KEY (class) REFERENCES enum.mapped_class(id) ON UPDATE RESTRICT ON DELETE RESTRICT;


--
-- TOC entry 3681 (class 2606 OID 24683)
-- Name: shipment shipment_order_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: hasura
--

ALTER TABLE ONLY public.shipment
    ADD CONSTRAINT shipment_order_id_fkey FOREIGN KEY (order_id) REFERENCES public."order"(id) ON UPDATE RESTRICT ON DELETE RESTRICT;


--
-- TOC entry 3726 (class 2606 OID 32109)
-- Name: storage storage_parent_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: hasura
--

ALTER TABLE ONLY public.storage
    ADD CONSTRAINT storage_parent_id_fkey FOREIGN KEY (parent_id) REFERENCES public.storage(id) ON UPDATE RESTRICT ON DELETE RESTRICT;


--
-- TOC entry 3727 (class 2606 OID 32114)
-- Name: storage storage_space_type_fkey; Type: FK CONSTRAINT; Schema: public; Owner: hasura
--

ALTER TABLE ONLY public.storage
    ADD CONSTRAINT storage_space_type_fkey FOREIGN KEY (space_type) REFERENCES enum.space_type(id) ON UPDATE RESTRICT ON DELETE RESTRICT;


--
-- TOC entry 3684 (class 2606 OID 24743)
-- Name: vendor_item vendor_item_item_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: hasura
--

ALTER TABLE ONLY public.vendor_item
    ADD CONSTRAINT vendor_item_item_id_fkey FOREIGN KEY (item_id) REFERENCES public.item(id) ON UPDATE RESTRICT ON DELETE RESTRICT;


--
-- TOC entry 3683 (class 2606 OID 24738)
-- Name: vendor_item vendor_item_vendor_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: hasura
--

ALTER TABLE ONLY public.vendor_item
    ADD CONSTRAINT vendor_item_vendor_id_fkey FOREIGN KEY (vendor_id) REFERENCES public.vendor(id) ON UPDATE RESTRICT ON DELETE RESTRICT;


--
-- TOC entry 3884 (class 0 OID 0)
-- Dependencies: 3883
-- Name: DATABASE inventory; Type: ACL; Schema: -; Owner: hasura
--

GRANT ALL ON DATABASE inventory TO eric;


--
-- TOC entry 3885 (class 0 OID 0)
-- Dependencies: 19
-- Name: SCHEMA item; Type: ACL; Schema: -; Owner: eric
--

REVOKE ALL ON SCHEMA item FROM eric;
GRANT ALL ON SCHEMA item TO eric WITH GRANT OPTION;
GRANT ALL ON SCHEMA item TO hasura;


--
-- TOC entry 3886 (class 0 OID 0)
-- Dependencies: 4
-- Name: SCHEMA public; Type: ACL; Schema: -; Owner: postgres
--

GRANT USAGE ON SCHEMA public TO hasura;
GRANT ALL ON SCHEMA public TO eric;


--
-- TOC entry 3888 (class 0 OID 0)
-- Dependencies: 372
-- Name: FUNCTION insert_update_item_to_base(); Type: ACL; Schema: item; Owner: eric
--

GRANT ALL ON FUNCTION item.insert_update_item_to_base() TO hasura;


--
-- TOC entry 3890 (class 0 OID 0)
-- Dependencies: 283
-- Name: TABLE search_data; Type: ACL; Schema: public; Owner: hasura
--

GRANT ALL ON TABLE public.search_data TO eric WITH GRANT OPTION;


--
-- TOC entry 3891 (class 0 OID 0)
-- Dependencies: 375
-- Name: FUNCTION search(query_text text, return_limit integer); Type: ACL; Schema: public; Owner: eric
--

GRANT ALL ON FUNCTION public.search(query_text text, return_limit integer) TO hasura;


--
-- TOC entry 3893 (class 0 OID 0)
-- Dependencies: 246
-- Name: TABLE item; Type: ACL; Schema: public; Owner: hasura
--

GRANT ALL ON TABLE public.item TO eric;


--
-- TOC entry 3894 (class 0 OID 0)
-- Dependencies: 373
-- Name: FUNCTION search_item(query_text text, return_limit integer); Type: ACL; Schema: public; Owner: eric
--

GRANT ALL ON FUNCTION public.search_item(query_text text, return_limit integer) TO hasura;


--
-- TOC entry 3895 (class 0 OID 0)
-- Dependencies: 308
-- Name: SEQUENCE global_id_seq; Type: ACL; Schema: public; Owner: eric
--

REVOKE ALL ON SEQUENCE public.global_id_seq FROM eric;
GRANT ALL ON SEQUENCE public.global_id_seq TO eric WITH GRANT OPTION;
GRANT ALL ON SEQUENCE public.global_id_seq TO hasura;


--
-- TOC entry 3904 (class 0 OID 0)
-- Dependencies: 316
-- Name: TABLE item_variant; Type: ACL; Schema: public; Owner: eric
--

GRANT ALL ON TABLE public.item_variant TO hasura;


--
-- TOC entry 3905 (class 0 OID 0)
-- Dependencies: 374
-- Name: FUNCTION search_item_variant(query_text text, return_limit integer); Type: ACL; Schema: public; Owner: eric
--

GRANT ALL ON FUNCTION public.search_item_variant(query_text text, return_limit integer) TO hasura;


--
-- TOC entry 3906 (class 0 OID 0)
-- Dependencies: 370
-- Name: FUNCTION set_current_timestamp_updated_at(); Type: ACL; Schema: public; Owner: hasura
--

GRANT ALL ON FUNCTION public.set_current_timestamp_updated_at() TO eric WITH GRANT OPTION;


--
-- TOC entry 3907 (class 0 OID 0)
-- Dependencies: 371
-- Name: FUNCTION update_vector(); Type: ACL; Schema: public; Owner: eric
--

GRANT ALL ON FUNCTION public.update_vector() TO hasura;


--
-- TOC entry 3939 (class 0 OID 0)
-- Dependencies: 218
-- Name: TABLE hardware_fastener_screw_machine; Type: ACL; Schema: item; Owner: hasura
--

GRANT ALL ON TABLE item.hardware_fastener_screw_machine TO eric;


--
-- TOC entry 3940 (class 0 OID 0)
-- Dependencies: 218
-- Name: COLUMN hardware_fastener_screw_machine.unit; Type: ACL; Schema: item; Owner: hasura
--

GRANT ALL(unit) ON TABLE item.hardware_fastener_screw_machine TO eric;


--
-- TOC entry 3944 (class 0 OID 0)
-- Dependencies: 40
-- Name: TABLE pg_aggregate; Type: ACL; Schema: pg_catalog; Owner: postgres
--

GRANT SELECT ON TABLE pg_catalog.pg_aggregate TO hasura;


--
-- TOC entry 3945 (class 0 OID 0)
-- Dependencies: 41
-- Name: TABLE pg_am; Type: ACL; Schema: pg_catalog; Owner: postgres
--

GRANT SELECT ON TABLE pg_catalog.pg_am TO hasura;


--
-- TOC entry 3946 (class 0 OID 0)
-- Dependencies: 42
-- Name: TABLE pg_amop; Type: ACL; Schema: pg_catalog; Owner: postgres
--

GRANT SELECT ON TABLE pg_catalog.pg_amop TO hasura;


--
-- TOC entry 3947 (class 0 OID 0)
-- Dependencies: 43
-- Name: TABLE pg_amproc; Type: ACL; Schema: pg_catalog; Owner: postgres
--

GRANT SELECT ON TABLE pg_catalog.pg_amproc TO hasura;


--
-- TOC entry 3948 (class 0 OID 0)
-- Dependencies: 44
-- Name: TABLE pg_attrdef; Type: ACL; Schema: pg_catalog; Owner: postgres
--

GRANT SELECT ON TABLE pg_catalog.pg_attrdef TO hasura;


--
-- TOC entry 3949 (class 0 OID 0)
-- Dependencies: 29
-- Name: TABLE pg_attribute; Type: ACL; Schema: pg_catalog; Owner: postgres
--

GRANT SELECT ON TABLE pg_catalog.pg_attribute TO hasura;


--
-- TOC entry 3950 (class 0 OID 0)
-- Dependencies: 33
-- Name: TABLE pg_auth_members; Type: ACL; Schema: pg_catalog; Owner: postgres
--

GRANT SELECT ON TABLE pg_catalog.pg_auth_members TO hasura;


--
-- TOC entry 3951 (class 0 OID 0)
-- Dependencies: 32
-- Name: TABLE pg_authid; Type: ACL; Schema: pg_catalog; Owner: postgres
--

GRANT SELECT ON TABLE pg_catalog.pg_authid TO hasura;


--
-- TOC entry 3952 (class 0 OID 0)
-- Dependencies: 104
-- Name: TABLE pg_available_extension_versions; Type: ACL; Schema: pg_catalog; Owner: postgres
--

GRANT SELECT ON TABLE pg_catalog.pg_available_extension_versions TO hasura;


--
-- TOC entry 3953 (class 0 OID 0)
-- Dependencies: 103
-- Name: TABLE pg_available_extensions; Type: ACL; Schema: pg_catalog; Owner: postgres
--

GRANT SELECT ON TABLE pg_catalog.pg_available_extensions TO hasura;


--
-- TOC entry 3954 (class 0 OID 0)
-- Dependencies: 45
-- Name: TABLE pg_cast; Type: ACL; Schema: pg_catalog; Owner: postgres
--

GRANT SELECT ON TABLE pg_catalog.pg_cast TO hasura;


--
-- TOC entry 3955 (class 0 OID 0)
-- Dependencies: 31
-- Name: TABLE pg_class; Type: ACL; Schema: pg_catalog; Owner: postgres
--

GRANT SELECT ON TABLE pg_catalog.pg_class TO hasura;


--
-- TOC entry 3956 (class 0 OID 0)
-- Dependencies: 70
-- Name: TABLE pg_collation; Type: ACL; Schema: pg_catalog; Owner: postgres
--

GRANT SELECT ON TABLE pg_catalog.pg_collation TO hasura;


--
-- TOC entry 3957 (class 0 OID 0)
-- Dependencies: 113
-- Name: TABLE pg_config; Type: ACL; Schema: pg_catalog; Owner: postgres
--

GRANT SELECT ON TABLE pg_catalog.pg_config TO hasura;


--
-- TOC entry 3958 (class 0 OID 0)
-- Dependencies: 46
-- Name: TABLE pg_constraint; Type: ACL; Schema: pg_catalog; Owner: postgres
--

GRANT SELECT ON TABLE pg_catalog.pg_constraint TO hasura;


--
-- TOC entry 3959 (class 0 OID 0)
-- Dependencies: 47
-- Name: TABLE pg_conversion; Type: ACL; Schema: pg_catalog; Owner: postgres
--

GRANT SELECT ON TABLE pg_catalog.pg_conversion TO hasura;


--
-- TOC entry 3960 (class 0 OID 0)
-- Dependencies: 102
-- Name: TABLE pg_cursors; Type: ACL; Schema: pg_catalog; Owner: postgres
--

GRANT SELECT ON TABLE pg_catalog.pg_cursors TO hasura;


--
-- TOC entry 3961 (class 0 OID 0)
-- Dependencies: 34
-- Name: TABLE pg_database; Type: ACL; Schema: pg_catalog; Owner: postgres
--

GRANT SELECT ON TABLE pg_catalog.pg_database TO hasura;


--
-- TOC entry 3962 (class 0 OID 0)
-- Dependencies: 61
-- Name: TABLE pg_db_role_setting; Type: ACL; Schema: pg_catalog; Owner: postgres
--

GRANT SELECT ON TABLE pg_catalog.pg_db_role_setting TO hasura;


--
-- TOC entry 3963 (class 0 OID 0)
-- Dependencies: 24
-- Name: TABLE pg_default_acl; Type: ACL; Schema: pg_catalog; Owner: postgres
--

GRANT SELECT ON TABLE pg_catalog.pg_default_acl TO hasura;


--
-- TOC entry 3964 (class 0 OID 0)
-- Dependencies: 48
-- Name: TABLE pg_depend; Type: ACL; Schema: pg_catalog; Owner: postgres
--

GRANT SELECT ON TABLE pg_catalog.pg_depend TO hasura;


--
-- TOC entry 3965 (class 0 OID 0)
-- Dependencies: 49
-- Name: TABLE pg_description; Type: ACL; Schema: pg_catalog; Owner: postgres
--

GRANT SELECT ON TABLE pg_catalog.pg_description TO hasura;


--
-- TOC entry 3966 (class 0 OID 0)
-- Dependencies: 72
-- Name: TABLE pg_enum; Type: ACL; Schema: pg_catalog; Owner: postgres
--

GRANT SELECT ON TABLE pg_catalog.pg_enum TO hasura;


--
-- TOC entry 3967 (class 0 OID 0)
-- Dependencies: 71
-- Name: TABLE pg_event_trigger; Type: ACL; Schema: pg_catalog; Owner: postgres
--

GRANT SELECT ON TABLE pg_catalog.pg_event_trigger TO hasura;


--
-- TOC entry 3968 (class 0 OID 0)
-- Dependencies: 63
-- Name: TABLE pg_extension; Type: ACL; Schema: pg_catalog; Owner: postgres
--

GRANT SELECT ON TABLE pg_catalog.pg_extension TO hasura;


--
-- TOC entry 3969 (class 0 OID 0)
-- Dependencies: 109
-- Name: TABLE pg_file_settings; Type: ACL; Schema: pg_catalog; Owner: postgres
--

GRANT SELECT ON TABLE pg_catalog.pg_file_settings TO hasura;


--
-- TOC entry 3970 (class 0 OID 0)
-- Dependencies: 38
-- Name: TABLE pg_foreign_data_wrapper; Type: ACL; Schema: pg_catalog; Owner: postgres
--

GRANT SELECT ON TABLE pg_catalog.pg_foreign_data_wrapper TO hasura;


--
-- TOC entry 3971 (class 0 OID 0)
-- Dependencies: 35
-- Name: TABLE pg_foreign_server; Type: ACL; Schema: pg_catalog; Owner: postgres
--

GRANT SELECT ON TABLE pg_catalog.pg_foreign_server TO hasura;


--
-- TOC entry 3972 (class 0 OID 0)
-- Dependencies: 64
-- Name: TABLE pg_foreign_table; Type: ACL; Schema: pg_catalog; Owner: postgres
--

GRANT SELECT ON TABLE pg_catalog.pg_foreign_table TO hasura;


--
-- TOC entry 3973 (class 0 OID 0)
-- Dependencies: 89
-- Name: TABLE pg_group; Type: ACL; Schema: pg_catalog; Owner: postgres
--

GRANT SELECT ON TABLE pg_catalog.pg_group TO hasura;


--
-- TOC entry 3974 (class 0 OID 0)
-- Dependencies: 110
-- Name: TABLE pg_hba_file_rules; Type: ACL; Schema: pg_catalog; Owner: postgres
--

GRANT SELECT ON TABLE pg_catalog.pg_hba_file_rules TO hasura;


--
-- TOC entry 3975 (class 0 OID 0)
-- Dependencies: 50
-- Name: TABLE pg_index; Type: ACL; Schema: pg_catalog; Owner: postgres
--

GRANT SELECT ON TABLE pg_catalog.pg_index TO hasura;


--
-- TOC entry 3976 (class 0 OID 0)
-- Dependencies: 96
-- Name: TABLE pg_indexes; Type: ACL; Schema: pg_catalog; Owner: postgres
--

GRANT SELECT ON TABLE pg_catalog.pg_indexes TO hasura;


--
-- TOC entry 3977 (class 0 OID 0)
-- Dependencies: 51
-- Name: TABLE pg_inherits; Type: ACL; Schema: pg_catalog; Owner: postgres
--

GRANT SELECT ON TABLE pg_catalog.pg_inherits TO hasura;


--
-- TOC entry 3978 (class 0 OID 0)
-- Dependencies: 68
-- Name: TABLE pg_init_privs; Type: ACL; Schema: pg_catalog; Owner: postgres
--

GRANT SELECT ON TABLE pg_catalog.pg_init_privs TO hasura;


--
-- TOC entry 3979 (class 0 OID 0)
-- Dependencies: 52
-- Name: TABLE pg_language; Type: ACL; Schema: pg_catalog; Owner: postgres
--

GRANT SELECT ON TABLE pg_catalog.pg_language TO hasura;


--
-- TOC entry 3980 (class 0 OID 0)
-- Dependencies: 53
-- Name: TABLE pg_largeobject; Type: ACL; Schema: pg_catalog; Owner: postgres
--

GRANT SELECT ON TABLE pg_catalog.pg_largeobject TO hasura;


--
-- TOC entry 3981 (class 0 OID 0)
-- Dependencies: 62
-- Name: TABLE pg_largeobject_metadata; Type: ACL; Schema: pg_catalog; Owner: postgres
--

GRANT SELECT ON TABLE pg_catalog.pg_largeobject_metadata TO hasura;


--
-- TOC entry 3982 (class 0 OID 0)
-- Dependencies: 101
-- Name: TABLE pg_locks; Type: ACL; Schema: pg_catalog; Owner: postgres
--

GRANT SELECT ON TABLE pg_catalog.pg_locks TO hasura;


--
-- TOC entry 3983 (class 0 OID 0)
-- Dependencies: 95
-- Name: TABLE pg_matviews; Type: ACL; Schema: pg_catalog; Owner: postgres
--

GRANT SELECT ON TABLE pg_catalog.pg_matviews TO hasura;


--
-- TOC entry 3984 (class 0 OID 0)
-- Dependencies: 54
-- Name: TABLE pg_namespace; Type: ACL; Schema: pg_catalog; Owner: postgres
--

GRANT SELECT ON TABLE pg_catalog.pg_namespace TO hasura;


--
-- TOC entry 3985 (class 0 OID 0)
-- Dependencies: 55
-- Name: TABLE pg_opclass; Type: ACL; Schema: pg_catalog; Owner: postgres
--

GRANT SELECT ON TABLE pg_catalog.pg_opclass TO hasura;


--
-- TOC entry 3986 (class 0 OID 0)
-- Dependencies: 56
-- Name: TABLE pg_operator; Type: ACL; Schema: pg_catalog; Owner: postgres
--

GRANT SELECT ON TABLE pg_catalog.pg_operator TO hasura;


--
-- TOC entry 3987 (class 0 OID 0)
-- Dependencies: 60
-- Name: TABLE pg_opfamily; Type: ACL; Schema: pg_catalog; Owner: postgres
--

GRANT SELECT ON TABLE pg_catalog.pg_opfamily TO hasura;


--
-- TOC entry 3988 (class 0 OID 0)
-- Dependencies: 66
-- Name: TABLE pg_partitioned_table; Type: ACL; Schema: pg_catalog; Owner: postgres
--

GRANT SELECT ON TABLE pg_catalog.pg_partitioned_table TO hasura;


--
-- TOC entry 3989 (class 0 OID 0)
-- Dependencies: 25
-- Name: TABLE pg_pltemplate; Type: ACL; Schema: pg_catalog; Owner: postgres
--

GRANT SELECT ON TABLE pg_catalog.pg_pltemplate TO hasura;


--
-- TOC entry 3990 (class 0 OID 0)
-- Dependencies: 91
-- Name: TABLE pg_policies; Type: ACL; Schema: pg_catalog; Owner: postgres
--

GRANT SELECT ON TABLE pg_catalog.pg_policies TO hasura;


--
-- TOC entry 3991 (class 0 OID 0)
-- Dependencies: 65
-- Name: TABLE pg_policy; Type: ACL; Schema: pg_catalog; Owner: postgres
--

GRANT SELECT ON TABLE pg_catalog.pg_policy TO hasura;


--
-- TOC entry 3992 (class 0 OID 0)
-- Dependencies: 106
-- Name: TABLE pg_prepared_statements; Type: ACL; Schema: pg_catalog; Owner: postgres
--

GRANT SELECT ON TABLE pg_catalog.pg_prepared_statements TO hasura;


--
-- TOC entry 3993 (class 0 OID 0)
-- Dependencies: 105
-- Name: TABLE pg_prepared_xacts; Type: ACL; Schema: pg_catalog; Owner: postgres
--

GRANT SELECT ON TABLE pg_catalog.pg_prepared_xacts TO hasura;


--
-- TOC entry 3994 (class 0 OID 0)
-- Dependencies: 30
-- Name: TABLE pg_proc; Type: ACL; Schema: pg_catalog; Owner: postgres
--

GRANT SELECT ON TABLE pg_catalog.pg_proc TO hasura;


--
-- TOC entry 3995 (class 0 OID 0)
-- Dependencies: 85
-- Name: TABLE pg_publication; Type: ACL; Schema: pg_catalog; Owner: postgres
--

GRANT SELECT ON TABLE pg_catalog.pg_publication TO hasura;


--
-- TOC entry 3996 (class 0 OID 0)
-- Dependencies: 86
-- Name: TABLE pg_publication_rel; Type: ACL; Schema: pg_catalog; Owner: postgres
--

GRANT SELECT ON TABLE pg_catalog.pg_publication_rel TO hasura;


--
-- TOC entry 3997 (class 0 OID 0)
-- Dependencies: 100
-- Name: TABLE pg_publication_tables; Type: ACL; Schema: pg_catalog; Owner: postgres
--

GRANT SELECT ON TABLE pg_catalog.pg_publication_tables TO hasura;


--
-- TOC entry 3998 (class 0 OID 0)
-- Dependencies: 73
-- Name: TABLE pg_range; Type: ACL; Schema: pg_catalog; Owner: postgres
--

GRANT SELECT ON TABLE pg_catalog.pg_range TO hasura;


--
-- TOC entry 3999 (class 0 OID 0)
-- Dependencies: 82
-- Name: TABLE pg_replication_origin; Type: ACL; Schema: pg_catalog; Owner: postgres
--

GRANT SELECT ON TABLE pg_catalog.pg_replication_origin TO hasura;


--
-- TOC entry 4000 (class 0 OID 0)
-- Dependencies: 149
-- Name: TABLE pg_replication_origin_status; Type: ACL; Schema: pg_catalog; Owner: postgres
--

GRANT SELECT ON TABLE pg_catalog.pg_replication_origin_status TO hasura;


--
-- TOC entry 4001 (class 0 OID 0)
-- Dependencies: 138
-- Name: TABLE pg_replication_slots; Type: ACL; Schema: pg_catalog; Owner: postgres
--

GRANT SELECT ON TABLE pg_catalog.pg_replication_slots TO hasura;


--
-- TOC entry 4002 (class 0 OID 0)
-- Dependencies: 57
-- Name: TABLE pg_rewrite; Type: ACL; Schema: pg_catalog; Owner: postgres
--

GRANT SELECT ON TABLE pg_catalog.pg_rewrite TO hasura;


--
-- TOC entry 4003 (class 0 OID 0)
-- Dependencies: 87
-- Name: TABLE pg_roles; Type: ACL; Schema: pg_catalog; Owner: postgres
--

GRANT SELECT ON TABLE pg_catalog.pg_roles TO hasura;


--
-- TOC entry 4004 (class 0 OID 0)
-- Dependencies: 92
-- Name: TABLE pg_rules; Type: ACL; Schema: pg_catalog; Owner: postgres
--

GRANT SELECT ON TABLE pg_catalog.pg_rules TO hasura;


--
-- TOC entry 4005 (class 0 OID 0)
-- Dependencies: 76
-- Name: TABLE pg_seclabel; Type: ACL; Schema: pg_catalog; Owner: postgres
--

GRANT SELECT ON TABLE pg_catalog.pg_seclabel TO hasura;


--
-- TOC entry 4006 (class 0 OID 0)
-- Dependencies: 107
-- Name: TABLE pg_seclabels; Type: ACL; Schema: pg_catalog; Owner: postgres
--

GRANT SELECT ON TABLE pg_catalog.pg_seclabels TO hasura;


--
-- TOC entry 4007 (class 0 OID 0)
-- Dependencies: 37
-- Name: TABLE pg_sequence; Type: ACL; Schema: pg_catalog; Owner: postgres
--

GRANT SELECT ON TABLE pg_catalog.pg_sequence TO hasura;


--
-- TOC entry 4008 (class 0 OID 0)
-- Dependencies: 97
-- Name: TABLE pg_sequences; Type: ACL; Schema: pg_catalog; Owner: postgres
--

GRANT SELECT ON TABLE pg_catalog.pg_sequences TO hasura;


--
-- TOC entry 4009 (class 0 OID 0)
-- Dependencies: 108
-- Name: TABLE pg_settings; Type: ACL; Schema: pg_catalog; Owner: postgres
--

GRANT SELECT ON TABLE pg_catalog.pg_settings TO hasura;


--
-- TOC entry 4010 (class 0 OID 0)
-- Dependencies: 88
-- Name: TABLE pg_shadow; Type: ACL; Schema: pg_catalog; Owner: postgres
--

GRANT SELECT ON TABLE pg_catalog.pg_shadow TO hasura;


--
-- TOC entry 4011 (class 0 OID 0)
-- Dependencies: 27
-- Name: TABLE pg_shdepend; Type: ACL; Schema: pg_catalog; Owner: postgres
--

GRANT SELECT ON TABLE pg_catalog.pg_shdepend TO hasura;


--
-- TOC entry 4012 (class 0 OID 0)
-- Dependencies: 39
-- Name: TABLE pg_shdescription; Type: ACL; Schema: pg_catalog; Owner: postgres
--

GRANT SELECT ON TABLE pg_catalog.pg_shdescription TO hasura;


--
-- TOC entry 4013 (class 0 OID 0)
-- Dependencies: 75
-- Name: TABLE pg_shseclabel; Type: ACL; Schema: pg_catalog; Owner: postgres
--

GRANT SELECT ON TABLE pg_catalog.pg_shseclabel TO hasura;


--
-- TOC entry 4014 (class 0 OID 0)
-- Dependencies: 132
-- Name: TABLE pg_stat_activity; Type: ACL; Schema: pg_catalog; Owner: postgres
--

GRANT SELECT ON TABLE pg_catalog.pg_stat_activity TO hasura;


--
-- TOC entry 4015 (class 0 OID 0)
-- Dependencies: 123
-- Name: TABLE pg_stat_all_indexes; Type: ACL; Schema: pg_catalog; Owner: postgres
--

GRANT SELECT ON TABLE pg_catalog.pg_stat_all_indexes TO hasura;


--
-- TOC entry 4016 (class 0 OID 0)
-- Dependencies: 114
-- Name: TABLE pg_stat_all_tables; Type: ACL; Schema: pg_catalog; Owner: postgres
--

GRANT SELECT ON TABLE pg_catalog.pg_stat_all_tables TO hasura;


--
-- TOC entry 4017 (class 0 OID 0)
-- Dependencies: 143
-- Name: TABLE pg_stat_archiver; Type: ACL; Schema: pg_catalog; Owner: postgres
--

GRANT SELECT ON TABLE pg_catalog.pg_stat_archiver TO hasura;


--
-- TOC entry 4018 (class 0 OID 0)
-- Dependencies: 144
-- Name: TABLE pg_stat_bgwriter; Type: ACL; Schema: pg_catalog; Owner: postgres
--

GRANT SELECT ON TABLE pg_catalog.pg_stat_bgwriter TO hasura;


--
-- TOC entry 4019 (class 0 OID 0)
-- Dependencies: 139
-- Name: TABLE pg_stat_database; Type: ACL; Schema: pg_catalog; Owner: postgres
--

GRANT SELECT ON TABLE pg_catalog.pg_stat_database TO hasura;


--
-- TOC entry 4020 (class 0 OID 0)
-- Dependencies: 140
-- Name: TABLE pg_stat_database_conflicts; Type: ACL; Schema: pg_catalog; Owner: postgres
--

GRANT SELECT ON TABLE pg_catalog.pg_stat_database_conflicts TO hasura;


--
-- TOC entry 4021 (class 0 OID 0)
-- Dependencies: 145
-- Name: TABLE pg_stat_progress_vacuum; Type: ACL; Schema: pg_catalog; Owner: postgres
--

GRANT SELECT ON TABLE pg_catalog.pg_stat_progress_vacuum TO hasura;


--
-- TOC entry 4022 (class 0 OID 0)
-- Dependencies: 133
-- Name: TABLE pg_stat_replication; Type: ACL; Schema: pg_catalog; Owner: postgres
--

GRANT SELECT ON TABLE pg_catalog.pg_stat_replication TO hasura;


--
-- TOC entry 4023 (class 0 OID 0)
-- Dependencies: 136
-- Name: TABLE pg_stat_ssl; Type: ACL; Schema: pg_catalog; Owner: postgres
--

GRANT SELECT ON TABLE pg_catalog.pg_stat_ssl TO hasura;


--
-- TOC entry 4024 (class 0 OID 0)
-- Dependencies: 135
-- Name: TABLE pg_stat_subscription; Type: ACL; Schema: pg_catalog; Owner: postgres
--

GRANT SELECT ON TABLE pg_catalog.pg_stat_subscription TO hasura;


--
-- TOC entry 4025 (class 0 OID 0)
-- Dependencies: 124
-- Name: TABLE pg_stat_sys_indexes; Type: ACL; Schema: pg_catalog; Owner: postgres
--

GRANT SELECT ON TABLE pg_catalog.pg_stat_sys_indexes TO hasura;


--
-- TOC entry 4026 (class 0 OID 0)
-- Dependencies: 116
-- Name: TABLE pg_stat_sys_tables; Type: ACL; Schema: pg_catalog; Owner: postgres
--

GRANT SELECT ON TABLE pg_catalog.pg_stat_sys_tables TO hasura;


--
-- TOC entry 4027 (class 0 OID 0)
-- Dependencies: 141
-- Name: TABLE pg_stat_user_functions; Type: ACL; Schema: pg_catalog; Owner: postgres
--

GRANT SELECT ON TABLE pg_catalog.pg_stat_user_functions TO hasura;


--
-- TOC entry 4028 (class 0 OID 0)
-- Dependencies: 125
-- Name: TABLE pg_stat_user_indexes; Type: ACL; Schema: pg_catalog; Owner: postgres
--

GRANT SELECT ON TABLE pg_catalog.pg_stat_user_indexes TO hasura;


--
-- TOC entry 4029 (class 0 OID 0)
-- Dependencies: 118
-- Name: TABLE pg_stat_user_tables; Type: ACL; Schema: pg_catalog; Owner: postgres
--

GRANT SELECT ON TABLE pg_catalog.pg_stat_user_tables TO hasura;


--
-- TOC entry 4030 (class 0 OID 0)
-- Dependencies: 134
-- Name: TABLE pg_stat_wal_receiver; Type: ACL; Schema: pg_catalog; Owner: postgres
--

GRANT SELECT ON TABLE pg_catalog.pg_stat_wal_receiver TO hasura;


--
-- TOC entry 4031 (class 0 OID 0)
-- Dependencies: 115
-- Name: TABLE pg_stat_xact_all_tables; Type: ACL; Schema: pg_catalog; Owner: postgres
--

GRANT SELECT ON TABLE pg_catalog.pg_stat_xact_all_tables TO hasura;


--
-- TOC entry 4032 (class 0 OID 0)
-- Dependencies: 117
-- Name: TABLE pg_stat_xact_sys_tables; Type: ACL; Schema: pg_catalog; Owner: postgres
--

GRANT SELECT ON TABLE pg_catalog.pg_stat_xact_sys_tables TO hasura;


--
-- TOC entry 4033 (class 0 OID 0)
-- Dependencies: 142
-- Name: TABLE pg_stat_xact_user_functions; Type: ACL; Schema: pg_catalog; Owner: postgres
--

GRANT SELECT ON TABLE pg_catalog.pg_stat_xact_user_functions TO hasura;


--
-- TOC entry 4034 (class 0 OID 0)
-- Dependencies: 119
-- Name: TABLE pg_stat_xact_user_tables; Type: ACL; Schema: pg_catalog; Owner: postgres
--

GRANT SELECT ON TABLE pg_catalog.pg_stat_xact_user_tables TO hasura;


--
-- TOC entry 4035 (class 0 OID 0)
-- Dependencies: 126
-- Name: TABLE pg_statio_all_indexes; Type: ACL; Schema: pg_catalog; Owner: postgres
--

GRANT SELECT ON TABLE pg_catalog.pg_statio_all_indexes TO hasura;


--
-- TOC entry 4036 (class 0 OID 0)
-- Dependencies: 129
-- Name: TABLE pg_statio_all_sequences; Type: ACL; Schema: pg_catalog; Owner: postgres
--

GRANT SELECT ON TABLE pg_catalog.pg_statio_all_sequences TO hasura;


--
-- TOC entry 4037 (class 0 OID 0)
-- Dependencies: 120
-- Name: TABLE pg_statio_all_tables; Type: ACL; Schema: pg_catalog; Owner: postgres
--

GRANT SELECT ON TABLE pg_catalog.pg_statio_all_tables TO hasura;


--
-- TOC entry 4038 (class 0 OID 0)
-- Dependencies: 127
-- Name: TABLE pg_statio_sys_indexes; Type: ACL; Schema: pg_catalog; Owner: postgres
--

GRANT SELECT ON TABLE pg_catalog.pg_statio_sys_indexes TO hasura;


--
-- TOC entry 4039 (class 0 OID 0)
-- Dependencies: 130
-- Name: TABLE pg_statio_sys_sequences; Type: ACL; Schema: pg_catalog; Owner: postgres
--

GRANT SELECT ON TABLE pg_catalog.pg_statio_sys_sequences TO hasura;


--
-- TOC entry 4040 (class 0 OID 0)
-- Dependencies: 121
-- Name: TABLE pg_statio_sys_tables; Type: ACL; Schema: pg_catalog; Owner: postgres
--

GRANT SELECT ON TABLE pg_catalog.pg_statio_sys_tables TO hasura;


--
-- TOC entry 4041 (class 0 OID 0)
-- Dependencies: 128
-- Name: TABLE pg_statio_user_indexes; Type: ACL; Schema: pg_catalog; Owner: postgres
--

GRANT SELECT ON TABLE pg_catalog.pg_statio_user_indexes TO hasura;


--
-- TOC entry 4042 (class 0 OID 0)
-- Dependencies: 131
-- Name: TABLE pg_statio_user_sequences; Type: ACL; Schema: pg_catalog; Owner: postgres
--

GRANT SELECT ON TABLE pg_catalog.pg_statio_user_sequences TO hasura;


--
-- TOC entry 4043 (class 0 OID 0)
-- Dependencies: 122
-- Name: TABLE pg_statio_user_tables; Type: ACL; Schema: pg_catalog; Owner: postgres
--

GRANT SELECT ON TABLE pg_catalog.pg_statio_user_tables TO hasura;


--
-- TOC entry 4044 (class 0 OID 0)
-- Dependencies: 58
-- Name: TABLE pg_statistic; Type: ACL; Schema: pg_catalog; Owner: postgres
--

GRANT SELECT ON TABLE pg_catalog.pg_statistic TO hasura;


--
-- TOC entry 4045 (class 0 OID 0)
-- Dependencies: 67
-- Name: TABLE pg_statistic_ext; Type: ACL; Schema: pg_catalog; Owner: postgres
--

GRANT SELECT ON TABLE pg_catalog.pg_statistic_ext TO hasura;


--
-- TOC entry 4046 (class 0 OID 0)
-- Dependencies: 98
-- Name: TABLE pg_stats; Type: ACL; Schema: pg_catalog; Owner: postgres
--

GRANT SELECT ON TABLE pg_catalog.pg_stats TO hasura;


--
-- TOC entry 4047 (class 0 OID 0)
-- Dependencies: 83
-- Name: TABLE pg_subscription; Type: ACL; Schema: pg_catalog; Owner: postgres
--

GRANT SELECT ON TABLE pg_catalog.pg_subscription TO hasura;


--
-- TOC entry 4048 (class 0 OID 0)
-- Dependencies: 84
-- Name: TABLE pg_subscription_rel; Type: ACL; Schema: pg_catalog; Owner: postgres
--

GRANT SELECT ON TABLE pg_catalog.pg_subscription_rel TO hasura;


--
-- TOC entry 4049 (class 0 OID 0)
-- Dependencies: 94
-- Name: TABLE pg_tables; Type: ACL; Schema: pg_catalog; Owner: postgres
--

GRANT SELECT ON TABLE pg_catalog.pg_tables TO hasura;


--
-- TOC entry 4050 (class 0 OID 0)
-- Dependencies: 26
-- Name: TABLE pg_tablespace; Type: ACL; Schema: pg_catalog; Owner: postgres
--

GRANT SELECT ON TABLE pg_catalog.pg_tablespace TO hasura;


--
-- TOC entry 4051 (class 0 OID 0)
-- Dependencies: 111
-- Name: TABLE pg_timezone_abbrevs; Type: ACL; Schema: pg_catalog; Owner: postgres
--

GRANT SELECT ON TABLE pg_catalog.pg_timezone_abbrevs TO hasura;


--
-- TOC entry 4052 (class 0 OID 0)
-- Dependencies: 112
-- Name: TABLE pg_timezone_names; Type: ACL; Schema: pg_catalog; Owner: postgres
--

GRANT SELECT ON TABLE pg_catalog.pg_timezone_names TO hasura;


--
-- TOC entry 4053 (class 0 OID 0)
-- Dependencies: 74
-- Name: TABLE pg_transform; Type: ACL; Schema: pg_catalog; Owner: postgres
--

GRANT SELECT ON TABLE pg_catalog.pg_transform TO hasura;


--
-- TOC entry 4054 (class 0 OID 0)
-- Dependencies: 59
-- Name: TABLE pg_trigger; Type: ACL; Schema: pg_catalog; Owner: postgres
--

GRANT SELECT ON TABLE pg_catalog.pg_trigger TO hasura;


--
-- TOC entry 4055 (class 0 OID 0)
-- Dependencies: 79
-- Name: TABLE pg_ts_config; Type: ACL; Schema: pg_catalog; Owner: postgres
--

GRANT SELECT ON TABLE pg_catalog.pg_ts_config TO hasura;


--
-- TOC entry 4056 (class 0 OID 0)
-- Dependencies: 80
-- Name: TABLE pg_ts_config_map; Type: ACL; Schema: pg_catalog; Owner: postgres
--

GRANT SELECT ON TABLE pg_catalog.pg_ts_config_map TO hasura;


--
-- TOC entry 4057 (class 0 OID 0)
-- Dependencies: 77
-- Name: TABLE pg_ts_dict; Type: ACL; Schema: pg_catalog; Owner: postgres
--

GRANT SELECT ON TABLE pg_catalog.pg_ts_dict TO hasura;


--
-- TOC entry 4058 (class 0 OID 0)
-- Dependencies: 78
-- Name: TABLE pg_ts_parser; Type: ACL; Schema: pg_catalog; Owner: postgres
--

GRANT SELECT ON TABLE pg_catalog.pg_ts_parser TO hasura;


--
-- TOC entry 4059 (class 0 OID 0)
-- Dependencies: 81
-- Name: TABLE pg_ts_template; Type: ACL; Schema: pg_catalog; Owner: postgres
--

GRANT SELECT ON TABLE pg_catalog.pg_ts_template TO hasura;


--
-- TOC entry 4060 (class 0 OID 0)
-- Dependencies: 28
-- Name: TABLE pg_type; Type: ACL; Schema: pg_catalog; Owner: postgres
--

GRANT SELECT ON TABLE pg_catalog.pg_type TO hasura;


--
-- TOC entry 4061 (class 0 OID 0)
-- Dependencies: 90
-- Name: TABLE pg_user; Type: ACL; Schema: pg_catalog; Owner: postgres
--

GRANT SELECT ON TABLE pg_catalog.pg_user TO hasura;


--
-- TOC entry 4062 (class 0 OID 0)
-- Dependencies: 36
-- Name: TABLE pg_user_mapping; Type: ACL; Schema: pg_catalog; Owner: postgres
--

GRANT SELECT ON TABLE pg_catalog.pg_user_mapping TO hasura;


--
-- TOC entry 4063 (class 0 OID 0)
-- Dependencies: 148
-- Name: TABLE pg_user_mappings; Type: ACL; Schema: pg_catalog; Owner: postgres
--

GRANT SELECT ON TABLE pg_catalog.pg_user_mappings TO hasura;


--
-- TOC entry 4064 (class 0 OID 0)
-- Dependencies: 93
-- Name: TABLE pg_views; Type: ACL; Schema: pg_catalog; Owner: postgres
--

GRANT SELECT ON TABLE pg_catalog.pg_views TO hasura;


--
-- TOC entry 2225 (class 826 OID 27094)
-- Name: DEFAULT PRIVILEGES FOR SEQUENCES; Type: DEFAULT ACL; Schema: item; Owner: eric
--

ALTER DEFAULT PRIVILEGES FOR ROLE eric IN SCHEMA item REVOKE ALL ON SEQUENCES  FROM eric;
ALTER DEFAULT PRIVILEGES FOR ROLE eric IN SCHEMA item GRANT ALL ON SEQUENCES  TO eric WITH GRANT OPTION;
ALTER DEFAULT PRIVILEGES FOR ROLE eric IN SCHEMA item GRANT ALL ON SEQUENCES  TO hasura;


--
-- TOC entry 2227 (class 826 OID 27096)
-- Name: DEFAULT PRIVILEGES FOR TYPES; Type: DEFAULT ACL; Schema: item; Owner: eric
--

ALTER DEFAULT PRIVILEGES FOR ROLE eric IN SCHEMA item REVOKE ALL ON TYPES  FROM PUBLIC;
ALTER DEFAULT PRIVILEGES FOR ROLE eric IN SCHEMA item REVOKE ALL ON TYPES  FROM eric;
ALTER DEFAULT PRIVILEGES FOR ROLE eric IN SCHEMA item GRANT ALL ON TYPES  TO eric WITH GRANT OPTION;
ALTER DEFAULT PRIVILEGES FOR ROLE eric IN SCHEMA item GRANT ALL ON TYPES  TO hasura;


--
-- TOC entry 2226 (class 826 OID 27095)
-- Name: DEFAULT PRIVILEGES FOR FUNCTIONS; Type: DEFAULT ACL; Schema: item; Owner: eric
--

ALTER DEFAULT PRIVILEGES FOR ROLE eric IN SCHEMA item REVOKE ALL ON FUNCTIONS  FROM PUBLIC;
ALTER DEFAULT PRIVILEGES FOR ROLE eric IN SCHEMA item REVOKE ALL ON FUNCTIONS  FROM eric;
ALTER DEFAULT PRIVILEGES FOR ROLE eric IN SCHEMA item GRANT ALL ON FUNCTIONS  TO eric WITH GRANT OPTION;
ALTER DEFAULT PRIVILEGES FOR ROLE eric IN SCHEMA item GRANT ALL ON FUNCTIONS  TO hasura;


--
-- TOC entry 2224 (class 826 OID 27093)
-- Name: DEFAULT PRIVILEGES FOR TABLES; Type: DEFAULT ACL; Schema: item; Owner: eric
--

ALTER DEFAULT PRIVILEGES FOR ROLE eric IN SCHEMA item REVOKE ALL ON TABLES  FROM eric;
ALTER DEFAULT PRIVILEGES FOR ROLE eric IN SCHEMA item GRANT ALL ON TABLES  TO eric WITH GRANT OPTION;
ALTER DEFAULT PRIVILEGES FOR ROLE eric IN SCHEMA item GRANT ALL ON TABLES  TO hasura;


--
-- TOC entry 2220 (class 826 OID 17390)
-- Name: DEFAULT PRIVILEGES FOR SEQUENCES; Type: DEFAULT ACL; Schema: -; Owner: eric
--

ALTER DEFAULT PRIVILEGES FOR ROLE eric GRANT ALL ON SEQUENCES  TO hasura;


--
-- TOC entry 2221 (class 826 OID 17391)
-- Name: DEFAULT PRIVILEGES FOR TYPES; Type: DEFAULT ACL; Schema: -; Owner: eric
--

ALTER DEFAULT PRIVILEGES FOR ROLE eric GRANT ALL ON TYPES  TO hasura;


--
-- TOC entry 2222 (class 826 OID 17392)
-- Name: DEFAULT PRIVILEGES FOR FUNCTIONS; Type: DEFAULT ACL; Schema: -; Owner: eric
--

ALTER DEFAULT PRIVILEGES FOR ROLE eric GRANT ALL ON FUNCTIONS  TO hasura;


--
-- TOC entry 2223 (class 826 OID 17393)
-- Name: DEFAULT PRIVILEGES FOR TABLES; Type: DEFAULT ACL; Schema: -; Owner: eric
--

ALTER DEFAULT PRIVILEGES FOR ROLE eric GRANT ALL ON TABLES  TO hasura;


-- Completed on 2020-06-18 09:42:50

--
-- PostgreSQL database dump complete
--

