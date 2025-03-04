import { END_POINTS } from "../constants";
import { getAxiosInstance, getOriginalResponseData } from "../providers/axios";
import { UserDTO } from "../types/dtos/user.dto";

export const getUserInfoMutation = {
  name: "getUserInfo",
  fn: async (): Promise<UserDTO> => {
    try {
      const token = localStorage.getItem("ACCESS_TOKEN"); // Retrieve token from storage
      if (!token) throw new Error("No token found");

      return getOriginalResponseData<UserDTO>(
        await getAxiosInstance().get(END_POINTS.AUTH.GET_USER_INFO, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
      );
    } catch (error) {
      throw error;
    }
  },
};
