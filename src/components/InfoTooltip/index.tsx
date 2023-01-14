import Tooltip from "@mui/material/Tooltip";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { Colors } from "../../styles/colors";

interface InfoTooltipProps {
  title: string;
}

export const InfoTooltip: React.FC<InfoTooltipProps> = ({ title }) => {
  return (
    <Tooltip title={title}>
      <InfoOutlinedIcon style={{ color: Colors.PRIMARY }} />
    </Tooltip>
  );
};
