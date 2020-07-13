
import React, { Component } from 'react';
import { Stage } from 'react-konva';
import type { KonvaEventObject } from 'konva/types/Node';
import { Button, Tooltip, message } from 'antd';
import { MedicineBoxOutlined, FontSizeOutlined, QrcodeOutlined, PictureOutlined, PlusCircleOutlined } from '@ant-design/icons';

import { Item } from '~lib/Item';
import { DISPLAY } from '~lib/types/enums';
import { DrawContextMenu } from './DrawContextMenu';
import { DrawEditText } from './DrawEditText';
import { LabelAddImageModal } from './Image/LabelAddImageModal';

import { QREditModal } from './QREditModal';
import { Integer } from '~lib/types/uint8';
import { LabelText, LabelImage, LabelQR, FormatOptionsT, LabelExport } from '~lib/LabelConstituent';

import { NewImageUploadModal } from './Image/NewImageUploadModal';
import { PrintContext } from '~components/Print/PrintContextHandler';
import { LabelComponent } from '~components/Label/LabelComponent';
import { CodeIcon } from '../../styles/icon';
import { EditableText } from './KonvaElements/EditableText';
import { TransformableImage } from './KonvaElements/TransformableImage';
import { TransformableQR } from './KonvaElements/TransformableQR';





interface ChangedValueTextI {
    text?: ChangedValueI;
    formatOptions?: FormatOptionsT[];
    fontSize?: number;
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

type ChangedValueI = string;
// interface ChangedValueI {
//     dirty: boolean;
//     errors?: any;
//     name: string;
//     touched: boolean;
//     validating: boolean;
//     value: any;
// }

interface LabelDrawProps {
    width: number;
    // item: ItemHardwareFastenerScrewMachine;
    item?: Item<any>;
    label: LabelExport;
    updateWidth: ( newPx: number ) => void;
}


type IKonvaEventHandler = ( d: boolean | KonvaEventObject<PointerEvent | MouseEvent> ) => void;
type IHtmlEventHandler = ( d: boolean | DISPLAY | React.MouseEvent<HTMLElement, MouseEvent> ) => void;
type LabelConstituentT = LabelText | LabelImage | LabelQR;
interface LabelDrawConstituents {
    texts: LabelText[];
    images: LabelImage[];
    qrs: LabelQR[];
}

interface LabelDrawState {
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
    contextMenuLabelConstituent: LabelText | LabelImage | LabelQR;
    item: Item<any>;
    texts: LabelText[];
    images: LabelImage[];
    qrs: LabelQR[];
    uncommittedText: LabelText;
    uncommittedImage: LabelImage;
    uncommittedQR: LabelQR;
    stageRef: Stage;
    historyPosition: Integer;
    history: LabelDrawConstituents[];
    selectedShapeName: string;
}
export interface DrawContextAdditions {
    item?: Item<any>;
    updateHistory: () => void;
    setSelectedShapeName: ( name: string ) => void;
    setRef: ( stageRef: Stage ) => void;
    commitLabelText: ( labelText: LabelText ) => void;
    deleteLabelConstituent: ( constituent: LabelConstituentT ) => void;
    commitLabelImage: ( labelImage: LabelImage ) => void;
    commitLabelQR: ( LabelQR: LabelQR ) => void;
    displayContextMenu: IKonvaEventHandler;
}

export type DrawContext = DrawContextAdditions & Omit<LabelDrawState, "item">;

const NoOp = (opName?:  string) => { 
    return () => console.warn(`NOOP: ${opName ?? 'this'} operation is not configured.`);
};

const DrawContextStateDefault: DrawContext = {
    displayContextMenu: () => { },
    displayContextMenuStatus: false,
    displayContextMenuPosition: undefined,
    displayEditTextModal: () => DISPLAY.HIDDEN,
    displayEditTextModalStatus: null,
    contextMenuLabelConstituent: null,
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
    commitLabelImage: NoOp(),
    commitLabelText: NoOp(),
    deleteLabelConstituent: NoOp(),
    commitLabelQR: NoOp(),
    stageRef: null,
    setRef: null,
    historyPosition: 0,
    history: [],
    updateHistory: NoOp(),
    selectedShapeName: '',
    setSelectedShapeName: NoOp('setSelectedShapeName'),
};

export const DrawContext = React.createContext<DrawContext>( DrawContextStateDefault );



export class LabelDraw extends Component<LabelDrawProps, LabelDrawState> {

    static contextType = PrintContext;
    declare context: React.ContextType<typeof PrintContext>;


    constructor ( props: LabelDrawProps ) {
        super( props );

        this.state.texts = this.props.label.content.texts ?? [];
        this.state.qrs = this.props.label.content.qrs ?? [];
        this.state.images = this.props.label.content.images ?? [];
        // this.state.item = this.props.label.
    }

    /**
     * Right click menu on Konva canvas
     */
    displayContextMenu = ( display: KonvaEventObject<PointerEvent | MouseEvent> ) => {
        console.log( "displayContextMenu()", display );
        if ( display ) {
            if ( display.evt ) { display.evt.preventDefault(); }
            this.setState( {
                item: this.props.item,
                displayContextMenuStatus: true,
                contextMenuLabelConstituent: display.currentTarget.attrs.textObject || display.currentTarget.attrs.imageObject || display.currentTarget.attrs.qrObject,
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
        console.log( "displayEditTextModal() d=", d );
        if ( ( d as DISPLAY ) === DISPLAY.HIDDEN ) {
            console.debug( "d = HIDDEN" );
            this.setState( {
                displayEditTextModalStatus: DISPLAY.HIDDEN
            } );
            // if ( !(d as dReact.MouseEvent<HTMLElement, MouseEvent>) && d === display.HIDDEN ){
            return DISPLAY.HIDDEN;
        }
        if ( !d ) {
            console.debug( "!d" );
            return this.state.displayEditTextModalStatus ? DISPLAY.VISIBLE : DISPLAY.HIDDEN;
        }
        ( d as React.MouseEvent<HTMLElement, MouseEvent> ).preventDefault();
        if ( d ) {
            console.debug( "d = VISIBLE" );
            this.setState( {
                item: this.props.item,
                displayEditTextModalStatus: DISPLAY.VISIBLE
            } );
        } else {

            console.debug( "d = (default) HIDDEN" );
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

    /** Run when `DrawEditText`'s form changes values */
    updateLabelTexts = ( changedValue: ChangedValueTextI, labelText: LabelText ) => {
        console.log( "input for updateLabelTexts", { changedValue, labelText } );
        // let texts = this.state.texts;
        let updatedText = false;
        // if ( ! labelText ){
        //     labelText = new LabelText();
        // // }
        if ( changedValue.text ) {
            console.log( "setting text to", changedValue.text );
            labelText.text = changedValue.text;
        } else if ( changedValue.formatOptions && changedValue.formatOptions ) {
            console.log( "setting formatOptions to", { formatOptions: changedValue, value: changedValue.formatOptions } );
            // if changedValue.
            labelText.bold = ( changedValue.formatOptions as FormatOptionsT[] ).includes( "bold" );
            labelText.underline = ( changedValue.formatOptions as FormatOptionsT[] ).includes( "underline" );
            labelText.italic = ( changedValue.formatOptions as FormatOptionsT[] ).includes( "italic" );
        } else if ( changedValue.fontSize ) {
            labelText.fontSize = changedValue.fontSize;
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



    shouldComponentUpdate = ( nextProps: LabelDrawProps, nextState: LabelDrawState ): boolean => {
        if ( !this.context.getCurrentLabel() ) {
            this.context.setCurrentLabel( this.exportLabel() );
        }

        let updateContextResult = this.updateContext();
        let shouldUpdate = updateContextResult || nextState != this.state || nextProps != this.props;
        if ( updateContextResult ) {
            this.updateHistory();
        }
        console.log( `shouldComponentUpdate ? ${ shouldUpdate }\n`, {
            'history_length': this.state.history.length,
            shouldUpdate,
            updateContextResult,
            "nextProps!=this.props": nextProps != this.props,
            "nextState!=this.state": nextState != this.state,
            nextState,
            "state": this.state
        } );
        return shouldUpdate;
    };

    handleUndo = () => {
        if ( this.state.historyPosition === 0 ) {
            message.warn( "history is already at state #0" );
            return;
        }
        this.setState( {
            "historyPosition": this.state.historyPosition - 1,
            ...this.state.history[ this.state.historyPosition ]
        } );
    };

    handleRedo = () => {
        if ( this.state.historyPosition === this.state.history.length - 1 ) {
            message.warn( "history is already at the most recent state" );
            return;
        }
        this.setState( {
            "historyPosition": this.state.historyPosition + 1,
            ...this.state.history[ this.state.historyPosition ]
        } );
    };

    /**
    * updateHistory
    * 
    * Records history state and increments history position
    */
    updateHistory = () => {
        this.setState( {
            historyPosition: this.state.historyPosition + 1,
            history: [ ...this.state.history,
            {
                texts: this.state.texts,
                images: this.state.images,
                qrs: this.state.qrs,
            }
            ]
        } );
    };

    /**
     * return value of `false` if the label was not exported.
     */
    updateContext = (): boolean => {
        console.log( "should updateContext ?", {
            'this.exportLabel()': this.exportLabel(),
            'this.context.getCurrentLabel': this.context.getCurrentLabel,
            'this.exportLabel() !== this.context.getCurrentLabel()': this.exportLabel() !== this.context.getCurrentLabel(),
        } );
        if ( !this.context.getCurrentLabel() || this.exportLabel() !== this.context.getCurrentLabel() ) {
            console.log( "will updateContext" );
            this.context.setCurrentLabel( this.exportLabel() );
            return true;
        }
        console.log( 'do NOT updateContext' );
        return false;
    };

    /**
     * Removes the `LabelConstituent` object from the label as well as deletes/`remove()`s its `Node` from `Konva`
     */
    deleteLabelConstituent = ( constituent: LabelText | LabelImage | LabelQR ): void => {
        console.log( "deleteLabelConstituent : constituent <?>", constituent );
        if ( LabelText.is( constituent ) ) {
            console.log( "deleteLabelConstituent : constituent <LabelText>", constituent );
            this.setState( {
                "texts":
                    this.state.texts.filter( ( text ) => {
                        if ( text.id === constituent.id ) {
                            console.log( `deleteLabelConstituent <texts> : deleting id ${ constituent.id }` );
                            this.state.stageRef.getStage().findOne( "." + constituent.id ).remove();
                            return;
                        }
                        return text;
                    } )
            },
                () => console.log( `deleteLabelConstituent <texts> : is now`, this.state.texts )
            );
        }
        if ( constituent instanceof LabelImage ) {
            console.log( "deleteLabelConstituent : constituent <LabelImage>", constituent );
            this.setState( {
                "images":
                    this.state.images.filter( ( image ) => {
                        if ( image.id == constituent.id ) {
                            console.log( `deleteLabelConstituent <images> : deleting id ${ constituent.id }` );
                            this.state.stageRef.getStage().findOne( "." + constituent.id ).remove();
                            return;
                        }
                        return image;
                    } )
            },
                () => console.log( `deleteLabelConstituent <images> : is now`, this.state.images )
            );
        }
        if ( constituent instanceof LabelQR ) {
            console.log( "deleteLabelConstituent : constituent <LabelQR>", constituent );
            this.setState( {
                "qrs":
                    this.state.qrs.filter( ( qr ) => {
                        if ( qr.id == constituent.id ) {
                            console.log( `deleteLabelConstituent <qrs> : deleting id ${ constituent.id }` );
                            this.state.stageRef.getStage().findOne( "." + constituent.id ).remove();
                            return;
                        }
                        return qr;
                    } )
            },
                () => console.log( `deleteLabelConstituent <qrs> : is now`, this.state.qrs )
            );
        }
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


    /**
     * changedValue - values changes on...
     * labelQR - LabelQR object whose values have changed
     * NOTE: pass in FALSE to delete the object
     **/
    updateLabelQR = ( changedValue: Partial<LabelQR> | false, labelQR: LabelQR ) => {
        console.log({method: 'updateLabelQR', changedValue, labelQR});
        let updatedQR = false;
        if ( changedValue === false ){
            this.setState( {
                qrs: this.state.qrs.filter( qr => qr.id !== labelQR.id)
            });
            return;
        }
        if ( changedValue.dataURL ) {
            console.log( "setting labelQR to", changedValue.dataURL );
            labelQR.dataURL = changedValue.dataURL;
        }
        // if ( changedValue.dataURL ) {
        //     console.log( "setting labelQR to", changedValue.dataURL );
        //     labelQR.sv = changedValue.svgImage;
        //     // labelQR.svgDataURL = changedValue.svgDataURL;
        // }
        // if ( changedValue.canvasElement ) {
        //     console.log( "setting canvasElement on labelQR to", changedValue.canvasElement );
        //     labelQR.canvasElement = changedValue.canvasElement;
        // }
        if ( changedValue.properties && labelQR.properties !== changedValue.properties ) {
            console.log( "setting properties on labelQR to", changedValue.properties );
            labelQR.properties = changedValue.properties;
            this.setState( { uncommittedQR: labelQR } );
        }
        this.state.qrs.forEach( ( qr => {
            if ( qr.id == labelQR.id ) {
                console.log( "updating existing labelQR with id", labelQR.id );
                qr = labelQR as LabelQR;
                updatedQR = true;
                return;
            }
        } ) );
        if ( !updatedQR ) {
            console.log( "adding uncommitted labelQR with id", labelQR.id );
            this.setState( {
                qrs: [ ...this.state.qrs, labelQR as LabelQR ]
            } );
        }
        console.log( { "this.state.qrs is now": this.state.qrs, "pending": [ ...this.state.qrs, labelQR ] });
    };


    commitLableQR = <T extends {}> ( labelQR: LabelQR ) => {
        this.setState( { uncommittedQR: new LabelQR() } );
    };

    /*
     * type React.Ref = ((instance: T) => void) | React.RefObject
    **/
    setRef = ( ref: Stage ): void => {
        console.log( "SETTING REF FOR canvas", ref );
        if ( !this.state.stageRef ) {
            console.log( "SETTING REF FOR CANVAS -- SAVED TO STATE" );
            console.log( `LabelComponent Stage Canvas size:`, ref.getStage().toCanvas( {} ).height, ref.getStage().toCanvas( {} ).width );
            this.setState( { stageRef: ref }, this.updateContext );
        }
    };

    setSelectedShapeName = ( name: string ) => {
        console.log("LabelDraw.setSelectedShapeName:", name);
        this.setState( {
            selectedShapeName: name
        } );
    };

    state: LabelDrawState = {
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
        contextMenuLabelConstituent: null,
        item: null,
        texts: [], // NOTE: for pre-existing deserialize here.
        images: [],
        qrs: [],
        uncommittedText: new LabelText(),
        uncommittedImage: new LabelImage(),
        uncommittedQR: new LabelQR( { item: this.props.item } ),
        stageRef: null,
        historyPosition: 0,
        history: [],
        selectedShapeName: ''
    };
    ContextConstants: DrawContextAdditions = {
        setSelectedShapeName: this.setSelectedShapeName,
        displayContextMenu: this.displayContextMenu,
        commitLabelText: this.commitLabelText,
        commitLabelImage: this.commitLabelImage,
        commitLabelQR: this.commitLableQR,
        deleteLabelConstituent: this.deleteLabelConstituent,
        setRef: this.setRef,
        updateHistory: this.updateHistory,
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
    /**
     * return imgdata for the entire canvas.  
     * THIS IS A _**VERY** EXPENSIVE CALL_
     */
    get imgData (): ImageData | null {
        return this.canvas && this.width && this.height ? this.canvas.getContext( '2d' ).getImageData( 0, 0, this.width, this.height ) : null;
    }

    exportLabel = (): LabelExport => {
        console.group( "LabelDraw.exportLabel()" );
        // console.trace();
        // console.log( "LabelDraw, exporting Label verification values", {
        //     // "canvas": this.canvas,
        //     "width": this.width,
        //     "height": this.height,
        //     "imgData": this.imgData,
        //     "this.props.label": this.props.label
        // } );
        // console.trace();
        if ( this.canvas && this.width && this.height && this.imgData ) {
            JSON.stringify( this.state.texts );
            console.log( "exportLabel() setValues" );
            this.props.label.setValues( {
                ...( this.props.label ? { id: this.props.label.id } : {} ),
                ...{
                    item_id: this.state.item ? this.state.item.id : this.props.label.item ? this.props.label.item.id : null,
                    texts: this.state.texts,
                    images: this.state.images,
                    qrs: this.state.qrs,
                    imgData: this.imgData,
                    // dataURL: this.dataURL,
                    width: this.width,
                    height: this.height
                }
            } );
        } else {
            console.warn( "exportLabel could not update values, failed value existance check." );
        }
        console.groupEnd();
        return this.props.label;
    };

    render () {
        const { item } = this.props;
        console.log( `LabelDraw.render() with props:\n`, this.props );
        return (
            <DrawContext.Provider
                // value={{ ...( this.state ),
                //     setSelectedShapeName: this.setSelectedShapeName
                // }}>
                value={{ ...( this.state ), ...( this.ContextConstants ) }}>
                <div>
                    {this.state.displayContextMenuStatus ?
                        <DrawContextMenu />
                        : null}
                    {this.state.displayEditTextModalStatus ?
                        <DrawEditText
                            visibleHandler={this.displayEditTextModal}
                            changeHandler={this.updateLabelTexts}
                            item={item}
                            labelText={this.state.uncommittedText} />
                        : null}
                    {this.state.displayImageSelectModalStatus ?
                        <LabelAddImageModal
                            visibleHandler={this.displayImageSelectModal}
                            changeHandler={this.updateLabelImages}
                            item={item}
                            labelImage={this.state.uncommittedImage} />
                        : null}
                    {this.state.displayQREditModalStatus ?
                        <QREditModal
                            visibleHandler={this.displayQREditModal}
                            changeHandler={this.updateLabelQR}
                            item={item}
                            labelQR={this.state.uncommittedQR} />
                        : null}
                    {this.state.displayImageUploadModalStatus ?
                        <NewImageUploadModal visibleHandler={this.displayImageUploadModal} changeHandler={this.updateLabelImages} item={item} labelImage={this.state.uncommittedImage} />
                        : null}

                    {/* DEBUG & DIAGNOSTICS */}
                    <div style={{ float: 'right', position: "relative", top: -40 }}>
                        <Tooltip key="debug" placement="top" title="Send debug information to the console">
                            <Button icon={<MedicineBoxOutlined />} style={{
                                padding: 0,
                                width: '24px',
                                height: '24px',
                                border: 0
                            }} onClick={() => {
                                console.log( JSON.stringify( this.exportLabel(), null, 2 ) );
                                console.log( this.context.currentLabelToBuffer() );
                                message.info( "Debug output sent to console" );
                            }} id="DEBUG" />
                        </Tooltip>
                        <Tooltip key="codeView" placement="top" title="View current label json">
                            <Button icon={<CodeIcon />} style={{
                                padding: 0,
                                width: '24px',
                                height: '24px',
                                border: 0,
                                position: "relative",
                                top: "2px"
                            }} onClick={() => {
                                console.log( JSON.stringify( this.exportLabel(), null, 2 ) );
                                console.log( this.context.currentLabelToBuffer() );
                                message.info( "Debug output sent to console" );
                            }} id="DEBUG" />
                        </Tooltip>
                        <Tooltip key="EXPAND_CANVAS_TOOLTIP" placement="top" title="Enlarge print canvas">
                            <Button icon={<PlusCircleOutlined />} style={{
                                padding: 0,
                                width: '24px',
                                height: '24px',
                                border: 0,
                                position: "relative",
                                // top: "2px"
                            }} onClick={() => {
                                console.log( "expanding canvas\n", { was: this.state.stageRef.getStage().width()})
                                // console.log( JSON.stringify( this.exportLabel(), null, 2 ) );
                                // console.log( this.context.currentLabelToBuffer() );
                                this.props.updateWidth( this.state.stageRef.getStage().width() + 50);
                                // this.state.stageRef.getStage().width( this.state.stageRef.getStage().width() + 50 );
                                // this.state.stageRef.getStage().height( this.state.stageRef.getStage().width() + 50 );
                                }} id="EXPAND_CANVAS" />
                        </Tooltip>
                    </div>

                    <LabelComponent {...this.props} selectedShapeName={this.state.selectedShapeName}>
                        {/* < DebugRectangles /> */}
                        {/* TEXT */}
                        {this.state.texts.map( labelText => {
                            console.log("Drawing EditableText");
                            return <EditableText
                                    {...this.ContextConstants}
                                    selectedShapeName={this.state.selectedShapeName} 
                                    key={`editable_text_${labelText.id}`} 
                                    labelText={labelText} item={item} />;
                        })}
                        {/* IMAGE */}
                        {this.state.images.map( labelImage => {
                            console.log( "drawing image", labelImage );
                            return <TransformableImage
                                    {...this.ContextConstants}
                                    selectedShapeName={this.state.selectedShapeName}
                                    key={`transformable_image_${ labelImage.id }`} 
                                    labelImage={labelImage} 
                                    item={item} />;
                        } )}
                        {/* QR */}
                        {this.state.qrs.map( labelQR => {
                            console.log( "drawing LabelQR", labelQR );
                            return <TransformableQR 
                                {...this.ContextConstants}
                                selectedShapeName={this.state.selectedShapeName}
                                key={`transformable_qr_${ labelQR.id }`} labelQR={labelQR} item={item} />;
                        } )}
                    </LabelComponent>
                    <br />
                    <div style={{
                        paddingTop: 10,
                        textAlign: 'center',
                    }}>
                        <Button style={{ margin: 5 }} icon={<FontSizeOutlined />} onClick={this.displayEditTextModal} id="ADD_TEXT">Add Text</Button>
                        <Button style={{ margin: 5 }} icon={<QrcodeOutlined />} onClick={this.displayQREditModal} id="ADD_QR">Add QR</Button>
                        <Button style={{ margin: 5 }} icon={<PictureOutlined />} onClick={this.displayImageSelectModal} id="ADD_IMAGE">Add Image</Button>
                    </div>
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