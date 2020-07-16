import { ItemFormProps, FormMutationHandler } from "../Item";
import { useInsertItemBundleMutation, EnumItemHandednessEnum, EnumItemBundlePointEnum, EnumItemHardwareUseMaterialEnum } from "../../types/graphql";
import { useEffect } from "react";
import { message } from "antd";
import { Store } from "antd/lib/form/interface";
import { applyDefaults } from "~item/Common/FormLib";
import { ItemBundle } from "..";


export const ItemBundleAddMutationHandler: React.FC<FormMutationHandler> = ( props ) => {
    const { form, submitted, completeCallback } = props;
    const [ insertItemBundleMutation, { data, loading, error } ] = useInsertItemBundleMutation();

    useEffect( () => {
        if ( submitted === true ) {
            console.log( { c: "ItemBundleEditMutationHandler", f: 'useEffect', cond: 'submitted === true' }, form.getFieldsValue() );
            insertItemBundleMutation( {
                variables: applyDefaults<ItemBundle>( form.getFieldsValue( true, ( meta ) => {
                    // console.log( { c: "ItemBundleEditMutationHandler", f: 'meta'}, meta.name );
                    return !meta.name.includes( 'screw_size' );
                } ),
                // TODO: put defaults in the class
                    {
                        thread_direction: EnumItemHandednessEnum.right,
                        use_material: EnumItemHardwareUseMaterialEnum.machine,
                        point_type: EnumItemBundlePointEnum.flat
                    } )
            } );
        }
    }, [ submitted ] );

    useEffect( () => {
        if ( error ){
            completeCallback( false );
            message.error( `${error.name}: ${error.message}` );
        } else if ( data ) {
            message.success( `successfully created ${data.__typename} with id ${data.insert_item_hardware_fastener_screw_machine_one.id}` );
            return () => {
                form.resetFields();
            };
        }
    }, [data, loading, error] );

    return null;
};