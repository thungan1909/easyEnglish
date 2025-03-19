import { Typography } from "@mui/material";
import { FaSadCry } from "react-icons/fa";

const LoadingFailPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-8 text-red-600">
      <FaSadCry size={64} />
      <Typography variant="h6"> Failed to load lesson</Typography>
    </div>
  );
};

export default LoadingFailPage;
