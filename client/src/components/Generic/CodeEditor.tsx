import React, { useEffect } from 'react';
import schema from "~lib/Item/ItemHardwareFastenerScrewMachine/config/ScrewSizeOptions.schema.json";

import {
    EditorView,
    keymap,
    // defaultKeyMap
} from "@codemirror/view";
import { defaultKeymap } from "@codemirror/commands";
import { EditorState, Extension } from "@codemirror/state";
import { basicSetup } from "@codemirror/basic-setup";
import { javascript as LangJavascript } from "@codemirror/lang-javascript";



interface CodeEditorBasicProps {
    onChange?: ( json: Object ) => void; // TODO
    onCommit?: ( json: Object ) => void; // TODO
}

interface CodeEditorProps extends CodeEditorBasicProps {
    extensions?: Extension[];
    inputDoc?: string;
    
}
export const CodeEditor: React.FunctionComponent<CodeEditorProps> = ( props ) => {
    let extensions = [ basicSetup, keymap.of( defaultKeymap ), ... ( props.extensions ?? [] ) ];

    useEffect( () => {
        const element = document.getElementById( 'code_editor_container' );
        let startState = EditorState.create( {
            doc: props.inputDoc,
            extensions: extensions
        } );

        let view = new EditorView( {
            state: startState,
            parent: element
        } );
    }, [] );

    console.log( { cls: "CodeEditor", evt: "CodeEditorInit" } );

    return <div id='code_editor_container'></div>;
};




interface JsonCodeEditorProps extends CodeEditorBasicProps {
    json: Object | string;
}



export const JsonCodeEditor: React.FunctionComponent<JsonCodeEditorProps> = ( props ) => {
    const json: string = typeof props.json !== "string" ? JSON.stringify( props.json ) : props.json;
    console.log( { cls: "JsonModal", evt: "ModalInit", json } );

    const onChange = ( json: Object ) => {
        // run something that prepares for `onCommit`
        if ( props.onChange ) {
            props.onChange( json );
        }
    };
    return <CodeEditor
            inputDoc={json}
            extensions={[LangJavascript( { typescript: true } )]}
            />;
};

export default JsonCodeEditor;