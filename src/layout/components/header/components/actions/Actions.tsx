import Contact from './contact/Contact';
import Search from './search/Search';
import Style from './Actions.module.scss';

export const Actions = () => {
  return (
    <>
      <div className={Style.actions}>
        <div className={Style.search}>
          <Search />
        </div>

        <div className={Style.contact}>
          <Contact />
        </div>
      </div>
    </>
  );
};

export default Actions;
