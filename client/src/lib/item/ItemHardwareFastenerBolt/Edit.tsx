import { ItemFormProps, FormMutationHandler } from "../Item";
import { useInsertItemHardwareFastenerBoltMutation } from "../../types/graphql";
import { useEffect } from "react";
import { message } from "antd";


export const ItemHardwareFastenerBoltEditMutationHandler: React.FC<FormMutationHandler> = ( props ) => {
    const { form, submitted, completeCallback } = props;
    const [ insertItemHardwareFastenerBoltMutation, { data, loading, error } ] = useInsertItemHardwareFastenerBoltMutation();

    const _logFields = 

    useEffect(() => {
        if ( submitted === true ) {
            console.log( { c: "ItemHardwareFastenerBoltEditMutationHandler", f: 'useEffect', cond: 'submitted === true' }, form.getFieldsValue() );
            insertItemHardwareFastenerBoltMutation( {
                variables: form.getFieldsValue( true, ( meta ) => {
                    // console.log( { c: "ItemHardwareFastenerBoltEditMutationHandler", f: 'meta'}, meta.name );
                    return ! meta.name.includes('screw_size')
                    return true;
                })
            } );
        }
    }, [submitted]);

    useEffect(() => {
        if (error){
            completeCallback(false);
            message.error(`${error.name}: ${error.message}`);
        } else if ( data ) {
            message.success( `successfully created ${data.__typename} with id ${data.insert_item_hardware_fastener_bolt_one.id}` );
            return () => {
                form.resetFields();
            };
        };
    }, [data, loading, error]);

    return null;
}