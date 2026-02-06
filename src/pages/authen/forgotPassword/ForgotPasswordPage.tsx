import { useCallback, useRef } from "react";
import CSteppers from "../../../components/molecules/cSteppers";
import { ISteppersRef } from "../../../components/molecules/cSteppers/types";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  GetVerifyCodeSchema,
  TGetVerifyCodeSchema,
  TUserResetPasswordSchema,
  UserResetPasswordSchema,
} from "../../../validation/user.schema";
import { AuthenticationLayout } from "../../../layout/AuthenticationLayout";
import { EForgotPasswordStep, FORGOT_PASSWORD_STEPS } from "./constants";
import { notify } from "../../../utils/notifyUtils";
import {
  useGetResetCode,
  useResetPassword,
} from "../../../hooks/auth/reset-password.hook";
import { defaultErrorMsg } from "../../../constants/message/errorMsg";
import InputVerificationEmail from "../shared/InputVerificationEmail";
import InputVerificationCode from "../shared/InputVerificationCode";
import { VerifyAccountType } from "../shared/constants";
import InputResetPassword from "./InputResetPassword";
import AuthenticationSuccessful from "../shared/AuthenticationSuccessful";
import { useStepper } from "../../../utils/useStepper.hook";

const ForgotPasswordPage = () => {
  /* ----------------------------- router & refs ---------------------------- */
  const stepperRef = useRef<ISteppersRef>(null);

  /* ------------------------------- stepper -------------------------------- */
  const { currentStep, stepIndex, goNext, goBack, goToIndex } = useStepper(
    FORGOT_PASSWORD_STEPS,
  );

  /* ------------------------------- auth & APIs ----------------------------------- */
  const { mutate: sendResetCode } = useGetResetCode();
  const { mutate: resetPassword } = useResetPassword();

  /* ------------------------------- forms ---------------------------------- */
  const verifyEmailForm = useForm<TGetVerifyCodeSchema>({
    mode: "onChange",
    shouldUnregister: false,
    resolver: zodResolver(GetVerifyCodeSchema),
    defaultValues: {
      email: "",
    },
  });

  const resetPasswordForm = useForm<TUserResetPasswordSchema>({
    mode: "onChange",
    shouldUnregister: false,
    resolver: zodResolver(UserResetPasswordSchema),
  });

  /* ------------------------------ handlers -------------------------------- */
  const handleSubmitResetEmail = useCallback(
    (data: TGetVerifyCodeSchema) => {
      sendResetCode(data.email, {
        onSuccess: () => {
          resetPasswordForm.setValue("email", data.email);
          goNext();
        },
        onError: (error) => {
          notify.error(error.message || defaultErrorMsg);
        },
      });
    },
    [sendResetCode, goNext, resetPasswordForm],
  );

  const handleSubmitNewPassword = useCallback(
    (data: TUserResetPasswordSchema) => {
      resetPassword(
        {
          email: data.email,
          password: data.password,
        },
        {
          onSuccess: goNext,
          onError: (error) => {
            notify.error(error.message || defaultErrorMsg);
          },
        },
      );
    },
    [goNext, resetPassword],
  );

  /* ----------------------------- render step ------------------------------ */

  const renderStep = () => {
    switch (currentStep) {
      case EForgotPasswordStep.InputEmail:
        return (
          <InputVerificationEmail
            onSubmitForm={handleSubmitResetEmail}
            formInstance={verifyEmailForm}
          />
        );

      case EForgotPasswordStep.InputVerificationCode:
        return (
          <InputVerificationCode
            type={VerifyAccountType.RESET_PASSWORD}
            email={verifyEmailForm.getValues("email")}
            onSuccessVerify={goNext}
            goBack={goBack}
          />
        );

      case EForgotPasswordStep.InputResetPassword:
        return (
          <InputResetPassword
            onSubmitPassword={handleSubmitNewPassword}
            formInstance={resetPasswordForm}
          />
        );

      case EForgotPasswordStep.ResetSuccess:
        return (
          <AuthenticationSuccessful type={VerifyAccountType.RESET_PASSWORD} />
        );

      default:
        return null;
    }
  };

  return (
    <AuthenticationLayout
      stepperSection={
        <CSteppers
          numberStep={FORGOT_PASSWORD_STEPS.length}
          currentStep={stepIndex}
          onStepChange={goToIndex}
          ref={stepperRef}
        />
      }
    >
      {renderStep()}
    </AuthenticationLayout>
  );
};

export default ForgotPasswordPage;
