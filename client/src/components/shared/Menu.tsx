import { Menu } from "antd";
import React from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { DashboardOutlined, ContainerOutlined, ShareAltOutlined, TagOutlined, ShoppingCartOutlined, PlusCircleOutlined, UnorderedListOutlined, ShopOutlined, PlusSquareOutlined } from "@ant-design/icons";
import { PrintListButton } from "../print/PrintListButton";
import { CurlyBracesIcon, FactoryIcon } from "../../styles/icon";


export const MainMenu: React.FC<{}> = ( props ) => {
    const location = useLocation();
    return <Menu className="MainMenu" mode="horizontal" selectedKeys={[ /\/[A-Za-z0-9_-]*/.exec(location.pathname)[0] ]} >
        <Menu.Item key="/"><Link to="/"><DashboardOutlined />Summary</Link></Menu.Item>
        <Menu.Item key="/item"><Link to="/item"><ContainerOutlined />Items</Link></Menu.Item>
        {/* <Menu.Item key="/network"><Link to="/network"><ShareAltOutlined />Network</Link></Menu.Item> */}
        <Menu.Item key="/object"><Link to="/object">
            <span role="img" aria-label="container" className="anticon anticon-container IconButton"><CurlyBracesIcon /></span>Objects</Link></Menu.Item>
        <Menu.Item key="/label"><Link to="/label"><TagOutlined />Labels</Link></Menu.Item>
        <Menu.SubMenu key="/order" title={<Link to="/order"><ShoppingCartOutlined />Orders</Link>} >
            <Menu.Item key="/order">
                <Menu className="MainMenuInItem" mode="horizontal"
                    selectedKeys={[ location.pathname ]}
                >
                    <Menu.Item key="/order"><Link to="/order"><UnorderedListOutlined />Orders</Link></Menu.Item>
                    <Menu.Item key="/order/_/add"><Link to="/order/_/add"><PlusSquareOutlined /></Link></Menu.Item>
                </Menu>
            </Menu.Item>
            <Menu.Item key="/vendor">
                <Menu className="MainMenuInItem" mode="horizontal"
                    selectedKeys={[ location.pathname ]}
                >
                    <Menu.Item key="/vendor"><Link to="/vendor"><ShopOutlined />Vendors</Link></Menu.Item>
                    <Menu.Item key="/vendor/_/add"><Link to="/vendor/_/add"><PlusSquareOutlined /></Link></Menu.Item>
                </Menu>
            </Menu.Item>
            <Menu.Item key="/manufacturer">
                <Menu className="MainMenuInItem" mode="horizontal"
                    style={{width: 150}}
                    selectedKeys={[ location.pathname ]}
                >
                    <Menu.Item key="/manufacturer"><Link to="/manufacturer">
                        <span role="img" aria-label="container" className="anticon anticon-container IconButton"><FactoryIcon /></span>Manufacturers</Link></Menu.Item>
                    <Menu.Item key="/manufacturer/_/add"><Link to="/manufacturer/_/add"><PlusSquareOutlined /></Link></Menu.Item>
                </Menu>
            </Menu.Item>
        </Menu.SubMenu>
        {/* TODO: Admin ?? ; Icon management, User management, Vendor Management ?? */}
        {/* TODO: User Auth ; Log In / Log Out */}
        <PrintListButton key="PrintListButton" style={{ float: 'right' }} />
    </Menu>;
};