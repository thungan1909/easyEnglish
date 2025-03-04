import { FaHeart, FaList, FaPlus } from "react-icons/fa";
import CButton from "../../components/atoms/CButton/CButton";
import { Lesson } from "../dashboard/types";
import { Divider } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { ROUTES_CONSTANTS } from "../../routers/constants";

interface LessonItemProps {
  lesson: Lesson;
}

const LessonItem = ({ lesson }: LessonItemProps) => {
  const navigate = useNavigate();

  const handleClickLessonItem = () => {
    navigate(ROUTES_CONSTANTS.LESSON.DETAIL.replace(":id", lesson.id));
  };

  return (
    <div
      className="flex items-center p-4 space-x-5 cursor-pointer hover:bg-purple-100 rounded-md"
      key={lesson.id}
      onClick={handleClickLessonItem}
    >
      <img
        src={lesson.image}
        alt={lesson.id}
        className="rounded-xl w-30 h-30 "
      />
      <div className="flex flex-col space-y-2">
        <span>{lesson.title}</span>
        <div className="text-xs text-gray-500 space-x-4.5 font-extralight">
          <span>{lesson.id}</span>
          <span>{lesson.listens} views</span>
          <span>{lesson.provider}</span>
        </div>
        <p className="line-clamp-1 font-light text-xs">{lesson.description}</p>
        <div className="flex !space-x-2 mb-4">
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
