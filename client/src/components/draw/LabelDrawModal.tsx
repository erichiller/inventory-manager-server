import { Component } from "react";
import { DISPLAY } from '../../types/enums';
import { Item, Label } from "../../types/graphql";
import { Modal, Descriptions, Button, Icon, Tooltip } from "antd";
import React from "react";
import { LabelDraw } from "./LabelDraw";
import { PrintContext } from "../print/PrintContextHandler";
import { LabelExport } from "../../lib/LabelConstituent";

type LabelDrawModalProps = {
    visibleHandler: ( d?: DISPLAY ) => boolean;
    visible: DISPLAY;
} & ( {
    item: Item;
    label?: undefined;
} | {
    item?: undefined;
    label: Label;
} );


interface LabelDrawModalState {
    visible: DISPLAY;
}

export class LabelDrawModal extends Component<LabelDrawModalProps, LabelDrawModalState> {
    static contextType = PrintContext;
    declare context: React.ContextType<typeof PrintContext>;

    private _label: LabelExport<any>;
    get label (): LabelExport<any> {
        if ( ! this._label ) {
            this._label = this.props.label ? new LabelExport(this.props.label) : new LabelExport();
        }
        return this._label;
    }



    handleCancel = () => {
        this.props.visibleHandler( DISPLAY.HIDDEN );
    }
    handleSave = () => {

    }
    handlePrint = () => {

    }
    handleAddToPrintList = () => {

    }

    description = () => {
        const { item, label } = this.props;
        if ( this.props.item ) {
            return <div>
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
            </div>;
        }
        if ( label ) {
            return <span>{label.title}</span> ;
        }
    }


    render () {
        const { visible, visibleHandler, label, item } = this.props;

        console.log( 'this.state.visible', visibleHandler() );
        // console.log('this.state.visible', visibleHandler(), this.state.visible == display.VISIBLE ? true : false)
        // console.log( 'this.state.item', item );
        // if ( visible)
        // console.log( 'item keys', Object.keys( item ) );
        // let drawWidth = 725;
        // let drawHeight = 225;
        let drawWidth = 48;
        let drawHeight = 48;
        return (
            <Modal
                visible={visible == DISPLAY.VISIBLE}
                title="Create a new label"
                onCancel={this.handleCancel}
                onOk={this.handleSave}
                width={drawWidth > 500 ? drawWidth + 25 : 525}
                footer={[
                    <Tooltip key="cancel" placement="top" title="Return to Items">
                        <Button key="cancel" type="danger" onClick={this.handleCancel}>
                            <Icon type="stop" />
                            Cancel
                        </Button>
                    </Tooltip >,

                    <Tooltip key="print" placement="top" title="Send to Label Maker">
                        <Button key="print" type="primary" onClick={this.handlePrint}>
                            <Icon type="printer" />
                            Print
                        </Button>
                    </Tooltip>,

                    <Tooltip key="addToPrintList" placement="top" title="Add to list for bulk printing later">
                        <Button key="addToPrintList" type="primary" onClick={this.context.handleAddToPrintList}>
                            <Icon type="database" />
                            {console.log( "label comparison", this.label, this.context.getCurrentLabel())}
                            {this.context.getPrintLabels().includes(this.label) ? "Remove from" : "Add to"} Print List
                        </Button>
                    </Tooltip>,

                    <Tooltip key="save" placement="top" title="Save label for future printing">
                        <Button key="save" type="primary" onClick={this.handleSave}>
                            <Icon type="save" />
                            Save
                        </Button>
                    </Tooltip>,
                ]}
            >
                {this.description()}
                <br />
                <LabelDraw width={drawWidth} height={drawHeight} item={item} label={this.label} />
            </Modal>
        );
    }
}
/** 
    80 chars
01234567890123456789012345678901234567890123456789012345678901234567890123456789
    120 chars
012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789
 */