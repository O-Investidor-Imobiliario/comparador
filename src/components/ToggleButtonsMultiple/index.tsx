import * as React from "react";

import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { Property } from "csstype";

import { Colors } from "../../styles/colors";

export interface ButtonOptions {
  title: string;
  value: string;
}

export interface ToggleButtonsMultipleProps {
  buttonsOptions: ButtonOptions[];
}

export default function ToggleButtonsMultiple({
  buttonsOptions,
}: ToggleButtonsMultipleProps) {
  const [formats, setFormats] = React.useState<string[]>(() => []);

  const handleFormat = (
    event: React.MouseEvent<HTMLElement>,
    newFormats: string[]
  ) => {
    setFormats(newFormats);
  };

  const buttonStyle = {
    borderRadius: 5,
    backgroundColor: Colors.SUPER_LIGHT_GRAY,
    borderWidth: 0,
    textTransform: "none" as Property.TextTransform,
    padding: "8px 12px",
  };

  const buttonSelectedStyle = {
    ...buttonStyle,
    color: Colors.SUPER_LIGHT_GRAY,
    backgroundColor: Colors.PRIMARY,
  };

  return (
    <ToggleButtonGroup
      value={formats}
      onChange={handleFormat}
      aria-label="text formatting"
      color="primary"
      style={{ display: "flex", width: 330, justifyContent: "space-between" }}
    >
      {buttonsOptions.map(({ value, title }, index) => (
        <ToggleButton
          key={`toggle-button-${index}`}
          value={value}
          aria-label={value}
          style={formats.includes(value) ? buttonSelectedStyle : buttonStyle}
        >
          {title}
        </ToggleButton>
      ))}
    </ToggleButtonGroup>
  );
}
