import { Link, useLocation } from "react-router-dom";
import { menuItems } from "./constants";
import { getLinkClassName } from "../../utils/helpers/style";
import LessonItem from "./LessonItem";
import { useGetLessonList } from "../../hooks/lesson/get-lesson.hook";
import { Divider, Typography } from "@mui/material";
import { useGetCurrentUser } from "../../hooks/user/user.hook";
import { useMemo } from "react";
import LoadingPage from "../LoadingPage";
import LoadingFailPage from "../LoadingFailPage";
import NoDataSection from "./NoDataSection";

const Lesson = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const scope = queryParams.get("scope") || "all";

  const {
    data: currentUser,
    isLoading: isUserLoading,
    isError: isUserError,
  } = useGetCurrentUser();

  const {
    data: lessonList = [],
    isLoading: isLessonLoading,
    isError: isLessonError,
  } = useGetLessonList({});

  const currentLessonList = useMemo(() => {
    if (isUserLoading) return [];

    if (scope === "listened" && currentUser?._id) {
      return lessonList.filter((item) =>
        item.listenedBy?.some((user) => user === currentUser?._id)
      );
    }
    if (scope === "mine" && currentUser?._id) {
      return lessonList.filter((item) => item.creator?._id === currentUser._id);
    }
    return lessonList;
  }, [scope, lessonList, currentUser, isUserLoading, isLessonLoading]);

  if (isUserLoading || isLessonLoading) return <LoadingPage />;
  if (isUserError || isLessonError) return <LoadingFailPage />;

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
      {currentLessonList.length > 0 ? (
        <div>
          {currentLessonList.map((lesson) => (
            <div key={lesson._id}>
              <LessonItem lesson={lesson} />
              <Divider />
            </div>
          ))}
        </div>
      ) : (
        <NoDataSection />
      )}
    </div>
  );
};

export default Lesson;
