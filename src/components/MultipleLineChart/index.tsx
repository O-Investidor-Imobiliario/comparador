import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
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
      //   ticks: {
      //     callback: function (value, index) {
      //       const label = this.getLabelForValue(value);
      //       const splitDate = label.split("/");
      //       const formattedDate = `${parseInt(splitDate[0]) < 10 ? "0" : ""}${
      //         splitDate[0]
      //       }/${splitDate[1]}`;
      //       return formattedDate;
      //     },
      //   },
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

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: labels.map(() => Math.random()),
      borderColor: Colors.PRIMARY,
      backgroundColor: Colors.PRIMARY,
      pointBackgroundColor: Colors.PRIMARY,
      pointHoverBackgroundColor: Colors.PRIMARY,
      pointHoverRadius: 8,
      pointHoverBorderColor: Colors.WHITE,
      pointHoverBorderWidth: 2,
      yAxisID: "y",
    },
    {
      label: "Dataset 2",
      data: labels.map(() => Math.random()),
      borderColor: Colors.RED,
      backgroundColor: Colors.RED,
      pointHoverBackgroundColor: Colors.RED,
      pointHoverBorderColor: Colors.WHITE,
      pointHoverRadius: 8,
      pointHoverBorderWidth: 2,
      yAxisID: "y1",
    },
  ],
};

export function MultipleLineChart() {
  return (
    <div style={{ width: "50rem" }}>
      <Line options={options} data={data} />
    </div>
  );
}
