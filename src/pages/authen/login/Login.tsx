import { Button, Typography } from "@mui/material";
import loginImg from "../../../assets/login_img_2.png";
import CTextField from "../../../atoms/CTextField/CTextField";

const Login = () => {
  const handleSubmit = () => {
    console.log("Login attempt");
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
            Login
          </Typography>
          <Typography className="text-center">
            Welcome back to
            <span className="ml-1 font-semibold text-purple-600">
              Easy English
            </span>
          </Typography>

          <form
            className="mt-6 flex flex-col gap-5 max-w-sm mx-auto  w-full"
            id="login-form"
            onSubmit={handleSubmit}
          >
            <CTextField type="text" label="User name" placeholder="User name" />
            <CTextField
              type="password"
              label="Password"
              placeholder="Password"
            />
            <Button
              variant="contained"
              className="!bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white !py-3 !rounded-full"
              fullWidth
            >
              Log In
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
