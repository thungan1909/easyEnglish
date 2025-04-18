import dayjs from "dayjs";
import { notify } from "./notifyUtils";
import {
  invalidDateRangeMsg,
  invalidEndDateMsg,
  startDateEarlierMsg,
} from "../constants/message/validationMsg";

export const validateDateRange = (startDate: Date, endDate: Date): boolean => {
  const now = dayjs().toDate();

  if (!startDate || !endDate) {
    notify.error(invalidDateRangeMsg);
    return false;
  }

  if (startDate >= endDate) {
    notify.error(startDateEarlierMsg);
    return false;
  }

  if (endDate <= now) {
    notify.error(invalidEndDateMsg);
    return false;
  }

  return true;
};
