import * as React from 'react';
import Konva from 'konva';
import {Transformer} from 'react-konva';


interface DrawTransformHandlerProps {
    selectedShapeName: string;
}

export class DrawTransformHandler extends React.Component<DrawTransformHandlerProps> {

    transformer: Konva.Transformer;
    
    componentDidMount () {
        this.checkNode();
    }

    componentDidUpdate () {
        this.checkNode();
    }

    checkNode () {
        const stage = this.transformer.getStage();
        const { selectedShapeName } = this.props;
        const selectedNode = stage.findOne( "." + selectedShapeName );
        if ( selectedNode ) {
            this.transformer.attachTo( selectedNode );
        } else {
            this.transformer.detach();
        }
        this.transformer.getLayer().batchDraw();
    }
    render () {
        console.log("DrawTransformHandler", this.props.selectedShapeName);
        return (
            <Transformer
                ref={node => {
                    this.transformer = node;
                }}
            />
        );
    }
}