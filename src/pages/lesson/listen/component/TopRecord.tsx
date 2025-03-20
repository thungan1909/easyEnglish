import { exampleUserRanking } from "../../../dashboard/const";
import { Typography } from "@mui/material";
import { FaMedal, FaTrophy } from "react-icons/fa";
import SeeMoreButton from "../../../dashboard/component/SeeMoreButton";

const TopRecord = () => {
  return (
    <div className="bg-white shadow rounded-2xl p-4">
      <div className="flex justify-between items-center mb-4">
        <Typography variant="h6" className="flex items-center gap-2">
          <FaTrophy className="text-amber-300" />
          <span> Top Record</span>
        </Typography>
        <SeeMoreButton />
      </div>
      <div className="grid gap-3">
        {exampleUserRanking.map((user) => (
          <div
            key={user.id}
            className="flex items-center shadow rounded-2xl p-3 bg-purple-400 text-white space-x-3 hover:bg-purple-500 cursor-pointer transition duration-300"
          >
            <span>{user.ranking}.</span>
            <img
              src={user.avatar}
              alt={`${user.name}'s avatar`}
              className="w-8 h-8 rounded-full"
            />
            <span className="truncate min-w-0">{user.name}</span>

            <div className="flex space-x-2 items-center ml-auto">
              <span>{user.grades}</span>
              <FaMedal className="text-amber-300" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopRecord;
