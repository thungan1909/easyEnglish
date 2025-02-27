import { Link } from "react-router-dom";
import { ROUTES_CONSTANTS } from "../../routers/constants";
import { exampleLessons } from "../dashboard/const";
import LessonItem from "./LessonItem";
import { getLinkClassName } from "../../utils/helpers/style";

export const menuItems = [
  { href: ROUTES_CONSTANTS.LESSON.SCOPE.ALL, label: "All Lessons" },
  { href: ROUTES_CONSTANTS.LESSON.SCOPE.MINE, label: "My Uploads" },
  { href: ROUTES_CONSTANTS.LESSON.SCOPE.LISTENING, label: "Ongoing Lessons" },
  { href: ROUTES_CONSTANTS.LESSON.SCOPE.LISTENED, label: "Completed Lessons" },
];

const LessonList = () => {
  return (
    <div className="grid gap-3">
      {exampleLessons.map((lesson) => (
        <LessonItem lesson={lesson} />
      ))}
    </div>
  );
};

export default LessonList;
