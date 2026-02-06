import { UseFormReturn } from "react-hook-form";
import { TGetVerifyCodeSchema } from "../../../validation/user.schema";
import { VerifyAccountType } from "./constants";

export interface InputVerificationEmailProps {
  onSubmitForm: (data: TGetVerifyCodeSchema) => void;
  formInstance: UseFormReturn<TGetVerifyCodeSchema>;
  isVerifyPage?: boolean;
}

export interface AuthenticationSuccessfulProps {
  type: VerifyAccountType;
}

export interface InputVerificationCodeProps {
  email: string;
  type: VerifyAccountType;
  onSuccessVerify: () => void;
  goBack: () => void;
}
