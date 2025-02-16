import { FaBook, FaPlay } from "react-icons/fa";
import { Lesson } from "./types";

interface LessonItemProps {
    lesson: Lesson;
}

const RecentLessonItem = ({ lesson }: LessonItemProps) => {
    return (
        <div key={lesson.id} className="flex items-center bg-white p-3 rounded-lg shadow-md" >
            {/* Image */}
            <img src={lesson.image} alt={lesson.title} className="w-16 h-16 rounded-lg cover-object mr-4" />
            <div className="flex flex-col flex-1">
                <span className="text-sm font-semibold text-gray-90">{lesson.id}</span>
                <p className="text-sm text-gray-700 truncate w-48">{lesson.title}</p>
                {/* Stats */}
                <div className="flex items-center text-xs text-gray-500 mt-1 space-x-2">
                    <FaPlay/>
                    <span>{lesson.listens}</span>
                    <FaBook/>
                    <span>{lesson.provider}</span>
                </div>

                <div className="w-48 bg-gray-200 rounded-full h-2.5 mt-2">
                    <div className="bg-green-500 h-2.5 rounded-full w-[80%]" style={{ width: `${lesson.progress}%` }}></div>
                </div>
            </div>
        </div>
    )
}

export default RecentLessonItem;