import React, { ReactText, ReactElement } from "react";
import { Tooltip } from "antd";
import { EnumUnitEnum, InsertIconMutation } from "./types/graphql";
import { EnumUnitKeys, TRecursiveDataWrap } from "./types/UtilityTypes";


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
 *              childPropCA: 'C-A'
 *              childPropCB: {
 *
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
    // will continue until all non-primitive elements/properties have been encapsulated in `{data: obj}`
    function wrap<C extends object | Array<object>> ( o: C ): TRecursiveDataWrap<C> {
        let [ arr, isArray ]: [ Array<object>, boolean ] = ( Array.isArray( o ) ? [o, true] : [ [ o ], false ] );
        arr.map( el => {
            if ( typeof el === "object" ) {
                for ( let k in el ) {
                    if ( Array.isArray( el[ k ] ) ) {
                        el[ k ] = { data: wrap( el[ k ] ) };
                    } else if ( typeof el[ k ] === "object" ) {
                        el[ k ] = { data: wrap( el[ k ] ) };
                    } else {
                        el[ k ] = el[ k ];
                    }
                }
            }
            return el;
        })
        if ( ! isArray ){
            return arr[0] as TRecursiveDataWrap<C>;
        }
        return arr as TRecursiveDataWrap<C>;
    }
    return wrap(inputObj);
}

