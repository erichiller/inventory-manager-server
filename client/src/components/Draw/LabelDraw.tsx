
import React, { Component, constructor, useContext, useEffect, useState } from "react";
import type { Stage } from 'konva/types/Stage';
import type { KonvaEventObject } from 'konva/types/Node';
import { Button, Tooltip, message, Input } from 'antd';
import { MedicineBoxOutlined, FontSizeOutlined, QrcodeOutlined, PictureOutlined, PlusCircleOutlined } from '@ant-design/icons';

import { Item } from '~lib/Item';
import { DrawContextMenu } from './DrawContextMenu';
import { EditTextModal } from './EditTextModal';
import { LabelAddImageModal } from './Image/LabelAddImageModal';

import { QREditModal } from './QREditModal';
import { Integer } from '~lib/types/uint8';
import { LabelText, LabelImage, LabelQR, FormatOptionsT } from '~lib/Label/LabelConstituent';
import { LabelExport } from "~lib/Label/LabelExport";

import { PrintContext } from '~components/Print/PrintContextHandler';
import { LabelComponent } from '~components/Label/LabelComponent';
import { CodeIcon } from '../../styles/icon';
import { EditableText } from './KonvaElements/EditableText';
import { TransformableImage } from './KonvaElements/TransformableImage';
import { TransformableQR } from './KonvaElements/TransformableQR';
import { JsonModal } from '~components/Shared/JsonModal';
import { useRef } from "react";





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

export interface LabelDrawProps {
    width: number;
    // item: ItemHardwareFastenerScrewMachine;
    item?: Item<any>;
    label: LabelExport;
    updateWidth: ( newPx: number ) => void;
}


export type IKonvaEventHandler = ( d: boolean | KonvaEventObject<PointerEvent | MouseEvent> ) => void;
// type IHtmlEventHandler = ( d: boolean | React.MouseEvent<HTMLElement, MouseEvent> ) => void;
// type LabelConstituentT = LabelText | LabelImage | LabelQR;
interface LabelDrawConstituents {
    texts: LabelText[];
    images: LabelImage[];
    qrs: LabelQR[];
}

// interface LabelDrawState {
//     displayContextMenuStatus: boolean;
//     displayContextMenuPosition?: [ number, number ];
//     displayEditTextModal: ( d: DISPLAY | React.MouseEvent<HTMLElement, MouseEvent> ) => DISPLAY;
//     displayEditTextModalStatus: DISPLAY;
//     displayImageSelectModal: ( d: boolean | React.MouseEvent<HTMLElement, MouseEvent> ) => DISPLAY;
//     displayImageSelectModalStatus: DISPLAY;
//     displayQREditModal: ( d: DISPLAY | React.MouseEvent<HTMLElement, MouseEvent> ) => DISPLAY;
//     displayQREditModalStatus: DISPLAY;
//     modal: React.ReactElement;
//     contextMenuLabelConstituent: LabelText | LabelImage | LabelQR;
//     item: Item<any>;
//     texts: LabelText[];
//     images: LabelImage[];
//     qrs: LabelQR[];
//     uncommittedText: LabelText;
//     uncommittedImage: LabelImage;
//     uncommittedQR: LabelQR;
//     stageRef: Stage;
//     historyPosition: Integer;
//     history: LabelDrawConstituents[];
//     selectedShapeName: string;
// }
// export interface DrawContextAdditions {
//     item?: Item<any>;
//     updateHistory: () => void;
//     setSelectedShapeName: ( name: string ) => void;
//     setRef: ( stageRef: Stage ) => void;
//     commitLabelText: ( labelText: LabelText ) => void;
//     deleteLabelConstituent: ( constituent: LabelConstituentT ) => void;
//     commitLabelImage: ( labelImage: LabelImage ) => void;
//     commitLabelQR: ( LabelQR: LabelQR ) => void;
//     displayContextMenu: IKonvaEventHandler;
// }

// export type DrawContextT = DrawContextAdditions & Omit<LabelDrawState, "item">;

// const NoOp = (opName?:  string) => { 
//     return () => console.warn(`NOOP: ${opName ?? 'this'} operation is not configured.`);
// };

// const DrawContextStateDefault: DrawContextT = {
//     displayContextMenu: () => { },
//     displayContextMenuStatus: false,
//     displayContextMenuPosition: undefined,
//     displayEditTextModal: () => DISPLAY.HIDDEN,
//     displayEditTextModalStatus: null,
//     contextMenuLabelConstituent: null,
//     displayQREditModal: () => DISPLAY.HIDDEN,
//     displayQREditModalStatus: null,
//     displayImageSelectModal: () => DISPLAY.HIDDEN,
//     displayImageSelectModalStatus: null,
//     modal: null,
//     // displayEditTextModalStatus: display.HIDDEN,
//     // displayEditTextModalStatus: display.HIDDEN,
//     item: undefined,
//     texts: [],
//     images: [],
//     qrs: [],
//     uncommittedText: null,
//     uncommittedImage: null,
//     uncommittedQR: null,
//     commitLabelImage: NoOp(),
//     commitLabelText: NoOp(),
//     deleteLabelConstituent: NoOp(),
//     commitLabelQR: NoOp(),
//     stageRef: null,
//     setRef: null,
//     historyPosition: 0,
//     history: [],
//     updateHistory: NoOp(),
//     selectedShapeName: '',
//     setSelectedShapeName: NoOp('setSelectedShapeName'),
// };

// export const DrawContext = React.createContext<DrawContextT>( DrawContextStateDefault );


export const LabelDraw: React.FC<LabelDrawProps> = ( props ) => {
    const { item } = props;

    const printContext = useContext( PrintContext );

    const [ texts, setTexts ] = useState<LabelText[]>( props.label.content.texts ?? [] );
    const [ qrs, setQrs ] = useState<LabelQR[]>( props.label.content.qrs ?? [] );
    const [ images, setImages ] = useState<LabelImage[]>( props.label.content.images ?? [] );

    const [ selectedShapeName, setSelectedShapeName ] = useState<string>();

    const [ uncommittedText, setUncommittedText ] = useState<LabelText>( new LabelText() );
    const [ uncommittedQR, setUncommittedQR ] = useState<LabelQR>( new LabelQR( { item } ) );
    const [ uncommittedImage, setUncommittedImage ] = useState<LabelImage>( new LabelImage() );

    const [ historyPosition, setHistoryPosition ] = useState<Integer>( 0 );
    const [ history, setHistory ] = useState<LabelDrawConstituents[]>( [] );

    const stageRef = useRef<Stage>();



    useEffect( () => {
        let currentLabel = printContext.getCurrentLabel();
        let canvas = getCanvas();
        if ( !canvas ) {
            console.log( "no refreshing exportLabel: no canvas yet!" );
            return;
        }
        let newValues = {
            item_id: props.item ? props.item.id : currentLabel.item ? currentLabel.item.id : null,
            texts: texts,
            images: images,
            qrs: qrs,
            // imgData: imgData,
            // canvas: canvas,
            stageRef: stageRef,
            // dataURL: dataURL,
            width: canvas.width,
            height: canvas.height
        };
        console.log( "refreshing exportLabel", { newValues } );
        currentLabel.setValues( {
            ...( currentLabel ? { id: currentLabel.id } : {} ),
            ...newValues
        } );
        // exportLabel();
        // currentLabel.texts
    }, [ texts, qrs, images ] );

    /**
     * Right click menu on Konva canvas
     */
    const displayContextMenu = ( display: KonvaEventObject<PointerEvent | MouseEvent> ) => {
        console.log( "displayContextMenu()", display );
        if ( display ) {
            if ( display.evt ) { display.evt.preventDefault(); }
            let contextMenuLabelConstituent = display.currentTarget.attrs.textObject || display.currentTarget.attrs.imageObject || display.currentTarget.attrs.qrObject;

            let displayContextMenuPosition: [ x: number, y: number ] = [
                display.evt.clientX,
                display.evt.clientY
            ];
            setModal(
                <DrawContextMenu
                    displayContextMenuPosition={displayContextMenuPosition}
                    deleteLabelConstituent={deleteLabelConstituent}
                    contextMenuLabelConstituent={contextMenuLabelConstituent}
                    displayContextMenu={displayContextMenu}
                /> );
        }
        else {
            setModal( null );
        }
    };

    const displayEditTextModal = ( display: boolean ) => {
        setModal(
            <EditTextModal
                visibleHandler={setModal}
                changeHandler={updateLabelTexts}
                item={props.item}
                commitLabelText={commitLabelText}
                labelText={uncommittedText} />
        );
    };

    const displayImageSelectModal = ( display: boolean ) => {
        setModal(
            <LabelAddImageModal
                visibleHandler={setModal}
                changeHandler={updateLabelImages}
                item={item}
                commitLabelImage={commitLabelImage}
                labelImage={uncommittedImage} />
        );
    };
    const displayQREditModal = ( display: boolean ) => {
        setModal(
            <QREditModal
                visibleHandler={setModal}
                changeHandler={updateLabelQR}
                item={item}
                labelQR={uncommittedQR} /> );
    };

    /** Run when `DrawEditText`'s form changes values */
    const updateLabelTexts = ( changedValue: ChangedValueTextI, labelText: LabelText ) => {
        console.log( "input for updateLabelTexts", { changedValue, labelText } );
        let updatedText = false;
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

        texts.forEach( ( text => {
            if ( text.id == labelText.id ) {
                console.log( "updating existing labelText with id", text.id );
                // text = labelText;
                text.text = labelText.text;
                updatedText = true;
                return;
            }
        } ) );
        if ( !updatedText ) {
            console.log( "adding labelText ; texts is now", texts, "pending", [ ...texts, labelText ] );
            setTexts( [ ...texts, labelText ] );
        } else {
            setTexts( texts );
        }
    };

    const handleUndo = () => {
        if ( historyPosition === 0 ) {
            message.warn( "history is already at state #0" );
            return;
        }
        let newPosition: Integer = historyPosition - 1;
        setHistoryPosition( newPosition );
        setTexts( history[ newPosition ]?.texts );
        setImages( history[ newPosition ]?.images );
        setQrs( history[ newPosition ]?.qrs );
    };

    const handleRedo = () => {
        if ( historyPosition === ( history.length - 1 ) ) {
            message.warn( "history is already at the most recent state" );
            return;
        }
        let newPosition: Integer = historyPosition + 1;
        setHistoryPosition( newPosition );
        setTexts( history[ newPosition ]?.texts );
        setImages( history[ newPosition ]?.images );
        setQrs( history[ newPosition ]?.qrs );
    };

    /**
    * updateHistory
    * 
    * Records history state and increments history position
    */
    const updateHistory = () => {
        setHistoryPosition( historyPosition + 1 );
        setHistory( [ ...history,
        {
            texts: texts,
            images: images,
            qrs: qrs,
        }
        ] );
    };

    /**
     * return value of `false` if the label was not exported.
     */
    // const updateContext = (): boolean => {
    //     console.log( "should updateContext ?", {
    //         'exportLabel()': exportLabel(),
    //         'context.getCurrentLabel': context.getCurrentLabel,
    //         'exportLabel() !== context.getCurrentLabel()': exportLabel() !== context.getCurrentLabel(),
    //     } );
    //     if ( !context.getCurrentLabel() || exportLabel() !== context.getCurrentLabel() ) {
    //         console.log( "will updateContext" );
    //         context.setCurrentLabel( exportLabel() );
    //         return true;
    //     }
    //     console.log( 'do NOT updateContext' );
    //     return false;
    // };

    /**
     * Removes the `LabelConstituent` object from the label as well as deletes/`remove()`s its `Node` from `Konva`
     */
    const deleteLabelConstituent = ( constituent: LabelText | LabelImage | LabelQR ): void => {
        console.log( "deleteLabelConstituent : constituent <?>", constituent );
        if ( LabelText.is( constituent ) ) {
            console.log( "deleteLabelConstituent : constituent <LabelText>", constituent );
            setTexts(
                texts.filter( ( text ) => {
                    if ( text.id === constituent.id ) {
                        console.log( `deleteLabelConstituent <texts> : deleting id ${ constituent.id }` );
                        stageRef.current.getStage().findOne( "." + constituent.id ).remove();
                        return;
                    }
                    return text;
                } )
            );
        }
        if ( constituent instanceof LabelImage ) {
            console.log( "deleteLabelConstituent : constituent <LabelImage>", constituent );
            setImages(
                images.filter( ( image ) => {
                    if ( image.id == constituent.id ) {
                        console.log( `deleteLabelConstituent <images> : deleting id ${ constituent.id }` );
                        stageRef.current.getStage().findOne( "." + constituent.id ).remove();
                        return;
                    }
                    return image;
                } )
            );
        }
        if ( constituent instanceof LabelQR ) {
            console.log( "deleteLabelConstituent : constituent <LabelQR>", constituent );
            setQrs(
                qrs.filter( ( qr ) => {
                    if ( qr.id == constituent.id ) {
                        console.log( `deleteLabelConstituent <qrs> : deleting id ${ constituent.id }` );
                        stageRef.current.getStage().findOne( "." + constituent.id ).remove();
                        return;
                    }
                    return qr;
                } )
            );
        }
    };

    const commitLabelText = ( labelText: LabelText ) => {
        setUncommittedText( new LabelText() );
    };


    /**
     * **IMPORTANT**: ! -> THE LOGIC IN THESE UPDATE X FUNCTIONS DO NOT ALLOW FOR MULTIPLE IMAGES OF THE SAME ID
     */

    const updateLabelImages = ( changedValue: Partial<LabelImage>, labelImage: LabelImage ) => {
        let updatedImage = false;
        console.log( "updateLabelImages", changedValue, labelImage );

        // if ( typeof changedValue === 'object' ){
        //     Object.keys( changedValue ).forEach( key => {
        //         labelImage[ key ] = changedValue[ key ];
        //     } );            
        // }

        if ( changedValue.id && changedValue.id != labelImage.id ) {
            console.log( "uncommitted image is now set to selected id", { was: labelImage.id, now: changedValue.id } );
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
        images.forEach( ( image => {
            if ( image.id == labelImage.id ) {
                console.log( "updating existing labelImage with id", labelImage.id );
                image = labelImage;
                // image = labelImage;
                updatedImage = true;
                return;
            }
        } ) );
        if ( !updatedImage ) {
            console.log( "adding new image to images", labelImage );
            setImages( [ ...images, labelImage ] );
        }
        console.log( "images is now", images, "pending", [ ...images, labelImage ] );
    };

    const commitLabelImage = ( labelImage: LabelImage ) => {
        setUncommittedImage( new LabelImage() );
    };


    /**
     * changedValue - values changes on...  
     * labelQR - LabelQR object whose values have changed  
     * NOTE: pass in FALSE to delete the object
     **/
    const updateLabelQR = ( changedValue: Partial<LabelQR> | false, labelQR: LabelQR ) => {
        console.log( { method: 'updateLabelQR', changedValue, labelQR } );
        let updatedQR = false;
        if ( changedValue === false ) {
            setQrs( qrs.filter( qr => qr.id !== labelQR.id ) );
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
            setUncommittedQR( labelQR );
        }
        qrs.forEach( ( qr => {
            if ( qr.id == labelQR.id ) {
                console.log( "updating existing labelQR with id", labelQR.id );
                qr = labelQR as LabelQR;
                updatedQR = true;
                return;
            }
        } ) );
        if ( !updatedQR ) {
            console.log( "adding uncommitted labelQR with id", labelQR.id );
            setQrs( [ ...qrs, labelQR as LabelQR ] );
        }
        console.log( { "qrs is now": qrs, pending: [ ...qrs, labelQR ] } );
    };


    const commitLableQR = <T extends {}> ( labelQR: LabelQR ) => {
        setUncommittedQR( new LabelQR( { item } ) );
    };

    // function getCanvasWidth (): Integer | null {
    //     let canvas = getCanvas();
    //     return canvas ? canvas.width : null;
    // }
    // function getCanvasHeight (): Integer | null {
    //     let canvas = getCanvas();
    //     return canvas ? canvas.height : null;
    // }
    function getCanvas (): HTMLCanvasElement | null {
        if ( stageRef.current ) {
            return stageRef.current.getStage().toCanvas( {} );
        }
        return null;
    }
    function getDataURL (): string | null {
        let canvas = getCanvas();
        return canvas ? canvas.toDataURL() : null;
    }
    /**
     * return imgdata for the entire canvas.  
     * THIS IS A _**VERY** EXPENSIVE CALL_
     */
    function getImgData (): ImageData | null {
        let canvas = getCanvas();
        return canvas && canvas.width && canvas.height ? canvas.getContext( '2d' ).getImageData( 0, 0, canvas.width, canvas.height ) : null;
    }

    const [ modal, setModal ] = useState<React.ReactElement>();

    const exportLabel = (): LabelExport => {
        console.group( "LabelDraw.exportLabel()" );
        // let imgData = getImgData();
        let canvas = getCanvas();
        // console.trace();
        // console.log( "LabelDraw, exporting Label verification values", {
        //     // "canvas": canvas,
        //     "width": width,
        //     "height": height,
        //     "imgData": imgData,
        //     "props.label": props.label
        // } );
        // console.trace();
        // if ( canvas && canvas.width && canvas.height && imgData ) {
        if ( canvas && canvas.width && canvas.height ) {
            JSON.stringify( texts );
            console.log( "exportLabel() setValues" );
            props.label.setValues( {
                ...( props.label ? { id: props.label.id } : {} ),
                ...{
                    item_id: props.item ? props.item.id : props.label.item ? props.label.item.id : null,
                    texts: texts,
                    images: images,
                    qrs: qrs,
                    // imgData: imgData,
                    stageRef: stageRef,
                    // canvas: canvas,
                    // dataURL: dataURL,
                    width: canvas.width,
                    height: canvas.height
                }
            } );
        } else {
            console.warn( "exportLabel could not update values, failed value existance check." );
        }
        console.groupEnd();
        return props.label;
    };

    console.log( `LabelDraw.render() with props:\n`, props );
    return (
        <div>
            {modal}
            {/* DEBUG & DIAGNOSTICS */}
            <div style={{ float: 'right', position: "relative", top: -40 }}>
                <Tooltip key="debug" placement="top" title="Send debug information to the console">
                    <Button icon={<MedicineBoxOutlined />} style={{
                        padding: 0,
                        width: '24px',
                        height: '24px',
                        border: 0
                    }} onClick={() => {
                        console.log( JSON.stringify( exportLabel(), null, 2 ) );
                        console.log( printContext.currentLabelToBuffer() );
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
                        console.log( exportLabel() );
                        return;
                        setModal(
                            <JsonModal
                                json={'{"this": "that"}'}
                                visibilityHandler={setModal}
                            /> );
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
                        console.log( "expanding canvas\n", { was: stageRef.current.getStage().width() } );
                        // console.log( JSON.stringify( exportLabel(), null, 2 ) );
                        // console.log( context.currentLabelToBuffer() );
                        props.updateWidth( stageRef.current.getStage().width() + 50 );
                        // stageRef.current.getStage().width( stageRef.current.getStage().width() + 50 );
                        // stageRef.current.getStage().height( stageRef.current.getStage().width() + 50 );
                    }} id="EXPAND_CANVAS" />
                </Tooltip>
            </div>

            <LabelComponent
                deleteLabelConstituent={deleteLabelConstituent}
                setSelectedShapeName={setSelectedShapeName}
                stageRef={stageRef}
                updateWidth={props.updateWidth}
                width={props.width}
                selectedShapeName={selectedShapeName}>
                {/* < DebugRectangles /> */}
                {/* TEXT */}
                {texts.map( labelText => {
                    console.log( "Drawing EditableText with labelText:\n", labelText );
                    return <EditableText
                        displayContextMenu={displayContextMenu}
                        setSelectedShapeName={setSelectedShapeName}
                        updateHistory={updateHistory}
                        selectedShapeName={selectedShapeName}
                        key={`editable_text_${ labelText.id }`}
                        labelText={labelText} item={item} />;
                } )}
                {/* IMAGE */}
                {images.map( labelImage => {
                    console.log( "drawing image", labelImage );
                    return <TransformableImage
                        displayContextMenu={displayContextMenu}
                        setSelectedShapeName={setSelectedShapeName}
                        updateHistory={updateHistory}
                        selectedShapeName={selectedShapeName}
                        key={`transformable_image_${ labelImage.id }`}
                        labelImage={labelImage}
                        item={item} />;
                } )}
                {/* QR */}
                {qrs.map( labelQR => {
                    console.log( "drawing LabelQR", labelQR );
                    return <TransformableQR
                        displayContextMenu={displayContextMenu}
                        setSelectedShapeName={setSelectedShapeName}
                        updateHistory={updateHistory}
                        selectedShapeName={selectedShapeName}
                        key={`transformable_qr_${ labelQR.id }`} labelQR={labelQR} item={item} />;
                } )}
            </LabelComponent>
            <br />
            <div style={{
                paddingTop: 10,
                textAlign: 'center',
            }}>
                <Button style={{ margin: 5 }} icon={<FontSizeOutlined />} onClick={() => displayEditTextModal( true )} id="ADD_TEXT">Add Text</Button>
                <Button style={{ margin: 5 }} icon={<QrcodeOutlined />} onClick={() => displayQREditModal( true )} id="ADD_QR">Add QR</Button>
                <Button style={{ margin: 5 }} icon={<PictureOutlined />} onClick={() => displayImageSelectModal( true )} id="ADD_IMAGE">Add Image</Button>
            </div>
        </div>
    );
};

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