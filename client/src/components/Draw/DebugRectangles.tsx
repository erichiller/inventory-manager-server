
import { Stage, Text, Image, Rect } from 'react-konva';

import React from "react";

export const DebugRectangles: React.FC = () => {
    let fontSize = 36;
    let width = 300;
    let height = 320;
    return (
        <React.Fragment>
            <Rect
                key={`rect_0,10`}
                x={0}
                y={10}
                width={10}
                height={10}
                fill='black'
            />
            <Rect
                key={`rect_0,30`}
                x={0}
                y={30}
                width={10}
                height={10}
                fill='black'
            />
            <Rect
                key={`rect_0,50`}
                x={0}
                y={50}
                width={10}
                height={10}
                fill='black'
            />
            <Rect
                key={`rect_0,70`}
                x={0}
                y={70}
                width={10}
                height={10}
                fill='black'
            />
            <Rect
                key={`rect_0,90`}
                x={0}
                y={90}
                width={10}
                height={10}
                fill='black'
            />
            <Rect
                key={`rect_0,110`}
                x={0}
                y={110}
                width={10}
                height={10}
                fill='black'
            />
            <Rect
                key={`rect_0,130`}
                x={0}
                y={130}
                width={10}
                height={5}
                fill='black'
            />
            <Rect
                key={`rect_30,140`}
                x={30}
                y={140}
                width={30}
                height={1}
                fill='black'
            />
            <Rect
                key={`rect_0,141`}
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
            {[ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ].map( i =>
                <Text
                    key={`text-${i}`}
                    x={width - ( fontSize / 1.1 ) * ( i + 1 )}
                    y={fontSize * i}
                    text={i.toString()}
                    fontSize={fontSize}
                    fill='black'
                    fontFamily='monospace'
                />
            )}
            {[ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ].map( i =>
                <Text
                    key={`text+${ i }`}
                    x={( fontSize / 1.1 ) * i}
                    y={fontSize * i}
                    text={String.fromCharCode(65+i)}
                    fontSize={fontSize}
                    fill='black'
                    fontFamily='monospace'
                />
            )}
        </React.Fragment>
    );
};