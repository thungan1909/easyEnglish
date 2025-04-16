import { Link, useLocation } from "react-router-dom";
import { menuItems } from "./constants";
import LessonItem from "./components/LessonItem";
import { useGetLessonList } from "../../hooks/lesson/get-lesson.hook";
import { Divider } from "@mui/material";
import { useGetCurrentUser } from "../../hooks/user/user.hook";
import { useMemo } from "react";
import LoadingFailPage from "../common-pages/LoadingFailPage";
import NoDataSection from "../common-pages/NoDataSection";
import CPageTitle from "../../components/atoms/CPageTitle/CPageTitle";
import { getLinkClassName } from "../../utils/activeLinkUtils";

const Lesson = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const scope = queryParams.get("scope") || "all";

  const { data: currentUser, isError: isUserError } = useGetCurrentUser();

  const { data: lessonList = [], isError: isLessonError } = useGetLessonList();

  const currentLessonList = useMemo(() => {
    if (scope === "listened" && currentUser?._id) {
      return lessonList.filter((item) =>
        item.listenedBy?.some((user) => user === currentUser?._id)
      );
    }
    if (scope === "mine" && currentUser?._id) {
      return lessonList.filter((item) => item.creator?._id === currentUser._id);
    }
    return lessonList;
  }, [scope, lessonList, currentUser]);

  if (isUserError || isLessonError) return <LoadingFailPage />;

  return (
    <div className="flex flex-col gap-4">
      <CPageTitle
        title="Lessons"
        titleDescription="List of all current lessons"
      />
      <ul className="flex md:gap-8 gap-4">
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
        currentLessonList.map((lesson) => (
          <div key={lesson._id}>
            <LessonItem
              lesson={lesson}
              type={scope === "mine" ? "my-uploads" : "lesson"}
            />
            <Divider />
          </div>
        ))
      ) : (
        <NoDataSection />
      )}
    </div>
  );
};

export default Lesson;
