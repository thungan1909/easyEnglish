import { IDatePicker } from "./types";
import dayjs, { Dayjs } from "dayjs";
import { DATE_FORMAT } from "../../../constants/dateTime";
import { DateCalendar } from "@mui/x-date-pickers";
import { useState } from "react";

const CDatePicker = ({
  minDate,
  maxDate,
  onClose,
  onChange,
  value,
  isShowTime = false,
  type,
  isStartDay,
  isEndDay,
  hasTypeTime = false,
}: IDatePicker) => {
  const [newValue, setNewValue] = useState<Dayjs | null>(value);

  return (
    <DateCalendar
      value={newValue || dayjs()}
      onChange={(val) => {
        let value;
        if (isShowTime) {
          if (isStartDay) {
            value = dayjs(dayjs(val).format(DATE_FORMAT));
          }

          if (isEndDay) {
            value = dayjs(dayjs(val).format(DATE_FORMAT))
              .add(1)
              .subtract(1, "second");
          }

          setNewValue(value || val);
          return;
        }

        onChange(val);
      }}
      minDate={hasTypeTime ? undefined : dayjs(minDate)}
      maxDate={hasTypeTime ? dayjs() : dayjs(maxDate)}
      // dayOfWeekFormatter={dayOfWeekFormatter}
      views={type === "month-picker" ? ["year", "month"] : undefined}
      openTo={type === "month-picker" ? "month" : undefined}
    />
  );
};
export default CDatePicker;
