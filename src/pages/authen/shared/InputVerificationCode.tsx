import { Typography } from "@mui/material";
import CTextField from "../../../components/atoms/CTextField/CTextField";
import CButton from "../../../components/atoms/CButton/CButton";
import { useCallback, useRef, useState } from "react";

import { notify } from "../../../utils/notifyUtils";
import { defaultErrorMsg } from "../../../constants/message/validationMsg";
import { CODE_LENGTH, VERIFY_ACCOUNT_STEP } from "./constants";
import {
  useGetResetCode,
  useVerifyResetCodeMutation,
} from "../../../hooks/auth/reset-password.hook";
import {
  useGetVerifyCode,
  useVerifyAccountMutation,
} from "../../../hooks/auth/verify-email.hook";

export interface InputVerificationCodeProps {
  email: string;
  type?: keyof typeof VERIFY_ACCOUNT_STEP;
  onSuccessVerify: (isVerified: boolean) => void;
}

const InputVerificationCode = ({
  email,
  type,
  onSuccessVerify,
}: InputVerificationCodeProps) => {
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const [code, setCode] = useState<string[]>(Array(CODE_LENGTH).fill(""));
  const [disableButton, setDisableButton] = useState(true);

  const { mutate: verifyResetCodeMutation } = useVerifyResetCodeMutation();
  const { mutate: verifyAccountMutation } = useVerifyAccountMutation();

  const { mutate: sendResetPasswordCodeMutation } = useGetVerifyCode();
  const { mutate: sendResetCodeMutation } = useGetResetCode();

  const handleChange = useCallback(
    (index: number, value: string) => {
      if (!/^\d?$/.test(value)) return; // Only allow digits

      const newCode = [...code];
      newCode[index] = value;
      setCode(newCode);

      if (value && index < CODE_LENGTH - 1) {
        inputRefs.current[index + 1]?.focus();
      }

      setDisableButton(newCode.includes(""));
    },
    [code]
  );

  const handleKeyDown = useCallback(
    (index: number, e: React.KeyboardEvent) => {
      if (e.key === "Backspace" && !code[index] && index > 0) {
        inputRefs.current[index - 1]?.focus();
      }
    },
    [code]
  );

  const handleVerificationEmail = useCallback(() => {
    let codeString = code.join("");

    if (codeString?.length === CODE_LENGTH) {
      if (type === VERIFY_ACCOUNT_STEP.RESET_PASSWORD) {
        verifyResetCodeMutation(
          {
            email: email,
            resetCode: codeString,
          },
          {
            onSuccess: () => {
              onSuccessVerify(true);
            },
            onError: (error) => {
              notify.error(error.message || defaultErrorMsg);
              setCode(Array(CODE_LENGTH).fill(""));
            },
          }
        );
      } else if (
        type === VERIFY_ACCOUNT_STEP.REGISTER ||
        type === VERIFY_ACCOUNT_STEP.VERIFY_ACCOUNT
      ) {
        verifyAccountMutation(
          {
            email: email,
            verifyCode: codeString,
          },
          {
            onSuccess: () => {
              onSuccessVerify(true);
            },
            onError: (error) => {
              notify.error(error.message || defaultErrorMsg);
              setCode(Array(CODE_LENGTH).fill(""));
            },
          }
        );
      }
    }
  }, [code, email, onSuccessVerify, verifyResetCodeMutation]);

  const handleResendVerifyCode = useCallback(() => {
    if (
      type === VERIFY_ACCOUNT_STEP.VERIFY_ACCOUNT ||
      type === VERIFY_ACCOUNT_STEP.REGISTER
    ) {
      sendResetPasswordCodeMutation(
        {
          email,
        },
        {
          onSuccess: () => notify.success("Verification code resent."),
          onError: (error) => notify.error(error.message || defaultErrorMsg),
        }
      );
    } else if (type === VERIFY_ACCOUNT_STEP.RESET_PASSWORD) {
      sendResetCodeMutation(
        {
          email,
        },
        {
          onSuccess: () => notify.success("Verification code resent."),
          onError: (error) => notify.error(error.message || defaultErrorMsg),
        }
      );
    }
  }, [email, sendResetPasswordCodeMutation, sendResetCodeMutation]);

  return (
    <div className="flex flex-col items-center justify-center gap-6">
      <Typography variant="h5">
        {type === VERIFY_ACCOUNT_STEP.REGISTER
          ? "Register"
          : type === VERIFY_ACCOUNT_STEP.RESET_PASSWORD
          ? "Reset password"
          : "Verify account"}
      </Typography>
      <Typography className="text-center">
        A verification email has been sent to
        <span className="ml-1 text-purple-600">{email}</span>
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
              inputRef={(el) => {
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
        <CButton
          disabled={disableButton}
          className="w-full"
          onClick={handleVerificationEmail}
          isRounded
        >
          {type === VERIFY_ACCOUNT_STEP.REGISTER
            ? "Register"
            : type === VERIFY_ACCOUNT_STEP.RESET_PASSWORD
            ? "Next"
            : "Verify account"}
        </CButton>

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
