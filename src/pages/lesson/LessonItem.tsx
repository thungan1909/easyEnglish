import { FaHeart, FaList, FaPlus } from "react-icons/fa";
import CButton from "../../components/atoms/CButton/CButton";
import { Divider, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { ROUTES_CONSTANTS } from "../../routers/constants";
import { LessonEntity } from "../../types/dtos/lesson.dto";

interface LessonItemProps {
  lesson: LessonEntity;
}

const LessonItem = ({ lesson }: LessonItemProps) => {
  const navigate = useNavigate();

  const handleClickLessonItem = () => {
    navigate(ROUTES_CONSTANTS.LESSON.DETAIL.replace(":id", lesson._id));
  };

  return (
    <div
      className="flex items-center p-4 space-x-5 cursor-pointer hover:bg-purple-100 rounded-md"
      key={lesson._id}
      onClick={handleClickLessonItem}
    >
      <img
        src={lesson.image}
        alt={lesson._id}
        className="rounded-xl w-30 h-30 "
      />
      <div className="flex flex-col space-y-2">
        <Typography className="text-lg font-semibold line-clamp-1">
          {lesson.title}
        </Typography>

        <div className="flex text-gray-500 gap-4 mt-1 text-xs">
          <Typography variant="caption">
            Code: {lesson.code || "Code"}{" "}
          </Typography>
          <Typography variant="caption">View: {lesson.view || "0"}</Typography>
          <Typography variant="caption">
            Source: {lesson.provider || "Unknown"}
          </Typography>
        </div>

        <p className="line-clamp-1 font-light text-xs">
          {lesson.description || lesson.content || "Description"}
        </p>

        <div className="flex gap-2 mb-4">
          <CButton isRounded variant="outlined" size="small">
            <FaHeart />
          </CButton>

          <CButton isRounded variant="outlined" size="small">
            <FaList />
          </CButton>

          <CButton isRounded variant="outlined" size="small">
            <FaPlus />
          </CButton>
        </div>
        <Divider />
      </div>
    </div>
  );
};
export default LessonItem;
