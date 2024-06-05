import React from 'react';
import ReactDOM from 'react-dom/client';
import 'src/styles/index.scss';
import { RouterProvider } from 'react-router-dom';
import IndexRouter from './index.router';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <RouterProvider router={IndexRouter()} />
  </React.StrictMode>
);
