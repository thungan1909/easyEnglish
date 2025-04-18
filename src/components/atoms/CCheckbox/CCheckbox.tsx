import { Checkbox, CheckboxProps } from "@mui/material";
import React from "react";

export interface ICheckbox extends Omit<CheckboxProps, "checked" | "onChange"> {
  checked?: boolean;
  onChange?: (
    event: React.ChangeEvent<HTMLInputElement>,
    checked: boolean
  ) => void;
}

const CCheckbox = ({ checked = false, onChange, ...rest }: ICheckbox) => {
  return (
    <Checkbox
      checked={checked}
      onChange={onChange}
      {...rest}
      sx={{
        color: "var(--color-purple-600)",
        "&.Mui-checked": {
          color: "var(--color-purple-600)",
        },
      }}
    />
  );
};

export default CCheckbox;
