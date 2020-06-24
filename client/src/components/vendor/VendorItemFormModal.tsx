import React, { useState, useEffect } from 'react';
import { Form, Divider, Button, Modal, message, Input, DatePicker, Switch } from 'antd';
/**
 * // TODO: consider removing momentjs for a (SMALLER) alternative
 * antd - remove momentjs
 *  https://ant.design/docs/react/replace-moment
 *  https://github.com/ant-design/antd-dayjs-webpack-plugin/blob/master/README.md
 **/
import { GetVendorItemQuery, GetVendorItemQueryVariables, useGetVendorItemQuery, useInsertVendorItemMutation, InsertVendorItemMutationVariables, useGetVendorItemLazyQuery, useUpdateVendorItemMutation, UpdateVendorItemMutationVariables, GetVendorItemDocument, VendorItem as VendorItemGql } from '../../lib/types/graphql';

import { QueryResultTypePlus, Union, filterObject, deepCopy } from '../../lib/UtilityFunctions';
import { PlusOutlined, MinusCircleOutlined } from '@ant-design/icons';
import { useHistory } from 'react-router-dom';
import { useForm } from 'antd/lib/form/util';
import { QueryResult } from 'react-apollo';
import { ItemSelect } from '../item/ItemSelect';
import { VendorSelect } from './VendorSelect';
import moment from 'moment';
import { Store } from 'antd/lib/form/interface';
import { PageSpin } from '../shared/PageSpin';
import { Vendor } from '../../lib/Vendor/Vendor';


type VendorItemFormModalProps = Union<{
    vendorItem: QueryResultTypePlus<typeof useGetVendorItemQuery>;
    vendorItemId?: null;
} | {
    vendorItem?: null;
    vendorItemId: number;
} | {
    vendorItem?: null;
    vendorItemId?: null;
}, {
    visibilityHandler: ( modal: React.ReactElement ) => void;
}>;
// extends Union<VendorFormProps, VendorBundle> { }


export const VendorItemFormModal: React.FC<VendorItemFormModalProps> = ( props ) => {
    let { vendorItemId } = props;
    const [ form ] = useForm();
    const history = useHistory();


    const [ runGet, lookupResult ] = useGetVendorItemLazyQuery( {
        partialRefetch: true,
        returnPartialData: true,
    } );

    const [ vendorItem, setVendorItem ] = useState<QueryResultTypePlus<typeof useGetVendorItemQuery>>( props.vendorItem ?? lookupResult.data?.vendor_item );


    console.log( "VendorItemFormModal init", { props, lookupResult, vendorItem } );

    //edit
    const [ updateVendorItem, updateVendorItemResult ] = useUpdateVendorItemMutation();
    // add new
    const [ insertVendorItem, insertVendorItemResult ] = useInsertVendorItemMutation( {
        refetchQueries: [
            { query: GetVendorItemDocument }
        ]
    } );


    /***************************************** Effects *****************************************/

    /**
     * Handle Lookup results
     */
    useEffect( () => {
        console.debug( `loading data using vendorItemId of ${ vendorItemId }`, lookupResult );
        if ( !vendorItem && lookupResult.data?.vendor_item ) {
            setVendorItem( lookupResult.data.vendor_item );
        } else if ( !vendorItem && vendorItemId ) {
            runGet( {
                variables: {
                    id: vendorItemId
                }
            } );
        } else {
            console.debug( `Vendor received in props not running GraphQL`, { vendor: props.vendorItem } );
        }
        if ( lookupResult.error ) {
            message.error( lookupResult.error );
        }
        if ( lookupResult.data && !lookupResult.loading ) {
            if ( lookupResult.data.vendor_item ) {
                setVendorItem( lookupResult.data.vendor_item );
                console.debug( `loaded data, found vendorItemId of ${ lookupResult.data.vendor_item.id }`, lookupResult.data.vendor_item );
                message.info( `loaded data, found vendorItemId of ${ lookupResult.data.vendor_item.id }` );
            } else {
                console.warn( `No Vendor Items found`, lookupResult );
                message.warning( `No Vendor Items found.` );
            }
        }
    }, [ vendorItemId, lookupResult.data, lookupResult.error ] );


    /**
     * Handle Mutations results
     */
    useEffect( () => {
        let error = insertVendorItemResult.error || updateVendorItemResult.error;
        let data = insertVendorItemResult.data || updateVendorItemResult.data; // || insertManufacturerResult.data || deleteManufacturerResult.data;
        if ( error ) {
            // completeCallback( false );
            message.error( `${ error.name }: ${ error.message }` );
        } else if ( data ) {
            message.success( `successfully ${ insertVendorItemResult.data ? 'created' : 'updated' } ${ data?.vendor_item.__typename } with id ${ data.vendor_item.id }` );
            // return () => {
            form.resetFields();
            exitModal();
            // };
        }
    }, [ insertVendorItemResult, updateVendorItemResult ] );

    /***************************************************************************/

    const exitModal = () => {
        console.log( "cancelling modal, history.goBack, history is currently", { history } );
        props.visibilityHandler( null );
    };

    const onFinish = ( values: {
        [ name: string ]: any;
    } ) => {
        console.log( { class: 'VendorEditModal', method: 'onFinish', values, vendorItem, formFieldValues: form.getFieldsValue() } );
        if ( vendorItemId ) {
            let formFieldValues = form.getFieldsValue() as Exclude<UpdateVendorItemMutationVariables, 'id'>;
            updateVendorItem( {
                variables: {
                    id: vendorItemId,
                    // ...filterObject( formFieldValues, null, [ 'manufacturer' ] )
                    ...formFieldValues
                }
            } );
        } else {
            // insert new (add)
            let formFieldValues = form.getFieldsValue() as Exclude<InsertVendorItemMutationVariables, 'id'>;
            insertVendorItem( {
                variables: {
                    // ...filterObject( formFieldValues, null, [ 'manufacturer' ] ),
                    // ...( formFieldValues.manufacturer ? {
                        // manufacturer: {
                        //     data: [ {
                        //         name: formFieldValues.name,
                        //         url: formFieldValues.url
                        //     } ]
                        // }
                    // } : {} )
                    ...formFieldValues
                },
                // refetchQueries: [
                //     { query: GetVendorItemsDocument }
                // ]
            } );
        }
    };


    const onFinishFailed = ( errorInfo ) => {
        console.error( { class: 'VendorEditModal', method: 'onFinishFailed', errorInfo } );
    };

    const onFieldsChange = ( changedFields, values ) => {
        console.log( { class: 'VendorEditModal', method: 'onFieldsChange', changedFields, values } );
    };

    // let initialValues = vendor ? vendor : { placed_date: moment() , items: [{}] };

    /** halt waiting for incoming vendor data. */
    if ( !vendorItem && vendorItemId ) {
        console.debug( "no vendor data; awaiting data" );
        return <PageSpin />;
    }

    // let initialValues: Partial<Union<
    //     Omit<VendorItem, 'manufacturer'>,
    //     { manufacturer: boolean; }
    // >> = {};
    let initialValues: Partial<VendorItemGql> = vendorItem ?? {};
    // if ( vendorItem ) {
    //     initialValues = {
    //         ...filterObject( deepCopy( vendorItem ), null, [ 'manufacturer' ] ),
    //         ...{ manufacturer: ( vendor.manufacturer && vendor.manufacturer.length === 1 ? true : false ) }
    //     };
    // }

    return <Modal
        visible={true}
        title="Vendor"
        onOk={e => {
            console.log( { class: 'VendorItemEditModal', method: 'onOk', e, values: form.getFieldsValue() } );
            form.submit();
        }}
        onCancel={event => {
            console.log( "Modal onCancel", event );
            exitModal();
        }}
    >
        <Form
            name="VendorItemForm"
            form={form}
            layout="horizontal"
            labelCol={{ span: 6 }}
            wrapperCol={{ span: 16 }}
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
                <Form.Item name="description" label="Description" rules={[ { required: true } ]}>
                    <Input />
                </Form.Item>
                <Form.Item name="vendor_sku" label="Vendor SKU">
                    <Input />
                </Form.Item>
                <Form.Item name="vendor_id" label="Vendor" >
                    <VendorSelect />
                </Form.Item>
                <Form.Item name="vendor_id" label="Vendor" >
                    <ItemSelect />
                </Form.Item>
            </div>

        </Form>
    </Modal>;
};


