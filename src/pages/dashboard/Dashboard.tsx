
import HeroSection from "./leftsection/HeroSection";
import DashboardLayout from "../../layout/DashboardLayout";
import RecentLessons from './leftsection/RecentLesson' 
import NewestLesson from "./leftsection/NewestLesson";
import RecommendLesson from "./leftsection/RecommendLesson";
import RankingList from './rightSection/RankingList'
import NewFeeds from './rightSection/NewFeeds'
import MostListened from "./rightSection/MostListened";


const Dashboard = () => {
  return (
    <DashboardLayout>
      <div className="grid grid-cols-1 md:grid-cols-6 md:gap-48 xl:gap-48">
        <div className="relative top-24 space-y-8 left-12 md:col-span-3">
          <HeroSection />
          <RecentLessons />
          <NewestLesson />
          <RecommendLesson />
        </div>
        <div className="relative top-24 space-y-8 left-12 md:col-span-2">
          <RankingList />
          <NewFeeds/>
          <MostListened/>
        </div>
      </div>
    </DashboardLayout>
  );
};
export default Dashboard;
