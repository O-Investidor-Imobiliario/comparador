import Chart from "react-apexcharts";

export interface LineChartProps {
  series: { name: string; data: number[] }[];
  options?: ApexCharts.ApexOptions;
}

export const LineChart = ({ series, options }: LineChartProps) => {
  const optionsDefault: ApexCharts.ApexOptions = {
    chart: {
      toolbar: { show: false },
      zoom: {
        enabled: false,
      },
      type: "area",
      stacked: false,
      height: 350,
    },
    dataLabels: {
      enabled: false,
    },
    markers: {
      size: 0,
    },

    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        inverseColors: false,
        opacityFrom: 0.5,
        opacityTo: 0,
        stops: [0, 90, 100],
      },
    },
   
    legend: {
      position: "top",
      show: true,
      showForSingleSeries: true,
      showForNullSeries: false,
    },
  };

  return (
    <>
      <Chart
        type="area"
        options={{ ...optionsDefault, ...options }}
        series={series}
        width={500}
      />
    </>
  );
};
