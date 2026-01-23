import { useCallback, useEffect, useMemo, useRef, useState } from "react";
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
import { VERIFY_ACCOUNT_STEP } from "../shared/constants";
import { useAuthentication } from "../../../hooks/auth/login.hook";
import { useRegisterUser } from "../../../hooks/auth/signup.hook";
import { defaultErrorMsg } from "../../../constants/message/errorMsg";
import { useStepper } from "./useStepper.hook";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const CStepperRef = useRef<ISteppersRef>(null);
  const [verificationState, setVerificationState] = useState(false);

  const { currentStep, stepIndex, goNext, goBack, goToIndex } =
    useStepper(SIGN_UP_STEP);

  const { isAuth } = useAuthentication();
  const { mutate: register } = useRegisterUser();

  const formInstance = useForm<TUserSignUpSchema>({
    mode: "onChange",
    resolver: zodResolver(UserSignUpSchema),
  });

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

  useEffect(() => {
    if (verificationState) goNext();
  }, [verificationState, goNext]);

  useEffect(() => {
    if (isAuth) navigate(ROUTES_CONSTANTS.DASHBOARD);
  }, [isAuth, navigate]);

  const STEP_COMPONENTS = useMemo(
    () => ({
      [ESignUpStep.InputEmail]: <InputEmail onInputEmail={handleSetEmail} />,
      [ESignUpStep.InputBasicInfo]: (
        <InputBasicInfo
          onSubmitProfile={handleSubmitAuthenInfo}
          goBack={goBack}
          formInstance={formInstance}
        />
      ),
      [ESignUpStep.InputVerificationCode]: (
        <InputVerificationCode
          email={formInstance.getValues("email")}
          onSuccessVerify={setVerificationState}
          goBack={goBack}
          type={VERIFY_ACCOUNT_STEP.REGISTER}
        />
      ),
      [ESignUpStep.AuthenticationSuccessful]: (
        <AuthenticationSuccessful type={VERIFY_ACCOUNT_STEP.REGISTER} />
      ),
    }),
    [formInstance, goBack, handleSetEmail, handleSubmitAuthenInfo],
  );

  return (
    <AuthenticationLayout
      stepperSection={
        <CSteppers
          numberStep={SIGN_UP_STEP.length}
          currentStep={stepIndex}
          onStepChange={goToIndex}
          ref={CStepperRef}
        />
      }
    >
      {STEP_COMPONENTS[currentStep]}
    </AuthenticationLayout>
  );
};

export default Register;
