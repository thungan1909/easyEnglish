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
  UserDTO,
} from "../types/dtos/user.dto";
import { createPatchMutation, createPostMutation } from "../utils/helpers/createMutation";
import { TChangeEmailSchema, TUserChangePasswordSchema } from "../validation/user.schema";

export const getUserInfoMutation = {
  name: "getUserInfo",
  fn: async (): Promise<GetUserDTO | null> => {
      const token = localStorage.getItem("ACCESS_TOKEN");

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
  },
};

export const updateUserMutation = {
  name: "updateUser",
  ...createPatchMutation<UpdateUserDTO, UpdateUserResponse>(END_POINTS.USER.UPDATE_INFO)
};

export const updateUserAvatarMutation = {
  name: "updateUserAvatar",
  ...createPostMutation<UpdateUserAvatarDTO, UpdateUserAvatarResponse>(END_POINTS.USER.UPDATE_AVATAR)
};


export const changePasswordMutation = {
  name: "changePassword",
  fn: async (
    data: TUserChangePasswordSchema
  ): Promise<ChangePasswordResponse> => {
    const { currentPassword, newPassword } = data;

    try {
      return getOriginalResponseData<UpdateUserResponse>(
        await getAxiosInstance().post(END_POINTS.AUTH.CHANGE_PASSWORD, {
          currentPassword,
          newPassword,
        })
      );
    } catch (error) {
      throw error;
    }
  },
};

export const changeEmailMutation = {
  name: "changeEmail",
  ...createPostMutation<TChangeEmailSchema, ChangeEmailResponse>(END_POINTS.USER.CHANGE_EMAIL)
};

export const getUsersByIds = {
  name: "getUsersByIds",
  fn: async (ids: string[]): Promise<UserDTO[]> => {
    try {
      const response = await getAxiosInstance().get(
        `${END_POINTS.USER.GET_BY_IDS}`,
        {
          params: { ids: ids.join(",") },
        }
      );
      return getOriginalResponseData<UserDTO[]>(response);
    } catch (error) {
      throw error;
    }
  },
};
