import { useParams } from "react-router-dom";
import CBreadcrumbs from "../../../components/atoms/CBreadcrumbs/CBreadcrumbs";
import { useGetLessonById } from "../../../hooks/lesson/get-lesson.hook";
import { generateBreadcrumbs } from "../../../utils/helpers/breadcrumbs";
import { Typography } from "@mui/material";
import { useGetLessonResultById } from "../../../hooks/lesson/get-result.hook";
import { useGetCurrentUser } from "../../../hooks/user/user.hook";
import { useEffect } from "react";
import ProgressBarSection from "./component/ProgressBarSection";
import RankingList from "../../dashboard/rightSection/RankingList";
import { FaTriangleExclamation } from "react-icons/fa6";
import TopRecord from "./component/TopRecord";

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
    <div className="relative top-24 gap-8 px-16">
      <div className="flex flex-col mb-4">
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
          <div className="h-[240px] rounded-2xl shadow p-4 bg-white ">
            <Typography variant="h6" className="flex items-center gap-2">
              <FaTriangleExclamation className="text-red-500" />
              <span> Wrong words</span>
            </Typography>
          </div>
        </div>
        <TopRecord />

        {/* <div className="grid grid-cols-2 gap-4">
          <div>
            <Typography>Result</Typography>
            <div>{lessonResult?.result_array?.join(" ")}</div>
          </div>
          <div>
            <Typography>Your listening </Typography>{" "}
            <div>{lessonResult?.user_array?.join(" ")}</div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default LessonResult;
