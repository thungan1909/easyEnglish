import { Typography } from "@mui/material";
import CTextField from "../../../components/atoms/CTextField/CTextField";
import CButton from "../../../components/atoms/CButton/CButton";
import { useCallback, useRef, useState } from "react";
import {
  useGetVerifyCode,
  useVerifyEmailMutation,
} from "../../../apis/api-hooks/auth.hook";
import { notify } from "../../../utils/notify";
import { defaultErrorMsg } from "../../../constants/errorMessage";
import { CODE_LENGTH } from "./constants";

export interface InputVerificationCodeProps {
  email: string;
  isVerify?: boolean;
  onSuccessVerify: (isVerified: boolean) => void;
}

const InputVerificationCode = ({
  email,
  isVerify = false,
  onSuccessVerify,
}: InputVerificationCodeProps) => {
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const [code, setCode] = useState<string[]>(Array(CODE_LENGTH).fill(""));
  const [disableButton, setDisableButton] = useState(true);
  // const [isVerified, setIsVerified] = useState(false);

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

      // setDisableButton(newCode.some((digit) => !digit));
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
    if (verificationCode?.length === CODE_LENGTH) {
      verifyEmailMutation(
        {
          email: email,
          verifyCode: verificationCode,
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
      // setIsVerified(true);
    }
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
    <div>
      <Typography
        variant="h5"
        className="text-center font-semibold text-gray-800 p-4"
      >
        {isVerify ? "Email Verification" : "Register"}
      </Typography>
      <Typography className="text-center">
        A verification email has been sent to
        <span className="ml-1 font-semibold text-purple-600">{email}</span>
      </Typography>

      <div className="mt-6 flex flex-col max-w-sm mx-auto gap-5 w-full">
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
        >
          {isVerify ? "Verification" : "Register"}
        </CButton>
        <Typography className="text-center">
          Don't recieved any message?
        </Typography>
        <CButton
          className="w-full"
          onClick={handleResendVerifyCode}
          variant="text"
          // disabled={!isVerified}
        >
          Resend
        </CButton>
      </div>
    </div>
  );
};

export default InputVerificationCode;
