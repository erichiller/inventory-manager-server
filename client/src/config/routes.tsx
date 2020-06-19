import React from 'react';
import { matchPath } from 'react-router-dom';
import { ItemTable } from '../components/item/ItemTable';
import { LabelTable } from '../components/label/LabelTable';
import { ItemIndex } from '../components/item/Index';
import { ItemFormModal } from '../components/item/ItemFormModal';
import { OrderTable } from '../components/order/OrderTable';
import { VendorTable } from '../components/vendor/VendorTable';
import { ManufacturerTable } from '../components/manufacturer/ManufacturerTable';
import { ObjectTable } from '../components/generic/ObjectTable';

type ReactFunctionComponent = ( ( route?: RouteEntry, match?: RouterMatch ) => JSX.Element );

type ReactElementProvider = ( ( routes?, params?, children?) => React.ReactElement ) | React.ComponentType;
export interface RouteEntry {
    title: string | ReactFunctionComponent;
    subtitle: string | ReactFunctionComponent;
    breadcrumbName: string | ReactFunctionComponent;
    path: string | string[];
    exact?: boolean;
    AppMenuEntry?: ( props?: { [ key: string ]: any; } ) => React.ReactElement;
    AppMenuIcon?: () => React.ReactElement;
    ModeMenu?: () => React.ReactElement;
    main: ReactElementProvider;
    children?: RouteEntry[];
    parent?: RouteEntry;
}

export interface RouterMatch {
    isExact: boolean;
    params: { [ key: string ]: React.ReactElement; };
    path: string;
    url: string;
}

export const routes: RouteEntry[] = [
    {
        /**
         * Items
         * Note that the title and subtitle can use information from ReactRoute match
         */
        title: ( route?: RouteEntry ) => <span>{( route ? route.breadcrumbName : "" )}</span>,
        subtitle: ( route?: RouteEntry ) => <span>{( route ? route.breadcrumbName : "" )}</span>,
        breadcrumbName: "Items",
        path: [ "/item", "/item/:item_id", "/item/:item_id/:action" ],
        exact: true,
        // AppMenuEntry: () => <div></div>,
        main: () => <ItemIndex />,
        // AppMenuIcon: () => <Icon component={PathIcon as any} />,
        // AppMenuEntry: () => <span><Icon component={PathIcon as any} /><span>Network</span></span>
    },
    {
        title: "Labels",
        subtitle: "Create generic labels or reprint past ones",
        breadcrumbName: "Labels",
        path: [ "/label", "/label/:label_id" ],
        exact: true,
        // AppMenuIcon: () => <Icon component={DiggingIcon as any} />,
        // AppMenuEntry: () => <ProjectSubMenu key="ProjectsubMenu" />,
        // ModeMenu: () => <ProjectModeMenu />,
        main: () => {
            return <LabelTable />;
        }
    },
    {
        title: "Orders",
        subtitle: "View or add orders",
        breadcrumbName: "Orders",
        path: [ "/order", "/order/:order_id", "/order/:order_id/:action" ], // action can be either 'edit' or 'add'
        exact: true,
        // AppMenuIcon: () => <Icon component={DiggingIcon as any} />,
        // AppMenuEntry: () => <ProjectSubMenu key="ProjectsubMenu" />,
        // ModeMenu: () => <ProjectModeMenu />,
        main: () => {
            return <OrderTable />;
        }
    },
    {
        title: "Vendors",
        subtitle: "View or add vendors",
        breadcrumbName: "Orders",
        path: [ "/vendor", "/vendor/:vendor_id", "/vendor/:vendor_id/:action" ], // action can be either 'edit' or 'add'
        exact: true,
        // AppMenuIcon: () => <Icon component={DiggingIcon as any} />,
        // AppMenuEntry: () => <ProjectSubMenu key="ProjectsubMenu" />,
        // ModeMenu: () => <ProjectModeMenu />,
        main: () => {
            return <VendorTable />;
        }
    },
    {
        title: "Manufacturers",
        subtitle: "View or add manufacturers",
        breadcrumbName: "Orders",
        path: [ "/manufacturer", "/manufacturer/:manufacturer_id", "/manufacturer/:manufacturer_id/:action" ], // action can be either 'edit' or 'add'
        exact: true,
        // AppMenuIcon: () => <Icon component={DiggingIcon as any} />,
        // AppMenuEntry: () => <ProjectSubMenu key="ProjectsubMenu" />,
        // ModeMenu: () => <ProjectModeMenu />,
        main: () => {
            return <ManufacturerTable />;
        }
    },
    {
        title: "Objects",
        subtitle: "Add, Edit, Print for Generic Data Types",
        breadcrumbName: "Objects",
        path: [ "/object", "/object/:object_id", "/object/:object_id/:action" ], // action can be either 'edit' or 'add'
        exact: true,
        // AppMenuIcon: () => <Icon component={DiggingIcon as any} />,
        // AppMenuEntry: () => <ProjectSubMenu key="ProjectsubMenu" />,
        // ModeMenu: () => <ProjectModeMenu />,
        main: () => {
            return <ObjectTable />;
        }
    },
];


/** 
 * Utility Functions 
 * */

export const flatRoutes = forEachRoute( routes );


function forEachRoute ( routesNested: RouteEntry[], path?: string | string[], parent?: RouteEntry ): RouteEntry[] {
    let routeArr: RouteEntry[] = [];
    routesNested.forEach( route => {
        route.path = ( Array.isArray( route.path ) ? route.path : new Array( route.path ) );
        route.path.map( ( route_path => ( path && path !== "/" ? path.concat( route_path ) : route_path ) ) );
        if ( parent !== undefined ) {
            route.parent = parent;
        }
        routeArr.push( route );
        if ( route.children !== undefined ) {
            routeArr = routeArr.concat( forEachRoute( route.children, route.path, route ) );
        }

    } );
    console.log( "returning routeArr", routeArr );
    return routeArr;
}


export function currentRoute ( routes: RouteEntry[], path_location ): RouteEntry | false {
    for ( let route of routes ) {
        if ( matchPath( path_location, route ) ) {
            return route;
        }
    }
    return false;
}

export function routeParents ( routes: RouteEntry[], path_location ): RouteEntry[] {
    let route = currentRoute( routes, path_location );
    if ( route !== false ) {
        let parents: RouteEntry[] = [ route ];
        while ( route.parent !== undefined ) {
            parents.push( route.parent );
            route = route.parent;
        }
        console.log( "routeParents=", parents );
        return parents;
    }
    else {
        return [];
    }
}

function singularOrFirst ( input: string | string[] ): string {
    return typeof input === "string" ? input : input[ 0 ];
}

export function singularFullPath ( route: RouteEntry ): string {
    let fullPath = "";
    let parent;

    while ( parent = route.parent ) {
        fullPath = fullPath.concat( singularOrFirst( route.path ) );
        route = route.parent;
    }
    return fullPath ? fullPath : singularOrFirst( route.path );
}