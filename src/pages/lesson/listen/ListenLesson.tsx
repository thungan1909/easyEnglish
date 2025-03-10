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

const ListenLesson = () => {
  const { id } = useParams();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const type = queryParams.get("type");

  const { data: lesson } = useGetLessonById(id ?? "");
  return (
    <div className="mt-16 p-8 md:p-16 flex flex-col space-y-6 " key={id}>
      <div className="flex flex-col space-y-8  justify-center items-center ">
        <div className="flex gap-8">
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
        <div className="flex gap-2 flex-wrap">
          {lesson?.words?.map((word, index) => (
            <span key={index} className="">
              {word === "" ? (
                <CTextField
                  className=" bg-purple-100"
                  sx={{
                    width: `${word.length * 30}px`,
                    minHeight: "20px",
                    minWidth: "40px",
                  }}
                />
              ) : (
                <span className="whitespace-pre">{word}</span>
              )}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ListenLesson;
