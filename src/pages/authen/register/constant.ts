enum ESignUpStep {
  InputEmail = 0,
  InputBasicInfo = 1,
  InputVerificationCode = 2,
  SignUpSuccess = 3,
}

const SIGN_UP_STEPS = [
  ESignUpStep.InputEmail,
  ESignUpStep.InputBasicInfo,
  ESignUpStep.InputVerificationCode,
  ESignUpStep.SignUpSuccess,
] as const;

export { ESignUpStep, SIGN_UP_STEPS };
