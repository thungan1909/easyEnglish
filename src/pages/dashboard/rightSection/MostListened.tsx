import CButton from "../../../components/atoms/CButton/CButton";
import { exampleLessons } from "../const";
import MostListenedLessonItem from "./MostListenedLessonItem";

const MostListened = () => {
  return (
    <div className="bg-white shadow-xl rounded-lg p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 id="most-listened-title" className="text-xl font-bold">
          Most Listened Lessons
        </h2>
        <CButton
          className="!text-red-500 !normal-case"
          variant="text"
          size="large"
          aria-labelledby="most-listened-title"
          aria-label="View more most listened lessons"
        >
          See more
        </CButton>
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
