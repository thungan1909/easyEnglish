import { useMemo } from "react";
import { useAuthentication } from "../../hooks/auth/login.hook";
import { useGetLessonList } from "../../hooks/lesson/get-lesson.hook";
import { useGetCurrentUser } from "../../hooks/user/user.hook";
import HeroSection from "./component/HeroSection";
import LessonSectionLayout from "./LessonSectionLayout";

import RectangleLessonLayout from "./RectangleLessonLayout";
import RankingList from "./component/RankingList";
import NewFeeds from "./component/NewFeeds";

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
        <RectangleLessonLayout
          title="Recent Lessons"
          lessonList={listenedLesson}
          isTwoColumn
        />
      )}
      <LessonSectionLayout title="Newest Lessons" lessonList={lessonList} />
      <LessonSectionLayout
        title="Recommended for You"
        lessonList={lessonList}
      />
    </div>
  );

  const rightSection = (
    <div className="col-span-1 flex flex-col gap-6">
      <RankingList />
      <NewFeeds />
      <RectangleLessonLayout
        title="Most Listened Lessons"
        lessonList={listenedLesson}
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
