import { useContext, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import useRequest from 'src/api/useRequest';
import { LayoutContext } from 'src/layout/layout.context';
import { Model } from 'src/models/enums/model.enum';

const useApi = () => {
  const [data, setData] = useState({});
  const { coordinates } = useContext(LayoutContext);
  const { t } = useTranslation();

  const {
    data: source,
    isLoading,
    error,
    refetch,
  } = useRequest(Model.FORECAST);

  useEffect(() => {
    if (coordinates.latitude && coordinates.longitude) refetch();
  }, [coordinates, refetch]);

  useEffect(() => {
    console.log(source);
    setData([
      {
        name: t('fiveDayWeatherForecast'),
      },
    ]);
  }, [source, t]);

  return { data, isLoading, error };
};

export default useApi;
