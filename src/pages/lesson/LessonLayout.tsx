import { Link, useLocation } from "react-router-dom";
import { exampleLessons } from "../dashboard/const";
import LessonItem from "./LessonItem";
import { getLinkClassName } from "../../utils/helpers/style";
import { menuItems } from "./constants";

const LessonLayout = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const scope = queryParams.get("scope");

  return (
    <div className="relative top-24 left-24 md:w-[720px]">
      <ul className="flex gap-x-6 m-3">
        {menuItems.map((item) => (
          <li key={item.href}>
            <Link
              to={item.href}
              className={`transition ${getLinkClassName(item.href, location)}`}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
      <div className="grid gap-4 mt-4">
        {exampleLessons
          .filter(
            (lesson) => !scope || scope === "all" || lesson.scope === scope
          )
          .map((lesson) => (
            <LessonItem lesson={lesson} key={lesson.id} />
          ))}
      </div>
    </div>
  );
};

export default LessonLayout;
