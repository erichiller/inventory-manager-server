import { KonvaEventObject } from 'konva/types/Node';
import { Component } from 'react';
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

export default class QREditModal extends Component<QREditModalProps> {



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

    updateText ( newValue: CheckboxValueType[]){
        console.log("LabelQR Update Text", newValue);
        this.setState( { checkboxes: newValue as string[]} )
        this.props.changeHandler( {
            properties: newValue
        }, this.props.labelQR );
    }


    render () {
        const { event, visibleHandler, item, changeHandler, labelQR } = this.props;

        console.log( 'this.props.visible', visibleHandler() );
        // console.log('this.state.visible', visibleHandler(), this.state.visible == display.VISIBLE ? true : false)
        console.log( 'this.props.item', item );
        let drawWidth = 325;
        return (
            
        <Modal
            visible
            title={"QR"}
            okText="Add QR"
            onCancel={this.onCancel}
            onOk={() => { this.onClose(); }}
            width={drawWidth + 25}
        >
            {/* {this.props.labelQR.properties.map( key => {
                return `${key}: ${this.props.labelQR.item[key]}\n`
            })} */}
            <br/>
                {console.log("labelQR properties map", this.props.labelQR.properties.map( key => { 
                    return { label: key, value: this.props.labelQR.item[ key ], defaultChecked: true }; 
                } )
                    .filter( n => n.value !== null))}
                <Checkbox.Group 
                style={{
                    display: 'inline-grid',
                    width: '100%',
                    gridTemplateColumns: "repeat(2, 50% [col-start])",
                    padding: '6px'
                }}
                    defaultValue={this.props.labelQR.properties.filter( n => n !== null )}
                    options={this.props.labelQR.itemProperties.map( key => { 
                        return { 
                            label: key,
                            value: key,
                            // value: this.props.labelQR.item[ key ]
                        }; } )
                    .filter( n => n.value !== null)}
                    onChange={newValue => this.updateText(newValue)}
                    />
                <br />
                <QRCanvas width={drawWidth} labelQR={labelQR} changeHandler={changeHandler} />
        </Modal>
        );
    }
}

interface QRCanvasProps {
    width: number;
    labelQR: LabelQR;
    changeHandler: UpdateLabelQR;
}

type UpdateLabelQR = ( newValue: Partial<LabelQR>, labelQR: LabelQR ) => void;
type CommitLabelQR = ( labelQR: LabelQR ) => void;

class QRCanvas extends Component<QRCanvasProps> {

    textToEncode = (): string => {
        if ( this.props.labelQR.properties){
            return this.props.labelQR.encodeText();
        }
        message.warn( "QR code without item is currently not supported." );
        return "";
    };

    drawBwip() {
        let options = 
        bwipjs( 'tempCanvas', {
            bcid: 'datamatrix',       // Barcode type
            text: this.textToEncode(),    // Text to encode
            scale: 1,               // 3x scaling factor
            // width: this.props.width,
            height: 20,              // Bar height, in millimeters
            monochrome: true,
            
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


    componentDidMount () {
        console.log( "QREditModal componentDidMount" );
        this.drawBwip();
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
        this.drawBwip();
        return (
            <DrawContext.Consumer>
                {( { commitLabelQR } ) => {
                    return <React.Fragment>
                        <canvas
                            ref={this.setCanvasRef}
                            style={{
                                // border: '1px solid black', 
                                // width: '750px' 
                                margin: '0px auto',
                                display: 'block'
                            }} id="tempCanvas"></canvas>

                        <pre>{this.textToEncode()}</pre>
                        </React.Fragment>;
                }}
            </DrawContext.Consumer>
        );
    }
}