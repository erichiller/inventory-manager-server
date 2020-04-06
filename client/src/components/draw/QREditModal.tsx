import { KonvaEventObject } from 'konva/types/Node';
import { Component, useEffect, useContext } from 'react';
import { DISPLAY } from '../../lib/types/enums';
import React from 'react';
import { Modal, message, Checkbox } from 'antd';
import { Item } from '../../lib/item';
import bwipjs from 'bwip-js';
import { LabelQR } from '../../lib/LabelConstituent';
import { DrawContext } from './LabelDraw';
import { CheckboxValueType } from 'antd/lib/checkbox/Group';

interface QREditModalProps {
    event?: KonvaEventObject<MouseEvent>;
    item?: Item<any>;
    labelQR: LabelQR;
    visibleHandler: ( display?: DISPLAY ) => void;
    changeHandler: ( newValue: any, labelQR: LabelQR ) => void;
}



export const QREditModal: React.FC<QREditModalProps> = ( props ) => {



    const onCancel = () => {
        /// REMOVE ELEMENT /// REVERT ///
        props.changeHandler( false, props.labelQR );
        onClose();
    };

    const onClose = () => {
        props.visibleHandler( DISPLAY.HIDDEN );
    };

    const updateText = ( newValue: CheckboxValueType[] ) => {
        console.log( "LabelQR Update Text", newValue );
        // setState( { checkboxes: newValue as string[] } );
        props.changeHandler( {
            properties: newValue
        }, props.labelQR );
    };


    const { event, visibleHandler, item, changeHandler, labelQR } = props;

    console.log( 'props.visible', visibleHandler() );
    // console.log('state.visible', visibleHandler(), state.visible == display.VISIBLE ? true : false)
    console.log( 'props.item', item );
    let pxWidth = 325;
    let mmHeight = 20;
    return (

        <Modal
            visible
            title={"QR"}
            okText="Add QR"
            onCancel={onCancel}
            onOk={() => { onClose(); }}
            width={pxWidth + 25}
        >
            {/* {props.labelQR.properties.map( key => {
                return `${key}: ${props.labelQR.item[key]}\n`
            })} */}
            <br />
            {console.log( "labelQR properties map", props.labelQR.properties.map( key => {
                return { label: key, value: props.labelQR.item[ key ], defaultChecked: true };
            } )
                .filter( n => n.value !== null ) )}
            <Checkbox.Group
                style={{
                    display: 'inline-grid',
                    width: '100%',
                    gridTemplateColumns: "repeat(2, 50% [col-start])",
                    padding: '6px'
                }}
                defaultValue={props.labelQR.properties.filter( n => n !== null )}
                options={props.labelQR.itemProperties.map( key => {
                    return {
                        label: key,
                        value: key,
                        // value: props.labelQR.item[ key ]
                    };
                } )
                    .filter( n => n.value !== null )}
                onChange={newValue => updateText( newValue )}
            />
            <br />
            <QRCanvas mmHeight={mmHeight} labelQR={labelQR} changeHandler={changeHandler} />
        </Modal>
    );
};

interface QRCanvasProps {
    mmHeight: number;
    labelQR: LabelQR;
    changeHandler: UpdateLabelQR;
}

type UpdateLabelQR = ( newValue: Partial<LabelQR>, labelQR: LabelQR ) => void;


export const QRCanvas: React.FC<QRCanvasProps> = ( props ) => {

    const textToEncode = (): string => {
        if ( props.labelQR.properties ) {
            return props.labelQR.encodeText();
        }
        message.warn( "QR code without item is currently not supported." );
        return "";
    };

    useEffect( () => {
        const el = props.labelQR.setCanvas( textToEncode(), props.mmHeight );
        props.changeHandler( {
            dataURL: el.toDataURL( 'image/png' ),
            canvasElement: el
        }, props.labelQR );
    } );
    // TODO: convert to React.FunctionComponent
    // TODO: convert to drawing SVG

    return <React.Fragment>
        <canvas
            // ref={setCanvasRef}
            style={{
                // border: '1px solid black', 
                // width: '750px' 
                margin: '0px auto',
                display: 'block'
            }} id="tempCanvas"></canvas>

        <pre>{textToEncode()}</pre>
    </React.Fragment>;
};