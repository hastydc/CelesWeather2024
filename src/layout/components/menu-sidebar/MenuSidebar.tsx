import { FaHome, FaMixcloud, FaSearchMinus } from 'react-icons/fa';
import { RoutePath } from 'src/models/enums/routePath.enum';
import { MenuItem } from 'src/models/interfaces/menuItem.interface';
import MenuIcon from './components/menu-icon/MenuIcon';
import Style from './MenuSidebar.module.scss';
import Logo from 'src/ui/logo/Logo';
import { useTranslation } from 'react-i18next';

const MenuSideBar = () => {
  const { t } = useTranslation();

  const menuItems: MenuItem[] = [
    {
      label: t('airPollution'),
      icon: <FaHome />,
      link: RoutePath.HOME,
    },
    {
      label: t('temperature'),
      icon: <FaSearchMinus />,
      link: RoutePath.FORECAST,
    },
    {
      label: t('currentWeather'),
      icon: <FaMixcloud />,
      link: RoutePath.CURRENT_WEATHER,
    },
  ];

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
