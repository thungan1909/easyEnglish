import { useAuthentication } from "../../apis/api-hooks/auth.hook";
import HeroSection from "./leftsection/HeroSection";
import NewestLesson from "./leftsection/NewestLesson";
import RecentLessons from "./leftsection/RecentLesson";
import RecommendLesson from "./leftsection/RecommendLesson";
import MostListened from "./rightSection/MostListened";
import NewFeeds from "./rightSection/NewFeeds";
import RankingList from "./rightSection/RankingList";

const Dashboard = () => {
  const { isAuth } = useAuthentication();

  return (
    <div className="grid grid-cols-1 p-8 gap-8 md:grid-cols-6 md:px-16 md:gap-32">
      <div className="relative top-24 space-y-8 md:col-span-3 w-full md:w-[720px]">
        <HeroSection />
        {isAuth ? <RecentLessons /> : null}
        <NewestLesson />
        <RecommendLesson />
      </div>

      <div className="relative top-24 space-y-8 md:ml-24 md:col-span-2 md:w-[360px]">
        <RankingList />
        <NewFeeds />
        <MostListened />
      </div>
    </div>
  );
};

export default Dashboard;
