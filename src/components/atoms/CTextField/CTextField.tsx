import { TextField } from "@mui/material";
import { ITextField } from "./types";
import { forwardRef } from "react";

const CTextField = forwardRef<HTMLInputElement | null, ITextField>(
  (
    {
      type = "text",
      disabled = false,
      className,
      customStyle = {},
      label,
      placeholder,
      value = "",
      maxLength = 50,
      onKeyDown,
      ...props
    },
    ref
  ) => {
    return (
      <TextField
        {...props}
        ref={ref}
        label={label}
        placeholder={placeholder}
        type={type}
        disabled={disabled}
        slotProps={{
          input: {
            inputProps: {
              maxLength: maxLength,
              style: {
                ...customStyle,
              },
            },
          },
        }}
        onInput={(e) => {
          const target = e.target as HTMLInputElement;
          if (target.value.length > maxLength) {
            target.value = target.value.slice(0, maxLength); //Incase type=text, maxLength not work
          }
        }}
        sx={{
          "& .MuiOutlinedInput-root": {
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
          "& input[type='number']": {
            MozAppearance: "textfield", // Firefox
            "&::-webkit-inner-spin-button, &::-webkit-outer-spin-button": {
              WebkitAppearance: "none", // Chrome
              margin: 0,
            },
          },
        }}
        onKeyDown={(e) => {
          if (onKeyDown) {
            onKeyDown(e as React.KeyboardEvent<HTMLInputElement>);
          }
        }}
      />
    );
  }
);

export default CTextField;
