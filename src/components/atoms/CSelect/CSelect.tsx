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
          "&.Mui-focused fieldset": {
            borderColor: "purple",
          },
        },
        "& .MuiInputLabel-root": {
          "&.Mui-focused": {
            color: "purple",
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
          >
            {item.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
export default CSelect;
