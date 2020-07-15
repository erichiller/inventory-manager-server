import React, { ReactText, ReactElement } from "react";
import { Tooltip } from "antd";
import { EnumUnitEnum, InsertIconMutation } from "./types/graphql";
import { EnumUnitKeys, TRecursiveDataWrap } from "./types/UtilityTypes";
import moment from "moment";
import { transparentLog } from "~lib/UtilityFunctions";


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


/**
 * Wrap each child object that is a property of the parent object into a `{data: <ChildObject}` wrapper object
 * @param inputObj object without each child being within a `{data: <ChildObject>}` wrapper
 * @see `UtilityTypes.spec.ts`
 * @example
 *  inputObj = {
 *      propA: 'A',
 *      propB: {
 *          childPropBA: 'B-A'
 *      },
 *      propC: {
 *          childPropCA: 'C-A'
 *          childPropCB: {
 *              childPropCBA: 'C-B-A'
 *          }
 *      },
 *      propD: [
 *          {
 *              childPropDOne: 'C-A'
 *          }
 *      ]
 *  }
 *  // returns
 *  return {
 *      propA: 'A',
 *      propB: {
 *          data: {
 *              childPropBA: 'B-A'
 *          }
 *      },
 *      propC: {
 *          data: {
 *              childPropCA: 'C-A',
 *              childPropCB: {
 *                  data: {
 *                      childPropCBA: 'C-B-A'
 *                  }
 *              }
 *          }
 *      },
 *      propD: {
 *          data: [
 *              {
 *                  childPropDOne: 'C-A'
 *              }
 *          ]
 *      }
 *  }
 */
export function encapsulateChildObjectsIntoDataProp<T extends object> ( inputObj: T ): TRecursiveDataWrap<T> {
    transparentLog( { m: "encapsulateChildObjectsIntoDataProps", e: 'input' }, inputObj );
    // will continue until all non-primitive elements/properties have been encapsulated in `{data: obj}`
    function wrap ( el: any, dataWrap: boolean = true ): TRecursiveDataWrap<any> {
        if ( typeof el === "undefined" ) {
            return el;
        } else if ( el === null ) {
            return el as null;
        } else if ( Array.isArray( el ) ) {
            // console.log( `is Array`, el );
            return { data: el.map( arrayElement => wrap( arrayElement, false ) ) };
        } else if ( moment.isMoment( el ) ) {
            // console.log( `is Moment`, el, " >>>> ", el.toISOString() );
            return el.toISOString();
        } else if ( typeof el === "object" ) {
            // console.log( "****************************************\nis object", el );
            for ( let k in el ) {
                // console.log( "is object, k: ", k, "\nof el:", el );
                el[ k ] = wrap( el[ k ] );
            }
            if ( dataWrap ) {
                return { data: el };
            }
            return el;
            // }
        } else {
            // console.log( `is default`, el );
            return el;
            // do nothing
        }
    }

    return transparentLog( { m: "encapsulateChildObjectsIntoDataProps", e: 'output' }, wrap( inputObj, false ) );
}
