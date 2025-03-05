import { Typography } from "@mui/material";
import CTextField from "../../../components/atoms/CTextField/CTextField";
import CButton from "../../../components/atoms/CButton/CButton";
import { useCallback, useRef, useState } from "react";
import {
  useGetVerifyCode,
  useVerifyEmailMutation,
} from "../../../hooks/auth.hook";
import { notify } from "../../../utils/notify";
import { defaultErrorMsg } from "../../../constants/errorMessage";
import { CODE_LENGTH, VERIFY_ACCOUNT_STEP } from "./constants";

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

  const { mutate: verifyEmailMutation } = useVerifyEmailMutation();
  const { mutate: getVerifyCodeMutation } = useGetVerifyCode();

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
    let verificationCode = code.join("");
    onSuccessVerify(true);

    // if (verificationCode?.length === CODE_LENGTH) {
    //   verifyEmailMutation(
    //     {
    //       email: email,
    //       verifyCode: verificationCode,
    //     },
    //     {
    //       onSuccess: () => {
    //         onSuccessVerify(true);
    //       },
    //       onError: (error) => {
    //         notify.error(error.message || defaultErrorMsg);
    //         setCode(Array(CODE_LENGTH).fill(""));
    //       },
    //     }
    //   );
    // }
  }, [code, email, onSuccessVerify, verifyEmailMutation]);

  const handleResendVerifyCode = useCallback(() => {
    getVerifyCodeMutation(
      {
        email,
      },
      {
        onSuccess: () => notify.success("Verification code resent."),
        onError: (error) => notify.error(error.message || defaultErrorMsg),
      }
    );
  }, [email, getVerifyCodeMutation]);

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
