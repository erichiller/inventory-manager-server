import React, { useState, useEffect } from 'react';
import { Form, Divider, Button, Modal, message, Input, DatePicker } from 'antd';
import { PlusOutlined, MinusCircleOutlined, StopOutlined, CheckCircleOutlined } from '@ant-design/icons';
import { useHistory } from 'react-router-dom';
import { useForm } from 'antd/lib/form/Form';
import TextArea from 'antd/lib/input/TextArea';

import { useGetOrderQuery, useInsertOrderMutation, useGetOrderLazyQuery, useUpdateOrderMutation, GetOrderDocument, GetOrdersDocument, Order as OrderGql, InsertOrderMutationVariables, ShipmentConstraint, ShipmentUpdateColumn, OrderItemInsertInput } from '~lib/types/graphql';

import { QueryResultTypePlus, Intersection, filterObject, transparentLog, Unpacked, propValuesEqual, deepCopy } from '~lib/UtilityFunctions';
import { VendorSelect } from '../../Vendor/VendorSelect';
import moment from 'moment';
import { OrderItemComposite } from './OrderItemComposite';
import { PageSpin } from '~components/Shared/PageSpin';
import { Order } from '~lib/Order/Order';
import { CurlyBracesIcon } from '../../../styles/icon';
import { JsonModal } from '~components/Shared/JsonModal';
import { encapsulateChildObjectsIntoDataProp } from '~lib/FormHelpers';

import { Callbacks } from 'rc-field-form/lib/interface';
import { RuleItem } from 'async-validator';
import { ShipmentSelectValue, ShipmentAdditionalOption } from '~components/Shipment/ShipmentSelect';
import { Integer } from '~lib/types/uint8';


type OrderFormModalProps = Intersection<{
    order: QueryResultTypePlus<typeof useGetOrderQuery>;
    orderId?: null;
} | {
    order?: null;
    orderId: number;
} | {
    order?: null;
    orderId?: null;
}, {
    visibilityHandler: ( modal: React.ReactElement | null ) => void;
}>;

export const OrderFormModal: React.FC<OrderFormModalProps> = ( props ) => {
    let { orderId } = props;
    const [ form ] = useForm();
    const history = useHistory();

    const [ order, setOrder ] = useState<QueryResultTypePlus<typeof useGetOrderQuery>>( props.order );
    const [ modal, setModal ] = useState<React.ReactElement | null>( null );
    /** track shipments used and new shipments created by any OrderItem for default use in subsequent order items */
    const [ shipments, setShipments ] = useState<ShipmentAdditionalOption[]>( [
        // {
        //     temp_id: 'zero',
        //     carrier_vendor_id: 1,
        //     received_date: undefined,
        //     shipped_date: undefined,
        //     tracking_id: "ff",
        //     vendor_invoice_id: undefined
        // }
    ] );

    const [ runGetOrder, lookupResult ] = useGetOrderLazyQuery( {
        partialRefetch: true,
        returnPartialData: true,
    } );
    //edit
    const [ updateOrder, updateOrderResult ] = useUpdateOrderMutation( { refetchQueries: [
        { query: GetOrderDocument, variables: { id: orderId }}
    ]} );
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
        if ( orderId ) {
            console.debug( `loading data using orderId of ${ orderId }`, lookupResult );
            if ( !order && lookupResult.data?.order ) {
                setOrder( lookupResult.data.order );
            } else if ( !order && orderId ) {
                runGetOrder( {
                    variables: {
                        id: orderId
                    }
                } );
            } else if ( !order ) {
                console.debug( `No Order received, this must be a new Order entry.` );
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
        }
        console.debug( `no orderId present, not loading from GraphQL` );
    }, [ orderId, lookupResult.data, lookupResult.error ] );

    /**
     * Handle Mutations results
     */
    useEffect( () => {
        let error = insertOrderResult.error || updateOrderResult.error; // || insertOrderItemResult.error || insertOrderItemWithExistingVendorItemResult.error || insertManufacturerResult.error || deleteManufacturerResult.error;
        let data = insertOrderResult.data || updateOrderResult.data; // || insertManufacturerResult.data || deleteManufacturerResult.data;
        if ( error ) {
            // completeCallback( false );
            message.error( `${ error.name }: ${ error.message }` );
        } else if ( data ) {
            message.success( `successfully ${ insertOrderResult.data ? 'created' : 'updated' } ${ data?.order?.__typename } with id ${ data.order?.id }` );
            // return () => {
            form.resetFields();
            exitModal();
            // };
        }
    }, [ insertOrderResult, updateOrderResult ] ); // , insertOrderItemResult.error, insertOrderItemWithExistingVendorItemResult.error, insertManufacturerResult, deleteManufacturerResult

    /***************************************************************************/

    const exitModal = () => {
        console.log( "cancelling modal, history.goBack, history is currently", { history } );
        props.visibilityHandler( null );
    };
    const onFinish: Callbacks[ 'onFinish' ] = ( values: {
        [ name: string ]: any;
    } ) => {
        console.log( { class: 'OrderEditModal', method: 'onFinish', values, order, formFieldValues: form.getFieldsValue() } );
        if ( orderId ) {
            // set to InsertOrderMutationVariables rather than UpdateOrderMutationVariables here because thats what the form contains
            let formFieldValues = deepCopy( form.getFieldsValue() as Exclude<OrderGql, 'id'> );
            // let formFieldValues = deepCopy( form.getFieldsValue() as Exclude<OrderInsertInput, 'id'> );
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
            
            // delete any order items no longer present
            let currentOrderItems: Integer[] = formFieldValues.order_items.map( orderItem => orderItem.id );
            let priorOrderItems: Integer[] = order.order_items.map( orderItem => orderItem.id );
            let deleteOrderItems = priorOrderItems.filter( ( priorOrderItem ) => !currentOrderItems.includes( priorOrderItem ) );

            // update any order items, by inserting with conflict
            let updateOrderItems: OrderItemInsertInput[] = formFieldValues.order_items
                .filter( order_item => {
                    let existingOrderItem: Unpacked<typeof order[ 'order_items' ]> = order.order_items.find( el => el.id === order_item.id );
                    console.log( { class: 'OrderEditModal', method: 'onFinish', action: 'order_items.filter', order: order, order_item: order_item, existingOrderItem: existingOrderItem, valuesEqual_: propValuesEqual( existingOrderItem, order_item ) } );
                    if ( !propValuesEqual( existingOrderItem, order_item ) ) {
                        return true;
                    }
                    return false;
                } )
                .map( order_item => {
                    let filteredOrderItem = filterObject( order_item, null, [ 
                        '__typename', 'item', 'manufacturer_item', 'manufacturer_item_id', 'order', 'order_id', 'shipment', 'shipment_id', 'vendor_item', 'vendor_item_id' 
                    ] );
                    return {
                        order_id: orderId,
                        ...filteredOrderItem,
                        /** Vendor Items */
                        // if pre-existing vendor_item
                        ...( order_item.vendor_item_id !== null ? { vendor_item_id: order_item.vendor_item_id } : {} ),
                        // else create new vendor_item
                        ...( Object.keys( order_item ).includes( 'vendor_item' ) ? {
                            vendor_item: {
                                data: filterObject( order_item.vendor_item, null, [ '__typename', 'item', 'vendor', 'orderItems', 'orderItems_aggregate' ] )
                            }
                        } : {} ),
                        /** Shipments */
                        // if pre-existing shipment
                        ...( order_item.shipment_id !== null ? { shipment_id: order_item.shipment_id } : {} ),
                        // else create new shipment
                        ...( Object.keys( order_item ).includes( 'shipment' ) ? {
                            shipment: {
                                data: {
                                    ...filterObject( order_item.shipment, null, [ '__typename', 'carrier', 'orderItems', 'order', 'orderItems_aggregate' ] ),
                                    order_id: orderId
                                }
                            }
                        } : {} ),
                        /** Manufacturer Items */
                        // if pre-existing manufacturer item
                        ...( order_item.manufacturer_item_id !== null ? { manufacturer_item_id: order_item.manufacturer_item_id } : {} ),
                        // else create new manufacturer item
                        ...( Object.keys( order_item ).includes( 'manufacturer_item' ) ? {
                            manufacturer_item: {
                                data: filterObject( order_item.manufacturer_item, null, [ '__typename', 'item', 'manufacturer', 'orderItems', 'orderItems_aggregate' ] )
                            }
                        } : {} ),

                    };
                } );

            updateOrder( {
                variables: {
                    id: orderId,
                    ...filterObject( formFieldValues, null, [ 'order_items' ] ),
                    orderItems: updateOrderItems,
                    deleteOrderItems: deleteOrderItems
                },
            } );
        } else {
            let formFieldValues: InsertOrderMutationVariables = encapsulateChildObjectsIntoDataProp(
                deepCopy( form.getFieldsValue() as Exclude<OrderGql, 'id'> )
            );
            // formFieldValue.injectOnConflictGql( formFieldValues[,  );
            console.log( { formFieldValues_encapsulated: JSON.stringify( formFieldValues, null, 2 ) } );
            if ( formFieldValues?.order_items?.data != null && Array.isArray( formFieldValues.order_items.data ) && formFieldValues.order_items.data.length > 0 ) {
                formFieldValues.order_items.data = formFieldValues.order_items.data.map( v => {
                    if ( v?.shipment != null ) {
                        v.shipment.on_conflict = {
                            constraint: ShipmentConstraint.shipment_tracking_id_key,
                            update_columns: [ ShipmentUpdateColumn.tracking_id ]
                        };
                    }
                    return {
                        ...v,
                    };
                } );
            }
            if ( formFieldValues ) {
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
            } else {
                console.warn( "invalid form data, can not insert order" );
            }
        }
    };


    const onFinishFailed: Callbacks[ 'onFinishFailed' ] = ( errorInfo ) => {
        console.error( { class: 'OrderEditModal', method: 'onFinishFailed', errorInfo } );
    };

    const onFieldsChange: Callbacks[ 'onFieldsChange' ] = ( changedFields, values ) => {
        console.log( { class: 'OrderEditModal', method: 'onFieldsChange', changedFields, values } );
    };

    if ( !order && orderId ) {
        return <PageSpin />;
    }

    let initialValues: Partial<Order> |
        Intersection<
            Pick<Order, 'placed_date'>,
            { items: Array<object>; }
        > = {
        // fulfilled_date: undefined
        };
    if ( order ) {
        for ( let key in order ) {
            if ( key !== null && [
                'fulfilled_date',
                'placed_date'
            ].includes( key ) ) {
                initialValues[ key ] = moment( order[ key ] ? transparentLog( { orderKey: `order[${ key }]=${ order[ key ] }` }, order[ key ] ) : null );
            } else {
                // default
                initialValues[ key ] = order[ key ];
            }
            if ( !initialValues.order_items ) {
                initialValues.order_items = [];
            }
        }
        if ( initialValues.fulfilled_date === null || initialValues.fulfilled_date.toString() === "Invalid date" || initialValues.fulfilled_date === undefined ) {
            delete initialValues[ 'fulfilled_date' ];
        }
    } else {
        initialValues = { placed_date: moment(), fulfilled_date: null, items: [] };
    }

    console.log( "initialValues", { order, initialValues: JSON.stringify( initialValues ) } );

    return <Modal
        visible={true}
        title={`Order` + ( 'id' in initialValues ? ` #${ initialValues.id }` : '' )}
        width={650}
        onOk={e => {
            console.log( { class: 'OrderEditModal', method: 'onOk', e, values: form.getFieldsValue() } );
            form.submit();
        }}
        onCancel={( _ ) => exitModal()}
        footer={[
            <Button
                key="order_form_debug_button"
                icon={<CurlyBracesIcon height={16} />}
                children="Debug"
                onClick={() => setModal( <JsonModal json={form.getFieldsValue()} visibilityHandler={setModal} /> )} />,

            <Button key="cancel" danger type="default" onClick={() => exitModal()}>
                <StopOutlined />
                Cancel
            </Button>,

            <Button key="submit" type="primary" onClick={() => { form.submit(); }}>
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
                    {/* {( props ) => null} */}
                    <VendorSelect />
                    {/* <ManufacturerSelect /> */}
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
                <Form.List name="order_items">
                    {( fields, { add, remove } ) => {
                        return (
                            <React.Fragment>

                                {fields.map( ( field, index ) => (
                                    <Form.Item
                                        {...field}
                                        getValueFromEvent={( args: { shipment?: ShipmentSelectValue; } ) => {
                                            console.log( 'OrderFormModal getValueFromEvent (OrderFormModal.items)', { field, index, args } );
                                            let shipment = args.shipment;
                                            if ( shipment ) {
                                                if ( !( 'id' in shipment ) ) {
                                                    if ( 'carrier_vendor_id' in shipment ) {
                                                        console.log( "OrderFormModal, new shipment detected", shipment );
                                                        let shipmentFiltered = filterObject( shipment, null, [ 'id' ] );
                                                        // shipmentFiltered.carrier_vendor_id
                                                        setShipments( [ shipmentFiltered ] );
                                                    }
                                                }
                                            }
                                            return args;
                                        }}
                                        rules={
                                            [
                                                {
                                                    fields: {
                                                        quantity: { required: true, type: 'number', message: "Quantity is required." }
                                                    },
                                                    required: true,
                                                    type: 'object',
                                                    // validator: ( rule, value, callback ) => {
                                                    //     try {
                                                    //         console.log("Validator", rule, value );
                                                    //         throw new Error( 'Something wrong!' );
                                                    //     } catch ( err ) {
                                                    //         callback( err );
                                                    //     }
                                                    // }
                                                }
                                            ] as RuleItem[] as any // Currently antd's rule
                                        }
                                        className="full-width-form-item"
                                    // normalize={ ( value: any, prevValue: any, allValues: Store) => {
                                    //     return { data: value };
                                    // }}
                                    >
                                        <OrderItemComposite placeholder="Search for Item"
                                            vendorId={form.getFieldValue( "vendor_id" )}
                                            additionalShipmentOptions={shipments}
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



