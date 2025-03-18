import { useParams } from "react-router-dom";
import CBreadcrumbs from "../../../components/atoms/CBreadcrumbs/CBreadcrumbs";
import { useGetLessonById } from "../../../hooks/lesson/get-lesson.hook";
import { generateBreadcrumbs } from "../../../utils/helpers/breadcrumbs";
import { Typography } from "@mui/material";
import { useGetLessonResultById } from "../../../hooks/lesson/get-result.hook";
import { useGetCurrentUser } from "../../../hooks/user/user.hook";
import { useEffect } from "react";

const LessonResult = () => {
  const { id } = useParams();
  const currentUser = useGetCurrentUser();

  const { data: lesson } = useGetLessonById(id ?? "");
  const lessonResult = useGetLessonResultById(id ?? "");

  const isListened = useEffect(() => {
    if (currentUser?.id) {
      console.log(lesson?.listenedBy);
      lesson?.listenedBy.includes(currentUser?.id);
    }
  }, [lesson]);

  console.log(isListened, "isListened");
  return (
    <div className="relative p-8 top-24 gap-8 md:grid-cols-2">
      <div className="flex flex-col gap-4">
        <CBreadcrumbs
          menuItem={generateBreadcrumbs("listenLessonResult", {
            id: lesson?._id,
            title: lesson?.title,
          })}
        />
        <Typography variant="h5">{lesson?.title || "Title"}</Typography>
      </div>
      <div className="grid not-only:grid-cols-2">
        <div>
          <Typography>Result</Typography>
          <div>{lessonResult?.result_array?.join(" ")}</div>
        </div>
        <div>
          <Typography>Your listening </Typography>{" "}
          <div>{lessonResult?.user_array?.join(" ")}</div>
        </div>
      </div>
    </div>
  );
};

export default LessonResult;
