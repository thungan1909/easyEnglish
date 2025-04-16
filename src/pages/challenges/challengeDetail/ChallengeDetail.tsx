import ChallengeBanner from "../components/ChallengeBanner";
import NoDataSection from "../../common-pages/NoDataSection";
import CBreadcrumbs from "../../../components/atoms/CBreadcrumbs/CBreadcrumbs";
import ChallengeParticipants from "../components/ChallengeParticipants";
import { useGetChallengeById } from "../../../hooks/challenge/get-challenge.hook";
import { useParams } from "react-router-dom";
import ChallengePodcastList from "../components/ChallengePodcastList";
import ChallengeStatisticSection from "./StatisticCardSection";
import { generateBreadcrumbs } from "../../../helpers/generateBreadcrumbs";

const ChallengeDetail = () => {
  const { id } = useParams();
  const { data: challenge } = useGetChallengeById(id ?? "");

  return (
    <div className="flex flex-col">
      <CBreadcrumbs
        menuItem={generateBreadcrumbs("challenge", {
          id: challenge?._id,
          title: challenge?.title,
        })}
      />
      {challenge ? (
        <div className="flex flex-col mt-8 gap-4">
          <ChallengeBanner challenge={challenge} />
          <ChallengeStatisticSection challenge={challenge} />
          <ChallengePodcastList lessonList={challenge.lessons} />
          <ChallengeParticipants participants={challenge.participants} />
        </div>
      ) : (
        <NoDataSection />
      )}
    </div>
  );
};

export default ChallengeDetail;
