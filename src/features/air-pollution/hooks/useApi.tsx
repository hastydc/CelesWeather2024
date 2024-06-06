import { useContext, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import useRequest from 'src/api/useRequest';
import { LayoutContext } from 'src/layout/layout.context';
import { Model } from 'src/models/enums/model.enum';

/**
 * Get additional query params with date range
 * @returns {string} response
 */
const getQueryParams = (): string => {
  const date = new Date();
  const endDate = date.getTime();
  date.setMonth(date.getMonth() - 3);
  const startDate = date.getTime();
  return `&start=${startDate}&end=${endDate}`;
};

/**
 * Format response from api to send to chart component
 * @param {Object} source
 * @param {Function} t
 * @returns {Array} response
 */
const formatResponse = (source: any, t: any) => {
  if (!source?.list?.length) return [];

  const tmpData = {
    name: t('airPollutionInLastThreeMonths'),
    ...(source?.list[0]?.components ?? {}),
  };

  delete tmpData['co'];
  delete tmpData['o3'];

  return [tmpData];
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
  } = useRequest(Model.AIR_POLLUTION, getQueryParams());

  useEffect(() => {
    if (coordinates.latitude && coordinates.longitude) refetch();
  }, [coordinates, refetch]);

  useEffect(() => {
    setData(formatResponse(source, t));
  }, [source, t]);

  return { data, isLoading, error };
};

export default useApi;
