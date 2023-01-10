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
}

export default function ToggleButtonsExclusive({
  buttonsOptions,
}: ToggleButtonsExclusiveProps) {
  const [alignment, setAlignment] = React.useState<string | null>("left");

  const handleAlignment = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string | null
  ) => {
    setAlignment(newAlignment);
  };

  const buttonStyle = {
    borderRadius: 5,
    backgroundColor: Colors.SUPER_LIGHT_GRAY,
    borderWidth: 0,
    textTransform: "none" as Property.TextTransform,
    padding: "8px 12px",
    // "&:focus": { border: "none", outline: "none" },
  };

  const buttonSelectedStyle = {
    ...buttonStyle,
    color: Colors.SUPER_LIGHT_GRAY,
    backgroundColor: Colors.PRIMARY,
  };

  return (
    <ToggleButtonGroup
      value={alignment}
      exclusive
      onChange={handleAlignment}
      aria-label="text alignment"
      color="primary"
      style={{
        display: "flex",
        width: 367,
        justifyContent: "space-between",
        backgroundColor: Colors.SUPER_LIGHT_GRAY,
        padding: 10,
      }}
    >
      {buttonsOptions.map(({ value, title }, index) => (
        <ToggleButton
          key={`toggle-button-${index}`}
          value={value}
          aria-label={value}
          size="small"
          style={alignment == value ? buttonSelectedStyle : buttonStyle}
        >
          {title}
        </ToggleButton>
      ))}
    </ToggleButtonGroup>
  );
}
