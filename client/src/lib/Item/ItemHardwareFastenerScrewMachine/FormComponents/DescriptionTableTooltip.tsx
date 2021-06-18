import React, { useState, useEffect } from "react";


import { toTitleCase, IQuery } from "~lib/UtilityFunctions";;
import { Query } from "../../../types/graphql";
import { Spin, Tooltip } from "antd";

interface DescriptionTableTooltipPropsWithQuery  {
    query: IQuery<any, any>;
    width?: number;
    tableData?: false;
    title: string;
}
interface DescriptionTableTooltipPropsWithTableData {
    tableData: Record<string, string | React.ReactElement>;
    width?: number;
    query?: false;
    title: string;
}

type DescriptionTableTooltipProps = DescriptionTableTooltipPropsWithQuery | DescriptionTableTooltipPropsWithTableData;
/**
 * Simple table listing out keys to values for defining data
 */
export const DescriptionTableTooltip = ( props: DescriptionTableTooltipProps ) => {
    const { title } = props;
    let width: number = props.width ?? 550;
    const [ tableData, setTableData ] = useState<Record<string, string | React.ReactElement>>( props.tableData ? props.tableData : {} );
    if ( props.query ){
        const { data, error, loading } = props.query( {} );
        console.log( data );
        useEffect( () => {
            if ( data ) {
                let resultData = data[ Object.keys( data )[ 0 ] ];
                let _tableData = tableData;
                resultData.forEach( el => {
                    console.log( {el} );
                    _tableData[ el.id ] = el.description;
                } );
                setTableData( _tableData );
                console.log( {resultData, _tableData} );
            }
        }, [data] );
    }
    if ( ! tableData ){ 
        return <Spin spinning={true} />;
    }
    console.log( {tableData} );
    return <Tooltip overlayStyle={{maxWidth: width+5 }} title={() => <div className="descriptionTable" style={{ width: width }}>{Object.keys( tableData ).map( el => [ <span key={`id_${el}`}>{el}</span>,<span key={`data_${el}`}>{tableData[el]}</span>] )}</div>} ><span>{title}</span></Tooltip>;
};