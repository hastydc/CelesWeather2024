import {
  ResponsiveContainer,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar,
} from 'recharts';
import { getHexColor } from 'src/utils/Utils';

type ChartProps = {
  data: any;
};

const ChartBar = ({ data = [] }: ChartProps) => {
  return (
    <>
      <div className="chart-wrapper">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            {Object.keys(data[0] ?? {})
              .filter((x) => x !== 'name')
              .map((key, index) => (
                <Bar dataKey={key} fill={getHexColor()} key={`cb-${index}`} />
              ))}
          </BarChart>
        </ResponsiveContainer>
      </div>
    </>
  );
};

export default ChartBar;
