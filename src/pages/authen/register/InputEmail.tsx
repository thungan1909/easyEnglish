import { Typography } from "@mui/material";
import CTextField from "../../../components/atoms/CTextField/CTextField";
import CButton from "../../../components/atoms/CButton/CButton";
import { useState } from "react";
import { useCheckExistEmailMutation } from "../../../apis/hooks/auth.hook";
import { notify } from "../../../utils/notify";
import { defaultErrorMsg } from "../../../constants/errorMessage";

export interface InputEmailProps {
  onInputEmail: (email: string) => void;
}

const validateEmail = (email: string) =>
  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);

const InputEmail = ({ onInputEmail }: InputEmailProps) => {
  const [email, setEmail] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [disableButton, setDisable] = useState(true);
  const { mutate: checkExistEmail } = useCheckExistEmailMutation();

  const handleNextStep = () => {
    const trimmedEmail = email.trim();
    if (!trimmedEmail || !validateEmail(email)) {
      setError("Invalid email format");
      return;
    }

    checkExistEmail(
      { email: trimmedEmail },
      {
        onSuccess: (data) => {
          if (data.exists) {
            setError("This email is already in use. Please try another email");
          } else {
            onInputEmail(trimmedEmail);
          }
        },
        onError: (error) => {
          notify.error(error.message || defaultErrorMsg);
        },
      }
    );
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
        Welcome to
        <span className="ml-1 font-semibold text-purple-600">Easy English</span>
      </Typography>

      <div className="mt-6 flex flex-col max-w-sm mx-auto gap-5 w-full">
        <div className="flex flex-col">
          <CTextField
            type="email"
            label="Email"
            placeholder="Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setDisable(false);
            }}
            maxLength={50}
          />
          {error && (
            <Typography color="error" variant="body2" className="!mt-1">
              {error}
            </Typography>
          )}
        </div>
        <CButton disabled={disableButton} onClick={() => handleNextStep()}>
          Next
        </CButton>
      </div>
    </div>
  );
};

export default InputEmail;
