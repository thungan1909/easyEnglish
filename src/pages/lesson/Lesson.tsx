import { Link, useLocation } from "react-router-dom";
import { menuItems } from "./constants";
import { getLinkClassName } from "../../utils/helpers/style";
import LessonItem from "./LessonItem";
import { useGetLessonList } from "../../hooks/lesson/get-lesson.hook";
import { Divider, Typography } from "@mui/material";
import { useGetCurrentUser } from "../../hooks/user/user.hook";
import { useEffect, useState } from "react";
import { LessonEntity } from "../../types/dtos/lesson.dto";

const Lesson = () => {
  const location = useLocation();
  const currentUser = useGetCurrentUser();

  const queryParams = new URLSearchParams(location.search);
  const { data: lessonList = [] } = useGetLessonList({});
  const scope = queryParams.get("scope") || "all";

  const [currentLessonList, setCurrentLessonList] = useState<
    LessonEntity[] | []
  >([]);

  useEffect(() => {
    if (scope === "listened" && currentUser?._id) {
      setCurrentLessonList(
        lessonList.filter((item) =>
          item.listenedBy?.some((user) => user === currentUser?._id)
        )
      );
    } else if (scope === "mine" && currentUser?._id) {
      setCurrentLessonList(
        lessonList.filter((item) => item.creator?._id == currentUser._id)
      );
    } else if (scope === "all") {
      setCurrentLessonList(lessonList);
    }
  }, [scope, lessonList, currentUser]);

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
        {currentLessonList.map((lesson) => (
          <div key={lesson._id}>
            <LessonItem lesson={lesson} />
            <Divider />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Lesson;
