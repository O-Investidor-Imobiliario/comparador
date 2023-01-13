import CurrencyTextField from "../../components/CurrencyTextField";
import { MultipleLineChart } from "../../components/MultipleLineChart";
import ToggleButtonsExclusive from "../../components/ToggleButtonsExclusive";
import ToggleButtonsMultiple, {
  ButtonOptions,
} from "../../components/ToggleButtonsMultiple";
import { Colors } from "../../styles/colors";

import { useState } from "react";
import { Results } from "./components/results";

import { CdiService } from "../../services/cdi-service";

const investmentOptions: ButtonOptions[] = [
  { title: "CDI", value: "cdi" },
  { title: "IPCA", value: "ipca" },
  { title: "Poupança", value: "poupanca" },
  { title: "IBOVESPA", value: "ibovespa" },
];

const periodOptions: ButtonOptions[] = [
  { title: "1 ano", value: "cdi" },
  { title: "2 anos", value: "ipca" },
  { title: "5 anos", value: "poupanca" },
  { title: "10 anos", value: "ibovespa" },
];

const cdiService = new CdiService();
const cdi = cdiService.getvalue();

const getDataset = (label: string, investmentValue: number) => {
  return {
    cdi: {
      label: "CDI",
      data: cdi.reduce((acc: number[], curr, idx) => {
        if (acc.length > 0) {
          return [...acc, curr.value * investmentValue + acc[idx - 1]];
        } else return [investmentValue];
      }, []),
      borderColor: Colors.RED,
      backgroundColor: Colors.RED,
      pointHoverBackgroundColor: Colors.RED,
      pointHoverBorderColor: Colors.WHITE,
      pointHoverRadius: 8,
      pointHoverBorderWidth: 2,
      yAxisID: "y",
    },
    ipca: {
      label: "IPCA",
      data: cdi.map(({ value }) => value),
      borderColor: Colors.PRIMARY,
      backgroundColor: Colors.PRIMARY,
      pointBackgroundColor: Colors.PRIMARY,
      pointHoverBackgroundColor: Colors.PRIMARY,
      pointHoverRadius: 8,
      pointHoverBorderColor: Colors.WHITE,
      pointHoverBorderWidth: 2,
      yAxisID: "y1",
    },
  }[label];
};

const getInitialData = (
  initialValue: number
): { labels: string[]; datasets: any[] } => {
  const labels = cdi.map(({ date }) => date);

  return {
    labels,
    datasets: [getDataset("cdi", initialValue)],
  };
};

export const ComparatorPage = () => {
  const initialValue = 10;
  const [chartData, setChartData] = useState(getInitialData(initialValue));
  const [investments, setInvestments] = useState<string[]>(() => ["cdi"]);

  const handleInvestmentsChange = (event: any, newInvestments: string[]) => {
    setInvestments(newInvestments);
    const newInvestment = event.target.value;

    if (
      chartData.datasets.some(
        ({ label }) => label.toLowerCase() === newInvestment
      )
    ) {
      setChartData((old) => ({
        ...old,
        datasets: old.datasets.filter(
          ({ label }) => label.toLowerCase() !== newInvestment
        ),
      }));
    } else {
      setChartData((old) => ({
        ...old,
        datasets: [...old.datasets, getDataset(newInvestment, initialValue)],
      }));
    }
  };

  return (
    <div
      style={{
        width: 920,
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div
          style={{
            width: "40%",
          }}
        >
          <CurrencyTextField
            id="investment-value"
            label="Quanto você quer investir?"
          />
        </div>
        <Results />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "end",
          marginBottom: 24,
        }}
      >
        <ToggleButtonsMultiple
          label={"Selecione os ativos para comparar"}
          buttonsOptions={investmentOptions}
          onChange={handleInvestmentsChange}
          values={investments}
        />
        <ToggleButtonsExclusive buttonsOptions={periodOptions} />
      </div>

      <MultipleLineChart data={chartData} />
    </div>
  );
};
