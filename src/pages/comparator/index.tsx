import { useEffect, useState } from "react";
import { Button } from "../../components/Button";
import { LineChart } from "../../components/LineChart";
import { CdiService } from "../../services/cdi-service";
import { RealStateService } from "../../services/real-state-service";

const calcYields = (list: { value: number }[], investedValue: number) => {
  return list.reduce((acc: number[], curr, idx) => {
    if (acc.length > 0) {
      return [
        ...acc,
        parseFloat((curr.value * investedValue + acc[idx - 1]).toFixed(2)),
      ];
    } else return [parseFloat(investedValue.toFixed(2))];
  }, []);
};

export function ComparatorPage() {
  const cdiService = new CdiService();
  const realStateService = new RealStateService();

  const [investedValue, setInvestedValue] = useState("1000000");
  const [series, setSeries] = useState<{ name: string; data: number[] }[]>([]);
  const [cdiHistory, setCdiHistory] = useState<
    { date: string; value: number }[]
  >([]);
  const [realStateHistory, setRealStateHistory] = useState<
    { date: string; value: number }[]
  >([]);
  const [realStateData, setRealStateData] = useState<number[]>([]);

  const [cdiData, setCdiData] = useState<number[]>([]);
  const [dates, setDates] = useState<string[]>([]);

  useEffect(() => {
    setCdiHistory(
      cdiService
        .getCdi({
          startDate: "2020-01-01",
          endDate: "2022-01-01",
        })
        .reverse()
    );
    setRealStateHistory(
      realStateService.getRealStateAppreciationHistory().reverse()
    );
  }, []);

  useEffect(() => {
    setDates(cdiHistory.map((el) => el.date));
    calculate();
  }, [cdiHistory]);

  useEffect(() => {
    const index = series.findIndex((serie) => serie.name === "cdi");

    setSeries((old) => {
      if (index > -1) {
        return [
          ...old.filter((serie) => serie.name !== "cdi"),
          { name: "cdi", data: cdiData },
        ];
      }

      return old;
    });
  }, [cdiData]);

  useEffect(() => {
    const index = series.findIndex((serie) => serie.name === "realState");

    setSeries((old) => {
      if (index > -1) {
        return [
          ...old.filter((serie) => serie.name !== "realState"),
          { name: "realState", data: realStateData },
        ];
      }

      return old;
    });
  }, [realStateData]);

  const calculate = () => {
    setCdiData(
      calcYields(
        cdiHistory.map((num) => ({
          value: num.value / 100,
        })),
        parseFloat(investedValue)
      )
    );
    setRealStateData(
      // calcYields(realStateHistory, parseFloat(investedValue))
      realStateHistory.map((el, idx) =>
        parseFloat(
          (idx > 0
            ? el.value * parseFloat(investedValue)
            : parseFloat(investedValue)
          ).toFixed(2)
        )
      )
    );
  };

  const addOrRemoveAxis = (axisName: "cdi" | "realState") => {
    // | "imoveis") => {
    const index = series.findIndex((serie) => serie.name === axisName);

    setSeries((old) => {
      if (index > -1) {
        return old.filter((serie) => serie.name !== axisName);
      }

      return [...old, axis[axisName]];
    });
  };

  const axis: {
    cdi: { name: string; data: number[] };
    realState: { name: string; data: number[] };
  } = {
    cdi: { name: "cdi", data: cdiData },
    realState: { name: "realState", data: realStateData },
  };

  const xaxis: ApexXAxis = {
    categories: dates,
    type: "datetime",
  };

  return (
    <>
      <input
        onChange={(event) => setInvestedValue(event.target.value)}
        value={investedValue}
      />
      <Button title="Calcular" onClick={calculate} />

      <Button title="cdi" onClick={() => addOrRemoveAxis("cdi")} />
      {/* <Button title="Imóveis" onClick={() => addOrRemoveAxis("realState")} /> */}
      <LineChart series={series} options={{ xaxis }} />
    </>
  );
}
