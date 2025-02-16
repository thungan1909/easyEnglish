
import HeroSection from "./HeroSection";
import DashboardLayout from "../../layout/DashboardLayout";
import RecentLessons from "./RecentLesson";
import NewestLesson from "./NewestLesson";


const Dashboard = () => {
  return (
    <DashboardLayout>
      <div className="px-4">
        <HeroSection />
      </div>

      <div className="mt-32 space-y-8">
        <RecentLessons />
        <NewestLesson/>
      </div>
    </DashboardLayout>
  );
};
export default Dashboard;
