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
import { Colors } from "../../styles/colors";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  maintainAspectRatio: false,
  responsive: true,
  stacked: false,
  interaction: {
    intersect: false,
    mode: "index" as const,
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
    },
    y: {
      ticks: {
        callback: function (value: any) {
          return value.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          });
        },
      },
    },
    y1: {
      display: false,
    },
  },
  elements: {
    point: {
      radius: 0,
    },
  },
  plugins: {
    legend: {
      display: false,
    },
  },
};

export interface MultipleLineChartProps {
  data: ChartData<"line", (number | Point | null)[], unknown>;
}

export const MultipleLineChart: React.FC<MultipleLineChartProps> = ({
  data,
}) => {
  return (
    <div style={{ height: 374 }}>
      <Line options={options} data={data} />
    </div>
  );
};
