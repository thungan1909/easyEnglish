import Navbar from "../layout/Navbar";
import Sidebard from "../layout/Sidebar";
import LessonList from "./LessonList";

const Dashboard = () => {
  return (
    <div className="flex">
      <Sidebard />
      <div className="ml-64 w-full">
        <Navbar />
        <div className="p-6 mt-16">
          <LessonList />
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
