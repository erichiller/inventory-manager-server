import { Component } from "react";
import { display } from "../ItemTable";
import { ItemsHardwareFastenerBolt } from "../../types/graphql";
import { Modal, Descriptions, Button, Icon, Tooltip } from "antd";
import React from "react";
import { LabelDraw } from "./LabelDraw";

interface LabelDrawModalProps {
    visibleHandler: ( d?: display ) => boolean;
    item: ItemsHardwareFastenerBolt;
    visible: display;
}
interface LabelDrawModalState {
    visible: display;
}

export class LabelDrawModal extends Component<LabelDrawModalProps, LabelDrawModalState> {

    handleCancel = () => {
        this.props.visibleHandler( display.HIDDEN );
    }
    handleSave: () => {

    };
    handlePrint: () => {

    };
    handleAddToPrintList: () => {

    };


    render () {
        const { visible, visibleHandler, item } = this.props;

        console.log( 'this.state.visible', visibleHandler() );
        // console.log('this.state.visible', visibleHandler(), this.state.visible == display.VISIBLE ? true : false)
        console.log( 'this.state.item', item );
        // if ( visible)
        console.log( 'item keys', Object.keys( item ) );
        // let drawWidth = 725;
        // let drawHeight = 225;
        let drawWidth = 48;
        let drawHeight = 48;
        return (
            <Modal
                visible={visible == display.VISIBLE}
                title="Create a new label"
                onCancel={this.handleCancel}
                onOk={this.handleSave}
                width={drawWidth > 500 ? drawWidth + 25 : 525}
                footer={[
                    <Tooltip placement="top" title="Return to Items">
                    <Button key="cancel" type="danger"  onClick={this.handleCancel}>
                        <Icon type="stop" />
                        Cancel
                    </Button>
                    </Tooltip >,
                    <Tooltip placement="top" title="Send to LabelMaker">

                    <Button key="print" type="primary" onClick={this.handlePrint}>
                        <Icon type="printer" />
                        Print
                    </Button>
                    </Tooltip>,
                    <Tooltip placement="top" title="Add to list for bulk printing later">
                        <Button key="addToPrintList" type="primary" onClick={this.handleAddToPrintList}>
                            {/* <Icon type="plus-circle" /> */}
                            <Icon type="database" />
                            Add to Print List
                        </Button>
                    </Tooltip>,
                    <Tooltip placement="top" title="Save label for future printing">

                    <Button key="save" type="primary" onClick={this.handleSave}>
                        <Icon type="save" />
                        Save
                    </Button>
                        </Tooltip>,
                    ]}
                >
                {item.name}
                <Descriptions title="Properties" column={1} bordered={true}>
                    {Object.keys( item ).map( key => {
                        let value = item[ key ];
                        if ( ![ "__typename" ].includes( key ) && value ) {
                            console.log( `property of item ${ key } = ${ value }` );
                            return <Descriptions.Item key={key} label={key}>{value}</Descriptions.Item>;
                            // <p>1</p>
                        }
                    } )}
                </Descriptions>
                <br />
                <LabelDraw width={drawWidth} height={drawHeight} item={item} />
            </Modal>
        );
    }
}
