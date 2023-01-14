import { Colors } from "../../../../styles/colors";

interface ResultProps {
  result: number;
  income: number;
  compare: { name: string; percentIncome: string };
}

export const Results: React.FC<ResultProps> = ({ result, income, compare }) => {
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
          {" " + income &&
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
const styles = {
  result: {
    color: Colors.PRIMARY,
    fontWeight: "bold",
    fontSize: 48,
    lineHeight: "48px",
    margin: 0,
  },
  comparatorName: {
    color: Colors.RED,
  },
  incomeValue: {
    color: Colors.GREEN,
    fontWeight: "bold",
  },
};
