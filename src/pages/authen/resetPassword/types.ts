import { UseFormReturn } from "react-hook-form";
import { TUserResetPasswordSchema } from "../../../validation/user.schema";

export interface InputResetPasswordProps {
  onSubmitPassword: (data: TUserResetPasswordSchema) => void;
  formInstance: UseFormReturn<TUserResetPasswordSchema>;
}
