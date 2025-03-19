import { useQuery } from "@tanstack/react-query";
import { getLessonResultById } from "../../apis/lesson.api";

export const useGetLessonResultById = (id: string) => {
  return useQuery({
    queryKey: [getLessonResultById.name, id],
    queryFn: () => getLessonResultById.fn(id),
    enabled: !!id,
  });
};
