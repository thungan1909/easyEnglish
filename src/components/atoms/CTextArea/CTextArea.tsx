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
      onChange={onChange}
      style={{
        border: "1px solid",
        paddingInline: "16px",
        borderColor: "var(--main-color)",
      }}
    />
  );
};

export default CTextArea;
