import { Link } from "react-router-dom";
import { ROUTES_CONSTANTS } from "../../routers/constants";
import { exampleLessons } from "../dashboard/const";
import LessonItem from "./LessonItem";
import { getLinkClassName } from "../../utils/helpers/style";
import { ReactNode } from "react";

export const menuItems = [
  { href: ROUTES_CONSTANTS.LESSON.SCOPE.ALL, label: "All Lessons" },
  { href: ROUTES_CONSTANTS.LESSON.SCOPE.MINE, label: "My Uploads" },
  { href: ROUTES_CONSTANTS.LESSON.SCOPE.LISTENING, label: "Ongoing Lessons" },
  {
    href: `${ROUTES_CONSTANTS.LESSON.BASE}?scope=listened`,
    label: "Completed Lessons",
  },
];

const LessonLayout = () => {
  const queryParams = new URLSearchParams(location.search);

  const page = queryParams.get("page") || 1; // Default to page 1 if not provided
  const scope = queryParams.get("scope") || "all"; // Default to 'all' if not provided

  return (
    <div className="relative w-[800px] top-24 left-24 bg-amber-200">
      <ul className="flex md:flex gap-x-6 m-3">
        {menuItems.map((item) => (
          <li key={item.href}>
            <Link
              to={item.href}
              className={`transition ${getLinkClassName(item.href)}`}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>

      <div className="grid gap-3">
        {exampleLessons
          .filter((lesson) => lesson.scope === scope) // Show all lessons if scope is 'all'
          .map((lesson) => (
            <LessonItem lesson={lesson} key={lesson.id} />
          ))}
      </div>
    </div>
  );
};

export default LessonLayout;
