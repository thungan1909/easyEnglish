import { Avatar, Typography } from "@mui/material";
import { FaMedal, FaTrophy } from "react-icons/fa";
import SeeMoreButton from "../../../dashboard/components/SeeMoreButton";
import { useEffect, useState } from "react";
import { useGetUsersByIds } from "../../../../hooks/user/user.hook";
import { UserDTO } from "../../../../types/dtos/user.dto";
import { getFirstCharAvatar } from "../../../../utils/helpers/getFirstCharAvatar";

export interface TopScore {
  user: string; // User ID
  score: number;
  accuracy: number;
  submittedAt: string;
}

export interface TopRecordProps {
  topScores?: TopScore[];
}

const TopRecord = ({ topScores }: TopRecordProps) => {
  const { mutate: fetchUsers, data, error } = useGetUsersByIds();
  const [userData, setUserData] = useState<{
    users: UserDTO[];
    topScores?: TopScore[];
  } | null>(null);

  useEffect(() => {
    if (topScores?.length) {
      const userIds = topScores.map((score) => score.user); // Extract user IDs
      fetchUsers(userIds); // Fetch user data
    }
  }, [topScores, fetchUsers]);

  useEffect(() => {
    if (data) {
      setUserData({
        users: data, // API response
        topScores, // Include topScores
      });
    }
  }, [data, topScores]);

  if (error) {
    return <p>Error loading user data</p>;
  }

  const sortedTopScores = [...(topScores || [])]
    .sort((a, b) => b.score - a.score)
    .slice(0, 4);

  console.log(sortedTopScores);
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
        {sortedTopScores.map((score, index) => {
          const user = userData?.users?.find((u) => u._id === score.user);
          if (!user) return null;

          return (
            <div
              key={user._id}
              className="flex items-center shadow rounded-2xl p-3 space-x-3 text-black bg-purple-200  cursor-pointer transition duration-300"
            >
              <span>{index + 1}.</span> {/* Show ranking 1, 2, 3, 4 */}
              <Avatar
                alt="user-avatar"
                src={user.avatarUrl}
                sx={{ width: 48, height: 48 }}
              >
                {!user.avatarUrl && getFirstCharAvatar(user.username)}
              </Avatar>
              <span className="truncate min-w-0">
                {user.username || user.username}
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
