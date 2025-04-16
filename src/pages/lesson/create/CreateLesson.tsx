import { useNavigate } from "react-router-dom";
import { useAuthentication } from "../../../hooks/auth/login.hook";
import { useCreateLessonMutation } from "../../../hooks/lesson/create-lesson.hook";
import { useUploadFileMutation } from "../../../hooks/upload/upload-file.hook";
import { notify } from "../../../utils/notifyUtils";
import { ROUTES_CONSTANTS } from "../../../routers/constants";
import CPageTitle from "../../../components/atoms/CPageTitle/CPageTitle";
import LoginReminder from "../../common-pages/LoginReminder";
import { useLessonForm } from "../components/useLessonForm";
import LessonForm from "../components/LessonForm";

const CreateLesson = () => {
  const { isAuth } = useAuthentication();
  const navigate = useNavigate();

  const { mutate: createLesson } = useCreateLessonMutation();
  const { mutate: uploadFile } = useUploadFileMutation();

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
        notify.success("Lesson created successfully");
        navigate(ROUTES_CONSTANTS.LESSON.BASE);
      },
      onError: () => {
        notify.error("Failed to create lesson.");
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
          notify.error("Upload failed. Please try again.");
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
