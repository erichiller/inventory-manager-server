import React, { useState, useEffect } from 'react';
import { Form, Modal, message, Input } from 'antd';
import { useInsertManufacturerItemMutation, InsertManufacturerItemMutationVariables, useGetManufacturerItemLazyQuery, useUpdateManufacturerItemMutation, UpdateManufacturerItemMutationVariables, GetManufacturerItemDocument, ManufacturerItem as ManufacturerItemGql } from '~lib/types/graphql';

import { Intersection, filterObject, submitFormWithEnterKey } from '~lib/UtilityFunctions';
import { KeyboardEventKey } from '~lib/types/KeyboardEventKey';
import { useHistory } from 'react-router-dom';
import { FormProps, useForm } from 'antd/lib/form/Form';
import { ItemSelect } from '../Item/ItemSelect';
import { ManufacturerSelect } from './ManufacturerSelect';
import { PageSpin } from '~components/Shared/PageSpin';
import { UrlSelect } from '~components/Shared/UrlInput';
import TextArea from 'antd/lib/input/TextArea';


type ManufacturerItemFormModalProps = Intersection<{
    // manufacturerItem: QueryResultTypePlus<typeof useGetManufacturerItemQuery>;
    manufacturerItem: ManufacturerItemFormT;
    manufacturerItemId?: null;
    itemId?: null;
} | {
    manufacturerItem?: null;
    manufacturerItemId: number;
    itemId?: null;
} | {
    manufacturerItem?: null;
    manufacturerItemId?: null;
    /** For initial value on form if provided */
    itemId?: number | null;
}, {
    visibilityHandler: ( modal: React.ReactElement | null ) => void;
    onFinish?: ( values: ManufacturerItemFormT ) => void;
}>;

export type ManufacturerItemFormT = UpdateManufacturerItemMutationVariables;


export const ManufacturerItemFormModal: React.FC<ManufacturerItemFormModalProps> = ( props ) => {
    let { manufacturerItemId } = props;
    const [ form ] = useForm<ManufacturerItemFormT>();
    const history = useHistory();


    const [ runGet, lookupResult ] = useGetManufacturerItemLazyQuery( {
        partialRefetch: true,
        returnPartialData: true,
    } );

    const [ manufacturerItem, setManufacturerItem ] = useState<ManufacturerItemFormT | null | undefined>( props.manufacturerItem ?? lookupResult.data?.manufacturer_item );


    console.log( "ManufacturerItemFormModal init", { props, lookupResult, manufacturerItem } );

    //edit
    const [ updateManufacturerItem, updateManufacturerItemResult ] = useUpdateManufacturerItemMutation();
    // add new
    const [ insertManufacturerItem, insertManufacturerItemResult ] = useInsertManufacturerItemMutation( {
        refetchQueries: [
            { query: GetManufacturerItemDocument }
        ]
    } );


    /***************************************** Effects *****************************************/

    /**
     * Handle Lookup results
     */
    useEffect( () => {
        console.debug( `loading data using manufacturerItemId of ${ manufacturerItemId }`, lookupResult );
        if ( !manufacturerItem && lookupResult.data?.manufacturer_item ) {
            setManufacturerItem( lookupResult.data.manufacturer_item );
        } else if ( !manufacturerItem && manufacturerItemId ) {
            runGet( {
                variables: {
                    id: manufacturerItemId
                }
            } );
        } else {
            console.debug( `Manufacturer received in props not running GraphQL`, { manufacturer: props.manufacturerItem } );
        }
        if ( lookupResult.error ) {
            message.error( lookupResult.error );
        }
        if ( lookupResult.data && !lookupResult.loading ) {
            if ( lookupResult.data.manufacturer_item ) {
                setManufacturerItem( lookupResult.data.manufacturer_item );
                console.debug( `loaded data, found manufacturerItemId of ${ lookupResult.data.manufacturer_item.id }`, lookupResult.data.manufacturer_item );
                message.info( `loaded data, found manufacturerItemId of ${ lookupResult.data.manufacturer_item.id }` );
            } else {
                console.warn( `No Manufacturer Items found`, lookupResult );
                message.warning( `No Manufacturer Items found.` );
            }
        }
    }, [ manufacturerItemId, lookupResult.data, lookupResult.error ] );


    /**
     * Handle Mutations results
     */
    useEffect( () => {
        let error = insertManufacturerItemResult.error || updateManufacturerItemResult.error;
        let data = insertManufacturerItemResult.data || updateManufacturerItemResult.data; // || insertManufacturerResult.data || deleteManufacturerResult.data;
        if ( error ) {
            // completeCallback( false );
            message.error( `${ error.name }: ${ error.message }` );
        } else if ( data ) {
            message.success( `successfully ${ insertManufacturerItemResult.data ? 'created' : 'updated' } ${ data?.manufacturer_item?.__typename } with id ${ data.manufacturer_item?.id }` );
            // return () => {
            form.resetFields();
            exitModal();
            // };
        }
    }, [ insertManufacturerItemResult, updateManufacturerItemResult ] );

    /***************************************************************************/

    const exitModal = () => {
        console.log( "cancelling modal, history.goBack, history is currently", { history } );
        props.visibilityHandler( null );
    };

    const onFinish = ( values: ManufacturerItemFormT ) => {
        console.log( { class: 'ManufacturerItemEditModal', method: 'onFinish', values, manufacturerItem, formFieldValues: form.getFieldsValue() } );
        if ( props.onFinish ){
            console.log( { class: 'ManufacturerItemEditModal', method: 'onFinish', event: 'calling props supplied onFinish()' } );
            return props.onFinish( values );
        }
        if ( manufacturerItemId ) {
            let formFieldValues = form.getFieldsValue() as Exclude<UpdateManufacturerItemMutationVariables, 'id'>;
            updateManufacturerItem( {
                variables: {
                    id: manufacturerItemId,
                    // ...filterObject( formFieldValues, null, [ 'manufacturer' ] )
                    ...filterObject( formFieldValues, null, [ 'id' ] )
                }
            } );
        } else {
            // insert new (add)
            let formFieldValues = form.getFieldsValue() as Exclude<InsertManufacturerItemMutationVariables, 'id'>;
            insertManufacturerItem( {
                variables: {
                    ...formFieldValues
                },
            } );
        }
    };


    const onFinishFailed: FormProps['onFinishFailed'] = ( errorInfo ) => {
        console.error( { class: 'ManufacturerItemEditModal', method: 'onFinishFailed', errorInfo } );
    };

    const onFieldsChange: FormProps['onFieldsChange'] = ( changedFields, values ) => {
        console.log( { class: 'ManufacturerItemEditModal', method: 'onFieldsChange', changedFields, values } );
    };

    /** halt waiting for incoming manufacturer data. */
    if ( !manufacturerItem && manufacturerItemId ) {
        console.debug( "no manufacturer data; awaiting data" );
        return <PageSpin />;
    }
    let initialValues: Partial<ManufacturerItemGql> = manufacturerItem ?? {
        ...( props.itemId ? { item_id: props.itemId } : {} )
    };

    return <Modal
        visible={true}
        title="Manufacturer Item"
        onOk={e => {
            console.log( { class: 'ManufacturerItemFormModal', method: 'onOk', e, values: form.getFieldsValue() } );
            form.submit();
        }}
        onCancel={event => {
            console.log( "Modal onCancel", event );
            exitModal();
        }}
    >
        <Form
            name="ManufacturerItemForm"
            form={form}
            layout="horizontal"
            labelCol={{ span: 6 }}
            wrapperCol={{ span: 16 }}
            onKeyPress={submitFormWithEnterKey( form )}
            initialValues={initialValues}
            onFieldsChange={onFieldsChange}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
        >
            <div className="col">
                <Form.Item name="manufacturer_id" label="Manufacturer" rules={[ { required: true } ]}>
                    <ManufacturerSelect />
                </Form.Item>
                <Form.Item name="item_id" label="Item" rules={[ { required: true } ]}>
                    <ItemSelect  mode="single" />
                </Form.Item>
                <Form.Item name="manufacturer_product_id" label="Product ID" rules={[ { required: true } ]}>
                    <Input />
                </Form.Item>
                <Form.Item name="manufacturer_product_name" label="Product Name" >
                    <Input />
                </Form.Item>
                <Form.Item name="manufacturer_product_series" label="Product Series" >
                    <Input />
                </Form.Item>
                <UrlSelect name="product_url" label="URL" validationMessage="Please enter a valid website for this Manufacturer's Item." />
                <Form.Item name="description" label="Description">
                    <TextArea />
                </Form.Item>
            </div>

        </Form>
    </Modal>;
};



