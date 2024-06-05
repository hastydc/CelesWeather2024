import { Link } from 'react-router-dom';
import { FaRegMessage } from 'react-icons/fa6';
import Style from './Contact.module.scss';

const Contact = () => {
  const mailTo = (e: any): void => {
    window.location.href = `mailto:${process.env.REACT_APP_EMAIL}`;
    e.preventDefault();
  };

  return (
    <>
      <Link className={Style.contact} to="#" onClick={(e) => mailTo(e)}>
        <FaRegMessage />
      </Link>
    </>
  );
};

export default Contact;
