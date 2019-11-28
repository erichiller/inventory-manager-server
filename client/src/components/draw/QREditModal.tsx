import { KonvaEventObject } from 'konva/types/Node';
import { Component } from 'react';
import { DISPLAY } from '../../types/enums';
import React from 'react';
import { Modal, message } from 'antd';
import { Item } from '../../types/graphql';
import bwipjs from 'bwip-js';
import { LabelQR } from '../../lib/LabelConstituent';
import { DrawContext } from './LabelDraw';

interface QREditModalProps<T> {
    event?: KonvaEventObject<MouseEvent>;
    item?: Item;
    labelQR: LabelQR<T>;
    visibleHandler: ( display?: DISPLAY ) => void;
    changeHandler: ( newValue: any, labelQR: LabelQR<T> ) => void;
}

export default class QREditModal<T> extends Component<QREditModalProps<T>> {

    onCancel = () => {
        /// REMOVE ELEMENT /// REVERT ///
        this.onClose();
    }

    onClose = () => {
        this.props.visibleHandler( DISPLAY.HIDDEN );
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
        const { event, visibleHandler, item, changeHandler, labelQR } = this.props;

        console.log( 'this.props.visible', visibleHandler() );
        // console.log('this.state.visible', visibleHandler(), this.state.visible == display.VISIBLE ? true : false)
        console.log( 'this.props.item', item );
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
        );
        // return (
        //     <DrawContext.Consumer>
        //         {( { commitLabelQR, stageRef } ) => {
        //             return <Modal
        //                 visible
        //                 title={"QR"}
        //                 okText="Do"
        //                 onCancel={this.onCancel}
        //                 onOk={() => { commitLabelQR( labelQR ); this.onClose(); }}
        //                 width={drawWidth + 25}
        //             >
        //                 <canvas id="tempCanvas"></canvas>
        //             </Modal>;
        //         }}
        //     </DrawContext.Consumer>
        // );
    }
}

interface QRCanvasProps<T> {
    width: number;
    labelQR: LabelQR<T>;
    changeHandler: UpdateLabelQR;
}

type UpdateLabelQR = ( newValue: Partial<LabelQR<any>>, labelQR: LabelQR<any> ) => void;
type CommitLabelQR<T> = ( labelQR: LabelQR<T> ) => void;

class QRCanvas<T> extends Component<QRCanvasProps<T>> {

    textToEncode = (): string => {
        if (this.props.labelQR.properties){
            return this.props.labelQR.properties.map( p => `${ p }` ).join( '\n' );
        }
        message.warn("QR code without item is currently not supported.")
        return "";

    }

    componentDidMount () {
        console.log( "QREditModal componentDidMount" );
        bwipjs( 'tempCanvas', {
            bcid: 'datamatrix',       // Barcode type
            text: this.textToEncode() ,    // Text to encode
            scale: 1,               // 3x scaling factor
            // width: this.props.width,
            height: 10,              // Bar height, in millimeters
            monochrome: true
            // includetext: true,            // Show human-readable text
            // textxalign: 'center',        // Always good to set this
        }, ( err, cvs ) => {
            if ( err ) {
                console.error( err, cvs );
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
        console.log("setCanvasRef", el);
        if ( el ) {
            el.toBlob;
            this.setState( {
                canvasElement: el,
                canvasDataURL: el.toDataURL( 'image/png' )
            } );
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
                        }} id="tempCanvas"></canvas>;
                }}
            </DrawContext.Consumer>
        );
    }
}