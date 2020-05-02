import React from 'react';
import { useForm, FormProps } from 'antd/lib/form/Form';
import { Form, Modal, Input, Button } from 'antd';
import { visibleHandler } from './ItemTable';
import { Item } from '../../lib/item';
import { ItemEditFormProps } from '../../lib/item/Item';

interface ItemEditModalProps {
    recordEditComponent: React.FC<ItemEditFormProps>;
    visibleHandler: visibleHandler;
    item: Item<any>;
}

export const ItemEditModal: React.FC<ItemEditModalProps> = ( props ) => {
    const [ form ] = useForm();
    console.log( { class: 'ItemEditModal', msg: 'load FC', props } );

    const onFinish = ( values: {
        [ name: string ]: any;
    } ) => {
        console.log( { class: 'ItemEditModal', method: 'onFinish', values } );
    };

    const onFinishFailed = ( errorInfo ) => console.error(errorInfo);

    return <Modal
        visible={true}
        title={Item.name}
        width={null}
        // bodyStyle={{
        //     maxWidth: '80vw',
        //     maxHeight: '80vh'
        // }}
        className="ItemEditFormModal"
        onOk={e => form.submit()}
        onCancel={event => props.visibleHandler()}
    >
        <Form
            name="ItemForm"
            form={form}
            layout="horizontal"
            labelCol={{span: 8 }}
            wrapperCol={{span: 9 }}
            // name="item-add-edit-delete"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            >
            {/* <Form.Item> */}
            {/* <Form.Item key="aaa" name="bbb" label="Field AA">
                    <Input placeholder="input placeholder" />
                </Form.Item>
            {/* </Form.Item> */}
            { props && props.recordEditComponent ?
                <props.recordEditComponent form={form} />
            : null}
            {/* <Button type="primary" htmlType="submit">
                Submit
        </Button> */}
        </Form>
    </Modal>;
};