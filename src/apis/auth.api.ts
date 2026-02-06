import { END_POINTS } from "../constants/endpoint";
import {
  CheckEmailDTO,
  CheckEmailResponse,
  SendResetCodeResponse,
  GetVerifyCodeDTO,
  GetVerifyCodeResponse,
  LoginDTO,
  LoginOriginalResponse,
  ResetPasswordDTO,
  ResetPasswordResponse,
  RegisterUserDTO,
  RegisterUserResponse,
  VerifyAccountDTO,
  VerifyAccountResponse,
  VerifyResetCodeDTO,
  VerifyResetCodeResponse,
} from "../types/dtos/auth.dto";
import { createPostMutation } from "../utils/axiosUtils";

export const loginMutation = {
  name: "login",
  ...createPostMutation<LoginDTO, LoginOriginalResponse>(END_POINTS.AUTH.LOGIN),
};

export const registerUserMutation = {
  name: "register",
  ...createPostMutation<RegisterUserDTO, RegisterUserResponse>(
    END_POINTS.AUTH.REGISTER,
  ),
};

export const checkEmailMutation = {
  name: "checkEmail",
  ...createPostMutation<CheckEmailDTO, CheckEmailResponse>(
    END_POINTS.AUTH.CHECK_EMAIL,
  ),
};

export const verifyAccountMutation = {
  name: "verifyAccount",
  ...createPostMutation<VerifyAccountDTO, VerifyAccountResponse>(
    END_POINTS.AUTH.VERIFY_ACCOUNT,
  ),
};

export const sendResetPasswordCodeMutation = {
  name: "getVerifyCode",
  ...createPostMutation<GetVerifyCodeDTO, GetVerifyCodeResponse>(
    END_POINTS.AUTH.SEND_VERIFY_CODE,
  ),
};

export const sendResetCodeMutation = {
  name: "sendResetCode",
  ...createPostMutation<{ email: string }, SendResetCodeResponse>(
    END_POINTS.AUTH.SEND_RESET_CODE,
  ),
};

export const verifyResetCodeMutation = {
  name: "verifyResetCode",
  ...createPostMutation<VerifyResetCodeDTO, VerifyResetCodeResponse>(
    END_POINTS.AUTH.VERIFY_RESET_CODE,
  ),
};

export const resetPasswordMutation = {
  name: "resetPassword",
  ...createPostMutation<ResetPasswordDTO, ResetPasswordResponse>(
    END_POINTS.AUTH.RESET_PASSWORD,
  ),
};
