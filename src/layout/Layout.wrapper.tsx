import { Outlet } from 'react-router-dom';
import useCoordinates from './hooks/useCoordinates';

/**
 * Layout wrapper component to init/set coordinates in layout context and load lazy component by route
 * @returns {Object} component
 */
const LayoutWrapper = () => {
  useCoordinates();

  return (
    <>
      <Outlet />
    </>
  );
};

export default LayoutWrapper;
