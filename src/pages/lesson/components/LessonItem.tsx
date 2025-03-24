import { FaHeart, FaImage, FaList, FaPlus } from "react-icons/fa";
import CButton from "../../../components/atoms/CButton/CButton";
import { Tooltip, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { ROUTES_CONSTANTS } from "../../../routers/constants";
import { LessonDTO } from "../../../types/dtos/lesson.dto";
import MyUploadsActions from "../../manageMyUpload/MyUploadAcction";

interface LessonItemProps {
  lesson: LessonDTO;
  type: "lesson" | "my-uploads";
}

const LessonItem = ({ lesson, type }: LessonItemProps) => {
  const navigate = useNavigate();

  const handleClickLessonItem = () => {
    navigate(ROUTES_CONSTANTS.LESSON.DETAIL.replace(":id", lesson._id));
  };

  return (
    <div
      className="flex items-center space-x-5 cursor-pointer hover:bg-purple-100 md:p-4 p-2"
      key={lesson._id}
      onClick={handleClickLessonItem}
    >
      {lesson?.imageFile ? (
        <img
          src={
            typeof lesson.imageFile === "string"
              ? lesson.imageFile
              : URL.createObjectURL(lesson.imageFile)
          }
          alt={lesson.title || "Lesson Image"}
          className="rounded-xl md:w-30 md:h-30 w-24 h-24"
        />
      ) : (
        <FaImage className="md:w-30 md:h-30 w-24 h-24" />
      )}

      <div className="flex flex-col gap-2">
        <Typography className="line-clamp-1">{lesson.title}</Typography>

        <div className="flex text-gray-400 gap-4">
          <Typography variant="caption">{lesson.code || "Code"}</Typography>
          <Typography variant="caption">
            {lesson.listenCount ?? 0}
            {lesson.listenCount && lesson.listenCount > 1
              ? " listens"
              : " listen"}
          </Typography>
          <Typography variant="caption">
            {lesson.source || "Unknown"}
          </Typography>
        </div>

        <Typography className="line-clamp-1 text-gray-600" variant="caption">
          {lesson.description || lesson.content || "Description"}
        </Typography>

        <div className="flex gap-4">
          {type === "lesson" ? (
            <>
              <Tooltip title="Favorite">
                <span>
                  <CButton
                    isRounded
                    variant="outlined"
                    size="small"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <FaHeart />
                  </CButton>
                </span>
              </Tooltip>

              <Tooltip title="Add to waiting list">
                <span>
                  <CButton
                    isRounded
                    variant="outlined"
                    size="small"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <FaList />
                  </CButton>
                </span>
              </Tooltip>

              <Tooltip title="Add to playlist">
                <span>
                  <CButton
                    isRounded
                    variant="outlined"
                    size="small"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <FaPlus />
                  </CButton>
                </span>
              </Tooltip>
            </>
          ) : (
            <MyUploadsActions lessonId={lesson?._id} />
          )}
        </div>
      </div>
    </div>
  );
};
export default LessonItem;
