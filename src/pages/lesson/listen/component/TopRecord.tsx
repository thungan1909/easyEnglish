import { Avatar, Typography } from "@mui/material";
import { FaMedal, FaTrophy } from "react-icons/fa";
import SeeMoreButton from "../../../dashboard/components/SeeMoreButton";
import { getFirstCharAvatar } from "../../../../utils/helpers/getFirstCharAvatar";
import { TopScoresResponse } from "../../../../types/dtos/submission.dto";

const TopRecord = ({ topScores }: TopScoresResponse) => {
  const sortedScores = [...topScores].sort((a, b) => b.score - a.score);

  return (
    <div className="bg-gray-50 shadow rounded-2xl p-4">
      <div className="flex justify-between items-center mb-4">
        <Typography variant="h6" className="flex items-center gap-2">
          <FaTrophy className="text-amber-300" />
          <span> Top Record</span>
        </Typography>
        <SeeMoreButton />
      </div>
      <div className="grid gap-3">
        {sortedScores.map((score, index) => {
          return (
            <div
              key={score.user._id}
              className="flex items-center shadow rounded-2xl p-3 space-x-3 text-black bg-purple-200  cursor-pointer transition duration-300"
            >
              <span>{index + 1}.</span>
              <Avatar
                alt="user-avatar"
                src={score.user.avatarUrl}
                sx={{ width: 48, height: 48 }}
              >
                {!score.user.avatarUrl &&
                  getFirstCharAvatar(score.user.username)}
              </Avatar>
              <span className="truncate min-w-0">
                {score.user.username || score.user.username}
              </span>
              <div className="flex  items-center ml-auto gap-2">
                <Typography variant="body2">{score.score}</Typography>
                <Typography className="text-green-500" variant="body2">
                  ({score.accuracy} %)
                </Typography>
                <FaMedal className="text-amber-300" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TopRecord;
