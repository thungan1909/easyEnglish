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
      value,
      maxLength = 1024,
      onChange,
      onKeyDown,
      startIcon,
      sx = {},
      ...props
    },
    ref
  ) => {
    // const [inputValue, setInputValue] = useState(value);
    const [showPassword, setShowPassword] = useState(false);
    const isPasswordField = type === "password";

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      // let newValue = e.target.value.slice(0, maxLength);
      // setInputValue(newValue);

      if (onChange) {
        onChange(e);
      }
    };

    return (
      <TextField
        {...props}
        ref={ref}
        label={label}
        placeholder={placeholder}
        type={isPasswordField && !showPassword ? "password" : "text"}
        className={className}
        disabled={disabled}
        value={value}
        onChange={handleChange}
        slotProps={{
          input: {
            inputProps: {
              maxLength: maxLength,

              style: {
                ...customStyle,
              },
            },
            startAdornment: (
              <InputAdornment position="start">{startIcon}</InputAdornment>
            ),
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
            target.value = target.value.slice(0, maxLength);
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
              borderColor: "var(--main-color)",
            },
          },
          "& .MuiInputLabel-root": {
            fontFamily: "inherit",
            "&.Mui-focused": {
              color: "var(--main-color)",
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
