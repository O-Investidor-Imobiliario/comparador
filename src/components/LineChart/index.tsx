import { useState } from "react";
import Chart from "react-apexcharts";
import { Button } from "../Button";

export const LineChart = ({}) => {
  const cdi = {
    name: "cdi",
    data: [30, 40, 45, 50, 49, 60, 70, 91, 0].reverse(),
  };
  const imoveis = {
    name: "imoveis",
    data: [30, 40, 45, 50, 49, 60, 70, 91, 0],
  };

  const axis: {
    cdi: { name: string; data: number[] };
    imoveis: { name: string; data: number[] };
  } = {
    cdi,
    imoveis,
  };

  const [series, setSeries] = useState<{ name: string; data: number[] }[]>([]);

  const options: ApexCharts.ApexOptions = {
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
    title: {
      text: "Stock Price Movement",
      align: "left",
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
    xaxis: {
      categories: [
        "2022-12-01",
        "2022-11-01",
        "2022-10-01",
        "2022-09-01",
        "2022-08-01",
        "2022-07-01",
        "2022-06-01",
        "2022-05-01",
        "2022-04-01",
      ],
      type: "datetime",
    },
  };

  const addAxis = (axisName: "cdi" | "imoveis") => {
    const index = series.findIndex((serie) => serie.name === axisName);

    setSeries((old) => {
      if (index > -1) {
        return old.filter((serie) => serie.name !== axisName);
      }
      return [...old, axis[axisName]];
    });
  };

  return (
    <>
      <Button title="cdi" onClick={() => addAxis("cdi")} />
      <Button title="Imóveis" onClick={() => addAxis("imoveis")} />
      <Chart type="area" options={options} series={series} width={500} />
    </>
  );
};
