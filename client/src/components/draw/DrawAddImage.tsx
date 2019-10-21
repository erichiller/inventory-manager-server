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
import { LabelText, DrawContext, FormatOptionsT, LabelImage } from '../ItemPrint';

interface LabelAddImageProps {
    event?: KonvaEventObject<MouseEvent>
    item?: ItemsHardwareFastenerBolt
    labelImage: LabelImage
    visibleHandler: (display?: display) => void
    changeHandler: (newValue: any, labelImage: LabelImage) => void
}

export default class LabelAddImage extends Component<LabelAddImageProps> {

    onCancel = () => {
        /// REMOVE ELEMENT /// REVERT ///
        this.onClose();
    }

    onClose = () => {
        this.props.visibleHandler(display.HIDDEN);
    }

    render() {
        const { event, visibleHandler, item, changeHandler, labelImage } = this.props

        console.log('this.props.visible', visibleHandler())
        // console.log('this.state.visible', visibleHandler(), this.state.visible == display.VISIBLE ? true : false)
        console.log('this.props.item', item)
        let drawWidth = 725;
        return (
            <DrawContext.Consumer>
                {({ commitLabelImage }) => {
                    return <Modal
                        visible
                        title={"Image"}
                        okText="Do"
                        onCancel={this.onCancel}
                        onOk={() => { commitLabelImage(labelImage); this.onClose(); }}
                        width={drawWidth + 25}
                    >


                    </Modal>
                }}
            </DrawContext.Consumer>
        )
    }
}


