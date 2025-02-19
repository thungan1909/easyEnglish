import dayjs from "dayjs";

import { LoginDataDTO, LoginOriginalResponse } from "../types/dtos/login.dto";
import { getAxiosInstance, getOrginialResponseData } from "../providers/axios";
import { END_POINTS } from "../constants";

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
