import * as React from 'react';
import {
    Router,
    Route,
} from 'react-router-dom';
import { createBrowserHistory } from 'history';
import './styles/app.scss';
import { flatRoutes, singularFullPath } from './config/routes';
import { PrintContextHandler } from './components/print/PrintContextHandler';
import { MainMenu } from './components/shared/Menu';

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
                </div>
            </PrintContextHandler>
        </Router>
    );
};

export default App;
