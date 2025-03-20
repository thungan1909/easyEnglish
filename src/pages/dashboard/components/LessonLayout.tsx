import { Typography } from "@mui/material";
import { LessonEntity } from "../../../types/dtos/lesson.dto";
import SeeMoreButton from "./SeeMoreButton";
import LessonCardRectangle from "./LessonCard/LessonCardRectangle";
import LessonCardSquare from "./LessonCard/LessonCardSquare";
import NoDataSection from "../../lesson/NoDataSection";

export interface LessonLayoutProps {
  title?: string;
  lessons: LessonEntity[];
  isTwoColumn?: boolean;
  variant?: "rectangle" | "square";
}

const LessonLayout = ({
  title,
  lessons,
  isTwoColumn = false,
  variant = "rectangle",
}: LessonLayoutProps) => {
  const isRectangle = variant === "rectangle";
  const gridClasses = isRectangle
    ? isTwoColumn
      ? "grid gap-4 md:grid-cols-2"
      : "grid gap-4"
    : "grid gap-4 grid-cols-2 md:grid-cols-3 md:gap-6";

  return (
    <div className="bg-white shadow rounded-2xl p-4">
      {title && (
        <div className="flex justify-between items-center mb-4">
          <Typography variant="h6">{title}</Typography>
          <SeeMoreButton />
        </div>
      )}
      {lessons.length > 0 ? (
        <div className={gridClasses}>
          {lessons.map((lesson) =>
            isRectangle ? (
              <LessonCardRectangle key={lesson._id} lesson={lesson} />
            ) : (
              <LessonCardSquare key={lesson._id} lesson={lesson} />
            )
          )}
        </div>
      ) : (
        <NoDataSection />
      )}
    </div>
  );
};

export default LessonLayout;
