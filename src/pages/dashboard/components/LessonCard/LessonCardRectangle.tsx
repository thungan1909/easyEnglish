import { FaBook, FaImage, FaPlay } from "react-icons/fa";
import { Typography } from "@mui/material";
import { LessonDTO } from "../../../../types/dtos/lesson.dto";
import CIconTextItem from "../../../../components/molecules/cIconTextItem/cIconTextItem";

interface RectangleLessonItemProps {
  lesson: LessonDTO;
}
const LessonCardRectangle = ({ lesson }: RectangleLessonItemProps) => {
  const itemClass =
    "flex items-center space-x-3 p-2 rounded-2xl shadow bg-gradient-to-r from-indigo-100 bg-purple-200 hover:bg-purple-400 cursor-pointer transition duration-300";

  return (
    <div key={lesson._id} className={itemClass}>
      {lesson?.imageFile ? (
        <img
          src={typeof lesson?.imageFile === "string" ? lesson.imageFile : ""}
          alt={lesson.title}
          className="w-16 h-16 rounded-2xl object-cover"
        />
      ) : (
        <FaImage className="w-16 h-16" />
      )}
      <div className="flex flex-col flex-1 gap-1">
        <Typography variant="caption"> {lesson.code}</Typography>
        <Typography className="text-black line-clamp-2" variant="body2">
          {lesson.title}
        </Typography>
        <div className="flex items-center text-xs gap-4 text-gray-500">
          <CIconTextItem icon={FaPlay} value={lesson.listenCount} />
          <CIconTextItem icon={FaBook} value={lesson.source || "Unknown"} />
        </div>
      </div>
    </div>
  );
};

export default LessonCardRectangle;
