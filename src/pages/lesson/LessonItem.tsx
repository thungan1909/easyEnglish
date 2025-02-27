import { FaHeart, FaList, FaPlus } from "react-icons/fa";
import CButton from "../../components/atoms/CButton/CButton";
import { Lesson } from "../dashboard/types";
import { Divider, Typography } from "@mui/material";

interface LessonItemProps {
  lesson: Lesson;
}

const LessonItem = ({ lesson }: LessonItemProps) => {
  return (
    <div className="flex items-center p-2 space-x-5" key={lesson.id}>
      <img
        src={lesson.image}
        alt={lesson.id}
        className="p-3 rounded-xl w-36 h-36"
      />
      <div className="flex flex-col space-y-4">
        <Typography variant="h6">{lesson.title}</Typography>
        <div className="text-xs text-gray-500 space-x-4.5 font-extralight">
          <span>{lesson.id}</span>
          <span>{lesson.listens} views</span>
          <span>{lesson.provider}</span>
        </div>
        <p className="line-clamp-1 font-light">{lesson.description}</p>
        <div className="flex !space-x-2">
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
