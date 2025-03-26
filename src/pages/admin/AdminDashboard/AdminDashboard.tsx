import { Typography } from "@mui/material";
import AdminStatisticCard from "./components/AdminStatisticCard";
import { BarChart } from "@mui/x-charts/BarChart";
import { statisticCardList } from "./constants";
import { LineChart, PieChart } from "@mui/x-charts";

const AdminDashboard = () => {
  return (
    <div className="grid grid-cols-1 gap-6 m-24">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 ">
        {statisticCardList?.map((item, index) => (
          <AdminStatisticCard key={index} statisticCard={item} />
        ))}
      </div>
      <div className="bg-white shadow-lg rounded-lg p-4">
        <Typography variant="h6" className="mb-4">
          User Engagement Over Weeks
        </Typography>
        <BarChart
          series={[
            { data: [35, 44, 24, 34], label: "Lessons Completed" },
            { data: [51, 6, 49, 30], label: "Challenges Attempted" },
            { data: [15, 25, 30, 50], label: "Active Users" },
            { data: [60, 50, 15, 25], label: "New Sign-ups" },
          ]}
          height={290}
          xAxis={[
            {
              data: ["Week 1", "Week 2", "Week 3", "Week 4"],
              scaleType: "band",
            },
          ]}
          margin={{ top: 40, bottom: 30, left: 40, right: 10 }}
        />
      </div>

      <div className="bg-white shadow-lg rounded-lg p-4">
        <Typography variant="h6" className="mb-4">
          Daily Active Users (DAU)
        </Typography>
        <LineChart
          series={[{ data: [120, 150, 180, 200, 170, 190, 210], label: "DAU" }]}
          height={290}
          xAxis={[
            {
              data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
              scaleType: "point",
            },
          ]}
          margin={{ top: 40, bottom: 30, left: 40, right: 10 }}
        />
      </div>

      <div className="bg-white shadow-lg rounded-lg p-4">
        <Typography variant="h6" className="mb-4">
          Lesson Completion Rate
        </Typography>
        <PieChart
          series={[
            {
              data: [
                { value: 60, label: "Completed" },
                { value: 25, label: "In Progress" },
                { value: 15, label: "Not Started" },
              ],
            },
          ]}
          height={290}
        />
      </div>
    </div>
  );
};

export default AdminDashboard;
