import { Typography } from "@mui/material";
import SeeMoreButton from "../../../../components/molecules/CSeeMoreButton/CSeeMoreButton";
import NoDataSection from "../../../common-pages/NoDataSection";
import { useNavigate } from "react-router-dom";
import { ROUTES_CONSTANTS } from "../../../../routers/constants";
import { ChallengeDTO } from "../../../../types/dtos/challenge.dto";
import ChallengeDashboardItem from "./ChallengeDashboardItem";

export interface ChallengeLayoutProps {
  title?: string;
  challenges: ChallengeDTO[];
}

const ChallengeLayout = ({ title, challenges }: ChallengeLayoutProps) => {
  const navigate = useNavigate();
  const gridClasses = "grid grid-cols-2 gap-4";

  return (
    <div className="bg-white shadow rounded-2xl p-4">
      {title && (
        <div className="flex justify-between items-center mb-4">
          <Typography variant="h6">{title}</Typography>
          <SeeMoreButton
            onClick={() => navigate(ROUTES_CONSTANTS.CHALLENGE.BASE)}
          />
        </div>
      )}

      {challenges.length > 0 ? (
        <div className={gridClasses}>
          {challenges.map((challenge) => (
            <ChallengeDashboardItem challenge={challenge} key={challenge._id} />
          ))}
        </div>
      ) : (
        <NoDataSection />
      )}
    </div>
  );
};

export default ChallengeLayout;
