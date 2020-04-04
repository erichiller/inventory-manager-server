
import React, { Component } from 'react';


import { Item } from '../../lib/item';
import { DISPLAY } from '../../lib/types/enums';
import { DrawContextMenu } from './DrawContextMenu';
import { KonvaEventObject } from 'konva/types/Node';
import { Button, Tooltip, message } from 'antd';
import DrawEditText from './DrawEditText';
import DrawAddImage from './image/LabelAddImageModal';

import QREditModal from './QREditModal';
import { Integer } from '../../lib/types/uint8';
import { LabelText, LabelImage, LabelQR, FormatOptionsT, LabelExport, UUIDStringT } from '../../lib/LabelConstituent';

import nunjucks from 'nunjucks';
import { NewImageUploadModal } from './image/NewImageUploadModal';
import { PrintContext } from '../print/PrintContextHandler';
import { LabelComponent } from '../label/LabelComponent';
import { Stage, Text, Image, Rect } from 'react-konva';
import { MedicineBoxOutlined, FontSizeOutlined, QrcodeOutlined, PictureOutlined } from '@ant-design/icons';





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
    width: number;
    // item: ItemHardwareFastenerBolt;
    item?: Item<any>;
    label: LabelExport;
    updateWidth: (newPx: number) => void;
}


type IKonvaEventHandler = ( d: boolean | KonvaEventObject<PointerEvent> ) => void;
type IHtmlEventHandler = ( d: boolean | DISPLAY | React.MouseEvent<HTMLElement, MouseEvent> ) => void;
type LabelConstituentT = LabelText | LabelImage | LabelQR;
interface LabelDrawConstituents {
    texts: LabelText[];
    images: LabelImage[];
    qrs: LabelQR[];
}

interface LabelDrawState {
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
    contextMenuLabelConstituent: LabelText | LabelImage | LabelQR;
    item: Item<any>;
    texts: LabelText[];
    images: LabelImage[];
    qrs: LabelQR[];
    uncommittedText: LabelText;
    uncommittedImage: LabelImage;
    uncommittedQR: LabelQR;
    commitLabelText: ( labelText: LabelText ) => void;
    deleteLabelConstituent: ( constituent: LabelConstituentT ) => void;
    commitLabelImage: ( labelImage: LabelImage ) => void;
    commitLabelQR: ( LabelQR: LabelQR ) => void;
    stageRef: Stage;
    setRef: ( stageRef: Stage ) => void;
    historyPosition: Integer;
    history: LabelDrawConstituents[];
    labelTextColor: string;
    setLabelTextColor: (color: string) => void;
}
interface DrawContext extends Omit<LabelDrawState, "item"> {
    item?: Item<any>;
}

const DrawContextStateDefault: LabelDrawState = {
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
    commitLabelImage: () => { },
    commitLabelText: () => { },
    deleteLabelConstituent: () => { },
    commitLabelQR: () => { },
    stageRef: null,
    setRef: null,
    historyPosition: 0,
    history: [],
    labelTextColor: 'black',
    setLabelTextColor: () => { },
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

    displayContextMenu = ( display: KonvaEventObject<PointerEvent> ) => {
        console.log( "displayContextMenu()", display );
        if ( display ) {
            display.evt.preventDefault();
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

    setLabelTextColor = ( color: string ) => {
        this.setState( {
            labelTextColor: color
        } );
    }


    shouldComponentUpdate = ( nextProps: LabelDrawProps, nextState: LabelDrawState ): boolean => {
        if ( !this.context.getCurrentLabel() ) {
            this.context.setCurrentLabel( this.exportLabel() );
        }

        let updateContextResult = this.updateContext();
        let shouldUpdate = updateContextResult || nextState != this.state || nextProps != this.props;
        if ( updateContextResult ) {
            this.updateHistory();
        }
        console.log( `shouldComponentUpdate ? ${shouldUpdate}\n`, {
            'history_length': this.state.history.length , 
            shouldUpdate , 
            updateContextResult,
            "nextProps!=this.props": nextProps != this.props,
            "nextState!=this.state": nextState != this.state, 
            nextState, 
            "state": this.state 
        });
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
        });
        if ( !this.context.getCurrentLabel() || this.exportLabel() !== this.context.getCurrentLabel() ) {
            console.log( "will updateContext" );
            this.context.setCurrentLabel( this.exportLabel() );
            return true;
        }
        console.log( 'do NOT updateContext' );
        return false;
    };

    deleteLabelConstituent = ( constituent: LabelText | LabelImage | LabelQR ): void => {
        console.log( "deleteLabelConstituent : constituent <?>", constituent );
        if ( LabelText.is( constituent ) ) {
            console.log( "deleteLabelConstituent : constituent <LabelText>", constituent );
            this.setState( {
                "texts":
                    this.state.texts.filter( ( text ) => {
                        if ( text.id == constituent.id ) {
                            console.log( `deleteLabelConstituent <texts> : deleting id ${ constituent.id }` );
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


    updateLabelQR =  ( changedValue: Partial<LabelQR>, labelQR: LabelQR ) => {
        let updatedQR = false;
        if ( changedValue.dataURL ) {
            console.log( "setting labelQR to", changedValue.dataURL );
            labelQR.dataURL = changedValue.dataURL;
        }
        if ( changedValue.canvasElement ) {
            console.log( "setting canvasElement on labelQR to", changedValue.canvasElement );
            labelQR.canvasElement = changedValue.canvasElement;
        }
        if ( changedValue.properties ) {
            console.log( "setting properties on labelQR to", changedValue.properties );
            labelQR.properties = changedValue.properties;
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
        console.log( "this.state.qrs is now", this.state.qrs, "pending", [ ...this.state.qrs, labelQR ] );
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

    state: LabelDrawState = {
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
        contextMenuLabelConstituent: null,
        item: null,
        texts: [], // NOTE: for pre-existing deserialize here.
        images: [],
        qrs: [],
        uncommittedText: new LabelText(),
        uncommittedImage: new LabelImage(),
        uncommittedQR: new LabelQR({item: this.props.item}),
        commitLabelText: this.commitLabelText,
        commitLabelImage: this.commitLabelImage,
        commitLabelQR: this.commitLableQR,
        deleteLabelConstituent: this.deleteLabelConstituent,
        stageRef: null,
        setRef: this.setRef,
        historyPosition: 0,
        history: [],
        labelTextColor: 'black',
        setLabelTextColor: this.setLabelTextColor
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

    exportLabel = (): LabelExport => {
        console.group( "LabelDraw.exportLabel()" );
        // console.trace();
        console.log( "LabelDraw, exporting Label verification values", {
            "canvas": this.canvas,
            "width": this.width,
            "height": this.height,
            "imgData": this.imgData,
            "this.props.label": this.props.label
        } );
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
        console.log( `LabelDraw.render() with width=`,this.props );
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

                    <Tooltip key="debug" placement="top" title="Send debug information to the console">
                        <Button icon={<MedicineBoxOutlined />} style={{
                            padding: 0,
                            width: '24px',
                            height: '24px',
                            float: 'right',
                            border: 0
                        }} onClick={() => {
                            console.log( JSON.stringify( this.exportLabel(), null, 2 ) );
                            console.log( this.context.currentLabelToBuffer() );
                            message.info( "Debug output sent to console" );
                        }} id="DEBUG" />
                    </Tooltip>

                    <LabelComponent {...this.props}>
                        {this.state.texts.map( labelText => {
                            console.log( "drawing new labelText", labelText );
                            return <Text
                                textObject={labelText}
                                key={labelText.id}
                                name={labelText.id}
                                text={nunjucks.renderString( labelText.text, item )}
                                fontStyle={labelText.bold ? "bold" : labelText.italic ? "italic" : "normal"}
                                textDecoration={labelText.underline ? "underlined" : ""}
                                fontSize={labelText.fontSize}
                                fill={labelText.text.includes( "{{" ) ? 'red' : 'black'}
                                onContextMenu={this.state.displayContextMenu}
                                x={labelText.x}
                                y={labelText.y}
                                // stroke={this.state.labelTextColor}
                                scaleX={labelText.scaleX}
                                scaleY={labelText.scaleY}
                                rotation={labelText.rotation}
                                onTransformEnd={( evt: KonvaEventObject<Event> ) => {
                                    console.log( "(Text) TransformEnd:\n", evt, "attrs", evt.currentTarget.attrs );
                                    ( evt.currentTarget.attrs.textObject as LabelText ).setDrawAttrs( {
                                        x: evt.currentTarget.attrs.x,
                                        y: evt.currentTarget.attrs.y,
                                        scaleX: evt.currentTarget.attrs.scaleX,
                                        scaleY: evt.currentTarget.attrs.scaleY,
                                        rotation: evt.currentTarget.attrs.rotation
                                    } );
                                    this.updateHistory();
                                }}
                                onDragEnd={( evt: KonvaEventObject<DragEvent> ) => {
                                    console.log( "(Text) DragEnd:", evt, "to:", [ evt.currentTarget.attrs.x, evt.currentTarget.attrs.y ] );
                                    ( evt.currentTarget.attrs.textObject as LabelText ).setDrawAttrs( {
                                        x: evt.currentTarget.attrs.x,
                                        y: evt.currentTarget.attrs.y,
                                        scaleX: evt.currentTarget.attrs.scaleX,
                                        scaleY: evt.currentTarget.attrs.scaleY,
                                        rotation: evt.currentTarget.attrs.rotation
                                    } );
                                    this.updateHistory();
                                }}
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
                                imageObject={labelImage}
                                key={labelImage.id}
                                name={labelImage.id}
                                image={image}
                                onContextMenu={this.state.displayContextMenu}
                                x={labelImage.x}
                                y={labelImage.y}
                                scaleX={labelImage.scaleX}
                                scaleY={labelImage.scaleY}
                                rotation={labelImage.rotation}
                                onTransformEnd={( evt: KonvaEventObject<Event> ) => {
                                    console.log( "(Image) TransformEnd:\n", evt, "attrs", evt.currentTarget.attrs );

                                    ( evt.currentTarget.attrs.imageObject as LabelImage ).setDrawAttrs( {
                                        x: evt.currentTarget.attrs.x,
                                        y: evt.currentTarget.attrs.y,
                                        scaleX: evt.currentTarget.attrs.scaleX,
                                        scaleY: evt.currentTarget.attrs.scaleY,
                                        rotation: evt.currentTarget.attrs.rotation
                                    } );
                                    this.updateHistory();
                                }}
                                onDragEnd={( evt: KonvaEventObject<DragEvent> ) => {
                                    console.log( "(Image) DragEnd:\n", evt, "attrs", evt.currentTarget.attrs );
                                    ( evt.currentTarget.attrs.imageObject as LabelImage ).setDrawAttrs( {
                                        x: evt.currentTarget.attrs.x,
                                        y: evt.currentTarget.attrs.y,
                                        scaleX: evt.currentTarget.attrs.scaleX,
                                        scaleY: evt.currentTarget.attrs.scaleY,
                                        rotation: evt.currentTarget.attrs.rotation
                                    } );
                                    this.updateHistory();
                                }}
                                draggable />;
                        } )}
                        {this.state.qrs.map( labelQR => {
                            console.log( "drawing LabelQR", labelQR );
                            return <Image
                                qrObject={labelQR}
                                key={labelQR.id}
                                name={labelQR.id}
                                onContextMenu={this.state.displayContextMenu}
                                x={labelQR.x}
                                y={labelQR.y}
                                scaleX={labelQR.scaleX}
                                scaleY={labelQR.scaleY}
                                rotation={labelQR.rotation}
                                onTransformEnd={( evt: KonvaEventObject<Event> ) => {
                                    console.log( "(QR) TransformEnd:\n", evt );
                                    ( evt.currentTarget.attrs.qrObject as LabelQR ).drawAttrs = {
                                        x: evt.currentTarget.attrs.x,
                                        y: evt.currentTarget.attrs.y,
                                        scaleX: evt.currentTarget.attrs.scaleX,
                                        scaleY: evt.currentTarget.attrs.scaleY,
                                        rotation: evt.currentTarget.attrs.rotation
                                    };
                                    this.updateHistory();
                                }}
                                onDragEnd={( evt: KonvaEventObject<DragEvent> ) => {
                                    console.log( "(QR) DragEnd:\n", evt );
                                    ( evt.currentTarget.attrs.qrObject as LabelQR ).drawAttrs = {
                                        x: evt.currentTarget.attrs.x,
                                        y: evt.currentTarget.attrs.y,
                                        scaleX: evt.currentTarget.attrs.scaleX,
                                        scaleY: evt.currentTarget.attrs.scaleY,
                                        rotation: evt.currentTarget.attrs.rotation
                                    };
                                    this.updateHistory();
                                }}
                                image={labelQR.canvasElement}
                                draggable />;
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