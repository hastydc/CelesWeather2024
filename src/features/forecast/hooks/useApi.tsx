import { useContext, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import useRequest from 'src/api/useRequest';
import { LayoutContext } from 'src/layout/layout.context';
import { Model } from 'src/models/enums/model.enum';

/**
 * Format response from api to send to chart component
 * @param {Object} source
 * @param {Function} t
 * @returns {Array} response
 */
const formatResponse = (source: any, t: any) => {
  let list = source?.list;

  if (!list?.length) return [];

  list.splice(5);
  list = list.map((x: any, index: number) => ({
    feels_like: x.main.feels_like,
    temp_max: x.main.temp_max,
    temp_min: x.main.temp_min,
    temp: x.main.temp,
    name: t('day', { day: index + 1 }),
  }));

  return list;
};

/**
 * Use api hook to fetch data from api
 * @returns {Object} response
 */
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
    setData(formatResponse(source, t));
  }, [source, t]);

  return { data, isLoading, error };
};

export default useApi;
