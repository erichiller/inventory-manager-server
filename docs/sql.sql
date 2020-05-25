CREATE OR REPLACE FUNCTION "add_item_to_base"()
RETURNS trigger AS 
$BODY$
BEGIN
  INSERT INTO 
    "item" ( "item_id", "class" )
    VALUES
	(NEW.item_id, TG_TABLE_NAME::regclass::text);
  RETURN NEW;
END;
$BODY$
LANGUAGE plpgsql;




/**
 * test plpgsql functions piece by piece using this which can be executed without defining a function
 * EXAMPLE:
 **/
DO $$ 
DECLARE
   counter    INTEGER := 1;
   first_name VARCHAR(50) := 'John';
   last_name  VARCHAR(50) := 'Doe';
   payment    NUMERIC(11,2) := 20.5;
BEGIN 
   RAISE NOTICE '% % % has been paid % USD', counter, first_name, last_name, payment;
END $$;