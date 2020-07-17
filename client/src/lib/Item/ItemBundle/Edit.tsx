import { ItemFormProps, FormMutationHandler } from "../Item";
import { useUpdateItemBundleMutation, ItemBundleInsertInput, UpdateItemBundleMemberMutationVariables, UpdateItemBundleMutationVariables } from "../../types/graphql";
import { useEffect } from "react";
import { message } from "antd";
import { Store, StoreValue } from "antd/lib/form/interface";
import { ItemBundle } from "..";
import { applyDefaults } from "~item/Common/FormLib";
import { encapsulateChildObjectsIntoDataProp } from "~lib/FormHelpers";
import { deepCopy } from "~lib/UtilityFunctions";


export const ItemBundleEditMutationHandler: React.FC<FormMutationHandler> = ( props ) => {
    const { form, submitted, completeCallback } = props;
    const [ updateItemBundleMutation, { data, loading, error } ] = useUpdateItemBundleMutation();

    // TODO: edit must REMOVE defaults if they are explicitly set.
    
    useEffect( () => {
        if ( submitted === true ) {
            console.log( { c: "ItemBundleEditMutationHandler", f: 'useEffect', cond: 'submitted === true' }, form.getFieldsValue() );
            updateItemBundleMutation( {
                variables: encapsulateChildObjectsIntoDataProp (
                    deepCopy( form.getFieldsValue() )
                ) as UpdateItemBundleMutationVariables
            } );
        }
    }, [submitted] );

    useEffect( () => {
        if ( error ){
            completeCallback( false );
            message.error( `${error.name}: ${error.message}` );
        } else if ( data ) {
            message.success( `successfully edited ${data.__typename} with id ${data.item_bundle.id}` );
            return () => {
                form.resetFields();
                completeCallback( true );
            };
        }
    }, [data, loading, error] );


    // useEffect( () => {
    //     let initProps = {
    //         screw_size: form.getFieldsValue()
    //     };
    //     // if ( !props.thread_direction ) {
    //     //     initProps.thread_direction = EnumItemHandednessEnum.right;
    //     // }
    //     form.setFieldsValue( initProps );
    // } );

    return null;
};