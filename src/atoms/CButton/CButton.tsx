import { JSX, ReactNode } from "react";

import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";

export interface IButton {
  children?: string | ReactNode;
  className?: string;
  type?: "contained" | "text" | "outlined";
  disabled?: boolean;
  onClick?: any;
  icon?: JSX.Element | null;
  loading?: boolean;
  style?: any;
  leftIcon?: JSX.Element | null;
  fullWidth: any;
}

const CButton = ({
  children,
  type = "contained",
  disabled = false,
  onClick = undefined,
  icon = null,
  loading = false,
  className = undefined,
  style = {},
  leftIcon = null,
}: IButton): JSX.Element => {
  return (
    <Button
      className={className}
      variant={type}
      disabled={loading ? loading : disabled}
      onClick={onClick}
      startIcon={icon}
      endIcon={leftIcon}
      style={{ ...style }}
      fullWidth
      autoFocus={type === "contained"}
    >
      {loading ? <CircularProgress size={24.5} /> : children}
    </Button>
  );
};

export default CButton;
