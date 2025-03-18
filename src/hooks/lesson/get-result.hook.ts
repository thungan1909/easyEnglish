import { useQuery } from "@tanstack/react-query";
import { getLessonResultById } from "../../apis/lesson.api";

// export const useGetLessonResultById = (
//   id: string
// ): UseQueryResult<LessonSubmissionResponse, IHttpError> => {
//   return useQuery<LessonSubmissionResponse, IHttpError>({
//     queryKey: [getLessonResultById.name, id],
//     queryFn: async () => getLessonResultById.fn(id),
//     refetchOnWindowFocus: false,
//     retry: 3,
//     retryDelay: 3000,
//   });
// };

export const useGetLessonResultById = (id: string) => {
  return useQuery({
    queryKey: [getLessonResultById.name, id],
    queryFn: () => getLessonResultById.fn(id), // Call function with `id`
    enabled: !!id, // Prevent execution if `id` is undefined
  }).data;
};
