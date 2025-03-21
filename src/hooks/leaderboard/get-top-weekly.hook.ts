import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { WeeklyRecordDTO } from "../../types/dtos/leaderboard.dto";
import { getTopWeeklyRecords } from "../../apis/leaderboard.api";

export const useGetTopWeekly = (): UseQueryResult<WeeklyRecordDTO[], Error> => {
  return useQuery<WeeklyRecordDTO[], Error>({
    queryKey: [getTopWeeklyRecords.name],
    queryFn: async () => getTopWeeklyRecords.fn(),
    refetchOnWindowFocus: false,
    retry: 3,
    retryDelay: 3000,
  });
};
