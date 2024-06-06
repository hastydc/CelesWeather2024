/**
 * File to setup routes
 */
import { createBrowserRouter } from 'react-router-dom';
import Layout from './layout/Layout';
import { RoutePath } from './models/enums/routePath.enum';
import { lazy } from 'react';

/**
 * Lay load for page components
 */
const AirPollution = lazy(
  () => import('./features/air-pollution/AirPollution')
);
const CurrentWeather = lazy(
  () => import('./features/current-weather/CurrentWeather')
);
const Forecast = lazy(() => import('./features/forecast/Forecast'));
const NotAllowed = lazy(() => import('./features/not-allowed/NotAllowed'));

/**
 * Provides the routes for app
 * @returns {Remix router} response
 */
const IndexRouter = () =>
  createBrowserRouter(
    [
      {
        element: <Layout />,
        children: [
          {
            path: RoutePath.HOME,
            element: <AirPollution />,
          },
          {
            path: RoutePath.CURRENT_WEATHER,
            element: <CurrentWeather />,
          },
          {
            path: RoutePath.FORECAST,
            element: <Forecast />,
          },
          {
            path: RoutePath.NOT_ALLOWED,
            element: <NotAllowed />,
          },
          {
            path: RoutePath.NOT_FOUND,
            element: <AirPollution />,
          },
        ],
      },
    ],
    {
      basename: process.env.REACT_APP_BASE_HREF,
    }
  );

export default IndexRouter;
