import SeeMoreButton from "../components/SeeMoreButton";
import { exampleLessons } from "../const";
import MostListenedLessonItem from "./MostListenedLessonItem";

const MostListened = () => {
  return (
    <div className="bg-white shadow rounded-2xl p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 id="most-listened-title" className="text-xl font-bold">
          Most Listened Lessons
        </h2>
        <SeeMoreButton />
      </div>
      <div className="grid grid-cols-1 gap-4">
        {exampleLessons.map((lesson) => (
          <MostListenedLessonItem key={lesson.id} lesson={lesson} />
        ))}
      </div>
    </div>
  );
};

export default MostListened;
