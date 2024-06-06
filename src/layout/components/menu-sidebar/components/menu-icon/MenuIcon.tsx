import { MenuItem } from 'src/models/interfaces/menuItem.interface';
import Style from './MenuIcon.module.scss';
import { Link, useLocation } from 'react-router-dom';

/**
 * IconProps
 */
type MenuIconProps = {
  menuItem: MenuItem;
};

/**
 * Menu icon component
 * @param {MenuIconProps} props
 * @returns {Object} component
 */
const MenuIcon = ({ menuItem: { label, icon, link } }: MenuIconProps) => {
  const location = useLocation();
  const active = link === location.pathname;

  return (
    <>
      <Link
        to={link}
        className={`tooltip-wrapper ${Style.menuIcon} ${
          active ? Style.active : ''
        }`}
      >
        {icon}
        <span className="tooltip">{label}</span>
      </Link>
    </>
  );
};

export default MenuIcon;
