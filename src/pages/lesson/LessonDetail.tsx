import { Chip, Typography } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import CButton from "../../components/atoms/CButton/CButton";
import { FaBook, FaCalendar, FaCopyright, FaHeadphones } from "react-icons/fa";
import { FaUserGroup } from "react-icons/fa6";
import { useGetLessonById } from "../../hooks/lesson/get-lesson.hook";
import { ROUTES_CONSTANTS } from "../../routers/constants";

const LessonDetail = () => {
  const navigate = useNavigate();
  const params = useParams();
  const { data: lesson } = useGetLessonById(params.id ?? "");

  const handleListen = (type: "hint" | "withoutHint") => {
    if (!lesson?._id) return;

    navigate({
      pathname: ROUTES_CONSTANTS.LESSON.LISTEN.TYPE.BASE.replace(
        ":id",
        lesson._id
      ),
      search: `?type=${type}`,
    });
  };

  return (
    <div
      className="relative grid grid-cols-1 p-8 top-24 gap-8 md:grid-cols-2"
      key={lesson?._id}
    >
      <div>
        <Chip label={lesson?.code || "Code"} variant="outlined"></Chip>
        <Typography variant="h5" className="!mt-4">
          {lesson?.title || "Title"}
        </Typography>
        <Typography className="line-clamp-12 !mt-4" variant="body1">
          {lesson?.description || "No data"}
        </Typography>
      </div>
      <div className="flex flex-col space-y-8  justify-center items-center">
        <div className="flex gap-8">
          <CButton
            startIcon={<FaBook />}
            textTransform="capitalize"
            variant="outlined"
            className="!px-4"
            onClick={() => handleListen("hint")}
          >
            Listen with hint
          </CButton>
          <CButton
            startIcon={<FaHeadphones />}
            textTransform="capitalize"
            className="!px-4"
            onClick={() => handleListen("withoutHint")}
          >
            Listen without hint
          </CButton>
        </div>
        <div className="items-center flex flex-col">
          <img
            src={typeof lesson?.imageFile === "string" ? lesson.imageFile : ""}
            alt={lesson?._id}
            className="w-80 h-80 rounded-lg"
          />
          <div className="flex text-xs space-x-8 mt-4 p-2 border-t text-gray-500">
            <span className="flex items-center gap-2">
              <FaUserGroup />
              <Typography variant="body1">
                {lesson?.view || "0"} listens
              </Typography>
            </span>
            <span className="flex items-center gap-2">
              <FaCopyright />
              <Typography>{lesson?.source || "Unknow"}</Typography>
            </span>
            <span className="flex items-center gap-2">
              <FaCalendar />
              <Typography>
                {lesson?.createdAt
                  ? new Date(lesson.createdAt).toLocaleString("vi-VN")
                  : ""}
              </Typography>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LessonDetail;
