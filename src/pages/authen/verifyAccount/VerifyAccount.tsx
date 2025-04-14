import { useEffect, useRef, useState } from "react";
import CSteppers from "../../../components/molecules/cSteppers";
import { ISteppersRef } from "../../../components/molecules/cSteppers/types";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { notify } from "../../../utils/notify";
import { defaultErrorMsg } from "../../../constants/errorMessage";
import { ROUTES_CONSTANTS } from "../../../routers/constants";
import { EVerifyStep } from "./constant";
import InputVerificationCode from "../shared/InputVerificationCode";
import AuthenticationSuccessful from "../shared/AuthenticationSuccessful";
import {
  GetVerifyCodeSchema,
  TGetVerifyCodeSchema,
} from "../../../validation/user.schema";
import InputVerificationEmail from "../shared/InputVerificationEmail";
import { AuthenticationLayout } from "../../../layout/AuthenticationLayout";
import { VERIFY_ACCOUNT_STEP } from "../shared/constants";
import { useGetVerifyCode } from "../../../hooks/auth/verify-email.hook";
import { useAuthentication } from "../../../hooks/auth/login.hook";

const VerifyAccount = () => {
  const CStepperRef = useRef<ISteppersRef>(null);
  const [step, setStep] = useState(0);
  const [verificationState, setVerificationState] = useState(false);
  const [currentStep, setCurrentStep] = useState<EVerifyStep>(
    EVerifyStep.InputInfo
  );
  const { isAuth } = useAuthentication();

  const { mutate: sendResetPasswordCodeMutation } = useGetVerifyCode();

  const formInstance = useForm<TGetVerifyCodeSchema>({
    mode: "onChange",
    resolver: zodResolver(GetVerifyCodeSchema),
  });

  const handleSubmitAuthenInfo = (data: TGetVerifyCodeSchema) => {
    sendResetPasswordCodeMutation(
      {
        email: data.email,
      },
      {
        onSuccess: () => {
          setCurrentStep(EVerifyStep.InputVerificationCode);
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
      setCurrentStep(EVerifyStep.AuthenticationSuccessful);
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
          numberStep={3}
          currentStep={step}
          changeCurrentStep={setStep}
          ref={CStepperRef}
        />
      }
    >
      {currentStep === EVerifyStep.InputInfo && (
        <InputVerificationEmail
          onSubmitForm={handleSubmitAuthenInfo}
          formInstance={formInstance}
          isVerify
        />
      )}
      {currentStep === EVerifyStep.InputVerificationCode && (
        <InputVerificationCode
          type={VERIFY_ACCOUNT_STEP.VERIFY_ACCOUNT}
          email={formInstance.getValues("email")}
          onSuccessVerify={setVerificationState}
        />
      )}
      {currentStep === EVerifyStep.AuthenticationSuccessful && (
        <AuthenticationSuccessful type={VERIFY_ACCOUNT_STEP.VERIFY_ACCOUNT} />
      )}
    </AuthenticationLayout>
  );
};

export default VerifyAccount;
