import React, { useContext } from 'react';
import Konva from "konva";
// import { Stage } from "konva/types/Stage";
import ReactKonva, { KonvaNodeComponent, Transformer, Image } from 'react-konva';
// import { Text } from "konva/types/shapes/Text";
import { Node, NodeConfig, KonvaEventObject } from "konva/types/Node";
import { BaseLayer } from "konva/types/BaseLayer";
// client / node_modules / konva / types / Node.d.ts
// import { Stage } from "react-konva";
// import { Stage } from "react-konva";
import nunjucks from 'nunjucks';
import { Item } from '../../../lib/item';
import { DrawContext } from '../LabelDraw';
import { LabelImage } from '../../../lib/LabelConstituent';


interface ImageProps extends Pick<DrawContext,
    'displayContextMenu' | 'selectedShapeName' | 'updateHistory' | 'setSelectedShapeName'> {
    labelImage: LabelImage;
    item: Item<any>;
    // stage: Konva.Stage;
    // layer: Konva.Layer;
    // getPublicInstance: () => Node;
    // getNativeNode: () => Node;
}

// type TransformableImageComponent = Partial<typeof ReactKonvaText>;
// type TransformableImageComponent = KonvaNodeComponent<Konva.Text & TransformableImageProps, Konva.TextConfig>;
// type TransformableImageComponent = Omit<typeof ReactKonvaText, 'getPublicInstance' | 'getNativeNode'>;
// type TransformableImageComponent = Pick<typeof ReactKonvaText, 'propTypes'>;


// type TransformableImageComponent = Konva.Text & Konva.TextConfig;


export function TransformableImage ( props: ImageProps ): React.ReactElement<KonvaNodeComponent<Konva.Image & ImageProps, Konva.ImageConfig>> {
    const labelImage = props.labelImage;
    const item = props.item;

    let isSelected = labelImage.id === props.selectedShapeName;

    const nodeRef = React.useRef<Konva.Image>();
    const trRef = React.useRef<Konva.Transformer>();

    React.useEffect( () => {
        console.log( { cls: 'TransformableImage', method: 'useEffect', trRef, tr_truth: trRef && trRef.current, isSelected, qrid: labelImage.id, selectedname: props.selectedShapeName } );
        // we need to attach transformer manually
        // if ( trRef && trRef.current ) {
        if ( isSelected && trRef && trRef.current ) {
            console.log( { cls: 'TransformableImage', method: 'useEffect', op: 'willoperate', trRef, curr: trRef.current } );
            trRef.current.setNode( nodeRef.current );
            trRef.current.getLayer().batchDraw();
        } else {
            console.log( { cls: 'TransformableImage', method: 'useEffect', op: 'DETACH' } );
            trRef.current.detach();
            trRef.current.getLayer().batchDraw();
        }
    }, [ isSelected, trRef, trRef.current, props.selectedShapeName ] );

    function onSelect ( e: KonvaEventObject<MouseEvent> ) {
        console.log( "onSelect setSelectedShapeName" );
        props.setSelectedShapeName( e.target.name() );
    }

    const image = document.createElement( 'img' );
    image.src = labelImage.data;
    image.width = labelImage.width;
    image.height = labelImage.height;
    console.log( "proceeding with draw image", { src: image.src, width: image.width, height: image.height } );

    return <React.Fragment>
        <Transformer
            key={`${ labelImage.id }_labelImage_transformer`}
            ref={trRef}
        // node={textNodeRef.current as any}
        // enabledAnchors={[ 'middle-left', 'middle-right' ]}
        // // set minimum width of text
        // boundBoxFunc={( oldBox, newBox ) => {
        //     newBox.width = Math.max( 30, newBox.width );
        //     return newBox;
        // }} 
        />
        <ReactKonva.Image
            ref={nodeRef}
            imageObject={labelImage}
            key={labelImage.id}
            name={labelImage.id}
            image={image}
            onContextMenu={props.displayContextMenu}
            x={labelImage.x}
            y={labelImage.y}
            scaleX={labelImage.scaleX}
            scaleY={labelImage.scaleY}
            rotation={labelImage.rotation}
            onClick={onSelect}
            onTap={onSelect}
            onTransformEnd={( evt: KonvaEventObject<Event> ) => {
                console.log( "(Image) TransformEnd:\n", evt, "attrs", evt.currentTarget.attrs );
                ( evt.currentTarget.attrs.imageObject as LabelImage ).setDrawAttrs( {
                    x: evt.currentTarget.attrs.x,
                    y: evt.currentTarget.attrs.y,
                    scaleX: evt.currentTarget.attrs.scaleX,
                    scaleY: evt.currentTarget.attrs.scaleY,
                    rotation: evt.currentTarget.attrs.rotation
                } );
                props.updateHistory();
            }}
            onDragEnd={( evt: KonvaEventObject<DragEvent> ) => {
                console.log( "(Image) DragEnd:\n", evt, "attrs", evt.currentTarget.attrs );
                ( evt.currentTarget.attrs.imageObject as LabelImage ).setDrawAttrs( {
                    x: evt.currentTarget.attrs.x,
                    y: evt.currentTarget.attrs.y,
                    scaleX: evt.currentTarget.attrs.scaleX,
                    scaleY: evt.currentTarget.attrs.scaleY,
                    rotation: evt.currentTarget.attrs.rotation
                } );
                props.updateHistory();
            }}
            onMouseEnter={( ev ) => ev.currentTarget.getStage().container().style.cursor = 'crosshair'}
            onMouseLeave={( ev ) => ev.currentTarget.getStage().container().style.cursor = 'default'}
            draggable />
    </React.Fragment>;
};