import { Item } from "~lib/Item";
import React, { useState } from "react";
import { Tree, Popover, Menu } from "antd";
import { DataNode } from 'rc-tree/lib/interface';
import { DownOutlined, PlusOutlined } from "@ant-design/icons";
import { EnumItemClassEnum } from "~lib/types/graphql";
import { TreeProps } from "antd/lib/tree";
import { toTitleCase } from "~lib/UtilityFunctions";
import { ItemFormModal } from "./ItemFormModal";

const { TreeNode } = Tree;


interface ItemCategoryTreeProps extends Pick<TreeProps, 'onSelect'> {
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

export const ItemCategoryTree = ( props: ItemCategoryTreeProps & { children?: React.ReactNode; } ) => {
    // let loading = false;
    const [ modal, setModal ] = useState<React.ReactElement>();


    function getAddModal<T extends typeof Item> ( cls: T ): React.ReactElement {
        return <ItemFormModal
            addComponent={cls.addComponent}
            mutationHandler={cls.addHandler}
        />;
    };

    let hiData: DataNode[] = [];
    ( props.data ?? Object.getOwnPropertyNames( EnumItemClassEnum ) ).forEach(
        key => {
            let categories = key.split( '_' );
            let editLevel: DataNode[] = hiData;
            let path: string[] = [];
            categories.forEach( cat => {
                path.push( cat );
                let pathString = path.join( '_' ).toLowerCase();
                if ( !editLevel.find( node => node.key === pathString ) ) {
                    let cls = Item.getClassForType( pathString as keyof typeof EnumItemClassEnum );
                    console.log( { cls } );
                    let newNode = {
                        key: pathString,
                        title: <Popover
                            placement="bottomRight"
                            trigger="contextMenu"
                            overlayClassName="ItemCategoryContextMenu"
                            content={
                                <Menu>
                                    <Menu.Item icon={<PlusOutlined />} onClick={() => setModal( getAddModal( cls ) )}>Add {toTitleCase( cat )}</Menu.Item>
                                </Menu>}
                        >
                            <span>
                                {cls ? < cls.icon /> : null}{toTitleCase( cat )}
                            </span>
                        </Popover>,
                        // icon: 
                        children: []
                    } as DataNode;
                    editLevel.push( newNode );
                }
                editLevel = editLevel.find( node => node.key === pathString ).children;
            } );
        } );

    const [ state, setState ] = useState<Partial<ItemCategoryTreeState>>( {
        data: hiData
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



    return <React.Fragment>
        <Tree
            showIcon
            defaultExpandAll
            selectable
            multiple
            // defaultSelectedKeys={[ '0-0-0' ]}
            switcherIcon={<DownOutlined />}
            onSelect={props.onSelect}
            // onRightClick={ ( info ) =>  } // TODO: context menu
            // showLine
            className="ItemCategoryTree ant-tree-show-line"
            treeData={state.data}
        />
        {modal}
    </React.Fragment>;
};




// type DataNodeCategoryMap = { [ key: string ]: Intersection<DataNode, DataNodeCategoryMap>; };


// enum EnumItemClassEnum {
//     item_hardware_fastener_screw_machine = "item_hardware_fastener_screw_machine",
//     ITEM_HARDWARE_FASTENER_SCREW = "item_hardware_fastener_screw",
//     ITEM_HARDWARE_FASTENER_WASHER = "item_hardware_fastener_washer",
//     ITEM_TOOL_CONSUMABLES_SAW = "item_tool_consumables_saw",
//     ITEM_TOOL_CONSUMABLES_TAP = "item_tool_consumables_tap",
//     ITEM_TOOL_PART_CHUCK = "item_tool_part_chuck",
// }


        // [
        //     {
        //         key: 'hardware',
        //         title: <span>1_Hardware</span>,
        //         // disabled: false,
        //         // selectable: true,
        //         // checkable: true,
        //         children: [
        //             {
        //                 key: 'hardware_fastener',
        //                 title: '2_Fastener',
        //                 children: [
        //                     {
        //                         key: 'hardware_fastener_bolt',
        //                         title: '3_Bolt',
        //                         isLeaf: true,
        //                         icon: <HexBoltIcon />,
        //                     },
        //                     {
        //                         key: 'hardware_fastener_screw',
        //                         title: '3_Screw',
        //                         isLeaf: true,
        //                         icon: <HexBoltIcon />,
        //                     }
        //                 ]
        //             },
        //             {
        //                 key: 'hardware_drill_bit',
        //                 title: '2_Drill Bit',
        //                 children: [
        //                     {
        //                         key: 'hardware_drill_bit_type_1',
        //                         title: '3_Type 1',
        //                         children: [
        //                             {
        //                                 key: 'hardware_drill_bit_type_1_1',
        //                                 title: '4_Bolt',
        //                                 isLeaf: true,
        //                                 icon: <HexBoltIcon />,
        //                             },
        //                             {
        //                                 key: 'hardware_drill_bit_type_1_2',
        //                                 title: '4_Screw',
        //                                 isLeaf: true,
        //                                 icon: <HexBoltIcon />,
        //                             }
        //                         ]
        //                     }
        //                 ]
        //             },
        //             {
        //                 key: 'try2',
        //                 title: '2_ssssssss'
        //             }
        //         ],
        //         // disableCheckbox ?: boolean;
        //         // icon: <HexBoltIcon />,
        //         // isLeaf ?: boolean;
        //         // switcherIcon ?: IconType;
        //         /** Set style of TreeNode. This is not recommend if you don't have any force requirement */
        //         // className ?: string;
        //         // style ?: React.CSSProperties;
        //     }, {
        //         key: 'tools',
        //         title: <span>1_Tools</span>,
        //         // disabled: false,
        //         // selectable: true,
        //         // checkable: true,
        //         children: [
        //             {
        //                 key: 'tools_fastener',
        //                 title: '2_Fastener',
        //                 children: [
        //                     {
        //                         key: 'tools_fastener_bolt',
        //                         title: '3_Bolt',
        //                         isLeaf: true,
        //                         icon: <HexBoltIcon />,
        //                     },
        //                     {
        //                         key: 'tools_fastener_screw',
        //                         title: '3_Screw',
        //                         isLeaf: true,
        //                         icon: <HexBoltIcon />,
        //                     }
        //                 ]
        //             },
        //             {
        //                 key: 'tools_drill_bit',
        //                 title: '2_Drill Bit',
        //                 children: [
        //                     {
        //                         key: 'tools_drill_bit_type_1',
        //                         title: '3_Type 1'
        //                     }
        //                 ]
        //             }
        //         ],
        //         // disableCheckbox ?: boolean;
        //         // icon: <HexBoltIcon />,
        //         // isLeaf ?: boolean;
        //         // switcherIcon ?: IconType;
        //         /** Set style of TreeNode. This is not recommend if you don't have any force requirement */
        //         // className ?: string;
        //         // style ?: React.CSSProperties;
        //     }

        //     // <TreeNode title="hardware"
        //     //           active={false}
        //     //           key="hardware" 
        //     //           children={[
        //     //               <TreeNode title="fastener"
        //     //                   active={false}
        //     //                   key="hardware_fastener" 
        //     //                   children={[
        //     //                       <TreeNode title="bolt"
        //     //                           active={false}
        //     //                           icon={<HexBoltIcon />}
        //     //                           key="hardware_fastener_bolt" />
        //     //             ]} />
        //     //     ]} />
        // ]

