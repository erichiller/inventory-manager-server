import React, { useState, useEffect } from 'react';
import { Form, Divider, Button, Modal, message, Input, DatePicker, Switch } from 'antd';
/**
 * // TODO: consider removing momentjs for a (SMALLER) alternative
 * antd - remove momentjs
 *  https://ant.design/docs/react/replace-moment
 *  https://github.com/ant-design/antd-dayjs-webpack-plugin/blob/master/README.md
 **/
import { GetVendorQuery, GetVendorQueryVariables, useGetVendorQuery, useInsertVendorMutation, InsertVendorMutationVariables, useGetVendorLazyQuery, useUpdateVendorMutation, useInsertManufacturerMutation, UpdateVendorMutationVariables, useDeleteManufacturerMutation } from '../../lib/types/graphql';

import { QueryResultTypePlus, Union, filterObject } from '../../lib/UtilityFunctions';
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


type VendorFormModalProps = Union<{
    vendor: QueryResultTypePlus<typeof useGetVendorQuery>;
    vendorId?: null;
} | {
    vendor?: null;
    vendorId: number;
} | {
    vendor?: null;
    vendorId?: null;
}, {
    visibilityHandler: (modal: React.ReactElement) => void;
}>;
// extends Union<VendorFormProps, VendorBundle> { }


export const VendorFormModal: React.FC<VendorFormModalProps> = ( props ) => {
    let { vendorId } = props;
    const [ form ] = useForm();
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
    const [ insertVendor, insertVendorResult ] = useInsertVendorMutation();


    /***************************************** Effects *****************************************/

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

    useEffect( () => {
        let error = insertVendorResult.error || updateVendorResult.error || insertManufacturerResult.error || deleteManufacturerResult.error;
        let 
        if ( insertVendorResult.error || updateVendorResult.error || insertManufacturerResult.error || deleteManufacturerResult.error ) {
            // completeCallback( false );
            message.error( `${ insertVendorResult.error.name }: ${ insertVendorResult.error.message }` );
        } else if ( insertVendorResult.data || updateVendorResult.data || insertManufacturerResult.data || deleteManufacturerResult.data ) {
            message.success( `successfully created ${ insertVendorResult.data?.__typename } with id ${ insertVendorResult.data.insert_vendor.id }` );
            return () => {
                form.resetFields();
                exitModal();
            };
        }
    }, [ insertVendorResult, updateVendorResult, insertManufacturerResult, deleteManufacturerResult ] );

    /***************************************************************************/

    const exitModal = () => {
        console.log( "cancelling modal, history.goBack, history is currently", { history } );
        // history.goBack();
        props.visibilityHandler(null);
    };

    const onFinish = ( values: {
        [ name: string ]: any;
    } ) => {
        console.log( { class: 'VendorEditModal', method: 'onFinish', values, vendor } );

        console.log( { c: "insertVendorMutation" }, form.getFieldsValue() );
        if ( vendorId ) {
            let formFieldValues = form.getFieldsValue() as Exclude<UpdateVendorMutationVariables, 'id'> & {
                manufacturer: {data: { id: number; } ; };
            };
            // edit
            // if id now, but not before
            if ( formFieldValues.manufacturer?.data?.id && !vendor.manufacturer?.id ) {
                console.log( `inserting manufacturer, value was ${ vendor.manufacturer?.id }, value is: ${ formFieldValues.manufacturer?.data?.id}\n`, { vendor } )
                insertManufacturer( {
                    variables: {
                        name: formFieldValues.name,
                        url: formFieldValues.url,
                        vendor_id: vendorId
                    }
                })
            } else if ( ! formFieldValues.manufacturer?.data?.id && vendor.manufacturer?.id ) {
                // remove manufacturer record
                deleteManufacturer( {
                    variables: {
                        id: vendor.manufacturer.id
                    }
                });
            }
            let filteredTest = filterObject( formFieldValues, null, [ 'manufacturer' ] );
            console.log({filteredTest, vendor})
            updateVendor( {
                variables: {
                    id: vendorId,
                    ...filterObject( formFieldValues, null, [ 'manufacturer' ] )
                }
            } );
        } else {
            // insert
            insertVendor( {
                variables: ( form.getFieldsValue() as InsertVendorMutationVariables )
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
    if ( !vendor ) {
        console.debug("no vendor data; awaiting data")
        return <PageSpin />;
    }

    let initialValues: Partial<Vendor> |
        Union<
            Exclude<Vendor, 'manufacturer'>,
            { id: number; }
        > = {};
    if ( vendor ) {
        initialValues = vendor;
        if ( initialValues.manufacturer ) {
            initialValues.manufacturer = true;
        }
    }

    return <Modal
        visible={true}
        title="Vendor"
        onOk={e => {
            console.log( { class: 'VendorEditModal', method: 'onOk', e, values: form.getFieldsValue() } );
            form.submit();
        }}
        onCancel={event => {
            console.log("Modal onCancel", event);
            exitModal();
        }}
    >
        <Form
            name="VendorForm"
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
                <Form.Item name="name" label="Name" required>
                    <Input />
                </Form.Item>
                <Form.Item name="account_id" label="Account #">
                    <Input />
                </Form.Item>
                <Form.Item
                    name={'manufacturer'}
                    label="Manufacturer?"
                    valuePropName='checked'
                    required
                    // normalize={( value: Boolean, prevValue: Boolean, allValues: Store ) => {
                    //     console.log( 'vendor manufacturer form\n', { value, prevValue, allValues } );
                    //     return {data: {id: value}};
                    // }}
                >
                    <Switch />
                </Form.Item>

                <Form.Item name="url" label="URL">
                    {/* https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/url */}
                    <Input
                        type="url" // htmlFor="url" ?? 
                        pattern="https?://.*"
                    />
                </Form.Item>
            </div>

        </Form>
    </Modal>;
};



