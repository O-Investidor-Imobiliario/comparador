import * as React from "react";

import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { Property } from "csstype";

import { Colors } from "../../styles/colors";

export interface ButtonOptions {
  title: string;
  value: string;
  backgroundColor?: string; //adicionar a cor
}

export interface ToggleButtonsMultipleProps {
  label: string;
  buttonsOptions: ButtonOptions[];
  onChange: (
    event: React.MouseEvent<HTMLElement>,
    newFormats: string[]
  ) => void;
  values: string[];
}

export default function ToggleButtonsMultiple({
  label,
  buttonsOptions,
  onChange,
  values,
}: ToggleButtonsMultipleProps) {
  const buttonStyle = {
    borderRadius: 5,
    backgroundColor: Colors.ICE,
    borderWidth: 0,
    textTransform: "none" as Property.TextTransform,
    padding: "8px 16px",
    margin: 0,
    color: `${Colors.PRIMARY}80`,
  };

  const buttonSelectedStyle = {
    ...buttonStyle,
    color: Colors.ICE,
    backgroundColor: Colors.PRIMARY,
  };

  return (
    <div>
      <p style={{ marginTop: 0, backgroundColor: "red" }}>{label}</p>
      <ToggleButtonGroup
        value={values}
        onChange={onChange}
        aria-label="text formatting"
        color="primary"
        style={{
          display: "flex",
          width: 330,
          justifyContent: "space-between",
          height: 48,
        }}
      >
        {buttonsOptions.map(({ value, title, backgroundColor }, index) => {
          return (
            <ToggleButton
              key={`toggle-button-${index}`}
              value={value}
              aria-label={value}
              style={
                values.includes(value)
                  ? { ...buttonSelectedStyle, backgroundColor }
                  : buttonStyle
              }
            >
              {title}
            </ToggleButton>
          );
        })}
      </ToggleButtonGroup>
    </div>
  );
}
