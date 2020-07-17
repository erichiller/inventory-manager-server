import { ItemFormProps, FormMutationHandler } from "../Item";
import { useInsertItemBundleMutation, GetOrderDocument, ItemBundleInsertInput, InsertItemBundleMutationVariables } from "../../types/graphql";
import { useEffect } from "react";
import { message } from "antd";
import { applyDefaults } from "~item/Common/FormLib";
import { ItemBundle } from "~item/ItemBundle/ItemBundle";
import { encapsulateChildObjectsIntoDataProp } from "~lib/FormHelpers";
import { deepCopy } from "~lib/UtilityFunctions";


export const ItemBundleAddMutationHandler: React.FC<FormMutationHandler> = ( props ) => {
    const { form, submitted, completeCallback } = props;
    const [ insertItemBundleMutation, { data, loading, error } ] = useInsertItemBundleMutation();

    useEffect( () => {
        if ( submitted === true ) {
            console.log( { c: "ItemBundleEditMutationHandler", f: 'useEffect', cond: 'submitted === true' }, form.getFieldsValue() );
            insertItemBundleMutation( {
                variables: encapsulateChildObjectsIntoDataProp(
                    deepCopy( form.getFieldsValue() )
                ) as InsertItemBundleMutationVariables
            } );
        }
    }, [ submitted ] );

    useEffect( () => {
        if ( error ){
            completeCallback( false );
            message.error( `${error.name}: ${error.message}` );
        } else if ( data ) {
            message.success( `successfully created ${data.__typename} with id ${data.item_bundle.id}` );
            return () => {
                form.resetFields();
            };
        }
    }, [data, loading, error] );

    return null;
};