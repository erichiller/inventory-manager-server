import React, { useState, useEffect } from 'react';
import { Form, Modal, message, Input, Switch } from 'antd';
import { useGetManufacturerQuery, useInsertManufacturerWithVendorMutation, useGetManufacturerLazyQuery, useUpdateManufacturerUnchangedVendorMutation, UpdateManufacturerUnchangedVendorMutationVariables, useDeleteManufacturerMutation, GetManufacturerDocument, GetManufacturersDocument, useDeleteVendorMutation, useInsertVendorWithExistingManufacturerMutation } from '~lib/types/graphql';

import { QueryResultTypePlus, Intersection, filterObject, deepCopy, submitFormWithEnterKey } from '~lib/UtilityFunctions';
import { useHistory } from 'react-router-dom';
import { useForm } from 'antd/lib/form/Form';
import { Callbacks } from 'rc-field-form/lib/interface';
import { PageSpin } from '~components/Shared/PageSpin';
import { Manufacturer } from '~lib/Manufacturer/Manufacturer';
import { UrlSelect } from '~components/Shared/UrlInput';


type ManufacturerFormModalProps = Intersection<{
    manufacturer: QueryResultTypePlus<typeof useGetManufacturerQuery>;
    manufacturerId?: null;
} | {
    manufacturer?: null;
    manufacturerId: number;
} | {
    manufacturer?: null;
    manufacturerId?: null;
}, {
    visibilityHandler: ( modal: React.ReactElement | null ) => void;
}>;

interface ManufacturerForm {
    name: string;
    url: string;
    vendor?: boolean;
}

export const ManufacturerFormModal: React.FC<ManufacturerFormModalProps> = ( props ) => {
    let { manufacturerId } = props;
    const [ form ] = useForm<ManufacturerForm>();
    const history = useHistory();


    const [ runGet, lookupResult ] = useGetManufacturerLazyQuery( {
        partialRefetch: true,
        returnPartialData: true,
    } );

    const [ manufacturer, setManufacturer ] = useState<QueryResultTypePlus<typeof useGetManufacturerQuery>>( props.manufacturer ?? lookupResult.data?.manufacturer );


    console.log( "ManufacturerFormModal init", { props, lookupResult, manufacturer } );

    //edit
    const [ updateManufacturer, updateManufacturerResult ] = useUpdateManufacturerUnchangedVendorMutation();
    const [ deleteVendor, deleteVendorResult ] = useDeleteVendorMutation();
    const [ insertVendor, insertVendorResult ] = useInsertVendorWithExistingManufacturerMutation();
    // add new
    const [ insertManufacturer, insertManufacturerResult ] = useInsertManufacturerWithVendorMutation( {
        refetchQueries: [
            { query: GetManufacturerDocument }
        ]
    } );


    /***************************************** Effects *****************************************/

    /**
     * Handle Lookup results
     */
    useEffect( () => {
        console.debug( `loading data using manufacturerId of ${ manufacturerId }`, lookupResult );
        if ( !manufacturer && lookupResult.data?.manufacturer ) {
            setManufacturer( lookupResult.data.manufacturer );
        } else if ( !manufacturer && manufacturerId ) {
            runGet( {
                variables: {
                    id: manufacturerId
                }
            } );
        } else {
            console.debug( `Manufacturer received in props not running GraphQL`, { manufacturer: props.manufacturer } );
        }
        if ( lookupResult.error ) {
            message.error( lookupResult.error );
        }
        if ( lookupResult.data && !lookupResult.loading ) {
            if ( lookupResult.data.manufacturer ) {
                setManufacturer( lookupResult.data.manufacturer );
                console.debug( `loaded data, found manufacturerId of ${ lookupResult.data.manufacturer.id }`, lookupResult.data.manufacturer );
                message.info( `loaded data, found manufacturerId of ${ lookupResult.data.manufacturer.id }` );
            } else {
                console.warn( `No Manufacturers found`, lookupResult );
                message.warning( `No Manufacturers found.` );
            }
        }
    }, [ manufacturerId, lookupResult.data, lookupResult.error ] );


    /**
     * Handle Mutations results
     */
    useEffect( () => {
        let error = insertManufacturerResult.error || updateManufacturerResult.error || insertVendorResult.error || deleteVendorResult.error;
        let manufacturerData = insertManufacturerResult.data || updateManufacturerResult.data;
        let vendorData = insertVendorResult.data || deleteVendorResult.data;
        if ( error ) {
            // completeCallback( false );
            message.error( `${ error.name }: ${ error.message }` );
        } else if ( manufacturerData && manufacturerData.manufacturer ) {
            message.success( `successfully ${ insertManufacturerResult.data ? 'created' : 'updated' } ${ manufacturerData?.manufacturer.__typename } with id ${ manufacturerData.manufacturer.id }` );
            // return () => {
            form.resetFields();
            exitModal();
            // };
        }
    }, [ insertManufacturerResult, updateManufacturerResult, insertManufacturerResult ] );

    /***************************************************************************/

    const exitModal = () => {
        console.log( "cancelling modal, history.goBack, history is currently", { history } );
        props.visibilityHandler( null );
    };

    const onFinish = ( values: {
        [ name: string ]: any;
    } ) => {
        console.log( { class: 'ManufacturerEditModal', method: 'onFinish', values, manufacturer, formFieldValues: form.getFieldsValue() } );
        let formFieldValues = form.getFieldsValue();
        if ( manufacturerId ) {
            // edit
            // if id now, but not before
            if ( formFieldValues.vendor ) {
                insertVendor( {
                    variables: {
                        name: formFieldValues.name,
                        url: formFieldValues.url,
                        // ...( formFieldValues.url ? { url: formFieldValues.url } : { } ),
                        manufacturer_id: manufacturerId
                    }
                } );
            } else if ( !formFieldValues.vendor && manufacturer && manufacturer.vendor && manufacturer.vendor_id ) {
                console.log( `deleting manufacturer, value was ${ manufacturer.vendor }, value is: ${ formFieldValues.vendor }\n`, { manufacturer, values, formFieldValues: form.getFieldsValue() } );
                // remove manufacturer record
                deleteVendor( {
                    variables: {
                        id: manufacturer.vendor_id
                    }
                } );
            }
            updateManufacturer( {
                variables: {
                    id: manufacturerId,
                    ...filterObject( formFieldValues, null, [ 'vendor' ] ),
                    // vendor_id: manufacturer.vendor_id
                }
            } );
        } else {
            // insert new (add)
            // let formFieldValues = form.getFieldsValue() as Exclude<InsertManufacturerWithVendorMutationVariables, 'id'>;
            insertManufacturer( {
                variables: {
                    ...filterObject( formFieldValues, null, [ 'vendor' ] ),
                    ...( formFieldValues.vendor ? {
                        vendor: {
                            data: {
                                name: formFieldValues.name,
                                url: formFieldValues.url
                            }
                        }
                    } : {} )
                },
                refetchQueries: [
                    { query: GetManufacturersDocument }
                ]
            } );
        }
    };


    const onFinishFailed: Callbacks[ 'onFinishFailed' ] = ( errorInfo ) => {
        console.error( { class: 'ManufacturerEditModal', method: 'onFinishFailed', errorInfo } );
    };

    const onFieldsChange: Callbacks[ 'onFieldsChange' ] = ( changedFields, values ) => {
        console.log( { class: 'ManufacturerEditModal', method: 'onFieldsChange', changedFields, values } );
    };

    // let initialValues = manufacturer ? manufacturer : { placed_date: moment() , items: [{}] };

    /** halt waiting for incoming manufacturer data. */
    if ( !manufacturer && manufacturerId ) {
        console.debug( "no manufacturer data; awaiting data" );
        return <PageSpin />;
    }

    let initialValues: Partial<ManufacturerForm> = {};
    if ( manufacturer ) {
        initialValues = {
            // ...deepCopy( manufacturer )
            ...filterObject( deepCopy( manufacturer ), null, [ 'vendor' ] ),
            ...{ vendor: ( manufacturer.vendor ? true : false ) }
        };
    }

    return <Modal
        visible={true}
        title="Manufacturer"
        onOk={e => {
            console.log( { class: 'ManufacturerEditModal', method: 'onOk', e, values: form.getFieldsValue() } );
            form.submit();
        }}
        onCancel={event => {
            console.log( "Modal onCancel", event );
            exitModal();
        }}
    >
        <Form
            name="ManufacturerForm"
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
                <Form.Item name="name" label="Name" rules={[ { required: true } ]}>
                    <Input />
                </Form.Item>

                <UrlSelect name="url" label="URL" 
                    validationMessage='Please enter a valid website for this Manufacturer.' 
                    rules={[ { required: true } ]}
                />
                
                <Form.Item
                    name={'vendor'}
                    label="Vendor?"
                    valuePropName='checked'
                // normalize={( value: Boolean, prevValue: Boolean, allValues: Store ) => {
                //     console.log( 'manufacturer manufacturer form\n', { value, prevValue, allValues } );
                //     return {data: {id: value}};
                // }}
                >
                    <Switch />
                </Form.Item>
            </div>

        </Form>
    </Modal>;
};



