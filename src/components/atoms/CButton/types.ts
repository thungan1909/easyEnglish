import { JSX, ReactNode } from "react";

export interface IButton {
  children?: string | ReactNode;
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
  startIcon?: JSX.Element | null;
  loading?: boolean;
  style?: React.CSSProperties | undefined;
  endIcon?: JSX.Element | null;
  variant?: "text" | "contained" | "outlined";
  isRounded?: boolean;
  size?: "small" | "medium" | "large";
  textTransform?: "capitalize" | "lowercase" | "uppercase" | "none";
}
