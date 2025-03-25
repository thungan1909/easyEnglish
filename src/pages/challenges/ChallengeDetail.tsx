import ChallengeBanner from "./components/ChallengeBanner";
import NoDataSection from "../common-pages/NoDataSection";
import exampleChallenge from "./constants";
import CBreadcrumbs from "../../components/atoms/CBreadcrumbs/CBreadcrumbs";
import { generateBreadcrumbs } from "../../utils/helpers/breadcrumbs";
import { useMediaQuery } from "@mui/material";
import StatisticCard, { StatisticCardProps } from "./components/StatisticCard";
import { FaCheckCircle } from "react-icons/fa";
import ChallengeParticipants from "./components/ChallengeParticipants";
import { useGetChallengeById } from "../../hooks/challenge/get-challenge.hook";
import { useParams } from "react-router-dom";
import ChallengePodcastList from "./components/ChallengePodcastList";

const ChallengeDetail = () => {
  const { id } = useParams();
  const { data: challenge } = useGetChallengeById(id ?? "");

  const isMd = useMediaQuery("(min-width: 768px)"); // Detect if screen is `md` size

  const participants = exampleChallenge.exUserParticipants;

  const listStatisCard: StatisticCardProps[] = [
    {
      icon: <FaCheckCircle size={isMd ? 32 : 12} />,
      description: "Number of Lessons",
      value: challenge?.lessons.length.toString() || "0",
      mainColor: "blue",
    },
    {
      icon: <FaCheckCircle size={isMd ? 32 : 12} />,
      description: "Listening time",
      value: "260:38:10s",
      mainColor: "orange",
    },
    {
      icon: <FaCheckCircle size={isMd ? 32 : 12} />,
      description: "Avarage score",
      value: challenge?.averageScore.toString() || "0",
      mainColor: "green",
    },
    {
      icon: <FaCheckCircle size={isMd ? 32 : 12} />,
      description: "Avarage Accuracy",
      value: challenge?.averageAccuracy.toString() || "0%",
      mainColor: "purple",
    },
  ];

  return (
    <div className="flex flex-col md:m-24 mx-4">
      <CBreadcrumbs
        menuItem={generateBreadcrumbs("challenge", {
          id: challenge?._id,
          title: challenge?.title,
        })}
      />
      {challenge ? (
        <div className="flex flex-col mt-8 gap-4">
          <ChallengeBanner challenge={challenge} />
          <div className="grid md:grid-cols-4 grid-cols-2 gap-4">
            {listStatisCard?.map((item, index) => (
              <StatisticCard key={index} {...item} />
            ))}
          </div>
          <ChallengePodcastList lessonList={challenge?.lessons} />
          <ChallengeParticipants participants={participants} />
        </div>
      ) : (
        <NoDataSection />
      )}
    </div>
  );
};

export default ChallengeDetail;
