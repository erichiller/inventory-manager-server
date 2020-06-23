import React, { useEffect, useRef } from "react";
import JSONEditor, { JSONEditorMode, JSONEditorOptions } from 'jsoneditor';
import { Union, deepCopy, deepEqual } from "../../lib/UtilityFunctions";
import { Button, Modal } from "antd";

interface JsonModalProps {
    json: Object | string;
    visibilityHandler: ( modal: React.ReactElement ) => void;
}

export const JsonModal: React.FC<JsonModalProps> = ( props ) => {
    const { visibilityHandler } = props;
    const json = typeof props.json === "string" ? JSON.stringify( props.json ) : props.json;

    console.log({cls: "JsonModal", evt: "ModalInit", json});
    return <Modal
        title="JSON"
        visible={true}
        // onOk={() => visibilityHandler(false)}
        // onCancel={this.handleCancel}
        footer={[
            <Button key="close" type="primary" onClick={() => visibilityHandler( null )}>
                Close
            </Button>,
        ]}
    >
        <JsonEditor json={json} />
    </Modal>;
};

// import React, { Component } from 'react';
// import isEqual from 'lodash/isEqual';
// import cloneDeep from 'lodash/cloneDeep';

// import 'jsoneditor/dist/jsoneditor.css';

// import './JSONEditorReact.css';


// interface JsonEditorProps extends JSONEditorOptions {
//     json: object;
//     text: string;
// }

type JsonEditorProps = Union<{
    json: object;
    text?: string;
} | {
    json?: object;
    text: string;
// } | {
//     vendor?: null;
//     vendorId?: null;
}, JSONEditorOptions >;


const JsonEditor: React.FC<JsonEditorProps> = ( props ) => {
    const { json, text, mode, schema, schemaRefs } = props;


    let JsonEditorInstance: JSONEditor;
    let options: Omit<JsonEditorProps, 'json' | 'text'>;

    const containerRef = useRef();

    useEffect( () => {
        // copy all properties into options for the editor
        // (except the properties for the JSONEditorReact component itself)
        let t_options = Object.assign( {}, props );
        delete t_options.json;
        delete t_options.text;
        options = t_options;

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
        <div className="jsoneditor-react-container" ref={containerRef} />
    );
};