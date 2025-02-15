import { FaPlay } from "react-icons/fa";
import { Lesson } from "./types";

interface LessonItemProps {
    lesson: Lesson;
  }

const LessonItem= ({lesson} : LessonItemProps) => {
    return(
        <div className="bg-gray-100 p-4 rounded-lg shadow-md flex flex-col items-center">
        <h3 className="text-lg font-semibold">{lesson.title}</h3>
        <p className="text-gray-600">{lesson.description}</p>
        <button className="mt-3 bg-blue-500 px-4 py-2 rounded flex items-center space-x-2">
            <FaPlay/>
            <span>Start</span>
        </button>
        </div>
    )
}

export default LessonItem;