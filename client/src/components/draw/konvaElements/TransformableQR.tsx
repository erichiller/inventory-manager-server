import React, { useContext } from 'react';
import Konva from "konva";
import ReactKonva, { KonvaNodeComponent, Transformer } from 'react-konva';
import type { KonvaEventObject } from "konva/types/Node";
import { Item } from '../../../lib/item';
import { DrawContext, DrawContextAdditions } from '../LabelDraw';
import { LabelQR } from '../../../lib/LabelConstituent';


interface QrImageProps extends Pick<DrawContext, 'displayContextMenu' | 'selectedShapeName' | 'updateHistory' | 'setSelectedShapeName'> {
    labelQR: LabelQR;
    item: Item<any>;
    // stage: Konva.Stage;
    // layer: Konva.Layer;
    // getPublicInstance: () => Node;
    // getNativeNode: () => Node;
}

// type TransformableQRComponent = Partial<typeof ReactKonvaText>;
// type TransformableQRComponent = KonvaNodeComponent<Konva.Text & TransformableQRProps, Konva.TextConfig>;
// type TransformableQRComponent = Omit<typeof ReactKonvaText, 'getPublicInstance' | 'getNativeNode'>;
// type TransformableQRComponent = Pick<typeof ReactKonvaText, 'propTypes'>;


// type TransformableQRComponent = Konva.Text & Konva.TextConfig;


export function TransformableQR ( props: QrImageProps ): React.ReactElement<KonvaNodeComponent<Konva.Image & QrImageProps, Konva.ImageConfig>> {
    const labelQR = props.labelQR;
    const item = props.item;

    const nodeRef = React.useRef<Konva.Image>();
    const trRef = React.useRef<Konva.Transformer>();

    let isSelected = labelQR.id === props.selectedShapeName;

    console.log( "TransformableQR\n", { ...props, isSelected, trRef, nodeRef});

    React.useEffect( () => {
        console.log( { cls: 'TransformableQR', method: 'useEffect', trRef, tr_truth: trRef && trRef.current, isSelected, qrid: labelQR.id, selectedname: props.selectedShapeName } );
        // we need to attach transformer manually
        // if ( trRef && trRef.current ) {
        if ( isSelected && trRef && trRef.current){
            console.log( { cls: 'TransformableQR', method: 'useEffect', op: 'willoperate', trRef, curr: trRef.current } );
            trRef.current.nodes( [ nodeRef.current ] );
            trRef.current.getLayer().batchDraw();
        } else {
            console.log( { cls: 'TransformableQR', method: 'useEffect', op: 'DETACH' } );
            trRef.current.detach();
            trRef.current.getLayer().batchDraw();
        }
    }, [ isSelected, trRef, trRef.current, props.selectedShapeName ] );

    function onSelect ( e: KonvaEventObject<MouseEvent> ) {
        console.log( "onSelect setSelectedShapeName" );
        props.setSelectedShapeName( e.target.name() );
    }


    return <React.Fragment>
        <ReactKonva.Image
            ref={nodeRef}
            qrObject={labelQR}
            key={labelQR.id}
            name={labelQR.id}
            image={labelQR.svgImage}
            onContextMenu={props.displayContextMenu}
            onClick={onSelect}
            onTap={onSelect}
            x={labelQR.x}
            y={labelQR.y}
            scaleX={labelQR.scaleX}
            scaleY={labelQR.scaleY}
            rotation={labelQR.rotation}
            onTransformEnd={( evt: KonvaEventObject<Event> ) => {
                console.log( "(QR) TransformEnd:\n", evt );
                ( evt.currentTarget.attrs.qrObject as LabelQR ).drawAttrs = {
                    x: evt.currentTarget.attrs.x,
                    y: evt.currentTarget.attrs.y,
                    scaleX: evt.currentTarget.attrs.scaleX,
                    scaleY: evt.currentTarget.attrs.scaleY,
                    rotation: evt.currentTarget.attrs.rotation
                };
                props.updateHistory();
            }}
            onDragEnd={( evt: KonvaEventObject<DragEvent> ) => {
                // console.log( "(QR) DragEnd:\n", evt );
                // ( evt.currentTarget.attrs.qrObject as LabelQR ).drawAttrs = {
                //     x: evt.currentTarget.attrs.x,
                //     y: evt.currentTarget.attrs.y,
                //     scaleX: evt.currentTarget.attrs.scaleX,
                //     scaleY: evt.currentTarget.attrs.scaleY,
                //     rotation: evt.currentTarget.attrs.rotation
                // };
                // props.updateHistory();
            }}
            onMouseEnter={( ev ) => ev.currentTarget.getStage().container().style.cursor = 'crosshair'}
            onMouseLeave={( ev ) => ev.currentTarget.getStage().container().style.cursor = 'default'}
            draggable />
        <Transformer
                key={`${ labelQR.id }_labelQR_transformer`}
                ref={trRef}
            />
    </React.Fragment>;
};