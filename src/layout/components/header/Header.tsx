import Style from './Header.module.scss';
import Actions from './components/actions/Actions';
import Title from './components/title/Title';

const Header = () => {
  return (
    <>
      <header className={Style.header}>
        <div className={Style.actions}>
          <Actions />
        </div>
        <div className={Style.title}>
          <Title />
        </div>
      </header>
    </>
  );
};

export default Header;
