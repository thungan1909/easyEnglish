import { Typography } from "@mui/material";
import CTextField from "../../../components/atoms/CTextField/CTextField";
import CButton from "../../../components/atoms/CButton/CButton";
import loginImg from "../../../assets/login_img_2.png";
import { useRef, useState } from "react";
import { UseFormReturn } from "react-hook-form";
import { TUserSignUpSchema } from "./schemas";
import { useVerifyEmailMutation } from "../../../apis/hooks/auth.hook";
import { notify } from "../../../utils/notify";
import { defaultErrorMsg } from "../../../constants/errorMessage";

export interface InputVerificationCodeProps {
  formInstance: UseFormReturn<TUserSignUpSchema>;
  onSuccessVerify: (isVerified: boolean) => void;
}

const InputVerificationCode = ({
  formInstance,
  onSuccessVerify,
}: InputVerificationCodeProps) => {
  const [code, setCode] = useState(["", "", "", "", "", ""]);
  const [disableButton, setDisable] = useState(true);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const { mutate: verifyEmailMutation } = useVerifyEmailMutation();

  const handleChange = (index: number, value: string) => {
    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);

    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
    setDisable(newCode.some((digit) => !digit));
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === "Backspace" && !code[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleVerificationEmail = () => {
    let verificationCode = code.join("");
    if (verificationCode?.length === 6) {
      verifyEmailMutation(
        {
          username: formInstance.getValues("username"),
          email: formInstance.getValues("email"),
          verifyCode: verificationCode,
        },
        {
          onSuccess: () => {
            onSuccessVerify(true);
          },
          onError: (error) => {
            notify.error(error.message || defaultErrorMsg);
          },
        }
      );
    }
  };

  return (
    <div className="w-full md:w-1/2 p-10 flex flex-col justify-center min-w-sm">
      <Typography
        variant="h5"
        className="text-center font-semibold text-gray-800 p-4"
      >
        Register
      </Typography>
      <Typography className="text-center">
        A verification email has been sent to
        <span className="ml-1 font-semibold text-purple-600">
          {formInstance.getValues("email")}
        </span>
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
          onClick={() => handleVerificationEmail()}
        >
          Register
        </CButton>
      </div>
    </div>
  );
};

export default InputVerificationCode;
