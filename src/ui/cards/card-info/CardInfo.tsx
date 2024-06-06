import { Link } from 'react-router-dom';
import Style from './CardInfo.module.scss';
import { FaArrowUp } from 'react-icons/fa6';
import { useTranslation } from 'react-i18next';

/**
 * Card info props
 */
type CardInfoProps = {
  link: string;
  title: string;
  description: string;
};

/**
 * Card info component
 * @param {CardInfoProps} props
 * @returns {Object} component
 */
const CardInfo = ({ link, title, description }: CardInfoProps) => {
  const { t } = useTranslation();

  return (
    <>
      <div className={Style.cardInfo}>
        <Link to={link} target="_blank" className={Style.tags}>
          <div className={Style.tag}>
            {t('getMore')} &nbsp;
            <span className={Style.green}>{t('info')}</span>
          </div>
          <div className={`${Style.tag} ${Style.green} ${Style.arrow}`}>
            <FaArrowUp />
          </div>
        </Link>

        <h3 className={Style.title}>{title}</h3>

        <p
          className={Style.description}
          dangerouslySetInnerHTML={{ __html: description }}
        />
      </div>
    </>
  );
};

export default CardInfo;
