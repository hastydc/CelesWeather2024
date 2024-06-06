import { Link } from 'react-router-dom';
import { FaRegMessage } from 'react-icons/fa6';
import Style from './Contact.module.scss';
import { useTranslation } from 'react-i18next';

/**
 * Contact component for header
 * @returns {Object} response
 */
const Contact = () => {
  const mailTo = (e: any): void => {
    window.location.href = `mailto:${process.env.REACT_APP_EMAIL}`;
    e.preventDefault();
  };
  const { t } = useTranslation();

  return (
    <>
      <Link
        className={`tooltip-wrapper ${Style.contact}`}
        to="#"
        onClick={(e) => mailTo(e)}
      >
        <FaRegMessage />
        <span className="tooltip">{t('contactUs')}</span>
      </Link>
    </>
  );
};

export default Contact;
