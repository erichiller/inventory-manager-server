
import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { Stage, Layer } from 'react-konva';
import { Spin } from "antd";

import { GetPrinterStatusQuery, GetPrinterStatusDocument } from "../../types/graphql";
import { DrawContext } from "../draw/LabelDraw";

export const LabelComponent: React.FunctionComponent<{}> = ( { children } ) => {
    const { data } = useQuery<GetPrinterStatusQuery>( GetPrinterStatusDocument );
    const dpi = 360;
    const margin = Math.floor( ( 14 / 180 ) * dpi ); // inches of margin to subtract
    // if ( loading ) return <Loading />;
    // if ( error ) return <p>ERROR</p>;
    if ( data ) {
        // height is mm * 360
        // let height = parseInt(/[0-9]{1,2}(?=mm)/.exec(data.PrinterStatus.labelType)[0]) * 360;

        console.log( "PrinterStatus:", data );
        // height is inches * 360
        let labelInchesHeight = parseFloat( /[0-9]\.[0-9]{1,2}(?=\")/.exec( data.PrinterStatus.labelType )[ 0 ] );
        let height = Math.floor( ( labelInchesHeight * dpi ) - margin );
        height = 130;


        console.log( "height",
            {
                height: height,
                found: /[0-9]\.[0-9]{1,2}(?=\")/.exec( data.PrinterStatus.labelType ),
                found0: /[0-9]\.[0-9]{1,2}(?=\")/.exec( data.PrinterStatus.labelType )[ 0 ],
                asInt: parseFloat( /[0-9]\.[0-9]{1,2}(?=\")/.exec( data.PrinterStatus.labelType )[ 0 ] ),
                asPixels: Math.floor( parseFloat( /[0-9]\.[0-9]{1,2}(?=\")/.exec( data.PrinterStatus.labelType )[ 0 ] ) * dpi )
            } );

        // TODO: allow the user to set the width
        let widthInches = 0.75;
        let width = Math.floor(widthInches * dpi);

        // DEBUG OVERRIDES
        // 242      | works         | GOOD
        // 192      | works         | GOOD
        // 144      | works
        // 150      | works
        // 175      | works         | GOOD
        // 185      | works         | FIXED
        // width = Math.floor( 0.75 * dpi );
        // height=48;

        return < DrawContext.Consumer >
            {( { displayContextMenu, setRef } ) => {
                return <div style={{
                    justifyContent: 'center',
                    margin: '0 auto',
                    position: 'relative',
                    width: width,
                    height: height + 25
                }}>
                    {/* <div style={{ justifyContent: 'center' }}> */}
                    <div style={{
                        // position: 'relative',
                        // bottom: '10%',
                        // left: '45%',
                        textAlign: 'center',
                        // left: width,

                        // transform: 'rotate( 90deg )',
                        // transformOrigin: 'left top 0'
                    }}>{widthInches}" ({width}px)</div>
                    <Stage
                        onMouseEnter={() => displayContextMenu( false )}
                        width={width}
                        style={{
                            border: '1px solid #D3D3D3',
                            backgroundColor: 'rgba(199, 199, 199, 0.2)',
                            margin: '0 auto',
                            width: width,
                            height: height
                        }}
                        context
                        ref={setRef}
                        height={height}>
                        <Layer>
                            {/* <Rect width={4} height={4} x={2}  y={6} fill="red" /> */}
                            {children}
                        </Layer>
                    </Stage>
                    <div style={{
                        position: 'relative',
                        // bottom: '45%'
                        textAlign: 'center',
                        width: height,
                        right: 20,
                        // left: width,

                        transform: 'rotate( 270deg )',
                        transformOrigin: 'left top 0'
                    }}>{labelInchesHeight}" ({height}px)</div>
                    <div style={{
                        position: 'relative',
                        textAlign: 'center',
                        top: '-13px',
                        // left: width,

                        // transform: 'rotate( 90deg )',
                        // transformOrigin: 'left top 0'
                    }}><i>Current Label Maker Tape Width: </i>{widthInches}"</div>
                </div>

            }}
        </DrawContext.Consumer>;
    }
    return <Spin spinning={true} />;
}