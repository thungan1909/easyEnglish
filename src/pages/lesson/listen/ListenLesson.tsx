import { useLocation, useParams } from "react-router-dom";
import CButton from "../../../components/atoms/CButton/CButton";
import {
  FaClipboardCheck,
  FaExclamationTriangle,
  FaLightbulb,
  FaPaperPlane,
  FaRegSave,
} from "react-icons/fa";
import { useGetLessonById } from "../../../hooks/lesson/get-lesson.hook";
import CTextField from "../../../components/atoms/CTextField/CTextField";
import AudioSection from "./AudioSection";
import { Typography } from "@mui/material";

const ListenLesson = () => {
  const { id } = useParams();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const type = queryParams.get("type");
  const { data: lesson } = useGetLessonById(id ?? "");

  return (
    <div className="" key={id}>
      <div className="!space-y-8 mt-16 md:p-16 flex flex-col items-center justify-center">
        <Typography variant="h5">{lesson?.title}</Typography>
        <div className="flex gap-8 flex-wrap items-center justify-center">
          <CButton
            startIcon={<FaPaperPlane />}
            textTransform="capitalize"
            className="!px-4"
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
          {(type === "hint"
            ? lesson?.wordsWithHint
            : lesson?.wordsWithoutHint
          )?.map((word, index) => (
            <span key={index} className="">
              {word === "" ? (
                <CTextField
                  className=" bg-purple-100"
                  sx={{
                    width: `${Math.max(word.length * 10, 40)}px`, // Ensure minimum width
                    minHeight: "20px",
                  }}
                />
              ) : (
                <span className="whitespace-pre">{word}</span>
              )}
            </span>
          ))}
        </div>
      </div>
      <div className="fixed bottom-0 w-full">
        {lesson?.audioFile && (
          <AudioSection fileURL={lesson?.audioFile as string} />
        )}
      </div>
    </div>
  );
};

export default ListenLesson;
