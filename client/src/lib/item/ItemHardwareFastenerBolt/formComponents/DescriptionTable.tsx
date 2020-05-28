import React, { useState } from "react";


import { toTitleCase } from "../../../UtilityFunctions";

interface DescriptionTableProps {
    tableData: Record<string, string | React.ReactElement>;
    width?: number;
}
/**
 * Simple table listing out keys to values for defining data
 */
export const DescriptionTable = ( props: DescriptionTableProps ) => {
    const { tableData, width } = props;
    return (
        <div className="descriptionTable" style={{width: width ?? 250}}>
            { Object.keys(tableData).map( key => {
                return <React.Fragment>
                    <span>{key}</span>
                    <span>{tableData[key]}</span>
                </React.Fragment>;
            })}
        </div>
    );
};