import { Menu, Icon } from "antd"
import React, { CSSProperties } from "react"
import { PrintContext } from "./PrintContextHandler";



export interface PrintListButtonProps {
    className?: string;
    style?: CSSProperties;
    key: string;
}

// export const PrintListButton: React.FC<PrintListButtonProps> = ( props: PrintListButtonProps ) => {
//     return (


export class PrintListButton extends React.Component<PrintListButtonProps> {
    static contextType = PrintContext;
    declare context: React.ContextType<typeof PrintContext>;

    render() {
        if ( ! this.context.printLabels ){
            return <Menu.Item>
                    <span>
                        <Icon type="printer" />
                        Print
                    </span>
                </Menu.Item>
        }
        console.log("PrintListButton", this.context.printLabels);
        return (
        <Menu.SubMenu
            title={
            <span>
                <Icon type="printer" />
            Print
    
            </span>
            }
            {...this.props}
            >
                {
                this.context.printLabels.map( label => {
                    return (
                    <Menu.Item>
                        {label.thumbnail}
                    </Menu.Item>
                    );
                })
                }
            
        </Menu.SubMenu>
    );
        }

}