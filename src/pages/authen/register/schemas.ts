import * as zod from "zod";
import {
  confirmPasswordNotMatchMsg,
  invalidConfirmPasswordMsg,
  invalidEmailMsg,
  invalidPasswordMsg,
  invalidUsernameMsg,
} from "../../../constants/errorMessage";

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
