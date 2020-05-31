import { ItemFormProps, FormMutationHandler } from "../Item";
import { useInsertItemHardwareFastenerBoltMutation, EnumHandednessEnum, EnumHardwareFastenerBoltPointEnum, EnumHardwareUseMaterialEnum } from "../../types/graphql";
import { useEffect } from "react";
import { message } from "antd";
import { Store } from "antd/lib/form/interface";
import { applyDefaults } from "../../UtilityFunctions";
import { ItemHardwareFastenerBolt } from "..";


export const ItemHardwareFastenerBoltAddMutationHandler: React.FC<FormMutationHandler> = ( props ) => {
    const { form, submitted, completeCallback } = props;
    const [ insertItemHardwareFastenerBoltMutation, { data, loading, error } ] = useInsertItemHardwareFastenerBoltMutation();

    useEffect( () => {
        if ( submitted === true ) {
            console.log( { c: "ItemHardwareFastenerBoltEditMutationHandler", f: 'useEffect', cond: 'submitted === true' }, form.getFieldsValue() );
            insertItemHardwareFastenerBoltMutation( {
                variables: applyDefaults<ItemHardwareFastenerBolt>( form.getFieldsValue( true, ( meta ) => {
                    // console.log( { c: "ItemHardwareFastenerBoltEditMutationHandler", f: 'meta'}, meta.name );
                    return !meta.name.includes( 'screw_size' );
                } ),
                // TODO: put defaults in the class
                    {
                        thread_direction: EnumHandednessEnum.right,
                        use_material: EnumHardwareUseMaterialEnum.machine,
                        point_type: EnumHardwareFastenerBoltPointEnum.flat
                    } )
            } );
        }
    }, [ submitted ] );

    useEffect(() => {
        if (error){
            completeCallback(false);
            message.error(`${error.name}: ${error.message}`);
        } else if ( data ) {
            message.success( `successfully created ${data.__typename} with id ${data.insert_item_hardware_fastener_bolt_one.id}` );
            return () => {
                form.resetFields();
            };
        }
    }, [data, loading, error]);

    return null;
};