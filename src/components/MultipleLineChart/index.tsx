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
import { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { useWindowSize } from "../../hooks/useWindowSize";
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
  const [width] = useWindowSize();
  const [chartWidth, setChartWidth] = useState(0);

  useEffect(() => {
    if (width >= 700) {
      setChartWidth(690);
    } else {
      setChartWidth(width - 50);
    }
  }, [width]);

  return (
    <>
      {chartWidth && (
        <Line
          options={options}
          data={data}
          style={{ width: chartWidth, height: 400 }}
        />
      )}
    </>
  );
};
