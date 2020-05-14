import { Spin, Button, message } from "antd";
import React from "react";
import { PixelMap } from "../../lib/canvasToBuffer";
import { BaseButtonProps } from "antd/lib/button/button";
import { PageSpin } from "../shared/PageSpin";
import { PrinterOutlined } from "@ant-design/icons";
import { useSendBufferMutation } from "../../lib/types/graphql";



interface SendBufferButtonProps extends BaseButtonProps {
    value: string;
    buffer: PixelMap[];
    onClick: ( boolean ) => void;
}


export const SendBufferButton: React.FC<SendBufferButtonProps> = ( { buffer, value, onClick } ) => {


    const [ sendData, { data, loading, error, called } ] = useSendBufferMutation( {
        onCompleted: () => { message.success( "Print sent successfully" ); onClick( false ); }
    } );
    console.log( "init", { loading, data, error, called } );
    console.log( "buffer", this.props.buffer );


    return < Button {...this.props}
        icon={<PrinterOutlined />}
        onClick={() => {
            onClick( true );
            sendData( {
                variables: {
                    buffer: buffer
                }
            } );
        }}
        id={value} >
        {value}
        <PageSpin spinning={this.props.buffer != null} />
    </Button>;
};