import CurrencyTextField from "../../components/CurrencyTextField";
import { MultipleLineChart } from "../../components/MultipleLineChart";
import ToggleButtonsExclusive from "../../components/ToggleButtonsExclusive";
import ToggleButtonsMultiple from "../../components/ToggleButtonsMultiple";
import { Colors } from "../../styles/colors";

import { useCallback, useEffect, useState } from "react";
import { InvestmentComparatorResults } from "../InvestmentComparatorResults";

import { RealStateService } from "../../services/real-state-service";
import { SavingsAccountService } from "../../services/savings-account-service";
import {
  calculateFinalIncome,
  calculatePercentDifferenceBetweenIncomes,
} from "../../utils/calculate-incomes";
import { getNumberFromCurrency } from "../../utils/get-number-from-currency";
import { getDataset, getInitialData } from "./getDatasets";
import { styles, TextFieldContainer } from "./styles";
import { Column, Row } from "../Grid";

export const InvestmentComparator = () => {
  const realStateService = new RealStateService();
  const realState = realStateService.getRealState();
  const savingsAccountService = new SavingsAccountService();
  const savingsAccount = savingsAccountService.getValues();

  const [initialValue, setInitialValue] = useState("R$ 500.000,00");
  const [investments, setInvestments] = useState<string[]>(() => [
    "poupança",
    "ipca",
  ]);
  const [period, setPeriod] = useState<string>("2");
  const [chartData, setChartData] = useState(
    getInitialData(
      getNumberFromCurrency(initialValue),
      ["realState", "poupança", "ipca"],
      parseInt(period)
    )
  );

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
        name: "Poupança",
        percentIncome: calculatePercentDifferenceBetweenIncomes(
          getNumberFromCurrency(initialValue),
          parseInt(period),
          realState,
          savingsAccount
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
      <Row
        style={{
          alignItems: "start",
        }}
      >
        <Column desktop={4} tablet={12} style={{ marginTop: 5 }}>
          <Row>
            <Column tablet={12} desktop={12} mobile={12}>
              <TextFieldContainer>
                <CurrencyTextField
                  value={initialValue}
                  setValue={setInitialValue}
                  id="investment-value"
                  label="Quanto você quer investir?"
                />
              </TextFieldContainer>
            </Column>
          </Row>
          <Row>
            <Column tablet={12} desktop={12} mobile={12}>
              <ResultComponent />
            </Column>
          </Row>
        </Column>
        <Column desktop={8}>
          <Row>
            <Column desktop={6} tablet={12} mobile={12}>
              <ToggleButtonsMultiple
                label={"Selecione os ativos para comparar"}
                buttonsOptions={[
                  {
                    title: "Poupança",
                    value: "poupança",
                    backgroundColor: Colors.RED,
                  },
                  {
                    title: "IPCA",
                    value: "ipca",
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
            </Column>
            <Column desktop={6} tablet={12} mobile={12}>
              <ToggleButtonsExclusive
                label="Selecione o período"
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
            </Column>
          </Row>
          <Row>
            <Column desktop={12} mobile={12} tablet={12}>
              {chartData?.labels?.length > 0 && (
                <MultipleLineChart data={chartData} />
              )}
            </Column>
          </Row>
        </Column>
      </Row>
    </div>
  );
};
