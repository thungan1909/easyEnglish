import { Typography } from "@mui/material";
import CTextField from "../../../components/atoms/CTextField/CTextField";
import CButton from "../../../components/atoms/CButton/CButton";
import loginImg from "../../../assets/login_img_2.png";
import { useRef, useState } from "react";
import { UseFormReturn } from "react-hook-form";
import { TUserSignUpSchema } from "./schemas";
import { useVerifyEmailMutation } from "../../../apis/hooks/auth.hook";

export interface InputVerificationCodeProps {
  formInstance: UseFormReturn<TUserSignUpSchema>;
}

const InputVerificationCode = ({ formInstance }: InputVerificationCodeProps) => {
  const [code, setCode] = useState(["", "", "", "", "", ""]);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const { mutate: verifyEmailMutation } = useVerifyEmailMutation()

  const handleChange = (index: number, value: string) => {
    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode)

    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  }

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === "Backspace" && !code[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  }

  const handleVerificationEmail = () => {
    let verificationCode = code.join('');
    console.log(verificationCode)
    
    verifyEmailMutation({
      username: formInstance.getValues('username'),
      email: formInstance.getValues('email'),
      verifyCode: verificationCode
    })
  }

  return (
    <div className="bg-white shadow-2xl rounded-2xl overflow-hidden flex w-full max-w-4xl">
      {/* Left Side - Image */}
      <div className="md:w-1/2 md:flex hidden items-center justify-center p-6 bg-gradient-to-r from-indigo-300 to bg-purple-400">
        <img
          src={loginImg}
          alt="Learning illustration"
          className="object-contain"
        />
      </div>

      {/* Right Side - Login Form */}
      <div className="w-full md:w-1/2 p-10 flex flex-col justify-center">
        <Typography
          variant="h5"
          className="text-center font-semibold text-gray-800 p-4"
        >
          Register
        </Typography>
        <Typography className="text-center">
          A verification email was sent to
          <span className="ml-1 font-semibold text-purple-600">
            {formInstance.getValues('email')}
          </span>
        </Typography>

        <div
          className="mt-6 flex flex-col max-w-sm mx-auto gap-5 w-full"
        >
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
                  fontSize: '24px', 
                  textAlign: 'center',
                }} 
                maxLength={1}
              />
            ))}
          </div>
          <CButton
            fullWidth
            onClick={() => handleVerificationEmail()}
            className="!bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white !py-3 !rounded-full"
          >
            Register
          </CButton>
        </div>
      </div>
    </div>
  );
};

export default InputVerificationCode;
