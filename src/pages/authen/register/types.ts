import { UseFormReturn } from "react-hook-form";
import { TUserSignUpSchema } from "../../../validation/user.schema";

export interface InputEmailProps {
  onSubmitEmail: (email: string) => void;
}

export interface InputBasicInfoProps {
  onSubmitProfile: (data: TUserSignUpSchema) => void;
  goBack: () => void;
  formInstance: UseFormReturn<TUserSignUpSchema>;
}
