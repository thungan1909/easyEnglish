import { JSX, ReactNode } from "react";

import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";

export interface IButton {
  children?: string | ReactNode;
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  onClick?: any;
  startIcon?: JSX.Element | null;
  loading?: boolean;
  style?: any;
  endIcon?: JSX.Element | null;
  variant?: "text" | "contained" | "outlined";
  isRounded?: boolean;
  size?: "small" | "medium" | "large";
  textTransform?: "capitalize" | "lowercase" | "uppercase";
}

const CButton = ({
  children,
  type = "button",
  disabled = false,
  onClick = undefined,
  startIcon = null,
  loading = false,
  className = "",
  style = {},
  endIcon = null,
  variant = "contained",
  isRounded = false,
  size = "medium",
  textTransform = "uppercase",
}: IButton): JSX.Element => {
  const variantStyles = {
    contained: {
      background: "linear-gradient(to right, #6366F1, #A855F7)",
      color: "white",
      "&:hover": {
        background: disabled
          ? "linear-gradient(to right, #A3A3A3, #737373)"
          : "linear-gradient(to right, #4F46E5, #9333EA)",
      },
    },
    outlined: {
      background: "transparent",
      border: "2px solid #6366F1",
      color: "#6366F1",
      "&:hover": {
        borderColor: "#4F46E5",
        color: "#4F46E5",
        background: "rgba(99, 102, 241, 0.1)",
      },
    },
    text: {
      background: "transparent",
      color: "#6366F1",
      "&:hover": {
        color: "#4F46E5",
      },
    },
  };

  return (
    <Button
      type={type}
      variant={variant}
      disabled={disabled || loading}
      onClick={onClick}
      startIcon={startIcon}
      endIcon={endIcon}
      style={{ ...style }}
      className={className}
      size={size}
      sx={{
        padding: size === "small" ? 0.5 : 1,
        borderRadius: isRounded ? "9999px" : "8px",
        whiteSpace: "nowrap",
        minWidth: "max-content",
        textTransform: textTransform,
        ...(variantStyles[variant] || variantStyles.contained),
      }}
    >
      {loading ? <CircularProgress size={24.5} /> : children}
    </Button>
  );
};

export default CButton;
