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
