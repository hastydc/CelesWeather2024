import { useTranslation } from 'react-i18next';
import Style from './Search.module.scss';

/**
 * Search component for header
 * @returns {Object} component
 */
const Search = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="tooltip-wrapper">
        <input
          placeholder={t('searchPey')}
          className={Style.search}
          disabled={true}
        />
        <span className="tooltip">{t('notAvailable')}</span>
      </div>
    </>
  );
};

export default Search;
