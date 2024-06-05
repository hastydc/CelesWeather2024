import Style from './CardChart.module.scss';
import Chart from '../../chart/Chart';

const CardChart = () => {
  return (
    <>
      <div className={Style.CardChart}>
        <div className={Style.chart}>
          <Chart />
        </div>
      </div>
    </>
  );
};

export default CardChart;
