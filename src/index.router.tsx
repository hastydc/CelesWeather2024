import { createBrowserRouter } from 'react-router-dom';
import Layout from './layout/Layout';
import { RoutePath } from './models/enums/routePath.enum';
import { lazy } from 'react';

const AirPollution = lazy(
  () => import('./features/air-pollution/AirPollution')
);
const CurrentWeather = lazy(
  () => import('./features/current-weather/CurrentWeather')
);
const Forecast = lazy(() => import('./features/forecast/Forecast'));
const NotAllowed = lazy(() => import('./features/not-allowed/NotAllowed'));

const IndexRouter = () =>
  createBrowserRouter([
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
  ]);

export default IndexRouter;
