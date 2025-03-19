import { useParams } from "react-router-dom";
import CBreadcrumbs from "../../../components/atoms/CBreadcrumbs/CBreadcrumbs";
import { useGetLessonById } from "../../../hooks/lesson/get-lesson.hook";
import { generateBreadcrumbs } from "../../../utils/helpers/breadcrumbs";
import { Typography } from "@mui/material";
import { useGetLessonResultById } from "../../../hooks/lesson/get-result.hook";
import { useGetCurrentUser } from "../../../hooks/user/user.hook";
import { useEffect } from "react";
import ProgressBarSection from "./component/ProgressBarSection";
import { FaTriangleExclamation } from "react-icons/fa6";
import TopRecord from "./component/TopRecord";
import { FaBook, FaBookOpen } from "react-icons/fa";

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

  return (
    <div className="flex flex-col gap-8 mt-24 mx-4 md:m-24">
      <div className="flex flex-col gap-4">
        <CBreadcrumbs
          menuItem={generateBreadcrumbs("listenLessonResult", {
            id: lesson?._id,
            title: lesson?.title,
          })}
        />
        <div>
          <Typography variant="h5">{lesson?.title || "Title"}</Typography>
        </div>
      </div>

      <div className="grid md:grid-cols-2 md:gap-16 grid-cols-1 gap-4">
        <div className="flex flex-col gap-4">
          <ProgressBarSection />
          <div className="h-[240px] p-4 rounded-2xl shadow bg-white">
            <Typography variant="h6" className="flex items-center gap-2">
              <FaTriangleExclamation className="text-red-500" />
              <span> Wrong words</span>
            </Typography>
          </div>
        </div>
        <TopRecord />
      </div>
      <div className="grid md:grid-cols-2 md:gap-16 grid-cols-1 gap-4">
        <div className="p-4 rounded-2xl shadow bg-white">
          <Typography variant="h6" className="flex items-center gap-2">
            <FaBook className="text-green-500" />
            <span> Result</span>
          </Typography>
          <div className="mt-4">{lessonResult?.result_array?.join(" ")}</div>
        </div>

        <div className="p-4 rounded-2xl shadow bg-white">
          <Typography variant="h6" className="flex items-center gap-2">
            <FaBookOpen className="text-green-500" />
            <span> Your listening </span>
          </Typography>
          <div className="mt-4">{lessonResult?.user_array?.join(" ")}</div>
        </div>
      </div>
    </div>
  );
};

export default LessonResult;
