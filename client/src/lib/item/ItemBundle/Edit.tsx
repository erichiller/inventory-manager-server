import React, { useState, ReactText, ChangeEvent, useRef, useEffect } from 'react';
import { Form, Input, Divider, Tooltip, InputNumber, Switch, Row, Col, Button } from 'antd';
// import { OptionsType } from 'rc-select/lib/Option';
import { ItemEditFormProps } from '../Item';
import { EnumHardwareFastenerHeadEnum, EnumHardwareFastenerDriveEnum, EnumHardwareFinishEnum, EnumHardwareFastenerMaterialEnum, EnumHardwareFastenerThreadDirectionEnum, EnumHardwareFastenerThreadTypeEnum, EnumHardwareFastenerThreadFitEnum, EnumHardwareFastenerBoltPointEnum, EnumHardwareFastenerHardnessEnum, EnumHardwareFastenerStrengthClassEnum, EnumUnitEnum, EnumHardwareFastenerUseMaterialEnum } from '../../types/graphql';
import TextArea from 'antd/lib/input/TextArea';

import { toMinimumFixed, Union } from '../../UtilityFunctions';
import { FormInstance } from 'antd/lib/form';
import { ItemBundle } from './Index';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { ItemInput } from './ItemSelect';


interface ItemBundleEditFormProps extends Union<ItemEditFormProps, ItemBundle> {

}


export const ItemBundleEditForm: React.FC<ItemBundleEditFormProps> = ( props ) => {
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
            {/* <div style={{flexBasis: '100%'}} /> */}
            <div className="col">
                <Divider key="items" orientation="left">Items</Divider>
                <Form.Item name="name" label="Name">
                    <Input placeholder="Item name" />
                </Form.Item>


                <Form.List name="items">
                    {( fields, { add, remove } ) => {
                        /**
                         * `fields` internal fill with `name`, `key`, `fieldKey` props.
                         * You can extends this into sub field to support multiple dynamic fields.
                         */
                        return (
                            <React.Fragment>
                                {fields.map( ( field, index ) => (
                                        <Form.Item
                                            // name={[ field.name, "lastName" ]}
                                            name="name" label="Name"
                                            key={field.key} rules={[
                                                {
                                                    required: true,
                                                    whitespace: true,
                                                    message: "Please input passenger's name or delete this field.",
                                                },
                                            ]}
                                        // noStyle
                                        >
                                            <ItemInput placeholder="last name" suffix={
                                                <MinusCircleOutlined
                                                    className="dynamic-delete-button"
                                                    onClick={() => {
                                                        remove( field.name );
                                                    }}
                                                />
                                            } />
                                        </Form.Item>
                                ) )}
                                <Form.Item
                                    noStyle>
                                    <Button
                                        type="dashed"
                                        onClick={() => {
                                            add();
                                        }}
                                        style={{ width: "100%" }}
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



