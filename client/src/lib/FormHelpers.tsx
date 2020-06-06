import React, { ReactText, ReactElement } from "react";
import { Tooltip } from "antd";
import { EnumUnitEnum } from "./types/graphql";
import { EnumUnitKeys } from "./types/UtilityTypes";


interface FormIconTooltipProps {
    // icon: ReactSVGElement;
    icon?: JSX.Element | React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
    text: ReactText | ReactElement;
    label: ReactText | ReactElement;
    additionalClassNames?: [ string ] | string;
}

export const FormIconTooltip: React.FC<FormIconTooltipProps> = ( { icon, text, label } ) => {
    return <Tooltip title={
        <div className="formTooltip" >
            {icon}
            < span > {text} </span>
        </div>}>
        <span style={{ cursor: 'help' }}>
            {label}
        </span>
    </Tooltip>;
};