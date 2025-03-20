import { useMemo } from "react";
import { useAuthentication } from "../../hooks/auth/login.hook";
import { useGetLessonList } from "../../hooks/lesson/get-lesson.hook";
import { useGetCurrentUser } from "../../hooks/user/user.hook";

import LessonLayout from "./components/LessonLayout ";
import RankingList from "./components/RankingList";
import NewFeeds from "./components/NewFeeds";
import HeroSection from "./components/HeroSection";

const Dashboard = () => {
  const { isAuth } = useAuthentication();
  const { data: lessonList = [] } = useGetLessonList({});

  const { data: currentUser } = useGetCurrentUser();

  const listenedLesson = useMemo(
    () =>
      lessonList.filter((item) =>
        item.listenedBy?.includes(currentUser?._id ?? "")
      ),
    [lessonList, currentUser]
  );

  const leftSection = (
    <div className="col-span-1 md:col-span-2 flex flex-col gap-6 px-4">
      <HeroSection />
      {isAuth && (
        <LessonLayout
          title="Recent Lessons"
          lessons={listenedLesson}
          isTwoColumn
          variant="rectangle"
        />
      )}
      <LessonLayout
        title="Newest Lessons"
        lessons={lessonList}
        variant="square"
      />
      <LessonLayout
        title="Recommended for You"
        lessons={lessonList}
        variant="square"
      />
    </div>
  );

  const rightSection = (
    <div className="col-span-1 flex flex-col gap-6">
      <RankingList />
      <NewFeeds />
      <LessonLayout
        title="Most Listened Lessons"
        lessons={listenedLesson}
        variant="rectangle"
      />
    </div>
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-24 md:m-24 ">
      {leftSection}
      {rightSection}
    </div>
  );
};

export default Dashboard;
