import dayjs from "dayjs";

import { LoginDataDTO, LoginOriginalResponse } from "../types/dtos/login.dto";
import { getAxiosInstance, getOrginialResponseData } from "../providers/axios";
import { END_POINTS } from "../constants";
import {
  CheckExistUsernameDTO,
  CheckExistUsernameResponse,
} from "../types/dtos/user.dto";

export const loginMutation = {
  name: "loginMutation",
  fn: async (data: LoginDataDTO): Promise<LoginOriginalResponse> => {
    const responseData = getOrginialResponseData<LoginOriginalResponse>(
      await getAxiosInstance().post(END_POINTS.AUTH.LOGIN, {
        request_date_time: dayjs(new Date(), "YYYYMMDDHHmmssSSS"),
        data,
      })
    );
    return responseData;
  },
};

export const checkValidEmail = {
  name: "checkValidEmail",
  fn: async (
    data: CheckExistUsernameDTO
  ): Promise<CheckExistUsernameResponse> => {
    try {
      const responseData = getOrginialResponseData<CheckExistUsernameResponse>(
        await getAxiosInstance().post(
          END_POINTS.AUTH.CHECK_EXIST_USERNAME,
          data
        )
      );
      console.log(responseData);
      return responseData;
    } catch (error) {
      // Handle error as needed
      console.error("Error checking email existence:", error);
      throw new Error("Failed to check email existence.");
    }
  },
};
