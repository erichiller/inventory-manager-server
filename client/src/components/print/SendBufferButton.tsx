import { Spin, Button, message } from "antd";
import React, { useEffect } from "react";
import { PixelMap } from "../../lib/canvasToBuffer";
import { ButtonProps } from "antd/lib/button/button";
import { PageSpin } from "../shared/PageSpin";
import { PrinterOutlined } from "@ant-design/icons";
import { useSendBufferMutation } from "../../lib/types/graphql";
import Group from "antd/lib/input/Group";


interface SendBufferButtonProps extends ButtonProps {
    value: string;
    buffer: PixelMap[];
    startSendBuffer: ( shouldSendBuffer: boolean ) => void;
}

const InternalSendBufferButton: React.ForwardRefRenderFunction<HTMLElement, SendBufferButtonProps> = ( { buffer, value, startSendBuffer, ...remainingProps }, ref ) => {
// const SendBufferButton: React.FC<SendBufferButtonProps> = ( { buffer, value, onClick, ...remainingProps } ) => {
    console.log('SendBufferButton remainingProps:', remainingProps);

    const [ sendData, { data, loading, error, called } ] = useSendBufferMutation( {
        onCompleted: () => { message.success( "Print sent successfully" ); startSendBuffer( false ); }
    } );
    useEffect( () => {
        if ( buffer !== null ) {
            console.log( "sending buffer", buffer );
            sendData( {
                variables: {
                    buffer: buffer
                }
            } );
        }
    }, [buffer]);
    console.log( "init", { loading, data, error, called } );
    console.log( "buffer", buffer );

    return <Button {...remainingProps}
            ref={ref}
            icon={<PrinterOutlined />}
            onClick={() => {
                startSendBuffer( true );
            }}
            id={value} >
            {value}
            <PageSpin spinning={buffer != null} />
        </Button>;
};


interface AntDCompoundedComponent
    extends React.ForwardRefExoticComponent<SendBufferButtonProps & React.RefAttributes<HTMLElement>> {
    Group: typeof Group;
    __ANT_BUTTON: boolean;
}


const SendBufferButton = React.forwardRef<HTMLElement, SendBufferButtonProps>( InternalSendBufferButton ) as AntDCompoundedComponent;

SendBufferButton.displayName = 'Button';

SendBufferButton.defaultProps = {
    loading: false,
    ghost: false,
    block: false,
    htmlType: 'button' as ButtonProps[ 'htmlType' ],
};

SendBufferButton.__ANT_BUTTON = true;

export { SendBufferButton };