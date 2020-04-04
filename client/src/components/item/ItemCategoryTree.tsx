import { Item } from "../../lib/item";
import React, { useState } from "react";
import { Tree, message } from "antd";
import { DataNode } from 'rc-tree/lib/interface';
import { DownOutlined } from "@ant-design/icons";
import { useGetItemsQuery, EnumItemClassEnum } from "../../lib/types/graphql";
import { HexBoltIcon } from "../../styles/icon";
import { TreeProps } from "antd/lib/tree";

const { TreeNode } = Tree;


interface ItemCategoryTreeProps {
    // collapsed?: boolean;
    data?: Array<keyof Record<EnumItemClassEnum, string>>;
    // displayData?: ( data: T, index: number ) => React.ReactNode;
    // loading?: boolean;
}
interface ItemCategoryTreeState {
    // data?: React.FunctionComponentElement<TreeProps>[];
    data: DataNode[];
    // loading: boolean;
    // clickedItem: Item<any>;
    // modal?: React.ReactElement;
}

export type visibleHandler = ( c?: React.ReactElement ) => void;

type Intersection<A, B> = A | B;
type DataNodeCategoryMap = { [ key: string ]: Intersection<DataNode, DataNodeCategoryMap>; };


export const ItemCategoryTree = ( props: ItemCategoryTreeProps & { children?: React.ReactNode; } ) => {
    let loading = false;

    // return <ItemSearch />;

    let hiData: DataNodeCategoryMap = {};
    ( props.data ?? [ EnumItemClassEnum.ITEM_HARDWARE_FASTENER_BOLT ] ).forEach(
        key => {
            let categories = key.split( '_' );
            let editLevel: Intersection<DataNode, DataNodeCategoryMap> = hiData;
            categories.forEach( cat => {
                if ( !Object.getOwnPropertyNames( hiData ).includes( cat ) ) {
                    editLevel[ cat ] = {} as Intersection<DataNode, DataNodeCategoryMap>;
                    editLevel = editLevel[ cat ];
                }
            } );
            //     editLevel = {}
            // // checkable: true,
            // // children ?: DataNode[];
            // disabled: false,
            //     // disableCheckbox ?: boolean;
            //     icon: <HexBoltIcon />,
            //         // isLeaf ?: boolean;
            //         key: key,
            //             title: <span>{key}</span>,
            //                 selectable: true,;
            //         // switcherIcon ?: IconType;
            //         /** Set style of TreeNode. This is not recommend if you don't have any force requirement */
            //         // className ?: string;
            //         // style ?: React.CSSProperties;
            //     } as DataNode;

        } );

    const [ state, setState ] = useState<Partial<ItemCategoryTreeState>>( {
        data: [
            {
                key: 'hardware',
                title: <span>1_Hardware</span>,
                // disabled: false,
                // selectable: true,
                // checkable: true,
                children: [
                    {
                        key: 'hardware_fastener',
                        title: '2_Fastener',
                        children: [
                            {
                                key: 'hardware_fastener_bolt',
                                title: '3_Bolt',
                                isLeaf: true,
                                icon: <HexBoltIcon />,
                            },
                            {
                                key: 'hardware_fastener_screw',
                                title: '3_Screw',
                                isLeaf: true,
                                icon: <HexBoltIcon />,
                            }
                        ]
                    },
                    {
                        key: 'hardware_drill_bit',
                        title: '2_Drill Bit',
                        children: [
                            {
                                key: 'hardware_drill_bit_type_1',
                                title: '3_Type 1',
                                children: [
                                    {
                                        key: 'hardware_drill_bit_type_1_1',
                                        title: '4_Bolt',
                                        isLeaf: true,
                                        icon: <HexBoltIcon />,
                                    },
                                    {
                                        key: 'hardware_drill_bit_type_1_2',
                                        title: '4_Screw',
                                        isLeaf: true,
                                        icon: <HexBoltIcon />,
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        key: 'try3',
                        title: '2_ssssssss'
                    }
                ],
                // disableCheckbox ?: boolean;
                // icon: <HexBoltIcon />,
                // isLeaf ?: boolean;
                // switcherIcon ?: IconType;
                /** Set style of TreeNode. This is not recommend if you don't have any force requirement */
                // className ?: string;
                // style ?: React.CSSProperties;
            }, {
                key: 'tools',
                title: <span>1_Tools</span>,
                // disabled: false,
                // selectable: true,
                // checkable: true,
                children: [
                    {
                        key: 'tools_fastener',
                        title: '2_Fastener',
                        children: [
                            {
                                key: 'tools_fastener_bolt',
                                title: '3_Bolt',
                                isLeaf: true,
                                icon: <HexBoltIcon />,
                            },
                            {
                                key: 'tools_fastener_screw',
                                title: '3_Screw',
                                isLeaf: true,
                                icon: <HexBoltIcon />,
                            }
                        ]
                    },
                    {
                        key: 'tools_drill_bit',
                        title: '2_Drill Bit',
                        children: [
                            {
                                key: 'tools_drill_bit_type_1',
                                title: '3_Type 1'
                            }
                        ]
                    }
                ],
                // disableCheckbox ?: boolean;
                // icon: <HexBoltIcon />,
                // isLeaf ?: boolean;
                // switcherIcon ?: IconType;
                /** Set style of TreeNode. This is not recommend if you don't have any force requirement */
                // className ?: string;
                // style ?: React.CSSProperties;
            }

            // <TreeNode title="hardware"
            //           active={false}
            //           key="hardware" 
            //           children={[
            //               <TreeNode title="fastener"
            //                   active={false}
            //                   key="hardware_fastener" 
            //                   children={[
            //                       <TreeNode title="bolt"
            //                           active={false}
            //                           icon={<HexBoltIcon />}
            //                           key="hardware_fastener_bolt" />
            //             ]} />
            //     ]} />
        ]
    } );

    // if ( !props.data ) {
    //     let result = useGetItemsQuery();
    //     loading = result.loading;

    //     React.useEffect( () => {
    //         if ( result.data ) {
    //             setState( { data: Item.ItemFactory( result.data.items ) } );
    //             message.info( `loaded data, found ${ result.data.items.length } items` );
    //         }
    //     }, [ result.data ] );
    // }

    return <Tree
        showIcon
        defaultExpandAll
        selectable
        multiple
        // defaultSelectedKeys={[ '0-0-0' ]}
        switcherIcon={<DownOutlined />}
        onSelect={ (selectedKeys, info) => {
            console.log({selectedKeys, info});
        }}
        // showLine
        className="ItemCategoryTree ant-tree-show-line"
        treeData={state.data}
    />;
};