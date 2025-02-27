import { useAuthentication } from "../apis/hooks/auth.hook";
import HeroSection from "../pages/dashboard/leftsection/HeroSection";
import NewestLesson from "../pages/dashboard/leftsection/NewestLesson";
import RecentLessons from "../pages/dashboard/leftsection/RecentLesson";
import RecommendLesson from "../pages/dashboard/leftsection/RecommendLesson";
import MostListened from "../pages/dashboard/rightSection/MostListened";
import NewFeeds from "../pages/dashboard/rightSection/NewFeeds";
import RankingList from "../pages/dashboard/rightSection/RankingList";

const DashboardLayout = () => {
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
export default DashboardLayout;
