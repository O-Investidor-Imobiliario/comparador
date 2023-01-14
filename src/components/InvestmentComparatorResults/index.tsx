import { styles } from "./styles";

interface InvestmentComparatorResultsProps {
  result: number;
  income: number;
  compare: { name: string; percentIncome: string };
}

export const InvestmentComparatorResults: React.FC<
  InvestmentComparatorResultsProps
> = ({ result, income, compare }) => {
  return (
    <div>
      <p>Esse seria seu patrimônio se tivesse investido em imóveis</p>
      <p style={styles.result}>
        {result &&
          result.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
      </p>
      <p>
        Rendimento de
        <span style={styles.incomeValue}>
          {" " +
            income.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
        </span>
      </p>

      <p>
        {compare.percentIncome} a mais que a{" "}
        <span style={styles.comparatorName}>{compare.name}</span>
      </p>
    </div>
  );
};