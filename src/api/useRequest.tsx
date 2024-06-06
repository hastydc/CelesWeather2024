import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { LayoutContext } from 'src/layout/layout.context';
import { Payload } from 'src/models/interfaces/payload.interface';

const getRequestUrl = ({
  model: entity,
  latitude,
  longitude,
  params,
}: Payload): string =>
  `${process.env.REACT_APP_API_URL}${entity}?lat=${latitude}&lon=${longitude}${
    params ? params : ''
  }&appid=${process.env.REACT_APP_TOKEN}`;

const useRequest = (model: string, params?: string) => {
  const { coordinates } = useContext(LayoutContext);
  const { isLoading, error, data, refetch } = useQuery({
    queryKey: [module],
    enabled: false,
    refetchOnWindowFocus: false,
    queryFn: () =>
      axios
        .get(
          getRequestUrl({
            model,
            params,
            latitude: coordinates.latitude,
            longitude: coordinates.longitude,
          })
        )
        .then((res: any) => res.data),
  });

  return { data, isLoading, error, refetch };
};

export default useRequest;
