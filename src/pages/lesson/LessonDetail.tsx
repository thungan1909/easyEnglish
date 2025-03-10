import { Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import CButton from "../../components/atoms/CButton/CButton";
import { FaBook, FaCalendar, FaCopyright, FaHeadphones } from "react-icons/fa";
import { FaUserGroup } from "react-icons/fa6";
import { useGetLessonById } from "../../hooks/lesson/get-lesson.hook";

const LessonDetail = () => {
  const params = useParams();

  const { data: lesson, isFetching } = useGetLessonById(params.id ?? "");
  console.log(lesson);
  return (
    <div
      className="relative grid grid-cols-1 p-8 top-24 gap-8 md:grid-cols-2"
      key={lesson?._id}
    >
      <div>
        <Typography variant="h5">{lesson?.code || "Code"}</Typography>
        <Typography variant="h5">{lesson?.title || "Title"}</Typography>
        <Typography className="line-clamp-12 !mt-4" variant="body1">
          {lesson?.description || "Description"}
        </Typography>
      </div>
      <div className="flex flex-col space-y-8  justify-center items-center">
        <div className="flex gap-8">
          <CButton startIcon={<FaBook />} textTransform="capitalize">
            Listen with suggest
          </CButton>
          <CButton startIcon={<FaHeadphones />} textTransform="capitalize">
            Listen without suggest
          </CButton>
        </div>
        <div className="items-center flex flex-col">
          <img
            src={lesson?.imageFile}
            alt={lesson?._id}
            className="w-80 h-80"
          />
          <div className="flex border-b-blue-400 text-sm space-x-8 mt-4 p-2 border-t">
            <span className="flex items-center gap-2">
              <FaUserGroup />
              <Typography variant="body1">
                {lesson?.view || "0"} listens
              </Typography>
            </span>
            <span className="flex items-center gap-2">
              <FaCopyright />
              <Typography>{lesson?.source}</Typography>
            </span>
            <span className="flex items-center gap-2">
              <FaCalendar />
              <Typography>{lesson?.createdAt}</Typography>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LessonDetail;
