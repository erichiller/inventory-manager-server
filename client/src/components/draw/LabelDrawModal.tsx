import { useContext, useState } from "react";
import { DISPLAY } from '../../lib/types/enums';
import { Label, useSaveLabelMutation, useEditLabelMutation, GetLabelsDocument } from "../../lib/types/graphql";
import { Modal, Descriptions, Button, Tooltip, message } from "antd";
import React from "react";
import { LabelDraw } from "./LabelDraw";
import { PrintContext } from "../print/PrintContextHandler";
import { LabelExport } from "../../lib/LabelConstituent";
import SendBufferButton from "../print/SendBufferButton";
import { visibleHandler } from "../item/ItemTable";
import { Item } from "../../lib/item";
import { StopOutlined, DatabaseOutlined, SaveOutlined } from "@ant-design/icons";

type LabelDrawModalProps = {
    visibleHandler: visibleHandler;
} & ( {
    item: Item<any>;
    label?: undefined;
} | {
    item?: undefined;
    label: Label;
} );

interface LabelDrawModalState {
    width: number;
    label: LabelExport;
}

export const LabelDrawModal: React.FunctionComponent<LabelDrawModalProps> = ( props: LabelDrawModalProps ) => {

    const [ state, setState ] = useState <LabelDrawModalState> (
        {
            width: props.label && props.label.width ? props.label.width : LabelExport.DEFAULT_WIDTH,
            label: props.label ? new LabelExport( props.label ) : new LabelExport()
        }
    );
    const context = useContext( PrintContext );
    const [ saveLabelMutation, { 
        data: saveData, 
        loading: saveLoading, 
        error: saveError 
    } ] = useSaveLabelMutation();
    const [ editLabelMutation, { 
        data: editData, 
        loading: editLoading, 
        error: editEerror 
    } ] = useEditLabelMutation();

    // determine if label is new (already in DB) so that it can be edited or inserted
    const _labelIsNew: boolean = props.label ? false : true;

    const handleCancel = () => {
        props.visibleHandler( null );
    };
    const handleSave = () => {
        let label = context.getCurrentLabel();

        if ( _labelIsNew ) {
            saveLabelMutation( {
                variables: {
                    id: label.id,
                    content: label.content,
                    height: label.height,
                    item_id: label.item_id,
                    title: label.title,
                    width: label.width
                },
                refetchQueries: [
                    { query: GetLabelsDocument }
                ]
            } ).then( result => {
                message.info( `Saved Successfully` );
            } ).catch( error => {
                console.log( "MUTATE ERROR", error );
                message.error( `Failure during save: ${ error }` );
            } ).finally( () => {
                props.visibleHandler( null );
            } );
        } else {
            editLabelMutation( {
                variables: {
                    content: label.content,
                    height: label.height,
                    id: label.id,
                    item_id: label.item_id,
                    title: label.title,
                    width: label.width
                },
                refetchQueries: [
                    { query: GetLabelsDocument }
                ]
            } ).then( result => {
                message.info( `Saved Successfully` );
            } ).catch( error => {
                console.log( "MUTATE ERROR", error );
                message.error( `Failure during save: ${ error }` );
            } ).finally( () => {
                props.visibleHandler( null );
            } );

        }
    };

    const updateLabelWidthPixels = ( newPx: number ): void => {
            console.log( "updateWidthPixels\n", {
                prior: state.width,
                __new: newPx 
            });
            // canvas.width = newPx;
            // }
            setState( {
                width: newPx ,
                label: state.label
            } );

        }

    const description = () => {
        const { item, label } = props;
        if ( props.item ) {
            return <div>
                {item.name}
                <Descriptions title="Properties" column={1} bordered={true}>
                    {Object.keys( item ).map( key => {
                        let value = item[ key ];
                        if ( ![ "__typename" ].includes( key ) && value ) {
                            console.log( `property of item ${ key } = ${ value }` );
                            return <Descriptions.Item key={key} label={key}>{value}</Descriptions.Item>;
                        }
                    } )}
                </Descriptions>
            </div>;
        }
        if ( label ) {
            return <span>{label.title}</span>;
        }
    };


    const { visibleHandler, label, item } = props;

    // console.log( 'state.visibleHandler', visibleHandler() );
    // console.log('state.visible', visibleHandler(), state.visible == display.VISIBLE ? true : false)
    // console.log( 'state.item', item );
    return (
        <Modal
            title={_labelIsNew ? "Create a new label":"Edit Label"}
            visible={true}
            onCancel={handleCancel}
            onOk={handleSave}
            width={state.width > 450 ? state.width + 75 : 525}
            footer={[
                <Tooltip key="cancel" placement="top" title="Return to Items">
                    <Button key="cancel" type="danger" onClick={handleCancel}>
                        <StopOutlined />
                        Cancel
                        </Button>
                </Tooltip >,

                <Tooltip key="print" placement="top" title="Send to Label Maker">
                    <SendBufferButton 
                        type="primary" 
                        value="Print" 
                        onClick={context.startSendBuffer} buffer={context.shouldSendBuffer ? [ context.currentLabelToBuffer() ] : null} 
                        />
                </Tooltip>,

                <Tooltip key="addToPrintList" placement="top" title="Add to list for bulk printing later">
                    <Button key="addToPrintList" type="primary" onClick={context.handleAddToPrintList}>
                        <DatabaseOutlined />
                        {console.log( "label comparison", label, context.getCurrentLabel() )}
                        {/* TODO: fix */}
                        {context.getPrintLabels().some( el => {
                            console.log("some() checking", `
                            el.id    = ${el.id}
                            el       = ${console.dir(el)}
                            getLabel().id   = ${state.label.id}
                            getLabel()      = ${console.dir(state.label.id)}`); return el.id === state.label.id; } ) ? "Remove from" : "Add to"} Print List
                        </Button>
                </Tooltip>,

                <Tooltip key="save" placement="top" title="Save label for future printing">
                    <Button key="save" type="primary" onClick={handleSave}>
                        <SaveOutlined />
                        Save
                        </Button>
                </Tooltip>,
            ]}
        >
            {description()}
            <br />
            {console.log(`about to redraw 'LabelDraw' with width=${state.width}`)}
            <LabelDraw updateWidth={updateLabelWidthPixels} width={state.width} item={item} label={state.label} />
        </Modal>
    );
};
/**
    80 chars
01234567890123456789012345678901234567890123456789012345678901234567890123456789
    120 chars
012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789
 */