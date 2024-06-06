import Style from './CardChart.module.scss';
import Chart from '../../chart/Chart';

type CardChartProps = {
  data?: any;
};

const CardChart = ({ data }: CardChartProps) => {
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
