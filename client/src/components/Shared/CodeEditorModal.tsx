import React, { useEffect, useRef, useState } from "react";
// import JSONEditor, { JSONEditorMode, JSONEditorOptions } from 'jsoneditor';
import { Intersection, deepCopy, deepEqual } from "~lib/UtilityFunctions";
import { Button, Modal } from "antd";
import { CodeEditor } from "~components/Generic/CodeEditor";
import Draggable, { DraggableEventHandler, DraggableBounds } from 'react-draggable';

interface CodeEditorModalProps {
    json: Object | string;
    onChange?: ( json: Object ) => void;
    onCommit?: ( json: Object ) => void;
    visibilityHandler: ( modal: React.ReactElement ) => void;
}

export const CodeEditorModal: React.FC<CodeEditorModalProps> = ( props ) => {
    const { visibilityHandler, onCommit } = props;
    const json = typeof props.json === "string" ? JSON.stringify( props.json ) : props.json;

    const onChange = ( json: Object ) => {
        // run something that prepares for `onCommit`
        if ( props.onChange ) {
            props.onChange( json );
        }
    };

    let [ visible, setVisible ] = useState<boolean>( false );
    let [ disabled, setDisabled ] = useState<boolean>( true );
    let [ bounds, setBounds ] = useState<DraggableBounds>( { left: 0, top: 0, bottom: 0, right: 0 } );

    let dragRef = useRef<HTMLDivElement>();

    const onStart: DraggableEventHandler = ( event, uiData ) => {
        const { clientWidth, clientHeight } = window?.document?.documentElement;
        const targetRect = dragRef?.current?.getBoundingClientRect();
        setBounds( {
            left: -targetRect?.left + uiData?.x,
            right: clientWidth - ( targetRect?.right - uiData?.x ),
            top: -targetRect?.top + uiData?.y,
            bottom: clientHeight - ( targetRect?.bottom - uiData?.y ),
        } );
    };


    console.log( { cls: "JsonModal", evt: "ModalInit", json } );
    return <Modal
        // title="Editor"
        visible={true}
        // className="JsonModal"

        title={
            <div
                style={{
                    width: '100%',
                    cursor: 'move',
                }}
                onMouseOver={() => {
                    if ( disabled ) {
                        this.setState( {
                            disabled: false,
                        } );
                    }
                }}
                onMouseOut={() => {
                    this.setState( {
                        disabled: true,
                    } );
                }}
                // fix eslintjsx-a11y/mouse-events-have-key-events
                // https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/master/docs/rules/mouse-events-have-key-events.md
                onFocus={() => { }}
                onBlur={() => { }}
            // end
            >
                Draggable Modal
            </div>
        }


        modalRender={modal => (
            <Draggable
                disabled={disabled}
                bounds={bounds}
                onStart={( event, uiData ) => onStart( event, uiData )}
            >
                <div ref={dragRef}>{modal}</div>
            </Draggable>
        )}

        // onOk={() => visibilityHandler(false)}
        onCancel={() => visibilityHandler( null )}
        footer={[
            <Button key="close" type="primary" onClick={() => visibilityHandler( null )}>
                Close
            </Button>,
        ]}
    >
        <CodeEditor
            // json={json}
            {...onChange ?? {}}
        />
    </Modal>;
};

