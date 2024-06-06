import { getCurrentDate } from 'src/utils/Utils';
import Style from './Title.module.scss';
import { useTranslation } from 'react-i18next';

/**
 * Title component for header
 * @returns {Object} component
 */
const Title = () => {
  const userName = 'Warren';
  const date = getCurrentDate();
  const { t } = useTranslation();

  return (
    <>
      <div className={Style.title}>
        <h1 className={Style.mainTitle}>
          {t('hello')}, {userName}
        </h1>

        <h2 className={Style.subTitle}>{date}</h2>
      </div>
    </>
  );
};

export default Title;
