import React from 'react';
import ReactDOM from 'react-dom/client';
import 'src/styles/index.scss';
import { RouterProvider } from 'react-router-dom';
import IndexRouter from './index.router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const queryClient = new QueryClient();

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={IndexRouter()} />
    </QueryClientProvider>
  </React.StrictMode>
);
