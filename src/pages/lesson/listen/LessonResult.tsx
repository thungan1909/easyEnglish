import { useLocation, useParams } from "react-router-dom";
import CBreadcrumbs from "../../../components/atoms/CBreadcrumbs/CBreadcrumbs";
import { useGetLessonById } from "../../../hooks/lesson/get-lesson.hook";
import { generateBreadcrumbs } from "../../../utils/helpers/breadcrumbs";
import { Typography } from "@mui/material";
import { useGetLessonResultById } from "../../../hooks/lesson/get-result.hook";

const LessonResult = () => {
  const { id } = useParams();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const { data: lesson, isLoading, isError } = useGetLessonById(id ?? "");
  const data = useGetLessonResultById(id ?? ""); // Destructure `data` properly

  console.log(data); // Now it will correctly log the response data
  console.log(data);
  return (
    <div className="relative grid grid-cols-1 p-8 top-24 gap-8 md:grid-cols-2">
      <div className="flex flex-col gap-4">
        <CBreadcrumbs
          menuItem={generateBreadcrumbs("listenLessonResult", {
            id: lesson?._id,
            title: lesson?.title,
          })}
        />
        <Typography variant="h5">{lesson?.title || "Title"}</Typography>
        <Typography className="line-clamp-12" variant="body1">
          {lesson?.description || "No data"}
        </Typography>
      </div>
    </div>
  );
};

export default LessonResult;
