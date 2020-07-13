import React, {  } from 'react';
import Input, { InputProps } from 'antd/lib/input';
import { Form } from 'antd';
import { Intersection } from '~lib/UtilityFunctions';
import { FormItemProps, Rule } from 'antd/lib/form';


interface UrlSelectProps extends Intersection<InputProps, FormItemProps> {
    name: string;
    /** if not present _URL_ is used */
    label: string;
    /** applied to the regex rule evaluation */
    validationMessage?: string;
    /** if true, applied `required: true` rule to the `Form.Item` */
    required?: boolean;
}

export const UrlSelect: React.FC<UrlSelectProps> = ( props ) => {

    return <React.Fragment>
        <Form.Item name={props.name} label={props.label ?? "URL"}
            // https://ant.design/components/form/#Rule
            // TODO: use a custom validator ( or onChange ) to load the url's icon / ico
            rules={[
                {
                    required: props.required ?? false,
                    // ^https?\:\/\/[0-9a-zA-Z][-.\w]*[0-9a-zA-Z]*\.(com|net|pro)\/?
                    pattern: /^https?\:\/\/[0-9a-zA-Z][-.\w]*[0-9a-zA-Z]*\.[a-zA-Z]{2,}\/?/,
                    message: props.validationMessage ?? 'Please enter a valid URL string'
                }
            ]}
        >
            {/* https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/url */}
            <Input
                type="url" // htmlFor="url" ?? 
                pattern="https?://.*"
            />
        </Form.Item>
    </React.Fragment>
}