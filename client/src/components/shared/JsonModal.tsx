import React, { useEffect, useRef } from "react";
import JSONEditor, { JSONEditorMode, JSONEditorOptions } from 'jsoneditor';
import { Union, deepCopy, deepEqual } from "~lib/UtilityFunctions";
import { Button, Modal } from "antd";

interface JsonModalProps {
    json: Object | string;
    onChange?: (json: Object) => void;
    onCommit?: (json: Object) => void;
    visibilityHandler: ( modal: React.ReactElement ) => void;
}

export const JsonModal: React.FC<JsonModalProps> = ( props ) => {
    const { visibilityHandler, onCommit } = props;
    const json = typeof props.json === "string" ? JSON.stringify( props.json ) : props.json;

    const onChange = (json: Object) => {
        // run something that prepares for `onCommit`
        if ( props.onChange ){
            props.onChange(json);
        }
    }

    console.log({cls: "JsonModal", evt: "ModalInit", json});
    return <Modal
        title="JSON"
        visible={true}
        className="JsonModal"
        // onOk={() => visibilityHandler(false)}
        onCancel={() => visibilityHandler( null )}
        footer={[
            <Button key="close" type="primary" onClick={() => visibilityHandler( null )}>
                Close
            </Button>,
        ]}
    >
        <JsonEditor json={json}
            {...onChange ?? {}}
         />
    </Modal>;
};




type JsonEditorProps = Union<{
    json: object;
    text?: string;
} | {
    json?: object;
    text: string;
}, {
    className?: string
},
JSONEditorOptions >;


// TODO: JsonEditorModal Templates ; create templates for common data entry. Array of templates that will appear in the context menu, Each template is a json object precreated that can be added as a object value to any node in your document
const JsonEditor: React.FC<JsonEditorProps> = ( props ) => {
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
        <div className={`jsoneditor-react-container ${className??''}`} ref={containerRef} />
    );
};