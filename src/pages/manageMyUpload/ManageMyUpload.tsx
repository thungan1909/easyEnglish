import { Divider, Typography } from "@mui/material";
import { useMemo } from "react";
import { useGetLessonList } from "../../hooks/lesson/get-lesson.hook";
import { useGetCurrentUser } from "../../hooks/user/user.hook";
import LoadingFailPage from "../common-pages/LoadingFailPage";
import LessonItem from "../lesson/components/LessonItem";
import NoDataSection from "../common-pages/NoDataSection";

const ManageMyUpload = () => {
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
    <div className="flex flex-col gap-4 mt-24 mx-4 md:m-24">
      <div>
        <Typography variant="h5" textTransform="uppercase">
          Manage my uploads
        </Typography>
        <Typography variant="caption" className="text-gray-400">
          List of all my current uploads
        </Typography>
      </div>

      {currentLessonList?.length > 0 ? (
        currentLessonList?.map((lesson) => (
          <div key={lesson._id}>
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
export default ManageMyUpload;
