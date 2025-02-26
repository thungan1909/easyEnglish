// import { UserGetDataDto } from "../../types/dtos/user.dto";
// import { useQuery, UseQueryResult } from "@tanstack/react-query";

// const queryKeys = {
//   list: "get-list-user",
//   detail: "get-detail-user",
// };

// const userController = new User(httpClient);

// export const useGetUser = ({
//   userId,
//   enabled = true,
// }: {
//   userId: string;
//   enabled?: boolean;
// }): UseQueryResult<UserGetDataDto, unknown> => {
//   return useQuery({
//     queryKey: [queryKeys.detail, userId],
//     queryFn: async () => {
//       return await userController.userGet(userId);
//     },
//   });
// };
