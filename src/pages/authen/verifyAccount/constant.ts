enum EVerifyAccountStep {
  InputEmail = 0,
  InputVerificationCode = 1,
  VerifyAccountSuccess = 2,
}

const VERIFY_ACCOUNT_STEPS = [
  EVerifyAccountStep.InputEmail,
  EVerifyAccountStep.InputVerificationCode,
  EVerifyAccountStep.VerifyAccountSuccess,
] as const;

export { EVerifyAccountStep, VERIFY_ACCOUNT_STEPS };
