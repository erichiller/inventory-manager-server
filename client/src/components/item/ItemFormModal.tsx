import React, { useState } from 'react';
import { useForm, FormProps } from 'antd/lib/form/Form';
import { Form, Modal, Input, Button } from 'antd';
import { visibleHandler } from './ItemTable';
import { Item } from '../../lib/item';
import { ItemFormProps, FormMutationHandler } from '../../lib/item/Item';
import TextArea from 'antd/lib/input/TextArea';
import { QtyInput } from '../../lib/item/common/QtyInput';
import { OrderInput } from '../order/OrderInput';

interface ItemFormModalProps {
    recordEditComponent: React.FC<ItemFormProps>;
    visibleHandler: visibleHandler;
    item: Item<any>;
    mutationHandler: React.FC<FormMutationHandler>;
}

export const ItemFormModal: React.FC<ItemFormModalProps> = ( props ) => {
    const [ form ] = useForm();
    console.log( { class: 'ItemEditModal', msg: 'load FC', props } );
    const [ formSubmitted, setFormSubmitted ] = useState<boolean>(false);

    const onFinish = ( values: {
        [ name: string ]: any;
    } ) => {
        console.log( { class: 'ItemEditModal', method: 'onFinish', values } );
        setFormSubmitted(true);
    };

    const onFinishFailed = ( errorInfo ) => {
        console.error( { class: 'ItemEditModal', method: 'onFinishFailed', errorInfo } );
    };

    const onFieldsChange = ( changedFields, values ) => {
        console.log( { class: 'ItemEditModal', method: 'onFieldsChange', changedFields, values } );
    };

    const mutationCompleteCallback: ( success: boolean ) => void = ( success: boolean ) => {
        if ( ! success ){
            setFormSubmitted(false);
        }
    }

    return <Modal
        visible={true}
        title={Item.name}
        width={null}
        // bodyStyle={{
        //     maxWidth: '80vw',
        //     maxHeight: '80vh'
        // }}
        className="ItemEditFormModal"
        onOk={e => {
            console.log( { class: 'ItemEditModal', method: 'onOk', e, values: form.getFieldsValue() } );
            form.submit();
        }}
        onCancel={event => props.visibleHandler(null)}
    >
        <Form
            name="ItemForm"
            form={form}
            layout="horizontal"
            labelCol={{span: 8 }}
            wrapperCol={{span: 9 }}
            // name="item-add-edit-delete"
            onKeyPress={( event ) => {
                console.log({ log: "onKeyPress", target: event.target, currentTarget: event.currentTarget, event, keyCode: event.keyCode, native: event.nativeEvent.keyCode });
                if ( event.nativeEvent.keyCode === 13 ) { form.submit(); }
            }}
            onFieldsChange={onFieldsChange}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            >

            {/********************************************************************************
              ** GENERAL ITEMS 
              ********************************************************************************/}
            <div className="col">
                {/* TODO: THESE FORM ITEMS ARE FOR **ALL** OBJECTS */}
                <Form.Item name="name" label="Name">
                    <Input placeholder="Item name" />
                </Form.Item>
                <Form.Item name="description" label="Description">
                    <TextArea placeholder="Description, leave empty to auto-generate" autoSize={{ minRows: 2 }} />
                </Form.Item>
                <Form.Item name="stock" label="Qty">
                    <QtyInput />
                </Form.Item>
                <Form.Item name="order" label="Order">
                    <OrderInput />
                </Form.Item>
                {/* TODO: then here have a type selector when in the generic add form */}
            </div>
            
            {/* <Form.Item> */}
            {/* <Form.Item key="aaa" name="bbb" label="Field AA">
                    <Input placeholder="input placeholder" />
                </Form.Item>
            {/* </Form.Item> */}
            {props && props.recordEditComponent ?
                <props.recordEditComponent form={form} />
                : null}
            {props && props.mutationHandler ?
                <props.mutationHandler form={form} submitted={formSubmitted} completeCallback={mutationCompleteCallback} />
                : null}
            {/* <Button type="primary" htmlType="submit">
                Submit
        </Button> */}
        </Form>
    </Modal>;
};