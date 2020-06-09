import { Menu } from "antd";
import React from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { DashboardOutlined, ContainerOutlined, ShareAltOutlined, TagOutlined, ShoppingCartOutlined, PlusCircleOutlined, UnorderedListOutlined, ShopOutlined } from "@ant-design/icons";
import { PrintListButton } from "../print/PrintListButton";
import { CurlyBracesIcon } from "../../styles/icon";


export const MainMenu: React.FC<{}> = ( props ) => {
    const location = useLocation();
    return <Menu className="MainMenu" mode="horizontal" selectedKeys={[ location.pathname ]} >
        <Menu.Item key="/"><Link to="/"><DashboardOutlined />Summary</Link></Menu.Item>
        <Menu.Item key="/item"><Link to="/item"><ContainerOutlined />Items</Link></Menu.Item>
        {/* <Menu.Item key="/network"><Link to="/network"><ShareAltOutlined />Network</Link></Menu.Item> */}
        <Menu.Item key="/objects"><Link to="/object">
            <span role="img" aria-label="container" className="anticon anticon-container IconButton"><CurlyBracesIcon /></span>Objects</Link></Menu.Item>
        <Menu.Item key="/label"><Link to="/label"><TagOutlined />Labels</Link></Menu.Item>
        <Menu.SubMenu key="/order" title={<Link to="/order"><ShoppingCartOutlined />Orders</Link>} >
            <Menu.Item key="/order"><Link to="/order"><UnorderedListOutlined />List</Link></Menu.Item>
            <Menu.Item key="/order/_/add"><Link to="/order/_/add"><PlusCircleOutlined />Add Order</Link></Menu.Item>
            <Menu.Item key="/vendor"><Link to="/vendor"><ShopOutlined />Vendors</Link></Menu.Item>
        </Menu.SubMenu>
        {/* TODO: Admin ?? ; Icon management, User management, Vendor Management ?? */}
        {/* TODO: User Auth ; Log In / Log Out */}
        <PrintListButton key="PrintListButton" style={{ float: 'right' }} />
    </Menu>;
};