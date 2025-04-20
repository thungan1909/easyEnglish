import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { ISelect } from "./types";

const CSelect = ({
  options,
  value,
  onChangeValue,
  placeholder,
  label,
}: ISelect) => {
  const handleChange = (e: SelectChangeEvent<string>) => {
    if (onChangeValue) onChangeValue(e.target.value);
  };

  return (
    <FormControl
      fullWidth
      sx={{
        "& .MuiOutlinedInput-root": {
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "var(--main-color)",
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "var(--main-color)",
          },
        },
        "& .MuiInputLabel-root": {
          "&.Mui-focused": {
            color: "var(--main-color)",
          },
        },
      }}
    >
      {label && <InputLabel>{label}</InputLabel>}

      <Select
        value={value || options[0].value}
        onChange={handleChange}
        className="w-full"
        displayEmpty
        label={label}
      >
        {placeholder && (
          <MenuItem disabled value={placeholder}>
            {placeholder}
          </MenuItem>
        )}
        {options?.map((item, index) => (
          <MenuItem
            key={item.value.toString() + index}
            value={item.value}
            disabled={item.disabled}
            sx={{
              "&:hover": {
                backgroundColor: "var(--main-color)",
                color: "white",
              },
              "&.Mui-selected": {
                backgroundColor: "var(--main-color)",
                color: "white",
              },
              "&.Mui-focusVisible": {
                backgroundColor: "var(--main-color)",
              },
              "&.Mui-selected.Mui-focusVisible": {
                backgroundColor: "var(--main-color)",
              },
            }}
          >
            {item.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
export default CSelect;
