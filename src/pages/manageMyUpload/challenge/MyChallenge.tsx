import { useMemo } from "react";
import { useGetCurrentUser } from "../../../hooks/user/user.hook";
import LoadingFailPage from "../../common-pages/LoadingFailPage";
import CPageTitle from "../../../components/atoms/CPageTitle/CPageTitle";
import NoDataSection from "../../common-pages/NoDataSection";
import { useGetChallengeList } from "../../../hooks/challenge/get-challenge.hook";
import ChallengeItem from "../../challenges/components/ChallengeItem";

const MyChallenge = () => {
  const { data: currentUser, isError: isUserError } = useGetCurrentUser();

  const { data: challengeList = [], isError: isLessonError } =
    useGetChallengeList();

  const currentLessonList = useMemo(() => {
    if (currentUser?._id) {
      return challengeList.filter(
        (item) => item.creator?._id === currentUser._id
      );
    }

    return challengeList;
  }, [challengeList, currentUser]);

  if (isUserError || isLessonError) return <LoadingFailPage />;

  return (
    <div className="flex flex-col">
      <CPageTitle title="Manage my upload challenges" />

      {currentLessonList?.length > 0 ? (
        <div className="grid md:grid-cols-3 grid-cols-2 gap-4 mt-4">
          {currentLessonList?.map((challenge) => (
            <ChallengeItem
              challenge={challenge}
              type="mine"
              key={challenge._id}
            />
          ))}
        </div>
      ) : (
        <NoDataSection />
      )}
    </div>
  );
};
export default MyChallenge;
