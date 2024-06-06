import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useContext } from 'react';
import { LayoutContext } from 'src/layout/layout.context';
import { Payload } from 'src/models/interfaces/payload.interface';

const getRequestUrl = ({ entity, latitude, longitude }: Payload): string =>
  `${process.env.REACT_APP_API_URL}${entity}?lat=${latitude}&lon=${longitude}&appid=${process.env.REACT_APP_TOKEN}`;

const useRequest = (entity: string) => {
  const { coordinates } = useContext(LayoutContext);

  const { isLoading, error, data } = useQuery({
    queryKey: [entity],
    queryFn: () =>
      axios
        .get(
          getRequestUrl({
            entity,
            latitude: coordinates.latitude,
            longitude: coordinates.longitude,
          })
        )
        .then((res: any) => res.data),
  });
  return { isLoading, error, data };
};

export default useRequest;
