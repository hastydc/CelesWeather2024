import { useTranslation } from 'react-i18next';
import Style from './Search.module.scss';

const Search = () => {
  const { t } = useTranslation();

  return (
    <>
      <input
        placeholder={t('searchPey')}
        className={Style.search}
        disabled={true}
      />
    </>
  );
};

export default Search;
