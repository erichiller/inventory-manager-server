import React, { useEffect } from 'react';
import schema from "~lib/Item/ItemHardwareFastenerScrewMachine/config/ScrewSizeOptions.schema.json";

// import { EditorState } from "@codemirror/next/state";
import { 
    // EditorView, 
    keymap 
} from "@codemirror/next/view";
import { defaultKeymap } from "@codemirror/next/commands";
import { EditorState, EditorView, basicSetup } from "@codemirror/next/basic-setup"
import { javascript } from "@codemirror/next/lang-javascript"







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
                     basicSetup, javascript({ typescript: true })
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