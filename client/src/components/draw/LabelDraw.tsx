
import React, { Component } from 'react';


import { Item, Label } from '../../types/graphql';
import { DISPLAY } from '../../types/enums';
import { DrawContextMenu } from './DrawContextMenu';
import { KonvaEventObject } from 'konva/types/Node';
import { Button } from 'antd';
import DrawEditText from './DrawEditText';
import DrawAddImage from './image/LabelAddImageModal';

import QREditModal from './QREditModal';
import SendBufferButton from '../print/SendBufferButton';
import { Integer } from '../../types/uint8';
import { LabelText, LabelImage, LabelQR, FormatOptionsT, LabelExport, UUIDStringT } from '../../lib/LabelConstituent';

import nunjucks from 'nunjucks';
import { NewImageUploadModal } from './image/NewImageUploadModal';
import { PrintContext } from '../print/PrintContextHandler';
import { LabelComponent } from '../label/LabelComponent';
import { Stage, Text, Image, Rect } from 'react-konva';
import { canvasToBuffer, PixelMap } from '../../lib/canvasToBuffer';





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

interface LabelDrawProps<T extends Item> {
    height?: number;
    width?: number;
    // item: ItemHardwareFastenerBolt;
    item?: T;
    label: LabelExport<T>;
}


type IKonvaEventHandler = ( d: boolean | KonvaEventObject<PointerEvent> ) => void;
type IHtmlEventHandler = ( d: boolean | DISPLAY | React.MouseEvent<HTMLElement, MouseEvent> ) => void;

interface LabelDrawState<T extends Item> {
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
interface DrawContext<T extends Item> extends Omit<LabelDrawState<T>, "item"> {
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
    item: undefined,
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

export const DrawContext = React.createContext<DrawContext<any>>( DrawContextStateDefault );



export class LabelDraw<T extends Item> extends Component<LabelDrawProps<T>, LabelDrawState<T>> {

    static contextType = PrintContext;
    declare context: React.ContextType<typeof PrintContext>;

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
    };

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
    };

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
    };
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
    };
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
    };

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
        // this.updateContext();
    };

    shouldComponentUpdate (): boolean {
        if ( !this.context.getCurrentLabel() ) {
            this.context.setCurrentLabel( this.exportLabel() );
        }
        return this.updateContext();
    }

    /**
     * return value of `false` if the label was not exported.
     */
    updateContext = (): boolean => {
        if ( this.exportLabel() !== this.context.getCurrentLabel() ) {
            console.warn( "updateContext" );
            this.context.setCurrentLabel( this.exportLabel() );
            return true;
        }
        return false;
    };

    deleteLabelText = ( labelText: LabelText ): void => {
        this.state.texts.filter( ( text ) => {
            if ( text.id == labelText.id ) {
                return;
            }
            return text;
        } );
    };

    commitLabelText = ( labelText: LabelText ) => {
        this.setState( { uncommittedText: new LabelText() } );
    };


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
    };

    commitLabelImage = ( labelImage: LabelImage ) => {
        this.setState( { uncommittedImage: new LabelImage() } );
    };


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
    };


    commitLableQR = <T extends {}> ( labelQR: LabelQR<T> ) => {
        this.setState( { uncommittedQR: new LabelQR() } );
    };

    toBuffer = (): PixelMap => {
        return canvasToBuffer( this.state.stageRef.getStage().toCanvas( {} ) );
    };

    /*
     * type React.Ref<T> = ((instance: T) => void) | React.RefObject<T>
    **/
    setRef = ( ref: Stage ): void => {
        console.log( "SETTING REF FOR canvas", ref );
        if ( !this.state.stageRef ) {
            console.log( "SETTING REF FOR CANVAS -- SAVED TO STATE" );
            this.setState( { stageRef: ref }, this.updateContext );
        }
    };

    state: LabelDrawState<T> = {
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

    startSendBuffer = ( shouldSendBuffer: boolean ) => {
        console.log( "startSendBuffer received", shouldSendBuffer );
        this.setState( { shouldSendBuffer: shouldSendBuffer } );
    };

    get width (): Integer | null {
        return this.canvas ? this.canvas.width : null;
    }
    get height (): Integer | null {
        return this.canvas ? this.canvas.height : null;
    }
    get canvas (): HTMLCanvasElement | null {
        if ( this.state.stageRef ) {
            return this.state.stageRef.getStage().toCanvas( {} );
        }
        return null;
    }
    get dataURL (): string | null {
        return this.canvas ? this.canvas.toDataURL() : null;
    }
    get imgData (): ImageData | null {
        return this.canvas && this.width && this.height ? this.canvas.getContext( '2d' ).getImageData( 0, 0, this.width, this.height ) : null;
    }

    exportLabel = (): LabelExport<T> => {
        console.group( "LabelDraw.exportLabel()" );
        console.log( "LabelDraw, exporting Label verification values", {
            "canvas": this.canvas,
            "width": this.width,
            "height": this.height,
            "imgData": this.imgData,
            "this.props.label": this.props.label
        } );
        // console.trace();
        if ( this.canvas && this.width && this.height && this.imgData ) {
            console.log( "exportLabel() setValues" );
            console.groupEnd();
            // if ( ! this.context.getCurrentLabel() ){
            //     this.context.setCurrentLabel(this.props.label);
            // }
            this.context.setCurrentLabel(
                this.props.label.setValues( {
                    ...( this.props.label ? { id: this.props.label.id } : {} ),
                    ...{
                        texts: this.state.texts,
                        images: this.state.images,
                        qrs: this.state.qrs,
                        imgData: this.imgData,
                        // dataURL: this.dataURL,
                        width: this.width,
                        height: this.height
                    }
                } ) )
                ;
        }
        console.warn( "exportLabel could not update values, failed value existance check." );
        console.groupEnd();
        return this.props.label;
    };

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
                        <Rect
                            x={0}
                            y={10}
                            width={10}
                            height={10}
                            fill='black'
                        />
                        <Rect
                            x={0}
                            y={30}
                            width={10}
                            height={10}
                            fill='black'
                        />
                        <Rect
                            x={0}
                            y={50}
                            width={10}
                            height={10}
                            fill='black'
                        />
                        <Rect
                            x={0}
                            y={70}
                            width={10}
                            height={10}
                            fill='black'
                        />
                        <Rect
                            x={0}
                            y={90}
                            width={10}
                            height={10}
                            fill='black'
                        />
                        <Rect
                            x={0}
                            y={110}
                            width={10}
                            height={10}
                            fill='black'
                        />
                        <Rect
                            x={0}
                            y={130}
                            width={10}
                            height={5}
                            fill='black'
                        />
                        <Rect
                            x={30}
                            y={140}
                            width={30}
                            height={1}
                            fill='black'
                        />
                        <Rect
                            x={0}
                            y={141}
                            width={30}
                            height={1}
                            fill='black'
                        />
                        {/* <Rect
                            x={0}
                            y={150}
                            width={10}
                            height={10}
                            fill='black'
                        />
                        <Rect
                            x={0}
                            y={167}
                            width={30}
                            height={1}
                            fill='black'
                        // /> */}
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
                            console.log( "proceeding with draw image", { src: image.src, width: image.width, height: image.height } );
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
                            // console.log( this.toBuffer() );
                            console.log( JSON.stringify( this.exportLabel(), null, 2 ) );
                        }} id="DEBUG">DEBUG</Button>
                    </div>
                    {/* <PrintContext.Consumer>
                        {( { setCurrentLabel } ) => {
                            if ( ! this.currentLabel ){ 
                                this.currentLabel = this.exportLabel(this.props.label);
                                console.log( "LabelDraw, setting this.currentLabel", this.currentLabel );
                            }
                            if( this.canvas && this.currentLabel && ( ! this.context.currentLabel || this.context.currentLabel.isEqual(this.currentLabel) ) ){
                                console.log("PrintContext adding currentLabel")
                                setCurrentLabel(this.currentLabel);
                            }
                            return null;
                        }}
                    </PrintContext.Consumer> */}
                    {/* {this.state.shouldSendBuffer ?
                        <SendBuffer buffer={this.toBuffer()} />
                        : null} */}
                </div>
            </DrawContext.Provider>
        );
    }
    // private currentLabel: LabelExport<any>;
    // get currentLabel(): LabelExport<any> {
    //     if ( ! this._currentLabel ) { 
    //         this._currentLabel 
    //     } 
    //     return this._currentLabel
    // }
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