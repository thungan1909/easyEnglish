import { exampleLessons } from "../const";
import LessonItem from "../LessonItem";

const NewestLesson = () => {
  return (
    <div className="bg-white shadow-xl rounded-lg p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Newest Lessons</h2>
        <button className="text-red-500 font-semibold">See more</button>
      </div>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
        {exampleLessons.map((lesson) => (
          <LessonItem key={lesson.id} lesson={lesson} />
        ))}
      </div>
    </div>
  );
};

export default NewestLesson;
