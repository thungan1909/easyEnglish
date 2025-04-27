import { useEffect, useRef, useState } from "react";
import { ESignUpStep } from "./constant";
import CSteppers from "../../../components/molecules/cSteppers";
import { ISteppersRef } from "../../../components/molecules/cSteppers/types";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import InputBasicInfo from "./InputBasicInfo";
import InputVerificationCode from "../shared/InputVerificationCode";
import AuthenticationSuccessful from "../shared/AuthenticationSuccessful";
import { notify } from "../../../utils/notifyUtils";
import { ROUTES_CONSTANTS } from "../../../routers/constants";
import {
  TUserSignUpSchema,
  UserSignUpSchema,
} from "../../../validation/user.schema";
import { AuthenticationLayout } from "../../../layout/AuthenticationLayout";
import InputEmail from "./InputEmail";
import { VERIFY_ACCOUNT_STEP } from "../shared/constants";
import { useAuthentication } from "../../../hooks/auth/login.hook";
import { useRegisterUser } from "../../../hooks/auth/signup.hook";
import { defaultErrorMsg } from "../../../constants/message/errorMsg";

const Register = () => {
  const CStepperRef = useRef<ISteppersRef>(null);
  const [step, setStep] = useState(0);
  const [verificationState, setVerificationState] = useState(false);
  const [currentStep, setCurrentStep] = useState<ESignUpStep>(
    ESignUpStep.InputEmail
  );
  const { isAuth } = useAuthentication();

  const { mutate: register } = useRegisterUser();

  const formInstance = useForm<TUserSignUpSchema>({
    mode: "onChange",
    resolver: zodResolver(UserSignUpSchema),
  });

  const handleSetEmail = (email: string) => {
    setCurrentStep(ESignUpStep.InputBasicInfo);
    formInstance.setValue("email", email);
    CStepperRef.current?.handleNextStep();
  };

  const handleSubmitAuthenInfo = (data: TUserSignUpSchema) => {
    register(
      {
        email: data.email,
        username: data.username,
        password: data.password,
      },
      {
        onSuccess: () => {
          setCurrentStep(ESignUpStep.InputVerificationCode);
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
      setCurrentStep(ESignUpStep.AuthenticationSuccessful);
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
      {currentStep === ESignUpStep.InputEmail && (
        <InputEmail onInputEmail={handleSetEmail} />
      )}

      {currentStep === ESignUpStep.InputBasicInfo && (
        <InputBasicInfo
          onSubmitProfile={handleSubmitAuthenInfo}
          formInstance={formInstance}
        />
      )}

      {currentStep === ESignUpStep.InputVerificationCode && (
        <InputVerificationCode
          email={formInstance.getValues("email")}
          onSuccessVerify={setVerificationState}
          type={VERIFY_ACCOUNT_STEP.REGISTER}
        />
      )}
      {currentStep === ESignUpStep.AuthenticationSuccessful && (
        <AuthenticationSuccessful type={VERIFY_ACCOUNT_STEP.REGISTER} />
      )}
    </AuthenticationLayout>
  );
};

export default Register;
