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
import AudioSection from "./AudioSection";
import { Typography } from "@mui/material";
import { punctuationRegex, wordSplitterRegex } from "../../../constants/regex";
import CWordInput from "../../../components/atoms/CWordInput/CWordInput";
import CBreadcrumbs from "../../../components/atoms/CBreadcrumbs/CBreadcrumbs";
import { generateBreadcrumbs } from "../../../utils/helpers/breadcrumbs";
import { useEffect, useMemo, useState } from "react";
import { SubmitListenLessonDTO } from "../../../types/dtos/lesson.dto";
import { notify } from "../../../utils/notify";
import { useSubmitListenLessonMutation } from "../../../hooks/lesson/submit-lesson.hook";
import { ROUTES_CONSTANTS } from "../../../routers/constants";

const ListenLesson = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const type = queryParams.get("type");
  const { data: lesson, isLoading, isError } = useGetLessonById(id ?? "");
  const { mutate: submitListenLessonMutation } =
    useSubmitListenLessonMutation();

  const [userInputs, setUserInputs] = useState<string[]>([]);

  const handleInputChange = (index: number, value: string) => {
    setUserInputs((prevInputs) => {
      const newInputs = [...prevInputs];
      newInputs[index] = value.trim() ? value : "_____";
      return newInputs;
    });
  };

  const handleSubmit = () => {
    const payload: SubmitListenLessonDTO = {
      lessonId: id || "",
      original_array: wordsList ? wordsList : [],
      result_array: originalWords,
      user_array: userInputs,
    };

    submitListenLessonMutation(payload, {
      onSuccess: () => {
        notify.success("Submission successful!");
        navigate(ROUTES_CONSTANTS.LESSON.LISTEN.RESULT);
      },
      onError: () => {
        notify.error("Submission failed. Please try again.");
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

  return (
    <>
      {isLoading ? (
        <div className="text-center mt-32">Loading...</div>
      ) : isError ? (
        <div className="text-center mt-32 text-red-500">
          Failed to load lesson.
        </div>
      ) : (
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
                onClick={handleSubmit}
              >
                Submit
              </CButton>
              <CButton
                startIcon={<FaClipboardCheck />}
                textTransform="capitalize"
                className="!px-4"
                variant="outlined"
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
                    onChange={(value) => handleInputChange(index, value)}
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
        </div>
      )}
    </>
  );
};

export default ListenLesson;
