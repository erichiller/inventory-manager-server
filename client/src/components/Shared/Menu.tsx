import { Menu } from "antd";
import React from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { DashboardOutlined, ContainerOutlined, ShareAltOutlined, TagOutlined, ShoppingCartOutlined, PlusCircleOutlined, UnorderedListOutlined, ShopOutlined, PlusSquareOutlined } from "@ant-design/icons";
import { PrintListButton } from "~components/Print/PrintListButton";
import { CurlyBracesIcon, FactoryIcon } from "../../styles/icon";
import { IconComponentT, IconElementT } from "~lib/types/common";

const MenuLink: React.FC<{icon: IconElementT; to: string; text?: string;}> = ( props ) => 
    <Link to={props.to}>{props.icon}{( props.text?<span className="ant-menu-title-content">{props.text}</span>:null )}</Link>;

export const MainMenu: React.FC<{}> = ( props ) => {
    const location = useLocation();
    return <Menu className="MainMenu" mode="horizontal" selectedKeys={[ /\/[A-Za-z0-9_-]*/.exec( location.pathname )[ 0 ] ]} >
        <Menu.Item key="/"><MenuLink to="/" icon={<DashboardOutlined />} text="Summary"/></Menu.Item>
        <Menu.Item key="/item"><MenuLink to="/item" icon={<ContainerOutlined />} text="Items" /></Menu.Item>
        {/* <Menu.Item key="/network"><Link to="/network"><ShareAltOutlined />Network</Link></Menu.Item> */}
        <Menu.Item key="/object">
            <MenuLink to="/object"
                icon={<span role="img"
                    aria-label="container"
                    className="anticon anticon-container IconButton">
                    <CurlyBracesIcon />
                </span>}
            text="Objects"
            />
        </Menu.Item>
        <Menu.SubMenu key="/label" title={<MenuLink icon={<TagOutlined />} to="/label" text="Labels" />} >
            <Menu.Item key="/label__1">
                <Menu className="MainMenuInItem" mode="horizontal"
                    selectedKeys={[ location.pathname ]}
                >
                    <Menu.Item key="/label__2">
                        <MenuLink to="/label" icon={<TagOutlined />} text="Labels"/>
                    </Menu.Item>
                    <Menu.Item key="/label/_/create"><MenuLink to="/label/_/create" icon={<PlusSquareOutlined />}/></Menu.Item>
                </Menu>
            </Menu.Item>
        </Menu.SubMenu>
        <Menu.SubMenu key="/order" title={<MenuLink icon={<ShoppingCartOutlined />} text="Order" to="/order" />} >
            <Menu.Item key="/order__1">
                <Menu className="MainMenuInItem" mode="horizontal"
                    selectedKeys={[ location.pathname ]}
                >
                    <Menu.Item key="/order__2"><MenuLink icon={<UnorderedListOutlined/>} text="Orders" to="/order" /></Menu.Item>
                    <Menu.Item key="/order__3"><MenuLink to="/order/_/add" icon={<PlusSquareOutlined />}/></Menu.Item>
                </Menu>
            </Menu.Item>
            <Menu.Item key="/vendor">
                <Menu className="MainMenuInItem" mode="horizontal"
                    selectedKeys={[ location.pathname ]}
                >
                    <Menu.Item key="/vendor"><MenuLink to="/vendor" icon={<ShopOutlined />} text="Vendors" /></Menu.Item>
                    <Menu.Item key="/vendor/_/add"><MenuLink to="/vendor/_/add" icon={<PlusSquareOutlined />}/></Menu.Item>
                </Menu>
            </Menu.Item>
            <Menu.Item key="/manufacturer">
                <Menu className="MainMenuInItem" mode="horizontal"
                    style={{ width: 150 }}
                    selectedKeys={[ location.pathname ]}
                >
                    <Menu.Item key="/manufacturer"><MenuLink to="/manufacturer"
                        icon={<span role="img" aria-label="container" className="anticon anticon-container IconButton"><FactoryIcon /></span>}
                        text="Manufacturers"/></Menu.Item>
                    <Menu.Item key="/manufacturer/_/add"><MenuLink to="/manufacturer/_/add" icon={<PlusSquareOutlined />}/></Menu.Item>
                </Menu>
            </Menu.Item>
        </Menu.SubMenu>
        {/* TODO: Admin ?? ; Icon management, User management, Vendor Management ?? */}
        {/* TODO: User Auth ; Log In / Log Out */}
        <PrintListButton key="PrintListButton" style={{ position: 'absolute', right: 0 }} />
    </Menu>;
};