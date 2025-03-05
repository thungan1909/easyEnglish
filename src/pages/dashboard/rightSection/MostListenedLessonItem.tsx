import { FaBook, FaPlay } from "react-icons/fa";
import { Lesson } from "../types";

interface LessonItemProps {
  lesson: Lesson;
}

const MostListenedLessonItem = ({ lesson }: LessonItemProps) => {
  return (
    <div
      key={lesson.id}
      className="bg-purple-400 flex items-center p-4 rounded-lg shadow-md space-x-3 
      hover:bg-purple-500 cursor-pointer transition duration-300"
    >
      <img
        src={lesson.image}
        alt={lesson.title}
        className="w-16 h-16 rounded-lg object-cover"
      />
      <div className="flex flex-col flex-1 space-y-1">
        <span className="text-xs text-black">{lesson.id}</span>
        <p className="text-sm text-white line-clamp-2">{lesson.title}</p>
        <div className="flex items-center text-xs text-white mt-1 space-x-2">
          <FaPlay />
          <span>{lesson.listens}</span>
          <FaBook />
          <span>{lesson.provider}</span>
        </div>
      </div>
    </div>
  );
};

export default MostListenedLessonItem;
