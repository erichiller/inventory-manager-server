import { Icon as LegacyIcon } from '@ant-design/compatible';
import { Spin, Button, message } from "antd";
import React from "react";
import { SendBufferComponent } from "../../lib/types/graphql";
import { PixelMap } from "../../lib/canvasToBuffer";
import { BaseButtonProps } from "antd/lib/button/button";
import { PageSpin } from "../shared/PageSpin";



interface SendBufferButtonProps extends BaseButtonProps {
    value: string;
    buffer: PixelMap[];
    onClick: (boolean) => void;
}


export default class SendBufferButton extends React.Component<SendBufferButtonProps> {

    render () {
        const { buffer, value , onClick } = this.props;

        return (
            <SendBufferComponent onCompleted={() => { message.success("Print sent successfully") ; onClick(false) ; }} >
                {( sendData, { loading, called, data, error } ) => {
                    console.group("SendBufferButton - GraphQL operations");
                    console.log( "init", { loading, data, error, called} );
                    console.log( "buffer", this.props.buffer);
                    if ( called != true && this.props.buffer != null) {
                        console.log( "PointEditModal Component sendData(), sending buffer", buffer );
                        sendData(
                            {
                                variables:
                                {
                                    buffer: buffer
                                    // buffer: buffer.map( col => col.map( row => Array.from( row ) ) )
                                }
                            } );
                        console.log( "called != true", { loading, data, error, called } );
                        // this.setState({
                        //     values: undefined
                        // })
                        // console.log({ loading, data, error, called, mutate});

                    }
                    if ( loading ) {
                        console.log( "SendBuffer data loading" );
                    }
                    if ( data ) {
                        console.log( "SendBuffer data received", data );
                    }
                    console.groupEnd();
                    return (
                        < Button {...this.props} 
                                    icon={<LegacyIcon type="printer" />} 
                                    onClick={() => onClick( true )} id={value} >
                                        {value}
                                        <PageSpin spinning={this.props.buffer != null} />
                                </Button>
                    );
                }}
            </SendBufferComponent >
        );
    }
}