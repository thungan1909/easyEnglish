import { useRef } from "react";
import CSteppers from "../../../components/molecules/cSteppers";
import { ISteppersRef } from "../../../components/molecules/cSteppers/types";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { notify } from "../../../utils/notifyUtils";
import { EVerifyAccountStep, VERIFY_ACCOUNT_STEPS } from "./constant";
import InputVerificationCode from "../shared/InputVerificationCode";
import AuthenticationSuccessful from "../shared/AuthenticationSuccessful";
import {
  GetVerifyCodeSchema,
  TGetVerifyCodeSchema,
} from "../../../validation/user.schema";
import InputVerificationEmail from "../shared/InputVerificationEmail";
import { AuthenticationLayout } from "../../../layout/AuthenticationLayout";
import { useGetVerifyCode } from "../../../hooks/auth/verify-email.hook";
import { defaultErrorMsg } from "../../../constants/message/errorMsg";
import { useStepper } from "../../../utils/useStepper.hook";
import { VerifyAccountType } from "../shared/constants";

const VerifyAccountPage = () => {
  /* ----------------------------- router & refs ---------------------------- */
  const stepperRef = useRef<ISteppersRef>(null);

  /* ------------------------------- stepper -------------------------------- */
  const { currentStep, stepIndex, goNext, goBack, goToIndex } =
    useStepper(VERIFY_ACCOUNT_STEPS);

  /* ------------------------------- APIs ----------------------------------- */
  const { mutate: sendVerifyCode } = useGetVerifyCode();

  /* ------------------------------- forms ---------------------------------- */
  const formInstance = useForm<TGetVerifyCodeSchema>({
    mode: "onChange",
    resolver: zodResolver(GetVerifyCodeSchema),
  });

  /* ------------------------------ handlers -------------------------------- */
  const handleSubmitEmail = (data: TGetVerifyCodeSchema) => {
    sendVerifyCode(
      { email: data.email },
      {
        onSuccess: goNext,
        onError: (error) => notify.error(error.message || defaultErrorMsg),
      },
    );
  };

  /* ----------------------------- render step ------------------------------ */

  const renderStep = () => {
    switch (currentStep) {
      case EVerifyAccountStep.InputEmail:
        return (
          <InputVerificationEmail
            onSubmitForm={handleSubmitEmail}
            formInstance={formInstance}
            isVerifyPage
          />
        );

      case EVerifyAccountStep.InputVerificationCode:
        return (
          <InputVerificationCode
            type={VerifyAccountType.VERIFY_ACCOUNT}
            email={formInstance.getValues("email")}
            onSuccessVerify={goNext}
            goBack={goBack}
          />
        );

      case EVerifyAccountStep.VerifyAccountSuccess:
        return (
          <AuthenticationSuccessful type={VerifyAccountType.VERIFY_ACCOUNT} />
        );

      default:
        return null;
    }
  };

  return (
    <AuthenticationLayout
      stepperSection={
        <CSteppers
          numberStep={VERIFY_ACCOUNT_STEPS.length}
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

export default VerifyAccountPage;
