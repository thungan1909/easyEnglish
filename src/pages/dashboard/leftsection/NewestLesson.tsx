import CButton from "../../../components/atoms/CButton/CButton";
import { exampleLessons } from "../const";
import LessonItem from "../LessonItem";

const NewestLesson = () => {
  return (
    <div className="bg-white shadow rounded-lg p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 id="newest-lessons-title" className="text-xl font-bold">
          Newest Lessons
        </h2>
        <CButton
          className="!text-red-500 !normal-case"
          variant="text"
          size="large"
          aria-labelledby="newest-lessons-title"
          aria-label="View more lessons"
        >
          See more
        </CButton>
      </div>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6">
        {exampleLessons.map((lesson) => (
          <LessonItem key={lesson.id} lesson={lesson} />
        ))}
      </div>
    </div>
  );
};

export default NewestLesson;
