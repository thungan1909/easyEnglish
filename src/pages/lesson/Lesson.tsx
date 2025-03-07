import { Link, useLocation } from "react-router-dom";
import { menuItems } from "./constants";
import { getLinkClassName } from "../../utils/helpers/style";
import LessonItem from "./LessonItem";
import { useGetLessonList } from "../../hooks/lesson/get-lesson.hook";

const Lesson = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const { data: lessonList = [], isFetching } = useGetLessonList({});
  const scope = queryParams.get("scope");

  console.log(lessonList);

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
        {lessonList.map((lesson) => (
          <LessonItem lesson={lesson} key={lesson._id} />
        ))}
      </div>
    </div>
  );
};

export default Lesson;
