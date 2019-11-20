import { message, Spin, Button } from "antd";
import React from "react";
import { SendBufferComponent } from "../../types/graphql";
import { PixelMap } from "../draw/LabelDraw";



interface SendBufferButtonProps {
    value: string;
    buffer: PixelMap;
    onClick: (boolean) => void;
}


export default class SendBufferButton extends React.Component<SendBufferButtonProps> {

    render () {
        const { buffer, value , onClick } = this.props;

        return (
            <SendBufferComponent onCompleted={() => onClick(false)} >
                {( sendData, { loading, called, data, error } ) => {
                    console.log( "init", { loading, data, error, called} );
                    console.log( "buffer", this.props.buffer);
                    if ( called != true && this.props.buffer != null) {
                        console.log( "PointEditModal Component sendData()" );
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
                    return <Spin spinning={this.props.buffer != null}>< Button icon="printer" onClick={() => onClick( true )} id={value} >{value}</Button></Spin>;
                }}
            </SendBufferComponent >

        );
    }
}