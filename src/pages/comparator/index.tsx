import CurrencyTextField from "../../components/CurrencyTextField";
import { MultipleLineChart } from "../../components/MultipleLineChart";
import ToggleButtonsExclusive from "../../components/ToggleButtonsExclusive";
import ToggleButtonsMultiple, {
  ButtonOptions,
} from "../../components/ToggleButtonsMultiple";
import { Colors } from "../../styles/colors";

import { useState, useEffect, useCallback } from "react";
import { Results } from "./components/results";

import { CdiService } from "../../services/cdi-service";
import { RealStateService } from "../../services/real-state-service";
import { SavingsAccountService } from "../../services/savings-account-service";
import { IbovespaService } from "../../services/ibovespa-service";
import { IpcaService } from "../../services/ipca-service";

const investmentOptions: ButtonOptions[] = [
  { title: "IPCA", value: "ipca", backgroundColor: Colors.RED },
  { title: "Poupança", value: "poupança", backgroundColor: Colors.BROWN },
  { title: "IBOVESPA", value: "ibovespa", backgroundColor: Colors.STRONG_GRAY },
  { title: "CDI", value: "cdi", backgroundColor: Colors.GRAY },
];

const periodOptions: ButtonOptions[] = [
  { title: "1 ano", value: "1" },
  { title: "2 anos", value: "2" },
  { title: "5 anos", value: "5" },
  { title: "10 anos", value: "10" },
];

const cdiService = new CdiService();
const realStateService = new RealStateService();
const savingsAccountService = new SavingsAccountService();
const ibovespaService = new IbovespaService();
const ipcaService = new IpcaService();

const cdi = cdiService.getvalue();
const realState = realStateService.getRealState();
const savingsAccount = savingsAccountService.getValues();
const ibovespa = ibovespaService.getValues();
const ipca = ipcaService.getValues();

const calculateIncome = (
  percentsList: { date: string; value: number }[],
  investmentValue: number,
  period: number = 5
) => {
  return percentsList
    .filter((item) => {
      const itemYear = parseInt(item.date.split("/")[1]);
      return itemYear >= 2022 - period + 1; // && itemYear >= 2022;
    })
    .reduce((acc: number[], curr, idx) => {
      if (acc.length > 0) {
        return [...acc, acc[idx - 1] * (curr.value / 100 + 1)];
      } else return [investmentValue];
    }, []);
};

const calculateFinalIncome = (
  percentsList: { date: string; value: number }[],
  investmentValue: number,
  period: number
) => {
  const incomes = calculateIncome(percentsList, investmentValue, period);
  return incomes[incomes.length - 1];
};

const calculatePercentMoreThenIpca = (
  investmentValue: number,
  period: number
) => {
  const realStateFinalIncome = calculateFinalIncome(
    realState,
    investmentValue,
    period
  );
  const ipcaFinalIncome = calculateFinalIncome(ipca, investmentValue, period);

  const differenceOfIncomes = realStateFinalIncome - ipcaFinalIncome;
  return `${((differenceOfIncomes / ipcaFinalIncome) * 100)
    .toFixed(2)
    .replace(".", ",")}%`;
};

const getDataset = (label: string, investmentValue: number, period: number) => {
  return {
    realState: {
      label: "Litoral Catarinense",
      data: calculateIncome(realState, investmentValue, period),
      borderColor: Colors.PRIMARY,
      backgroundColor: Colors.PRIMARY,
      pointHoverBackgroundColor: Colors.PRIMARY,
      pointHoverBorderColor: Colors.WHITE,
      pointHoverRadius: 8,
      pointHoverBorderWidth: 2,
      yAxisID: "y",
    },

    ipca: {
      label: "IPCA",
      data: calculateIncome(ipca, investmentValue, period),
      borderColor: Colors.RED,
      backgroundColor: Colors.RED,
      pointBackgroundColor: Colors.RED,
      pointHoverBackgroundColor: Colors.RED,
      pointHoverRadius: 8,
      pointHoverBorderColor: Colors.WHITE,
      pointHoverBorderWidth: 2,
      yAxisID: "y",
    },
    poupança: {
      label: "Poupança",
      data: calculateIncome(savingsAccount, investmentValue, period),
      borderColor: Colors.BROWN,
      backgroundColor: Colors.BROWN,
      pointHoverBackgroundColor: Colors.BROWN,
      pointHoverBorderColor: Colors.WHITE,
      pointHoverRadius: 8,
      pointHoverBorderWidth: 2,
      yAxisID: "y",
    },
    ibovespa: {
      label: "IBOVESPA",
      data: calculateIncome(ibovespa, investmentValue, period),
      borderColor: Colors.STRONG_GRAY,
      backgroundColor: Colors.STRONG_GRAY,
      pointHoverBackgroundColor: Colors.STRONG_GRAY,
      pointHoverBorderColor: Colors.WHITE,
      pointHoverRadius: 8,
      pointHoverBorderWidth: 2,
      yAxisID: "y",
    },
    cdi: {
      label: "CDI",
      data: calculateIncome(cdi, investmentValue, period),
      borderColor: Colors.GRAY,
      backgroundColor: Colors.GRAY,
      pointHoverBackgroundColor: Colors.GRAY,
      pointHoverBorderColor: Colors.WHITE,
      pointHoverRadius: 8,
      pointHoverBorderWidth: 2,
      yAxisID: "y",
    },
  }[label];
};

const getInitialData = (
  initialValue: number,
  datasets: string[],
  period: number
): { labels: string[]; datasets: any[] } => {
  const labels = realState
    .filter((item) => {
      const itemYear = parseInt(item.date.split("/")[1]);
      return itemYear >= 2022 - period + 1; // && itemYear >= 2022;
    })
    .map(({ date }) => date);

  return {
    labels,
    datasets: datasets.map((dataset) =>
      getDataset(dataset, initialValue, period)
    ),
  };
};

const getNumberFromCurrency = (currency: string): number => {
  return parseFloat(
    currency.replace("R$ ", "").replaceAll(".", "").replace(",", ".")
  );
};

export const ComparatorPage = () => {
  const [initialValue, setInitialValue] = useState("R$ 50.000,00");
  const [investments, setInvestments] = useState<string[]>(() => ["ipca"]);
  const [period, setPeriod] = useState<string>("10");
  const [chartData, setChartData] = useState(
    getInitialData(
      getNumberFromCurrency(initialValue),
      ["realState", "ipca"],
      parseInt(period)
    )
  );

  const setDataSets = useCallback(() => {
    if (chartData) {
      const datasets: string[] = chartData.datasets.map((dataset, idx) => {
        if (idx === 0) {
          return "realState";
        } else {
          return dataset.label.toLowerCase();
        }
      });
      setChartData(
        getInitialData(
          getNumberFromCurrency(initialValue),
          datasets,
          parseInt(period)
        )
      );
    }
  }, [initialValue, period]);

  useEffect(() => {
    setDataSets();
  }, [initialValue, period]);

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
        datasets: [
          ...old.datasets,
          getDataset(
            newInvestment,
            getNumberFromCurrency(initialValue),
            parseInt(period)
          ),
        ],
      }));
    }
  };

  const handlePeriodChange = (
    event: React.MouseEvent<HTMLElement>,
    newSelected: string
  ) => {
    setPeriod(newSelected);
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
            value={initialValue}
            setValue={setInitialValue}
            id="investment-value"
            label="Quanto você quer investir?"
          />
        </div>
        <Results
          income={
            calculateFinalIncome(
              realState,
              getNumberFromCurrency(initialValue),
              parseInt(period)
            ) - getNumberFromCurrency(initialValue)
          }
          result={calculateFinalIncome(
            realState,
            getNumberFromCurrency(initialValue),
            parseInt(period)
          )}
          compare={{
            name: "inflação",
            percentIncome: calculatePercentMoreThenIpca(
              getNumberFromCurrency(initialValue),
              parseInt(period)
            ),
          }}
        />
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
        <ToggleButtonsExclusive
          buttonsOptions={periodOptions}
          selected={period}
          onChange={handlePeriodChange}
        />
      </div>

      {chartData?.labels?.length > 0 && <MultipleLineChart data={chartData} />}
    </div>
  );
};
