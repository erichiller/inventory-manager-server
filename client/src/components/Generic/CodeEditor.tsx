import React, { useEffect } from 'react';
import schema from "~lib/Item/ItemHardwareFastenerScrewMachine/config/ScrewSizeOptions.schema.json";

// import { EditorState } from "@codemirror/next/state";
import { 
    // EditorView, 
    keymap 
} from "@codemirror/next/view";
import { defaultKeymap } from "@codemirror/next/commands";
import { EditorState, EditorView, basicSetup } from "@codemirror/next/basic-setup"
import { javascript as LangJavascript } from "@codemirror/next/lang-javascript"

// import * as tsj from "ts-json-schema-generator/factory/generator";
// import { createGenerator } from "ts-json-schema-generator/factory/generator";
// import { createGenerator, Config as JsonSchemaGeneratorConfig } from "ts-json-schema-generator";
// import { Config as JsonSchemaGeneratorConfig } from "ts-json-schema-generator/src/Config";
// const tsj = require( "ts-json-schema-generator" );
// const fs = require( "fs" );

// const config = {
//     path: "path/to/source/file",
//     tsconfig: "path/to/tsconfig.json",
//     type: "*", // Or <type-name> if you want to generate schema for that one type only
// };

// const config: tsj.Config = {
//     tsconfig: 

// }
// const config: JsonSchemaGeneratorConfig = {};

// const output_path = "path/to/output/file";

// const generatedSchema = createGenerator( config ).createSchema( config.type );
// const schemaString = JSON.stringify( schema, null, 2 );
// fs.writeFile( output_path, schemaString, ( err ) => {
//     if ( err ) throw err;
// } );





// const testSchema = JSON.parse( `
// {

//   "title": "Person",
//   "type": "object",
//   "properties": {
//     "name": {
//         "type": "string"
//     }
// }
// }
// `);

// schema.definitions.EnumItemHardwareFastenerThreadLabelEnum.type;

export const CodeEditor = () => {

    useEffect( () => {
        const element = document.getElementById( 'code_editor_container' );
        let startState = EditorState.create( {
            // doc: "Hello World",
            // state: EditorState.create( {
                 extensions: [ 
                basicSetup, LangJavascript({ typescript: true })
                // } )
                ,

            // extensions: [ 
                keymap( defaultKeymap ) ]
        } );

        let view = new EditorView( {
            state: startState,
            parent: element
        } );
    }, [] );

    return <div id='code_editor_container'></div>;
};