import { useContext, useEffect } from 'react';
import { LayoutContext } from '../layout.context';
import { useLocation, useNavigate } from 'react-router-dom';
import { RoutePath } from 'src/models/enums/routePath.enum';

export const useCoordinates = () => {
  const { setCoordinates } = useContext(LayoutContext);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const coordinates = JSON.parse(
      localStorage.getItem('coordinates') ?? '{"latitude": 0, "longitude": 0}'
    );

    setCoordinates(coordinates);

    if (
      (!coordinates.latitude || !coordinates.longitude) &&
      location.pathname !== RoutePath.NOT_ALLOWED
    ) {
      navigate(RoutePath.NOT_ALLOWED);
    }
  }, [location, navigate, setCoordinates]);
};

export default useCoordinates;
