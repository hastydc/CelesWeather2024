import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useContext } from 'react';
import { LayoutContext } from 'src/layout/layout.context';
import { Model } from 'src/models/enums/model.enum';
import { Payload } from 'src/models/interfaces/payload.interface';

const getRequestUrl = ({
  model,
  latitude,
  longitude,
  params,
}: Payload): string =>
  `${process.env.REACT_APP_API_URL}${model}?lat=${latitude}&lon=${longitude}${
    params ? params : ''
  }&appid=${process.env.REACT_APP_TOKEN}`;

const useRequest = (model: Model, params?: string) => {
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
