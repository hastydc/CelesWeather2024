import { useContext, useEffect, useState } from 'react';
import useRequest from 'src/api/useRequest';
import { LayoutContext } from 'src/layout/layout.context';
import { Model } from 'src/models/enums/model.enum';
import { Payload } from 'src/models/interfaces/payload.interface';

const getParams = (): string => {
  const date = new Date();
  const endDate = date.getTime();
  date.setMonth(date.getMonth() - 3);
  const startDate = date.getTime();
  return `&start=${startDate}&end=${endDate}`;
};

const useApi = () => {
  const { coordinates } = useContext(LayoutContext);

  const { data, isLoading, error, refetch } = useRequest(
    Model.AIR_POLLUTION,
    getParams()
  );

  useEffect(() => {
    if (coordinates.latitude && coordinates.longitude) refetch();
  }, [coordinates]);

  return { data, isLoading, error };
};

export default useApi;
