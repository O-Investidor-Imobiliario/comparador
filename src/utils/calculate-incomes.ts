export const calculateIncome = (
  percentsList: { date: string; value: number }[],
  investmentValue: number,
  period: number = 5
) => {
  return percentsList
    .filter((item) => {
      const itemYear = parseInt(item.date.split("/")[1]);
      return itemYear >= 2022 - period + 1;
    })
    .reduce((acc: number[], curr, idx) => {
      if (acc.length > 0) {
        return [...acc, acc[idx - 1] * (curr.value / 100 + 1)];
      } else return [investmentValue];
    }, []);
};

export const calculateFinalIncome = (
  percentsList: { date: string; value: number }[],
  investmentValue: number,
  period: number
) => {
  const incomes = calculateIncome(percentsList, investmentValue, period);
  return incomes[incomes.length - 1];
};

export const calculatePercentDifferenceBetweenIncomes = (
  investmentValue: number,
  period: number,
  dataset1: { date: string; value: number }[],
  dataset2: { date: string; value: number }[]
) => {
  const dataset1Income =
    calculateFinalIncome(dataset1, investmentValue, period) - investmentValue;
  const dataset2Income =
    calculateFinalIncome(dataset2, investmentValue, period) - investmentValue;

  const differenceOfIncomes = dataset1Income - dataset2Income;

  return `${((differenceOfIncomes / dataset2Income) * 100)
    .toFixed(2)
    .replace(".", ",")}%`;
};
