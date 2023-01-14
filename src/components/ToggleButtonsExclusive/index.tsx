import * as React from "react";

import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

import { Colors } from "../../styles/colors";
import { Property } from "csstype";

export interface ButtonOptions {
  title: string;
  value: string;
}

export interface ToggleButtonsExclusiveProps {
  buttonsOptions: ButtonOptions[];
  selected: string;
  onChange: (event: React.MouseEvent<HTMLElement>, newSelected: string) => void;
}

export default function ToggleButtonsExclusive({
  buttonsOptions,
  selected,
  onChange,
}: ToggleButtonsExclusiveProps) {
  // const [selected, setSelected] = React.useState<string | null>("left");

  const buttonStyle = {
    borderRadius: 5,
    backgroundColor: Colors.ICE,
    borderWidth: 0,
    textTransform: "none" as Property.TextTransform,
    padding: "8px 16px",
    height: 32,
    marginTop: 4,
    marginBottom: 4,
    color: `${Colors.PRIMARY}80`,
    fontSize: 16,
  };

  const buttonSelectedStyle = {
    ...buttonStyle,
    color: Colors.ICE,
    backgroundColor: Colors.PRIMARY,
  };

  return (
    <ToggleButtonGroup
      value={selected}
      exclusive
      onChange={onChange}
      aria-label="text alignment"
      color="primary"
      style={{
        display: "flex",
        justifyContent: "space-between",
        backgroundColor: Colors.ICE,
        padding: "4px 8px",
        gap: 8,
        alignItems: "center",
      }}
    >
      {buttonsOptions.map(({ value, title }, index) => (
        <ToggleButton
          key={`toggle-button-${index}`}
          value={value}
          aria-label={value}
          size="small"
          style={selected == value ? buttonSelectedStyle : buttonStyle}
        >
          {title}
        </ToggleButton>
      ))}
    </ToggleButtonGroup>
  );
}
