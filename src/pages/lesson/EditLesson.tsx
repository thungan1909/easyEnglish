import { useNavigate, useParams } from "react-router-dom";
import { useGetLessonById } from "../../hooks/lesson/get-lesson.hook";
import { useUploadFileMutation } from "../../hooks/upload/upload-file.hook";
import { useEditLessonMutation } from "../../hooks/lesson/edit-lesson.hook";
import { notify } from "../../utils/notify";
import { useLessonForm } from "../../hookForm/useLessonForm";
import { ROUTES_CONSTANTS } from "../../routers/constants";
import { useAuthentication } from "../../hooks/auth/login.hook";
import LoginReminder from "../common-pages/LoginReminder";
import CPageTitle from "../../components/atoms/CPageTitle/CPageTitle";
import LessonForm from "./LessonForm";
import { useMemo } from "react";

const EditLesson = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const { isAuth } = useAuthentication();

  const { data: lesson } = useGetLessonById(id ?? "");
  const { mutate: uploadFile } = useUploadFileMutation();
  const { mutate: editLesson } = useEditLessonMutation();

  const defaultValues = useMemo(() => {
    return { ...lesson };
  }, [lesson]);

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
  } = useLessonForm(defaultValues, (data) => {
    if (!id) {
      notify.error("Lesson ID is missing");
      return;
    }
    editLesson(
      { lessonId: id, data },
      {
        onSuccess: () => {
          notify.success("Edit lesson successfully");
          navigate(ROUTES_CONSTANTS.MANAGE_MY_UPLOAD.BASE);
        },
        onError: () => {
          notify.error("Failed to edit lesson.");
        },
      }
    );
  });

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
          <CPageTitle title="Edit lesson" />
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
          />
        </div>
      ) : (
        <LoginReminder />
      )}
    </>
  );
};

export default EditLesson;
