import { useEffect, useRef, useState } from "react";
import CSteppers from "../../../components/molecules/cSteppers";
import { ISteppersRef } from "../../../components/molecules/cSteppers/types";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

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
import { notify } from "../../../utils/notify";
import { defaultErrorMsg } from "../../../constants/message/validationMsg";
import {
  useGetResetCode,
  useResetPasswordMutation,
} from "../../../hooks/auth/reset-password.hook";
import { useAuthentication } from "../../../hooks/auth/login.hook";

const ForgotPassword = () => {
  const CStepperRef = useRef<ISteppersRef>(null);
  const [step, setStep] = useState(0);
  const [verificationState, setVerificationState] = useState(false);

  const [currentStep, setCurrentStep] = useState<EResetPasswordStep>(
    EResetPasswordStep.InputEmail
  );
  const { isAuth } = useAuthentication();

  const { mutate: sendResetCodeMutation } = useGetResetCode();

  const { mutate: resetPasswordMutation } = useResetPasswordMutation();

  const formInstanceResetPassword = useForm<TUserResetPasswordSchema>({
    mode: "onChange",
    resolver: zodResolver(UserResetPasswordSchema),
  });

  const formInstance = useForm<TGetVerifyCodeSchema>({
    mode: "onChange",
    resolver: zodResolver(GetVerifyCodeSchema),
  });

  const handleSubmitEmail = (data: TGetVerifyCodeSchema) => {
    sendResetCodeMutation(
      {
        email: data.email,
      },
      {
        onSuccess: () => {
          setCurrentStep(EResetPasswordStep.InputVerificationCode);
          CStepperRef.current?.handleNextStep();
          formInstanceResetPassword.setValue("email", data.email);
        },
        onError: (error) => {
          notify.error(error.message || defaultErrorMsg);
        },
      }
    );
  };

  const onSubmitPassword = (data: TUserResetPasswordSchema) => {
    resetPasswordMutation(
      {
        email: data.email,
        password: data.password,
      },
      {
        onSuccess: () => {
          setCurrentStep(EResetPasswordStep.ResetSuccessfully);
          CStepperRef.current?.handleNextStep();
        },
        onError: (error) => {
          notify.error(error.message || defaultErrorMsg);
        },
      }
    );
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
