import CardInfo from 'src/ui/cards/card-info/CardInfo';
import Style from './AirPollution.module.scss';
import CardList from 'src/ui/cards/card-list/CardList';
import { cardInfo, cardList } from './AirPollution.mock';
import CardChart from 'src/ui/cards/card-chart/CardChart';

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

        <div className={`${Style.fullCard}`}>
          <h2 className={Style.cardTitle}>Chart</h2>
          <div className={`card card-green ${Style.fullCard}`}>
            <CardChart />
          </div>
        </div>
      </div>
    </>
  );
};

export default AirPollution;
