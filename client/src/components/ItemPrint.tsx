
import React, { Component } from 'react';
import { render } from 'react-dom';

import Konva from 'konva';
import { Stage, Layer, Star, Text, Image, Rect } from 'react-konva';

import { withItemsHardwareFastenerBolt, ItemsHardwareFastenerBoltProps, Items, ItemsHardwareFastenerBolt } from '../types/graphql';
import { Modal, Descriptions } from 'antd';
import { display } from './ItemTable';
import { DrawContextMenu } from './draw/DrawContextMenu';
import { KonvaEventObject } from 'konva/types/Node';
import { Button } from 'antd';
import DrawEditText from './draw/DrawEditText';
import DrawAddImage from './draw/DrawAddImage';
import useImage from 'use-image';

import { v4 as UUIDv4 } from 'uuid';
import QREditModal from './draw/QREditModal';
import SendBufferButton from './print/SendBufferButton';
import { uint8 } from '../types/uint8';
import Spin from 'antd/es/spin';
import {buf2hex} from '../lib/helpers';

interface ItemPrintProps { }
interface ItemPrintState { }


export default withItemsHardwareFastenerBolt()(
    class ItemTable extends React.Component<ItemsHardwareFastenerBoltProps<ItemPrintProps>, ItemPrintState> {
    }
)

interface LabelExport {
    texts: LabelText[]
    images: LabelImage[]
    qrs: LabelQR[]
}

interface LabelDrawModalProps {
    visibleHandler: ( d?: display ) => boolean
    item: ItemsHardwareFastenerBolt
    visible: display
}
interface LabelDrawModalState {
    visible: display
}

export class LabelDrawModal extends Component<LabelDrawModalProps, LabelDrawModalState> {

    onCancel = () => {
        this.props.visibleHandler( display.HIDDEN );
    }
    onCreate: () => {

    }


    render () {
        const { visible, visibleHandler, item } = this.props

        console.log( 'this.state.visible', visibleHandler() )
        // console.log('this.state.visible', visibleHandler(), this.state.visible == display.VISIBLE ? true : false)
        console.log( 'this.state.item', item )
        // if ( visible)
        console.log( 'item keys', Object.keys( item ) )
        // let drawWidth = 725;
        // let drawHeight = 225;
        let drawWidth = 48;
        let drawHeight = 48;
        return (
            <Modal
                visible={visible == display.VISIBLE}
                title="Create a new project"
                okText="Create"
                onCancel={this.onCancel}
                onOk={this.onCreate}
                width={drawWidth > 500 ? drawWidth + 25 : 525 }
            >
                {item.name}
                <Descriptions title="Properties" column={1} bordered={true}>
                    {Object.keys( item ).map( key => {
                        let value = item[ key ];
                        if ( ![ "__typename" ].includes( key ) && value ) {
                            console.log( `property of item ${ key } = ${ value }` );
                            return <Descriptions.Item key={key} label={key}>{value}</Descriptions.Item>
                            // <p>1</p>
                        }
                    } )}
                </Descriptions>
                <br />
                <LabelDraw width={drawWidth} height={drawHeight} item={item} />
            </Modal>
        )
    }
}








class LabelConstituent {
    uuid: UUIDStringT
    x: number
    y: number
    constructor () {
        this.uuid = UUIDv4();
        this.x = 0;
        this.y = 0;
    }

}


type UUIDStringT = string;
export type FormatOptionsT = "bold" | "italic" | "underline";

export class LabelText extends LabelConstituent {
    text: string
    _fontSize: number
    bold: boolean
    italic: boolean
    underline: boolean


    get fontSize (): number {
        return this._fontSize;
    }
    set fontSize ( value: number ) {
        if ( typeof value == "string" ) {
            value = parseInt( value )
        }
        this._fontSize = value;
    }

    get position () {
        return [ this.x, this.y ]
    }
    get signature () {
        return `${ this.text }-${ this.fontSize }-${ this.bold }-${ this.italic }-${ this.underline }-${ this.x }-${ this.y }`
    }
    get formatOptions (): FormatOptionsT[] {
        let opts: FormatOptionsT[] = []
        if ( this.bold ) { opts.push( "bold" ) };
        if ( this.italic ) { opts.push( "italic" ) };
        if ( this.underline ) { opts.push( "underline" ) };

        return opts;
    }
}

export class LabelImage extends LabelConstituent {
    url: string
    width: number
    height: number
}


export class LabelQR extends LabelConstituent {
    canvasElement: HTMLCanvasElement
    dataURL: string
}



interface ChangedValueTextI {
    text?: ChangedValueI
    format_options?: ChangedValueI
    text_size?: ChangedValueI
}

interface ChangedValueI {
    dirty: boolean
    errors?: any
    name: string
    touched: boolean
    validating: boolean
    value: any
}

interface LabelDrawProps {
    height?: number;
    width?: number;
    item: ItemsHardwareFastenerBolt
}


type IKonvaEventHandler = ( d: boolean | KonvaEventObject<PointerEvent> ) => void;
type IHtmlEventHandler = ( d: boolean | display | React.MouseEvent<HTMLElement, MouseEvent> ) => void;

interface LabelDrawState {
    displayContextMenu: IKonvaEventHandler
    displayContextMenuStatus: boolean
    displayContextMenuPosition?: [ number, number ]
    displayEditTextModal: IHtmlEventHandler | display
    displayEditTextModalStatus: display
    displayImageSelectModal: IHtmlEventHandler | display
    displayImageSelectModalStatus: display
    displayQREditModal: IHtmlEventHandler | display
    displayQREditModalStatus: display
    contextMenuLabelText: LabelText
    item: ItemsHardwareFastenerBolt
    texts: LabelText[]
    images: LabelImage[]
    qrs: LabelQR[]
    uncommittedText: LabelText
    uncommittedImage: LabelImage
    uncommittedQR: LabelQR
    commitLabelText: ( labelText: LabelText ) => void;
    deleteLabelText: ( labelText: LabelText ) => void;
    commitLabelImage: ( labelImage: LabelImage ) => void;
    commitLabelQR: ( labelQR: LabelQR ) => void;
    stageRef: Stage;
    shouldSendBuffer: boolean;
}
interface DrawContext extends Omit<LabelDrawState, "item"> {
    item?: ItemsHardwareFastenerBolt
}

const DrawContextStateDefault: LabelDrawState = {
    displayContextMenu: () => { },
    displayContextMenuStatus: false,
    displayContextMenuPosition: undefined,
    displayEditTextModal: () => { },
    displayEditTextModalStatus: null,
    displayQREditModal: () => { },
    displayQREditModalStatus: null,
    contextMenuLabelText: null,
    displayImageSelectModal: () => { },
    displayImageSelectModalStatus: null,
    // displayEditTextModalStatus: display.HIDDEN,
    // displayEditTextModalStatus: display.HIDDEN,
    item: null,
    texts: [],
    images: [],
    qrs: [],
    uncommittedText: null,
    uncommittedImage: null,
    uncommittedQR: null,
    commitLabelImage: () => { },
    commitLabelText: () => { },
    deleteLabelText: () => { },
    commitLabelQR: () => { },
    stageRef: null,
    shouldSendBuffer: null
}
export const DrawContext = React.createContext<DrawContext>( DrawContextStateDefault );

export type PixelMap = Array<Array<Array<uint8>>>;


export class LabelDraw extends Component<LabelDrawProps, LabelDrawState> {

    displayContextMenu = ( display: KonvaEventObject<PointerEvent> ) => {
        console.log( "displayContextMenu()", display );
        if ( display ) {
            display.evt.preventDefault();
            this.setState( {
                item: this.props.item,
                displayContextMenuStatus: true,
                contextMenuLabelText: display.currentTarget.attrs.textObject,
                displayContextMenuPosition: [
                    display.evt.clientX,
                    display.evt.clientY
                ]
            } )
        } else {
            this.setState( { displayContextMenuStatus: false } );
        }
    }

    displayEditTextModal = ( d: React.MouseEvent<HTMLElement, MouseEvent> | display ): display => {
        if ( ( d as display ) === display.HIDDEN ) {
            this.setState( {
                displayEditTextModalStatus: display.HIDDEN
            } )
            // if ( !(d as dReact.MouseEvent<HTMLElement, MouseEvent>) && d === display.HIDDEN ){
            return display.HIDDEN;
        }
        if ( !d ) {
            return this.state.displayEditTextModalStatus ? display.VISIBLE : display.HIDDEN;
        }
        console.log( "displayEditTextModal()", display );
        ( d as React.MouseEvent<HTMLElement, MouseEvent> ).preventDefault();
        if ( d ) {
            this.setState( {
                item: this.props.item,
                displayEditTextModalStatus: display.VISIBLE
            } )
        } else {
            this.setState( { displayEditTextModalStatus: display.HIDDEN } );
        }
    }

    displayImageSelectModal = ( d: React.MouseEvent<HTMLElement, MouseEvent> | display ): display => {
        if ( ( d as display ) === display.HIDDEN ) {
            this.setState( {
                displayImageSelectModalStatus: display.HIDDEN
            } )
            // if ( !(d as dReact.MouseEvent<HTMLElement, MouseEvent>) && d === display.HIDDEN ){
            return display.HIDDEN;
        }
        if ( !d ) {
            return this.state.displayImageSelectModalStatus ? display.VISIBLE : display.HIDDEN;
        }
        console.log( "displayImageSelectModal()", display );
        ( d as React.MouseEvent<HTMLElement, MouseEvent> ).preventDefault();
        if ( d ) {
            this.setState( {
                item: this.props.item,
                displayImageSelectModalStatus: display.VISIBLE
            } )
        } else {
            this.setState( { displayImageSelectModalStatus: display.HIDDEN } );
        }
    }
    displayQREditModal = ( d: React.MouseEvent<HTMLElement, MouseEvent> | display ): display => {
        if ( ( d as display ) === display.HIDDEN ) {
            this.setState( {
                displayQREditModalStatus: display.HIDDEN
            } )
            // if ( !(d as dReact.MouseEvent<HTMLElement, MouseEvent>) && d === display.HIDDEN ){
            return display.HIDDEN;
        }
        if ( !d ) {
            return this.state.displayQREditModalStatus ? display.VISIBLE : display.HIDDEN;
        }
        console.log( "displayQREditModal()", display );
        ( d as React.MouseEvent<HTMLElement, MouseEvent> ).preventDefault();
        if ( d ) {
            this.setState( {
                item: this.props.item,
                displayQREditModalStatus: display.VISIBLE
            } )
        } else {
            this.setState( { displayQREditModalStatus: display.HIDDEN } );
        }
    }

    updateLabelTexts = ( changedValue: ChangedValueTextI, labelText: LabelText ) => {
        console.log( "input for updateLabelTexts", changedValue, labelText )
        // let texts = this.state.texts;
        let updatedText = false;
        // if ( ! labelText ){
        //     labelText = new LabelText();
        // // }
        if ( changedValue.text ) {
            console.log( "setting text to", changedValue.text.value );
            labelText.text = changedValue.text.value;
        } else if ( changedValue.format_options ) {
            console.log( "setting format_options to", changedValue.format_options.value );
            // if changedValue.
            labelText.bold = ( changedValue.format_options.value as FormatOptionsT[] ).includes( "bold" );
            labelText.underline = ( changedValue.format_options.value as FormatOptionsT[] ).includes( "underline" );
            labelText.italic = ( changedValue.format_options.value as FormatOptionsT[] ).includes( "italic" );
        } else if ( changedValue.text_size ) {
            labelText.fontSize = changedValue.text_size.value;
        } else {
            console.warn( "no match found for field", changedValue )
        }

        this.state.texts.forEach( ( text => {
            if ( text.uuid == labelText.uuid ) {
                console.log( "updating existing labelText with uuid", text.uuid )
                text = labelText;
                updatedText = true;
                return;
            }
        } ) );
        if ( !updatedText ) {
            this.setState( {
                texts: [ ...this.state.texts, labelText ]
            } );
        }
        console.log( "this.state.texts is now", this.state.texts, "pending", [ ...this.state.texts, labelText ] )
    }

    deleteLabelText = ( labelText: LabelText ): void => {
        this.state.texts.filter( ( text ) => {
            if ( text.uuid == labelText.uuid ) {
                return;
            }
            return text;
        } )
    }

    commitLabelText = ( labelText: LabelText ) => {
        this.setState( { uncommittedText: new LabelText() } )
    }



    updateLabelImages = ( changedValue: ChangedValueTextI, labelImage: LabelImage ) => {
        let updatedImage = false;
        this.state.images.forEach( ( image => {
            if ( image.uuid == labelImage.uuid ) {
                console.log( "updating existing labelImage with uuid", labelImage.uuid )
                image = labelImage;
                updatedImage = true;
                return;
            }
        } ) );
        if ( !updatedImage ) {
            this.setState( {
                images: [ ...this.state.images, labelImage ]
            } );
        }
        console.log( "this.state.images is now", this.state.images, "pending", [ ...this.state.images, labelImage ] )
    }

    commitLabelImage = ( labelImage: LabelImage ) => {
        this.setState( { uncommittedImage: new LabelImage() } )
    }


    updateLabelQR = ( changedValue: Partial<LabelQR>, labelQR: LabelQR ) => {
        let updatedQR = false;
        if ( changedValue.dataURL ) {
            console.log( "setting labelQR to", changedValue.dataURL );
            labelQR.dataURL = changedValue.dataURL;
        }
        if ( changedValue.canvasElement ) {
            console.log( "setting canvasElement on LabelQR to", changedValue.canvasElement );
            labelQR.canvasElement = changedValue.canvasElement
        }
        this.state.qrs.forEach( ( qr => {
            if ( qr.uuid == labelQR.uuid ) {
                console.log( "updating existing labelQR with uuid", labelQR.uuid )
                qr = labelQR;
                updatedQR = true;
                return;
            }
        } ) );
        if ( !updatedQR ) {
            console.log( "adding uncommitted labelQR with uuid", labelQR.uuid )
            this.setState( {
                qrs: [ ...this.state.qrs, labelQR ]
            } );
        }
        console.log( "this.state.qrs is now", this.state.qrs, "pending", [ ...this.state.qrs, labelQR ] )
    }


    commitLableQR = ( labelQR: LabelQR ) => {
        this.setState( { uncommittedQR: new LabelQR() } )
    }





    // componentDidMount () {
    //     console.log( " componentDidMount rendering bwip into ", this.state.stageRef!.getStage().getContent().childNodes.item( 0 ))
    //     bwipjs( "kanvas", {
    //     // bwipjs( this.state.stageRef!.getStage().getContent().childNodes.item(0), {
    //         bcid: 'code128',       // Barcode type
    //         text: '0123456789',    // Text to encode
    //         scale: 3,               // 3x scaling factor
    //         height: 10,              // Bar height, in millimeters
    //         // includetext: true,            // Show human-readable text
    //         // textxalign: 'center',        // Always good to set this
    //     }, function ( err, cvs ) {
    //         if ( err ) {
    //             console.error(err, cvs)
    //             // Decide how to handle the error
    //             // `err` may be a string or Error object
    //         } else {
    //             // Nothing else to do in this example...
    //         }
    //     } );
    // }


    state: LabelDrawState = {
        displayContextMenu: this.displayContextMenu,
        displayContextMenuStatus: DrawContextStateDefault.displayContextMenuStatus,
        displayContextMenuPosition: undefined,
        displayEditTextModal: this.displayEditTextModal,
        displayEditTextModalStatus: display.HIDDEN,
        displayImageSelectModal: this.displayImageSelectModal,
        displayImageSelectModalStatus: display.HIDDEN,
        displayQREditModal: this.displayQREditModal,
        displayQREditModalStatus: display.HIDDEN,
        contextMenuLabelText: null,
        item: null,
        texts: [], // NOTE: for pre-existing deserialize here.
        images: [],
        qrs: [],
        uncommittedText: new LabelText(),
        uncommittedImage: new LabelImage(),
        uncommittedQR: new LabelQR(),
        commitLabelText: this.commitLabelText,
        commitLabelImage: this.commitLabelImage,
        commitLabelQR: this.commitLableQR,
        deleteLabelText: this.deleteLabelText,
        stageRef: null,
        shouldSendBuffer: null
    }


    /*
     * type React.Ref<T> = ((instance: T) => void) | React.RefObject<T>
    **/
    setRef = ( ref: Stage ): void => {
        console.log( "SET REF FOR canvas", ref );
        if ( !this.state.stageRef ) {
            this.setState( { stageRef: ref } );
        }
    }

    toBuffer = (): PixelMap => {
        // const widthInches = 0.55;
        const widthInches = 48/360;
        const heightInches = 48/360;
        // const heightInches = 0.2

        const dpi = 360;

        const widthDots = Math.floor( dpi * widthInches );
        const heightDots = Math.floor( dpi * heightInches );

        const pxlPerLine = 6 * 8; // ( 6 bytes, will be packed as 1 pixel = 1 bit in line = 1 dot (in mode73))
        const bytesPerLine = pxlPerLine / 8;
        const linesCount = Math.ceil( heightDots / pxlPerLine );

        if ( pxlPerLine % 8 != 0 ) {
            throw Error( "There can not be a non 8 multiple amount of pxlPerLine" )
        }

        const canvasContext = this.state.stageRef.getStage().toCanvas( {} ).getContext( "2d" );
        const imgData = canvasContext.getImageData( 0, 0, this.state.stageRef.getStage().toCanvas( {} ).width, this.state.stageRef.getStage().toCanvas( {} ).height );

        // let buf: PixelMap = new Array( new Array( new Uint8ClampedArray( bytesPerLine ) ) );
        // let buf: PixelMap = new Array( 
        //     linesCount).fill( 
        //         new Array( widthDots ).fill(
        //             new Array( bytesPerLine ).fill(0 as uint8, 0, bytesPerLine)
        //         , 0, widthDots )
        //     , 0, linesCount );



        // let buf: PixelMap = new Array( linesCount ).fill().map( line => {
        //     new Array( widthDots ).map( col => {

        //         new Array( bytesPerLine ).fill( 0 as uint8, 0, bytesPerLine )

        //     } )
        // });

        let buf: PixelMap = [];
        for ( let line = 0; line < linesCount; line++){
            buf[line] = [];
            for (let col = 0; col < widthDots; col++){
                buf[line][col] = [];
                for (let byte = 0; byte < bytesPerLine; byte ++){
                    buf[line][col][byte] = 0;
                }
            }

        }

        console.log("0 buffer", buf);

        let str = "";
        buf.forEach( line => {
            line.forEach( col => {
                col.forEach( byte => {
                    str += byte.toString( 2 ).padStart( 8, "0" );
                } )
                str += "\n";
            } )
        } )
        console.log( "buffer: buf, str", buf, str );

        // const BUF_LENGTH = bytesPerLine * widthDots * linesCount;
        // let buf: Uint8ClampedArray = new Uint8ClampedArray( BUF_LENGTH );

        
        /** size is
         * ```
         * [linesCount][widthDots][bytesPerLine]
         * ```
         */

        // function getImageSize(){
        //   console.log(`imgDataLength is ${imgData.data.length}`)
        //   console.log(`imgDataLength pixels ${Math.floor(imgData.data.length/4)}`)
        //   console.log(`imgDataLength pixels ${Math.floor(imgData.data.length/4 / 300)}`)
        // }

        if ( pxlPerLine == 0 ) {
            throw Error( "There can not be 0 pixels per line output" );
        }

        console.log( `
            imageData.width                     = ${ imgData.width }
            imageData.height                    = ${ imgData.height }
            imageData.length                    = ${imgData.data.length }
            imageData.length/4                  = ${imgData.data.length/4}
            imageData.length/4/imgData.width    = ${ ( imgData.data.length / 4 / imgData.width ) }
            widthDots                           = ${ widthDots }
            heightDots                          = ${ heightDots }
            pxlPerLine                          = ${ pxlPerLine }
            bytesPerLine                        = ${ bytesPerLine }
            linesCount                          = ${ linesCount }
            `);
        
        // const setBufByte = (buf: Uint8ClampedArray, value: uint8, line: number, col: number, lineByte: number): Uint8ClampedArray {
        //     if ( line >= linesCount ) { throw `line number (${ line }) cannot be equal to or greater than ${ linesCount }`; }
        //     if ( col >= widthDots ) { throw `col number (${ col }) cannot be equal to or greater than ${ widthDots }`; }
        //     if ( lineByte >= bytesPerLine ) { throw `lineByte (${ lineByte }) cannot be equal to or greater than ${ bytesPerLine}`; }
        //     let pos: number = ( line * widthDots ) + 
        //         ( col * bytesPerLine ) +
        //         lineByte;
        //     buf[ pos ] = value;
        //     return buf;
        // }
        /** 
        ARGGG Javascript only does Bit math in 32 bits. doing `1 << 33` is the same as `1 << 1`
        */
        for ( let i = 0, pxl = 0; i < imgData.data.length && i < ( widthDots * heightDots * 4 ); i += 4, pxl++ ) {
        // for ( let i = 0, pxl = 0; i < imgData.data.length && i < ( widthDots * heightDots * 4 ) && i < 104*4; i += 4, pxl++ ) {
            let row = Math.floor( pxl / widthDots );
            let col = pxl % widthDots;
            // console.log( "col=", col )

            let line = Math.floor( row / pxlPerLine );
            // let linebit = (pxlPerLine - 1) - (row % pxlPerLine);
            let linebit = row % pxlPerLine;
            let byteBit = 8 - 1 - ( linebit % 8 )
            let lineByte = Math.floor( linebit / 8 );
            // white = 0 ; black = 1
            let isBlack = 0
            // Canvas sets black 00,00,00,FF to black and 00,00,00,00 to white
            for ( let colorByte = 0; colorByte < 4; colorByte++ ) {
                if ( imgData.data[ i + colorByte ] > 200 ) {
                    isBlack = 1;
                    break;
                }
            }

            // var {red, green, blue, alpha} = imgData.data.slice(i, i+4);
            // let [ red, green, blue, alpha ] = Array.from( imgData.data.slice( i, i + 4 ) );
            // console.log( `[{${ line }} ${ col }, ${ row } (${ lineByte } + ${ byteBit })] = ${ isBlack } (red=${ red } blue=${ blue } green=${ green } alpha=${ alpha })`,
            //     "\n", "buf:", buf,
            //     "\n", "lineByte:", lineByte,
            //     "\n", buf[ line ][ col ],
            //     "\n", `line=${ line } col=${ col }`, buf[ line ][ col ] ? true : false, buf[ line ][ col ])
            // console.log(
            //     "\n", `line=${ line } col=${ col } lineByte=${ lineByte }`, buf[ line ][ col ][ lineByte ] ? true : false, buf[ line ][ col ].length, buf[ line ][ col ][ lineByte ],
            //     "\n", "set to:", [ ( buf[ line ][ col ][ lineByte ] ? buf[ line ][ col ][ lineByte ] : 0 ) | ( isBlack << byteBit ) ],
            //     "\n", ( isBlack << byteBit ) )
            // console.log( `${ pxl.toString().padStart( 4, "0" ) } ( ${ Math.floor( pxl / widthDots ).toString().padStart( 4, "0" ) } ) ${ ( pxl % widthDots ).toString().padStart( 4, "0" ) } : buf[${ line.toString().padStart( 2, "0" ) }][${ col.toString().padStart( 2, "0" ) }][${ lineByte.toString().padStart( 2, "0" ) }] = (${ i }) = ${ isBlack } from byte ${ i.toString().padStart( 4, "0" ) }+${ byteBit } ${ imgData.data[ i ] },${ imgData.data[ i + 1 ] },${ imgData.data[ i + 2 ] },${ imgData.data[ i + 3 ] } [ ${ Math.floor( pxl / imgData.width ) }, ${ pxl % imgData.width } ] → [ ${ col }, ${ row } ] ; ${ ( buf[ line ][ col ][ lineByte ] ).toString( 2 ).padStart( 8, "0" )} (${  buf[ line ][ col ][ lineByte ]  ? true : false }) | ${ (isBlack << byteBit).toString( 2 ).padStart( 8, "0")}` )
            // buf[ line ][ col ][ lineByte ] = ( buf[ line ][ col ][ lineByte ] ? buf[ line ][ col ][ lineByte ] : 0 ) | ( isBlack << byteBit )
            buf[ line ][ col ][ lineByte ] = ( ( buf[ line ][ col ][ lineByte ] ? buf[ line ][ col ][ lineByte ] : 0 ) | ( isBlack << byteBit ) ) as uint8;
            
            // console.log( buf )

            // console.log( `${ ( buf[ line ][ col ][ lineByte ] >>> 0 ).toString( 2 ).padStart( 8, "0" ) } [0x${ ( buf[ line ][ col ][ lineByte ] >>> 0 ).toString( 16 ).toUpperCase().padStart( 2, "0" ) }]` )
            // console.log(buf[line][col] )
        }

        console.log(imgData.data);
        console.log( "buf2hex (imgData):", buf2hex( imgData.data ) );
        // console.log( "buf2hex ( buf ):", Buffer.from( ( Array.isArray( buf ) ? buf[0]. : buf ) ); );
        // buf.forEach( bufLine => (
        //     bufLine.forEach(bufCol => {
        //         console.log( buf2hex( Buffer.from( bufCol ) ) );

        //         // row.forEach( byte => {
        //         //     console.log( buf2hex( Buffer.from( byte ) ) );
        //         // })
        //     })
        // ));


        let binstr = "";
        let hexstr = "";
        buf.forEach( line => {
            line.forEach( col => {
                col.forEach( byte => {
                    binstr += byte.toString( 2 ).padStart( 8, "0" );
                    hexstr += byte.toString(16).padStart( 2, "0");
                } )
                binstr += "\n";
            } )
        } )
        console.log( "buffer", buf, "\n" + binstr + "\n" + hexstr );

        // console.log(buf.)

        return buf;
    }

    startSendBuffer = (shouldSendBuffer: boolean) => {
        this.setState( { shouldSendBuffer: shouldSendBuffer } );
    }

    exportLabel = (): LabelExport =>  {
        return {
            texts: this.state.texts,
            images: this.state.images,
            qrs: this.state.qrs
        }
        // this.state.texts.forEach( textObj => )

    }

    render () {
        const { width, height, item } = this.props;
        return (
            <DrawContext.Provider
                value={this.state}>
                <div>
                    {this.state.displayContextMenuStatus ?
                        <DrawContextMenu />
                        : null}
                    {this.state.displayEditTextModalStatus ?
                        <DrawEditText visibleHandler={this.displayEditTextModal} changeHandler={this.updateLabelTexts} item={item} labelText={this.state.uncommittedText} />
                        : null}
                    {this.state.displayImageSelectModalStatus ?
                        <DrawAddImage visibleHandler={this.displayImageSelectModal} changeHandler={this.updateLabelImages} item={item} labelImage={this.state.uncommittedImage} />
                        : null}
                    {this.state.displayQREditModalStatus ?
                        <QREditModal visibleHandler={this.displayQREditModal} changeHandler={this.updateLabelQR} item={item} labelQR={this.state.uncommittedQR} />
                        : null}
                    <Stage
                        onMouseEnter={() => this.setState( { displayContextMenuStatus: false } )}
                        width={width}
                        style={{
                            border: '1px solid #D3D3D3'
                        }}
                        context
                        ref={this.setRef}
                        height={height}>
                        <Layer>

                            {/* Debug Rectangle 
                            <Rect
                                x={1}
                                y={1}
                                width={1}
                                height={3}
                                fill='black'
                                ></Rect>
                    
                            {/* END DEBUG */}

                            {this.state.texts.map( labelText => {
                                console.log( "drawing new labelText", labelText )
                                return <Text
                                    textObject={labelText}
                                    key={labelText.uuid}
                                    text={labelText.text}
                                    fontStyle={labelText.bold ? "bold" : labelText.italic ? "italic" : "normal"}
                                    textDecoration={labelText.underline ? "underlined" : ""}
                                    fontSize={labelText.fontSize}
                                    onContextMenu={this.state.displayContextMenu}
                                    draggable />

                            } )}
                            {this.state.images.map( labelImage => {
                                console.log( "drawing image", labelImage );
                                const [ image ] = useImage( 'https://konvajs.org/assets/lion.png' );
                                // return Image.fromURL("https://img1.fastenal.com/thumbnails/CapScrewsHexBolts_600003_CatImg.jpg" )
                                return <Image
                                    key={labelImage.uuid}
                                    image={image}
                                    draggable />
                                // return <Image.fromURL('/assets/darth-vader.jpg', function (darthNode) {
                                //     darthNode.setAttrs({
                                //         x: 200,
                                //         y: 50,
                                //         scaleX: 0.5,
                                //         scaleY: 0.5
                                //     });
                                //     layer.add(darthNode);
                                //     layer.batchDraw();
                            } )}
                            {this.state.qrs.map( labelQR => {
                                console.log( "drawing labelQR", labelQR );
                                // const [ image ] = useImage( labelQR.dataURL );
                                // return Image.fromURL("https://img1.fastenal.com/thumbnails/CapScrewsHexBolts_600003_CatImg.jpg" )
                                return <Image
                                    key={labelQR.uuid}
                                    image={labelQR.canvasElement}
                                    draggable />
                                // return <Image.fromURL('/assets/darth-vader.jpg', function (darthNode) {
                                //     darthNode.setAttrs({
                                //         x: 200,
                                //         y: 50,
                                //         scaleX: 0.5,
                                //         scaleY: 0.5
                                //     });
                                //     layer.add(darthNode);
                                //     layer.batchDraw();
                            } )}
                        </Layer>
                    </Stage>
                    <div style={{ paddingTop: 5, margin: 5 }}>
                        <Button icon="font-size" onClick={this.displayEditTextModal} id="ADD_TEXT">Add Text</Button>
                        <Button icon="qrcode" onClick={this.displayQREditModal} id="ADD_QR">Add QR</Button>
                        <Button icon="picture" onClick={this.displayImageSelectModal} id="ADD_IMAGE">Add Image</Button>
                        {/* <Button icon="printer" onClick={this.startSendBuffer} id="PRINT">Print</Button> */}
                        <Spin spinning={this.state.shouldSendBuffer}>
                            <SendBufferButton value="Print" onClick={this.startSendBuffer} buffer={this.state.shouldSendBuffer ? this.toBuffer() : null} />
                        </Spin>

                        <Button icon="medicine-box" onClick={() => {
                            console.log(this.toBuffer());
                            console.log( JSON.stringify(this.exportLabel()));
                        }} id="DEBUG">DEBUG</Button>
                    </div>
                    {/* {this.state.shouldSendBuffer ?
                        <SendBuffer buffer={this.toBuffer()} />
                        : null} */}
                </div>
            </DrawContext.Provider>
        );
    }
}

/** EDITORS                                         Stars       Last Update             Live Preview        Drag & Drop Text ?
 *
 * https://github.com/kkfor/for-editor              199         Sep 1
 * https://github.com/nib-edit/Nib                  68          4 days
 * https://github.com/RIP21/react-simplemde-editor  268         Jul 25
 * https://github.com/froala/react-froala-wysiwyg   305         Aug 19          MIT ?   YES                 NO
 * https://github.com/springload/draftail           246         6 hours         MIT     YES                 NO
 * https://github.com/zenoamaro/react-quill         2955        Aug 14          MIT     YES                 NO
 * https://github.com/jpuri/react-draft-wysiwyg     3663        Mar 3
 *
 *
 *
 */