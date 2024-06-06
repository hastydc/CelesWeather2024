import { useContext, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import useRequest from 'src/api/useRequest';
import { LayoutContext } from 'src/layout/layout.context';
import { Model } from 'src/models/enums/model.enum';

const getParams = (): string => {
  const date = new Date();
  const endDate = date.getTime();
  date.setMonth(date.getMonth() - 3);
  const startDate = date.getTime();
  return `&start=${startDate}&end=${endDate}`;
};

const useApi = () => {
  const [data, setData] = useState({});
  const { coordinates } = useContext(LayoutContext);
  const { t } = useTranslation();

  const {
    data: source,
    isLoading,
    error,
    refetch,
  } = useRequest(Model.AIR_POLLUTION, getParams());

  useEffect(() => {
    if (coordinates.latitude && coordinates.longitude) refetch();
  }, [coordinates]);

  useEffect(() => {
    setData([
      {
        name: t('airPollutionInLastThreeMonths'),
        ...(source?.list[0]?.components ?? {}),
      },
    ]);
  }, [source]);

  return { data, isLoading, error };
};

export default useApi;
