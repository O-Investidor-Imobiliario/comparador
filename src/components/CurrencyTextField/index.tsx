import TextField from "@mui/material/TextField";
import { useEffect, useState } from "react";

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
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);
  });

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
      InputProps={{
        style:
          width >= 24
            ? { fontWeight: "bold", fontSize: 24 }
            : { fontWeight: "bold", fontSize: 48, padding: 8 },
      }}
      InputLabelProps={{
        style: width >= 24 ? { fontSize: 18 } : { fontSize: 48, top: -20 },
      }}
      style={{ width: "100%" }}
    />
  );
};

export default CurrencyTextField;
