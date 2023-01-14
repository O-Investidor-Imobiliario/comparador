import TextField from "@mui/material/TextField";

export interface CurrencyTextFieldProps {
  label: string;
  id: string;
  value: string;
  setValue: Function;
}

const CurrencyTextField: React.FC<CurrencyTextFieldProps> = ({
  label,
  id,
  value,
  setValue,
}) => {
  const handleChange = (value: string) => {
    if (value === "R$ " || value.length === 0) {
      value = "0";
    }
    value = value.replaceAll(".", "").replace(",", "").replace(/\D/g, "");
    const options = { minimumFractionDigits: 2 };
    const result = new Intl.NumberFormat("pt-BR", options).format(
      parseFloat(value) / 100
    );
    if (
      parseFloat(result.replaceAll(".", "").replace(",", ".")) <= 1000000000
    ) {
      return setValue("R$ " + result);
    }
  };

  return (
    <TextField
      id={id}
      label={label}
      variant="outlined"
      value={value}
      onChange={(event) => handleChange(event.target.value)}
      style={{ width: "100%" }}
    />
  );
};

export default CurrencyTextField;
