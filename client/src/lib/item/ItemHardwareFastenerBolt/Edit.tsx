import { ItemFormProps, FormMutationHandler } from "../Item";
import { useUpdateItemHardwareFastenerBoltMutation, EnumHandednessEnum, EnumHardwareUseMaterialEnum, ItemHardwareFastenerBoltInsertInput, EnumHardwareFastenerBoltPointEnum } from "../../types/graphql";
import { useEffect } from "react";
import { message } from "antd";
import { Store, StoreValue } from "antd/lib/form/interface";
import { ItemHardwareFastenerBolt } from "..";
import { applyDefaults } from "../../UtilityFunctions";


export const ItemHardwareFastenerBoltEditMutationHandler: React.FC<FormMutationHandler> = ( props ) => {
    const { form, submitted, completeCallback } = props;
    const [ updateItemHardwareFastenerBoltMutation, { data, loading, error } ] = useUpdateItemHardwareFastenerBoltMutation();

    // TODO: edit must REMOVE defaults if they are explicitly set.
    
    useEffect(() => {
        if ( submitted === true ) {
            console.log( { c: "ItemHardwareFastenerBoltEditMutationHandler", f: 'useEffect', cond: 'submitted === true' }, form.getFieldsValue() );
            updateItemHardwareFastenerBoltMutation( {
                variables: applyDefaults<ItemHardwareFastenerBolt>(form.getFieldsValue( true, ( meta ) => {
                    // console.log( { c: "ItemHardwareFastenerBoltEditMutationHandler", f: 'meta'}, meta.name );
                    return ! meta.name.includes('screw_size');
                }),
                // TODO: put defaults in the class
                {
                    thread_direction: EnumHandednessEnum.right,
                    use_material: EnumHardwareUseMaterialEnum.machine,
                    point_type: EnumHardwareFastenerBoltPointEnum.flat
                })
            } );
        }
    }, [submitted]);

    useEffect(() => {
        if (error){
            completeCallback(false);
            message.error(`${error.name}: ${error.message}`);
        } else if ( data ) {
            message.success( `successfully edited ${data.__typename} with id ${data.update_item_hardware_fastener_bolt_by_pk.id}` );
            return () => {
                form.resetFields();
                completeCallback( true );
            };
        }
    }, [data, loading, error]);


    // useEffect( () => {
    //     let initProps = {
    //         screw_size: form.getFieldsValue()
    //     };
    //     // if ( !props.thread_direction ) {
    //     //     initProps.thread_direction = EnumHandednessEnum.right;
    //     // }
    //     form.setFieldsValue( initProps );
    // } );

    return null;
};