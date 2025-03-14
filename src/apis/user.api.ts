import { END_POINTS } from "../constants";
import { getAxiosInstance, getOriginalResponseData } from "../providers/axios";
import {
  GetUserDTO,
  UpdateUserDTO,
  UpdateUserResponse,
} from "../types/dtos/user.dto";

export const getUserInfoMutation = {
  name: "getUserInfo",
  fn: async (): Promise<GetUserDTO> => {
    try {
      const token = localStorage.getItem("ACCESS_TOKEN");
      if (!token) throw new Error("No token found");

      const response = await getAxiosInstance().get(
        END_POINTS.AUTH.GET_USER_INFO,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      const userData =
        getOriginalResponseData<typeof response.data>(response)?.user;
      if (!userData) throw new Error("Invalid response: User data not found");

      return userData;
    } catch (error) {
      console.error("Error fetching user info:", error);
      throw error;
    }
  },
};

export const updateUserMutation = {
  name: "updateUser",
  fn: async (data: UpdateUserDTO): Promise<UpdateUserResponse> => {
    try {
      return getOriginalResponseData<UpdateUserResponse>(
        await getAxiosInstance().post(END_POINTS.USER.UPDATE_INFO, data)
      );
    } catch (error) {
      throw error;
    }
  },
};
