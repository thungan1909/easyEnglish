import { useLocation, useNavigate, useParams } from "react-router-dom";
import CButton from "../../../components/atoms/CButton/CButton";
import {
  FaClipboardCheck,
  FaExclamationTriangle,
  FaLightbulb,
  FaPaperPlane,
  FaRegSave,
} from "react-icons/fa";
import { useGetLessonById } from "../../../hooks/lesson/get-lesson.hook";
import { Typography } from "@mui/material";
import { punctuationRegex, wordSplitterRegex } from "../../../constants/regex";
import CWordInput from "../../../components/atoms/CWordInput/CWordInput";
import CBreadcrumbs from "../../../components/atoms/CBreadcrumbs/CBreadcrumbs";
import { generateBreadcrumbs } from "../../../utils/helpers/breadcrumbs";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import {
  CompareLessonResponse,
  CompareListenLessonDTO,
  SubmitListenLessonDTO,
} from "../../../types/dtos/lesson.dto";
import { notify } from "../../../utils/notify";
import { useSubmitListenLessonMutation } from "../../../hooks/lesson/submit-lesson.hook";
import { ROUTES_CONSTANTS } from "../../../routers/constants";
import AudioSection from "./component/AudioSection";
import LoadingFailPage from "../../common-pages/LoadingFailPage";
import CModal from "../../../components/atoms/CModal/CModal";
import { useCompareLessonMutation } from "../../../hooks/lesson/compare-lesson.hook";
import {
  ChallengeDTO,
  ChallengeParticipantDTO,
} from "../../../types/dtos/challenge.dto";
import { LessonSubmissionResponse } from "../../../types/dtos/submission.dto";
import { useGetCurrentUser } from "../../../hooks/user/user.hook";

const ListenLesson = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const type = queryParams.get("type");

  const [openModalSubmit, setOpenModalSubmit] = useState(false);
  const [openModalCompare, setOpenModalCompare] = useState(false);
  const [accuracy, setAccuracy] = useState("");
  const [userInputs, setUserInputs] = useState<string[]>([]);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const { data: lesson, isError: isLessonError } = useGetLessonById(id ?? "");
  const { data: currentUser } = useGetCurrentUser();
  const { mutate: submitListenLessonMutation } =
    useSubmitListenLessonMutation();
  const { mutate: compareLessonMutation } = useCompareLessonMutation();

  const handleInputChange = (index: number, value: string) => {
    setUserInputs((prevInputs) => {
      const newInputs = [...prevInputs];
      newInputs[index] = value.trim() ? value : "_____";
      return newInputs;
    });
  };

  const handleKeyDown = useCallback(
    (index: number, e: React.KeyboardEvent) => {
      if (e.key === "Enter") {
        inputRefs.current[index + 1]?.focus();
      } else if (e.key === "Backspace" && !userInputs[index] && index > 0) {
        inputRefs.current[index - 1]?.focus();
      }
    },
    [userInputs]
  );

  const updateChallengeParticipants = (
    challenge: ChallengeDTO,
    submission: LessonSubmissionResponse
  ): ChallengeDTO => {
    const { user, lesson, score, accuracy } = submission;

    // Kiểm tra xem user đã có trong participants chưa
    const existingParticipant = challenge.participants.find(
      (participant) => participant.user._id === user
    );

    if (existingParticipant) {
      existingParticipant.totalScore += score;
      existingParticipant.lessonResults.push(submission);

      // Cập nhật accuracy trung bình
      const totalLessons = existingParticipant.lessonResults.length;
      existingParticipant.averageAccuracy =
        existingParticipant.lessonResults.reduce(
          (acc, lesson) => acc + lesson.accuracy,
          0
        ) / totalLessons;
    } else {
      const newParticipant: ChallengeParticipantDTO = {
        user: currentUser
          ? currentUser
          : {
              _id: user,
              username: "",
              email: "",
              avatarUrl: "",
              totalScore: 0,
              weeklyScores: [],
            },
        totalScore: score,
        averageAccuracy: accuracy,
        lessonResults: [submission],
      };
      challenge.participants.push(newParticipant);
    }

    return { ...challenge, participantsCount: challenge.participants.length };
  };

  const handleSubmit = () => {
    const payload: SubmitListenLessonDTO = {
      lessonId: id || "",
      original_array: wordsList ? wordsList : [],
      result_array: originalWords,
      user_array: userInputs,
    };

    submitListenLessonMutation(payload, {
      onSuccess: (data) => {
        const lessonResult = data as LessonSubmissionResponse;
        notify.success("Submission successful!");

        setChallengeData((prevChallenge) =>
          updateChallengeParticipants(prevChallenge, lessonResult)
        );

        if (id) {
          navigate({
            pathname: ROUTES_CONSTANTS.LESSON.LISTEN.RESULT.replace(":id", id),
          });
        }
      },
      onError: () => {
        notify.error("Submission failed. Please try again.");
      },
    });
  };

  const handleCompareLesson = () => {
    const payload: CompareListenLessonDTO = {
      lessonId: id || "",
      original_array: wordsList ? wordsList : [],
      result_array: originalWords,
      user_array: userInputs,
    };

    compareLessonMutation(payload, {
      onSuccess: (data: CompareLessonResponse) => {
        setAccuracy(data?.accuracy?.toString() || "0");
        setOpenModalCompare(true);
      },
    });
  };

  const originalWords = useMemo(() => {
    return (lesson?.content || "")
      .split(wordSplitterRegex)
      .filter((word) => word.trim() || punctuationRegex.test(word));
  }, [lesson?.content]);

  const wordsList = useMemo(() => {
    return type === "hint" ? lesson?.wordsWithHint : lesson?.wordsWithoutHint;
  }, [lesson, type]);

  useEffect(() => {
    if (wordsList?.length) {
      setUserInputs(wordsList.map((word) => (word === "" ? "_____" : word)));
    }
  }, [wordsList]);

  if (isLessonError) return <LoadingFailPage />;

  return (
    <div className="mt-32" key={id}>
      {lesson && (
        <CBreadcrumbs
          menuItem={generateBreadcrumbs("listenLesson", {
            id: lesson._id,
            title: lesson.title,
            type: type || "",
          })}
          className="text-left pl-16"
        />
      )}
      <div className="!space-y-8 md:px-16 flex flex-col p-8 ">
        <Typography variant="h5">{lesson?.title || "Title"}</Typography>
        <div className="flex md:gap-8 gap-4 flex-wrap items-center justify-center">
          <CButton
            startIcon={<FaPaperPlane />}
            textTransform="capitalize"
            className="!px-4"
            onClick={() => setOpenModalSubmit(true)}
          >
            Submit
          </CButton>
          <CButton
            startIcon={<FaClipboardCheck />}
            textTransform="capitalize"
            className="!px-4"
            variant="outlined"
            onClick={handleCompareLesson}
          >
            Check Results
          </CButton>
          <CButton
            startIcon={<FaExclamationTriangle />}
            textTransform="capitalize"
            className="!px-4"
            variant="outlined"
          >
            Show Mistakes
          </CButton>
          <CButton
            startIcon={<FaRegSave />}
            textTransform="capitalize"
            className="!px-4"
            variant="outlined"
          >
            Save Draft
          </CButton>
          <CButton
            startIcon={<FaLightbulb />}
            textTransform="capitalize"
            className="!px-4"
            variant="outlined"
          >
            Hint Words
          </CButton>
        </div>
        <div className="flex gap-2 flex-wrap !mb-32">
          {wordsList?.map((word, index) => {
            const originalWord = originalWords?.[index] || "";
            return (
              <CWordInput
                key={index}
                word={word}
                originalWord={originalWord}
                inputRef={(el) => {
                  if (el) inputRefs.current[index] = el;
                }}
                onChange={(value) => handleInputChange(index, value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
              />
            );
          })}
        </div>
      </div>
      <div className="fixed bottom-0 w-full">
        {lesson?.audioFile && (
          <AudioSection fileURL={lesson?.audioFile as string} />
        )}
      </div>
      <CModal
        isOpen={openModalSubmit}
        onClose={() => setOpenModalSubmit(false)}
        title="Submit listening"
        confirmText="Submit"
        cancelText="Cancel"
        onConfirm={handleSubmit}
        onCancel={() => setOpenModalSubmit(false)}
        description={
          <>
            Are you sure you want to submit your listening? There will be no
            going back!
          </>
        }
      />
      <CModal
        isOpen={openModalCompare}
        onClose={() => setOpenModalCompare(false)}
        title="Result listening"
        confirmText="OK"
        cancelText="Cancel"
        onConfirm={() => setOpenModalCompare(false)}
        description={<>{`Your result is now ${accuracy}%`}</>}
      />
    </div>
  );
};

export default ListenLesson;
function setChallengeData(arg0: (prevChallenge: any) => ChallengeDTO) {
  throw new Error("Function not implemented.");
}
