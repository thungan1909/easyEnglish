import { COOKIES, END_POINTS } from "../constants";
import { userNotfoundErrorMsg } from "../constants/message/errorMsg";
import { UserChangePasswordDTO } from "../hooks/user/change-password.hook";
import { getAxiosInstance, getOriginalResponseData } from "../providers/axios";
import {
  ChangeEmailResponse,
  GetUserDTO,
  UpdateUserAvatarDTO,
  UpdateUserAvatarResponse,
  UpdateUserDTO,
  UpdateUserResponse,
} from "../types/dtos/user.dto";
import {
  createPatchMutation,
  createPostMutation,
} from "../utils/helpers/createMutation";
import { TChangeEmailSchema } from "../validation/user.schema";

export const getUserInfoMutation = {
  name: "getUserInfo",
  fn: async (): Promise<GetUserDTO | null> => {
    const token = localStorage.getItem(COOKIES.ACCESS_TOKEN);

    const response = await getAxiosInstance().get(
      END_POINTS.AUTH.GET_USER_INFO,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );

    const userData =
      getOriginalResponseData<typeof response.data>(response)?.user;
    if (!userData) throw new Error(userNotfoundErrorMsg);

    return userData;
  },
};

export const updateUserMutation = {
  name: "updateUser",
  ...createPatchMutation<UpdateUserDTO, UpdateUserResponse>(
    END_POINTS.USER.UPDATE_INFO
  ),
};

export const updateUserAvatarMutation = {
  name: "updateUserAvatar",
  ...createPostMutation<UpdateUserAvatarDTO, UpdateUserAvatarResponse>(
    END_POINTS.USER.UPDATE_AVATAR
  ),
};

export const changePasswordMutation = {
  name: "changePassword",
  ...createPostMutation<UserChangePasswordDTO, UpdateUserResponse>(
    END_POINTS.AUTH.CHANGE_PASSWORD
  ),
};

export const changeEmailMutation = {
  name: "changeEmail",
  ...createPostMutation<TChangeEmailSchema, ChangeEmailResponse>(
    END_POINTS.USER.CHANGE_EMAIL
  ),
};

// export const getUsersByIds = {
//   name: "getUsersByIds",
//   ...createGetWithQueryArray<UserDTO[]>(END_POINTS.USER.GET_BY_IDS, "ids"),
// };
