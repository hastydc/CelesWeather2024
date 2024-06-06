import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import IndexRouter from './index.router';
import 'src/styles/index.scss';
import './index.i18n';

/**
 * root App will be injected in this html element provided
 */
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

/**
 * queryClient to manage requests
 */
const queryClient = new QueryClient();

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={IndexRouter()} />
    </QueryClientProvider>
  </React.StrictMode>
);
