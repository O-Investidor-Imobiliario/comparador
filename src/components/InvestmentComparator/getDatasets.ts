import { CdiService } from "../../services/cdi-service";
import { IbovespaService } from "../../services/ibovespa-service";
import { IpcaService } from "../../services/ipca-service";
import { RealStateService } from "../../services/real-state-service";
import { SavingsAccountService } from "../../services/savings-account-service";
import { Colors } from "../../styles/colors";
import { calculateIncome } from "../../utils/calculate-incomes";

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

export const getDataset = (
  label: string,
  investmentValue: number,
  period: number
) => {
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
      borderColor: Colors.BROWN,
      backgroundColor: Colors.BROWN,
      pointHoverBackgroundColor: Colors.BROWN,
      pointHoverRadius: 8,
      pointHoverBorderColor: Colors.WHITE,
      pointHoverBorderWidth: 2,
      yAxisID: "y",
    },
    poupança: {
      label: "Poupança",
      data: calculateIncome(savingsAccount, investmentValue, period),
      borderColor: Colors.RED,
      backgroundColor: Colors.RED,
      pointHoverBackgroundColor: Colors.RED,
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

export const getInitialData = (
  initialValue: number,
  datasets: string[],
  period: number
): { labels: string[]; datasets: any[] } => {
  const labels = realState
    .filter((item) => {
      const itemYear = parseInt(item.date.split("/")[1]);
      return itemYear >= 2022 - period + 1;
    })
    .map(({ date }) => date);

  return {
    labels,
    datasets: datasets.map((dataset) =>
      getDataset(dataset, initialValue, period)
    ),
  };
};
