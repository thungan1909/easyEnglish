import * as zod from "zod";
import {
  confirmPasswordNotMatchMsg,
  invalidConfirmPasswordMsg,
  invalidEmailMsg,
  invalidFullnameMsg,
  invalidPasswordMsg,
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

// UPDATE USER

export const UpdateUserSchema = zod.object({
  username: zod.string().min(1, invalidUsernameMsg),
  fullname: zod.string().min(1, invalidFullnameMsg),
  email: zod.string().email(invalidEmailMsg),
  birthDate: zod.date().optional(),
  gender: zod.string().optional(),
  phoneNumber: zod.string().optional(),
  city: zod.string().optional(),
  district: zod.string().optional(),
  ward: zod.string().optional(),
  detailAddress: zod.string().optional(),
  university: zod.string().optional(),
  major: zod.string().optional(),
});

export type TUpdateUserSchema = zod.infer<typeof UpdateUserSchema>;

//CHANGE EMAIL
export const ChangeEmailSchema = zod
  .object({
    oldEmail: zod.string().email(invalidEmailMsg),
    newEmail: zod.string().email(invalidEmailMsg),
    password: zod.string().min(6, invalidPasswordMsg),
  })
 
export type TChangeEmailSchema= zod.infer<
  typeof ChangeEmailSchema
>;

//CHANGE PASSWORD
export const UserChangePasswordSchema = zod
  .object({
    email: zod.string().email(invalidEmailMsg),
    oldPassword: zod.string().min(6, invalidPasswordMsg),
    newPassword: zod.string().min(6, invalidPasswordMsg),
    confirmPassword: zod.string().min(6, invalidConfirmPasswordMsg),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: confirmPasswordNotMatchMsg,
    path: ["confirmPassword"],
  });

export type TUserChangePasswordSchema = zod.infer<
  typeof UserChangePasswordSchema

>;