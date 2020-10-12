import type { KonvaEventObject } from 'konva/types/Node';
import { Component, useEffect, useContext, useState, Ref, MouseEvent } from 'react';
import { DISPLAY } from '~lib/types/enums';
import React from 'react';
import { Modal, message, Checkbox, Button } from 'antd';
import { Item } from '~lib/Item';
import bwipjs from 'bwip-js';
import { LabelQR } from '~lib/LabelConstituent';
import { DrawContextT } from './LabelDraw';
import { CheckboxValueType } from 'antd/lib/checkbox/Group';
import { AntTreeNode } from 'antd/lib/tree';
import DraggableModal from '../Shared/DraggableModal';

interface QREditModalProps {
    event?: KonvaEventObject<MouseEvent>;
    item?: Item<any>;
    labelQR: LabelQR;
    visibleHandler: ( display?: DISPLAY ) => void;
    changeHandler: ( newValue: any, labelQR: LabelQR ) => void;
}



export const QREditModal: React.FC<QREditModalProps> = ( props ) => {


    const [ modalRef, setModalRef ] = useState<any>();
    const onCancel = () => {
        /// REMOVE ELEMENT /// REVERT ///
        // BUG: this removes all labelQR!
        props.changeHandler( false, props.labelQR );
        onClose();
    };

    const onClose = () => {
        props.visibleHandler( DISPLAY.HIDDEN );
    };

    const updateText = ( newValue: CheckboxValueType[] ) => {
        console.log( "LabelQR Update Text\n", newValue );
        props.changeHandler( {
            properties: newValue
        }, props.labelQR );
    };


    useEffect( () => {
        // const el = props.labelQR.setCanvas( textToEncode(), props.mmHeight );
        // props.changeHandler( {
        //     dataURL: el.toDataURL( 'image/png' ),
        //     canvasElement: el
        // }, props.labelQR );
        // const el = props.labelQR.svg;
        // console.log( { title: 'QRCanvas svg element', el, textToEndcode: textToEncode()});
        // if ( ! el ){ console.warn('QRCanvas element is invalid', {el}); return; }
        // props.labelQR.setCanvas();
        props.changeHandler( {
            dataURL: props.labelQR.svgDataURL
            // dataURL: el.toDataURL( 'image/svg' ),
            // canvasElement: el
        }, props.labelQR );
    } );


    // const { event, visibleHandler, item, changeHandler, labelQR } = props;

    console.log( 'props.visible', props.visibleHandler() );
    // console.log('state.visible', visibleHandler(), state.visible == display.VISIBLE ? true : false)
    console.log( 'props.item', props.item );
    let pxWidth = 375;
    let mmHeight = 20;

    // type mouseMoveOriginT = { x: number; y: number; top: number, left: number; } | false;
    // type modalPositionT = { top: number; left: number | false; };

    // const [ mouseMoveOrigin, setMouseMoveOrigin ] = useState<mouseMoveOriginT>( false );
    // const [ modalPosition, setModalPosition ] = useState<modalPositionT>( { top: 100, left: false } );

    // let mouseMoveOrigin: mouseMoveOriginT = false;

    // let modalPosition: modalPositionT = { top: 100, left: false };

    // const setMouseMoveOrigin =  v => mouseMoveOrigin = v;
    // const setModalPosition = p => modalPosition = p;






    // const foo: EventListener = () => void;
    // const mouseMove = ( evt ) =>{
    //     let ev = ( evt as MouseEvent )
    //     console.log( { in: 'title', mouseMoveOrigin, modalRef, action: 'onMouseMove', ev } );
    //         if ( mouseMoveOrigin ) {
    //             setModalPosition( {
    //                 top: mouseMoveOrigin.y - ev.clientY + mouseMoveOrigin.top,
    //                 left: mouseMoveOrigin.x - ev.clientX + mouseMoveOrigin.left,
    //             } );
    //         }
    //     // ( modalRef as HTMLElement ).style.top = '50px';
    //     ( modalRef as any).props.style.top = '50px';
    // }
    // const mouseUp = ( evt ) => {
    //     let ev = (evt as MouseEvent);
    //     setMouseMoveOrigin( false );
    //     window.removeEventListener( 'mousemove', mouseMove );
    //     window.removeEventListener( 'mouseup', mouseUp );
    // }

        // console.log( "labelQR properties map", props.labelQR.properties.map( key => {
        //     return { label: key, value: props.labelQR.item[ key ], defaultChecked: true };
        // } ).filter( n => n.value !== null ) );
    return (

        <DraggableModal
            visible
            okText="Add QR"
            onCancel={onCancel}
            onOk={() => { onClose(); }}
            width={pxWidth + 25}
        >
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
                    };
                } )
                    .filter( n => n.value !== null )}
                onChange={newValue => updateText( newValue )}
            />
            <br />
            <QRCanvas mmHeight={mmHeight} labelQR={props.labelQR} changeHandler={props.changeHandler} />
        </DraggableModal>
    );
};

interface QRCanvasProps {
    mmHeight: number;
    labelQR: LabelQR;
    changeHandler: UpdateLabelQR;
}

type UpdateLabelQR = ( newValue: Partial<LabelQR>, labelQR: LabelQR ) => void;


export const QRCanvas: React.FC<QRCanvasProps> = ( props ) => {

    // const textToEncode = (): string => {
    //     if ( props.labelQR.properties ) {
    //         return props.labelQR.encodedText;
    //     }
    //     message.warn( "QR code without item is currently not supported." );
    //     return "";
    // };

    // useEffect( () => {
    //     // const el = props.labelQR.setCanvas( textToEncode(), props.mmHeight );
    //     // props.changeHandler( {
    //     //     dataURL: el.toDataURL( 'image/png' ),
    //     //     canvasElement: el
    //     // }, props.labelQR );
    //     // const el = props.labelQR.svg;
    //     // console.log( { title: 'QRCanvas svg element', el, textToEndcode: textToEncode()});
    //     // if ( ! el ){ console.warn('QRCanvas element is invalid', {el}); return; }
    //     // props.labelQR.setCanvas();
    //     props.changeHandler( {
    //         dataURL: props.labelQR.svgDataURL
    //         // dataURL: el.toDataURL( 'image/svg' ),
    //         // canvasElement: el
    //     }, props.labelQR );
    // } );

    return <div style={{ textAlign: 'center' }}>
        <img
            src={props.labelQR.svgDataURL} />
        {/* <canvas
            // ref={setCanvasRef}
            style={{
                // border: '1px solid black', 
                // width: '750px' 
                margin: '0px auto',
                display: 'block'
            }} id="tempCanvas"></canvas> */}

        {/* <pre>{textToEncode()}</pre>
        <pre>{JSON.stringify(textToEncode(), null, 2)}</pre>
        <br />
        <pre>{props.labelQR.dataURL}</pre>
        <br />
        <pre>{JSON.stringify( props.labelQR.properties, null, 2 )}</pre> */}
    </div>;
};