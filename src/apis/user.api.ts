import { data } from "react-router-dom";
import { LoginDataDTO, LoginOriginalResponse } from "../types/dtos/login.dto";

export const loginMutation = {
  name: "loginMutation",
  fn: async (data: LoginDataDTO): Promise<LoginOriginalResponse> => {
    const responseData = getOriginalResponseData<LoginOriginalResponse>(
      await getAxiosInstance()
    );
  },
};
