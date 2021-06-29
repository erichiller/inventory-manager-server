import React from 'react';
import { v4 as UUIDv4 } from 'uuid';
import type { Scalars } from '../types/graphql';
import { Integer } from '../types/uint8';
import { Item } from "../Item";
import type { Stage as StageT } from 'konva/lib/Stage';
import { Label } from './LabelTemplate';
import { UUIDStringT, LabelText, LabelImage } from './LabelConstituent';
import type { LabelQR } from "./LabelQR";


export class LabelExport implements Label {

    static DEFAULT_WIDTH = 300;
    id: UUIDStringT;
    stageRef: React.MutableRefObject<StageT>;
    width: Integer = LabelExport.DEFAULT_WIDTH;
    height: Integer;
    created_at: Scalars[ 'timestamptz' ];
    updated_at: Scalars[ 'timestamptz' ];
    edit_of_id?: Scalars[ 'uuid' ];
    parent_of: Label[] = [];
    item_id?: Integer;
    title?: string;
    item?: Item<any>;


    content: LabelExportConstituents = {
        texts: [],
        images: [],
        qrs: []
    };

    // private static isLabel( label: any ): is Label {
    // }
    /**
     * () ; generatures uuid
     * (Label) : uses imported Label from GraphQL
     * (id)
     */
    constructor ();
    constructor ( label: Label );
    constructor ( constituents: LabelExportConstructorProps );
    constructor ( id?: UUIDStringT );
    constructor ( props?: UUIDStringT | LabelExportConstructorProps | Label ) {
        console.group( "LabelExport constructor" );
        console.log( "Props Received:", { props } );
        if ( !props ) {
            this.id = UUIDv4();
            console.log( `LabelExport - constructor received no props, generating UUIDv4 = ${ this.id }` );
        } else if ( typeof props === "string" ) {
            this.id = props;
            console.log( `LabelExport - props as id '${ props }' received, setting as id: UUIDv4 = '${ this.id }'` );
        } else {
            if ( 'id' in props ) {
                console.log( `LabelExport - 'id' in props: ${ props.id }` );
                // console.log( "Object.getOwnPropertyNames(this)", Object.getOwnPropertyNames( this ) );
                // console.log( "Object.getOwnPropertyNames(props)", Object.getOwnPropertyNames( this ) );
                // console.log( "Object.keys(this)", Object.keys( this ) );
                console.log( "Object.keys(props)", Object.keys( props ) );
                Object.keys( props ).forEach( propName => {
                    this[ propName ] = props[ propName ];
                    console.log( `    LabelExport - 'id' in props, ${ propName } = `, this[ propName ], "\n set to", props[ propName ] );
                } );
            } else {
                this.id = UUIDv4();
                console.trace();
                console.warn( `LabelExport - props.id not received, creating new uuid as id: UUIDv4 ${ this.id }` );
            }
            if ( props ) {
                if ( 'content' in props ) {
                    this.content = {
                        ...props.content,
                        texts: props.content.texts.map( text => new LabelText( text ) )
                    };
                    console.log( "LabelExport - 'content' in props", this.content ); /*******   HERE !!!!!!!!!!!!!!!!!!! *****/
                } else if ( props.texts ) {
                    console.log( "LabelExport - 'texts' in props" );
                    this.content = {
                        texts: props.texts.map( text => new LabelText( text ) ),
                        images: props.images,
                        qrs: props.qrs
                    };
                }
                if ( 'stageRef' in props ) {
                    console.log( "LabelExport - 'stageRef' in props" );
                    this.stageRef = props.stageRef;
                }
            }
        }
        console.log( "LabelExport constructor result=", this, this.content );
        console.groupEnd();
    }

    /**
     *
     * @param values update values
     * @returns self
     */
    setValues ( values: LabelExportConstructorProps ): LabelExport {
        // console.log( "LabelConstituent.setValues ( #LabelComponent )\n********************\n", { ...values, ...{ imgData_width: values.imgData.width, imgData_height: values.imgData.height } }, "\n********************\n" );
        console.log( "LabelConstituent.setValues ( #LabelComponent )\n********************\n", { ...values }, "\n********************\n" );
        this.content = {
            texts: values.texts,
            images: values.images,
            qrs: values.qrs
        };
        this.stageRef = values.stageRef;
        this.width = values.width;
        this.height = values.height;
        this.item_id = values.item_id;
        return this;
    }

    /**
     * see HTMLCanvasElement
     *  https://developer.mozilla.org/en-US/docs/Web/HTML/Element/canvas
     */
    get canvas (): HTMLCanvasElement | null {
        if ( this.stageRef.current ) {
            return this.stageRef.current.getStage().toCanvas( {} );
        }
        return null;
    }

    get imgData (): ImageData {
        return this.canvas && this.canvas.width && this.canvas.height ? this.canvas.getContext( '2d' ).getImageData( 0, 0, this.canvas.width, this.canvas.height ) : null;
    }

    get thumbnail (): React.ReactElement {
        let image: HTMLImageElement = document.createElement( 'img' );
        image.width = 50;
        // image.
        image.src = this.canvas.toDataURL();
        return <img width={50} style={{
            border: '1px solid #cacaca',
            marginRight: '16px',
            display: 'inline-block'
        }} src={this.canvas.toDataURL()} />;
    }

    public isEqual ( comparisonLabel: LabelExport ): boolean {
        return this.content.qrs && this.content.texts === comparisonLabel.content.texts && this.content.qrs === comparisonLabel.content.qrs && this.content.images === comparisonLabel.content.images && this.imgData === comparisonLabel.imgData;
    }

    public get isCreated (): boolean {
        return this.created_at ? true : false;
    }

}





export class LabelExportConstituents {

    texts: LabelText[];
    images: LabelImage[];
    qrs: LabelQR[];

}
interface LabelExportConstructorProps extends LabelExportConstituents {
    stageRef: React.MutableRefObject<StageT>;
    width: Integer;
    height: Integer;
    item_id?: Integer;
}
