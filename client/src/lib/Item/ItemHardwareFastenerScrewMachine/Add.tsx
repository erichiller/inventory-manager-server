import { ItemFormProps, FormMutationHandler } from "../Item";
import { useInsertItemHardwareFastenerScrewMachineMutation, EnumItemHandednessEnum, EnumItemHardwareFastenerScrewMachinePointEnum, EnumItemHardwareUseMaterialEnum, GetItemsDocument } from "../../types/graphql";
import { useEffect } from "react";
import { message } from "antd";
import { Store } from "antd/lib/form/interface";
import { applyDefaults } from "~item/Common/FormLib";
import { ItemHardwareFastenerScrewMachine } from "..";

interface LocalLogT {
    ( message: string, data?: undefined | object ): void;
}
// TODO: make a global version, have it return a pre-prefixed (with `cls`) function ; have it remove duplicates
const log: LocalLogT = ( msg, data ) => console.log( { cls: 'ItemHardwareFastenerScrewMachineAddMutationHandler', msg }, data ?? null );


export const ItemHardwareFastenerScrewMachineAddMutationHandler: React.FC<FormMutationHandler> = ( props ) => {
    const { form, submitted, completeCallback } = props;
    const [ insertItemHardwareFastenerScrewMachineMutation, { data, loading, error } ] = useInsertItemHardwareFastenerScrewMachineMutation();

    useEffect( () => {
        if ( submitted === true ) {
            console.log( { c: "ItemHardwareFastenerScrewMachineEditMutationHandler", f: 'useEffect', cond: 'submitted === true' }, form.getFieldsValue() );
            insertItemHardwareFastenerScrewMachineMutation( {
                variables: applyDefaults<ItemHardwareFastenerScrewMachine>( form.getFieldsValue( true, ( meta ) => {
                    // console.log( { c: "ItemHardwareFastenerScrewMachineEditMutationHandler", f: 'meta'}, meta.name );
                    return !meta.name.includes( 'screw_size' );
                } ) as ItemHardwareFastenerScrewMachine,
                    // TODO: put defaults in the class
                    {
                        thread_direction: EnumItemHandednessEnum.right,
                        use_material: EnumItemHardwareUseMaterialEnum.machine,
                        point_type: EnumItemHardwareFastenerScrewMachinePointEnum.flat
                    },
                    {
                        thread_diameter_label: props.form.getFieldValue("")
                    }
                ),
                    // TODO: make this more exact, rather than refetch EVERY Item.
                refetchQueries: [
                    { query: GetItemsDocument }
                ]
            } );
        }
    }, [ submitted ] );

    useEffect( () => {
        if ( error ) {
            completeCallback( false );
            message.error( `${ error.name }: ${ error.message }` );
        } else if ( data ) {
            log( 'success useEffect' );
            message.success( `Successfully created ${ data.__typename } with id ${ data.insert_item_hardware_fastener_screw_machine_one.id }` );
            completeCallback( true );
            return () => {
                log( 'final useEffect returned' );
                form.resetFields();
            };
        }
    }, [ data, loading, error ] );

    return null;
};