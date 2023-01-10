import TextField from "@mui/material/TextField";
import { useState } from "react";

export interface CurrencyTextFieldProps {
  label: string;
  id: string;
}

const CurrencyTextField: React.FC<CurrencyTextFieldProps> = ({ label, id }) => {
  const [value, setValue] = useState("R$ 0,00");

  const handleChange = (value: string) => {
    if (value === "R$ ") {
      value = "0";
    }

    value = value.replace(".", "").replace(",", "").replace(/\D/g, "");
    const options = { minimumFractionDigits: 2 };
    const result = new Intl.NumberFormat("pt-BR", options).format(
      parseFloat(value) / 100
    );

    return setValue("R$ " + result);
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
