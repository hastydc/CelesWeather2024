import { Outlet } from 'react-router-dom';
import useCoordinates from './hooks/useCoordinates';

const LayoutWrapper = () => {
  useCoordinates();

  return (
    <>
      <Outlet />
    </>
  );
};

export default LayoutWrapper;
