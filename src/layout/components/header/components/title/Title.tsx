import { getCurrentDate } from 'src/utils/Utils';
import Style from './Title.module.scss';

const Title = () => {
  const userName = 'Warren';
  const date = getCurrentDate();

  return (
    <>
      <div className={Style.title}>
        <h1 className={Style.mainTitle}>Hello, {userName}</h1>

        <h2 className={Style.subTitle}>{date}</h2>
      </div>
    </>
  );
};

export default Title;
