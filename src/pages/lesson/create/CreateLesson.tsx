import { useNavigate } from "react-router-dom";
import { useAuthentication } from "../../../hooks/auth/login.hook";
import { useCreateLesson } from "../../../hooks/lesson/create-lesson.hook";
import { useUploadFile } from "../../../hooks/upload/upload-file.hook";
import { notify } from "../../../utils/notifyUtils";
import { ROUTES_CONSTANTS } from "../../../routers/constants";
import CPageTitle from "../../../components/atoms/CPageTitle/CPageTitle";
import LoginReminder from "../../common-pages/LoginReminder";
import { useLessonForm } from "../components/useLessonForm";
import LessonForm from "../components/LessonForm";
import { createLessonSuccessMsg } from "../../../constants/message/successMsg";
import {
  createLessonErrorMsg,
  uploadFileErrorMsg,
} from "../../../constants/message/errorMsg";

const CreateLesson = () => {
  const { isAuth } = useAuthentication();
  const navigate = useNavigate();

  const { mutate: createLesson } = useCreateLesson();
  const { mutate: uploadFile } = useUploadFile();

  const {
    control,
    onSubmit,
    handleSubmit,
    isValid,
    setValue,
    lessonWords,
    isHintValid,
    generateWords,
    originalWords,
    lessonContent,
  } = useLessonForm({}, (data) =>
    createLesson(data, {
      onSuccess: () => {
        notify.success(createLessonSuccessMsg);
        navigate(ROUTES_CONSTANTS.LESSON.BASE);
      },
      onError: () => {
        notify.error(createLessonErrorMsg);
      },
    })
  );

  const handleFileUpload = async (file: File, type: "audio" | "image") => {
    uploadFile(
      { file, type },
      {
        onSuccess: (data) => {
          setValue(
            type === "audio" ? "audioFile" : "imageFile",
            data.secureUrl,
            {
              shouldValidate: true,
            }
          );
        },
        onError: () => {
          notify.error(uploadFileErrorMsg);
        },
      }
    );
  };

  return (
    <>
      {isAuth ? (
        <div>
          <CPageTitle title="Create a new lesson" />
          <LessonForm
            control={control}
            onSubmit={onSubmit}
            handleSubmit={handleSubmit}
            isValid={isValid}
            handleFileUpload={handleFileUpload}
            lessonWords={lessonWords}
            isHintValid={isHintValid}
            generateWords={generateWords}
            originalWords={originalWords}
            lessonContent={lessonContent}
            isEdit={false}
          />
        </div>
      ) : (
        <LoginReminder />
      )}
    </>
  );
};

export default CreateLesson;
