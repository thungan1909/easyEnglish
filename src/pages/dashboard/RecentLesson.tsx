import { exampleLessons } from "./const";
import RecentLessonItem from "./RecentLessonItem";

const RecentLessons = () => {
    return (
        <div className="bg-white shadow-xl rounded-lg p-4 relative w-full md:w-[480px] lg:w-[600px] xl:w-[720px] left-24">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold">Recent Lessons</h2>
                <button className="text-red-500 font-semibold">Xem thêm</button>
            </div>
            <div className="grid grid-cols-2 gap-4">
                {exampleLessons.map((lesson) => (
                    <RecentLessonItem key={lesson.id} lesson={lesson} />
                ))}
            </div>
        </div>
    )
}

export default RecentLessons;