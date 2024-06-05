import CardInfo from 'src/ui/cards/card-info/CardInfo';
import Style from './AirPollution.module.scss';
import CardList from 'src/ui/cards/card-list/CardList';
import { cardInfo, cardList } from './AirPollution.mock';

const AirPollution = () => {
  return (
    <>
      <div className={`${Style.air}`}>
        <div className={`card ${Style.smallCard}`}>
          <CardInfo {...cardInfo} />
        </div>

        <div className={`card card-green ${Style.smallCard}`}>
          <CardList {...cardList} />
        </div>

        <div className={`card card-green ${Style.fullCard}`}>1</div>
      </div>
    </>
  );
};

export default AirPollution;
