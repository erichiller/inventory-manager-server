import React, { useState, useEffect } from 'react';
import { Form, Modal, message, Input, DatePicker } from 'antd';
import { Callbacks } from 'rc-field-form/lib/interface';
import { useHistory } from 'react-router-dom';
import { useForm } from 'antd/lib/form/Form';
import { useGetShipmentQuery, useInsertShipmentMutation, InsertShipmentMutationVariables, useGetShipmentLazyQuery, useUpdateShipmentMutation, UpdateShipmentMutationVariables, GetShipmentDocument } from './Shipment.ops';

import { QueryResultTypePlus, Intersection, PartialPartial, submitFormWithEnterKey } from '~lib/UtilityFunctions';

import { PageSpin } from '~components/Shared/PageSpin';
import { VendorSelect } from '~components/Vendor/VendorSelect';
import { OrderSelect } from '~components/Order/Form/OrderSelect';


type ShipmentFormModalProps = Intersection<{
    shipment: QueryResultTypePlus<typeof useGetShipmentQuery>;
    shipmentId?: null;
} | {
    shipment?: null;
    shipmentId: number;
} | {
    shipment?: null;
    shipmentId?: null;
}, {
    visibilityHandler: ( modal: React.ReactElement ) => void;
        onFinish?: ( values: PartialPartial<UpdateShipmentMutationVariables, 'id'> ) => void;
},
{
    excludeOrderInput?: null | undefined;
    onChange?: ( shipment_item: InsertShipmentMutationVariables ) => void;
} | {
    excludeOrderInput: true;
    onChange?: ( shipment_item: Exclude<InsertShipmentMutationVariables, 'order_id'> ) => void;
}>;

export const ShipmentFormModal: React.FC<ShipmentFormModalProps> = ( props ) => {
    let { shipmentId } = props;
    const [ form ] = useForm();
    const history = useHistory();


    const [ runGet, lookupResult ] = useGetShipmentLazyQuery( {
        partialRefetch: true,
        returnPartialData: true,
    } );

    const [ shipment, setShipment ] = useState<QueryResultTypePlus<typeof useGetShipmentQuery>>( props.shipment ?? lookupResult.data?.shipment );



    console.log( "ShipmentFormModal init", { props, lookupResult, shipment } );

    //edit
    const [ updateShipment, updateShipmentResult ] = useUpdateShipmentMutation();
    // add new
    const [ insertShipment, insertShipmentResult ] = useInsertShipmentMutation( {
        refetchQueries: [
            { query: GetShipmentDocument }
        ]
    } );


    /***************************************** Effects *****************************************/

    /**
     * Handle Lookup results
     */
    useEffect( () => {
        console.debug( `loading data using shipmentId of ${ shipmentId }`, lookupResult );
        if ( !shipment && lookupResult.data?.shipment ) {
            setShipment( lookupResult.data.shipment );
        } else if ( !shipment && shipmentId ) {
            runGet( {
                variables: {
                    id: shipmentId
                }
            } );
        } else {
            console.debug( `Shipment received in props not running GraphQL`, { shipment: props.shipment } );
        }
        if ( lookupResult.error ) {
            message.error( lookupResult.error );
        }
        if ( lookupResult.data && !lookupResult.loading ) {
            if ( lookupResult.data.shipment ) {
                setShipment( lookupResult.data.shipment );
                console.debug( `loaded data, found shipmentId of ${ lookupResult.data.shipment.id }`, lookupResult.data.shipment );
                message.info( `loaded data, found shipmentId of ${ lookupResult.data.shipment.id }` );
            } else {
                console.warn( `No Shipment Items found`, lookupResult );
                message.warning( `No Shipment Items found.` );
            }
        }
    }, [ shipmentId, lookupResult.data, lookupResult.error ] );


    /**
     * Handle Mutations results
     */
    useEffect( () => {
        let error = insertShipmentResult.error || updateShipmentResult.error;
        let data = insertShipmentResult.data || updateShipmentResult.data; // || insertShipmentResult.data || deleteShipmentResult.data;
        if ( error ) {
            // completeCallback( false );
            message.error( `${ error.name }: ${ error.message }` );
        } else if ( data ) {
            message.success( `successfully ${ insertShipmentResult.data ? 'created' : 'updated' } ${ data?.shipment.__typename } with id ${ data.shipment.id }` );
            // return () => {
            form.resetFields();
            exitModal();
            // };
        }
    }, [ insertShipmentResult, updateShipmentResult ] );

    /***************************************************************************/

    const exitModal = () => {
        console.log( "cancelling modal, history.goBack, history is currently", { history } );
        props.visibilityHandler( null );
    };

    const onFinish = ( values: PartialPartial<UpdateShipmentMutationVariables, 'id'> ) => {
        console.log( { class: 'ShipmentEditModal', method: 'onFinish', values, shipment, formFieldValues: form.getFieldsValue() } );
        if ( props.onFinish ){
            console.log( { class: 'ShipmentEditModal', method: 'onFinish', event: 'calling props supplied onFinish()' } );
            return props.onFinish( values );
        }
        if ( shipmentId ) {
            let formFieldValues = form.getFieldsValue() as Exclude<UpdateShipmentMutationVariables, 'id'>;
            updateShipment( {
                variables: {
                    id: shipmentId,
                    // ...filterObject( formFieldValues, null, [ 'shipment' ] )
                    ...formFieldValues
                }
            } );
        } else {
            // insert new (add)
            let formFieldValues = form.getFieldsValue() as Exclude<InsertShipmentMutationVariables, 'id'>;
            insertShipment( {
                variables: {
                    ...formFieldValues
                },
            } );
        }
    };


    const onFinishFailed: Callbacks[ 'onFinishFailed' ] = ( errorInfo ) => {
        console.error( { class: 'ShipmentEditModal', method: 'onFinishFailed', errorInfo } );
    };

    const onFieldsChange: Callbacks[ 'onFieldsChange' ] = ( changedFields, values ) => {
        console.log( { class: 'ShipmentEditModal', method: 'onFieldsChange', changedFields, values } );
    };

    /** halt waiting for incoming shipment data. */
    if ( !shipment && shipmentId ) {
        console.debug( "no shipment data; awaiting data" );
        return <PageSpin />;
    }
    let initialValues: Partial<typeof shipment> = shipment ?? {};

    return <Modal
        visible={true}
        title="Shipment Item"
        onOk={e => {
            console.log( { class: 'ShipmentFormModal', method: 'onOk', e, values: form.getFieldsValue() } );
            form.submit();
        }}
        onCancel={event => {
            console.log( "Modal onCancel", event );
            exitModal();
        }}
    >
        <Form
            name="ShipmentForm"
            form={form}
            layout="horizontal"
            labelCol={{ span: 6 }}
            wrapperCol={{ span: 16 }}
            onKeyPress={submitFormWithEnterKey( form )}
            initialValues={initialValues}
            onFieldsChange={onFieldsChange}
            onFinish={( fields ) => onFinish( fields as PartialPartial<UpdateShipmentMutationVariables, 'id'> )}
            onFinishFailed={onFinishFailed}
        >
            <div className="col">
                <Form.Item name="tracking_id" label="Tracking #" rules={[ { required: true } ]}>
                    <Input />
                </Form.Item>
                {/* TODO: auto assign carrier_vendor_id from Tracking # format */}
                <Form.Item name="carrier_vendor_id" label="Carrier" rules={[ { required: true } ]}> 
                    <VendorSelect />
                </Form.Item>
                <Form.Item name="received_date" label="Date Received">
                    <DatePicker
                    // id="datepicker_monthpicker"
                    // defaultValue={moment()}
                    />
                </Form.Item>
                <Form.Item name="shipped_date" label="Date Shipped">
                    <DatePicker
                    // id="datepicker_monthpicker"
                    // defaultValue={moment()}
                    />
                </Form.Item>
                <Form.Item name="vendor_invoice_id" label="Vendor Invoice">
                    <Input />
                </Form.Item>
                {props.excludeOrderInput ? null :
                    <Form.Item name="order_id" label="Order">
                        <OrderSelect />
                    </Form.Item>
                }
            </div>

        </Form>
    </Modal>;
};



