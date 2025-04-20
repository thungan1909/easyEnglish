import { Typography } from "@mui/material";
import CTextField from "../../../components/atoms/CTextField/CTextField";
import CButton from "../../../components/atoms/CButton/CButton";
import { useState } from "react";
import { notify } from "../../../utils/notifyUtils";
import { ROUTES_CONSTANTS } from "../../../routers/constants";
import { emailRegex } from "../../../constants/regex";
import { useNavigate } from "react-router-dom";
import { FaEnvelope } from "react-icons/fa";
import { useCheckExistEmailMutation } from "../../../hooks/auth/signup.hook";
import {
  defaultErrorMsg,
  existEmailErrorMsg,
} from "../../../constants/message/errorMsg";
import { invalidEmailMsg } from "../../../constants/message/validationMsg";

export interface InputEmailProps {
  onInputEmail: (email: string) => void;
}

const validateEmail = (email: string) => emailRegex.test(email);

const InputEmail = ({ onInputEmail }: InputEmailProps) => {
  const navigate = useNavigate();

  const [email, setEmail] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [disableButton, setDisable] = useState(true);
  const { mutate: checkEmailMutation } = useCheckExistEmailMutation();

  const handleNextStep = () => {
    const trimmedEmail = email.trim();
    if (!trimmedEmail || !validateEmail(email)) {
      setError(invalidEmailMsg);
      return;
    }

    checkEmailMutation(
      { email: trimmedEmail },
      {
        onSuccess: (data) => {
          if (data.exists) {
            setError(existEmailErrorMsg);
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
    <div className="flex flex-col items-center justify-center gap-6">
      <Typography variant="h5">Register</Typography>
      <Typography>
        Welcome to
        <span
          className="ml-1"
          style={{ color: "var(--main-purple-600)" }}
        >
          Easy English
        </span>
      </Typography>

      <div className="flex flex-col w-full gap-6">
        <div className="flex flex-col">
          <CTextField
            type="email"
            label="Email"
            placeholder="Email"
            value={email}
            className="w-full"
            startIcon={<FaEnvelope />}
            onChange={(e) => {
              setEmail(e.target.value);
              setDisable(false);
            }}
            maxLength={50}
          />
          {error && (
            <Typography color="error" variant="caption">
              {error}
            </Typography>
          )}
        </div>
        <CButton
          disabled={disableButton}
          onClick={() => handleNextStep()}
          className="w-full"
          isRounded
        >
          Next
        </CButton>

        <span className="flex items-center justify-center">
          Already have an account?
          <CButton
            onClick={() => {
              navigate(ROUTES_CONSTANTS.AUTH.LOGIN);
            }}
            variant="text"
            size="large"
            className="!ml-1"
          >
            Log in
          </CButton>
        </span>
      </div>
    </div>
  );
};

export default InputEmail;
