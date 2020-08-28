import * as React from 'react';
import { ApolloProvider } from '@apollo/client/react';
import {
    Router,
    Route,
    Switch,
    Redirect,
} from 'react-router-dom';
import { flatRoutes, singularFullPath } from './config/routes';
import { PrintContextHandler } from './components/Print/PrintContextHandler';
import { MainMenu } from './components/Shared/Menu';

import { history, apolloClient } from '~/Apollo';

const App = () => {
    return (
        <ApolloProvider client={apolloClient}>
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

        </ApolloProvider>
    );
};

export default App;
