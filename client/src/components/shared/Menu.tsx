import { Menu } from "antd";
import React from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { DashboardOutlined, ContainerOutlined, ShareAltOutlined, TagOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { PrintListButton } from "../print/PrintListButton";


export const MainMenu: React.FC<{}> = ( props ) => {
    const location = useLocation();
    return <Menu mode="horizontal" selectedKeys={[ location.pathname ]} >
        <Menu.Item key="/"><Link to="/"><DashboardOutlined />Summary</Link></Menu.Item>
        <Menu.Item key="/items"><Link to="/items"><ContainerOutlined />Items</Link></Menu.Item>
        <Menu.Item key="/networks"><Link to="/networks"><ShareAltOutlined />Network</Link></Menu.Item>
        <Menu.Item key="/labels"><Link to="/labels"><TagOutlined />Labels</Link></Menu.Item>
        <Menu.Item key="/purchases"><Link to="/purchases"><ShoppingCartOutlined />Purchases</Link></Menu.Item>
        <PrintListButton key="PrintListButton" style={{ float: 'right' }} />
    </Menu>;
};