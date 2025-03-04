import { useNavigate } from "react-router-dom";
import CButton from "../components/atoms/CButton/CButton";
import { Typography } from "@mui/material";
import { ROUTES_CONSTANTS } from "../routers/constants";

const PageNotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-8">
      <Typography variant="h3">Oops! Page not found.</Typography>
      <Typography>
        The page you're looking for doesn't exist or has been moved.
      </Typography>
      <CButton
        size="large"
        onClick={() => navigate(ROUTES_CONSTANTS.DASHBOARD)}
        isRounded
      >
        Go home
      </CButton>
    </div>
  );
};

export default PageNotFound;
