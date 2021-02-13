import React, { useState }  from 'react';
import Konva from "konva";
import { Text, KonvaNodeComponent, Transformer } from 'react-konva';
import type { KonvaEventObject } from "konva/types/Node";
import { LabelText } from '~lib/LabelConstituent';
import { Item } from '~lib/Item';
import { stringTemplateRender } from '~lib/stringTemplates';


interface EditableTextProps {
    labelText: LabelText;
    item: Item<any>;
    selectedShapeName: string;
    setSelectedShapeName: (shapeName: string) => void;
    displayContextMenu: ( display: KonvaEventObject<PointerEvent | MouseEvent> ) => void;
    updateHistory: () => void;
    // stage: Konva.Stage;
    // layer: Konva.Layer;
    // getPublicInstance: () => Node;
    // getNativeNode: () => Node;
}

// type EditableTextComponent = Partial<typeof ReactKonvaText>;
// type EditableTextComponent = KonvaNodeComponent<Konva.Text & EditableTextProps, Konva.TextConfig>;
// type EditableTextComponent = Omit<typeof ReactKonvaText, 'getPublicInstance' | 'getNativeNode'>;
// type EditableTextComponent = Pick<typeof ReactKonvaText, 'propTypes'>;


// type EditableTextComponent = Konva.Text & Konva.TextConfig;


export function EditableText ( props: EditableTextProps ): React.ReactElement<KonvaNodeComponent<Konva.Text & EditableTextProps, Konva.TextConfig>> {
    let labelText: LabelText = props.labelText;
    if ( ! ( labelText instanceof LabelText ) ){
        throw new Error("Invalid LabelText");
    }

    const item = props.item;

    const [ { renderedString, wasModified }, setRenderedString ] = useState<{ renderedString: string; wasModified: boolean; }>( stringTemplateRender( labelText.text, item ) );

    const textNodeRef = React.useRef<Konva.Text>();
    const trRef = React.useRef<Konva.Transformer>();

    let isSelected = labelText.id === props.selectedShapeName;
    console.log( "EditableText\n", { ...props, isSelected, trRef, textNodeRef } );

    React.useEffect( () => {
        console.log( { cls: 'EditableText', method: 'useEffect', trRef, tr_truth: trRef && trRef.current, isSelected, qrid: labelText.id, selectedname: props.selectedShapeName } );
        // we need to attach transformer manually
        // if ( trRef && trRef.current ) {
        if ( isSelected && trRef && trRef.current ) {
            console.log( { cls: 'EditableText', method: 'useEffect', op: 'willoperate', trRef, curr: trRef.current } );
            trRef.current.nodes( [ textNodeRef.current ] );
            trRef.current.getLayer().batchDraw();
        } else {
            console.log( { cls: 'EditableText', method: 'useEffect', op: 'DETACH' } );
            trRef.current.detach();
            trRef.current.getLayer().batchDraw();
        }
    }, [ isSelected, trRef, trRef.current, props.selectedShapeName ] );

    React.useEffect( () => {
        console.log( { cls: 'EditableText', method: 'useEffect', op: 'setRenderedString', labelText } );
        setRenderedString(stringTemplateRender( labelText.text, item ));
    }, [labelText.text] );

    function onSelect ( e: KonvaEventObject<MouseEvent> ) {
        console.log( "EditableText onSelect setSelectedShapeName", {e, name: e.target.name()} );
        props.setSelectedShapeName( e.target.name() );
    }
    console.log( { class: 'EditableText', text: labelText.text, item, renderedString});

    return <React.Fragment>
        <Transformer
            key={`${ labelText.id }_labeltext_transformer`}
            ref={trRef}
            // node={textNodeRef.current as any}
            enabledAnchors={[ 'middle-left', 'middle-right' ]}
            // set minimum width of text
            boundBoxFunc={( oldBox, newBox ) => {
                newBox.width = Math.max( 30, newBox.width );
                return newBox;
            }} />
        <Text
            ref={textNodeRef}
            textObject={labelText}
            key={labelText.id}
            name={labelText.id}
            text={renderedString}
            fontStyle={labelText.bold ? "bold" : labelText.italic ? "italic" : "normal"}
            textDecoration={labelText.underline ? "underline" : ""}
            fontSize={labelText.fontSize}
            fill={wasModified ? 'red' : 'black'}
            onContextMenu={props.displayContextMenu}
            x={labelText.x}
            y={labelText.y}
            scaleX={labelText.scaleX}
            scaleY={labelText.scaleY}
            rotation={labelText.rotation}
            onClick={onSelect}
            onTap={onSelect}
            onDblClick={( evt ) => {
                {
                    console.group("EditableText.onDblClick");
                    // hide text node and transformer:
                    textNodeRef.current.hide();
                    trRef.current.hide();
                    // evt.currentTarget.getLayer().draw();
                    evt.currentTarget.getLayer().batchDraw();

                    // create textarea over canvas with absolute position
                    // first we need to find position for textarea
                    let textPosition = textNodeRef.current.getAbsolutePosition();

                    // then lets find position of props.stage container on the page:
                    let stageBox = evt.currentTarget.getStage().container().getBoundingClientRect();

                    // so position of textarea will be the sum of positions above:
                    let areaPosition = {
                        x: stageBox.left + textPosition.x,
                        y: stageBox.top + textPosition.y
                    };
                    console.log( "EditableText.onDblClick", { textPosition, stageBox, areaPosition, trRef, textNodeRef,evt});

                    // create textarea and style it
                    let textarea = document.createElement( 'textarea' );
                    document.body.appendChild( textarea );

                    // apply many styles to match text on canvas as close as possible
                    // remember that text rendering on canvas and on the textarea can be different
                    // and sometimes it is hard to make it 100% the same. But we will try...
                    textarea.value = textNodeRef.current.text();
                    textarea.style.position = 'absolute';
                    textarea.style.top = areaPosition.y + 'px';
                    textarea.style.left = areaPosition.x + 'px';
                    textarea.style.width = textNodeRef.current.width() - textNodeRef.current.padding() * 2 + 'px';
                    textarea.style.height =
                        textNodeRef.current.height() - textNodeRef.current.padding() * 2 + 5 + 'px';
                    textarea.style.fontSize = textNodeRef.current.fontSize() + 'px';
                    textarea.style.border = 'none';
                    // start temp
                    // textarea.style.border = '4px solid purple';
                    // textarea.style.backgroundColor = 'red';
                    textarea.style.zIndex = '1001';
                    // end temp
                    textarea.style.padding = '0px';
                    textarea.style.margin = '0px';
                    textarea.style.overflow = 'hidden';
                    textarea.style.background = 'none';
                    textarea.style.outline = 'none';
                    textarea.style.resize = 'none';
                    textarea.style.lineHeight = textNodeRef.current.lineHeight().toString();
                    textarea.style.fontFamily = textNodeRef.current.fontFamily();
                    textarea.style.fontStyle = textNodeRef.current.fontStyle() === "italic" ? "italic" : "normal";
                    textarea.style.textDecoration = textNodeRef.current.textDecoration() === "underline" ? "underline" : "none";
                    textarea.style.fontWeight = textNodeRef.current.fontStyle() === "bold" ? "bold" : "normal";
                    textarea.style.transformOrigin = 'left top';
                    textarea.style.textAlign = textNodeRef.current.align();
                    textarea.style.color = textNodeRef.current.fill();
                    let rotation = textNodeRef.current.rotation();
                    let transform = '';
                    if ( rotation ) {
                        transform += 'rotateZ(' + rotation + 'deg)';
                    }

                    let px = 0;
                    // also we need to slightly move textarea on firefox
                    // because it jumps a bit
                    let isFirefox = navigator.userAgent.toLowerCase().indexOf( 'firefox' ) > -1;
                    if ( isFirefox ) {
                        px += 2 + Math.round( textNodeRef.current.fontSize() / 20 );
                    }
                    transform += 'translateY(-' + px + 'px)';

                    textarea.style.transform = transform;

                    // reset height
                    textarea.style.height = 'auto';
                    // after browsers resized it we can set actual value
                    textarea.style.height = textarea.scrollHeight + 3 + 'px';

                    textarea.focus();
                    console.log( "EditableText .onDblClick textarea\n", {textarea});

                    function removeTextarea () {
                        console.log("EditableText .onDblClick .removeTextarea");
                        textarea.parentNode.removeChild( textarea );
                        window.removeEventListener( 'click', handleOutsideClick );
                        textNodeRef.current.show();
                        trRef.current.show();
                        trRef.current.forceUpdate();
                        // evt.currentTarget.getLayer().draw();
                        evt.currentTarget.getLayer().batchDraw();
                        
                    }

                    function setTextareaWidth ( newWidth ) {
                        console.log( "EditableText .onDblClick .setTextareaWidth\n", {newWidth} );
                        if ( !newWidth ) {
                            // set width for placeholder
                            newWidth = textNodeRef.current.text.length * textNodeRef.current.fontSize();
                        }
                        // some extra fixes on different browsers
                        let isSafari = /^((?!chrome|android).)*safari/i.test(
                            navigator.userAgent
                        );
                        let isFirefox =
                            navigator.userAgent.toLowerCase().indexOf( 'firefox' ) > -1;
                        if ( isSafari || isFirefox ) {
                            newWidth = Math.ceil( newWidth );
                        }

                        let isEdge =
                            document.DOCUMENT_NODE || /Edge/.test( navigator.userAgent );
                        if ( isEdge ) {
                            newWidth += 1;
                        }
                        textarea.style.width = newWidth + 'px';
                    }

                    textarea.addEventListener( 'keydown', function ( e ) {
                        console.log( "EditableText .onDblClick .addEventListener (keydown= 13 | 27)\n", { e } );
                        // hide on enter
                        // but don't hide on shift + enter
                        if ( e.keyCode === 13 && !e.shiftKey ) {
                            textNodeRef.current.text( textarea.value );
                            removeTextarea();
                        }
                        // on esc do not set value back to node
                        if ( e.keyCode === 27 ) {
                            removeTextarea();
                        }
                    } );

                    textarea.addEventListener( 'keydown', function ( e ) {
                        console.log( "EditableText .onDblClick .addEventListener (keydown)\n", {e} );
                        let scale = textNodeRef.current.getAbsoluteScale().x;
                        setTextareaWidth( textNodeRef.current.width() * scale );
                        textarea.style.height = 'auto';
                        textarea.style.height =
                            textarea.scrollHeight + textNodeRef.current.fontSize() + 'px';
                    } );

                    function handleOutsideClick ( e ) {
                        console.log( "EditableText .onDblClick .handleOutsideClick\n", { e } );
                        if ( e.target !== textarea ) {
                            textNodeRef.current.text( textarea.value );
                            removeTextarea();
                        }
                    }
                    setTimeout( () => {
                        console.log( "EditableText .onDblClick .setTimeout" );
                        window.addEventListener( 'click', handleOutsideClick );
                    } );
                    console.groupEnd()
                }
            }}
            onTransform={() => {
                // reset scale, so only width is changing by transformer
                textNodeRef.current.setAttrs( {
                    width: textNodeRef.current.width() * textNodeRef.current.scaleX(),
                    scaleX: 1
                } );
            }}
            onTransformEnd={( evt: KonvaEventObject<Event> ) => {
                console.log( "(Text) TransformEnd:\n", evt, "attrs", evt.currentTarget.attrs );
                ( evt.currentTarget.attrs.textObject as LabelText ).setDrawAttrs( {
                    x: evt.currentTarget.attrs.x,
                    y: evt.currentTarget.attrs.y,
                    scaleX: evt.currentTarget.attrs.scaleX,
                    scaleY: evt.currentTarget.attrs.scaleY,
                    rotation: evt.currentTarget.attrs.rotation
                } );
                props.updateHistory();
            }}
            onDragEnd={( evt: KonvaEventObject<DragEvent> ) => {
                console.log( "(Text) DragEnd event:\n", evt, "\nTextObject:\n", ( evt.currentTarget.attrs.textObject as LabelText ), "\n captured labelText:\n", labelText, "\nto: ", [ evt.currentTarget.attrs.x, evt.currentTarget.attrs.y ] );
                ( evt.currentTarget.attrs.textObject as LabelText ).setDrawAttrs( {
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
            draggable={true}
        />
    </React.Fragment>;
};