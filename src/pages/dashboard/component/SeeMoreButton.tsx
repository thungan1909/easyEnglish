import { useNavigate } from "react-router-dom";
import CButton from "../../../components/atoms/CButton/CButton";
import { ROUTES_CONSTANTS } from "../../../routers/constants";

const SeeMoreButton = () => {
  const navigate = useNavigate();

  return (
    <CButton
      className="!text-red-500"
      variant="text"
      size="large"
      aria-label="See more"
      onClick={() => navigate(ROUTES_CONSTANTS.LESSON.BASE)}
    >
      See more
    </CButton>
  );
};

export default SeeMoreButton;
