import { useContext, useEffect, useState } from 'react';
import useRequest from 'src/api/useRequest';
import { LayoutContext } from 'src/layout/layout.context';
import { Model } from 'src/models/enums/model.enum';

const useApi = () => {
  const [data, setData] = useState({});
  const { coordinates } = useContext(LayoutContext);
  const { data: source, isLoading, error, refetch } = useRequest(Model.WEATHER);

  useEffect(() => {
    if (coordinates.latitude && coordinates.longitude) refetch();
  }, [coordinates]);

  useEffect(() => {
    setData(source);
  }, [source, refetch]);

  return { data, isLoading, error };
};

export default useApi;
