import { InputProps } from "antd/lib/input";
import React, { useState, ChangeEvent } from "react";
import { Input, Radio, Switch, InputNumber } from "antd";


interface QtyInputProps extends InputProps { }

export const QtyInput: React.FC<QtyInputProps> = ( props ) => {
    console.log( { class: 'QtyInput', props } );
    const { onChange, ...remainingProps } = props;
    const [ value, setValue ] = useState<null | number | string | readonly string[]>( props.value );
    const [ displayNumberInput, setDisplayNumberInput ] = useState<boolean>( props.value === null || props.value === undefined ? false : true );
    const triggerChange = ( ev: ChangeEvent<HTMLInputElement> ) => {
        setValue( ev.target.value );
        if ( onChange ) {
            onChange( ev );
        }
    };
    return (
        // TODO: add ability to input fractions
        <React.Fragment>
            <Switch onChange={( val ) => { 
                setDisplayNumberInput( val );
                if ( !val ){ setValue( null ); }
            }} />
            {/* {displayNumberInput ? */}
                <Input
                style={{ visibility: displayNumberInput ? 'visible' : 'hidden', marginLeft: 10}}
                placeholder="Qty"
                onChange={triggerChange}
                type="number" // number breaks the formatter on InputNumber
                value={value || props.value}
                className="numberInput"
                {...remainingProps}
            />
                {/* : null} */}

        </React.Fragment>
    );
};

