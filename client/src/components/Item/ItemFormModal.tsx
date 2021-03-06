import React, { useState } from 'react';
import { useForm } from 'antd/lib/form/Form';
import { Form, Modal, Input } from 'antd';
import { Item } from '~lib/Item';
import { ItemFormProps, FormMutationHandler } from '~lib/Item/Item';
import TextArea from 'antd/lib/input/TextArea';
import { QtyInput } from '~lib/Item/Common/QtyInput';
import { useHistory } from 'react-router-dom';
import { Callbacks } from 'rc-field-form/lib/interface';
import { VisibilityHandlerCallback } from '~lib/types/common';
import { submitFormWithEnterKey } from '~lib/UtilityFunctions';


type ItemFormModalProps = {
    mutationHandler: React.FC<FormMutationHandler>;
    visibleHandler: VisibilityHandlerCallback;
} & ( {
    recordEditComponent: React.FC<ItemFormProps<object>>;
    item: Item<any>;
    addComponent?: null;
} | {
    addComponent: React.FC<ItemFormProps<object>>;
    item?: null;
    recordEditComponent?: null;
} );

export const ItemFormModal: React.FC<ItemFormModalProps> = ( props ) => {
    const [ form ] = useForm();
    console.log( { class: 'ItemFormModal', msg: 'init', props } );
    const [ formSubmitted, setFormSubmitted ] = useState<boolean>( false );
    const history = useHistory();

    const onFinish: Callbacks['onFinish'] = ( values: {
        [ name: string ]: any;
    } ) => {
        console.log( { class: 'ItemFormModal', method: 'onFinish', values } );
        setFormSubmitted( true );
    };

    const onFinishFailed: Callbacks['onFinishFailed'] = ( errorInfo ) => {
        console.error( { class: 'ItemFormModal', method: 'onFinishFailed', errorInfo } );
    };

    const onFieldsChange: Callbacks['onFieldsChange'] = ( changedFields, values ) => {
        console.log( { class: 'ItemFormModal', method: 'onFieldsChange', changedFields, values } );
    };

    const mutationCompleteCallback: ( success: boolean ) => void = ( success: boolean ) => {
        console.log( `mutationCompleteCallback=${success}` );
        if ( ! success ){
            setFormSubmitted( false );
        } else {
            exitModal();
        }
    };

    const exitModal = () => {
        console.log( "cancelling modal, history.goBack, history is currently", { history } );
        // history.goBack();
        props.visibleHandler( null );
    };

    console.log( { item: props.item, "initialValues=": props.item ? props.item.simpleObject : {} } );

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
            console.log( { class: 'ItemFormModal', method: 'onOk', e, values: form.getFieldsValue() } );
            form.submit();
        }}
        onCancel={() => exitModal()}
    >
        <Form
            name="ItemForm"
            form={form}
            layout="horizontal"
            labelCol={{span: 8 }}
            // wrapperCol={{span: 9 }}
            // name="item-add-edit-delete"
            onKeyPress={submitFormWithEnterKey( form )}
            initialValues={props.item?.editFormInitialValues}
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
                    <Input placeholder="Typically autogenerated" />
                </Form.Item>
                <Form.Item name="description" label="Description">
                    <TextArea placeholder="Brief (optional) description of this item" autoSize={{ minRows: 2 }} />
                </Form.Item>
                {/* URGENT: stock needs fixing ; new stock-table */}
                <Form.Item name="stock" label="Qty">
                    <QtyInput />
                </Form.Item>
                {/* <Form.Item name="order" label="Order">
                    <OrderSelect />
                </Form.Item> */}
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
            {props && props.addComponent ?
                <props.addComponent form={form} />
                : null}
            {props && props.mutationHandler ?
                <props.mutationHandler form={form} originalObject={props.item} submitted={formSubmitted} completeCallback={mutationCompleteCallback} />
                : null}
            {/* <Button type="primary" htmlType="submit">
                Submit
        </Button> */}
        </Form>
    </Modal>;
};