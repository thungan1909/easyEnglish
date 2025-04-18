import { FaBook, FaImage } from "react-icons/fa";
import { Typography } from "@mui/material";
import CIconTextItem from "../../../../../components/molecules/cIconTextItem/cIconTextItem";
import { LessonDTO } from "../../../../../types/dtos/lesson.dto";
import { dashboardItemBackground } from "../../../const";

interface DashboardLessonItemProps {
  lesson: LessonDTO;
  onClick?: React.MouseEventHandler<HTMLDivElement> | undefined;
  isShowSource?: boolean;
}

const LessonCardSquare = ({
  lesson,
  onClick,
  isShowSource = true,
}: DashboardLessonItemProps) => {
  const itemClass = `${dashboardItemBackground} flex flex-col items-center p-2 gap-2 min-w-[100%] min-h-[70%]`;

  return (
    <div
      key={lesson._id}
      aria-label={lesson.title}
      className={itemClass}
      onClick={onClick}
    >
      {lesson?.imageFile ? (
        <img
          src={typeof lesson?.imageFile === "string" ? lesson.imageFile : ""}
          alt={lesson.title}
          className="w-32 h-32 rounded-2xl object-cover"
        />
      ) : (
        <FaImage className="md:w-32 md:h-32 w-24 h-24" />
      )}
      <div className="flex flex-col text-center items-center gap-2">
        <Typography variant="body2" className="line-clamp-3">
          {lesson.code} - {lesson.title}
        </Typography>
        {isShowSource ? (
          <div className="text-gray-500 text-xs">
            <CIconTextItem
              icon={FaBook}
              iconSize={12}
              value={lesson.source || "Unknown"}
            />
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default LessonCardSquare;
