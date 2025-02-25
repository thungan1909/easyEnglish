import { useEffect, useRef, useState } from "react";
import CheckValidEmail from "./InputEmail";
import { ESignUpStep } from "./constant";
import CSteppers from "../../../components/molecules/cSteppers";
import { ISteppersRef } from "../../../components/molecules/cSteppers/types";
import { TUserSignUpSchema, UserSignUpSchema } from "./schemas";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import InputBasicInfo from "./InputBasicInfo";
import { useSignUpMutation } from "../../../apis/hooks/auth.hook";
import InputVerificationCode from "./InputVerificationCode";
import RegisterSuccessfully from "./RegisterSuccessfully";
import { notify } from "../../../utils/notify";
import { defaultErrorMsg } from "../../../constants/errorMessage";

const Register = () => {
  const CStepperRef = useRef<ISteppersRef>(null);
  const [step, setStep] = useState(0);
  const [verificationState, setVerificationState] = useState(false);
  const [currentStep, setCurrentStep] = useState<ESignUpStep>(
    ESignUpStep.InputEmail
  );

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
      setCurrentStep(ESignUpStep.RegisterSuccessfully);
      CStepperRef.current?.handleNextStep();
    }
  }, [verificationState]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r to-purple-200">
      <div className="w-1/2 mb-8">
        <CSteppers
          numberStep={4}
          currentStep={step}
          changeCurrentStep={setStep}
          ref={CStepperRef}
        />
      </div>
      <div>
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
            formInstance={formInstance}
            onSuccessVerify={setVerificationState}
          />
        )}

        {currentStep === ESignUpStep.RegisterSuccessfully && (
          <RegisterSuccessfully />
        )}
      </div>
    </div>
  );
};

export default Register;
