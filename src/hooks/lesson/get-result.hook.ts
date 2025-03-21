import { useQuery } from "@tanstack/react-query";
import { getLessonResultById, getTopScores } from "../../apis/lesson.api";

export const useGetLessonResultById = (id: string) => {
  return useQuery({
    queryKey: [getLessonResultById.name, id],
    queryFn: () => getLessonResultById.fn(id),
    enabled: !!id,
  });
};

export const useGetTopScores = (id: string) => {
  return useQuery({
    queryKey: [getTopScores.name, id],
    queryFn: () => getTopScores.fn(id),
    enabled: !!id,
  });
};
