import { FaBook, FaPlay } from "react-icons/fa";
import { Lesson } from "../types";
import { Typography } from "@mui/material";

interface LessonItemProps {
  lesson: Lesson;
}

const RecentLessonItem = ({ lesson }: LessonItemProps) => {
  return (
    <div
      key={lesson.id}
      className="flex items-center bg-gradient-to-r from-indigo-100 bg-purple-200 p-2 rounded-2xl shadow hover:bg-purple-400 cursor-pointer"
    >
      <img
        src={lesson.image}
        alt={lesson.title}
        className="w-16 h-16 rounded-2xl object-cover mr-3"
      />
      <div className="flex flex-col flex-1">
        <Typography
          className="text-sm max-w-[80%] line-clamp-2"
          variant="body2"
        >
          {lesson.id} - {lesson.title}
        </Typography>

        {/* Stats */}
        <div className="flex items-center text-xs text-gray-500 mt-1 gap-2">
          <FaPlay />
          <Typography variant="caption" className="line-clamp-1">
            {lesson.listens}
          </Typography>
          <FaBook />
          <Typography variant="caption" className="line-clamp-1">
            {lesson.provider}
          </Typography>
        </div>

        <div className="md:w-48 max-w-[80%] bg-gray-500 rounded-full h-2.5 mt-2">
          <div
            className="bg-green-400 h-2.5 rounded-full"
            style={{ width: `${lesson.progress}%` }}
          />
        </div>
      </div>
    </div>
  );
};

export default RecentLessonItem;
