import React from 'react';
import { LabelExport } from '../../lib/LabelConstituent';

export const PrintContext = React.createContext( {
} as {
    handleAddToPrintList: ( ) => void;
    setCurrentLabel: ( currentLabel: LabelExport<any> ) => void;
    getCurrentLabel: () => LabelExport<any>;
    getPrintLabels: () => LabelExport<any>[];
} );

interface PrintContextHandlerState {
    printLabels: LabelExport < any > [];
    currentLabel: LabelExport<any>;
}

export class PrintContextHandler extends React.Component<{},PrintContextHandlerState> {
    static contextType = PrintContext;
    declare context: React.ContextType<typeof PrintContext>;

    handleAddToPrintList = () => {
        console.log( "PrintContextHandler.handleAddToPrintList" );
        if ( !this.state.printLabels.includes( this.state.currentLabel ) ) {
            console.log( "PrintContextHandler.handleAddToPrintList pushing" );
            this.setState( {
                printLabels: this.state.printLabels.concat( this.state.currentLabel )
            } );
        }
    }

    // private _currentLabel: LabelExport<any>;
    // get currentLabel(): LabelExport<any>{
    //     return this._currentLabel;
    // }
    setCurrentLabel = ( currentLabel: LabelExport<any> ) => {
        if ( !currentLabel ){
            console.group("setCurrentLabel")
            console.warn("! currentLabel parameter received.");
            console.trace();
            console.groupEnd();
            return;
        }
        console.log( `PrintContextHandler printLabels set currentLabel`, currentLabel);
        if ( this.state.currentLabel === currentLabel ){ return ; }
        this.setState({
            currentLabel: currentLabel
        });
    }

    getCurrentLabel = (): LabelExport<any> => {
        return this.state.currentLabel;
    }

    getPrintLabels = (): LabelExport<any>[] => {
        return this.state.printLabels;
    }
    /**
     * return `true` if the label was added. else `false`
     */
    addPrintLabel = (label: LabelExport<any>): boolean => {
        if ( ! label ){
            console.warn("Attempt to add null object as label via context addPrintLabel()");
            return false;
        }
        if ( this.getPrintLabels().includes(label) ){
            return false;
        }
        this.setState({
            printLabels: this.getPrintLabels().concat([label])
        });
        return true;
    }

    state = {
        printLabels: [],
        currentLabel: null
    };

    render (){
        return (
            <PrintContext.Provider value={{
                setCurrentLabel: this.setCurrentLabel,
                getCurrentLabel: this.getCurrentLabel,
                handleAddToPrintList: this.handleAddToPrintList,
                getPrintLabels: this.getPrintLabels
            }}><div>
                {console.log("PrintContextHandler", {
                    printLabels: this.state.printLabels,
                    currentLabel: this.state.currentLabel
                })}
                {this.props.children}
                </div>
            </PrintContext.Provider>
        );
    }
}