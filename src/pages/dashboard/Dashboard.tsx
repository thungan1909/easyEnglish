import { useAuthentication } from "../../hooks/auth.hook";
import HeroSection from "./leftsection/HeroSection";
import NewestLesson from "./leftsection/NewestLesson";
import RecentLessons from "./leftsection/RecentLesson";
import RecommendLesson from "./leftsection/RecommendLesson";
import MostListened from "./rightSection/MostListened";
import NewFeeds from "./rightSection/NewFeeds";
import RankingList from "./rightSection/RankingList";

const Dashboard = () => {
  const { isAuth } = useAuthentication();

  const leftSection = (
    <div className="space-y-8 p-4 md:col-span-3 w-full md:w-[640px]">
      <HeroSection />
      {isAuth && <RecentLessons />}
      <NewestLesson />
      <RecommendLesson />
    </div>
  );

  const rightSection = (
    <div className="space-y-8 p-4 md:ml-24 md:col-span-2 md:w-[420px]">
      <RankingList />
      <NewFeeds />
      <MostListened />
    </div>
  );

  return (
    <div className="md:flex md:justify-center top-24 grid grid-cols-1 mx-2 mt-24">
      {leftSection}
      {rightSection}
    </div>
  );
};

export default Dashboard;
