import { useParams } from "react-router-dom";
import ChallengeBanner from "./components/ChallengeBanner";
import { useGetChallengeById } from "../../hooks/challenge/get-challenge.hook";
import NoDataSection from "../lesson/NoDataSection";
import exampleChallenge from "./constants";
import CBreadcrumbs from "../../components/atoms/CBreadcrumbs/CBreadcrumbs";
import { generateBreadcrumbs } from "../../utils/helpers/breadcrumbs";
import { Chip, Typography } from "@mui/material";
import StatisticCard, { StatisticCardProps } from "./components/StatisticCard";
import { FaCheckCircle } from "react-icons/fa";

const ChallengeDetail = () => {
  // const { id } = useParams();
  // const { data: challenge } = useGetChallengeById(id ?? "");

  const challenge = exampleChallenge[0];
  const {
    _id,
    title,
    description,
    imageSrc,
    startTime,
    endTime,
    timeLeft,
    participants,
    podcastCount,
    coin,
    fee,
  } = challenge;

  const listStatisCard: StatisticCardProps[] = [
    {
      icon: <FaCheckCircle size={32} />,
      description: "Completed lessons",
      value: "168",
      mainColor: "blue",
    },
    {
      icon: <FaCheckCircle size={32} />,
      description: "Listening time",
      value: "260:38:10s",
      mainColor: "orange",
    },
    {
      icon: <FaCheckCircle size={32} />,
      description: "Total score",
      value: "1.554,56",
      mainColor: "green",
    },
    {
      icon: <FaCheckCircle size={32} />,
      description: "Accuracy",
      value: "90,94%",
      mainColor: "purple",
    },
  ];

  return (
    <div className="flex flex-col md:m-24">
      <CBreadcrumbs
        menuItem={generateBreadcrumbs("challenge", {
          id: _id,
          title,
        })}
      />
      {challenge ? (
        <div className="flex flex-col mt-8 gap-6">
          <ChallengeBanner challenge={challenge} />
          <div className="flex gap-4 justify-evenly">
            {listStatisCard?.map((item, index) => (
              <StatisticCard key={index} {...item} />
            ))}
          </div>
        </div>
      ) : (
        <NoDataSection />
      )}
    </div>
  );
};

export default ChallengeDetail;
