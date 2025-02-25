import { JSX, ReactNode } from "react";

import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";

export interface IButton {
  children?: string | ReactNode;
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  onClick?: any;
  icon?: JSX.Element | null;
  loading?: boolean;
  style?: any;
  leftIcon?: JSX.Element | null;
  fullWidth?: boolean;
}

const CButton = ({
  children,
  type = "button",
  disabled = false,
  onClick = undefined,
  icon = null,
  loading = false,
  className = "",
  style = {},
  leftIcon = null,
  fullWidth = false,
}: IButton): JSX.Element => {
  return (
    <Button
      type={type}
      variant="contained"
      disabled={disabled || loading}
      onClick={onClick}
      startIcon={icon}
      endIcon={leftIcon}
      style={{ ...style }}
      fullWidth={fullWidth}
      className={`!bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white !py-3 !rounded-full ${className}`}
    >
      {loading ? <CircularProgress size={24.5} /> : children}
    </Button>
  );
};

export default CButton;
