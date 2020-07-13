import React, { useEffect } from 'react';
import schema from "~lib/Item/ItemHardwareFastenerScrewMachine/config/ScrewSizeOptions.schema.json";
// import "@fortawesome/fontawesome-free/css/all.css";
// const JSONEditor = require( "@json-editor/json-editor" ).JSONEditor;
// import JSONEditorM = require( "@json-editor/json-editor" );

// const JSONEditor = JSONEditorM.JSONEditor;

import * as JSONEditorModule from "@json-editor/json-editor";
// import * as JSONEditor from "@json-editor/json-editor";

// import JSONEditorModule from '@json-editor/json-editor';

const JSONEditor = JSONEditorModule.JSONEditor;




const testSchema = JSON.parse( `
{
    
  "title": "Person",
  "type": "object",
  "properties": {
    "name": {
        "type": "string"
    }
}
}
`);

schema.definitions.EnumItemHardwareFastenerThreadLabelEnum.type;

export const JsonEditorForm = () => {
    useEffect( () => {
        const element = document.getElementById( 'editor_holder' );
        const editor = new JSONEditor( element, {
            schema: schema,
            // schema: testSchema,
            display_required_only: true, // circular references will blow up without this
            theme: 'html',
            iconlib: null
        } );
    }, [] );

    return <div id='editor_holder'></div>;
};