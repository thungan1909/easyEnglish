import { useCallback, useEffect, useRef } from "react";
import { ESignUpStep, SIGN_UP_STEP } from "./constant";
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
import { useAuthentication } from "../../../hooks/auth/login.hook";
import { useRegisterUser } from "../../../hooks/auth/signup.hook";
import { defaultErrorMsg } from "../../../constants/message/errorMsg";
import { useNavigate } from "react-router-dom";
import { VerifyAccountType } from "../shared/constants";
import { useStepper } from "../../../utils/useStepper.hook";

const RegisterPage = () => {
  /* ----------------------------- router & refs ---------------------------- */
  const navigate = useNavigate();
  const stepperRef = useRef<ISteppersRef>(null);

  /* ------------------------------- stepper -------------------------------- */
  const { currentStep, stepIndex, goNext, goBack, goToIndex } =
    useStepper(SIGN_UP_STEP);

  /* ------------------------------- auth ----------------------------------- */
  const { isAuth } = useAuthentication();
  const { mutate: register } = useRegisterUser();

  /* ------------------------------- forms ---------------------------------- */
  const formInstance = useForm<TUserSignUpSchema>({
    mode: "onChange",
    resolver: zodResolver(UserSignUpSchema),
  });

  /* ------------------------------ handlers -------------------------------- */
  const handleSetEmail = useCallback(
    (email: string) => {
      formInstance.setValue("email", email);
      goNext();
    },
    [formInstance, goNext],
  );

  const handleSubmitAuthenInfo = useCallback(
    (data: TUserSignUpSchema) => {
      register(
        {
          email: data.email,
          username: data.username,
          password: data.password,
        },
        {
          onSuccess: goNext,
          onError: (error) => notify.error(error.message || defaultErrorMsg),
        },
      );
    },
    [register, goNext],
  );

  /* -------------------------------- effects -------------------------------- */
  useEffect(() => {
    if (isAuth) {
      navigate(ROUTES_CONSTANTS.DASHBOARD, { replace: true });
    }
  }, [isAuth, navigate]);

  /* ----------------------------- render step ------------------------------ */

  const renderStep = () => {
    switch (currentStep) {
      case ESignUpStep.InputEmail:
        return <InputEmail onSubmitEmail={handleSetEmail} />;

      case ESignUpStep.InputBasicInfo:
        return (
          <InputBasicInfo
            onSubmitProfile={handleSubmitAuthenInfo}
            goBack={goBack}
            formInstance={formInstance}
          />
        );

      case ESignUpStep.InputVerificationCode:
        return (
          <InputVerificationCode
            email={formInstance.getValues("email")}
            onSuccessVerify={goNext}
            goBack={goBack}
            type={VerifyAccountType.REGISTER}
          />
        );

      case ESignUpStep.AuthenticationSuccessful:
        return <AuthenticationSuccessful type={VerifyAccountType.REGISTER} />;

      default:
        return null;
    }
  };

  return (
    <AuthenticationLayout
      stepperSection={
        <CSteppers
          numberStep={SIGN_UP_STEP.length}
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

export default RegisterPage;
