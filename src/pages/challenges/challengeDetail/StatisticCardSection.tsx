import { ChallengeDTO } from "../../../types/dtos/challenge.dto";
import StatisticCard, { StatisticCardProps } from "../components/StatisticCard";
import { FaBook, FaHeadphones, FaPercent, FaTrophy } from "react-icons/fa";

const ChallengeStatisticSection = ({
  challenge,
}: {
  challenge: ChallengeDTO;
}) => {
  const listStatisCard: StatisticCardProps[] = [
    {
      icon: <FaBook size={24} />,
      description: "Total Participants",
      value: challenge?.participants.length || 0,
      mainColor: "blue",
    },
    {
      icon: <FaHeadphones size={24} />,
      description: "Total Submissions",
      value: challenge?.totalSubmission || 0,
      mainColor: "orange",
    },
    {
      icon: <FaTrophy size={24} />,
      description: "Avarage score",
      value: challenge?.averageScore || 0,
      mainColor: "green",
    },
    {
      icon: <FaPercent size={24} />,
      description: "Overall Accuracy",
      value: challenge?.averageAccuracy || 0,
      mainColor: "purple",
    },
  ];

  return (
    <div className="grid md:grid-cols-4 grid-cols-2 gap-4">
      {listStatisCard?.map((item, index) => (
        <StatisticCard key={index} {...item} />
      ))}
    </div>
  );
};

export default ChallengeStatisticSection;
