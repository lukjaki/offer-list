/* eslint-disable react/no-multi-comp */
/* eslint-disable react/display-name */
import React, { lazy } from 'react';
import { Redirect } from 'react-router-dom';
import { OffersLayout } from './layouts'

interface Route {
    route?: string,
    path?: string,
    exact?: boolean,
    component: any,
    routes?: Route[]
}

const routes: Route[] = [
    {
        path: '/',
        exact: true,
        component: () => <Redirect to="/offers"/>
    },
    {
        path: '*',
        component: OffersLayout,
        routes: [
            {
                path: '/offers',
                exact: true,
                component: lazy(() => import('./views/OfferList'))
            },
            {
                path: '/offers/:id',
                exact: true,
                component: lazy(() => import('./views/OfferDetails'))
            },
            {
                component: () => <Redirect to="/offers" />
            }
        ]
    },
];

export default routes;