import React, { useState, useEffect } from 'react';
import { Form, Divider, Button, Modal, message, Input, DatePicker } from 'antd';
/**
 * // TODO: consider removing momentjs for a (SMALLER) alternative
 * antd - remove momentjs
 *  https://ant.design/docs/react/replace-moment
 *  https://github.com/ant-design/antd-dayjs-webpack-plugin/blob/master/README.md
 **/
import { GetOrderQuery, GetOrderQueryVariables, useGetOrderQuery, useInsertOrderMutation, InsertOrderMutationVariables, useGetOrderLazyQuery, useUpdateOrderMutation, GetOrderDocument, UpdateOrderMutationVariables, GetOrdersDocument, Order as OrderGql } from '~lib/types/graphql';

import { QueryResultTypePlus, Union, filterObject, transparentLog } from '~lib/UtilityFunctions';
import { PlusOutlined, MinusCircleOutlined, StopOutlined, CheckCircleOutlined } from '@ant-design/icons';
import { useHistory } from 'react-router-dom';
import { useForm } from 'antd/lib/form/Form';
import { VendorSelect } from '../../Vendor/VendorSelect';
import moment from 'moment';
import { OrderItemInput } from './OrderItemComposite';
import { PageSpin } from '~components/Shared/PageSpin';
import { Order } from '~lib/Order/Order';
import TextArea from 'antd/lib/input/TextArea';
import { CurlyBracesIcon } from '../../../styles/icon';
import { JsonModal } from '~components/Shared/JsonModal';
import { encapsulateChildObjectsIntoDataProp } from '~lib/FormHelpers';


type OrderFormModalProps = Union<{
    order: QueryResultTypePlus<typeof useGetOrderQuery>;
    orderId?: null;
} | {
    order?: null;
    orderId: number;
} | {
    order?: null;
    orderId?: null;
}, {
    visibilityHandler: ( modal: React.ReactElement ) => void;
}>;

export const OrderFormModal: React.FC<OrderFormModalProps> = ( props ) => {
    let { orderId } = props;
    const [ form ] = useForm();
    const history = useHistory();

    const [ order, setOrder ] = useState<QueryResultTypePlus<typeof useGetOrderQuery>>( props.order );
    const [ modal, setModal ] = useState<React.ReactElement>( null );

    const [ runGetOrder, lookupResult ] = useGetOrderLazyQuery( {
        partialRefetch: true,
        returnPartialData: true,
    } );

    //edit
    const [ updateOrder, updateOrderResult ] = useUpdateOrderMutation();
    // add new
    const [ insertOrder, insertOrderResult ] = useInsertOrderMutation( {
        refetchQueries: [
            { query: GetOrderDocument }
        ]
    } );

    /***************************************** Effects *****************************************/

    /**
     * Handle Lookup results
     */
    useEffect( () => {
        console.debug( `loading data using orderId of ${ orderId }`, lookupResult );
        if ( !order && lookupResult.data?.order ) {
            setOrder( lookupResult.data.order );
        } else if ( !order && orderId ) {
            runGetOrder( {
                variables: {
                    id: orderId
                }
            } );
        } else {
            console.debug( `Order received in props not running GraphQL`, { order: props.order } );
        }
        if ( lookupResult.error ) {
            message.error( lookupResult.error );
        }
        if ( lookupResult.data && !lookupResult.loading ) {
            if ( lookupResult.data.order ) {
                setOrder( lookupResult.data.order );
                message.info( `loaded data, found orderId of ${ lookupResult.data.order.id }` );
            } else {
                console.warn( `No Orders found`, lookupResult );
                message.warning( `No Orders found.` );
            }
        }
    }, [ orderId, lookupResult.data, lookupResult.error ] );

    /**
     * Handle Mutations results
     */
    useEffect( () => {
        let error = insertOrderResult.error || updateOrderResult.error; // || insertManufacturerResult.error || deleteManufacturerResult.error;
        let data = insertOrderResult.data || updateOrderResult.data; // || insertManufacturerResult.data || deleteManufacturerResult.data;
        if ( error ) {
            // completeCallback( false );
            message.error( `${ error.name }: ${ error.message }` );
        } else if ( data ) {
            message.success( `successfully ${ insertOrderResult.data ? 'created' : 'updated' } ${ data?.order.__typename } with id ${ data.order.id }` );
            // return () => {
            form.resetFields();
            exitModal();
            // };
        }
    }, [ insertOrderResult, updateOrderResult ] ); // , insertManufacturerResult, deleteManufacturerResult



    // useEffect( () => {
    //     if ( error ) {
    //         // completeCallback( false );
    //         message.error( `${ error.name }: ${ error.message }` );
    //     } else if ( data ) {
    //         message.success( `successfully created ${ data.__typename } with id ${ data.insert_order.id }` );
    //         return () => {
    //             form.resetFields();
    //             exitModal();
    //         };
    //     }
    // }, [ data, loading, error ] );

    /***************************************************************************/

    const exitModal = () => {
        console.log( "cancelling modal, history.goBack, history is currently", { history } );
        props.visibilityHandler( null );
    };
    const onFinish = ( values: {
        [ name: string ]: any;
    } ) => {
        // URGENT: need to wrap **ANY** **OBJECTS** within { data: <object> } BEFORE INSERT / UPDATE / ETC
        console.log( { class: 'OrderEditModal', method: 'onFinish', values, order, formFieldValues: form.getFieldsValue() } );
        if ( orderId ) {
            // set to InsertOrderMutationVariables rather than UpdateOrderMutationVariables here because thats what the form contains
            let formFieldValues = form.getFieldsValue() as Exclude<InsertOrderMutationVariables, 'id'> & { 
                manufacturer: boolean;
            };
            // edit
            // if id now, but not before
            // if ( formFieldValues.manufacturer && !order.manufacturer ) {
            //     insertManufacturer( {
            //         variables: {
            //             name: formFieldValues.name,
            //             url: formFieldValues.url,
            //             order_id: orderId
            //         }
            //     } );
            // } else if ( !formFieldValues.manufacturer && order.manufacturer ) {
            //     console.log( `deleting manufacturer, value was ${ order.manufacturer }, value is: ${ formFieldValues.manufacturer }\n`, { order, values, formFieldValues: form.getFieldsValue() } );
            //     // remove manufacturer record
            //     deleteManufacturer( {
            //         variables: {
            //             id: order.manufacturer[ 0 ].id
            //         }
            //     } );
            // }
            // TODO: handle:  order_items, payment method, vendor, shipment -- changes for objects
            updateOrder( {
                variables: {
                    id: orderId,
                    ...filterObject( formFieldValues, null, [ 'order_items' ] )
                }
            } );
        } else {
            let formFieldValues = encapsulateChildObjectsIntoDataProp(
                                        form.getFieldsValue() as Exclude<OrderGql, 'id'>
                                    );
            insertOrder( {
                variables: {
                    ...formFieldValues
                    // ...filterObject( formFieldValues, null, [ 'manufacturer' ] ),
                    // ...( formFieldValues.manufacturer ? {
                    //     manufacturer: {
                    //         data: [ {
                    //             name: formFieldValues.name,
                    //             url: formFieldValues.url
                    //         } ]
                    //     }
                    // } : {} )
                },
                refetchQueries: [
                    { query: GetOrdersDocument }
                ]
            } );
        }
    };


    const onFinishFailed = ( errorInfo ) => {
        console.error( { class: 'OrderEditModal', method: 'onFinishFailed', errorInfo } );
    };

    const onFieldsChange = ( changedFields, values ) => {
        console.log( { class: 'OrderEditModal', method: 'onFieldsChange', changedFields, values } );
    };

    if ( !order && orderId ) {
        return <PageSpin />;
    }

    let initialValues: Partial<Order> |
        Union<
            Pick<Order, 'placed_date'>,
            { items: Array<object>; }
        > = {
            // fulfilled_date: undefined
        };
    if ( order ) {
        for ( let key in order ) {
            console.log( key );
            if ( key !== null && [
                'fulfilled_date',
                'placed_date'
            ].includes( key ) ) {
                initialValues[ key ] = moment( order[ key ] ? transparentLog({orderKey: `order[${key}]=${order[key]}`}, order[ key ]) : null );
            } else {
                // default
                initialValues[ key ] = order[ key ];
            }
            if ( !initialValues.order_items ) {
                initialValues.order_items = [];
            }
        }
        if ( initialValues.fulfilled_date === null || initialValues.fulfilled_date.toString() === "Invalid date" || initialValues.fulfilled_date === undefined ) {
            delete initialValues['fulfilled_date'];
        }
    } else {
        initialValues = { placed_date: moment(), fulfilled_date: null, items: [] };
    }


    console.log( "initialValues", { order, initialValues: JSON.stringify(initialValues) } );

    return <Modal
        visible={true}
        title={`Order` + ( 'id' in initialValues ? ` #${initialValues.id}` : '' )}
        width={650}
        onOk={e => {
            console.log( { class: 'OrderEditModal', method: 'onOk', e, values: form.getFieldsValue() } );
            form.submit();
        }}
        onCancel={event => exitModal()}
        footer={[
            <Button
                key="order_form_debug_button"
                icon={<CurlyBracesIcon height={16} />} 
                children="Debug"
                onClick={() => setModal(<JsonModal json={form.getFieldsValue()} visibilityHandler={setModal} />)} />,

            <Button key="cancel" danger type="default" onClick={() => exitModal()}>
                <StopOutlined />
                Cancel
            </Button>,

            <Button key="submit" type="primary" onClick={() => { form.submit() }}>
                <CheckCircleOutlined />
                Confirm
            </Button>
        ]}
    >
        {modal}
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
                <Form.Item name="fulfilled_date" label="Date Fulfilled">
                    <DatePicker
                        defaultValue={undefined}
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

                <Form.Item name="url" label="URL"
                    // https://ant.design/components/form/#Rule
                    rules={[
                        {
                            // required: true,
                            pattern: /https?:\/\/.*/,
                            message: 'Please enter a valid url for this Order.'
                        },
                    ]}
                >
                    {/* https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/url */}
                    <TextArea
                        autoSize={{ minRows: 1, maxRows: 5 }}
                        // type="url" // htmlFor="url" ?? 
                        // pattern="https?://.*"
                    />
                </Form.Item>

                {/* TODO: select payment_method_id */}




                <Divider key="Items" orientation="left">Items</Divider>
                {/* <Form.Item name='items' label="Items"> */}
                {/* <Form.Item name={[ 'items', 'item_id' ]} label="Items"> */}
                {/* <ItemSelect /> */}
                {/* <OrderItemInput />
                </Form.Item> */}
                <Form.List name="order_items">
                    {( fields, { add, remove } ) => {
                        return (
                            <React.Fragment>
                                {fields.map( ( field, index ) => (
                                    <Form.Item
                                        {...field}
                                        // label="Item"
                                        getValueFromEvent={( args ) => {
                                            console.log( 'form getValueFromEvent (OrderFormModal.items)', { field, index, args } );
                                            return args;
                                        }}
                                        className="full-width-form-item"
                                        // normalize={ ( value: any, prevValue: any, allValues: Store) => {
                                        //     return { data: value };
                                        // }}
                                    >
                                        <OrderItemInput placeholder="Search for Item"
                                            vendorId={form.getFieldValue("vendor_id")}
                                            suffix={
                                                <MinusCircleOutlined
                                                    className="dynamic-delete-button"
                                                    onClick={() => {
                                                        remove( field.name );
                                                    }}
                                                />
                                            }
                                        />
                                    </Form.Item>
                                ) )}
                                <Form.Item
                                    label={null}
                                    colon={false}
                                    className="full-width-form-item"
                                >
                                    <Button
                                        key="add_item"
                                        type="dashed"
                                        onClick={() => {
                                            add();
                                        }}
                                        onKeyDown={() => {
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
                </Form.List>
            </div>

        </Form>
    </Modal>;
};



