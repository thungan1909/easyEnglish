import dayjs from "dayjs";

import { LoginDataDTO, LoginOriginalResponse } from "../types/dtos/login.dto";
import { getAxiosInstance, getOrginialResponseData } from "../providers/axios";
import { END_POINTS } from "../constants";
import {
  CheckExistEmailDTO,
  CheckExistEmailResponse,
  SignUpDTO,
  SignUpResponse,
  VerifyEmailDTO,
  VerifyEmailResponse,
} from "../types/dtos/user.dto";
import { data } from "react-router-dom";

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

export const checkExistEmail = {
  name: "checkExistEmail",
  fn: async (data: CheckExistEmailDTO): Promise<CheckExistEmailResponse> => {
    try {
      const response = getOrginialResponseData<CheckExistEmailResponse>(
        await getAxiosInstance().post(END_POINTS.AUTH.CHECK_EXIST_EMAIL, data)
      );

      return response;
    } catch (error) {
      throw error;
    }
  },
};

export const signUpMutation = {
  name: 'signUp',
  fn: async (data: SignUpDTO): Promise<SignUpResponse> => {
    try {
      return getOrginialResponseData<SignUpResponse>(
        await getAxiosInstance().post(END_POINTS.AUTH.SIGN_UP, data)
      );
    } catch (error) {
      throw error;
    }
  }
}

export const verifyEmailMutation = {
  name: 'verifyEmail', 
  fn: async (data: VerifyEmailDTO): Promise<VerifyEmailResponse> => {
    try {
      return getOrginialResponseData<VerifyEmailResponse>(
        await getAxiosInstance().post(END_POINTS.AUTH.VERIFY_EMAIL, data)
      );
    } catch (error) {
      throw error;
    }
  }
}