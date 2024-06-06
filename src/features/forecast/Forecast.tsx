import CardInfo from 'src/ui/cards/card-info/CardInfo';
import { cardInfo } from './Forecast.mock';
import CardChart from 'src/ui/cards/card-chart/CardChart';
import useApi from './hooks/useApi';
import { useTranslation } from 'react-i18next';
import CardError from 'src/ui/cards/card-error/CardError';
import { ChartType } from 'src/models/enums/chartType.enum';

const Forecast = () => {
  const { data, isLoading, error } = useApi();
  const { t } = useTranslation();

  return (
    <>
      <div className={`page`}>
        <div className={`card card-full`}>
          <CardInfo {...cardInfo} />
        </div>

        <div className={`card-full`}>
          <h2 className={`text-gray`}>{t('chart')}</h2>

          <div
            className={`card card-green card-full ${
              isLoading ? 'card-loading' : ''
            }`}
          >
            {error ? <CardError /> : <></>}

            {!isLoading && !error ? (
              <CardChart data={data} type={ChartType.BAR} />
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Forecast;
