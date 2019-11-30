
import { Stage, Text, Image, Rect } from 'react-konva';

import React from "react";

export const DebugRectangles: React.FC = () => {
    return (
        <React.Fragment>
            <Rect
                x={0}
                y={10}
                width={10}
                height={10}
                fill='black'
            />
            <Rect
                x={0}
                y={30}
                width={10}
                height={10}
                fill='black'
            />
            <Rect
                x={0}
                y={50}
                width={10}
                height={10}
                fill='black'
            />
            <Rect
                x={0}
                y={70}
                width={10}
                height={10}
                fill='black'
            />
            <Rect
                x={0}
                y={90}
                width={10}
                height={10}
                fill='black'
            />
            <Rect
                x={0}
                y={110}
                width={10}
                height={10}
                fill='black'
            />
            <Rect
                x={0}
                y={130}
                width={10}
                height={5}
                fill='black'
            />
            <Rect
                x={30}
                y={140}
                width={30}
                height={1}
                fill='black'
            />
            <Rect
                x={0}
                y={141}
                width={30}
                height={1}
                fill='black'
            />
            {/* <Rect
                x={0}
                y={150}
                width={10}
                height={10}
                fill='black'
            />
            <Rect
                x={0}
                y={167}
                width={30}
                height={1}
                fill='black'
            // /> */}
        </React.Fragment>
    );
};