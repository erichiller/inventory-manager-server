import React, { useState, useEffect } from 'react';
import { Form, Divider, Button, Modal, message, Input, DatePicker } from 'antd';
/**
 * // TODO: consider removing momentjs for a (SMALLER) alternative
 * antd - remove momentjs
 *  https://ant.design/docs/react/replace-moment
 *  https://github.com/ant-design/antd-dayjs-webpack-plugin/blob/master/README.md
 **/ 
import { GetOrderQuery, GetOrderQueryVariables, useGetOrderQuery, useInsertOrderMutation, InsertOrderMutationVariables } from '../../lib/types/graphql';

import { QueryResultTypePlus } from '../../lib/UtilityFunctions';
import { PlusOutlined } from '@ant-design/icons';
import { useHistory } from 'react-router-dom';
import { useForm } from 'antd/lib/form/util';
import { QueryResult } from 'react-apollo';
import { ItemSelect } from '../item/ItemSelect';
import { VendorSelect } from '../vendor/VendorSelect';
import moment from 'moment';


type OrderFormModalProps = {
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


export const OrderFormModal: React.FC<OrderFormModalProps> = ( props ) => {
    let { orderId } = props;
    const [ form ] = useForm();
    const history = useHistory();
    // let loading = true;

    const [ order, setOrder ] = useState<QueryResultTypePlus<typeof useGetOrderQuery>>( props.order );
    
    const [ insertOrderMutation, { data, loading, error } ] = useInsertOrderMutation();


    let result: QueryResult<GetOrderQuery, GetOrderQueryVariables>;

    if ( !order && orderId ) {
        result = useGetOrderQuery( {
            variables: {
                id: orderId
            }
        } );
        // loading = result.loading;

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
    //         initProps.thread_direction = EnumItemHandednessEnum.right;
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

        console.log( { c: "insertOrderMutation" }, form.getFieldsValue() );
        insertOrderMutation( {
            variables: ( form.getFieldsValue() as InsertOrderMutationVariables)
        });
    };

    useEffect( () => {
        if ( error ) {
            // completeCallback( false );
            message.error( `${ error.name }: ${ error.message }` );
        } else if ( data ) {
            message.success( `successfully created ${ data.__typename } with id ${ data.insert_order.id }` );
            return () => {
                form.resetFields();
                exitModal();
            };
        }
    }, [ data, loading, error ] );

    const onFinishFailed = ( errorInfo ) => {
        console.error( { class: 'OrderEditModal', method: 'onFinishFailed', errorInfo } );
    };

    const onFieldsChange = ( changedFields, values ) => {
        console.log( { class: 'OrderEditModal', method: 'onFieldsChange', changedFields, values } );
    };

    let initialValues = order ? order : { placed_date: moment() };

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
            labelCol={{ span: 6 }}
            wrapperCol={{ span: 16 }}
            // name="Order-add-edit-delete"
            onKeyPress={( event ) => {
                console.log( { log: "onKeyPress", target: event.target, currentTarget: event.currentTarget, event, keyCode: event.keyCode, native: event.nativeEvent.keyCode } );
                if ( event.nativeEvent.keyCode === 13 ) { form.submit(); }
            }}
            initialValues={initialValues}
            onFieldsChange={onFieldsChange}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
        >
            <div className="col">
                <Form.Item name="vendor_id" label="Vendor" required>
                    <VendorSelect />
                </Form.Item>
                <Form.Item name="vendor_order_id" label="Order #" required>
                    <Input />
                </Form.Item>
                <Form.Item name="placed_date" label="Date Placed" required>
                    <DatePicker
                        // id="datepicker_monthpicker"
                        // defaultValue={moment()}
                    />
                </Form.Item>
                <Form.Item name="fullfilled_date" label="Date Fullfilled">
                    <DatePicker
                        // id="datepicker_monthpicker"
                        // defaultValue={moment()}
                    />
                </Form.Item>


                <Form.Item name="items_cost" label="Items Cost">
                    <Input type="number" step="0.01" min="0" prefix="$" />
                </Form.Item>
                <Form.Item name="tax_cost" label="Tax">
                    <Input type="number" step="0.01" min="0" prefix="$" />
                </Form.Item>
                <Form.Item name="total_cost" label="Total">
                    <Input type="number" step="0.01" min="0" prefix="$" />
                </Form.Item>


                <Form.Item name="pon" label="Purchase Order #">
                    <Input />
                </Form.Item>

                <Form.Item name="url" label="URL">
                    {/* https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/url */}
                    <Input
                        type="url" // htmlFor="url" ?? 
                        pattern="https?://.*"
                     />
                </Form.Item>

                {/* TODO: select payment_method_id */}
                {/* TODO: select money input type ?? html */}




                <Divider key="Items" orientation="left">Items</Divider>
                <Form.Item name={['items','id']} label="Items">
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



