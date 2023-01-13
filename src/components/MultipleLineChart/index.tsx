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
          if (value >= 1000000000000) {
            return value.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            });
          }
          if (value >= 1000000000) {
            return `R$ ${value / 1000000000} B`;
          }
          if (value >= 1000000) {
            return `R$ ${value / 1000000}M`;
          }
          if (value > 1000) {
            return `R$ ${value / 1000} K`;
          } else {
            return `R$ ${value}`;
          }

          // console.log(value);
          // return value.toLocaleString("pt-BR", {
          //   style: "currency",
          //   currency: "BRL",
          // });
        },
      },
    },
    y1: {
      display: false,
    },
  },
  elements: {
    point: {
      radius: 1,
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
