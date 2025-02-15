import { exampleLessons } from "./const";
import LessonItem from "./LessonItem";

const LessonList = () => {
    return (
        <div className="mt-6">
            <h2 className="text-2xl font-semibold mb-4">Available Lessons</h2>
            <div className="grid grid-cols-3 gap-4">
                {exampleLessons.map((lesson) => (
                    <LessonItem key={lesson.id} lesson={lesson}/>
                ))}
            </div>
        </div>
    )
}

export default LessonList;