import { FaBook } from "react-icons/fa";
import CIconTextItem from "../../components/molecules/cIconTextItem/cIconTextItem";
import { Typography } from "@mui/material";
import { LessonEntity } from "../../types/dtos/lesson.dto";

interface LessonItemProps {
  lesson: LessonEntity;
}

const LessonItem = ({ lesson }: LessonItemProps) => {
  return (
    <div
      key={lesson._id}
      aria-label={lesson.title}
      className="flex flex-col items-center p-3 gap-2 rounded-2xl shadow cursor-pointer bg-gradient-to-r from-indigo-100 bg-purple-200 hover:bg-purple-400"
    >
      <img
        src={typeof lesson?.imageFile === "string" ? lesson.imageFile : ""}
        alt={lesson.title}
        loading="lazy"
        className="w-32 h-32 rounded-2xl object-cover"
      />
      <div className="flex flex-col w-full text-center items-center gap-2">
        <Typography className="text-sm font-bold text-gray-900">
          {lesson.title}
        </Typography>

        <div className="text-gray-500 text-xs">
          <CIconTextItem
            icon={FaBook}
            iconSize={12}
            value={lesson.source || "Unknown"}
          />
        </div>
      </div>
    </div>
  );
};

export default LessonItem;
