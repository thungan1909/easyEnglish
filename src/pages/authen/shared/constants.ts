export const CODE_LENGTH = 6;

export enum VerifyAccountType {
  REGISTER = "REGISTER",
  VERIFY_ACCOUNT = "VERIFY_ACCOUNT",
  RESET_PASSWORD = "RESET_PASSWORD",
}

export const SUCCESSFUL_TITLE_MAP: Record<VerifyAccountType, string> = {
  [VerifyAccountType.REGISTER]: "Registration Successful",
  [VerifyAccountType.RESET_PASSWORD]: "Reset Password Successful",
  [VerifyAccountType.VERIFY_ACCOUNT]: "Verification Successful",
};

export const VERIFY_TITLE_MAP: Record<VerifyAccountType, string> = {
  [VerifyAccountType.REGISTER]: "Register",
  [VerifyAccountType.RESET_PASSWORD]: "Reset Password",
  [VerifyAccountType.VERIFY_ACCOUNT]: "Verify Account",
};

export const VERIFY_BUTTON_MAP: Record<VerifyAccountType, string> = {
  [VerifyAccountType.REGISTER]: "Register",
  [VerifyAccountType.RESET_PASSWORD]: "Next",
  [VerifyAccountType.VERIFY_ACCOUNT]: "Verify account",
};
