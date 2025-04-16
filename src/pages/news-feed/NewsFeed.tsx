import UserBasicInfoCard from "./components/UserBasicInfoCard";
import { useGetCurrentUser } from "../../hooks/user/user.hook";
import { useGetLessonList } from "../../hooks/lesson/get-lesson.hook";
import FeedColumn from "./components/FeedColumn";
import LessonLayout from "../dashboard/components/LessonSection/LessonLayout";

const NewsFeed = () => {
  const { data: currentUser } = useGetCurrentUser();
  const { data: lessonList = [] } = useGetLessonList();

  return (
    <div className="container mt-24 px-8">
      <div className="grid md:grid-cols-12 grid-cols-1 gap-6">
        {currentUser && (
          <>
            <div className="md:col-span-3 col-span-1 flex flex-col gap-4">
              {currentUser && <UserBasicInfoCard currentUser={currentUser} />}
            </div>
            <div className="md:col-span-6 col-span-1 flex flex-col gap-4">
              {currentUser && <FeedColumn currentUser={currentUser} />}
            </div>
            <div className="md:col-span-3 col-span-1 flex flex-col gap-4 ">
              <LessonLayout
                title="Recommended for You"
                lessons={lessonList}
                variant="rectangle"
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default NewsFeed;
