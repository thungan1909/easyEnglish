import { exampleLessons } from "../const";
import MostListenedLessonItem from "./MostListenedLessonItem";

const MostListened = () => {
    return (
        <div className="bg-white shadow-xl rounded-lg p-4 md:w-[120px] lg:w-[240px] xl:w-[360px]">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold">Most Listened</h2>
                <button className="text-red-500 font-semibold">See more</button>
            </div>
            <div className="grid grid-cols-1 gap-4">
                {exampleLessons.map((lesson) => (
                    <MostListenedLessonItem key={lesson.id} lesson={lesson} />
                ))}
            </div>
        </div>
    )
}

export default MostListened;