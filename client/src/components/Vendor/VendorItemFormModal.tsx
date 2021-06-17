import React, { useState, useEffect } from 'react';
import { Form, Divider, Button, Modal, message, Input, DatePicker, Switch } from 'antd';
/**
 * // TODO: consider removing momentjs for a (SMALLER) alternative
 * antd - remove momentjs
 *  https://ant.design/docs/react/replace-moment
 *  https://github.com/ant-design/antd-dayjs-webpack-plugin/blob/master/README.md
 **/
import { GetVendorItemQuery, GetVendorItemQueryVariables, useGetVendorItemQuery, useInsertVendorItemMutation, InsertVendorItemMutationVariables, useGetVendorItemLazyQuery, useUpdateVendorItemMutation, UpdateVendorItemMutationVariables, GetVendorItemDocument, VendorItem as VendorItemGql } from '~lib/types/graphql';

import { QueryResultTypePlus, Intersection, filterObject, deepCopy } from '~lib/UtilityFunctions';
import { useHistory } from 'react-router-dom';
import { FormProps, useForm } from 'antd/lib/form/Form';
import { ItemSelect } from '../Item/ItemSelect';
import { VendorSelect } from './VendorSelect';
import { PageSpin } from '../Shared/PageSpin';

type VendorItemFormModalProps = Intersection<{
    vendorItem: QueryResultTypePlus<typeof useGetVendorItemQuery>;
    vendorItemId?: null;
} | {
    vendorItem?: null;
    vendorItemId: number;
} | {
    vendorItem?: null;
    vendorItemId?: null;
}, {
    visibilityHandler: ( modal: React.ReactElement | null ) => void;
    onFinish?: ( values: Partial<UpdateVendorItemMutationVariables> ) => void;
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
            message.success( `successfully ${ insertVendorItemResult.data ? 'created' : 'updated' } ${ data?.vendor_item?.__typename } with id ${ data.vendor_item?.id }` );
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
        console.log( { class: 'VendorItemEditModal', method: 'onFinish', values, vendorItem, formFieldValues: form.getFieldsValue() } );
        if ( props.onFinish ){
            console.log( { class: 'VendorItemEditModal', method: 'onFinish', event: 'calling props supplied onFinish()' } );
            return props.onFinish( values );
        }
        if ( vendorItemId ) {
            let formFieldValues = form.getFieldsValue() as Exclude<UpdateVendorItemMutationVariables, 'id'>;
            updateVendorItem( {
                variables: {
                    id: vendorItemId,
                    // ...filterObject( formFieldValues, null, [ 'manufacturer' ] )
                    ...filterObject( formFieldValues, null, ['id'] )
                }
            } );
        } else {
            // insert new (add)
            let formFieldValues = form.getFieldsValue() as Exclude<InsertVendorItemMutationVariables, 'id'>;
            insertVendorItem( {
                variables: {
                    ...formFieldValues
                },
            } );
        }
    };


    const onFinishFailed: FormProps['onFinishFailed'] = ( errorInfo ) => {
        console.error( { class: 'VendorItemEditModal', method: 'onFinishFailed', errorInfo } );
    };

    const onFieldsChange: FormProps['onFieldsChange'] = ( changedFields, values ) => {
        console.log( { class: 'VendorItemEditModal', method: 'onFieldsChange', changedFields, values } );
    };

    /** halt waiting for incoming vendor data. */
    if ( !vendorItem && vendorItemId ) {
        console.debug( "no vendor data; awaiting data" );
        return <PageSpin />;
    }
    let initialValues: Partial<typeof vendorItem> = vendorItem ?? {};

    return <Modal
        visible={true}
        title="Vendor Item"
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
                <Form.Item name="vendor_id" label="Vendor" rules={[ { required: true } ]}>
                    <VendorSelect />
                </Form.Item>
                <Form.Item name="item_id" label="Item" rules={[ { required: true } ]}>
                    <ItemSelect mode="single" />
                </Form.Item>
                <Form.Item name="vendor_sku" label="Vendor SKU" rules={[ { required: true } ]}>
                    <Input />
                </Form.Item>
                <Form.Item name="product_url" label="Product URL" rules={[ { required: false, type: 'url' } ]}>
                    <Input />
                </Form.Item>
                <Form.Item name="description" label="Description">
                    <Input />
                </Form.Item>
            </div>

        </Form>
    </Modal>;
};



