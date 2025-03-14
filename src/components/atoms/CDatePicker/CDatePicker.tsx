import { IDatePicker } from "./types";
import dayjs from "dayjs";
import { DatePicker } from "@mui/x-date-pickers";

const CDatePicker = ({ onChange, value, label }: IDatePicker) => {
  return (
    <DatePicker
      value={value || dayjs()}
      label={label}
      onChange={(val) => {
        onChange(val);
      }}
      className="w-full"
    />
  );
};
export default CDatePicker;
