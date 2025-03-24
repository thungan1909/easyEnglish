import CButton from "../../../components/atoms/CButton/CButton";
import { Tooltip } from "@mui/material";
const ActionButton = ({
  title,
  onClick,
  icon,
}: {
  title: string;
  onClick: (e: React.MouseEvent) => void;
  icon: React.ReactNode;
}) => (
  <Tooltip title={title}>
    <span>
      <CButton isRounded variant="outlined" size="small" onClick={onClick}>
        {icon}
      </CButton>
    </span>
  </Tooltip>
);
export default ActionButton;
