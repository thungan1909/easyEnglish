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
import { useStepper } from "../register/useStepper.hook";
import InputVerificationEmail from "../shared/InputVerificationEmail";
import InputVerificationCode from "../shared/InputVerificationCode";
import { VERIFY_ACCOUNT_STEP } from "../shared/constants";
import InputResetPassword from "./InputResetPassword";
import AuthenticationSuccessful from "../shared/AuthenticationSuccessful";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  /* ----------------------------- router & refs ---------------------------- */
  const navigate = useNavigate();
  const CStepperRef = useRef<ISteppersRef>(null);

  /* ------------------------------- stepper -------------------------------- */
  const { currentStep, stepIndex, goNext, goBack, goToIndex } =
    useStepper(RESET_PASSWORD_STEP);

  /* ------------------------------- auth ----------------------------------- */
  const { isAuth } = useAuthentication();
  const { mutate: sendResetCode } = useGetResetCode();
  const { mutate: resetPassword } = useResetPassword();

  /* ------------------------------- forms ---------------------------------- */
  const formInstance = useForm<TGetVerifyCodeSchema>({
    mode: "onChange",
    shouldUnregister: false,
    resolver: zodResolver(GetVerifyCodeSchema),
    defaultValues: {
      email: "",
    },
  });

  const formInstanceResetPassword = useForm<TUserResetPasswordSchema>({
    mode: "onChange",
    shouldUnregister: false,
    resolver: zodResolver(UserResetPasswordSchema),
  });

  /* ------------------------------ handlers -------------------------------- */
  const handleSubmitEmail = useCallback(
    (data: TGetVerifyCodeSchema) => {
      sendResetCode(data.email, {
        onSuccess: () => {
          formInstanceResetPassword.setValue("email", data.email);
          goNext();
        },
        onError: (error) => {
          notify.error(error.message || defaultErrorMsg);
        },
      });
    },
    [sendResetCode, goNext, formInstanceResetPassword],
  );

  const onSubmitPassword = useCallback(
    (data: TUserResetPasswordSchema) => {
      resetPassword(
        {
          email: data.email,
          password: data.password,
        },
        {
          onSuccess: () => goNext(),
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
      navigate(ROUTES_CONSTANTS.DASHBOARD);
    }
  }, [isAuth, navigate]);

  /* ----------------------------- render step ------------------------------ */

  const renderStep = () => {
    switch (currentStep) {
      case EResetPasswordStep.InputEmail:
        return (
          <InputVerificationEmail
            onSubmitForm={handleSubmitEmail}
            formInstance={formInstance}
          />
        );

      case EResetPasswordStep.InputVerificationCode:
        return (
          <InputVerificationCode
            type={VERIFY_ACCOUNT_STEP.RESET_PASSWORD}
            email={formInstance.getValues("email")}
            onSuccessVerify={goNext}
            goBack={goBack}
          />
        );

      case EResetPasswordStep.InputPassword:
        return (
          <InputResetPassword
            onSubmitPassword={onSubmitPassword}
            formInstance={formInstanceResetPassword}
          />
        );

      case EResetPasswordStep.ResetSuccessfully:
        return (
          <AuthenticationSuccessful type={VERIFY_ACCOUNT_STEP.RESET_PASSWORD} />
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
          ref={CStepperRef}
        />
      }
    >
      {renderStep()}
    </AuthenticationLayout>
  );
};

export default ForgotPassword;
