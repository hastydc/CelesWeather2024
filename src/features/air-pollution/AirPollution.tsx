import CardInfo from 'src/ui/cards/card-info/CardInfo';
import Style from './AirPollution.module.scss';

const cardInfo = {
  link: 'https://openweathermap.org/api/air-pollution',
  title: 'Air pollution concept',
  description: `
    Besides basic Air Quality Index, the API returns data about polluting gases, such as Carbon monoxide (CO), Nitrogen monoxide (NO), Nitrogen dioxide (NO2), Ozone (O3), Sulphur dioxide (SO2), Ammonia (NH3), and particulates (PM2.5 and PM10).
  `,
};

const AirPollution = () => {
  return (
    <>
      <div className={`${Style.air}`}>
        <div className={`card ${Style.smallCard}`}>
          <CardInfo {...cardInfo} />
        </div>

        <div className={`card card-green ${Style.smallCard}`}>1</div>

        <div className={`card card-green ${Style.fullCard}`}>1</div>
      </div>
    </>
  );
};

export default AirPollution;
