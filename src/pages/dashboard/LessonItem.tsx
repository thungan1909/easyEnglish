import { FaBook } from "react-icons/fa";
import { Lesson } from "./types";

interface LessonItemProps {
    lesson: Lesson;
}

const LessonItem = ({ lesson }: LessonItemProps) => {
    return (
        <div key={lesson.id} className="bg-gradient-to-r from-indigo-100 to bg-purple-200 flex flex-col items-center p-4 rounded-lg shadow-md" >
            <img src={lesson.image} alt={lesson.title} className="w-32 h-32 rounded-lg object-cover" />
            <div className="flex flex-col w-full mt-2">
                <span className="text-sm font-bold text-gray-900">{lesson.id}</span>
                <p className="text-sm text-gray-700 line-clamp-2">
                    {lesson.title}
                </p>
                <div className="flex text-xs text-gray-500 mt-2 space-x-2">
                    <FaBook />
                    <span>{lesson.provider}</span>
                </div>
            </div>
        </div>
    )
}

export default LessonItem;