import dayjs from "dayjs";
import { notify } from "./notifyUtils";

export const validateDateRange = (startDate: Date, endDate: Date): boolean => {
  const now = dayjs().toDate();

  if (!startDate || !endDate) {
    notify.error("Start date and end date are required.");
    return false;
  }

  if (startDate >= endDate) {
    notify.error("Start date must be earlier than end date.");
    return false;
  }

  if (endDate <= now) {
    notify.error("End date must be in the future.");
    return false;
  }

  return true;
};
