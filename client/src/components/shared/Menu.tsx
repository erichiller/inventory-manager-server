import { Menu } from "antd";
import React from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { DashboardOutlined, ContainerOutlined, ShareAltOutlined, TagOutlined, ShoppingCartOutlined, PlusCircleOutlined } from "@ant-design/icons";
import { PrintListButton } from "../print/PrintListButton";


export const MainMenu: React.FC<{}> = ( props ) => {
    const location = useLocation();
    return <Menu mode="horizontal" selectedKeys={[ location.pathname ]} >
        <Menu.Item key="/"><Link to="/"><DashboardOutlined />Summary</Link></Menu.Item>
        <Menu.Item key="/item"><Link to="/item"><ContainerOutlined />Items</Link></Menu.Item>
        <Menu.Item key="/network"><Link to="/network"><ShareAltOutlined />Network</Link></Menu.Item>
        <Menu.Item key="/label"><Link to="/label"><TagOutlined />Labels</Link></Menu.Item>
        <Menu.SubMenu key="/order" title={<Link to="/order"><ShoppingCartOutlined />Orders</Link>} >
            <Menu.Item key="/order/_/add"><Link to="/order/_/add"><PlusCircleOutlined />Add Order</Link></Menu.Item>
        </Menu.SubMenu>
        <PrintListButton key="PrintListButton" style={{ float: 'right' }} />
    </Menu>;
};