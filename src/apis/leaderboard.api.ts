import { END_POINTS } from "../constants";
import { getAxiosInstance, getOriginalResponseData } from "../providers/axios";
import { WeeklyRecordDTO } from "../types/dtos/leaderboard.dto";

export const getTopWeeklyRecords = {
  name: "getTopWeeklyRecords",
  fn: async (): Promise<WeeklyRecordDTO[]> => {
    return getOriginalResponseData<WeeklyRecordDTO[]>(
      await getAxiosInstance().get(END_POINTS.LEADERBOARD.GET_TOP_WEEKLY)
    );
  },
};
