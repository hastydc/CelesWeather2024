import { Link } from 'react-router-dom';
import Style from './CardInfo.module.scss';
import { FaArrowUp } from 'react-icons/fa6';

type CardInfoProps = {
  link: string;
  title: string;
  description: string;
};

const CardInfo = ({ link, title, description }: CardInfoProps) => {
  return (
    <>
      <div className={Style.cardInfo}>
        <Link to={link} target="_blank" className={Style.tags}>
          <div className={Style.tag}>
            Get more &nbsp;<span className={Style.green}>info</span>
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
