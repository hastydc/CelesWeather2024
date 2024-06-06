import { FaLocationPin } from 'react-icons/fa6';
import Style from './NotAllowed.module.scss';
import { useContext } from 'react';
import { LayoutContext } from 'src/layout/layout.context';
import { useNavigate } from 'react-router-dom';
import { RoutePath } from 'src/models/enums/routePath.enum';

/**
 * Not allowed component, used to request location permission and get user current coordinates
 * @returns {Object} response
 */
const NotAllowed = () => {
  const { coordinates, setCoordinates } = useContext(LayoutContext);
  const navigate = useNavigate();

  const requestLocation = (): void => {
    if (coordinates.latitude && coordinates.longitude) return;

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        ({ coords: { latitude, longitude } }) => {
          localStorage.setItem(
            'coordinates',
            JSON.stringify({ latitude, longitude })
          );
          setCoordinates({ latitude, longitude });
          navigate(RoutePath.HOME);
        }
      );
    }
  };

  return (
    <>
      <div className={Style.notAllowed}>
        <h3 className={Style.text}>
          This app requires location permission from your browser
        </h3>

        <button className={Style.button} onClick={() => requestLocation()}>
          <FaLocationPin />
          Request permission
        </button>
      </div>
    </>
  );
};

export default NotAllowed;
