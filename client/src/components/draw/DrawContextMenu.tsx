import React from "react";
import { Menu, message } from 'antd';

// import { CSSTransition } from 'react-transition-group';
import Animate from 'rc-animate';

import './DrawContextMenu.scss';
import { DrawContext } from "./LabelDraw";



declare const Placements: ["topLeft", "topCenter", "topRight", "bottomLeft", "bottomCenter", "bottomRight"];
declare type Placement = (typeof Placements)[number];
declare type OverlayFunc = () => React.ReactNode;
declare type Align = {
    points?: [string, string];
    offset?: [number, number];
    targetOffset?: [number, number];
    overflow?: {
        adjustX?: boolean;
        adjustY?: boolean;
    };
    useCssRight?: boolean;
    useCssBottom?: boolean;
    useCssTransform?: boolean;
};

interface DrawContextMenuProps {
    // trigger?: ('click' | 'hover' | 'contextMenu')[];
    // // overlay: React.ReactNode | OverlayFunc;
    // onVisibleChange?: (visible: boolean) => void;
    // visible?: boolean;
    // disabled?: boolean;
    // align?: Align;
    // getPopupContainer?: (triggerNode: HTMLElement) => HTMLElement;
    // prefixCls?: string;
    // className?: string;
    // transitionName?: string;
    // placement?: Placement;
    // overlayClassName?: string;
    // // replace overlayStyle
    // style?: React.CSSProperties;
    // forceRender?: boolean;
    // mouseEnterDelay?: number;
    // mouseLeaveDelay?: number;
    // openClassName?: string;
    // position: [number, number];
}


export class DrawContextMenu extends React.Component<DrawContextMenuProps> {

    onClick = ({ key }) => {
        // message.info(`Click detected on item ${key}`);
    };



    // props: MapContextMenuProps = {
    //     overlay: ( this.menu as Menu )
    //   }
    // state = {
    //     collapsed: true,
    // };

    //   toggleCollapsed = () => {
    //     this.setState({
    //       collapsed: !this.state.collapsed,
    //     });
    //   };




    render() {
        const {
            // style,
            // visible,
            // position,
            ...passThroughProps
        } = this.props;
        console.log("DrawContextMenu render()", this.props)
        return (
            <DrawContext.Consumer>
                {
                    ( { displayContextMenuPosition, deleteLabelConstituent, contextMenuLabelConstituent, displayContextMenu}) => {
                        // { this.state.selectedFeature = selectedFeature }
                        // { this.state.visible = selectedFeature ? true : false }
                        if (!(displayContextMenuPosition instanceof Array)){
                            console.log("invalid value for displayContextMenuPosition: ", displayContextMenuPosition);
                            return null;
                        }
                        console.log(`drawing context menu to position {x: ${displayContextMenuPosition[0]}, y: ${displayContextMenuPosition[1]} }`)
                        return (
                            <Animate
                                transitionName="fade"
                            >
                                <Menu onClick={this.onClick}
                                    className="draw-context-menu"
                                    style={{
                                        position: 'fixed',
                                        left: displayContextMenuPosition[0],
                                        top: displayContextMenuPosition[1],
                                        visibility: 'visible',
                                        zIndex: 5,
                                    }}
                                >
                                    <Menu.Item key="delete" onClick={() => {
                                        message.info(`Click detected on DELETE in context menu`);
                                        console.log( "DELETING LABEL CONSTITUENT", contextMenuLabelConstituent);
                                        deleteLabelConstituent( contextMenuLabelConstituent );
                                        displayContextMenu(false);
                                    }}>Delete</Menu.Item>
                                </Menu>
                            </Animate>
                        )
                    }
                }
            </DrawContext.Consumer >
        )
    }
}




