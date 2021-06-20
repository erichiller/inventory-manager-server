import React, { useState, useEffect } from 'react';
import { Form, Modal, message, Input } from 'antd';
import { useGetVendorItemQuery, useInsertVendorItemMutation, InsertVendorItemMutationVariables, useGetVendorItemLazyQuery, useUpdateVendorItemMutation, UpdateVendorItemMutationVariables, GetVendorItemDocument, useGetVendorLazyQuery, VendorItemInsertInput } from '~lib/types/graphql';

import { QueryResultTypePlus, Intersection, filterObject } from '~lib/UtilityFunctions';
import { useHistory } from 'react-router-dom';
import { FormProps, useForm } from 'antd/lib/form/Form';
import { ItemSelect } from '../Item/ItemSelect';
import { VendorSelect } from './VendorSelect';
import { PageSpin } from '../Shared/PageSpin';

type VendorItemFormModalProps = Intersection<{
    vendorItem: QueryResultTypePlus<typeof useGetVendorItemQuery>;
    vendorItemId?: null;
    itemId?: null;
    vendorId?: null;
} | {
    vendorItem?: null;
    vendorItemId: number;
    itemId?: null;
    vendorId?: null;
} | {
    vendorItem?: null;
    vendorItemId?: null;
    itemId?: null;
    vendorId?: null;
} | {
    vendorItem?: null;
    vendorItemId?: null;
    vendorId?: number;
    itemId?: number;
}, {
    visibilityHandler: ( modal: React.ReactElement | null ) => void;
    onFinish?: ( values: Partial<UpdateVendorItemMutationVariables> ) => void;
}>;

export const VendorItemFormModal: React.FC<VendorItemFormModalProps> = ( props ) => {
    let { vendorItemId, itemId } = props;
    const [ form ] = useForm<Pick<VendorItemInsertInput, 'description' | 'item_id' | 'url' | 'vendor_id' | 'vendor_sku'>>();
    const history = useHistory();

    const [ runGet, lookupResult ] = useGetVendorItemLazyQuery( {
        partialRefetch: true,
        returnPartialData: true,
    } );
    const [ getVendor, getVendorResult] = useGetVendorLazyQuery( {
        partialRefetch: true,
        returnPartialData: true,
        onCompleted: ( responseData ) => {
            console.debug( `loaded data, found vendor with id ${responseData.vendor?.id}`, responseData.vendor );
            setUrlFromVendorTemplate();
        },
        onError: ( error ) => {
            console.error( error );
            message.error( `Error requesting vendorId ${error.name}: ${error.message}` );
        }
    } );
    useEffect( () => { if ( props.vendorId ) { getVendor( { variables: { id: props.vendorId }} );} }, [] );

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
            console.debug( `VendorItemId received in props, but not VendorItem obj, running GraphQL`, props );
            runGet( {
                variables: {
                    id: vendorItemId
                }
            } );
        } else {
            console.debug( `Neither VendorItemId nor VendorItem object received in props not running GraphQL`, props );
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
        let data = insertVendorItemResult.data || updateVendorItemResult.data;
        if ( error ) {
            message.error( `${ error.name }: ${ error.message }` );
        } else if ( data ) {
            message.success( `successfully ${ insertVendorItemResult.data ? 'created' : 'updated' } ${ data?.vendor_item?.__typename } with id ${ data.vendor_item?.id }` );
            form.resetFields();
            exitModal();
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
        changedFields.forEach( changedField => {
            console.log( { class: 'VendorItemEditModal', method: 'onFieldsChange--changedField', changedField, name: changedField.name } );
            if ( ( changedField.name as string[] )[0] === "vendor_id" && typeof changedField.value === "number" ){
                getVendor(  { 
                    variables: { id: changedField.value },
                } );
            }
            if ( ( changedField.name as string[] )[0] === "vendor_sku" ){
                console.log( { class: 'VendorItemEditModal', method: 'onFieldsChange--changedField--found', changedField, name: changedField.name, f: form.getFieldsValue() } );
                setUrlFromVendorTemplate( );
            }
        } );
    };
    const skuIntoUrlTemplate = ( url_template: string, sku: string ) => url_template.replace( "{{sku}}", sku );
    const setUrlFromVendorTemplate = ( ) => {
        let sku = form.getFieldValue( ['vendor_sku'] );
        let urlFieldIsTouched: boolean = form.isFieldTouched( ['url'] ) ;
        if ( ! urlFieldIsTouched && sku && getVendorResult.data?.vendor?.item_url_template ){
            let newValue: string = skuIntoUrlTemplate( getVendorResult.data?.vendor?.item_url_template, sku );
            form.setFields( [ { 
                name: 'url',
                touched: false,
                value: newValue ,

            }] );
            console.debug( { 
                c: "VendorItemFormModal", f: "setUrlFromVendorTemplate", msg: "values received", 
                value: sku,
                newValue,
                urlFieldIsTouched,
                url_template: getVendorResult.data?.vendor?.item_url_template,
                fieldsUrlValue: form.getFieldsValue( ['url'] ) 
            } );
        }
    };

    /** halt waiting for incoming vendor data. */
    if ( !vendorItem && vendorItemId ) {
        console.debug( "no vendor data; awaiting data" );
        return <PageSpin />;
    }
    let initialValues: Partial<typeof vendorItem> = vendorItem ?? { 
        ...( props.vendorId ? {vendor_id: props.vendorId} : {} ),
        ...( itemId ? {item_id: itemId} : {} )
    };

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
                <Form.Item name="url" label="Product URL" rules={[ { required: false, type: 'url' } ]}>
                    <Input />
                </Form.Item>
                <Form.Item name="description" label="Description">
                    <Input />
                </Form.Item>
            </div>

        </Form>
    </Modal>;
};



