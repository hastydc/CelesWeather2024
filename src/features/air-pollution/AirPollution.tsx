import CardInfo from 'src/ui/cards/card-info/CardInfo';
import CardList from 'src/ui/cards/card-list/CardList';
import { cardInfo, cardList } from './AirPollution.mock';
import CardChart from 'src/ui/cards/card-chart/CardChart';
import useRequest from 'src/api/useRequest';
import { Entity } from 'src/models/enums/entity.enum';

const AirPollution = () => {
  const { data } = useRequest(Entity.AIR_POLLUTION);

  console.log(data);

  return (
    <>
      <div className={`page`}>
        <div className={`card card-small`}>
          <CardInfo {...cardInfo} />
        </div>

        <div className={`card card-green card-small`}>
          <CardList {...cardList} />
        </div>

        <div className={`card-full`}>
          <h2 className={`text-gray`}>Chart</h2>
          <div className={`card card-green card-full`}>
            <CardChart />
          </div>
        </div>
      </div>
    </>
  );
};

export default AirPollution;
