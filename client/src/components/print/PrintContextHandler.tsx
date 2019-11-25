import React from 'react';
import { LabelExport } from '../../lib/LabelConstituent';

export const PrintContext = React.createContext( {
    printLabels: []
} as PrintContextHandlerState );

interface PrintContextHandlerState {
    printLabels: LabelExport < any > [];
    currentLabel: LabelExport<any>;
    handleAddToPrintList: () => void;
    setCurrentLabel: (currentLabel: LabelExport<any>) => void;
}

export class PrintContextHandler extends React.Component<{},PrintContextHandlerState> {
    static contextType = PrintContext;
    declare context: React.ContextType<typeof PrintContext>;

    handleAddToPrintList = () => {
        console.log( "PrintContextHandler.handleAddToPrintList" );
        if ( !this.context.printLabels.includes( this.context.currentLabel ) ) {
            console.log( "PrintContextHandler.handleAddToPrintList pushing" );
            this.setState( {
                printLabels: this.state.printLabels.concat( this.context.currentLabel )
            } );
        }
    }

    // private _currentLabel: LabelExport<any>;
    // get currentLabel(): LabelExport<any>{
    //     return this._currentLabel;
    // }
    setCurrentLabel = ( currentLabel: LabelExport<any> ) => {
        console.log( `PrintContextHandler printLabels set currentLabel ( ${currentLabel} );`);
        if ( this.state.currentLabel === currentLabel ){ return ; }
        this.setState({
            currentLabel: currentLabel
        });
    }

    state = {
        printLabels: [],
        currentLabel: null,
        handleAddToPrintList: this.handleAddToPrintList,
        setCurrentLabel: this.setCurrentLabel
    }

    render (){
        return (
            <PrintContext.Provider value={{...this.state}}><div>
                {console.log("PrintContextHandler printLabels", this.context.printLabels)}
                {this.props.children}
                </div>
            </PrintContext.Provider>
        );
    }
}