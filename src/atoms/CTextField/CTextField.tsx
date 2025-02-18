import { TextField } from "@mui/material";
import { ITextField } from "./types";
import { JSX } from "react";

const CTextField = ({
  type = "text",
  disabled = false,
  className = undefined,
  style = {},
  label,
  placeholder,
  value = "",
  onChange,
  ...props
}: ITextField): JSX.Element => {
  return (
    <TextField
      {...props}
      className={className}
      label={label}
      placeholder={placeholder}
      type={type}
      disabled={disabled}
      value={value}
      onChange={onChange}
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
    ></TextField>
  );
};

export default CTextField;
