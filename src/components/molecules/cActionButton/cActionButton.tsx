import CButton from "../../../components/atoms/CButton/CButton";
import { Tooltip } from "@mui/material";
const CActionButton = ({
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
      <CButton isRounded variant="outlined" size="medium" onClick={onClick}>
        {icon}
      </CButton>
    </span>
  </Tooltip>
);
export default CActionButton;
