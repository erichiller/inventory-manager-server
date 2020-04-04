import * as React from 'react';
import {
    Router,
    Route,
    // BrowserRouter as Router, 
    Link
} from 'react-router-dom';
import { createBrowserHistory } from 'history';
import './styles/app.scss';
import 'antd/dist/antd.css';
import { Menu } from 'antd';
import { flatRoutes, singularFullPath } from './config/routes';
import { PrintListButton } from './components/print/PrintListButton';
import { PrintContextHandler } from './components/print/PrintContextHandler';
import { DashboardOutlined, ContainerOutlined, ShareAltOutlined, TagOutlined, ShoppingCartOutlined } from '@ant-design/icons';

export const history = createBrowserHistory( {
    basename: '', // The base URL of the app (see below)
    forceRefresh: false, // Set true to force full page refreshes
    keyLength: 6, // The length of location.key
    // A function to use to confirm navigation with the user (see below)
    getUserConfirmation: ( message, callback ) => callback( window.confirm( message ) )
} );


export const _history: string[] = [];

history.listen( ( location, action ) => {
    console.log(
        `The current URL is ${ location.pathname }${ location.search }${ location.hash }`
    );
    console.log( `The last navigation action was ${ action }` );
    _history.push( "eric was here" );
} );

const App = () => {
    return (
        <Router history={history} >
            <PrintContextHandler>
                <Menu mode="horizontal" >
                    <Menu.Item><Link to="/"><DashboardOutlined />Summary</Link></Menu.Item>
                    <Menu.Item><Link to="/items"><ContainerOutlined />Items</Link></Menu.Item>
                    <Menu.Item><Link to="/networks"><ShareAltOutlined />Network</Link></Menu.Item>
                    <Menu.Item><Link to="/labels"><TagOutlined />Labels</Link></Menu.Item>
                    <Menu.Item><Link to="/purchases"><ShoppingCartOutlined />Purchases</Link></Menu.Item>
                    <PrintListButton key="PrintListButton" style={{ float: 'right' }} />
                </Menu>
                <div style={{
                    width: '98%',
                    margin: '0 auto'
                }} >
                    {flatRoutes.map( ( route ) => {
                        console.log( `flatmap; ${ route.path }`, route, singularFullPath( route ) );
                        // return <Route path="/news2"><div>ERIC2</div></Route>
                        return <Route
                            key={singularFullPath( route )}
                            path={route.path}
                            exact={route.exact}
                            component={route.main}
                        // children={<div>{route.path}{console.log("this and that")}</div>}
                        />;
                    } )}
                </div>
            </PrintContextHandler>
        </Router>
    );
};

export default App;
