import CurrencyTextField from "../../components/CurrencyTextField";
import { MultipleLineChart } from "../../components/MultipleLineChart";
import ToggleButtonsExclusive from "../../components/ToggleButtonsExclusive";
import ToggleButtonsMultiple from "../../components/ToggleButtonsMultiple";
import { Colors } from "../../styles/colors";

import { useCallback, useEffect, useState } from "react";
import { InvestmentComparatorResults } from "../InvestmentComparatorResults";

import { IpcaService } from "../../services/ipca-service";
import { RealStateService } from "../../services/real-state-service";
import {
  calculateFinalIncome,
  calculatePercentDifferenceBetweenIncomes,
} from "../../utils/calculate-incomes";
import { getNumberFromCurrency } from "../../utils/get-number-from-currency";
import { getDataset, getInitialData } from "./getDatasets";
import { styles } from "./styles";

export const InvestmentComparator = () => {
  const realStateService = new RealStateService();
  const realState = realStateService.getRealState();
  const ipcaService = new IpcaService();
  const ipca = ipcaService.getValues();

  const [width, setWidth] = useState(window.innerWidth);
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

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);
  });

  useEffect(
    useCallback(() => {
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
    }, [initialValue, period]),
    [initialValue, period]
  );

  const ResultComponent = () => (
    <InvestmentComparatorResults
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
        percentIncome: calculatePercentDifferenceBetweenIncomes(
          getNumberFromCurrency(initialValue),
          parseInt(period),
          realState,
          ipca
        ),
      }}
    />
  );

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

  return (
    <div style={styles.container}>
      <div style={styles.headerContainer}>
        <div
          style={
            width >= 1024
              ? styles.textFieldContainer
              : { ...styles.textFieldContainer, width: "100%" }
          }
        >
          <CurrencyTextField
            value={initialValue}
            setValue={setInitialValue}
            id="investment-value"
            label="Quanto você quer investir?"
          />
        </div>

        {width >= 1024 && <ResultComponent />}
      </div>
      <div style={styles.filtersContainer}>
        <ToggleButtonsMultiple
          label={"Selecione os ativos para comparar"}
          buttonsOptions={[
            { title: "IPCA", value: "ipca", backgroundColor: Colors.RED },
            {
              title: "Poupança",
              value: "poupança",
              backgroundColor: Colors.BROWN,
            },
            {
              title: "IBOVESPA",
              value: "ibovespa",
              backgroundColor: Colors.STRONG_GRAY,
            },
            { title: "CDI", value: "cdi", backgroundColor: Colors.GRAY },
          ]}
          onChange={handleInvestmentsChange}
          values={investments}
        />
        <ToggleButtonsExclusive
          buttonsOptions={[
            { title: "1 ano", value: "1" },
            { title: "2 anos", value: "2" },
            { title: "5 anos", value: "5" },
            { title: "10 anos", value: "10" },
          ]}
          selected={period}
          onChange={(_, newSelected) => {
            if (newSelected) {
              setPeriod(newSelected);
            }
          }}
        />
      </div>

      {chartData?.labels?.length > 0 && <MultipleLineChart data={chartData} />}

      {width < 1024 && (
        <div>
          <ResultComponent />
        </div>
      )}
    </div>
  );
};
