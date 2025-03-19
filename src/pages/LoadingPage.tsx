import { Typography } from "@mui/material";
import { FaSpinner } from "react-icons/fa";

const LoadingPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-8 text-gray-500">
      <FaSpinner size={64} />
      <Typography variant="h6" className="animate-pulse">
        Loading...
      </Typography>
    </div>
  );
};

export default LoadingPage;
