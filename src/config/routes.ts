import { lazy } from 'react';

import type { Route } from '@nxweb/react';

export const routes: Route[] = [
  {
    element: lazy(() => import('@views/errors.js')),
    fallback: true,
    title: '404: Not Found'
  }
];
