import { useEffect, useRef, useState } from "react";
import CheckValidEmail from "./InputEmail";
import { ESignUpStep } from "./constant";
import CSteppers from "../../../components/molecules/cSteppers";
import { ISteppersRef } from "../../../components/molecules/cSteppers/types";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import InputBasicInfo from "./InputBasicInfo";
import {
  useAuthentication,
  useSignUpMutation,
} from "../../../apis/api-hooks/auth.hook";
import InputVerificationCode from "../shared/InputVerificationCode";
import VerifySuccessfully from "../shared/VerifySuccessfully";
import { notify } from "../../../utils/notify";
import { defaultErrorMsg } from "../../../constants/errorMessage";
import loginImg from "../../../assets/login_img_2.png";
import { ROUTES_CONSTANTS } from "../../../routers/constants";
import {
  TUserSignUpSchema,
  UserSignUpSchema,
} from "../../../validation/sign-up.schema";

const Register = () => {
  const CStepperRef = useRef<ISteppersRef>(null);
  const [step, setStep] = useState(0);
  const [verificationState, setVerificationState] = useState(false);
  const [currentStep, setCurrentStep] = useState<ESignUpStep>(
    ESignUpStep.InputEmail
  );
  const { isAuth } = useAuthentication();

  const { mutate: signUpMutation } = useSignUpMutation();

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
    signUpMutation(
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
      setCurrentStep(ESignUpStep.VerifySuccessfully);
      CStepperRef.current?.handleNextStep();
    }
  }, [verificationState]);

  useEffect(() => {
    if (isAuth) {
      window.location.href = ROUTES_CONSTANTS.DASHBOARD;
    }
  }, [isAuth]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gradient-to-r to-purple-200">
      <div className="w-1/2 mb-8">
        <CSteppers
          numberStep={4}
          currentStep={step}
          changeCurrentStep={setStep}
          ref={CStepperRef}
        />
      </div>
      <div className="bg-white shadow-2xl rounded-2xl overflow-hidden flex w-full max-w-4xl f-full">
        <div className="md:w-1/2 md:flex hidden items-center justify-center p-6 bg-gradient-to-r from-indigo-300 to bg-purple-400">
          <img
            src={loginImg}
            alt="Learning illustration"
            className="object-contain"
          />
        </div>
        <div className="w-full md:w-1/2 p-10 flex flex-col justify-center min-w-sm">
          {currentStep === ESignUpStep.InputEmail && (
            <CheckValidEmail onInputEmail={handleSetEmail} />
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
            />
          )}
          {currentStep === ESignUpStep.VerifySuccessfully && (
            <VerifySuccessfully />
          )}
        </div>
      </div>
    </div>
  );
};

export default Register;
