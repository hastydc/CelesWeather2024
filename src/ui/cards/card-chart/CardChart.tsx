import Style from './CardChart.module.scss';
import ChartLine from '../../chart/chart-line/ChartLine';
import ChartBar from 'src/ui/chart/chart-bar/ChartBar';
import { ChartType } from 'src/models/enums/chartType.enum';

/**
 * Card chart props
 */
type CardChartProps = {
  data?: any;
  type: ChartType;
};

/**
 * Card chart component
 * @param {CardChartProps} props
 * @returns {Object} component
 */
const CardChart = ({ data, type }: CardChartProps) => {
  return (
    <>
      <div className={Style.CardChart}>
        <div className={Style.chart}>
          {type === ChartType.LINE ? <ChartLine data={data} /> : <></>}

          {type === ChartType.BAR ? <ChartBar data={data} /> : <></>}
        </div>
      </div>
    </>
  );
};

export default CardChart;
