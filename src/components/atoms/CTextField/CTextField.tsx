import { IconButton, InputAdornment, TextField } from "@mui/material";
import { ITextField } from "./types";
import { forwardRef, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

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
      maxLength = 1024,
      onChange,
      onKeyDown,
      sx = {},
      ...props
    },
    ref
  ) => {
    const [showPassword, setShowPassword] = useState(false);
    const isPasswordField = type === "password";

    return (
      <TextField
        {...props}
        ref={ref}
        label={label}
        placeholder={placeholder}
        type={isPasswordField && !showPassword ? "password" : "text"}
        className={className}
        disabled={disabled}
        slotProps={{
          input: {
            inputProps: {
              maxLength: maxLength,
              style: {
                ...customStyle,
              },
            },
            endAdornment: isPasswordField ? (
              <InputAdornment position="end">
                <IconButton
                  onClick={() => setShowPassword((prev) => !prev)}
                  edge="end"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </IconButton>
              </InputAdornment>
            ) : null,
          },
        }}
        onInput={(e) => {
          const target = e.target as HTMLInputElement;
          if (target.value.length > maxLength) {
            target.value = target.value.slice(0, maxLength); //Incase type=text, maxLength not work
          }
        }}
        sx={{
          ...sx,
          "& .MuiOutlinedInput-input, & .MuiOutlinedInput-root, & .MuiOutlinedInput-root fieldset":
            {
              fontFamily: "inherit",
            },
          "& .MuiOutlinedInput-root": {
            transition: "all 0.3s ease",
            "& fieldset": {
              borderColor: "gray",
            },
            "&:hover fieldset, &.Mui-focused fieldset": {
              borderColor: "purple",
            },
          },
          "& .MuiInputLabel-root": {
            fontFamily: "inherit",
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
