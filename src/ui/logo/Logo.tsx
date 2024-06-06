import { Link } from 'react-router-dom';
import { BiLogoReact } from 'react-icons/bi';
import Style from './Logo.module.scss';
import { RoutePath } from 'src/models/enums/routePath.enum';

/**
 * Component for app logo
 * @returns {Object} component
 */
const Logo = () => {
  return (
    <>
      <Link to={RoutePath.HOME} className={Style.logo}>
        <BiLogoReact />
      </Link>
    </>
  );
};

export default Logo;
