import { TextareaAutosize } from "@mui/material";
import { JSX } from "react";

export interface ITextArea {
  maxRows?: number;
  minRows?: number;
  ariaLabel?: string;
  placeholder?: string;
  defaultValue?: string;
  className?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const CTextArea = ({
  maxRows = 100,
  minRows = 1,
  ariaLabel = "",
  placeholder = "",
  defaultValue = "",
  className = "",
  value = "",
  onChange,
}: ITextArea): JSX.Element => {
  return (
    <TextareaAutosize
      maxRows={maxRows}
      minRows={minRows}
      aria-label={ariaLabel}
      placeholder={placeholder}
      defaultValue={defaultValue}
      className={className}
      value={value}
      onChange={onChange}
      style={{
        border: "1px solid",
        borderColor: "var(--main-color)",
      }}
    />
  );
};

export default CTextArea;
