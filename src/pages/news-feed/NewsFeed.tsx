import { Avatar } from "@mui/material";
import UserBasicInfoCard from "./UserBasicInfoCard";
import { useGetCurrentUser } from "../../hooks/user/user.hook";
import CTextField from "../../components/atoms/CTextField/CTextField";
import LessonLayout from "../dashboard/components/LessonLayout";
import { useGetLessonList } from "../../hooks/lesson/get-lesson.hook";
import { mockPosts, mockRecommendations } from "./constants";

// const NewsFeed = () => {
//   const { data: currentUser } = useGetCurrentUser();
//   const { data: lessonList = [] } = useGetLessonList({});

//   return (
//     <div className="grid grid-cols-3 gap-6 my-24 md:m-24">
//       <div className="col-span-1 flex flex-col gap-6">
//         <UserBasicInfoCard currentUser={currentUser} />
//         <div className="col-span-1 flex flex-col gap-6">
//           <Avatar
//             alt="user-avatar"
//             src={
//               typeof currentUser?.avatarUrl === "string"
//                 ? currentUser?.avatarUrl
//                 : ""
//             }
//             sx={{ width: 36, height: 35 }}
//           />
//           <input
//             type="text"
//             placeholder="Search something..."
//             className="w-full p-2 rounded-full text-sm outline-none ring-1 ring-gray-300 focus:ring-2 focus:ring-purple-400"
//           />
//         </div>
//       </div>

//       <div className="col-span-2 flex flex-col gap-6">
//         <LessonLayout
//           title="Recommended for You"
//           lessons={lessonList}
//           variant="square"
//         />
//       </div>
//     </div>
//   );
// };

// export default NewsFeed;

const NewsFeedLikeScreenshot = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Grid container with 3 columns */}
      <div className="grid grid-cols-12 gap-6">
        {/* Left Column */}
        <div className="col-span-3 flex flex-col gap-4">
          {/* User info card */}
          <div className="bg-white shadow p-4 rounded">
            <div className="flex items-center gap-4">
              <Avatar
                alt="User Avatar"
                src="https://placehold.co/100x100"
                sx={{ width: 56, height: 56 }}
              />
              <div>
                <h2 className="font-semibold text-lg">Đoàn Thu Ngân</h2>
                <p className="text-sm text-gray-500">@thungan</p>
              </div>
            </div>
            <div className="mt-4 flex justify-around text-center">
              <div>
                <p className="text-xl font-semibold">28</p>
                <p className="text-sm text-gray-500">Podcasts</p>
              </div>
              <div>
                <p className="text-xl font-semibold">1887</p>
                <p className="text-sm text-gray-500">Analytics</p>
              </div>
              <div>
                <p className="text-xl font-semibold">24</p>
                <p className="text-sm text-gray-500">Badges</p>
              </div>
            </div>
          </div>
        </div>

        {/* Middle Column (Feed) */}
        <div className="col-span-6 flex flex-col gap-4">
          {/* Search Bar */}
          <div className="bg-white shadow p-4 rounded flex items-center gap-2">
            <Avatar
              alt="User Avatar"
              src="https://placehold.co/40x40"
              sx={{ width: 40, height: 40 }}
            />
            <input
              type="text"
              placeholder="Search something..."
              className="flex-1 px-4 py-2 border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
          </div>

          {/* Posts */}
          {mockPosts.map((post) => (
            <div key={post.id} className="bg-white shadow p-4 rounded">
              <div className="flex items-center gap-4">
                <Avatar
                  alt={post.userName}
                  src="https://placehold.co/40x40"
                  sx={{ width: 40, height: 40 }}
                />
                <div>
                  <h3 className="font-semibold">{post.userName}</h3>
                  <p className="text-sm text-gray-500">{post.time}</p>
                </div>
              </div>
              <div className="mt-2">
                <p>{post.content}</p>
              </div>
              {/* Reactions / Comments / Etc. */}
              <div className="mt-2 flex gap-4 text-sm text-gray-500">
                <button>Likes</button>
                <button>Comments</button>
                <button>Share</button>
              </div>
            </div>
          ))}
        </div>

        {/* Right Column (Recommendations) */}
        <div className="col-span-3 flex flex-col gap-4">
          <div className="bg-white shadow p-4 rounded">
            <h3 className="text-lg font-semibold mb-2">Recommended for you</h3>
            <div className="flex flex-col gap-2">
              {mockRecommendations.map((item) => (
                <div
                  key={item.id}
                  className="text-sm hover:underline cursor-pointer"
                >
                  {item.title}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsFeedLikeScreenshot;
