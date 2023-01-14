import Tooltip from "@mui/material/Tooltip";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { Colors } from "../../styles/colors";
import { ClickAwayListener, IconButton } from "@mui/material";
import { useState } from "react";

interface InfoTooltipProps {
  title: string;
}

export const InfoTooltip: React.FC<InfoTooltipProps> = ({ title }) => {
  const [open, setOpen] = useState(false);

  const handleTooltipClose = () => {
    setOpen(false);
  };

  const handleTooltipOpen = () => {
    setOpen(true);
  };

  return (
    <ClickAwayListener onClickAway={handleTooltipClose}>
      <Tooltip
        title={title}
        onClose={handleTooltipClose}
        open={open}
        disableFocusListener
        disableHoverListener
        disableTouchListener
      >
        <IconButton onClick={handleTooltipOpen} style={{ borderRadius: 300 }}>
          <InfoOutlinedIcon style={{ color: Colors.PRIMARY }} />
        </IconButton>
      </Tooltip>
    </ClickAwayListener>
  );
};
