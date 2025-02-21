import { useRef, useState } from "react";
import CheckValidEmail from "./InputEmail";
import { ESignUpStep } from "./constant";
import CSteppers from "../../../components/molecules/cSteppers";
import { ISteppersRef } from "../../../components/molecules/cSteppers/types";
import { TUserSignUpSchema, UserSignUpSchema } from "./schemas";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import InputBasicInfo from "./InputAuthenInfo";

const Register = () => {
  const CStepperRef = useRef<ISteppersRef>(null);

  const [step, setStep] = useState(0);
  const [currentStep, setCurrentStep] = useState<ESignUpStep>(
    ESignUpStep.InputEmail
  );

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
    console.log("Submit function called"); // Check if this logs
    console.log(data, "formData");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r to-purple-200">
      <div className="w-1/2 mb-8">
        <CSteppers
          numberStep={2}
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
      </div>
    </div>
  );
};

export default Register;
