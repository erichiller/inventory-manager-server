import * as React from 'react';
import {
  Router,
  Route,
  // BrowserRouter as Router, 
  Link,
  withRouter
} from 'react-router-dom';
import { createBrowserHistory } from 'history';
import './styles/app.scss';
import 'antd/dist/antd.css';
import { Menu, Icon } from 'antd';
import { flatRoutes, singularFullPath } from './config/routes';

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
      <Menu mode="horizontal" >
        <Menu.Item><Link to="/"><Icon type="dashboard" />Summary</Link></Menu.Item>
        <Menu.Item><Link to="/items"><Icon type="container" />Items</Link></Menu.Item>
        <Menu.Item><Link to="/networks"><Icon type="share-alt" />Network</Link></Menu.Item>
        <Menu.Item><Link to="/labels"><Icon type="tag" />Labels</Link></Menu.Item>
        <Menu.Item><Link to="/purchases"><Icon type="shopping-cart" />Purchases</Link></Menu.Item>
        <Menu.Item style={{float: 'right'}}><Icon type="printer" />Print</Menu.Item>
      </Menu>
      <div style={{
        width: '95%',
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
    </Router>
  );
};

export default App;
