import React, { useState, ReactText, ChangeEvent, useRef, useEffect } from 'react';
import { Form, Input, Divider, Tooltip, InputNumber, Switch, Row, Col, Button } from 'antd';
// import { OptionsType } from 'rc-select/lib/Option';
import { ItemEditFormProps } from '../../lib/item/Item';
import { EnumHardwareFastenerHeadEnum, EnumHardwareFastenerDriveEnum, EnumHardwareFinishEnum, EnumHardwareFastenerMaterialEnum, EnumHardwareFastenerThreadDirectionEnum, EnumHardwareFastenerThreadTypeEnum, EnumHardwareFastenerThreadFitEnum, EnumHardwareFastenerBoltPointEnum, EnumHardwareFastenerHardnessEnum, EnumHardwareFastenerStrengthClassEnum, EnumUnitEnum, EnumHardwareFastenerUseMaterialEnum, ItemBundle } from '../../lib/types/graphql';
import TextArea from 'antd/lib/input/TextArea';

import { toMinimumFixed, Union } from '../../lib/UtilityFunctions';
import { FormInstance } from 'antd/lib/form';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { ItemInput } from '../../lib/item/ItemBundle/ItemSelect';


interface OrderEditModalProps extends Union<ItemEditFormProps, ItemBundle> {

}


export const OrderEditModal: React.FC<ItemBundleEditFormProps> = ( props ) => {
    const { form } = props;

    // useEffect( () => {
    //     screwSizeInputRef.current.focus();
    // }, [ screwSizeInputRef ] );

    // useEffect( () => {
    //     let initProps: Partial<ItemBundle> = {};
    //     if ( !props.thread_direction ) {
    //         initProps.thread_direction = EnumHardwareFastenerThreadDirectionEnum.right;
    //     }
    //     form.setFieldsValue( initProps );
    // } );

    return (
        <React.Fragment>
            <div className="col">
                <Divider key="items" orientation="left">Items</Divider>
                <Form.List name="items">
                    {( fields, { add, remove } ) => {
                        return (
                            <React.Fragment>
                                {fields.map( ( field, index ) => (
                                    <Form.Item
                                        {...field}
                                        label="Bundled Item"
                                        getValueFromEvent={( args ) => {
                                            console.log( 'form getValueFromEvent (Bundled Item)', { field, index, args } );
                                            return args;
                                        }}
                                    >
                                        <ItemInput placeholder="Search for Item"
                                            suffix={
                                                <MinusCircleOutlined
                                                    className="dynamic-delete-button"
                                                    onClick={() => {
                                                        remove( field.name );
                                                    }}
                                                />
                                            }
                                        />
                                    </Form.Item>
                                ) )}
                                <Form.Item
                                    label=" "
                                    colon={false}
                                >
                                    <Button
                                        type="dashed"
                                        onClick={() => {
                                            add();
                                        }}
                                        style={{ width: "100%", textAlign: 'center' }}
                                    >
                                        <PlusOutlined /> Add Item
                                    </Button>
                                </Form.Item>
                            </React.Fragment>
                        );
                    }}
                </Form.List>
            </div>

        </React.Fragment>
    );
};



