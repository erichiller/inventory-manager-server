import React from 'react';
import * as AntD from 'antd';
import Spin, { SpinProps } from 'antd/lib/spin';

// ------------------------------------------------------------------------

const PageSpinStyle: React.CSSProperties = {
    textAlign: 'center',
    background: 'rgba (0,0,0,0.05 )',
    borderRadius: '4px',
    marginBottom: '20px',
    padding: '30px 50px',
    margin: '20px 0',
    position: 'absolute'
};

// ------------------------------------------------------------------------

export const PageSpin: React.SFC<SpinProps> = ( props ) => {
    return (
        <div style={PageSpinStyle}>
            <Spin {...props} />
        </div>
    );
};

// ------------------------------------------------------------------------

export const PageSpinGQL: React.SFC<SpinProps> = ( props ) => {
    return (
        <PageSpin {...props} />
    );
};