import { ItemFormProps, FormMutationHandler } from "../Item";
import { useInsertItemHardwareFastenerBoltMutation, EnumHandednessEnum, EnumHardwareUseMaterialEnum } from "../../types/graphql";
import { useEffect } from "react";
import { message } from "antd";
import { Store, StoreValue } from "antd/lib/form/interface";


export const ItemHardwareFastenerBoltEditMutationHandler: React.FC<FormMutationHandler> = ( props ) => {
    const { form, submitted, completeCallback } = props;
    const [ insertItemHardwareFastenerBoltMutation, { data, loading, error } ] = useInsertItemHardwareFastenerBoltMutation(); // TODO

    // TODO: edit must REMOVE defaults if they are explicitly set.
    const applyDefaults: ( fieldValues: Store, defaults: Store ) => Store = ( fieldValues: Store, defaults: Store ) => {
        fieldValues.default_fields = Array.isArray( fieldValues.default_fields ) ? fieldValues.default_fields : [];
        Object.keys(defaults).forEach( key => {
            if ( !fieldValues[key] ){
                fieldValues[key] = defaults[key];
                fieldValues.default_fields.push(key);
            }
        });
        return fieldValues;
    };
    
    useEffect(() => {
        if ( submitted === true ) {
            console.log( { c: "ItemHardwareFastenerBoltEditMutationHandler", f: 'useEffect', cond: 'submitted === true' }, form.getFieldsValue() );
            insertItemHardwareFastenerBoltMutation( {
                variables: applyDefaults(form.getFieldsValue( true, ( meta ) => {
                    // console.log( { c: "ItemHardwareFastenerBoltEditMutationHandler", f: 'meta'}, meta.name );
                    return ! meta.name.includes('screw_size');
                }),
                { // TODO: could make this a property on the item class
                    thread_direction: EnumHandednessEnum.right,
                    use_material: EnumHardwareUseMaterialEnum.machine
                })
            } );
        }
    }, [submitted]);

    useEffect(() => {
        if (error){
            completeCallback(false);
            message.error(`${error.name}: ${error.message}`);
        } else if ( data ) {
            message.success( `successfully edited ${data.__typename} with id ${data.insert_item_hardware_fastener_bolt_one.id}` );
            return () => {
                form.resetFields();
            };
        }
    }, [data, loading, error]);

    return null;
};