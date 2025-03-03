import { useEffect, useRef, useState } from "react";
import CSteppers from "../../../components/molecules/cSteppers";
import { ISteppersRef } from "../../../components/molecules/cSteppers/types";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  useAuthentication,
  useGetVerifyCode,
} from "../../../apis/hooks/auth.hook";

import { notify } from "../../../utils/notify";
import { defaultErrorMsg } from "../../../constants/errorMessage";
import loginImg from "../../../assets/login_img_2.png";
import { ROUTES_CONSTANTS } from "../../../routers/constants";
import { EVerifyStep } from "./constant";
import InputUserInfo from "./InputVerificationEmail";
import InputVerificationCode from "../shared/InputVerificationCode";
import VerifySuccessfully from "../shared/VerifySuccessfully";
import {
  GetVerifyCodeSchema,
  TGetVerifyCodeSchema,
} from "../../../types/dtos/login.dto";

const VerifyAccount = () => {
  const CStepperRef = useRef<ISteppersRef>(null);
  const [step, setStep] = useState(0);
  const [verificationState, setVerificationState] = useState(false);
  const [currentStep, setCurrentStep] = useState<EVerifyStep>(
    EVerifyStep.InputInfo
  );
  const { isAuth } = useAuthentication();

  const { mutate: getVerifyCodeMutation } = useGetVerifyCode();

  const formInstance = useForm<TGetVerifyCodeSchema>({
    mode: "onChange",
    resolver: zodResolver(GetVerifyCodeSchema),
  });

  const handleSubmitAuthenInfo = (data: TGetVerifyCodeSchema) => {
    getVerifyCodeMutation(
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
      setCurrentStep(EVerifyStep.VerifySuccessfully);
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
          numberStep={3}
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
          {currentStep === EVerifyStep.InputInfo && (
            <InputUserInfo
              onSubmitForm={handleSubmitAuthenInfo}
              formInstance={formInstance}
            />
          )}
          {currentStep === EVerifyStep.InputVerificationCode && (
            <InputVerificationCode
              email={formInstance.getValues("email")}
              onSuccessVerify={setVerificationState}
            />
          )}
          {currentStep === EVerifyStep.VerifySuccessfully && (
            <VerifySuccessfully isVerify />
          )}
        </div>
      </div>
    </div>
  );
};

export default VerifyAccount;
