import React, { useRef, useState } from "react";
import { Modal, ModalProps } from "antd";
import Draggable, { DraggableEventHandler, DraggableBounds } from 'react-draggable';



interface DraggableModalProps extends ModalProps {
    // visibilityHandler: ( modal: React.ReactElement ) => void;
}

// see https://ant.design/components/modal/#components-modal-demo-modal-render
export const DraggableModal: React.FC<DraggableModalProps> = ( props ) => {


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


    return <Modal
        // title="Editor"
        visible={true}
        // className="JsonModal"

        title={
            <div
                className="drag-title"
                style={{
                    width: '100%'
                }}
                onMouseOver={() => {
                    if ( disabled ) {
                        setDisabled( false );
                    }
                }}
                onMouseOut={() => {
                    setDisabled( true );
                }}
                // fix eslintjsx-a11y/mouse-events-have-key-events
                // https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/master/docs/rules/mouse-events-have-key-events.md
                onFocus={() => { }}
                onBlur={() => { }}
            >
                {props.title ?? <p/>}
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

        onOk={ props.onOk }
        onCancel={ props.onCancel }
        // onOk={() => visibilityHandler(false)}
        // onCancel={() => visibilityHandler( null )}
        // footer={[
        //     <Button key="close" type="primary" onClick={() => visibilityHandler( null )}>
        //         Close
        //     </Button>,
        // ]}
    >
        {props.children}
    </Modal>;
};

export default DraggableModal;