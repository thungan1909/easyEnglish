import { Button, TextField, Typography } from "@mui/material";
import loginImg from "../../../assets/login_image.jpg";
const Login = () => {
  return (
    <div className="flex items-center justify-center min-h-screen p-4 space-x-8">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden flex w-full max-w-4xl">
        {/* Left Side - Image */}
        <div className="md:w-1/2 hidden md:block relative">
          <img
            src={loginImg}
            alt="Image of a user logging in"
            className="object-cover w-full h-full"
          />
        </div>

        {/* Right Side - Login Form */}
        <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
          <div className="text-center text-2xl">Login</div>

          <Typography className="text-center">
            Welcome back to <strong>Easy English</strong>
          </Typography>

          <form className="mt-6 flex flex-col gap-4" id="login-form">
            <TextField
              label="Username"
              type="text"
              variant="outlined"
              fullWidth
            />
            <TextField
              type="password"
              label="Password"
              variant="outlined"
              fullWidth
            />
            <Button
              variant="contained"
              className="bg-teal-400  text-white"
              fullWidth
            >
              Sign In
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
