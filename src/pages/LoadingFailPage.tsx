import { Typography, Button } from "@mui/material";
import { FaSadCry } from "react-icons/fa";

const LoadingFailPage = ({ onRetry }: { onRetry?: () => void }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-6 text-red-600 text-center p-4">
      <FaSadCry size={64} aria-label="Sad emoji" />
      <Typography variant="h4" className="font-semibold">
        Oops! Failed to load data
      </Typography>
      <Typography variant="body1" className="text-gray-500">
        Please check your internet connection and try again.
      </Typography>
      {onRetry && (
        <Button variant="contained" color="primary" onClick={onRetry}>
          Retry
        </Button>
      )}
    </div>
  );
};

export default LoadingFailPage;
