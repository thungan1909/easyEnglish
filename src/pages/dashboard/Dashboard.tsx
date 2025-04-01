import { useMemo } from "react";
import { useAuthentication } from "../../hooks/auth/login.hook";
import { useGetLessonList } from "../../hooks/lesson/get-lesson.hook";
import { useGetCurrentUser } from "../../hooks/user/user.hook";

import HeroSection from "./components/Challenge/HeroSection";
import { useGetChallengeList } from "../../hooks/challenge/get-challenge.hook";
import LessonLayout from "./components/LessonSection/LessonLayout";
import RankingList from "./components/UserActivity/RankingList";
import ChallengeLayout from "./components/Challenge/ChallengeLayout";

const Dashboard = () => {
  const { isAuth } = useAuthentication();
  const { data: lessonList = [] } = useGetLessonList({});
  const { data: challengeList = [] } = useGetChallengeList();
  const { data: currentUser } = useGetCurrentUser();

  const listenedLesson = useMemo(() => {
    if (!currentUser?._id) return [];
    return lessonList.filter((item) =>
      item.listenedBy?.includes(currentUser._id)
    );
  }, [lessonList, currentUser]);

  const mostListened = useMemo(() => {
    const sortedLessons = lessonList
      .filter((item) => item.listenCount)
      .sort((a, b) => b.listenCount - a.listenCount);

    return sortedLessons.length > 0
      ? sortedLessons.slice(0, Math.min(sortedLessons.length, 3))
      : lessonList;
  }, [lessonList]);

  const newestLesson = useMemo(
    () =>
      lessonList
        .filter((item) => item.createdAt)
        .sort(
          (a, b) =>
            new Date(b.createdAt as string).getTime() -
            new Date(a.createdAt as string).getTime()
        )
        .slice(0, 3),
    [lessonList]
  );

  const newestChallenge = useMemo(
    () =>
      challengeList
        .filter((item) => item.createdAt)
        .sort(
          (a, b) =>
            new Date(b.createdAt as string).getTime() -
            new Date(a.createdAt as string).getTime()
        )
        .slice(0, 3),
    [challengeList]
  );

  const leftSection = (
    <div className="col-span-1 md:col-span-2 flex flex-col gap-6">
      <HeroSection challenges={newestChallenge} />
      {isAuth && listenedLesson.length > 0 && (
        <LessonLayout
          title="Recent Lessons"
          lessons={listenedLesson}
          isTwoColumn
          variant="rectangle"
        />
      )}
      <LessonLayout
        title="Newest Lessons"
        lessons={newestLesson}
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
      <LessonLayout
        title="Most Listened Lessons"
        lessons={mostListened}
        variant="rectangle"
      />
      <ChallengeLayout title="Challenges" challenges={challengeList} />
    </div>
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {leftSection}
      {rightSection}
    </div>
  );
};

export default Dashboard;
