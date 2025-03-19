import { Link, useLocation } from "react-router-dom";
import { menuItems } from "./constants";
import { getLinkClassName } from "../../utils/helpers/style";
import LessonItem from "./LessonItem";
import { useGetLessonList } from "../../hooks/lesson/get-lesson.hook";
import { Divider, Typography } from "@mui/material";

const Lesson = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const { data: lessonList = [], isFetching } = useGetLessonList({});
  const scope = queryParams.get("scope");

  return (
    <div className="flex flex-col gap-4 mt-24 mx-4 md:m-24">
      <div>
        <Typography variant="h5" textTransform="uppercase">
          Lessons
        </Typography>
        <Typography variant="caption" className="text-gray-400">
          List of all current lessons
        </Typography>
      </div>
      <ul className="flex md:gap-8 gap-1">
        {menuItems.map((item) => (
          <li key={item.href}>
            <Link
              to={item.href}
              className={`transition ${getLinkClassName(
                item.href,
                location
              )} text-sm md:text-base`}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
      <div>
        {lessonList.map((lesson) => (
          <>
            <LessonItem lesson={lesson} key={lesson._id} />
            <Divider />
          </>
        ))}
      </div>
    </div>
  );
};

export default Lesson;
