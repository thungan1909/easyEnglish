import { useGetLessonList } from "../../../hooks/lesson/get-lesson.hook";
import LessonSectionLayout from "./LessonSectionLayout";

const NewestLesson = () => {
  const {
    data: lessonList = [],
    // isLoading: isLessonLoading,
    // isError: isLessonError,
  } = useGetLessonList({});

  return <LessonSectionLayout title="Newest Lessons" lessonList={lessonList} />;
};

export default NewestLesson;
