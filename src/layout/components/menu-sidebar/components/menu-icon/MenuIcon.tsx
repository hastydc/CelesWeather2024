import { MenuItem } from 'src/models/interfaces/menuItem.interface';
import Style from './MenuIcon.module.scss';
import { Link, useLocation } from 'react-router-dom';

type IconProps = {
  menuItem: MenuItem;
};

const MenuIcon = ({ menuItem: { label, icon, link } }: IconProps) => {
  const location = useLocation();

  const active = link === location.pathname;

  return (
    <>
      <Link
        to={link}
        className={`${Style.menuIcon} ${active ? Style.active : ''}`}
      >
        {icon}
      </Link>
    </>
  );
};

export default MenuIcon;
