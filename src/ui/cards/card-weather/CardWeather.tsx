import { useTranslation } from 'react-i18next';
import Style from './CardWeather.module.scss';
import {
  FaArrowRight,
  FaCloud,
  FaCloudRain,
  FaTemperatureHigh,
  FaWind,
} from 'react-icons/fa6';

/**
 * Card weather props
 */
type CardWeatherProps = {
  data: any;
};

/**
 * Items to display in Card
 */
const items = [
  {
    key: 'main',
    icon: <FaTemperatureHigh />,
  },
  {
    key: 'clouds',
    icon: <FaCloud />,
  },
  {
    key: 'rain',
    icon: <FaCloudRain />,
  },
  {
    key: 'wind',
    icon: <FaWind />,
  },
];

/**
 * Card weather component
 * @param {CardWeatherProps} props
 * @returns {Object} component
 */
const CardWeather = ({ data }: CardWeatherProps) => {
  const { t } = useTranslation();

  return !data || !data?.weather ? (
    <></>
  ) : (
    <>
      <div className={Style.cardWeather}>
        <div>
          <h2>{data.weather[0]?.main}</h2>
          <h3 className="text-gray">{data.weather[0]?.description}</h3>
        </div>

        {items.map(({ icon, key: baseKey }, index) => (
          <div className={Style.content} key={`im-${index}`}>
            <div className={Style.name}>
              {icon}

              <span>{t(baseKey)}</span>
            </div>

            <div className={Style.info}>
              {Object.keys(data[baseKey] ?? {}).map((key, index) => (
                <div className={Style.values} key={`dwm-${index}`}>
                  <div className={Style.key}>{key}</div>

                  <FaArrowRight className={Style.arrow} />

                  <div className={Style.value}>{data[baseKey][key]}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default CardWeather;
