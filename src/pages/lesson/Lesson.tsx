import { Link, useLocation } from "react-router-dom";
import { menuItems } from "./constants";
import { getLinkClassName } from "../../utils/helpers/style";
import { exampleLessons } from "../dashboard/const";
import LessonItem from "./LessonItem";

const Lesson = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const scope = queryParams.get("scope");

  return (
    <div className="top-24 md:flex flex-col items-center md:m-20 m-2 ">
      <ul className="flex gap-6 mt-24 md:mt-8 px-4">
        {menuItems.map((item) => (
          <li key={item.href}>
            <Link
              to={item.href}
              className={`transition ${getLinkClassName(
                item.href,
                location
              )} text-sm md:text-xl`}
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

export default Lesson;
