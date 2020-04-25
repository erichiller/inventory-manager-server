import React from "react";

import Animate from 'rc-animate';

interface ItemTableMouseOverProps {
    style?: React.CSSProperties;
    // position: [ number, number ];
    visible: boolean;
    forwardRef: React.MutableRefObject<HTMLDivElement>
}


export const ItemTableMouseOver: React.FC<ItemTableMouseOverProps> = ( props ) => {
    // const { position, visible } = props;
    // if ( !visible ) { return null; }
    return (
        <Animate
            transitionName="fade"
        >
            <div
                className="ItemTableMouseOver"
                ref={props.forwardRef}
                style={{
                    ...props.style,
                    position: 'absolute',
                    visibility: props.visible ? 'visible' : 'hidden',
                    zIndex: 5,
                    // left: position[ 0 ]+3,
                    // top: position[ 1 ],
                }}>
                {props.children}
            </div>
        </Animate>
    );
};




