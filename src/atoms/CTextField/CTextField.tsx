import { TextField } from "@mui/material";
import { ITextField } from "./types";
import { forwardRef } from "react";

const CTextField = forwardRef<HTMLInputElement, ITextField>(
  (
    {
      type = "text",
      disabled = false,
      className,
      style = {},
      label,
      placeholder,
      value = "",
      ...props
    },
    ref
  ) => {
    return (
      <TextField
        {...props}
        inputRef={ref}
        className={className}
        label={label}
        placeholder={placeholder}
        type={type}
        disabled={disabled}
        sx={{
          "& .MuiOutlinedInput-root": {
            // borderRadius: "9999px",
            transition: "all 0.3s ease",
            "& fieldset": {
              borderColor: "gray",
            },
            "&:hover fieldset": {
              borderColor: "purple",
            },
            "&.Mui-focused fieldset": {
              borderColor: "purple",
            },
          },
          "& .MuiInputLabel-root": {
            "&.Mui-focused": {
              color: "purple",
            },
          },
          ...style,
        }}
        autoFocus={type === "text"}
      />
    );
  }
);

export default CTextField;
