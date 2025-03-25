import { Avatar, Typography } from "@mui/material";
import { UserDTO } from "../../../types/dtos/user.dto";
import { mockPosts } from "../constants";
import CButton from "../../../components/atoms/CButton/CButton";
import { FaComment, FaHeart, FaShare } from "react-icons/fa";
export interface FeedColumnProps {
  currentUser?: UserDTO;
}
const FeedColumn = ({ currentUser }: FeedColumnProps) => {
  return (
    <div className="col-span-6 flex flex-col gap-4">
      <div className="bg-white shadow p-4 rounded-lg flex items-center gap-2">
        <Avatar
          alt="user-avatar"
          src={
            typeof currentUser?.avatarUrl === "string"
              ? currentUser?.avatarUrl
              : ""
          }
          sx={{ width: 48, height: 48 }}
        />
        <input
          type="text"
          placeholder="Share your thought..."
          className="flex-1 px-4 py-2 rounded-full border border-purple-400 focus:outline-none  focus:ring-purple-400"
        />
      </div>

      {mockPosts.map((post) => (
        <div key={post.id} className="bg-white shadow p-4 rounded-lg">
          <div className="flex items-center gap-4">
            <Avatar
              alt={post.userName}
              src="https://placehold.co/40x40"
              sx={{ width: 48, height: 48 }}
            />
            <div>
              <Typography variant="body1">{post.userName}</Typography>
              <Typography className="text-gray-500" variant="caption">
                {post.time}
              </Typography>
            </div>
          </div>
          <div className="mt-2">
            <Typography>{post.content}</Typography>
          </div>
          {/* Reactions / Comments / Etc. */}
          <div className="mt-2 flex justify-around text-gray-500">
            <CButton className="gap-2" variant="text">
              <FaHeart />0 Likes
            </CButton>
            <CButton className="gap-2" variant="text">
              <FaComment />0 Comments
            </CButton>
            <CButton className="gap-2" variant="text">
              <FaShare />0 Share
            </CButton>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeedColumn;
