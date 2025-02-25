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
      className={className}
      sx={{
        background: "linear-gradient(to right, #6366F1, #A855F7)", // Equivalent to Tailwind's from-indigo-500 to-purple-500
        color: "white",
        py: 1.5,
        fontFamily: "Playwrite IT Moderna",
        transition: "background 0.3s ease", // Smooth transition
        borderRadius: "9999px", // Equivalent to rounded-full
        "&:hover": {
          background: disabled
            ? "linear-gradient(to right, #A3A3A3, #737373)" // Keep gray when disabled
            : "linear-gradient(to right, #4F46E5, #9333EA)", // Hover gradient
        },
      }}
    >
      {loading ? <CircularProgress size={24.5} /> : children}
    </Button>
  );
};

export default CButton;
