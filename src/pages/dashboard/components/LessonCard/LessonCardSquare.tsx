import { FaBook, FaImage } from "react-icons/fa";
import { Typography } from "@mui/material";
import CIconTextItem from "../../../../components/molecules/cIconTextItem/cIconTextItem";
import { LessonDTO } from "../../../../types/dtos/lesson.dto";

interface DashboardLessonItemProps {
  lesson: LessonDTO;
}

const LessonCardSquare = ({ lesson }: DashboardLessonItemProps) => {
  const itemClass =
    "flex flex-col items-center p-4 gap-2 rounded-2xl shadow bg-gradient-to-r from-indigo-100 bg-purple-200 hover:bg-purple-400 cursor-pointer transition duration-300";

  return (
    <div key={lesson._id} aria-label={lesson.title} className={itemClass}>
      {lesson?.imageFile ? (
        <img
          src={typeof lesson?.imageFile === "string" ? lesson.imageFile : ""}
          alt={lesson.title}
          className="w-32 h-32 rounded-2xl object-cover"
        />
      ) : (
        <FaImage className="md:w-30 md:h-30 w-24 h-24" />
      )}
      <div className="flex flex-col text-center items-center gap-2">
        <Typography variant="body2">
          {lesson.code} - {lesson.title}
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

export default LessonCardSquare;
