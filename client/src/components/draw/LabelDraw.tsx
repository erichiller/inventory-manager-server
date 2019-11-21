
import React, { Component, ComponentProps, PropsWithChildren } from 'react';

import { Stage, Layer, Text, Image, Rect } from 'react-konva';

import { ItemHardwareFastenerBolt, GetPrinterStatusDocument, PrinterStatus, GetPrinterStatusQuery, Item } from '../../types/graphql';
import { DISPLAY } from '../../types/enums';
import { DrawContextMenu } from './DrawContextMenu';
import { KonvaEventObject } from 'konva/types/Node';
import { Button, message } from 'antd';
import DrawEditText from './DrawEditText';
import DrawAddImage from './image/LabelAddImageModal';

import QREditModal from './QREditModal';
import SendBufferButton from '../print/SendBufferButton';
import { uint8 } from '../../types/uint8';
import Spin from 'antd/es/spin';
import { buf2hex } from '../../lib/helpers';
import { LabelText, LabelImage, LabelQR, FormatOptionsT } from './LabelConstituent';
import { useQuery } from '@apollo/react-hooks';
import { ChildProps } from '@apollo/react-hoc';

import nunjucks from 'nunjucks';
import { NewImageUploadModal } from './image/NewImageUploadModal';
import { relative } from 'path';



const LabelComponent: React.FunctionComponent<{}> = ( { children } ) => {
    const { data, loading, error } = useQuery<GetPrinterStatusQuery>( GetPrinterStatusDocument );
    const dpi = 360;
    // if ( loading ) return <Loading />;
    // if ( error ) return <p>ERROR</p>;
    if ( data ) {
        // height is mm * 360
        // let height = parseInt(/[0-9]{1,2}(?=mm)/.exec(data.PrinterStatus.labelType)[0]) * 360;

        console.log( "PrinterStatus:", data );
        // height is inches * 360
        let labelInchesHeight = parseFloat( /[0-9]\.[0-9]{1,2}(?=\")/.exec( data.PrinterStatus.labelType )[ 0 ] );
        let height = Math.floor( labelInchesHeight * dpi );

        
        console.log( "height",
            {
                height: height,
                found: /[0-9]\.[0-9]{1,2}(?=\")/.exec( data.PrinterStatus.labelType ),
                found0: /[0-9]\.[0-9]{1,2}(?=\")/.exec( data.PrinterStatus.labelType )[ 0 ],
                asInt: parseFloat( /[0-9]\.[0-9]{1,2}(?=\")/.exec( data.PrinterStatus.labelType )[ 0 ] ),
                asPixels: Math.floor( parseFloat( /[0-9]\.[0-9]{1,2}(?=\")/.exec( data.PrinterStatus.labelType )[ 0 ] ) * dpi )
            } );

        // TODO: allow the user to set the width
        let widthInches = 0.75;
        let width = widthInches * dpi;

        // DEBUG OVERRIDES
        // 242      | works         | GOOD
        // 192      | works         | GOOD
        // 144      | works
        // 150      | works
        // 175      | works         | GOOD
        // 185      | works         | FIXED
        width=Math.floor(0.75 * dpi);
        // height=48;

        return < DrawContext.Consumer >
            {( { displayContextMenu, setRef } ) => {
                return <div style={{
                        justifyContent: 'center',
                        margin: '0 auto',
                        position: 'relative',
                            width: width,
                            height: height+25}}>
                    {/* <div style={{ justifyContent: 'center' }}> */}
                    <div style={{
                        // position: 'relative',
                        // bottom: '10%',
                        // left: '45%',
                        textAlign: 'center',
                        // left: width,

                        // transform: 'rotate( 90deg )',
                        // transformOrigin: 'left top 0'
                    }}>{widthInches}"</div>
                    <Stage
                        onMouseEnter={() => displayContextMenu( false )}
                        width={width}
                        style={{
                            border: '1px solid #D3D3D3',
                            backgroundColor: 'rgba(199, 199, 199, 0.2)',
                            margin: '0 auto',
                            width: width,
                            height: height
                        }}
                        context
                        ref={setRef}
                        height={height}>
                        <Layer>
                            {/* <Rect width={4} height={4} x={2}  y={6} fill="red" /> */}
                            {children}
                        </Layer>
                    </Stage>
                        <div style={{
                            position: 'relative',
                            // bottom: '45%'
                            textAlign: 'center',
                            width: height,
                            right: 20,
                            // left: width,

                            transform: 'rotate( 270deg )',
                            transformOrigin: 'left top 0'
                    }}>{labelInchesHeight}"</div>
                    <div style={{
                        position: 'relative',
                        textAlign: 'center',
                        top: '-13px',
                        // left: width,

                        // transform: 'rotate( 90deg )',
                        // transformOrigin: 'left top 0'
                    }}><i>Current Label Maker Tape Width: </i>{widthInches}"</div>
                    </div>
                    
            }}
        </DrawContext.Consumer>
    }
    return <Spin spinning={true} />
}


interface LabelExport<T> {
    texts: LabelText[];
    images: LabelImage[];
    qrs: LabelQR<T>[];
}

interface ChangedValueTextI {
    text?: ChangedValueI;
    format_options?: ChangedValueI;
    text_size?: ChangedValueI;
}

interface ChangedValueImageI {
    id?: ChangedValueI;
    data?: ChangedValueI;
    width?: ChangedValueI;
    height?: ChangedValueI;
    label?: ChangedValueI;
    description?: ChangedValueI;
    category?: ChangedValueI;
}

interface ChangedValueI {
    dirty: boolean;
    errors?: any;
    name: string;
    touched: boolean;
    validating: boolean;
    value: any;
}

interface LabelDrawProps {
    height?: number;
    width?: number;
    // item: ItemHardwareFastenerBolt;
    item: Item;
}


type IKonvaEventHandler = ( d: boolean | KonvaEventObject<PointerEvent> ) => void;
type IHtmlEventHandler = ( d: boolean | DISPLAY | React.MouseEvent<HTMLElement, MouseEvent> ) => void;

interface LabelDrawState<T> {
    displayContextMenu: IKonvaEventHandler;
    displayContextMenuStatus: boolean;
    displayContextMenuPosition?: [ number, number ];
    displayEditTextModal: ( d: DISPLAY | React.MouseEvent<HTMLElement, MouseEvent> ) => DISPLAY;
    displayEditTextModalStatus: DISPLAY;
    displayImageSelectModal: ( d: DISPLAY | React.MouseEvent<HTMLElement, MouseEvent> ) => DISPLAY;
    displayImageSelectModalStatus: DISPLAY;
    displayImageUploadModal: ( d: DISPLAY | React.MouseEvent<HTMLElement, MouseEvent> ) => DISPLAY;
    displayImageUploadModalStatus: DISPLAY;
    displayQREditModal: ( d: DISPLAY | React.MouseEvent<HTMLElement, MouseEvent> ) => DISPLAY;
    displayQREditModalStatus: DISPLAY;
    contextMenuLabelText: LabelText;
    item: T;
    texts: LabelText[];
    images: LabelImage[];
    qrs: LabelQR<T>[];
    uncommittedText: LabelText;
    uncommittedImage: LabelImage;
    uncommittedQR: LabelQR<T>;
    commitLabelText: ( labelText: LabelText ) => void;
    deleteLabelText: ( labelText: LabelText ) => void;
    commitLabelImage: ( labelImage: LabelImage ) => void;
    commitLabelQR: ( LabelQR: LabelQR<T> ) => void;
    stageRef: Stage;
    shouldSendBuffer: boolean;
    setRef: ( stageRef: Stage ) => void;
}
interface DrawContext<T> extends Omit<LabelDrawState<T>, "item"> {
    item?: T;
}

const DrawContextStateDefault: LabelDrawState<Item> = {
    displayContextMenu: () => { },
    displayContextMenuStatus: false,
    displayContextMenuPosition: undefined,
    displayEditTextModal: () => DISPLAY.HIDDEN,
    displayEditTextModalStatus: null,
    contextMenuLabelText: null,
    displayQREditModal: () => DISPLAY.HIDDEN,
    displayQREditModalStatus: null,
    displayImageSelectModal: () => DISPLAY.HIDDEN,
    displayImageSelectModalStatus: null,
    displayImageUploadModal: () => DISPLAY.HIDDEN,
    displayImageUploadModalStatus: null,
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
    shouldSendBuffer: null,
    setRef: null
};
export const DrawContext = React.createContext<DrawContext<Item>>( DrawContextStateDefault );

export type PixelMap = Array<Array<Array<uint8>>>;


export class LabelDraw<T extends Item> extends Component<LabelDrawProps, LabelDrawState<Item>> {

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
            } );
        } else {
            this.setState( { displayContextMenuStatus: false } );
        }
    }

    displayEditTextModal = ( d: React.MouseEvent<HTMLElement, MouseEvent> | DISPLAY ): DISPLAY => {
        if ( ( d as DISPLAY ) === DISPLAY.HIDDEN ) {
            this.setState( {
                displayEditTextModalStatus: DISPLAY.HIDDEN
            } );
            // if ( !(d as dReact.MouseEvent<HTMLElement, MouseEvent>) && d === display.HIDDEN ){
            return DISPLAY.HIDDEN;
        }
        if ( !d ) {
            return this.state.displayEditTextModalStatus ? DISPLAY.VISIBLE : DISPLAY.HIDDEN;
        }
        console.log( "displayEditTextModal()", DISPLAY );
        ( d as React.MouseEvent<HTMLElement, MouseEvent> ).preventDefault();
        if ( d ) {
            this.setState( {
                item: this.props.item,
                displayEditTextModalStatus: DISPLAY.VISIBLE
            } );
        } else {
            this.setState( { displayEditTextModalStatus: DISPLAY.HIDDEN } );
        }
    }

    displayImageSelectModal = ( d: React.MouseEvent<HTMLElement, MouseEvent> | DISPLAY ): DISPLAY => {
        console.log( "displayImageSelectModal()", d );
        if ( ( d as DISPLAY ) === DISPLAY.HIDDEN ) {
            this.setState( {
                displayImageSelectModalStatus: DISPLAY.HIDDEN
            } );
            // if ( !(d as dReact.MouseEvent<HTMLElement, MouseEvent>) && d === display.HIDDEN ){
            return DISPLAY.HIDDEN;
        }
        if ( !d ) {
            return this.state.displayImageSelectModalStatus ? DISPLAY.VISIBLE : DISPLAY.HIDDEN;
        }
        ( d as React.MouseEvent<HTMLElement, MouseEvent> ).preventDefault();
        if ( d ) {
            this.setState( {
                item: this.props.item,
                displayImageSelectModalStatus: DISPLAY.VISIBLE
            } );
        } else {
            this.setState( { displayImageSelectModalStatus: DISPLAY.HIDDEN } );
        }
    }
    displayImageUploadModal = ( d: React.MouseEvent<HTMLElement, MouseEvent> | DISPLAY ): DISPLAY => {
        console.log( "displayImageUploadModalStatus()", d );
        if ( ( d as DISPLAY ) === DISPLAY.HIDDEN ) {
            this.setState( {
                displayImageUploadModalStatus: DISPLAY.HIDDEN
            } );
            // if ( !(d as dReact.MouseEvent<HTMLElement, MouseEvent>) && d === display.HIDDEN ){
            return DISPLAY.HIDDEN;
        }
        if ( ( d as DISPLAY ) === DISPLAY.VISIBLE ) { this.setState( { displayImageUploadModalStatus: DISPLAY.VISIBLE } ); return DISPLAY.VISIBLE; }
        if ( !d ) {
            return this.state.displayImageUploadModalStatus ? DISPLAY.VISIBLE : DISPLAY.HIDDEN;
        }
        ( d as React.MouseEvent<HTMLElement, MouseEvent> ).preventDefault();
        if ( d ) {
            this.setState( {
                item: this.props.item,
                displayImageUploadModalStatus: DISPLAY.VISIBLE
            } );
        } else {
            this.setState( { displayImageUploadModalStatus: DISPLAY.HIDDEN } );
        }
    }
    displayQREditModal = ( d: React.MouseEvent<HTMLElement, MouseEvent> | DISPLAY ): DISPLAY => {
        if ( ( d as DISPLAY ) === DISPLAY.HIDDEN ) {
            this.setState( {
                displayQREditModalStatus: DISPLAY.HIDDEN
            } );
            // if ( !(d as dReact.MouseEvent<HTMLElement, MouseEvent>) && d === display.HIDDEN ){
            return DISPLAY.HIDDEN;
        }
        if ( !d ) {
            return this.state.displayQREditModalStatus ? DISPLAY.VISIBLE : DISPLAY.HIDDEN;
        }
        console.log( "displayQREditModal()", DISPLAY );
        ( d as React.MouseEvent<HTMLElement, MouseEvent> ).preventDefault();
        if ( d ) {
            this.setState( {
                item: this.props.item,
                displayQREditModalStatus: DISPLAY.VISIBLE
            } );
        } else {
            this.setState( { displayQREditModalStatus: DISPLAY.HIDDEN } );
        }
    }

    updateLabelTexts = ( changedValue: ChangedValueTextI, labelText: LabelText ) => {
        console.log( "input for updateLabelTexts", changedValue, labelText );
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
            console.warn( "no match found for field", changedValue );
        }

        this.state.texts.forEach( ( text => {
            if ( text.id == labelText.id ) {
                console.log( "updating existing labelText with id", text.id );
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
        console.log( "this.state.texts is now", this.state.texts, "pending", [ ...this.state.texts, labelText ] );
    }

    deleteLabelText = ( labelText: LabelText ): void => {
        this.state.texts.filter( ( text ) => {
            if ( text.id == labelText.id ) {
                return;
            }
            return text;
        } );
    }

    commitLabelText = ( labelText: LabelText ) => {
        this.setState( { uncommittedText: new LabelText() } );
    }


    /**
     * IMPORTANT: ! -> THE LOGIC IN THESE UPDATE X FUNCTIONS DO NOT ALLOW FOR MULTIPLE IMAGES OF THE SAME ID
     */

    updateLabelImages = ( changedValue: Partial<LabelImage>, labelImage: LabelImage ) => {
        let updatedImage = false;
        console.log( "updateLabelImages", changedValue, labelImage );

        // if ( typeof changedValue === 'object' ){
        //     Object.keys( changedValue ).forEach( key => {
        //         labelImage[ key ] = changedValue[ key ];
        //     } );            
        // }

        if ( changedValue.id && changedValue.id != labelImage.id ) {
            console.log( "uncommitted image is now set to selected id", { "was": labelImage.id, "now": changedValue.id } );
            labelImage = changedValue as LabelImage;
            // labelImage.id = changedValue.id;
        }
        // if ( changedValue.url ) {
        //     console.log( "setting image's url to", changedValue.url );
        //     labelImage.url = changedValue.url;
        // }
        Object.keys( changedValue ).forEach( key => {
            labelImage[ key ] = changedValue[ key ];
        } );
        this.state.images.forEach( ( image => {
            if ( image.id == labelImage.id ) {
                console.log( "updating existing labelImage with id", labelImage.id );
                image = labelImage;
                // image = labelImage;
                updatedImage = true;
                return;
            }
        } ) );
        if ( !updatedImage ) {
            console.log( "adding new image to this.state.images", labelImage );
            this.setState( {
                images: [ ...this.state.images, labelImage ]
            } );
        }
        console.log( "this.state.images is now", this.state.images, "pending", [ ...this.state.images, labelImage ] );
    }

    commitLabelImage = ( labelImage: LabelImage ) => {
        this.setState( { uncommittedImage: new LabelImage() } );
    }


    updateLabelQR = <T extends Item> ( changedValue: Partial<LabelQR<T>>, labelQR: LabelQR<T> ) => {
        let updatedQR = false;
        if ( changedValue.dataURL ) {
            console.log( "setting labelQR<T> to", changedValue.dataURL );
            labelQR.dataURL = changedValue.dataURL;
        }
        if ( changedValue.canvasElement ) {
            console.log( "setting canvasElement on labelQR<T> to", changedValue.canvasElement );
            labelQR.canvasElement = changedValue.canvasElement;
        }
        this.state.qrs.forEach( ( qr => {
            if ( qr.id == labelQR.id ) {
                console.log( "updating existing labelQR<T> with id", labelQR.id );
                qr = labelQR as LabelQR<Item>;
                updatedQR = true;
                return;
            }
        } ) );
        if ( !updatedQR ) {
            console.log( "adding uncommitted labelQR<T> with id", labelQR.id );
            this.setState( {
                qrs: [ ...this.state.qrs, labelQR as LabelQR<Item> ]
            } );
        }
        console.log( "this.state.qrs is now", this.state.qrs, "pending", [ ...this.state.qrs, labelQR ] );
    }


    commitLableQR = <T extends {}>( labelQR: LabelQR<T> ) => {
        this.setState( { uncommittedQR: new LabelQR() } );
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


    /*
     * type React.Ref<T> = ((instance: T) => void) | React.RefObject<T>
    **/
    setRef = ( ref: Stage ): void => {
        console.log( "SETTING REF FOR canvas", ref );
        if ( !this.state.stageRef ) {
            console.log("SETTING REF FOR CANVAS -- SAVED TO STATE")
            this.setState( { stageRef: ref } );
        }
    }


    state: LabelDrawState<Item> = {
        displayContextMenu: this.displayContextMenu,
        displayContextMenuStatus: DrawContextStateDefault.displayContextMenuStatus,
        displayContextMenuPosition: undefined,
        displayEditTextModal: this.displayEditTextModal,
        displayEditTextModalStatus: DISPLAY.HIDDEN,
        displayImageSelectModal: this.displayImageSelectModal,
        displayImageSelectModalStatus: DISPLAY.HIDDEN,
        displayImageUploadModal: this.displayImageUploadModal,
        displayImageUploadModalStatus: DISPLAY.HIDDEN,
        displayQREditModal: this.displayQREditModal,
        displayQREditModalStatus: DISPLAY.HIDDEN,
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
        shouldSendBuffer: null,
        setRef: this.setRef
    };



    /**
     *
        size is
        ```
        [linesCount][widthDots][bytesPerLine]
        ```
     */
    toBuffer = (): PixelMap => {
        const dpi = 360;

        // const widthInches  = 48 / dpi;
        // const heightInches = 48 / dpi;

        const canvasContext = this.state.stageRef.getStage().toCanvas( {} ).getContext( "2d" );
        const canvasWidth = this.state.stageRef.getStage().toCanvas( {} ).width;
        const canvasHeight = this.state.stageRef.getStage().toCanvas( {} ).height;

        // const widthInches = canvasWidth / dpi;
        // const heightInches = canvasHeight / dpi;
        // const widthDots = Math.floor( dpi * widthInches );
        // const heightDots = Math.floor( dpi * heightInches );

        const widthDots = canvasWidth;
        const heightDots = canvasHeight;

        const pxlPerLine = 6 * 8; // ( 6 bytes, will be packed as 1 pixel = 1 bit in line = 1 dot (in mode73))
        const bytesPerLine = pxlPerLine / 8;
        const linesCount = Math.ceil( heightDots / pxlPerLine );

        if ( pxlPerLine % 8 != 0 ) {
            throw Error( "There can not be a non 8 multiple amount of pxlPerLine" );
        }

        const imgData = canvasContext.getImageData( 0, 0, canvasWidth, canvasHeight );

        let buf: PixelMap = [];
        for ( let line = 0; line < linesCount; line++ ) {
            buf[ line ] = [];
            for ( let col = 0; col < widthDots; col++ ) {
                buf[ line ][ col ] = [];
                for ( let byte = 0; byte < bytesPerLine; byte++ ) {
                    buf[ line ][ col ][ byte ] = 0;
                }
            }

        }

        if ( pxlPerLine == 0 ) {
            throw Error( "There can not be 0 pixels per line output" );
        }

        console.log( `
            imageData.width                     = ${ imgData.width }
            imageData.height                    = ${ imgData.height }
            imageData.length                    = ${ imgData.data.length }
            imageData.length/4                  = ${ imgData.data.length / 4 }
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
            let byteBit = 8 - 1 - ( linebit % 8 );
            let lineByte = Math.floor( linebit / 8 );
            // white = 0 ; black = 1
            let isBlack = 0;
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

        console.log( imgData.data );
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
                    hexstr += byte.toString( 16 ).padStart( 2, "0" );
                } );
                binstr += "\n";
            } );
        } );
        console.log( "buffer", buf, "\n" + binstr + "\n" + hexstr );



        const bufDebugImageSize = () => {
            console.log( `imgDataLength is ${ imgData.data.length }` )
            console.log( `imgDataLength pixels ${ Math.floor( imgData.data.length / 4 ) }` )
            console.log( `imgDataLength pixels ${ Math.floor( imgData.data.length / 4 / 300 ) }` )
        }


        return buf;
    }

    startSendBuffer = ( shouldSendBuffer: boolean ) => {
        console.log("startSendBuffer received", shouldSendBuffer);
        this.setState( { shouldSendBuffer: shouldSendBuffer } );
    }

    exportLabel = (): LabelExport<T> => {
        return {
            texts: this.state.texts,
            images: this.state.images,
            qrs: this.state.qrs
        };
        // this.state.texts.forEach( textObj => )

    }

    currentLabelType: string;

    // componentDidMount(){
    //     LabelType((printerStatus) => {
    //         console.log( printerStatus); 
    //         this.currentLabelType = printerStatus.labelType;
    //     });
    // }

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
                    {this.state.displayImageUploadModalStatus ?
                        <NewImageUploadModal visibleHandler={this.displayImageUploadModal} changeHandler={this.updateLabelImages} item={item} labelImage={this.state.uncommittedImage} />
                        : null}

                    <LabelComponent>


                        {/* Debug Rectangle  */}
                        {/* <Rect
                            x={1}
                            y={1}
                            width={1}
                            height={3}
                            fill='black'
                        ></Rect> */}
                        {/* END DEBUG */}
                        {this.state.texts.map( labelText => {
                            console.log( "drawing new labelText", labelText );
                            return <Text
                                textObject={labelText}
                                key={labelText.id}
                                text={nunjucks.renderString( labelText.text, item )}
                                fontStyle={labelText.bold ? "bold" : labelText.italic ? "italic" : "normal"}
                                textDecoration={labelText.underline ? "underlined" : ""}
                                fontSize={labelText.fontSize}
                                fill={labelText.text.includes( "{{" ) ? 'red' : 'black'}
                                onContextMenu={this.state.displayContextMenu}
                                draggable />;

                        } )}
                        {this.state.images.map( labelImage => {
                            console.log( "drawing image", labelImage );
                            // if(!labelImage.data) { message.warn(`image ${labelImage.id} does not have any data `); }
                            // const [ image ] = labelImage.url
                            const image = document.createElement( 'img' );
                            image.src = labelImage.data;
                            image.width = labelImage.width;
                            image.height = labelImage.height;
                            console.log( "proceeding with draw image", { src: image.src, width: image.width, height: image.height } )
                            return <Image
                                key={labelImage.id}
                                image={image}
                                draggable />;
                        } )}
                        {this.state.qrs.map( LabelQR => {
                            console.log( "drawing LabelQR<T>", LabelQR );
                            return <Image
                                key={LabelQR.id}
                                image={LabelQR.canvasElement}
                                draggable />;
                        } )}
                    </LabelComponent>
                    <br />
                    <div style={{ paddingTop: 5, margin: 5 }}>
                        <Button icon="font-size" onClick={this.displayEditTextModal} id="ADD_TEXT">Add Text</Button>
                        <Button icon="qrcode" onClick={this.displayQREditModal} id="ADD_QR">Add QR</Button>
                        <Button icon="picture" onClick={this.displayImageSelectModal} id="ADD_IMAGE">Add Image</Button>
                        {/* <Button icon="printer" onClick={this.startSendBuffer} id="PRINT">Print</Button> */}
                        <SendBufferButton value="Print" onClick={this.startSendBuffer} buffer={this.state.shouldSendBuffer ? this.toBuffer() : null} />

                        <Button icon="medicine-box" onClick={() => {
                            console.log( this.toBuffer() );
                            console.log( JSON.stringify( this.exportLabel() ) );
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