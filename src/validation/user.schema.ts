import * as zod from "zod";
import {
  confirmPasswordNotMatchMsg,
  invalidConfirmPasswordMsg,
  invalidEmailMsg,
  invalidFullnameMsg,
  invalidPasswordMsg,
  invalidPhoneMsg,
  invalidUsernameMsg,
} from "../constants/errorMessage";

// SIGN IN
export const UserSignInSchema = zod.object({
  username: zod.string().min(1, invalidUsernameMsg),
  password: zod.string().min(6, invalidPasswordMsg),
});

export type TUserSignInSchema = zod.infer<typeof UserSignInSchema>;

// VERIFY CODE

export const GetVerifyCodeSchema = zod.object({
  email: zod.string().email(invalidEmailMsg),
});

export type TGetVerifyCodeSchema = zod.infer<typeof GetVerifyCodeSchema>;

// SIGN UP

export const UserSignUpSchema = zod
  .object({
    username: zod.string().min(1, invalidUsernameMsg),
    password: zod.string().min(6, invalidPasswordMsg),
    confirmPassword: zod.string().min(6, invalidConfirmPasswordMsg),
    email: zod.string().email(invalidEmailMsg),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: confirmPasswordNotMatchMsg,
    path: ["confirmPassword"],
  });

export type TUserSignUpSchema = zod.infer<typeof UserSignUpSchema>;

// RESET PASSWORD

export const UserResetPasswordSchema = zod
  .object({
    password: zod.string().min(6, invalidPasswordMsg),
    confirmPassword: zod.string().min(6, invalidConfirmPasswordMsg),
  })
  .merge(GetVerifyCodeSchema) // Merge first, then apply refinement
  .refine((data) => data.password === data.confirmPassword, {
    message: confirmPasswordNotMatchMsg,
    path: ["confirmPassword"],
  });

export type TUserResetPasswordSchema = zod.infer<
  typeof UserResetPasswordSchema
>;

// SIGN UP

export const UserEditInfoSchema = zod.object({
  username: zod.string().min(1, invalidUsernameMsg),
  fullname: zod.string().min(1, invalidFullnameMsg),
  email: zod.string().email(invalidEmailMsg),
  dateOfBirth: zod.date(), // ✅ Allow both string & Date
  gender: zod.string().min(1, "Gender is required"),
  phoneNumber: zod.string().min(1, invalidPhoneMsg),
  city: zod.string(),
  district: zod.string(),
  ward: zod.string(),
  detailAddress: zod.string(),
  university: zod.string(),
  major: zod.string(),
});

export type TUserEditInfoSchema = zod.infer<typeof UserEditInfoSchema>;
