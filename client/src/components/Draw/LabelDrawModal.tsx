import { useContext, useEffect, useState } from "react";
import { useSaveLabelMutation, useEditLabelMutation, GetLabelsDocument, GetItemsDocument, useSetLabelTitleMutation } from "~lib/types/graphql";
import { Modal, Descriptions, Button, Tooltip, message, Input, Alert } from "antd";
import React from "react";
import { LabelDraw } from "./LabelDraw";
import { PrintContext } from "~components/Print/PrintContextHandler";
import { LabelExport } from "~lib/Label/LabelExport";
import { SendBufferButton } from "~components/Print/SendBufferButton";
import { visibleHandler } from "../Item/ItemTable";
import { Item } from "~lib/Item";
import { StopOutlined, DatabaseOutlined, SaveOutlined } from "@ant-design/icons";
import { toTitleCase } from "~lib/UtilityFunctions";
import { useHistory } from "react-router-dom";

type LabelDrawModalProps = {
    visibleHandler: visibleHandler;
} & ( {
    item: Item<any>;
    label?: undefined | null | LabelExport;
} | {
    item?: undefined;
    label: LabelExport;
} );

interface LabelDrawModalState {
    width: number;
    label: LabelExport;
}

export const LabelDrawModal: React.FunctionComponent<LabelDrawModalProps> = ( props: LabelDrawModalProps ) => {
    if ( props.label && ( !( props.label instanceof LabelExport ) ) ) {
        console.error( "label is not an instanceof LabelExport", props.label );
        return <Alert message="label is not an intanceof LabelExport" type="error" />;
    }
    useHistory;

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

    const [ setLabelTitleMutation ] = useSetLabelTitleMutation();

    useEffect( () => {
        if ( printContext.getCurrentLabel() === null ) {
            printContext.setCurrentLabel( state.label );
        }
    }, [] );

    // determine if label is new (already in DB) so that it can be edited or inserted
    // const _labelIsNew: boolean = props.label?.created_at ? false : true;

    const handleCancel = () => {
        props.visibleHandler( null );
    };
    const handleSave = () => {
        let label = printContext.getCurrentLabel();

        if ( label.isCreated ) {
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

    const setTitle = ( title: string ): void => {
        console.log( "Input Blur - Label Name", title );
        let currentLabel = printContext.getCurrentLabel();
        currentLabel.title = title;
        if ( currentLabel.isCreated )
            setLabelTitleMutation( {
                variables: {
                    id: currentLabel.id,
                    title: title
                }
            } ).then( result => {
                message.info( `Saved Successfully title '${ currentLabel.title }' for label ID ${ result.data.update_label_by_pk.id }` );
            } ).catch( error => {
                console.error( "MUTATE ERROR", error, "\nOn Label Object: ", currentLabel );
                message.error( `Failure during save: ${ error }` );
            } ).finally( () => {
                // props.visibleHandler( null );
            } );
    };

    const updateLabelWidthPixels = ( newPx: number ): void => {
        console.log( "updateWidthPixels\n", {
            prior: state.width,
            __new: newPx
        } );
        printContext.getCurrentLabel().width = newPx;
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
    };


    const { visibleHandler, label, item } = props;

    // console.log( 'state.visibleHandler', visibleHandler() );
    // console.log('state.visible', visibleHandler(), state.visible == display.VISIBLE ? true : false)
    // console.log( 'state.item', item );
    return (
        <Modal
            title={label.isCreated ? "Edit Label" : "Create a new label"}
            visible={true}
            onCancel={handleCancel}
            onOk={handleSave}
            width={state.width > 450 ? state.width + 75 : 525}
            afterClose={() => printContext.setCurrentLabel( null )}
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
                            el.id           = ${ el.id }
                            el              = ${ console.dir( el ) }
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
            <Input
                style={{ textAlign: 'center', fontSize: '1.1em' }}
                onBlur={ev => setTitle( ev.currentTarget.value )}
                onPressEnter={ev => setTitle( ev.currentTarget.value )}
                placeholder="Unnamed Label"
                defaultValue={printContext.getCurrentLabel()?.title}
                bordered={false}
            />
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