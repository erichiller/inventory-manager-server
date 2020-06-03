import React, { useState, useEffect } from 'react';
import { Form, Divider, Button, Modal, message } from 'antd';
import { GetOrderQuery, GetOrderQueryVariables, useGetOrderQuery } from '../../lib/types/graphql';

import { QueryResultTypePlus } from '../../lib/UtilityFunctions';
import { PlusOutlined } from '@ant-design/icons';
import { useHistory } from 'react-router-dom';
import { useForm } from 'antd/lib/form/util';
import { QueryResult } from 'react-apollo';
import { ItemSelect } from '../../lib/item/ItemBundle/ItemSelect';


type OrderEditModalProps = {
    order: QueryResultTypePlus<typeof useGetOrderQuery>;
    orderId?: null;
} | {
    order?: null;
    orderId: number;
} | {
    order?: null;
    orderId?: null;
}
// extends Union<OrderFormProps, OrderBundle> { }


export const OrderEditModal: React.FC<OrderEditModalProps> = ( props ) => {
    let { orderId } = props;
    const [ form ] = useForm();
    const history = useHistory();
    let loading = true;

    const [ order, setOrder ] = useState<QueryResultTypePlus<typeof useGetOrderQuery>>(props.order);


    let result: QueryResult<GetOrderQuery, GetOrderQueryVariables>;

    if ( !order && orderId ) {
        result = useGetOrderQuery( {
            variables: {
                id: orderId
            }
        } );
        loading = result.loading;

        useEffect( () => {
            if ( result.error ) {
                message.error( result.error );
            }
            if ( result.data ) {
                setOrder( result.data.order );
                if ( result.data.order ) {
                    message.info( `loaded data, found orderId of ${ result.data.order.id }` );
                } else {
                    message.warning( `No Orders found.` );
                }
            }
        }, [ result.data, result.error ] );
    } else {
        console.debug( `Order received in props not running GraphQL`, { order: props.order } );
    }

    // useEffect( () => {
    //     screwSizeInputRef.current.focus();
    // }, [ screwSizeInputRef ] );

    // useEffect( () => {
    //     let initProps: Partial<OrderBundle> = {};
    //     if ( !props.thread_direction ) {
    //         initProps.thread_direction = EnumHandednessEnum.right;
    //     }
    //     form.setFieldsValue( initProps );
    // } );
    const exitModal = () => {
        console.log( "cancelling modal, history.goBack, history is currently", { history } );
        history.goBack();
    };
    const onFinish = ( values: {
        [ name: string ]: any;
    } ) => {
        console.log( { class: 'OrderEditModal', method: 'onFinish', values } );
        // setFormSubmitted( true );
    };

    const onFinishFailed = ( errorInfo ) => {
        console.error( { class: 'OrderEditModal', method: 'onFinishFailed', errorInfo } );
    };

    const onFieldsChange = ( changedFields, values ) => {
        console.log( { class: 'OrderEditModal', method: 'onFieldsChange', changedFields, values } );
    };

    return <Modal
        visible={true}
        title="Order"
        // width={null}
        className="OrderFormModal"
        onOk={e => {
            console.log( { class: 'OrderEditModal', method: 'onOk', e, values: form.getFieldsValue() } );
            form.submit();
        }}
        onCancel={event => exitModal()}
    >
        <Form
            name="OrderForm"
            form={form}
            layout="horizontal"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 9 }}
            // name="Order-add-edit-delete"
            onKeyPress={( event ) => {
                console.log( { log: "onKeyPress", target: event.target, currentTarget: event.currentTarget, event, keyCode: event.keyCode, native: event.nativeEvent.keyCode } );
                if ( event.nativeEvent.keyCode === 13 ) { form.submit(); }
            }}
            initialValues={order}
            onFieldsChange={onFieldsChange}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
        >
            <div className="col">
                <Divider key="Items" orientation="left">Items</Divider>
                <Form.Item name="Items" label="Items">
                    <ItemSelect />

                </Form.Item>
                {/* <Form.List name="Items">
                    {( fields, { add, remove } ) => {
                        return (
                            <React.Fragment>
                                {fields.map( ( field, index ) => (
                                    <Form.Item
                                        {...field}
                                        label="Bundled Item"
                                        getValueFromEvent={( args ) => {
                                            console.log( 'form getValueFromEvent (Bundled Order)', { field, index, args } );
                                            return args;
                                        }}
                                    >
                                        <ItemSelect placeholder="Search for Item"
                                            // suffix={
                                            //     <MinusCircleOutlined
                                            //         className="dynamic-delete-button"
                                            //         onClick={() => {
                                            //             remove( field.name );
                                            //         }}
                                            //     />
                                            // }
                                        />
                                    </Form.Item>
                                ) )}
                                <Form.Item
                                    label=" "
                                    colon={false}
                                >
                                    <Button
                                        type="dashed"
                                        onClick={() => {
                                            add();
                                        }}
                                        style={{ width: "100%", textAlign: 'center' }}
                                    >
                                        <PlusOutlined /> Add Item
                                    </Button>
                                </Form.Item>
                            </React.Fragment>
                        );
                    }}
                </Form.List> */}
            </div>

        </Form>
    </Modal>;
};



