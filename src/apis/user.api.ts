import { END_POINTS } from "../constants";
import { getAxiosInstance, getOriginalResponseData } from "../providers/axios";
import {
  ChangeEmailResponse,
  ChangePasswordResponse,
  GetUserDTO,
  UpdateUserAvatarDTO,
  UpdateUserAvatarResponse,
  UpdateUserDTO,
  UpdateUserResponse,
} from "../types/dtos/user.dto";
import { notify } from "../utils/notify";
import {
  TChangeEmailSchema,
  TUserChangePasswordSchema,
} from "../validation/user.schema";

export const getUserInfoMutation = {
  name: "getUserInfo",
  fn: async (): Promise<GetUserDTO | null> => {
    try {
      const token = localStorage.getItem("ACCESS_TOKEN");
      // if (!token) {
      //   console.log("No token found. Redirecting to login...");
      //   return null;
      // }

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

export const updateUserAvatarMutation = {
  name: "updateUserAvatar",
  fn: async (data: UpdateUserAvatarDTO): Promise<UpdateUserAvatarResponse> => {
    try {
      return getOriginalResponseData<UpdateUserAvatarResponse>(
        await getAxiosInstance().post(END_POINTS.USER.UPDATE_AVATAR, data)
      );
    } catch (error) {
      throw error;
    }
  },
};

export const changePasswordMutation = {
  name: "changePassword",
  fn: async (
    data: TUserChangePasswordSchema
  ): Promise<ChangePasswordResponse> => {
    try {
      return getOriginalResponseData<UpdateUserResponse>(
        await getAxiosInstance().post(END_POINTS.USER.CHANGE_PASSWORD, data)
      );
    } catch (error) {
      throw error;
    }
  },
};

export const changeEmailMutation = {
  name: "changeEmail",
  fn: async (data: TChangeEmailSchema): Promise<ChangeEmailResponse> => {
    try {
      return getOriginalResponseData<ChangeEmailResponse>(
        await getAxiosInstance().post(END_POINTS.USER.CHANGE_EMAIL, data)
      );
    } catch (error) {
      throw error;
    }
  },
};
