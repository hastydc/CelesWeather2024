import { FaHome, FaMixcloud, FaSearchMinus } from 'react-icons/fa';
import { RoutePath } from 'src/models/enums/routePath.enum';
import { MenuItem } from 'src/models/interfaces/menuItem.interface';
import MenuIcon from './components/menu-icon/MenuIcon';
import Style from './MenuSidebar.module.scss';
import Logo from 'src/ui/logo/Logo';

const menuItems: MenuItem[] = [
  {
    label: 'Air pollution',
    icon: <FaHome />,
    link: RoutePath.HOME,
  },
  {
    label: 'Precipitation probability and temperature',
    icon: <FaSearchMinus />,
    link: RoutePath.FORECAST,
  },
  {
    label: 'Current weather',
    icon: <FaMixcloud />,
    link: RoutePath.CURRENT_WEATHER,
  },
];

const MenuSideBar = () => {
  return (
    <>
      <div className={Style.menuSidebar}>
        <div className={Style.logo}>
          <Logo />
        </div>

        <div className={Style.items}>
          {menuItems.map((menuItem, index: number) => (
            <div className={Style.menuItem} key={`mi-${index}`}>
              <MenuIcon menuItem={menuItem} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default MenuSideBar;
