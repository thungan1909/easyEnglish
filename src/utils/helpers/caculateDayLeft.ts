export const calculateDayLeft = (endTime?: Date) => {
  return endTime
    ? Math.ceil(
        (endTime.getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24)
      )
    : 0;
};
