import { useMemo } from "react";
import { useGetLessonList } from "../../../hooks/lesson/get-lesson.hook";
import { useGetCurrentUser } from "../../../hooks/user/user.hook";
import LoadingFailPage from "../../common-pages/LoadingFailPage";
import CPageTitle from "../../../components/atoms/CPageTitle/CPageTitle";
import LessonItem from "../../lesson/components/LessonItem";
import { Divider } from "@mui/material";
import NoDataSection from "../../common-pages/NoDataSection";

const MyLesson = () => {
  const { data: currentUser, isError: isUserError } = useGetCurrentUser();

  const { data: lessonList = [], isError: isLessonError } = useGetLessonList(
    {}
  );

  const currentLessonList = useMemo(() => {
    if (currentUser?._id) {
      return lessonList.filter((item) => item.creator?._id === currentUser._id);
    }

    return lessonList;
  }, [lessonList, currentUser]);

  if (isUserError || isLessonError) return <LoadingFailPage />;

  return (
    <div className="flex flex-col">
      <CPageTitle
        title="Manage my upload lessons"
        titleDescription="List of all my current uploaded lessons"
      />
      {currentLessonList?.length > 0 ? (
        currentLessonList?.map((lesson) => (
          <div key={lesson._id} className="mt-4">
            <LessonItem lesson={lesson} type="my-uploads" />
            <Divider />
          </div>
        ))
      ) : (
        <NoDataSection />
      )}
    </div>
  );
};
export default MyLesson;
