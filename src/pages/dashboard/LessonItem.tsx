import { FaBook } from "react-icons/fa";
import { Lesson } from "./types";

interface LessonItemProps {
  lesson: Lesson;
}

const LessonItem = ({ lesson }: LessonItemProps) => {
  return (
    <div
      key={lesson.id}
      aria-label={lesson.title}
      className="bg-gradient-to-r from-indigo-100 bg-purple-200 flex flex-col items-center p-3 rounded-lg shadow-md cursor-pointer hover:bg-purple-400 "
    >
      <img
        src={lesson.image}
        alt={lesson.title}
        loading="lazy"
        className="w-32 h-32 rounded-lg object-cover"
      />
      <div className="flex flex-col w-full mt-2 text-center items-center">
        <p className="text-sm font-bold text-gray-900">{lesson.title}</p>
        <div className="flex text-xs text-gray-500 mt-2 space-x-1 items-center">
          <FaBook aria-hidden="true" />
          <span>{lesson.provider}</span>
        </div>
      </div>
    </div>
  );
};

export default LessonItem;
