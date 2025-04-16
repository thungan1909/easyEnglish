import { END_POINTS } from "../constants";
import { WeeklyRecordDTO } from "../types/dtos/leaderboard.dto";
import { createGetQuery } from "../utils/helpers/createMutation";

export const getTopWeeklyRecords = {
  name: "getTopWeeklyRecords",
  ...createGetQuery<WeeklyRecordDTO[]>(END_POINTS.LEADERBOARD.GET_TOP_WEEKLY),
};
