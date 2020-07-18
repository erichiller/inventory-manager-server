import React, { useState } from 'react';
import { Popover, Menu } from 'antd';
import { PopoverProps } from 'antd/lib/popover';
import { IconElementT } from '~lib/types/common';
import { MenuItemProps } from 'antd/lib/menu/MenuItem';

interface PopOverMenuItemProps extends MenuItemProps {
    icon: IconElementT;
    text: string | React.ReactText;
}

interface PopOverMenuProps extends PopoverProps {
    menuItems: PopOverMenuItemProps[];
    wrappedContent: {
        icon: IconElementT;
        text: string | React.ReactText;
    };
}

export const PopOverMenu: React.FC<PopOverMenuProps> = ( props ) => {
    const [ visible, setVisible ] = useState<boolean>( false );
    return <Popover
        placement="bottomRight"
        onVisibleChange={() => setVisible( true )}
        visible={visible}
        trigger="contextMenu"
        overlayClassName="ItemCategoryContextMenu"
        content={
            <Menu>
                { props.menuItems.map( ( menuItem, index ) => 
                    <Menu.Item 
                        key={index}
                        icon={menuItem.icon} 
                        onClick={
                            ( info ) => {
                                menuItem.onClick( info );
                                setVisible( false );
                            }
                        }>
                            {menuItem.text}
                    </Menu.Item>
                )}
            </Menu>}
    >
        <span>
            {props.wrappedContent.icon}
            {props.wrappedContent.text}
        </span>
    </Popover>;
};
