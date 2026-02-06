enum EVerifyAccountStep {
  InputEmail = 0,
  InputVerificationCode = 1,
  AuthenticationSuccessful = 2,
}

const VERIFY_ACCOUNT_STEPS = [
  EVerifyAccountStep.InputEmail,
  EVerifyAccountStep.InputVerificationCode,
  EVerifyAccountStep.AuthenticationSuccessful,
] as const;

export { EVerifyAccountStep, VERIFY_ACCOUNT_STEPS };
