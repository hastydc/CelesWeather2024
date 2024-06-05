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
      ],
    },
  ]);

export default IndexRouter;
