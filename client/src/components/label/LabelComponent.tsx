
import React, { useState, useContext } from 'react';
// import { Resizable, ResizableBox } from 'react-resizable';
import { Rnd, ResizableDelta, Position as RndPosition } from 'react-rnd';
import { ResizeDirection } from 're-resizable';
import { useQuery } from '@apollo/react-hooks';
import { Stage, Layer } from 'react-konva';
import { Spin, InputNumber, Input } from "antd";

import { GetPrinterStatusQuery, GetPrinterStatusDocument } from "../../lib/types/graphql";
import { DrawContext } from "../draw/LabelDraw";
import e from 'cors';
import { KonvaEventObject } from 'konva/types/Node';
import { TapeColorMap } from '../../lib/types/labelCanvasColors';

interface LabelComponentState {
    selectedShapeName: string;
}

interface LabelComponentProps {
    width: number;
    updateWidth: ( newWidthPixels: number ) => void;
}

export const LabelComponent: React.FunctionComponent<LabelComponentProps> = ( { width, updateWidth, children } ) => {
    const { data } = useQuery<GetPrinterStatusQuery>( GetPrinterStatusDocument );
    const [ startWidth, setStartWidth ] = useState<number>( width );
    const [ widthInputValue, setWidthInputValue ] = useState<number>( width );
    const { displayContextMenu, setRef, setSelectedShapeName } = useContext( DrawContext );
    const dpi = 360;
    if ( data ) {
        console.log( "Width:", width );
        console.log( "PrinterStatus:", data );
        let labelInchesHeight = data.PrinterStatus.heightInch;
        let height = data.PrinterStatus.labelStatus.labelCharacteristic.pinsPrint;

        let backgroundStyles = TapeColorMap[ data.PrinterStatus.labelStatus.tapeColor ];
        console.log( "backgroundStyles", backgroundStyles, '\ntextColor:', data.PrinterStatus.labelStatus.textColor );
        console.log( "height",
            {
                height: height,
                found: /[0-9]\.[0-9]{1,2}(?=\")/.exec( data.PrinterStatus.labelType ),
                found0: /[0-9]\.[0-9]{1,2}(?=\")/.exec( data.PrinterStatus.labelType )[ 0 ],
                asInt: parseFloat( /[0-9]\.[0-9]{1,2}(?=\")/.exec( data.PrinterStatus.labelType )[ 0 ] ),
                asPixels: Math.floor( parseFloat( /[0-9]\.[0-9]{1,2}(?=\")/.exec( data.PrinterStatus.labelType )[ 0 ] ) * dpi )
            } );

        let widthInches = width ? ( width / dpi ).toFixed( 2 ) : 0;


        const checkDeselect = e => {
            console.log("xxxx", "checkDeselect", e)
            // deselect when clicked on empty area
            const clickedOnEmpty = e.target === e.target.getStage();
            console.log( "xxxx", "checkDeselect", {clickedOnEmpty} )
            if ( clickedOnEmpty ) {
                setSelectedShapeName( null );
            }
        };

        return <div style={{
            justifyContent: 'center',
            margin: '0 auto',
            position: 'relative',
            width: width,
            height: height + 25
        }}>
            <div style={{
                textAlign: 'center',
            }}><Input
                    min={100} max={4000}
                    onChange={( ev ) => {
                        console.log( { 'in': 'onChange', ev, currentTarget: ev.currentTarget } )
                        setWidthInputValue( parseInt(ev.currentTarget.value) );
                    }} 
                    onPressEnter={( ev ) => {
                        console.log({ 'in': 'onPressEnter', ev})
                        updateWidth( parseInt( ev.currentTarget.value ) );
                    }}
                    // updateWidth
                    defaultValue={width}
                    size="small"
                    value={widthInputValue}
                    step={null}
                    style={{
                        border: 'none',
                        overflow: 'none',
                        width: 40,
                        textAlign: 'right',
                        paddingRight: 2,
                        textDecoration: 'underline'
                    }}
                />px
                ({widthInches}")
            </div>
            <div style={{ position: 'relative' }}>
                <Rnd
                    disableDragging={true}
                    minConstraints={[ 100, height ]} maxConstraints={[ 4000, height ]}
                    enableResizing={{ top: false, right: true, bottom: false, left: false, topRight: false, bottomRight: false, bottomLeft: false, topLeft: false }}
                    onResize={
                        (
                            ev: MouseEvent | TouchEvent,
                            dir: ResizeDirection,
                            elementRef: HTMLDivElement,
                            delta: ResizableDelta,
                            position: RndPosition
                        ) => {
                            console.log( { in: 'onResize - A', ev, dir, elementRef, delta, position } );
                            if ( delta.width || ev['movementX'] ) {
                                console.log( { in: 'onResize - B', ev, dir, elementRef, delta, position } );
                                if ( ev['movementX'] ){
                                    updateWidth( width + ev['movementX']);
                                    setWidthInputValue( width + ev[ 'movementX' ] );
                                } else {
                                    updateWidth( startWidth + delta.width );
                                    setWidthInputValue( width + delta.width );
                                }
                            }
                        }
                    }
                    onResizeStart={() => document.body.requestPointerLock() }
                    onResizeStop={() => {
                        setStartWidth(width);
                        document.exitPointerLock();
                    }}
                    style={{
                        margin: '0 auto',
                        position: 'relative'
                    }}
                    resizeHandleClasses={{
                        right: 'resize-handle'
                    }}
                    handle={[ 'e' ]}
                >
                    <Stage
                        // onMouseEnter={() => displayContextMenu( false )}
                        // onContextMenu={displayContextMenu}

                        onMouseDown={checkDeselect}
                        onTouchStart={checkDeselect}
                        width={width}
                        style={{
                            border: '1px solid #D3D3D3',
                            // backgroundColor: `rgba(199, 199, 199, 0.2)`,
                            // margin: '0 auto',
                            width: width,
                            height: height,
                            ...backgroundStyles
                        }}
                        context
                        ref={setRef}
                        height={height}>
                        <Layer>
                            {children}
                            {/* <DrawTransformHandler selectedShapeName={selectedShapeName} /> */}
                        </Layer>
                    </Stage>
                </Rnd>
            </div>
            <div style={{
                position: 'relative',
                textAlign: 'center',
                width: height,
                right: 20,
                transform: 'rotate( 270deg )',
                transformOrigin: 'left top 0'
            }}>{labelInchesHeight}" ({height}px)</div>
            <div style={{
                position: 'relative',
                textAlign: 'center',
                top: '-13px',
            }}><i>Current Label Maker Tape Width: </i>{labelInchesHeight}"</div>
        </div>;

    }
    return <div style={{
        justifyContent: 'center',
        margin: '0 auto',
        position: 'relative',
        width: width,
        height: '100%',
        // backgroundColor: 'green'
        // height: height + 25
    }}>
        <div style={{
            textAlign: 'center',
        }}>
            <Spin spinning={true} />
        </div>
    </div>
};