import React, { useState, useEffect } from "react";


import { toTitleCase, IQuery } from "../../../UtilityFunctions";
import { Query } from "../../../types/graphql";
import { Spin, Tooltip } from "antd";

// type DescriptionTableProps = {
//     query: IQuery;
// } | {
//     tableData: Record<string, string | React.ReactElement>;
// } & {
//     width?: number;
//     };
interface DescriptionTablePropsWithQuery  {
    query: IQuery;
    width?: number;
    tableData?: undefined;
    title: string;
}
interface DescriptionTablePropsWithTableData {
    tableData: Record<string, string | React.ReactElement>;
    width?: number;
    query?: undefined;
    title: string;
}

type DescriptionTableProps = DescriptionTablePropsWithQuery | DescriptionTablePropsWithTableData;
/**
 * Simple table listing out keys to values for defining data
 */
export const DescriptionTable = ( props: DescriptionTableProps ) => {
    const { title } = props;
    let width: number = props.width ?? 500;
    // TODO: rename to DescriptionTableTooltip;
    // TODO: get bordered between elements 1 -> length -1 (in between not on top, bottom of whole div)
    const [ tableData, setTableData ] = useState<Record<string, string | React.ReactElement>>({});
    if ( props.query ){
        const { data, error, loading } = props.query();
        console.log(data);
        useEffect( () => {
            if ( data ) {
                let resultData = data[ Object.keys( data )[ 0 ] ];
                let _tableData = tableData;
                resultData.forEach( el => {
                    console.log({el});
                    _tableData[ el.id ] = el.description;
                });
                setTableData(_tableData);
                console.log({resultData, _tableData});
            }
        }, [data] );
    }
    if ( ! tableData ){ 
        return <Spin spinning={true} />
    }
    console.log({tableData});
    return <Tooltip overlayStyle={{maxWidth: width+5 }} title={() => <div className="descriptionTable" style={{ width: width }}>{Object.keys( tableData ).map( el => [ <span>{el}</span>,<span>{tableData[el]}</span>])}</div>} ><span>{title}</span></Tooltip>;
};