
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
      <div className="grid grid-cols-1 p-8 gap-8 md:grid-cols-6 md:px-16 md:gap-32">
        <div className="relative top-24 space-y-8 md:col-span-3 w-full md:w-[720px]">
          <HeroSection />
          <RecentLessons />
          <NewestLesson />
          <RecommendLesson />
        </div>
        <div className="relative top-24 space-y-8 md:ml-24 md:col-span-2 md:w-[360px]">
          <RankingList />
          <NewFeeds/>
          <MostListened/>
        </div>
      </div>
    </DashboardLayout>
  );
};
export default Dashboard;
