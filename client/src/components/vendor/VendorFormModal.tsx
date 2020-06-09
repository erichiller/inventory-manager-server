import React, { useState, useEffect } from 'react';
import { Form, Divider, Button, Modal, message, Input, DatePicker, Switch } from 'antd';
/**
 * // TODO: consider removing momentjs for a (SMALLER) alternative
 * antd - remove momentjs
 *  https://ant.design/docs/react/replace-moment
 *  https://github.com/ant-design/antd-dayjs-webpack-plugin/blob/master/README.md
 **/ 
import { GetVendorQuery, GetVendorQueryVariables, useGetVendorQuery, useInsertVendorMutation, InsertVendorMutationVariables } from '../../lib/types/graphql';

import { QueryResultTypePlus } from '../../lib/UtilityFunctions';
import { PlusOutlined, MinusCircleOutlined } from '@ant-design/icons';
import { useHistory } from 'react-router-dom';
import { useForm } from 'antd/lib/form/util';
import { QueryResult } from 'react-apollo';
import { ItemSelect } from '../item/ItemSelect';
import { VendorSelect } from './VendorSelect';
import moment from 'moment';
import { Store } from 'antd/lib/form/interface';


type VendorFormModalProps = {
    vendor: QueryResultTypePlus<typeof useGetVendorQuery>;
    vendorId?: null;
} | {
    vendor?: null;
    vendorId: number;
} | {
    vendor?: null;
    vendorId?: null;
}
// extends Union<VendorFormProps, VendorBundle> { }


export const VendorFormModal: React.FC<VendorFormModalProps> = ( props ) => {
    let { vendorId } = props;
    const [ form ] = useForm();
    const history = useHistory();
    // let loading = true;

    const [ vendor, setVendor ] = useState<QueryResultTypePlus<typeof useGetVendorQuery>>( props.vendor );
    
    const [ insertVendorMutation, { data, loading, error } ] = useInsertVendorMutation();


    let result: QueryResult<GetVendorQuery, GetVendorQueryVariables>;

    if ( !vendor && vendorId ) {
        result = useGetVendorQuery( {
            variables: {
                id: vendorId
            }
        } );
        // loading = result.loading;

        useEffect( () => {
            if ( result.error ) {
                message.error( result.error );
            }
            if ( result.data ) {
                setVendor( result.data.vendor );
                if ( result.data.vendor ) {
                    message.info( `loaded data, found vendorId of ${ result.data.vendor.id }` );
                } else {
                    message.warning( `No Vendors found.` );
                }
            }
        }, [ result.data, result.error ] );
    } else {
        console.debug( `Vendor received in props not running GraphQL`, { vendor: props.vendor } );
    }

    // useEffect( () => {
    //     screwSizeInputRef.current.focus();
    // }, [ screwSizeInputRef ] );

    // useEffect( () => {
    //     let initProps: Partial<VendorBundle> = {};
    //     if ( !props.thread_direction ) {
    //         initProps.thread_direction = EnumItemHandednessEnum.right;
    //     }
    //     form.setFieldsValue( initProps );
    // } );
    const exitModal = () => {
        console.log( "cancelling modal, history.goBack, history is currently", { history } );
        history.goBack();
    };
    const onFinish = ( values: {
        [ name: string ]: any;
    } ) => {
        console.log( { class: 'VendorEditModal', method: 'onFinish', values } );

        console.log( { c: "insertVendorMutation" }, form.getFieldsValue() );
        insertVendorMutation( {
            variables: ( form.getFieldsValue() as InsertVendorMutationVariables)
        });
    };

    useEffect( () => {
        if ( error ) {
            // completeCallback( false );
            message.error( `${ error.name }: ${ error.message }` );
        } else if ( data ) {
            message.success( `successfully created ${ data.__typename } with id ${ data.insert_vendor.id }` );
            return () => {
                form.resetFields();
                exitModal();
            };
        }
    }, [ data, loading, error ] );

    const onFinishFailed = ( errorInfo ) => {
        console.error( { class: 'VendorEditModal', method: 'onFinishFailed', errorInfo } );
    };

    const onFieldsChange = ( changedFields, values ) => {
        console.log( { class: 'VendorEditModal', method: 'onFieldsChange', changedFields, values } );
    };

    let initialValues = vendor ? vendor : { placed_date: moment() , items: [{}] };

    return <Modal
        visible={true}
        title="Vendor"
        // width={null}
        // className="VendorFormModal"
        onOk={e => {
            console.log( { class: 'VendorEditModal', method: 'onOk', e, values: form.getFieldsValue() } );
            form.submit();
        }}
        onCancel={event => exitModal()}
    >
        <Form
            name="VendorForm"
            form={form}
            layout="horizontal"
            labelCol={{ span: 6 }}
            wrapperCol={{ span: 16 }}
            // name="Vendor-add-edit-delete"
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
                    <VendorSelect />
                </Form.Item>
                <Form.Item name="account_id" label="Account #" required>
                    <Input />
                </Form.Item>
                <Form.Item
                    name={['manufacturer', 'data']}
                    label="Account #"
                    required
                    normalize={ (value: Boolean, prevValue: Boolean, allValues: Store) => {
                        console.log('vendor manufacturer form\n', {value, prevValue, allValues});
                    }}
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



