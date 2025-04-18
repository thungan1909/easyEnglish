import { IDatePicker } from "./types";
import dayjs from "dayjs";
import { DatePicker } from "@mui/x-date-pickers";

const CDatePicker = ({ onChange, value, label }: IDatePicker) => {
  return (
    <DatePicker
      value={value || dayjs()}
      label={label}
      format="DD/MM/YYYY"
      onChange={(val) => {
        onChange(val);
      }}
      className="w-full"
      sx={{
        "& .MuiOutlinedInput-root": {
          "&:hover fieldset, &.Mui-focused fieldset": {
            borderColor: "var(--color-purple-400)",
          },
        },
        "& .MuiInputLabel-root": {
          "&.Mui-focused": {
            color: "var(--color-purple-400)",
          },
        },
      }}
    />
  );
};
export default CDatePicker;
