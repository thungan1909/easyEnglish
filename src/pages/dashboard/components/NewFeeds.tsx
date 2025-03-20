import { exampleUserNewfeed } from "../const";
import SeeMoreButton from "./SeeMoreButton";

const NewFeeds = () => {
  return (
    <div className="bg-white shadow rounded-2xl p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">New Feeds</h2>
        <SeeMoreButton />
      </div>
      <div className="grid gap-3">
        {exampleUserNewfeed.map((user) => (
          <div
            key={user.id}
            className="flex items-center shadow rounded-2xl p-4 bg-purple-400 text-white space-x-3 hover:bg-purple-500 cursor-pointer transition duration-300"
          >
            <img
              src={user.avatar}
              alt={`${user.name}'s avatar`}
              className="w-8 h-8 rounded-full"
            />
            <div className="min-w-0">
              <div className="text-xs space-x-2 mb-1">
                <span className="font-semibold">{user.name}</span>
                <span>-</span>
                <span>
                  {new Intl.DateTimeFormat("en-US", {
                    hour: "2-digit",
                    minute: "2-digit",
                    hour12: true,
                  }).format(new Date(user.time))}
                </span>
              </div>

              <div className="space-x-1 text-sm">
                <span className="text-black">Start to learn</span>
                <span className="font-semibold">{user.lesson}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewFeeds;
