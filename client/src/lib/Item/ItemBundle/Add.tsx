import { FormMutationHandler } from "../Item";
import { useInsertItemBundleMutation, InsertItemBundleMutationVariables } from "./ItemBundle.ops";
import { useEffect } from "react";
import { message } from "antd";
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