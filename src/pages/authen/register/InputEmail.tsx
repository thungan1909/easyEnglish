import { Typography } from "@mui/material";
import CTextField from "../../../components/atoms/CTextField/CTextField";
import CButton from "../../../components/atoms/CButton/CButton";
import { useState } from "react";
import { useCheckExistEmailMutation } from "../../../apis/hooks/auth.hook";
import { notify } from "../../../utils/notify";
import { defaultErrorMsg } from "../../../constants/errorMessage";
import { ROUTES_CONSTANTS } from "../../../constants";

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
    <div>
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
          {error && <span className="text-red-500 text-sm mt-2">{error}</span>}
        </div>
        <CButton disabled={disableButton} onClick={() => handleNextStep()}>
          Next
        </CButton>
        <span className="text-center !text-gray-800 ">
          Already have an account?
          <a href={ROUTES_CONSTANTS.AUTH.LOGIN} className="ml-1">
            Log in
          </a>
        </span>
      </div>
    </div>
  );
};

export default InputEmail;
