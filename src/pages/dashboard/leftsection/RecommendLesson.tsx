import { useGetLessonList } from "../../../hooks/lesson/get-lesson.hook";
import LessonSectionLayout from "./LessonSectionLayout";

const RecommendLesson = () => {
  const {
    data: lessonList = [],
    // isLoading: isLessonLoading,
    // isError: isLessonError,
  } = useGetLessonList({});

  return (
    <LessonSectionLayout title="Recommended for You" lessonList={lessonList} />
  );
};

export default RecommendLesson;
