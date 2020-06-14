import React, { useState, useEffect } from 'react';
import { Form, Divider, Button, Modal, message, Input, DatePicker, Switch } from 'antd';
/**
 * // TODO: consider removing momentjs for a (SMALLER) alternative
 * antd - remove momentjs
 *  https://ant.design/docs/react/replace-moment
 *  https://github.com/ant-design/antd-dayjs-webpack-plugin/blob/master/README.md
 **/
import { GetManufacturerQuery, GetManufacturerQueryVariables, useGetManufacturerQuery, useInsertManufacturerMutation, InsertManufacturerMutationVariables, useGetManufacturerLazyQuery, useUpdateManufacturerMutation, UpdateManufacturerMutationVariables, useDeleteManufacturerMutation, GetManufacturerDocument, GetManufacturersDocument, useDeleteVendorMutation, useInsertVendorMutation } from '../../lib/types/graphql';

import { QueryResultTypePlus, Union, filterObject, deepCopy } from '../../lib/UtilityFunctions';
import { PlusOutlined, MinusCircleOutlined } from '@ant-design/icons';
import { useHistory } from 'react-router-dom';
import { useForm } from 'antd/lib/form/util';
import { QueryResult } from 'react-apollo';
import { ItemSelect } from '../item/ItemSelect';
import { ManufacturerSelect } from './ManufacturerSelect';
import moment from 'moment';
import { Store } from 'antd/lib/form/interface';
import { PageSpin } from '../shared/PageSpin';
import { Manufacturer } from '../../lib/Manufacturer/Manufacturer';


type ManufacturerFormModalProps = Union<{
    manufacturer: QueryResultTypePlus<typeof useGetManufacturerQuery>;
    manufacturerId?: null;
} | {
    manufacturer?: null;
    manufacturerId: number;
} | {
    manufacturer?: null;
    manufacturerId?: null;
}, {
    visibilityHandler: ( modal: React.ReactElement ) => void;
}>;
// extends Union<ManufacturerFormProps, ManufacturerBundle> { }


export const ManufacturerFormModal: React.FC<ManufacturerFormModalProps> = ( props ) => {
    let { manufacturerId } = props;
    const [ form ] = useForm();
    const history = useHistory();


    const [ runGet, lookupResult ] = useGetManufacturerLazyQuery( {
        partialRefetch: true,
        returnPartialData: true,
    } );

    const [ manufacturer, setManufacturer ] = useState<QueryResultTypePlus<typeof useGetManufacturerQuery>>( props.manufacturer ?? lookupResult.data?.manufacturer );


    console.log( "ManufacturerFormModal init", { props, lookupResult, manufacturer } );

    //edit
    const [ updateManufacturer, updateManufacturerResult ] = useUpdateManufacturerMutation();
    const [ deleteManufacturer, deleteManufacturerResult ] = useDeleteManufacturerMutation();
    const [ deleteVendor, deleteVendorResult ] = useDeleteVendorMutation();
    const [ insertVendor, insertVendorResult ] = useInsertVendorMutation();
    // add new
    const [ insertManufacturer, insertManufacturerResult ] = useInsertManufacturerMutation( {
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
        let error = insertManufacturerResult.error || updateManufacturerResult.error || insertManufacturerResult.error || deleteManufacturerResult.error;
        let data = insertManufacturerResult.data || updateManufacturerResult.data; // || insertManufacturerResult.data || deleteManufacturerResult.data;
        if ( error ) {
            // completeCallback( false );
            message.error( `${ error.name }: ${ error.message }` );
        } else if ( data ) {
            message.success( `successfully ${ insertManufacturerResult.data ? 'created' : 'updated' } ${ data?.manufacturer.__typename } with id ${ data.manufacturer.id }` );
            // return () => {
            form.resetFields();
            exitModal();
            // };
        }
    }, [ insertManufacturerResult, updateManufacturerResult, insertManufacturerResult, deleteManufacturerResult ] );

    /***************************************************************************/

    const exitModal = () => {
        console.log( "cancelling modal, history.goBack, history is currently", { history } );
        props.visibilityHandler( null );
    };

    const onFinish = ( values: {
        [ name: string ]: any;
    } ) => {
        console.log( { class: 'ManufacturerEditModal', method: 'onFinish', values, manufacturer, formFieldValues: form.getFieldsValue() } );
        if ( manufacturerId ) {
            let formFieldValues = form.getFieldsValue() as Exclude<UpdateManufacturerMutationVariables, 'id'> & {
                vendor: boolean;
            };
            // edit
            // if id now, but not before
            if ( formFieldValues.vendor ) {
                insertVendor( {
                    variables: {
                        name: formFieldValues.name,
                        url: formFieldValues.url,
                        manufacturer: {data : [ { id: manufacturerId }] }
                    }
                } );
            } else if ( !formFieldValues.vendor && manufacturer.vendor ) {
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
                    ...filterObject( formFieldValues, null, [ 'vendor' ] )
                }
            } );
        } else {
            // insert new (add)
            let formFieldValues = form.getFieldsValue() as Exclude<InsertManufacturerMutationVariables, 'id'>;
            insertManufacturer( {
                variables: {
                    ...filterObject( formFieldValues, null, [ 'vendor_id' ] ),
                    ...( formFieldValues.vendor_id ? {
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


    const onFinishFailed = ( errorInfo ) => {
        console.error( { class: 'ManufacturerEditModal', method: 'onFinishFailed', errorInfo } );
    };

    const onFieldsChange = ( changedFields, values ) => {
        console.log( { class: 'ManufacturerEditModal', method: 'onFieldsChange', changedFields, values } );
    };

    // let initialValues = manufacturer ? manufacturer : { placed_date: moment() , items: [{}] };

    /** halt waiting for incoming manufacturer data. */
    if ( !manufacturer && manufacturerId ) {
        console.debug( "no manufacturer data; awaiting data" );
        return <PageSpin />;
    }

    let initialValues: Partial<Union<
        Omit<Manufacturer, 'manufacturer'>,
        { manufacturer: boolean; }
    >> = {};
    if ( manufacturer ) {
        initialValues = {
            ...deepCopy( manufacturer )
            // ...filterObject( deepCopy( manufacturer ), null, [ 'vendor' ] ),
            // ...{ vendor: ( manufacturer.vendor && manufacturer.manufacturer.length === 1 ? true : false ) }
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
                //     console.log( 'manufacturer manufacturer form\n', { value, prevValue, allValues } );
                //     return {data: {id: value}};
                // }}
                >
                    <Switch />
                </Form.Item>

                <Form.Item name="url" label="URL"
                    // https://ant.design/components/form/#Rule
                    // TODO: use a custom validator ( or onChange ) to load the url's icon / ico
                    rules={[
                        {
                            required: true,
                            pattern: /https?:\/\/.*/,
                            message: 'Please enter a valid website for this Manufacturer.'
                        },
                    ]}
                >
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



