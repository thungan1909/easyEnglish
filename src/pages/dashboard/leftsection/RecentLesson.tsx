import SeeMoreButton from "../components/SeeMoreButton";
import { exampleLessons } from "../const";
import RecentLessonItem from "../leftsection/RecentLessonItem";

const RecentLessons = () => {
  return (
    <div className="bg-white shadow rounded-2xl p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Recent Lessons</h2>
        <SeeMoreButton />
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {exampleLessons.map((lesson) => (
          <RecentLessonItem key={lesson.id} lesson={lesson} />
        ))}
      </div>
    </div>
  );
};

export default RecentLessons;
