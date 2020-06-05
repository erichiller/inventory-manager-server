import { ItemFormProps, FormMutationHandler } from "../Item";
import { useUpdateItemHardwareFastenerScrewMachineMutation, EnumItemHandednessEnum, EnumItemHardwareUseMaterialEnum, ItemHardwareFastenerScrewMachineInsertInput, EnumItemHardwareFastenerScrewMachinePointEnum } from "../../types/graphql";
import { useEffect } from "react";
import { message } from "antd";
import { Store, StoreValue } from "antd/lib/form/interface";
import { ItemHardwareFastenerScrewMachine } from "..";
import { applyDefaults } from "../../UtilityFunctions";


export const ItemHardwareFastenerScrewMachineEditMutationHandler: React.FC<FormMutationHandler> = ( props ) => {
    const { form, submitted, completeCallback } = props;
    const [ updateItemHardwareFastenerScrewMachineMutation, { data, loading, error } ] = useUpdateItemHardwareFastenerScrewMachineMutation();

    // TODO: edit must REMOVE defaults if they are explicitly set.
    
    useEffect(() => {
        if ( submitted === true ) {
            console.log( { c: "ItemHardwareFastenerScrewMachineEditMutationHandler", f: 'useEffect', cond: 'submitted === true' }, form.getFieldsValue() );
            updateItemHardwareFastenerScrewMachineMutation( {
                variables: applyDefaults<ItemHardwareFastenerScrewMachine>(form.getFieldsValue( true, ( meta ) => {
                    // console.log( { c: "ItemHardwareFastenerScrewMachineEditMutationHandler", f: 'meta'}, meta.name );
                    return ! meta.name.includes('screw_size');
                }),
                // TODO: put defaults in the class
                {
                    thread_direction: EnumItemHandednessEnum.right,
                    use_material: EnumItemHardwareUseMaterialEnum.machine,
                    point_type: EnumItemHardwareFastenerScrewMachinePointEnum.flat
                })
            } );
        }
    }, [submitted]);

    useEffect(() => {
        if (error){
            completeCallback(false);
            message.error(`${error.name}: ${error.message}`);
        } else if ( data ) {
            message.success( `successfully edited ${data.__typename} with id ${data.update_item_hardware_fastener_screw_machine_by_pk.id}` );
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
    //     //     initProps.thread_direction = EnumItemHandednessEnum.right;
    //     // }
    //     form.setFieldsValue( initProps );
    // } );

    return null;
};