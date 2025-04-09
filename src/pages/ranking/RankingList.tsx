import { Avatar } from "@mui/material";
import { useGetTopWeekly } from "../../hooks/leaderboard/get-top-weekly.hook";
import { getFirstCharAvatar } from "../../utils/helpers/getFirstCharAvatar";
import { FaRankingStar } from "react-icons/fa6";
import NoDataSection from "../common-pages/NoDataSection";
import { FaTrophy } from "react-icons/fa";

const RankingList = () => {
  const { data: topWeekly = [] } = useGetTopWeekly();

  const sortedTopWeekly = [...topWeekly].sort(
    (a, b) => b.totalWeeklyScore - a.totalWeeklyScore
  );

  return (
    <div className="bg-white shadow rounded-2xl p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Weekly Ranking List</h2>
      </div>
      {/* Top 3 */}
      <div className="flex flex-col items-center relative mb-16">
        {sortedTopWeekly.length > 0 && (
          <div className="flex flex-col items-center justify-center">
            <Avatar
              alt="user-avatar"
              src={sortedTopWeekly[0].avatarUrl}
              sx={{ width: 96, height: 96 }}
              className="border-amber-400 border-2"
            >
              {!sortedTopWeekly[0].avatarUrl &&
                getFirstCharAvatar(sortedTopWeekly[0].username)}
            </Avatar>
            <span className="truncate min-w-0">
              {sortedTopWeekly[0].username}
            </span>
            <div className="flex items-center justify-center gap-2">
              <span className="text-sm">
                {sortedTopWeekly[0].totalWeeklyScore}
              </span>
              <FaTrophy className="text-amber-400" />
            </div>
          </div>
        )}

        {sortedTopWeekly.length > 1 && (
          <div className="flex gap-32 absolute top-16">
            {sortedTopWeekly.slice(1, 3).map((user, index) => (
              <div key={index} className="flex flex-col items-center">
                <Avatar
                  alt="user-avatar"
                  src={user.avatarUrl}
                  sx={{ width: 64, height: 64 }}
                >
                  {!user.avatarUrl && getFirstCharAvatar(user.username)}
                </Avatar>
                <span className="truncate min-w-0">{user.username}</span>
                <div className="flex items-center gap-2">
                  <span className="text-sm">{user.totalWeeklyScore}</span>
                  <FaTrophy className="text-amber-400" />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="grid gap-3 mt-6">
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
