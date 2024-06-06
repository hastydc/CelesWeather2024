import CardInfo from 'src/ui/cards/card-info/CardInfo';
import CardChart from 'src/ui/cards/card-chart/CardChart';
import { cardInfo } from './CurrentWeather.mock';
import useRequest from 'src/api/useRequest';
import { Model } from 'src/models/enums/model.enum';

const CurrentWeather = () => {
  // const { data } = useRequest(Entity.WEATHER);

  return (
    <>
      <div className={`page`}>
        <div className={`card card-full`}>
          <CardInfo {...cardInfo} />
        </div>

        <div className={`card-full`}>
          <h2 className={`text-gray`}>Chart</h2>
          <div className={`card card-green card-*full`}>
            <CardChart />
          </div>
        </div>
      </div>
    </>
  );
};

export default CurrentWeather;
