import ChallengeBanner from "./components/ChallengeBanner";
import NoDataSection from "../NoDataSection";
import exampleChallenge from "./constants";
import CBreadcrumbs from "../../components/atoms/CBreadcrumbs/CBreadcrumbs";
import { generateBreadcrumbs } from "../../utils/helpers/breadcrumbs";
import { useMediaQuery } from "@mui/material";
import StatisticCard, { StatisticCardProps } from "./components/StatisticCard";
import { FaCheckCircle } from "react-icons/fa";
import ChallengePodcastList from "./components/ChallengePodcastList";
import ChallengeParticipants from "./components/ChallengeParticipants";

const ChallengeDetail = () => {
  // const { id } = useParams();
  // const { data: challenge } = useGetChallengeById(id ?? "");
  const isMd = useMediaQuery("(min-width: 768px)"); // Detect if screen is `md` size

  const challenge = exampleChallenge.exampleChallenge[0];
  const participants = exampleChallenge.exUserParticipants;

  const {
    _id,
    title,
    description,
    imageSrc,
    startTime,
    endTime,
    timeLeft,
    // participants,
    podcastCount,
    coin,
    fee,
    lessonList,
  } = challenge;

  const listStatisCard: StatisticCardProps[] = [
    {
      icon: <FaCheckCircle size={isMd ? 32 : 12} />,
      description: "Completed lessons",
      value: "168",
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
      description: "Total score",
      value: "1.554,56",
      mainColor: "green",
    },
    {
      icon: <FaCheckCircle size={isMd ? 32 : 12} />,
      description: "Accuracy",
      value: "90,94%",
      mainColor: "purple",
    },
  ];

  return (
    <div className="flex flex-col md:m-24 mx-4">
      <CBreadcrumbs
        menuItem={generateBreadcrumbs("challenge", {
          id: _id,
          title,
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
          <ChallengePodcastList lessonList={lessonList} />
          <ChallengeParticipants participants={participants} />
        </div>
      ) : (
        <NoDataSection />
      )}
    </div>
  );
};

export default ChallengeDetail;
