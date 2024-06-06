import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { getHexColor } from 'src/utils/Utils';

type ChartProps = {
  data: any;
};

const ChartLine = ({ data }: ChartProps) => {
  return (
    <>
      <div className="chart-wrapper">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart width={500} height={300} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" padding={{ left: 30, right: 30 }} />
            <YAxis />
            <Tooltip />
            <Legend />
            <Legend />
            {Object.keys(data[0] ?? {})
              .filter((x) => x !== 'name')
              .map((key, index) => (
                <Line
                  type="monotone"
                  dataKey={key}
                  stroke={getHexColor()}
                  key={`cb-${index}`}
                />
              ))}
          </LineChart>
        </ResponsiveContainer>
      </div>
    </>
  );
};

export default ChartLine;
