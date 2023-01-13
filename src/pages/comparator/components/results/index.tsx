import { Colors } from "../../../../styles/colors";

export const Results = () => {
  const result = 4000000;
  const income = 3000000;

  const compare = {
    name: "CDI",
    percentIncome: "250%",
  };

  return (
    <div>
      <p>Esse seria seu patrimônio se tivesse investido em imóveis</p>
      <p style={styles.result}>
        {result.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
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
        {compare.percentIncome} a mais que o{" "}
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
