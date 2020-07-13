import React, { useState } from 'react';
import { LabelExport } from '~lib/LabelConstituent';
import { PixelMap, canvasToBuffer } from '~lib/canvasToBuffer';

export const PrintContext = React.createContext( {
} as {
    handleAddToPrintList: () => void;
    setCurrentLabel: ( currentLabel: LabelExport ) => void;
    getCurrentLabel: () => LabelExport;
    getPrintLabels: () => LabelExport[];
    startSendBuffer: ( shouldSendBuffer: boolean ) => void;
    currentLabelToBuffer: () => PixelMap;
    printLabelsToBuffer: () => PixelMap[];
    shouldSendBuffer: boolean;
} );

interface PrintContextHandlerState {
    printLabels: LabelExport[];
    currentLabel: LabelExport;
    shouldSendBuffer: boolean;
}

export const PrintContextHandler: React.FC = ( props ) => {
    // static contextType = PrintContext;
    // declare context: React.ContextType<typeof PrintContext>;

    const handleAddToPrintList = () => {
        console.log( "PrintContextHandler.handleAddToPrintList" );
        if ( !state.printLabels.includes( state.currentLabel ) ) {
            console.log( "PrintContextHandler.handleAddToPrintList pushing" );
            setState( {
                ...state,
                printLabels: state.printLabels.concat( state.currentLabel )
            } );
        } else {
            console.log( "PrintContextHandler.handleAddToPrintList removing" );
            setState( {
                ...state,
                printLabels: state.printLabels.filter( ( label ) => label === state.currentLabel ? false : true )
            } );
        }
    };

    // private _currentLabel: LabelExport;
    // get currentLabel(): LabelExport{
    //     return _currentLabel;
    // }
    const setCurrentLabel = ( currentLabel: LabelExport ) => {
        if ( !currentLabel ) {
            console.group( "setCurrentLabel" );
            console.warn( "! currentLabel parameter received." );
            console.trace();
            console.groupEnd();
            return;
        }
        console.log( `PrintContextHandler printLabels set currentLabel`, currentLabel, { width: currentLabel.width, height: currentLabel.height } );
        if ( state.currentLabel === currentLabel ) { return; }
        setState( {
            ...state,
            currentLabel: currentLabel
        } );
    };

    const getCurrentLabel = (): LabelExport => {
        return state.currentLabel;
    };

    const getPrintLabels = (): LabelExport[] => {
        return state.printLabels;
    };
    /**
     * return `true` if the label was added. else `false`
     */
    const addPrintLabel = ( label: LabelExport ): boolean => {
        if ( !label ) {
            console.warn( "Attempt to add null object as label via context addPrintLabel()" );
            return false;
        }
        if ( getPrintLabels().includes( label ) ) {
            return false;
        }
        setState( {
            ...state,
            printLabels: getPrintLabels().concat( [ label ] )
        } );
        return true;
    };

    const startSendBuffer = ( shouldSendBuffer: boolean ) => {
        console.log( "startSendBuffer received", shouldSendBuffer );
        setState( {
            ...state,
            shouldSendBuffer: shouldSendBuffer } );
    };

    const currentLabelToBuffer = (): PixelMap => {
        console.log( `currentLabelToBuffer printLabels set currentLabel\n`, state.currentLabel, '\n', {
            currentLabelWidth: state.currentLabel.width,
            currentLabelHeight: state.currentLabel.height,
            canvasWidth: state.currentLabel.canvas.width,
            canvasHeight: state.currentLabel.canvas.height
        } );
        return canvasToBuffer( state.currentLabel.canvas );
    };
    const printLabelsToBuffer = (): PixelMap[] => {
        return state.printLabels.map( label => canvasToBuffer( label.canvas ) );
    };

    const [ state, setState ] = useState<PrintContextHandlerState>( {
        printLabels: [],
        currentLabel: null,
        shouldSendBuffer: false
    } );

    return (
        <PrintContext.Provider value={{
            setCurrentLabel: setCurrentLabel,
            getCurrentLabel: getCurrentLabel,
            handleAddToPrintList: handleAddToPrintList,
            getPrintLabels: getPrintLabels,
            startSendBuffer: startSendBuffer,
            currentLabelToBuffer: currentLabelToBuffer,
            shouldSendBuffer: state.shouldSendBuffer,
            printLabelsToBuffer: printLabelsToBuffer
        }}><div>
                {console.log( "PrintContextHandler", {
                    printLabels: state.printLabels,
                    currentLabel: state.currentLabel
                } )}
                {props.children}
            </div>
        </PrintContext.Provider>
    );
};