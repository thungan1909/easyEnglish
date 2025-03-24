import { FaRankingStar } from "react-icons/fa6";
import SeeMoreButton from "./SeeMoreButton";
import { useGetTopWeekly } from "../../../hooks/leaderboard/get-top-weekly.hook";
import { Avatar } from "@mui/material";
import { getFirstCharAvatar } from "../../../utils/helpers/getFirstCharAvatar";
import NoDataSection from "../../NoDataSection";

const RankingList = () => {
  const { data: topWeekly = [] } = useGetTopWeekly();

  const sortedTopWeekly = [...topWeekly].sort(
    (a, b) => b.totalWeeklyScore - a.totalWeeklyScore
  );

  return (
    <div className="bg-white shadow rounded-2xl p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Weekly Ranking List</h2>
        <SeeMoreButton />
      </div>
      <div className="grid gap-3">
        {sortedTopWeekly.length > 0 ? (
          sortedTopWeekly.map((user, index) => (
            <div
              key={index}
              className="flex items-center shadow rounded-2xl p-4 bg-purple-400 text-white space-x-3 hover:bg-purple-500 cursor-pointer transition duration-300"
            >
              <span>{index + 1}.</span>
              <Avatar
                alt="user-avatar"
                src={user.avatarUrl}
                sx={{ width: 48, height: 48 }}
              >
                {!user.avatarUrl && getFirstCharAvatar(user.username)}
              </Avatar>
              <span className="truncate min-w-0">{user.username}</span>

              <div className="flex space-x-2 items-center ml-auto">
                <span className="text-sm">{user.totalWeeklyScore}</span>
                <FaRankingStar />
              </div>
            </div>
          ))
        ) : (
          <NoDataSection />
        )}
      </div>
    </div>
  );
};

export default RankingList;
