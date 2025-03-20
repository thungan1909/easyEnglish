import { exampleUserRanking } from "../const";
import { FaRankingStar } from "react-icons/fa6";
import SeeMoreButton from "./SeeMoreButton";

const RankingList = () => {
  return (
    <div className="bg-white shadow rounded-2xl p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Weekly Ranking List</h2>
        <SeeMoreButton />
      </div>
      <div className="grid gap-3">
        {exampleUserRanking.map((user) => (
          <div
            key={user.id}
            className="flex items-center shadow rounded-2xl p-4 bg-purple-400 text-white space-x-3 hover:bg-purple-500 cursor-pointer transition duration-300"
          >
            <span>{user.ranking}.</span>
            <img
              src={user.avatar}
              alt={`${user.name}'s avatar`}
              className="w-8 h-8 rounded-full"
            />
            <span className="truncate min-w-0">{user.name}</span>

            <div className="flex space-x-2 items-center ml-auto">
              <span className="text-sm">{user.grades}</span>
              <FaRankingStar />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RankingList;
