import CardInfo from 'src/ui/cards/card-info/CardInfo';
import { cardInfo } from './Forecast.mock';
import CardChart from 'src/ui/cards/card-chart/CardChart';
import { Entity } from 'src/models/enums/entity.enum';
import useRequest from 'src/api/useRequest';

const Forecast = () => {
  const { data } = useRequest(Entity.FORECAST);

  console.log(data);

  return (
    <>
      <div className={`page`}>
        <div className={`card card-full`}>
          <CardInfo {...cardInfo} />
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

export default Forecast;
