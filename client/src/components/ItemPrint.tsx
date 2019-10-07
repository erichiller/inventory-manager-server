
import React, { Component } from 'react';
import { render } from 'react-dom';

import Konva from 'konva';
import { Stage, Layer, Star, Text, Image } from 'react-konva';

import { withItemsHardwareFastenerBolt, ItemsHardwareFastenerBoltProps, Items, ItemsHardwareFastenerBolt } from '../queries/types';
import { Modal, Descriptions } from 'antd';
import { display } from './ItemTable';
import { DrawContextMenu } from './draw/DrawContextMenu';
import { KonvaEventObject } from 'konva/types/Node';
import { Button } from 'antd';
import DrawEditText from './draw/DrawEditText';
import useImage from 'use-image';

interface ItemPrintProps { }
interface ItemPrintState { }


export default withItemsHardwareFastenerBolt()(
    class ItemTable extends React.Component<ItemsHardwareFastenerBoltProps<ItemPrintProps>, ItemPrintState> {
    }
)


interface LabelDrawModalProps {
    visibleHandler: (d?: display) => boolean
    item: ItemsHardwareFastenerBolt
    visible: display
}
interface LabelDrawModalState {
    visible: display
}

export class LabelDrawModal extends Component<LabelDrawModalProps, LabelDrawModalState> {

    onCancel = () => {
        this.props.visibleHandler(display.HIDDEN);
    }
    onCreate: () => {

    }


    render() {
        const { visible, visibleHandler, item } = this.props

        console.log('this.state.visible', visibleHandler())
        // console.log('this.state.visible', visibleHandler(), this.state.visible == display.VISIBLE ? true : false)
        console.log('this.state.item', item)
        // if ( visible)
        console.log('item keys', Object.keys(item))
        let drawWidth = 725;
        return (
            <Modal
                visible={visible == display.VISIBLE}
                title="Create a new project"
                okText="Create"
                onCancel={this.onCancel}
                onOk={this.onCreate}
                width={drawWidth+25}
            >
                {item.name}
                <Descriptions title="Properties" column={1} bordered={true}>
                    {Object.keys(item).map(key => {
                        let value = item[key];
                        if (!["__typename"].includes(key) && value) {
                            console.log(`property of item ${key} = ${value}`);
                            return <Descriptions.Item key={key} label={key}>{value}</Descriptions.Item>
                            // <p>1</p>
                        }
                    })}
                </Descriptions>
                <br />
                <LabelDraw width={drawWidth} height={225} item={item} />
            </Modal>
        )
    }
}








class LabelConstituent {
    uuid: UUIDStringT
    x: number
    y: number
    constructor() {
        this.uuid = UUIDv4();
        this.x = 0;
        this.y = 0;
    }

}


type UUIDStringT = string;
export type FormatOptionsT = "bold" | "italic" | "underline";

import { v4 as UUIDv4 } from 'uuid';

export class LabelText extends LabelConstituent {
    text: string
    _fontSize: number
    bold: boolean
    italic: boolean
    underline: boolean


    get fontSize(): number {
        return this._fontSize;
    }
    set fontSize(value: number){
        if (typeof value == "string"){
            value = parseInt(value)
        }
        this._fontSize = value;
    }

    get position(){
        return [this.x, this.y]
    }
    get signature(){
        return `${this.text}-${this.fontSize}-${this.bold}-${this.italic}-${this.underline}-${this.x}-${this.y}`
    }
    get formatOptions(): FormatOptionsT[] {
        let opts: FormatOptionsT[] = []
        if (this.bold) { opts.push("bold") };
        if (this.italic) { opts.push("italic") };
        if (this.underline) { opts.push("underline") } ;

        return opts;
    }
}

export class LabelImage extends LabelConstituent {
    url: string
    width: number
    height: number


}



interface ChangedValueVariantsI {
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

type IKonvaEventHandler = (d: boolean | KonvaEventObject<PointerEvent>) => void;
type IHtmlEventHandler = (d: boolean | display | React.MouseEvent<HTMLElement, MouseEvent>) => void;

interface LabelDrawState {
    displayContextMenu: IKonvaEventHandler
    displayContextMenuStatus: boolean
    displayContextMenuPosition?: [number, number]
    displayEditTextModal: IHtmlEventHandler | display
    displayEditTextModalStatus: display
    displayImageSelectModal: IHtmlEventHandler | display
    displayImageSelectModalStatus: display
    contextMenuLabelText: LabelText
    item: ItemsHardwareFastenerBolt
    texts: LabelText[]
    images: LabelImage[]
    uncommittedText: LabelText
    uncommittedImage: LabelImage
    commitLabelText: (labelText: LabelText) => void;
    deleteLabelText: (labelText: LabelText) => void;
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
    contextMenuLabelText: null,
    displayImageSelectModal: () => { },
    displayImageSelectModalStatus: display.HIDDEN,
    // displayEditTextModalStatus: display.HIDDEN,
    // displayEditTextModalStatus: display.HIDDEN,
    item: null,
    texts: [],
    images: [],
    uncommittedText: null,
    uncommittedImage: null,
    commitLabelText: () => { },
    deleteLabelText: () => { },
}
export const DrawContext = React.createContext<DrawContext>(DrawContextStateDefault);


export class LabelDraw extends Component<LabelDrawProps, LabelDrawState> {

    displayContextMenu = (display: KonvaEventObject<PointerEvent>) => {
        console.log("displayContextMenu()", display);
        if (display) {
            display.evt.preventDefault();
            this.setState({
                item: this.props.item,
                displayContextMenuStatus: true,
                contextMenuLabelText: display.currentTarget.attrs.textObject,
                displayContextMenuPosition: [
                    display.evt.clientX,
                    display.evt.clientY
                ]
            })
        } else {
            this.setState({displayContextMenuStatus: false});
        }
    }

    displayEditTextModal = (d: React.MouseEvent<HTMLElement, MouseEvent>| display): display => {
        if ((d as display) === display.HIDDEN) {
            this.setState({
                displayEditTextModalStatus: display.HIDDEN
            })
        // if ( !(d as dReact.MouseEvent<HTMLElement, MouseEvent>) && d === display.HIDDEN ){
            return display.HIDDEN;
        }
        if (!d){
            return this.state.displayContextMenuStatus ? display.VISIBLE : display.HIDDEN;
        }
        console.log("displayEditTextModal()", display);
        (d as React.MouseEvent<HTMLElement, MouseEvent>).preventDefault();
        if (d) {
            this.setState({
                item: this.props.item,
                displayEditTextModalStatus: display.VISIBLE
            })
        } else {
            this.setState({ displayEditTextModalStatus: display.HIDDEN });
        }
    }

    displayImageSelectModal = (d: React.MouseEvent<HTMLElement, MouseEvent> | display): display => {
        if ((d as display) === display.HIDDEN) {
            this.setState({
                displayImageSelectModalStatus: display.HIDDEN
            })
            // if ( !(d as dReact.MouseEvent<HTMLElement, MouseEvent>) && d === display.HIDDEN ){
            return display.HIDDEN;
        }
        if (!d) {
            return this.state.displayContextMenuStatus ? display.VISIBLE : display.HIDDEN;
        }
        console.log("displayEditTextModal()", display);
        (d as React.MouseEvent<HTMLElement, MouseEvent>).preventDefault();
        if (d) {
            this.setState({
                item: this.props.item,
                displayEditTextModalStatus: display.VISIBLE
            })
        } else {
            this.setState({ displayEditTextModalStatus: display.HIDDEN });
        }
    }

    updateLabelTexts = (changedValue: ChangedValueVariantsI, labelText: LabelText) => {
        console.log("input for updateLabelTexts", changedValue, labelText)
        // let texts = this.state.texts;
        let updatedText = false;
        // if ( ! labelText ){
        //     labelText = new LabelText();
        // // }
        if (changedValue.text) {
            console.log("setting text to", changedValue.text.value);
            labelText.text = changedValue.text.value;
        } else if (changedValue.format_options) {
            console.log("setting format_options to", changedValue.format_options.value);
            // if changedValue.
            labelText.bold = (changedValue.format_options.value as FormatOptionsT[]).includes("bold");
            labelText.underline = (changedValue.format_options.value as FormatOptionsT[]).includes("underline");
            labelText.italic = (changedValue.format_options.value as FormatOptionsT[]).includes("italic");
        } else if( changedValue.text_size){
            labelText.fontSize = changedValue.text_size.value;
        } else{
            console.warn("no match found for field", changedValue)
        }

        this.state.texts.forEach( (text => {
            if ( text.uuid == labelText.uuid ){
                console.log("updating existing labelText with uuid", text.uuid)
                text = labelText;
                updatedText = true;
                return;
            }
        }));
        if (!updatedText) {
            this.setState({
                texts: [...this.state.texts, labelText]
            });
        }
        console.log("this.state.texts is now", this.state.texts, "pending", [...this.state.texts, labelText])
    }

    deleteLabelText = (labelText: LabelText): void => {
        this.state.texts.filter((text) => {
            if (text.uuid == labelText.uuid) {
                return;
            }
            return text;
        })
    }

    commitLabelText = (labelText: LabelText) => {
        this.setState({uncommittedText: new LabelText()})
    }



    updateLabelImages = (changedValue: ChangedValueVariantsI, labelImage: LabelImage) => {
        let updatedImage = false;
        this.state.images.forEach((image => {
            if (image.uuid == labelImage.uuid) {
                console.log("updating existing labelImage with uuid", labelImage.uuid)
                image = labelImage;
                updatedImage = true;
                return;
            }
        }));
        if (!updatedImage) {
            this.setState({
                images: [...this.state.images, labelImage]
            });
        }
        console.log("this.state.images is now", this.state.images, "pending", [...this.state.texts, labelImage])
    }



    state: LabelDrawState = {
        displayContextMenu: this.displayContextMenu,
        displayContextMenuStatus: DrawContextStateDefault.displayContextMenuStatus,
        displayContextMenuPosition: undefined,
        displayEditTextModal: this.displayEditTextModal,
        displayEditTextModalStatus: display.HIDDEN,
        displayImageSelectModal: this.displayImageSelectModal,
        displayImageSelectModalStatus: display.HIDDEN,
        contextMenuLabelText: null,
        item: null,
        texts: [], // NOTE: for pre-existing deserialize here.
        images: [],
        uncommittedText: new LabelText(),
        uncommittedImage: new LabelImage(),
        commitLabelText: this.commitLabelText,
        deleteLabelText: this.deleteLabelText
    }

    render() {
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
                        <DrawEditText visibleHandler={this.displayImageSelectModal} changeHandler={this.updateLabelImages} item={item} labelImage={this.state.uncommittedImage} />
                        : null}
                    <Stage
                        onMouseEnter={() => this.setState({displayContextMenuStatus: false})} 
                        width={width}
                        style={{
                            border: '1px solid #D3D3D3'
                        }}
                        height={height}>
                        <Layer>
                            {this.state.texts.map(labelText => {
                                console.log("drawing new labelText", labelText)
                                return <Text
                                        textObject={labelText}
                                        key={labelText.uuid}
                                        text={labelText.text}
                                        fontStyle={labelText.bold ? "bold" : labelText.italic ? "italic" : "normal"}
                                        textDecoration={labelText.underline ? "underlined" : ""}
                                        fontSize={labelText.fontSize}
                                        onContextMenu={this.state.displayContextMenu}
                                        draggable />

                            })}
                            { this.state.images.map( labelImage => {
                                console.log("drawing image", labelImage);
                                const [image] = useImage('https://konvajs.org/assets/lion.png');
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
                            })}
                        </Layer>
                    </Stage>
                    <div style={{paddingTop: 5, margin: 5}}>
                        <Button icon="font-size" onClick={this.displayEditTextModal} id="ADD_TEXT">Add Text</Button>
                        <Button icon="qrcode" onClick={this.displayImageSelectModal} id="ADD_QR">Add QR</Button>
                        <Button icon="picture" onClick={this.displayImageSelectModal} id="ADD_IMAGE">Add Image</Button>
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