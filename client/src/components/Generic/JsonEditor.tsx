// import React, { useEffect } from 'react';
// import { JsonEditor } from '~components/Shared/JsonModal';
// import schema from "~lib/Item/ItemHardwareFastenerScrewMachine/config/ScrewSizeOptions.schema.json";

// // import { EditorState } from "@codemirror/next/state";








// // const testSchema = JSON.parse( `
// // {

// //   "title": "Person",
// //   "type": "object",
// //   "properties": {
// //     "name": {
// //         "type": "string"
// //     }
// // }
// // }
// // `);

// // schema.definitions.EnumItemHardwareFastenerThreadLabelEnum.type;

// export const GenericObjectJsonEditor = () => {
//     return < JsonEditor text="" />
// }; 

import React, { useEffect, useRef } from "react";
import JSONEditor, { JSONEditorMode, JSONEditorOptions } from 'jsoneditor';
import { Intersection, deepCopy, deepEqual } from "~lib/UtilityFunctions";
import { Button, Modal } from "antd";


type JsonEditorProps = Intersection<{
    json: object;
    text?: string;
} | {
    json?: object;
    text: string;
}, {
    className?: string;
},
    JSONEditorOptions>;
// type JsonEditorProps = JSONEditorOptions;


// TODO: JsonEditorModal Templates ; create templates for common data entry. Array of templates that will appear in the context menu, Each template is a json object precreated that can be added as a object value to any node in your document
export const GenericObjectJsonEditor: React.FC<JsonEditorProps> = ( props ) => {
    const { json, text, mode, schema, schemaRefs, className } = props;

    /**
     * More information about [jsoneditor](
     * https://github.com/josdejong/jsoneditor)
     * 
     * * [API docs](https://github.com/josdejong/jsoneditor/blob/develop/docs/api.md)
     */
    let JsonEditorInstance: JSONEditor;
    let options: Omit<JsonEditorProps, 'json' | 'text'>;

    const containerRef = useRef<HTMLDivElement>();

    // run this once
    useEffect( () => {
        // copy all properties into options for the editor
        // (except the properties for the JSONEditorReact component itself)
        let t_options = Object.assign( {}, props );
        delete t_options.json;
        delete t_options.text;
        options = t_options;
        options.modes = [ 'tree', 'view', 'form', 'code', 'text', 'preview'];

        JsonEditorInstance = new JSONEditor( containerRef.current, options );

        if ( json ) {
            JsonEditorInstance.set( json );
        }
        if ( text ) {
            JsonEditorInstance.setText( text );
        }
        options.schema = deepCopy( schema );
        options.schemaRefs = deepCopy( schemaRefs );

        // clean up after this effect: (equivalent to `componentWillUnmount()`)
        return function cleanup () {
            JsonEditorInstance.destroy();
        };
    } );

    useEffect( () => {
        if ( json ) {
            JsonEditorInstance.update( json );
        }
        if ( text ) {
            JsonEditorInstance.updateText( text );
        }
        if ( mode ) {
            JsonEditorInstance.setMode( mode );
        }

        // store a clone of the schema to keep track on when it actually changes.
        // (When using a PureComponent all of this would be redundant)
        const schemaChanged = !deepEqual( schema, options.schema );
        const schemaRefsChanged = !deepEqual( schemaRefs, schemaRefs );
        if ( schemaChanged || schemaRefsChanged ) {
            options.schema = deepCopy( schema );
            options.schemaRefs = deepCopy( schemaRefs );
            JsonEditorInstance.setSchema( schema, schemaRefs );
        }
    }, [ json, text, mode, schema, schemaRefs ] );

    return (
        <div className={`jsoneditor-react-container ${ className ?? '' }`} ref={containerRef} />
    );
};