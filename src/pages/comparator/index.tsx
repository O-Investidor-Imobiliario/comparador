import CurrencyTextField from "../../components/CurrencyTextField";
import { MultipleLineChart } from "../../components/MultipleLineChart";
import ToggleButtonsExclusive from "../../components/ToggleButtonsExclusive";
import ToggleButtonsMultiple, {
  ButtonOptions,
} from "../../components/ToggleButtonsMultiple";
export const ComparatorPage = () => {
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
  return (
    <>
      <CurrencyTextField
        id="investment-value"
        label="Quanto você quer investir?"
      />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <ToggleButtonsMultiple buttonsOptions={investmentOptions} />
        <ToggleButtonsExclusive buttonsOptions={periodOptions} />
      </div>

      <MultipleLineChart />
    </>
  );
};
