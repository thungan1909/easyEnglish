enum ESignUpStep {
  InputEmail = 0,
  InputBasicInfo = 1,
  InputVerificationCode = 2,
  AuthenticationSuccessful = 3,
}

const SIGN_UP_STEP = [
  ESignUpStep.InputEmail,
  ESignUpStep.InputBasicInfo,
  ESignUpStep.InputVerificationCode,
  ESignUpStep.AuthenticationSuccessful,
] as const;

export { ESignUpStep, SIGN_UP_STEP };
