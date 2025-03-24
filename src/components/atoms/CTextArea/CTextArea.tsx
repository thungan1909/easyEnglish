import { TextareaAutosize } from "@mui/material";
import { JSX } from "react";

export interface ITextArea {
  maxRows?: number;
  minRows?: number;
  maxLength?: number;
  ariaLabel?: string;
  placeholder?: string;
  className?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  disabled?: boolean;
}

const CTextArea = ({
  maxRows = 100,
  minRows = 1,
  maxLength = 100,
  ariaLabel = "",
  placeholder = "",
  className = "",
  value = "",
  onChange,
  disabled = false,
}: ITextArea): JSX.Element => {
  return (
    <TextareaAutosize
      maxRows={maxRows}
      minRows={minRows}
      maxLength={maxLength}
      aria-label={ariaLabel}
      placeholder={placeholder}
      className={className}
      value={value}
      disabled={disabled}
      onChange={onChange}
      style={{
        border: "1px solid",
        borderRadius: "1rem",
        padding: "16px",
        borderColor: "var(--main-color)",
        pointerEvents: disabled ? "none" : "auto",
        opacity: disabled ? 0.6 : 1,
        backgroundColor: disabled ? "#f0f0f0" : "white",
      }}
    />
  );
};

export default CTextArea;
