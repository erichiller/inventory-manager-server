import { KonvaEventObject } from 'konva/types/Node';
import { Component } from 'react';
import { Form, Input, Radio, AutoComplete } from 'antd';
import { FormComponentProps } from 'antd/lib/form';
import { display } from '../ItemTable';
import React from 'react';
import { Modal } from 'antd';
import { ItemsHardwareFastenerBolt, withItemsHardwareFastenerBolt, ItemsHardwareFastenerBoltComponent } from '../../types/graphql';
import { useQuery } from '@apollo/react-hooks';
import CheckboxGroup from 'antd/lib/checkbox/Group';
import { LabelText, DrawContext, FormatOptionsT, LabelImage, LabelQR } from '../ItemPrint';
import bwipjs from 'bwip-js';
import { Canvas } from 'konva/types/Canvas';
import e from 'express';

interface QREditModalProps {
    event?: KonvaEventObject<MouseEvent>
    item?: ItemsHardwareFastenerBolt
    labelQR: LabelQR
    visibleHandler: ( display?: display ) => void
    changeHandler: ( newValue: any, labelQR: LabelQR ) => void
}

export default class QREditModal extends Component<QREditModalProps> {

    onCancel = () => {
        /// REMOVE ELEMENT /// REVERT ///
        this.onClose();
    }

    onClose = () => {
        this.props.visibleHandler( display.HIDDEN );
    }

    // componentDidMount() { 
    //     console.log("QREditModal componentDidMount")
    //     bwipjs( 'tempCanvas', {
    //         bcid: 'code128',       // Barcode type
    //         text: '0123456789',    // Text to encode
    //         scale: 30,               // 3x scaling factor
    //         height: 10,              // Bar height, in millimeters
    //         // includetext: true,            // Show human-readable text
    //         // textxalign: 'center',        // Always good to set this
    //     }, function ( err, cvs ) {
    //             if ( err ) {
    //             console.error(err, cvs)
    //             // Decide how to handle the error
    //             // `err` may be a string or Error object
    //         } else {
    //             // Nothing else to do in this example...
    //         }
    //     } );
    // }


    render () {
        const { event, visibleHandler, item, changeHandler, labelQR } = this.props

        console.log( 'this.props.visible', visibleHandler() )
        // console.log('this.state.visible', visibleHandler(), this.state.visible == display.VISIBLE ? true : false)
        console.log( 'this.props.item', item )
        let drawWidth = 725;
        return (
            
        <Modal
            visible
            title={"QR"}
            okText="Do"
            onCancel={this.onCancel}
            onOk={() => { this.onClose(); }}
            width={drawWidth + 25}
        >
            {/* <canvas id="tempCanvas"></canvas> */}
                <QRCanvas width={drawWidth} labelQR={labelQR} changeHandler={changeHandler} />
        </Modal>
        )
        return (
            <DrawContext.Consumer>
                {( { commitLabelQR, stageRef } ) => {
                    return <Modal
                        visible
                        title={"QR"}
                        okText="Do"
                        onCancel={this.onCancel}
                        onOk={() => { commitLabelQR( labelQR ); this.onClose(); }}
                        width={drawWidth + 25}
                    >
                        <canvas id="tempCanvas"></canvas>
                    </Modal>
                }}
            </DrawContext.Consumer>
        )
    }
}


interface QRCanvasProps {
    width: number
    labelQR: LabelQR
    changeHandler: UpdateLabelQR
}

type UpdateLabelQR = ( newValue: Partial<LabelQR>, labelQR: LabelQR ) => void;
type CommitLabelQR = ( labelQR: LabelQR ) => void;

class QRCanvas extends Component<QRCanvasProps> {

    componentDidMount () {
        console.log( "QREditModal componentDidMount" )
        bwipjs( 'tempCanvas', {
            bcid: 'datamatrix',       // Barcode type
            text: '0123456789\nabcdefghi',    // Text to encode
            scale: 1,               // 3x scaling factor
            // width: this.props.width,
            height: 10,              // Bar height, in millimeters
            monochrome: true
            // includetext: true,            // Show human-readable text
            // textxalign: 'center',        // Always good to set this
        }, ( err, cvs ) => {
            if ( err ) {
                console.error( err, cvs )
                // Decide how to handle the error
                // `err` may be a string or Error object
            } else {
                // convert to dataURL
                // this.setState({
                //     canvasDataURL: this.state.canvasElement.toDataURL( 'image/png' )
                // })
            }
        } );
    }

    setCanvasRef = ( el: HTMLCanvasElement): void => {
        console.log("setCanvasRef", el)
        if ( el ) {
            el.toBlob
            this.setState( {
                canvasElement: el,
                canvasDataURL: el.toDataURL( 'image/png' )
            } )
            // this.props.labelQR.dataURL = el.toDataURL( 'image/png' );
            this.props.changeHandler( {
                dataURL: el.toDataURL( 'image/png' ),
                canvasElement: el
            }, this.props.labelQR );

        }
    }

    render () {
        return (
            <DrawContext.Consumer>
                {( { commitLabelQR } ) => {
                    return <canvas
                        ref={this.setCanvasRef}
                        style={{ 
                            // border: '1px solid black', 
                            // width: '750px' 
                        }} id="tempCanvas"></canvas>
                }}
            </DrawContext.Consumer>
        )
    }
}