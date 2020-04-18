import React from 'react';
import { Form, Input } from 'antd';
import { ItemEditFormProps } from '../Item';
import { FormProps } from 'antd/lib/form';


interface ItemHardwareFastenerBoltEditFormProps extends ItemEditFormProps {

}

export const ItemHardwareFastenerBoltEditForm: React.FC<ItemHardwareFastenerBoltEditFormProps> = ( props ) => {

    const { form } = props;
    return (
        <React.Fragment>
            <Form.Item label="Field A">
                <Input title="name" placeholder="input placeholder" />
            </Form.Item>
        </React.Fragment>
    );
}