import { lazy } from 'react';

import { MainPage, DetailPage, NotFoundPage } from './paths';

export const Routes = [
  {
    ...MainPage,
    Component: lazy(() => import(/* webpackChunkName: 'MainPage' */ 'pages/Main')),
  },
  {
    ...DetailPage,
    Component: lazy(() => import(/* webpackChunkName: 'DetailPage' */ 'pages/Detail')),
  },
  {
    ...NotFoundPage,
    Component: lazy(() => import(/* webpackChunkName: 'NotFoundPage' */ 'pages/NotFound')),
  },
];
