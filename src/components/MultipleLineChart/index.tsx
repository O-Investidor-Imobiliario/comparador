import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ChartData,
  Point,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { options } from "./chartOptions";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export interface MultipleLineChartProps {
  data: ChartData<"line", (number | Point | null)[], unknown>;
}

export const MultipleLineChart: React.FC<MultipleLineChartProps> = ({
  data,
}) => {
  return (
    <div>
      <Line options={options} data={data} style={{ height: 400 }} />
    </div>
  );
};
