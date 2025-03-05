import { useEffect, useRef, useState } from "react";
import CSteppers from "../../../components/molecules/cSteppers";
import { ISteppersRef } from "../../../components/molecules/cSteppers/types";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAuthentication, useGetVerifyCode } from "../../../hooks/auth.hook";

import { ROUTES_CONSTANTS } from "../../../routers/constants";
import InputVerificationCode from "../shared/InputVerificationCode";
import AuthenticationSuccessful from "../shared/AuthenticationSuccessful";
import {
  GetVerifyCodeSchema,
  TGetVerifyCodeSchema,
  TUserResetPasswordSchema,
  UserResetPasswordSchema,
} from "../../../validation/user.schema";
import { AuthenticationLayout } from "../../../layout/AuthenticationLayout";
import { EResetPasswordStep } from "./constants";
import InputVerificationEmail from "../shared/InputVerificationEmail";
import { VERIFY_ACCOUNT_STEP } from "../shared/constants";
import InputResetPassword from "./InputResetPassword";

const ForgotPassword = () => {
  const CStepperRef = useRef<ISteppersRef>(null);
  const [step, setStep] = useState(0);
  const [verificationState, setVerificationState] = useState(false);

  const [currentStep, setCurrentStep] = useState<EResetPasswordStep>(
    EResetPasswordStep.InputEmail
  );
  const { isAuth } = useAuthentication();

  const { mutate: getVerifyCodeMutation } = useGetVerifyCode();

  const formInstanceResetPassword = useForm<TUserResetPasswordSchema>({
    mode: "onChange",
    resolver: zodResolver(UserResetPasswordSchema),
  });

  const formInstance = useForm<TGetVerifyCodeSchema>({
    mode: "onChange",
    resolver: zodResolver(GetVerifyCodeSchema),
  });

  const handleSubmitEmail = (data: TGetVerifyCodeSchema) => {
    // getVerifyCodeMutation(
    //   {
    //     email: data.email,
    //   },
    //   {
    //     onSuccess: () => {
    setCurrentStep(EResetPasswordStep.InputVerificationCode);
    CStepperRef.current?.handleNextStep();
    console.log("Email submitted:", data);
    formInstanceResetPassword.setValue("email", data.email); // Manually set email

    //     },
    //     onError: (error) => {
    //       notify.error(error.message || defaultErrorMsg);
    //     },
    //   }
    // );
  };

  const onSubmitPassword = (data: TUserResetPasswordSchema) => {
    console.log("Password submitted:", data);
    setCurrentStep(EResetPasswordStep.ResetSuccessfully);
    CStepperRef.current?.handleNextStep();
  };

  useEffect(() => {
    if (verificationState) {
      setCurrentStep(EResetPasswordStep.InputPassword);
      CStepperRef.current?.handleNextStep();
    }
  }, [verificationState]);

  useEffect(() => {
    if (isAuth) {
      window.location.href = ROUTES_CONSTANTS.DASHBOARD;
    }
  }, [isAuth]);

  return (
    <AuthenticationLayout
      stepperSection={
        <CSteppers
          numberStep={4}
          currentStep={step}
          changeCurrentStep={setStep}
          ref={CStepperRef}
        />
      }
    >
      {currentStep === EResetPasswordStep.InputEmail && (
        <InputVerificationEmail
          onSubmitForm={handleSubmitEmail}
          formInstance={formInstance}
        />
      )}

      {currentStep === EResetPasswordStep.InputVerificationCode && (
        <InputVerificationCode
          type={VERIFY_ACCOUNT_STEP.RESET_PASSWORD}
          email={formInstance.getValues("email")}
          onSuccessVerify={setVerificationState}
        />
      )}

      {currentStep === EResetPasswordStep.InputPassword && (
        <InputResetPassword
          onSubmitPassword={onSubmitPassword}
          formInstance={formInstanceResetPassword}
        />
      )}

      {currentStep === EResetPasswordStep.ResetSuccessfully && (
        <AuthenticationSuccessful type={VERIFY_ACCOUNT_STEP.RESET_PASSWORD} />
      )}
    </AuthenticationLayout>
  );
};

export default ForgotPassword;
