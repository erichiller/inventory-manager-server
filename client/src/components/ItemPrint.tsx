
import React, { Component } from 'react';
import { render } from 'react-dom';

import Konva from 'konva';
import { Stage, Layer, Star, Text } from 'react-konva';

import { withItemsHardwareFastenerBolt, ItemsHardwareFastenerBoltProps, Items, ItemsHardwareFastenerBolt } from '../queries/types';
import { Modal, Descriptions } from 'antd';
import { display } from './ItemTable';


interface ItemPrintProps { }
interface ItemPrintState { }

export default withItemsHardwareFastenerBolt()(
    class ItemTable extends React.Component<ItemsHardwareFastenerBoltProps<ItemPrintProps>, ItemPrintState> {
    }
)


interface LabelDrawModalProps {
    visibleHandler: (display?) => boolean
    item: ItemsHardwareFastenerBolt
    visible: display
}
interface LabelDrawModalState {
    visible: display
}

export class LabelDrawModal extends Component<LabelDrawModalProps, LabelDrawModalState> {

    // state: LabelDrawModalState = {
    //     visible: display.HIDDEN
    // }

    onCancel = () => {
        // this.setState({ visible: display.HIDDEN })
        this.props.visibleHandler(display.HIDDEN);
    }
    onCreate: () => {

    }

    // UNSAFE_componentWillReceiveProps() {
    //     console.log("componentwill receive props, curr props visible:", this.props.visible, "nextProps", nextProps.visible)
    //     if (this.props.visibleHandler() !== this.props.visible) {
    //         console.warn("props did change")
    //         visibleHandler
    //     }
    // }


    render() {
        const { visible, visibleHandler, item } = this.props

        console.log('this.state.visible', visibleHandler())
        // console.log('this.state.visible', visibleHandler(), this.state.visible == display.VISIBLE ? true : false)
        console.log('this.state.item', item)
        // if ( visible)
        console.log('item keys', Object.keys(item))
        return (
            <Modal
                visible={visible == display.VISIBLE}
                title="Create a new project"
                okText="Create"
                onCancel={this.onCancel}
                onOk={this.onCreate}
            >
                {item.name}
                <Descriptions title="Properties" column={1} bordered={true}>
                    {Object.keys(item).map(key => {
                        let value = item[key];
                        if ( !["__typename"].includes(key) && value) {
                            console.log(`property of item ${key} = ${value}`);
                            return <Descriptions.Item label={key}>{value}</Descriptions.Item>
                            // <p>1</p>
                        }
                    })}
                </Descriptions>
                <LabelDraw />
            </Modal>
        )
    }
}



export class LabelDraw extends Component {
    handleDragStart = e => {
        e.target.setAttrs({
            shadowOffset: {
                x: 15,
                y: 15
            },
            scaleX: 1.1,
            scaleY: 1.1
        });
    };
    handleDragEnd = e => {
        e.target.to({
            duration: 0.5,
            easing: Konva.Easings.ElasticEaseOut,
            scaleX: 1,
            scaleY: 1,
            shadowOffsetX: 5,
            shadowOffsetY: 5
        });
    };
    render() {
        let width = 300;
        let height = 40;
        return (
            <Stage 
                width={width}
                height={height}>
                <Layer>
                    <Text text="Try to drag a star" />
                    {[...Array(10)].map((_, i) => (
                        <Star
                            key={i}
                            x={Math.random() * width}
                            y={Math.random() * height}
                            numPoints={5}
                            innerRadius={20}
                            outerRadius={40}
                            fill="#89b717"
                            opacity={0.8}
                            draggable
                            rotation={Math.random() * 180}
                            shadowColor="black"
                            shadowBlur={10}
                            shadowOpacity={0.6}
                            onDragStart={this.handleDragStart}
                            onDragEnd={this.handleDragEnd}
                        />
                    ))}
                </Layer>
            </Stage>
        );
    }
}

