import { Typography } from "@mui/material";
import SeeMoreButton from "./component/SeeMoreButton";
import { LessonEntity } from "../../types/dtos/lesson.dto";
import DashboardLessonItem from "./component/DashboardLessonItem";

export interface LessonSectionLayoutProps {
  title?: string;
  lessonList: LessonEntity[];
}

const LessonSectionLayout = ({
  title,
  lessonList,
}: LessonSectionLayoutProps) => {
  return (
    <div className="bg-white shadow rounded-2xl p-4">
      <div className="flex justify-between items-center mb-4">
        <Typography variant="h6"> {title}</Typography>
        <SeeMoreButton />
      </div>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6">
        {lessonList?.map((lesson) => (
          <DashboardLessonItem key={lesson._id} lesson={lesson} />
        ))}
      </div>
    </div>
  );
};

export default LessonSectionLayout;
