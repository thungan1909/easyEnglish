import { SxProps, Theme } from "@mui/material";
import { CSSProperties, JSX } from "react";

export interface ITextField {
  className?: string;
  type?: "text" | "password" | "email" | "number" | "tel";
  disabled?: boolean;
  customStyle?: CSSProperties;
  label?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  maxLength?: number;
  sx?: SxProps<Theme>;
  startIcon?: JSX.Element | null;
}
