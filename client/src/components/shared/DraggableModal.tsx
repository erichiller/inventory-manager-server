/**
 * source:
 * TODO：
 *   1. When off, the display will flash.
 *   2. ZIndex needs to be optimized
*/

import React, { Ref } from "react";
import { Modal } from "antd";
import { ModalProps } from "antd/lib/modal";

// Get random number
const genNonDuplicateID = length => {
    return Number(
        Math.random()
            .toString()
            .substr( 3, length ) + Date.now()
    ).toString( 36 );
};

interface DragModalProps extends ModalProps {
    // title?: string;
    // wrapClassName?: string;
}

interface DragModalState {
    // titleContainer: HTMLDivElement;
    wrapClassName: string;
}

class DraggableModal extends React.PureComponent<DragModalProps, DragModalState> {

    id: string;
    initLeft: number;
    dragDom: HTMLElement;
    // dragDom: HTMLCollectionOf<Element>;
    dragging: boolean;
    tLeft: number;
    tTop: number;

    state = {
        wrapClassName: this.props.wrapClassName
    };

    constructor ( props: DragModalProps ) {
        super( props );

        this.id = genNonDuplicateID( 10 );
        this.initLeft = ( window.innerWidth - ( ( typeof props.width === "string" ? parseInt( props.width ) : props.width ) || 520 ) ) / 2; // Initial position adjustment

        this.dragDom = null; // Drag target element
        this.dragging = false; // Whether to drag switch
        this.tLeft = 0; // yAxis
        this.tTop = 0; // xAxis
    }

    componentDidMount () {
        this.getDragDom();
        // wrapClassName={`drag_modal d_${ this.id } ${ wrapClassName }`}
    }

    componentDidUpdate () {
        if ( !this.dragDom ) {
            this.getDragDom();
        }
    }

    // setRef = ( ref: HTMLDivElement) => {
    //     this.setState({titleContainer: ref});
    // }

    /*
     * During the initial rendering, the Modal dom will not be obtained directly.
     * Setting ref using findDOMNode will not get it.
     * It can only be obtained using the native method in the timer.
     * */
    getDragDom = () => {
        setTimeout( () => {
            // Get uniquely marked elements
            const dragDom: HTMLElement = ( document.getElementsByClassName( `d_${ this.id }` )[ 0 ] ) as HTMLElement;
            if ( dragDom ) {
                // dragDom.style.left = `${ this.initLeft }px`;
                // dragDom.style.top = "0";
                this.dragDom = dragDom;
            }
        } );
    };

    onMouseDown = ( e: React.MouseEvent<HTMLDivElement, MouseEvent> ) => {
        e.preventDefault();
        // this.setState( { wrapClassName: `drag_modal d_${ this.id } ${ this.props.wrapClassName }` } );
        this.dragging = true; // Activate drag state
        /*
        ** Activate drag state
        ** Set zindex = 999 for all currently draggable floating layers
        ** Current drag target zindex = 1000
        **/
        const nodeList: HTMLCollectionOf<HTMLElement> = document.getElementsByClassName( "drag_modal" ) as HTMLCollectionOf<HTMLElement>;
        if ( nodeList.length > 0 ) {
            Array.from( nodeList ).forEach( item => ( item.style.zIndex = ( 999 ).toString() ) );
            // this.dragDom.style.right = "auto! important";
            // this.dragDom.style.bottom = "auto! important";
            // this.dragDom.style.top = "0";
            this.dragDom.style.zIndex = ( 1000 ).toString();
        }

        /*
        * getBoundingClientRect: Returns a DomRect object
        * Contains the top, right, bottom, and left values ​​of the element, 
        * corresponding to the distance to the top and left of the screen, in px
        * */
        const dragDomRect = this.dragDom.getBoundingClientRect();
        /*
        * e.clientX, e.clientY
        * Get the coordinate position of the mouse
        * */
        this.tLeft = e.clientX - dragDomRect.left; // x coordinate offset of the selected element when the mouse is pressed
        this.tTop = e.clientY - dragDomRect.top; // y coordinate

        this.onMouseMove( this.dragDom.getElementsByClassName('ant-modal')[0] as HTMLElement );
    };

    onMouseUp = ( e: React.MouseEvent<HTMLDivElement, MouseEvent> ) => {
        e.preventDefault();
        this.dragging = false; // Activate drag state
        document.onmousemove = null; // Stop mouse movement event
    };

    onMouseMove = (node: HTMLElement) => {
        document.onmousemove = e => {
            e.preventDefault();
            if ( this.dragging ) {
                node.style.left = `${ e.clientX - this.tLeft }px`;
                // node.style.top = `${ e.clientY - this.tTop }px`;
                node.setAttribute( 'style', `${node.getAttribute('style')} ;top: ${ e.clientY - this.tTop }px !important`);
            }
        };
    };

    render () {
        const { children, title = "Drag-Modal", wrapClassName = "" } = this.props;

        return (
            <Modal
                {...this.props}
                // mask={false}
                // wrapClassName={this.props.wrapClassName}
                style={{top: 0}}
                wrapClassName={`drag_modal d_${ this.id } ${ wrapClassName }`}
                title={
                    <div
                        className="drag_title"
                        onMouseDown={this.onMouseDown}
                        onMouseUp={this.onMouseUp}
                    >
                        {title}
                    </div>
                }
            >
                {children}
            </Modal>
        );
    }
}

export default DraggableModal;
