import { FormMutationHandler } from "../Item";
import { useUpdateItemHardwareFastenerScrewMachineMutation, EnumItemHandednessEnum, EnumItemHardwareUseMaterialEnum, EnumItemHardwareFastenerScrewMachinePointEnum, GetItemDocument } from "../../types/graphql";
import { useEffect } from "react";
import { message } from "antd";
import { ItemHardwareFastenerScrewMachine } from "..";
import { applyDefaults } from "~item/Common/FormLib";


export const ItemHardwareFastenerScrewMachineEditMutationHandler: React.FC<FormMutationHandler<ItemHardwareFastenerScrewMachine>> = ( props ) => {
    const { form, submitted, completeCallback, originalObject } = props;
    const [ updateItemHardwareFastenerScrewMachineMutation, { data, loading, error } ] = useUpdateItemHardwareFastenerScrewMachineMutation();

    // URGENT: edit must REMOVE defaults if they are explicitly set.
    
    useEffect( () => {
        if ( submitted === true ) {
            console.log( { c: "ItemHardwareFastenerScrewMachineEditMutationHandler", f: 'useEffect', cond: 'submitted === true' }, form.getFieldsValue() );
            updateItemHardwareFastenerScrewMachineMutation( {
                variables: {...applyDefaults<ItemHardwareFastenerScrewMachine>( form.getFieldsValue( true, ( meta ) => {
                    return ! meta.name.includes( 'screw_size' );
                } ) as ItemHardwareFastenerScrewMachine,
                // TODO: put defaults in the class ( as a static property )
                {
                    thread_direction: EnumItemHandednessEnum.right,
                    use_material: EnumItemHardwareUseMaterialEnum.machine,
                    point_type: EnumItemHardwareFastenerScrewMachinePointEnum.flat
                } ),
                    id: originalObject?.id
                },
                refetchQueries: [
                    { 
                        query: GetItemDocument, 
                        variables: {
                            id: originalObject.id
                        }
                    }
                ]
            } );
        }
    }, [submitted] );

    useEffect( () => {
        if ( error ){
            completeCallback( false );
            message.error( `${error.name}: ${error.message}` );
        } else if ( data ) {
            message.success( `successfully edited ${ data.update_item_hardware_fastener_screw_machine_by_pk.__typename } with id ${ data.update_item_hardware_fastener_screw_machine_by_pk.id }` );
            completeCallback( true );
            return () => {
                form.resetFields();
            };
        }
    }, [data, loading, error] );

    return null;
};