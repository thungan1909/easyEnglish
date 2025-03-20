import { Typography } from "@mui/material";
import { LessonEntity } from "../../types/dtos/lesson.dto";
import SeeMoreButton from "./component/SeeMoreButton";
import RectangleLessonItem from "./component/RectangleLessonItem";
export interface RectangleLessonItemLayoutProps {
  title?: string;
  lessonList: LessonEntity[];
  isTwoColumn?: boolean;
}

const RectangleLessonLayout = ({
  title,
  lessonList,
  isTwoColumn = false,
}: RectangleLessonItemLayoutProps) => {
  return (
    <div className="bg-white shadow rounded-2xl p-4">
      <div className="flex justify-between items-center mb-4">
        {title && <Typography variant="h6">{title}</Typography>}
        <SeeMoreButton />
      </div>
      <div className={`grid gap-4 ${isTwoColumn ? "md:grid-cols-2" : ""}`}>
        {lessonList.map((lesson) => (
          <RectangleLessonItem key={lesson._id} lesson={lesson} />
        ))}
      </div>
    </div>
  );
};

export default RectangleLessonLayout;
