import { exampleLessons } from "./const";
import LessonItem from "./LessonItem";

const NewestLesson = () => {
    return (
        <div className="bg-white shadow-xl rounded-lg p-4 relative w-full md:w-[480px] lg:w-[600px] xl:w-[720px] left-24">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold">Newest Lessons</h2>
                <button className="text-red-500 font-semibold">Xem thêm</button>
            </div>
            <div className="grid grid-cols-4 gap-4">
                {exampleLessons.map((lesson) => (
                    <LessonItem key={lesson.id} lesson={lesson} />
                ))}
            </div>
        </div>
    )
}

export default NewestLesson;