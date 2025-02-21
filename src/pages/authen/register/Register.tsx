import { Typography } from "@mui/material";
import loginImg from "../../../assets/login_img_2.png";
import CTextField from "../../../atoms/CTextField/CTextField";
import CButton from "../../../atoms/CButton/CButton";
import { useState } from "react";
import { useCheckExistEmailMutation } from "../../../apis/hooks/auth.hook";

const Register = () => {
  const [email, setEmail] = useState<string>();
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const validateEmail = (email: string) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };
  const { mutate: checkExistEmail } = useCheckExistEmailMutation();

  const handleNextStep = () => {
    console.log(email);
    if (!email || !validateEmail(email)) {
      setError("Invalid email format");
      return;
    }

    checkExistEmail(
      { email: email },
      {
        onError: (err) => {
          //   console.log("Email check successful:", data);
        },
        onSuccess: (data) => {
          console.log("Email check successful, passs:", data);
          if (data.exists) {
            console.log("EXIST");
          }
          console.log("NEXT STEP");
        },
      }
    );
    setLoading(true);
    setError(null);
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-4 bg-gradient-to-r to-purple-200">
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
            Welcome to
            <span className="ml-1 font-semibold text-purple-600">
              Easy English
            </span>
          </Typography>

          <form className="mt-6 flex flex-col max-w-sm mx-auto gap-5 w-full">
            <div className="flex flex-col">
              <CTextField
                type="email"
                label="Email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {error && (
                <Typography color="error" variant="body2">
                  {error}
                </Typography>
              )}
            </div>
            <CButton
              fullWidth
              onClick={() => handleNextStep()}
              className="!bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white !py-3 !rounded-full"
            >
              Next
            </CButton>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
