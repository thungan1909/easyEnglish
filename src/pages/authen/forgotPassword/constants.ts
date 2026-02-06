enum EForgotPasswordStep {
  InputEmail = 0,
  InputVerificationCode = 1,
  InputResetPassword = 2,
  ResetSuccess = 3,
}

const FORGOT_PASSWORD_STEPS = [
  EForgotPasswordStep.InputEmail,
  EForgotPasswordStep.InputVerificationCode,
  EForgotPasswordStep.InputResetPassword,
  EForgotPasswordStep.ResetSuccess,
] as const;

export { EForgotPasswordStep, FORGOT_PASSWORD_STEPS };
