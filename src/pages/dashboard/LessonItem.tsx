import { FaBook, FaPlay } from "react-icons/fa";
import { Lesson } from "./types";

interface LessonItemProps {
    lesson: Lesson;
}

const LessonItem = ({ lesson }: LessonItemProps) => {
    return (
        <div key={lesson.id} className="flex flex-col items-center bg-white p-3 rounded-lg shadow-md" >
            <img src={lesson.image} alt={lesson.title} className="w-32 h-32 rounded-lg object-cover" />
            <div className="flex flex-col w-full mt-2">
                <span className="text-sm font-semibold text-gray-900">{lesson.id}</span>
                <p className="text-sm text-gray-700 line-clamp-2">
                    {lesson.title}
                </p>
                {/* Stats */}
                <div className="flex text-xs text-gray-500 mt-4 space-x-2">
                    <FaBook />
                    <span>{lesson.provider}</span>
                </div>
            </div>
        </div>
    )
}

export default LessonItem;