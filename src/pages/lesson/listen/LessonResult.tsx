import { useNavigate, useParams } from "react-router-dom";
import CBreadcrumbs from "../../../components/atoms/CBreadcrumbs/CBreadcrumbs";
import { useGetLessonById } from "../../../hooks/lesson/get-lesson.hook";
import { generateBreadcrumbs } from "../../../utils/helpers/breadcrumbs";
import { Typography } from "@mui/material";
import {
  useGetLessonResultById,
  useGetTopScores,
} from "../../../hooks/lesson/get-result.hook";
import ProgressBarSection from "./component/ProgressBarSection";
import { FaTriangleExclamation } from "react-icons/fa6";
import { FaBook, FaBookOpen } from "react-icons/fa";
import LoadingFailPage from "../../common-pages/LoadingFailPage";
import TopRecord from "./component/TopRecord";
import ResultCard from "./component/ResultCard";
import { useGetCurrentUser } from "../../../hooks/user/user.hook";
import { ROUTES_CONSTANTS } from "../../../routers/constants";

const LessonResult = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data: currentUser, isLoading: isUserLoading } = useGetCurrentUser();

  if (!id) return <LoadingFailPage />;

  const { data: lesson } = useGetLessonById(id ?? "");
  const { data: topScoresData } = useGetTopScores(id ?? "");
  const { data: lessonResult, isError: isLessonResultError } =
    useGetLessonResultById(id ?? "");

  const hasListened = currentUser?.listenedLessons?.some(
    (l) => l.lesson === id
  );

  if (!isUserLoading && !hasListened) {
    navigate(ROUTES_CONSTANTS.LESSON.DETAIL.replace(":id", id));
  }

  const topScores = topScoresData?.topScores ?? [];
  const { title, _id: lessonId } = lesson || {};
  const { score, accuracy, result_array, user_array } =
    lessonResult?.submission || {};

  if (isLessonResultError) return <LoadingFailPage />;

  return (
    <div className="flex flex-col gap-8">
      {/* Breadcrumbs & Title */}
      <div className="flex flex-col gap-4">
        <CBreadcrumbs
          menuItem={generateBreadcrumbs("listenLessonResult", {
            id: lessonId,
            title,
          })}
        />
        <Typography variant="h5">{lesson?.title || "Title"}</Typography>
      </div>

      {/* Progress & Top Scores */}
      <div className="grid md:grid-cols-2 md:gap-16 grid-cols-1 gap-4">
        <div className="flex flex-col gap-4">
          <ProgressBarSection score={score} accuracy={accuracy} />
          <div className="h-[240px] p-4 rounded-2xl shadow bg-white">
            <Typography variant="h6" className="flex items-center gap-2">
              <FaTriangleExclamation className="text-red-500" />
              <span> Wrong words</span>
            </Typography>
          </div>
        </div>
        <TopRecord topScores={topScores} />
      </div>

      {/* Result & User Listening */}
      <div className="grid md:grid-cols-2 md:gap-16 grid-cols-1 gap-4">
        <ResultCard
          icon={<FaBook className="text-green-500" />}
          title="Result"
          content={result_array}
        />
        <ResultCard
          icon={<FaBookOpen className="text-green-500" />}
          title="Your listening"
          content={user_array}
        />
      </div>
    </div>
  );
};

export default LessonResult;
