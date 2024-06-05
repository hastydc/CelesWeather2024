import CardInfo from 'src/ui/cards/card-info/CardInfo';
import Style from './CurrentWeather.module.scss';
import CardChart from 'src/ui/cards/card-chart/CardChart';
import { cardInfo } from './CurrentWeather.mock';

const CurrentWeather = () => {
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
