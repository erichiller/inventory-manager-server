import { ItemFormProps, FormMutationHandler } from "../Item";
import { useInsertItemHardwareFastenerBoltMutation, EnumHandednessEnum } from "../../types/graphql";
import { useEffect } from "react";
import { message } from "antd";
import { Store } from "antd/lib/form/interface";


export const ItemHardwareFastenerBoltAddMutationHandler: React.FC<FormMutationHandler> = ( props ) => {
    const { form, submitted, completeCallback } = props;
    const [ insertItemHardwareFastenerBoltMutation, { data, loading, error } ] = useInsertItemHardwareFastenerBoltMutation();

    // TODO: edit must REMOVE defaults if they are explicitly set.
    const applyDefaults: ( fieldValues: Store ) => Store = ( v: Store ) => {
        if ( !v.thread_direction ){
            v.thread_direction = EnumHandednessEnum.right;
        }
        return v;
    };

    useEffect(() => {
        if ( submitted === true ) {
            console.log( { c: "ItemHardwareFastenerBoltAddMutationHandler", f: 'useEffect', cond: 'submitted === true' }, form.getFieldsValue() );
            insertItemHardwareFastenerBoltMutation( {
                // filter
                variables: applyDefaults(form.getFieldsValue( true, ( meta ) => {
                    // console.log( { c: "ItemHardwareFastenerBoltAddMutationHandler", f: 'meta'}, meta.name );
                    return ! meta.name.includes('screw_size');
                }))
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
        }
    }, [data, loading, error]);

    return null;
};