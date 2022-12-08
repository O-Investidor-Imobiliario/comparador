import { useState } from "react";
import { Button } from "../../components/Button";
import { LineChart } from "../../components/LineChart";
import { CdiService } from "../../services/cdi-service";

export function ComparatorPage() {
  const cdiService = new CdiService();

  const cdi = cdiService.getCdi({
    startDate: "2020-01-01",
    endDate: "2022-01-01",
  });

  const dates = cdi.map((el) => el.date);
  const cdiValues = cdi.map((el) => el.value);

  const cdiLine = {
    name: "cdi",
    data: cdiValues,
  };
  //    {
  //     name: "cdi",
  //     data: [
  //       30, 40, 45, 50, 49, 60, 70, 91, 10, 30, 40, 45, 50, 49, 60, 70, 91, 10,
  //     ].reverse(),
  //   };
  const imoveis = {
    name: "imoveis",
    data: [
      30, 40, 45, 50, 49, 60, 70, 91, 10, 30, 40, 45, 50, 49, 60, 70, 91, 10,
    ],
  };

  const axis: {
    cdi: { name: string; data: number[] };
    imoveis: { name: string; data: number[] };
  } = {
    cdi: cdiLine,
    imoveis,
  };

  const [series, setSeries] = useState<{ name: string; data: number[] }[]>([]);
  const addAxis = (axisName: "cdi" | "imoveis") => {
    const index = series.findIndex((serie) => serie.name === axisName);

    setSeries((old) => {
      if (index > -1) {
        return old.filter((serie) => serie.name !== axisName);
      }
      return [...old, axis[axisName]];
    });
  };

  const xaxis: ApexXAxis = {
    categories: dates,
    //    [
    //     "2023-12-01",
    //     "2023-11-01",
    //     "2023-10-01",
    //     "2023-09-01",
    //     "2023-08-01",
    //     "2023-07-01",
    //     "2023-06-01",
    //     "2023-05-01",
    //     "2023-04-01",
    //     "2021-12-01",
    //     "2021-11-01",
    //     "2021-10-01",
    //     "2021-09-01",
    //     "2021-08-01",
    //     "2021-07-01",
    //     "2021-06-01",
    //     "2021-05-01",
    //     "2021-04-01",
    //   ],
    type: "datetime",
  };

  return (
    <>
      <Button title="cdi" onClick={() => addAxis("cdi")} />
      <Button title="Imóveis" onClick={() => addAxis("imoveis")} />
      <LineChart series={series} options={{ xaxis }} />
    </>
  );
}
