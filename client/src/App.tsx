import * as React from 'react';
import {
    Router,
    Route,
    Switch,
    Redirect,
} from 'react-router-dom';
import { createBrowserHistory } from 'history';
import './styles/app.scss';
import { flatRoutes, singularFullPath } from './config/routes';
import { PrintContextHandler } from './components/Print/PrintContextHandler';
import { MainMenu } from './components/Shared/Menu';

export const history = createBrowserHistory( {
    basename: '', // The base URL of the app (see below)
    forceRefresh: false, // Set true to force full page refreshes
    keyLength: 6, // The length of location.key
    // A function to use to confirm navigation with the user (see below)
    getUserConfirmation: ( message, callback ) => callback( window.confirm( message ) )
} );


// export const _history: string[] = [];

// history.listen( ( location, action ) => {
//     console.log(
//         `The current URL is ${ location.pathname }${ location.search }${ location.hash }`
//     );
//     console.log( `The last navigation action was ${ action }` );
//     _history.push( "eric was here" );
// } );

const App = () => {
    return (
        <Router history={history} >
            <PrintContextHandler>
                <MainMenu />

                <div style={{
                    width: '98%',
                    margin: '0 auto'
                }} >
                    <Switch>
                        {flatRoutes.map( ( route ) => {
                            console.log( `flatmap; ${ route.path }`, route, singularFullPath( route ) );
                            return <Route
                                key={singularFullPath( route )}
                                path={route.path}
                                exact={route.exact}
                                component={route.main}
                            // children={<div>{route.path}{console.log("this and that")}</div>}
                            />;
                        } )}
                        {/* Evaluate this last */}
                        <Redirect from="/:item_id/:action" to="/item/:item_id/:action" />
                        <Redirect from="/:item_id" to="/item/:item_id/edit" />
                        {/* TODO: use edit action just until I have some sort of view interface */}
                    </Switch>
                </div>
            </PrintContextHandler>
        </Router>
    );
};

export default App;
