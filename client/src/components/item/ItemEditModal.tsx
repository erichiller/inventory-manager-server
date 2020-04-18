import React from 'react';
import { useForm, FormProps } from 'antd/lib/form/Form';
import { Form, Modal, Input } from 'antd';
import { visibleHandler } from './ItemTable';
import { Item } from '../../lib/item';

interface ItemEditModalProps {
    recordEditComponent: React.FC;
    visibleHandler: visibleHandler;
    item: Item<any>;
}

export const ItemEditModal: React.FC<ItemEditModalProps> = ( props ) => {
    const [ form ] = useForm();

    const formProps: Partial<FormProps> = {
        labelCol: { span: 8 },
        wrapperCol: { span: 16 },
    };

    const onFinish = ( values: {
        [ name: string ]: any;
    } ) => {
        console.log( { class: 'ItemEditModal', method: 'onFinish', values } );
    };

    return <Modal
        visible={true}
        title={Item.name}
        onOk={onFinish}
        onCancel={event => props.visibleHandler()}
    >
        <Form {...formProps}
            form={form}
            layout="horizontal"
            name="item-add-edit-delete"
            onFinish={onFinish}>
            <Form.Item>
                <Form.Item label="Field AA">
                    <Input title="test" placeholder="input placeholder" />
                </Form.Item>
            </Form.Item>
            {props.recordEditComponent}
        </Form>
    </Modal>;
};