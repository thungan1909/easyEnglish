import { Typography } from "@mui/material";
import CTextField from "../../../components/atoms/CTextField/CTextField";
import CButton from "../../../components/atoms/CButton/CButton";
import { useCallback, useRef, useState } from "react";

import { notify } from "../../../utils/notifyUtils";
import {
  CODE_LENGTH,
  VERIFY_BUTTON_MAP,
  VERIFY_TITLE_MAP,
  VerifyAccountType,
} from "./constants";
import {
  useGetResetCode,
  useVerifyResetCode,
} from "../../../hooks/auth/reset-password.hook";
import {
  useGetVerifyCode,
  useVerifyAccount,
} from "../../../hooks/auth/verify-email.hook";
import { defaultErrorMsg } from "../../../constants/message/errorMsg";
import { verificationCodeSentSuccessMsg } from "../../../constants/message/successMsg";
import { InputVerificationCodeProps } from "./types";

const InputVerificationCode = ({
  email,
  type,
  goBack,
  onSuccessVerify,
}: InputVerificationCodeProps) => {
  /* ------------------------------- Refs ------------------------------ */
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  /* ------------------------------- State ----------------------------- */
  const [code, setCode] = useState<string[]>(Array(CODE_LENGTH).fill(""));

  /* -------------------------- Derived State -------------------------- */
  const isDisabled = code.includes("");

  /* ------------------------------- APIs ------------------------------ */
  const { mutate: sendResetCode } = useGetResetCode();
  const { mutate: verifyResetCode } = useVerifyResetCode();

  const { mutate: sendVerifyCode } = useGetVerifyCode();
  const { mutate: verifyAccount } = useVerifyAccount();

  /* ------------------------------ Handlers --------------------------- */
  // Handle input change & auto-focus next field
  const handleChange = useCallback(
    (index: number, value: string) => {
      if (!/^\d?$/.test(value)) return;

      const newCode = [...code];
      newCode[index] = value;
      setCode(newCode);

      if (value && index < CODE_LENGTH - 1) {
        inputRefs.current[index + 1]?.focus();
      }
    },
    [code],
  );

  // Handle backspace navigation
  const handleKeyDown = useCallback(
    (index: number, e: React.KeyboardEvent) => {
      if (e.key === "Backspace" && !code[index] && index > 0) {
        inputRefs.current[index - 1]?.focus();
      }
    },
    [code],
  );

  // Verify entered code based on flow type
  const handleVerifyCode = useCallback(() => {
    const codeString = code.join("");
    if (codeString.length !== CODE_LENGTH) return;

    if (type === VerifyAccountType.RESET_PASSWORD) {
      verifyResetCode(
        { email, resetCode: codeString },
        {
          onSuccess: onSuccessVerify,
          onError: (error) => {
            notify.error(error.message || defaultErrorMsg);
            setCode(Array(CODE_LENGTH).fill(""));
          },
        },
      );
      return;
    }
    verifyAccount(
      { email, verifyCode: codeString },
      {
        onSuccess: onSuccessVerify,
        onError: (error) => {
          notify.error(error.message || defaultErrorMsg);
          setCode(Array(CODE_LENGTH).fill(""));
        },
      },
    );
  }, [code, type, verifyResetCode, email, onSuccessVerify, verifyAccount]);

  // Resend verification code
  const handleResendVerifyCode = useCallback(() => {
    if (
      type === VerifyAccountType.VERIFY_ACCOUNT ||
      type === VerifyAccountType.REGISTER
    ) {
      sendVerifyCode(
        { email },
        {
          onSuccess: () => notify.success(verificationCodeSentSuccessMsg),
          onError: (error) => notify.error(error.message || defaultErrorMsg),
        },
      );
      return;
    }

    sendResetCode(email, {
      onSuccess: () => notify.success(verificationCodeSentSuccessMsg),
      onError: (error) => notify.error(error.message || defaultErrorMsg),
    });
  }, [type, sendVerifyCode, email, sendResetCode]);

  return (
    <div className="flex flex-col items-center justify-center gap-6">
      <Typography variant="h5">{VERIFY_TITLE_MAP[type]}</Typography>
      <Typography className="text-center">
        A verification email has been sent to
        <span className="ml-1" style={{ color: "var(--main-600)" }}>
          {email}
        </span>
      </Typography>

      <div className="flex flex-col gap-6 w-full">
        <div className="flex !space-x-2">
          {code.map((num, index) => (
            <CTextField
              key={index}
              value={num}
              type="number"
              onChange={(e) => handleChange(index, e.target.value)}
              onKeyDown={(e) => handleKeyDown(index, e)}
              ref={(el) => {
                inputRefs.current[index] = el;
              }}
              customStyle={{
                fontSize: "24px",
                textAlign: "center",
              }}
              maxLength={1}
            />
          ))}
        </div>
        <div className="flex gap-2">
          <CButton
            className="w-full"
            isRounded
            variant="outlined"
            onClick={goBack}
          >
            Back
          </CButton>
          <CButton
            disabled={isDisabled}
            className="w-full"
            onClick={handleVerifyCode}
            isRounded
          >
            {VERIFY_BUTTON_MAP[type]}
          </CButton>
        </div>

        <Typography className="text-center">
          Don't recieved any message?
        </Typography>

        <CButton
          className="w-full"
          onClick={handleResendVerifyCode}
          variant="text"
          isRounded
        >
          Resend
        </CButton>
      </div>
    </div>
  );
};

export default InputVerificationCode;
