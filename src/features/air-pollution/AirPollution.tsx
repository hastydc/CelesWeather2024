import CardInfo from 'src/ui/cards/card-info/CardInfo';
import CardList from 'src/ui/cards/card-list/CardList';
import { cardInfo, cardList } from './AirPollution.mock';
import CardChart from 'src/ui/cards/card-chart/CardChart';
import useApi from './hooks/useApi';
import CardError from 'src/ui/cards/card-error/CardError';
import { useTranslation } from 'react-i18next';

const AirPollution = () => {
  const { data, isLoading, error } = useApi();
  const { t } = useTranslation();

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
          <h2 className={`text-gray`}>{t('chart')}</h2>

          <div
            className={`card card-green card-full ${
              isLoading ? 'card-loading' : ''
            }`}
          >
            {error ? <CardError /> : null}

            {!isLoading && !error ? <CardChart data={data} /> : null}
          </div>
        </div>
      </div>
    </>
  );
};

export default AirPollution;
