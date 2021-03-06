import React, { useState, useEffect } from 'react';
import { Form, Modal, message, Input, Switch } from 'antd';
import { useGetVendorQuery, useInsertVendorMutation, InsertVendorMutationVariables, useGetVendorLazyQuery, useUpdateVendorMutation, UpdateVendorMutationVariables, GetVendorDocument, GetVendorsDocument } from './Vendor.ops';
import { useInsertManufacturerMutation, useDeleteManufacturerMutation } from '~components/Manufacturer/Manufacturer.ops';

import { QueryResultTypePlus, Intersection, filterObject, deepCopy, submitFormWithEnterKey } from '~lib/UtilityFunctions';
import { useHistory } from 'react-router-dom';
import { useForm } from 'antd/lib/form/Form';
import { PageSpin } from '../Shared/PageSpin';
import { Vendor } from '~lib/Vendor/Vendor';
import { UrlSelect } from '../Shared/UrlInput';
import { Callbacks } from 'rc-field-form/lib/interface';


type VendorFormModalProps = Intersection<{
    vendor: QueryResultTypePlus<typeof useGetVendorQuery>;
    vendorId?: null;
} | {
    vendor?: null;
    vendorId: number;
} | {
    vendor?: null;
    vendorId?: null;
}, {
    visibilityHandler: ( modal: React.ReactElement | null ) => void;
}>;
// extends Union<VendorFormProps, VendorBundle> { }


export const VendorFormModal: React.FC<VendorFormModalProps> = ( props ) => {
    let { vendorId } = props;
    const [ form ] = useForm<UpdateVendorMutationVariables>();
    const history = useHistory();


    const [ runGet, lookupResult ] = useGetVendorLazyQuery( {
        partialRefetch: true,
        returnPartialData: true,
    } );

    const [ vendor, setVendor ] = useState<QueryResultTypePlus<typeof useGetVendorQuery>>( props.vendor ?? lookupResult.data?.vendor );


    console.log( "VendorFormModal init", { props, lookupResult, vendor } );

    //edit
    const [ updateVendor, updateVendorResult ] = useUpdateVendorMutation();
    const [ insertManufacturer, insertManufacturerResult ] = useInsertManufacturerMutation();
    const [ deleteManufacturer, deleteManufacturerResult ] = useDeleteManufacturerMutation();
    // add new
    const [ insertVendor, insertVendorResult ] = useInsertVendorMutation( {
        refetchQueries: [
            { query: GetVendorDocument }
        ]
    } );


    /***************************************** Effects *****************************************/

    /**
     * Handle Lookup results
     */
    useEffect( () => {
        console.debug( `loading data using vendorId of ${ vendorId }`, lookupResult );
        if ( !vendor && lookupResult.data?.vendor ) {
            setVendor( lookupResult.data.vendor );
        } else if ( !vendor && vendorId ) {
            runGet( {
                variables: {
                    id: vendorId
                }
            } );
        } else {
            console.debug( `Vendor received in props not running GraphQL`, { vendor: props.vendor } );
        }
        if ( lookupResult.error ) {
            message.error( lookupResult.error );
        }
        if ( lookupResult.data && !lookupResult.loading ) {
            if ( lookupResult.data.vendor ) {
                setVendor( lookupResult.data.vendor );
                console.debug( `loaded data, found vendorId of ${ lookupResult.data.vendor.id }`, lookupResult.data.vendor );
                message.info( `loaded data, found vendorId of ${ lookupResult.data.vendor.id }` );
            } else {
                console.warn( `No Vendors found`, lookupResult );
                message.warning( `No Vendors found.` );
            }
        }
    }, [ vendorId, lookupResult.data, lookupResult.error ] );


    /**
     * Handle Mutations results
     */
    useEffect( () => {
        let error = insertVendorResult.error || updateVendorResult.error || insertManufacturerResult.error || deleteManufacturerResult.error;
        let data = insertVendorResult.data || updateVendorResult.data; // || insertManufacturerResult.data || deleteManufacturerResult.data;
        if ( error ) {
            // completeCallback( false );
            message.error( `${ error.name }: ${ error.message }` );
        } else if ( data ) {
            message.success( `successfully ${ insertVendorResult.data ? 'created' : 'updated' } ${ data.vendor?.__typename } with id ${ data.vendor?.id }` );
            // return () => {
            form.resetFields();
            exitModal();
            // };
        }
    }, [ insertVendorResult, updateVendorResult, insertManufacturerResult, deleteManufacturerResult ] );

    /***************************************************************************/

    const exitModal = () => {
        console.log( "cancelling modal, history.goBack, history is currently", { history } );
        props.visibilityHandler( null );
    };

    const onFinish = ( values: {
        [ name: string ]: any;
    } ) => {
        console.log( { class: 'VendorEditModal', method: 'onFinish', values, vendor, formFieldValues: form.getFieldsValue() } );
        if ( vendorId ) {
            let formFieldValues = form.getFieldsValue() as Exclude<UpdateVendorMutationVariables, 'id'> & {
                manufacturer: boolean;
            };
            // edit
            // if id now, but not before
            if ( formFieldValues.manufacturer && !vendor?.manufacturer ) {
                insertManufacturer( {
                    variables: {
                        name: formFieldValues.name,
                        url: formFieldValues.url,
                        vendor_id: vendorId
                    }
                } );
            } else if ( !formFieldValues.manufacturer && Array.isArray( vendor?.manufacturer ) && vendor?.manufacturer.length == 1 
            // TODO: need to fix weird manufacturer treatment by hasura. See TODO in client\src\lib\Vendor\Vendor.tsx
            // this should be: vendor?.manufacturer === true 
            ) {
                console.log( `deleting manufacturer, value was ${ vendor?.manufacturer }, value is: ${ formFieldValues.manufacturer }\n`, { vendor, values, formFieldValues: form.getFieldsValue() } );
                // remove manufacturer record
                deleteManufacturer( {
                    variables: {
                        id: vendor?.manufacturer[ 0 ].id
                    }
                } );
            }
            updateVendor( {
                variables: {
                    id: vendorId,
                    ...filterObject( formFieldValues, null, [ 'id', 'manufacturer' ] )
                }
            } );
        } else {
            // insert new (add)
            let formFieldValues = form.getFieldsValue() as Exclude<InsertVendorMutationVariables, 'id'>;
            insertVendor( {
                variables: {
                    ...filterObject( formFieldValues, null, [ 'manufacturer' ] ),
                    ...( formFieldValues.manufacturer ? {
                        manufacturer: {
                            data: [ {
                                name: formFieldValues.name,
                                url: formFieldValues.url
                            } ]
                        }
                    } : {} )
                },
                refetchQueries: [
                    { query: GetVendorsDocument }
                ]
            } );
        }
    };


    const onFinishFailed: Callbacks['onFinishFailed'] = ( errorInfo ) => {
        console.error( { class: 'VendorEditModal', method: 'onFinishFailed', errorInfo } );
    };

    const onFieldsChange: Callbacks['onFieldsChange']  = ( changedFields, values ) => {
        console.log( { class: 'VendorEditModal', method: 'onFieldsChange', changedFields, values } );
    };

    // let initialValues = vendor ? vendor : { placed_date: moment() , items: [{}] };

    /** halt waiting for incoming vendor data. */
    if ( !vendor && vendorId ) {
        console.debug( "no vendor data; awaiting data" );
        return <PageSpin />;
    }

    let initialValues: Partial<Intersection<
        Omit<Vendor, 'manufacturer'>,
        { manufacturer: boolean; }
    >> = {};
    if ( vendor ) {
        initialValues = {
            ...filterObject( deepCopy( vendor ), null, [ 'manufacturer' ] ),
            ...{ manufacturer: ( vendor.manufacturer && vendor.manufacturer.length === 1 ? true : false ) }
        };
    }

    return <Modal
        visible={true}
        title="Vendor"
        onOk={e => {
            console.log( { class: 'VendorEditModal', method: 'onOk', e, values: form.getFieldsValue() } );
            form.submit();
        }}
        onCancel={event => {
            console.log( "Modal onCancel", event );
            exitModal();
        }}
    >
        <Form
            name="VendorForm"
            form={form}
            layout="horizontal"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 18 }}
            onKeyPress={submitFormWithEnterKey( form )}
            initialValues={initialValues}
            onFieldsChange={onFieldsChange}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
        >
            <div className="col">
                <Form.Item name="name" label="Name" rules={[ { required: true } ]}>
                    <Input />
                </Form.Item>
                <Form.Item name="account_id" label="Account #">
                    <Input />
                </Form.Item>
                <Form.Item
                    name={'manufacturer'}
                    label="Manufacturer?"
                    valuePropName='checked'
                // normalize={( value: Boolean, prevValue: Boolean, allValues: Store ) => {
                //     console.log( 'vendor manufacturer form\n', { value, prevValue, allValues } );
                //     return {data: {id: value}};
                // }}
                >
                    <Switch />
                </Form.Item>

                <UrlSelect name="url" label="URL" validationMessage="Please enter a valid website for this Vendor." required />
                {/* <UrlSelect name="item_url_template" label="Item URL Template" 
                    tooltip="String template for Vendor Item specific URL. eg. http://vendor.tld/product/{{sku}}"
                    validationMessage="Please enter a valid item URL template for this Vendor" /> */}

                <Form.Item name="item_url_template" label="Item URL Template" 
                    tooltip="String template for Vendor Item specific URL. eg. http://vendor.tld/product/{{sku}}"
                    rules={[
                        {
                            type: 'url',
                            message: '"Please enter a valid item URL template for this Vendor"'
                        },
                        {
                            pattern: /.*{{sku}}/, // /.*{{(sku|fun)}}/ if there was two options
                            message: "Please enter a valid item URL template for this Vendor which includes a template {{variable}}"
                        }
                    ]}
                >
                    <Input />
                </Form.Item>
            </div>

        </Form>
    </Modal>;
};



