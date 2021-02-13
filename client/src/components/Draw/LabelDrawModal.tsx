import { useContext, useEffect, useState } from "react";
import { useSaveLabelMutation, useEditLabelMutation, GetLabelsDocument, GetItemDocument, GetItemsDocument } from "~lib/types/graphql";
import { Modal, Descriptions, Button, Tooltip, message, Input } from "antd";
import React from "react";
import { LabelDraw } from "./LabelDraw";
import { PrintContext } from "~components/Print/PrintContextHandler";
import { LabelExport } from "~lib/LabelExport";
import { SendBufferButton } from "~components/Print/SendBufferButton";
import { visibleHandler } from "../Item/ItemTable";
import { Item } from "~lib/Item";
import { StopOutlined, DatabaseOutlined, SaveOutlined } from "@ant-design/icons";
import { toTitleCase } from "~lib/UtilityFunctions";
import { Label } from "~lib/Item/Item";

type LabelDrawModalProps = {
    visibleHandler: visibleHandler;
} & ( {
    item: Item<any>;
    label?: undefined | null | Label;
} | {
    item?: undefined;
    label: Label;
} );

interface LabelDrawModalState {
    width: number;
    label: LabelExport;
}

export const LabelDrawModal: React.FunctionComponent<LabelDrawModalProps> = ( props: LabelDrawModalProps ) => {
    const [ state, setState ] = useState<LabelDrawModalState>(
        {
            width: props.label && props.label.width ? props.label.width : LabelExport.DEFAULT_WIDTH,
            label: props.label ? new LabelExport( props.label ) : new LabelExport()
        }
    );
    const printContext = useContext( PrintContext );
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

    useEffect( () => {
        if ( printContext.getCurrentLabel() === null ) {
            printContext.setCurrentLabel( state.label );
        }
    }, [] );

    // determine if label is new (already in DB) so that it can be edited or inserted
    const _labelIsNew: boolean = props.label?.created_at ? false : true;

    const handleCancel = () => {
        props.visibleHandler( null );
    };
    const handleSave = () => {
        let label = printContext.getCurrentLabel();

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
                    { query: GetLabelsDocument },
                    // {
                    //     query: GetItemDocument,
                    //     variables: {
                    //         id: label.item_id
                    //     }
                    // },
                    { query: GetItemsDocument }
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
                    { query: GetLabelsDocument },
                    {
                        query: GetItemDocument,
                        variables: {
                            id: label.item_id
                        }
                    },
                    { query: GetItemsDocument }
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
        } );
        // canvas.width = newPx;
        // }
        setState( {
            width: newPx,
            label: state.label
        } );

    };

    const description = () => {
        const { item, label } = props;
        if ( props.item ) {
            console.log( { item, keys: Object.getOwnPropertyNames( item ) } );
            return <div>
                <h1>{item.name}</h1>
                <Descriptions className="LabelPropertiesDescription" title="Properties" column={1} bordered={true}>
                    {item.labelProps.map( key => {
                        key = key as string;
                        let value = item[ key ];
                        if ( ![ "__typename" ].includes( key ) && value ) {
                            let stringValue = [ "string", "number" ].includes( typeof value ) ? value :
                                typeof value === typeof {} ? `${ JSON.stringify( value, null, 2 ) }` :
                                    'error';
                            console.log( `property of item ${ key } = ${ value }` );
                            return <Descriptions.Item key={key} label={toTitleCase( key )}><pre>{stringValue}</pre></Descriptions.Item>;
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
            title={_labelIsNew ? "Create a new label" : "Edit Label"}
            visible={true}
            onCancel={handleCancel}
            onOk={handleSave}
            width={state.width > 450 ? state.width + 75 : 525}
            footer={[
                <Tooltip key="cancel" placement="top" title="Return to Items">
                    <Button key="cancel" danger={true} onClick={handleCancel}>
                        <StopOutlined />
                        Cancel
                        </Button>
                </Tooltip >,

                <Tooltip key="print" placement="top" title="Send to Label Maker">
                    <SendBufferButton
                        key="SendBufferButton_Print"
                        type="primary"
                        value="Print"
                        startSendBuffer={printContext.startSendBuffer}
                        buffer={printContext.shouldSendBuffer ? [ printContext.currentLabelToBuffer() ] : null}
                    />
                </Tooltip>,

                <Tooltip key="addToPrintList" placement="top" title="Add to list for bulk printing later">
                    <Button key="addToPrintList" type="primary" onClick={printContext.handleAddToPrintList}>
                        <DatabaseOutlined />
                        {console.log( "label comparison", label, printContext.getCurrentLabel() )}
                        {/* TODO: fix */}
                        {printContext.getPrintLabels().some( el => {
                            console.log( "some() checking", `
                            el.id    = ${ el.id }
                            el       = ${ console.dir( el ) }
                            getLabel().id   = ${ state.label.id }
                            getLabel()      = ${ console.dir( state.label.id ) }` ); return el.id === state.label.id;
                        } ) ? "Remove from" : "Add to"} Print List
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
            {console.log( `about to redraw 'LabelDraw' with width=${ state.width }` )}
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