import { useContext } from "react";
import { DISPLAY } from '../../types/enums';
import { Item, Label, useSaveLabelMutation, useEditLabelMutation, GetLabelsDocument } from "../../types/graphql";
import { Modal, Descriptions, Button, Icon, Tooltip, message } from "antd";
import React from "react";
import { LabelDraw } from "./LabelDraw";
import { PrintContext } from "../print/PrintContextHandler";
import { LabelExport } from "../../lib/LabelConstituent";
import SendBufferButton from "../print/SendBufferButton";

type LabelDrawModalProps = {
    visibleHandler: ( d?: DISPLAY ) => boolean;
    visible: DISPLAY;
} & ( {
    item: Item;
    label?: undefined;
} | {
    item?: undefined;
    label: Label;
} );

export const LabelDrawModal: React.FunctionComponent<LabelDrawModalProps> = ( props: LabelDrawModalProps ) => {

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

    let _label: LabelExport<any>;
    // determine if label is new (already in DB) so that it can be edited or inserted
    const _labelIsNew: boolean = props.label ? false : true;
    const getLabel = (): LabelExport<any> => {
        if ( !_label ) {
            _label = props.label ? new LabelExport( props.label ) : new LabelExport();
        }
        return _label;
    };

    const handleCancel = () => {
        props.visibleHandler( DISPLAY.HIDDEN );
    };
    const handleSave = () => {
        let label = context.getCurrentLabel();

        if ( _labelIsNew ) {
            saveLabelMutation( {
                variables: {
                    id: label.id,
                    content: label.content,
                    height: label.height,
                    is_template: label.is_template,
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
                props.visibleHandler( DISPLAY.HIDDEN );
            } );
        } else {
            editLabelMutation( {
                variables: {
                    content: label.content,
                    height: label.height,
                    id: label.id,
                    is_template: label.is_template,
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
                props.visibleHandler( DISPLAY.HIDDEN );
            } );

        }
    };

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


    const { visibleHandler, visible, label, item } = props;

    console.log( 'state.visibleHandler', visibleHandler() );
    // console.log('state.visible', visibleHandler(), state.visible == display.VISIBLE ? true : false)
    // console.log( 'state.item', item );
    // if ( visible)
    // console.log( 'item keys', Object.keys( item ) );
    // let drawWidth = 725;
    // let drawHeight = 225;
    let drawWidth = 48;
    let drawHeight = 48;
    return (
        <Modal
            visible={visible == DISPLAY.VISIBLE}
            title="Create a new label"
            onCancel={handleCancel}
            onOk={handleSave}
            width={drawWidth > 500 ? drawWidth + 25 : 525}
            footer={[
                <Tooltip key="cancel" placement="top" title="Return to Items">
                    <Button key="cancel" type="danger" onClick={handleCancel}>
                        <Icon type="stop" />
                        Cancel
                        </Button>
                </Tooltip >,

                <Tooltip key="print" placement="top" title="Send to Label Maker">
                    <SendBufferButton type="primary" value="Print" onClick={context.startSendBuffer} buffer={context.shouldSendBuffer ? [ context.currentLabelToBuffer() ] : null} />
                </Tooltip>,

                <Tooltip key="addToPrintList" placement="top" title="Add to list for bulk printing later">
                    <Button key="addToPrintList" type="primary" onClick={context.handleAddToPrintList}>
                        <Icon type="database" />
                        {console.log( "label comparison", label, context.getCurrentLabel() )}
                        {context.getPrintLabels().includes( getLabel() ) ? "Remove from" : "Add to"} Print List
                        </Button>
                </Tooltip>,

                <Tooltip key="save" placement="top" title="Save label for future printing">
                    <Button key="save" type="primary" onClick={handleSave}>
                        <Icon type="save" />
                        Save
                        </Button>
                </Tooltip>,
            ]}
        >
            {description()}
            <br />
            <LabelDraw width={drawWidth} height={drawHeight} item={item} label={getLabel()} />
        </Modal>
    );
};
/**
    80 chars
01234567890123456789012345678901234567890123456789012345678901234567890123456789
    120 chars
012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789
 */