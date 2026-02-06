import { useCallback, useEffect, useRef } from "react";
import CSteppers from "../../../components/molecules/cSteppers";
import { ISteppersRef } from "../../../components/molecules/cSteppers/types";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { ROUTES_CONSTANTS } from "../../../routers/constants";
import {
  GetVerifyCodeSchema,
  TGetVerifyCodeSchema,
  TUserResetPasswordSchema,
  UserResetPasswordSchema,
} from "../../../validation/user.schema";
import { AuthenticationLayout } from "../../../layout/AuthenticationLayout";
import { EResetPasswordStep, RESET_PASSWORD_STEP } from "./constants";
import { notify } from "../../../utils/notifyUtils";
import {
  useGetResetCode,
  useResetPassword,
} from "../../../hooks/auth/reset-password.hook";
import { useAuthentication } from "../../../hooks/auth/login.hook";
import { defaultErrorMsg } from "../../../constants/message/errorMsg";
import InputVerificationEmail from "../shared/InputVerificationEmail";
import InputVerificationCode from "../shared/InputVerificationCode";
import { VerifyAccountType } from "../shared/constants";
import InputResetPassword from "./InputResetPassword";
import AuthenticationSuccessful from "../shared/AuthenticationSuccessful";
import { useNavigate } from "react-router-dom";
import { useStepper } from "../../../utils/useStepper.hook";

const ForgotPasswordPage = () => {
  /* ----------------------------- router & refs ---------------------------- */
  const navigate = useNavigate();
  const stepperRef = useRef<ISteppersRef>(null);

  /* ------------------------------- stepper -------------------------------- */
  const { currentStep, stepIndex, goNext, goBack, goToIndex } =
    useStepper(RESET_PASSWORD_STEP);

  /* ------------------------------- auth & APIs ----------------------------------- */
  const { isAuth } = useAuthentication();
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

  /* -------------------------------- effects -------------------------------- */
  useEffect(() => {
    if (isAuth) {
      navigate(ROUTES_CONSTANTS.DASHBOARD, { replace: true });
    }
  }, [isAuth, navigate]);

  /* ----------------------------- render step ------------------------------ */

  const renderStep = () => {
    switch (currentStep) {
      case EResetPasswordStep.InputEmail:
        return (
          <InputVerificationEmail
            onSubmitForm={handleSubmitResetEmail}
            formInstance={verifyEmailForm}
          />
        );

      case EResetPasswordStep.InputVerificationCode:
        return (
          <InputVerificationCode
            type={VerifyAccountType.RESET_PASSWORD}
            email={verifyEmailForm.getValues("email")}
            onSuccessVerify={goNext}
            goBack={goBack}
          />
        );

      case EResetPasswordStep.InputPassword:
        return (
          <InputResetPassword
            onSubmitPassword={handleSubmitNewPassword}
            formInstance={resetPasswordForm}
          />
        );

      case EResetPasswordStep.ResetSuccessfully:
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
          numberStep={RESET_PASSWORD_STEP.length}
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
