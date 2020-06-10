import { Menu, Popconfirm, message } from "antd";
import React, { CSSProperties, useContext } from "react";
import { PrintContext } from "./PrintContextHandler";
import { useSendBufferMutation } from "../../lib/types/graphql";
import { filterObject } from "../../lib/UtilityFunctions";
import { PrinterOutlined } from "@ant-design/icons";
import { render } from "bwip-js";



export interface PrintListButtonProps {
    className?: string;
    style?: CSSProperties;
    key: string;
}

// export const PrintListButton: React.FC<PrintListButtonProps> = ( props: PrintListButtonProps ) => {
//     return (


export const PrintListButton: React.FC<PrintListButtonProps> = ( props ) => {
    const context = useContext( PrintContext );
    const [ mutate, {data, loading, error } ] = useSendBufferMutation( {
            variables: {
                buffer: context.printLabelsToBuffer()
            }
        } );

    const sendPrintList = () => {
        mutate().then( result => {
            message.success( `Successfully Sent to Printer` );
        } ).catch( error => {
            console.log( "MUTATE ERROR", error );
            message.error( `Failure during save: ${ error }` );
            // } ).finally( () => {
            //     props.visibleHandler( DISPLAY.HIDDEN );
        } );
    };

    console.log( props );
    if ( !context.getPrintLabels() ) {
        return (
            <Menu.Item>
                <span>
                    <PrinterOutlined />
                            Print
                        </span>
            </Menu.Item>
        );
    }
    console.log( "PrintListButton", context.getPrintLabels() );
    return (
        <Menu.SubMenu
            title={
                <Popconfirm
                    title="Are you sure you want to print queue?"
                    onConfirm={() => sendPrintList()}
                    // onCancel={() => message.info( "onCancel()" )}
                    overlayStyle={{ zIndex: 1999 }}
                    okText="Yes"
                    cancelText="No"
                >
                    <span>
                        <PrinterOutlined />
                                Print
                        </span>
                </Popconfirm>
            }
            // { ...(props.className ? {
            //     className: props.className
            // } : {})}
            // key={props.key ?? "PrintListButton"}
            // style={props.style ?? {}}
            // {...filterObject( props, null, [ 'mutate' ] )}
            {...props}
        >
            {
                context.getPrintLabels().map( label => {
                    return (
                        <Menu.Item key={label.id}>
                            {label.thumbnail}
                            {label.id}
                        </Menu.Item>
                    );
                } )
            }

        </Menu.SubMenu>
    );
};
