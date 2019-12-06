import { Menu, Icon, Popconfirm, message } from "antd"
import React, { CSSProperties } from "react"
import { PrintContext } from "./PrintContextHandler";
import { withSendBuffer, SendBufferProps } from "../../types/graphql";
import { filterObject } from "../../lib/helpers";



export interface PrintListButtonProps {
    className?: string;
    style?: CSSProperties;
    key: string;
}

// export const PrintListButton: React.FC<PrintListButtonProps> = ( props: PrintListButtonProps ) => {
//     return (


export const PrintListButton = withSendBuffer<PrintListButtonProps>()(
    class PrintListButton extends React.Component<SendBufferProps<PrintListButtonProps>> {
    static contextType = PrintContext;
    declare context: React.ContextType<typeof PrintContext>;

        sendPrintList = () => {
            this.props.mutate( {
                variables: {
                    buffer: this.context.printLabelsToBuffer()
                }
            } ).then( result => {
                message.success( `Successfully Sent to Printer` );
            } ).catch( error => {
                console.log( "MUTATE ERROR", error );
                message.error( `Failure during save: ${ error }` );
            // } ).finally( () => {
            //     this.props.visibleHandler( DISPLAY.HIDDEN );
            } );
    }

    render() {
        console.log(this.props);
        if ( ! this.context.getPrintLabels() ){
            return <Menu.Item>
                    <span>
                        <Icon type="printer" />
                        Print
                    </span>
                </Menu.Item> ;
        }
        console.log( "PrintListButton", this.context.getPrintLabels());
        return ( 
        <Menu.SubMenu
            title={
                    <Popconfirm
                        title="Are you sure you want to print queue?"
                        onConfirm={ () => this.sendPrintList()}
                        // onCancel={() => message.info( "onCancel()" )}
                        overlayStyle={{zIndex: 1999}}
                        okText="Yes"
                        cancelText="No"
                    >
                        <span>
                            <Icon type="printer" />
                            Print
                        </span>
                    </Popconfirm>
            }
            // { ...(this.props.className ? {
            //     className: this.props.className
            // } : {})}
            // key={this.props.key ?? "PrintListButton"}
            // style={this.props.style ?? {}}
                {...filterObject(this.props, null, ['mutate'])}
            >
                {
                    this.context.getPrintLabels().map( label => {
                    return (
                    <Menu.Item key={label.id}>
                        {label.thumbnail}
                        {label.id}
                    </Menu.Item>
                    );
                })
                }
            
        </Menu.SubMenu>
    );
        }

});