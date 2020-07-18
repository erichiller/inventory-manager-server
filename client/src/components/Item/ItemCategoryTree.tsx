import { Item } from "~lib/Item";
import React, { useState } from "react";
import { Tree } from "antd";
import { DataNode } from 'rc-tree/lib/interface';
import { DownOutlined, PlusOutlined } from "@ant-design/icons";
import { EnumItemClassEnum } from "~lib/types/graphql";
import { TreeProps } from "antd/lib/tree";
import { toTitleCase } from "~lib/UtilityFunctions";
import { ItemFormModal } from "./ItemFormModal";
import { PopOverMenu } from "~components/Shared/PopOverMenu";

interface ItemCategoryTreeProps extends Pick<TreeProps, 'onSelect'> {
    data?: Array<keyof Record<EnumItemClassEnum, string>>;
}

export type visibleHandler = ( c?: React.ReactElement ) => void;

export const ItemCategoryTree = ( props: ItemCategoryTreeProps & { children?: React.ReactNode; } ) => {
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
                        title: <PopOverMenu
                            placement="bottomRight"
                            trigger="contextMenu"
                            overlayClassName="ItemCategoryContextMenu"
                            menuItems={[
                                {
                                    icon: <PlusOutlined />,
                                    onClick: () => setModal( getAddModal( cls ) ),
                                    text: `Add ${toTitleCase ( cat )}`
                                }
                            ]}
                            wrappedContent={{
                                icon: cls ? <cls.icon /> : null,
                                text: toTitleCase( cat )
                            }}
                        />,
                        children: []
                    } as DataNode;
                    editLevel.push( newNode );
                }
                editLevel = editLevel.find( node => node.key === pathString ).children;
            } );
        } );

    return <React.Fragment>
        <Tree
            showIcon
            defaultExpandAll
            selectable
            multiple
            // defaultSelectedKeys={[ '0-0-0' ]}
            switcherIcon={<DownOutlined />}
            onSelect={props.onSelect}
            className="ItemCategoryTree ant-tree-show-line"
            treeData={hiData}
        />
        {modal}
    </React.Fragment>;
};
