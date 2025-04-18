import { useNavigate, useParams } from "react-router-dom";
import { useGetLessonById } from "../../../hooks/lesson/get-lesson.hook";
import { useUploadFileMutation } from "../../../hooks/upload/upload-file.hook";
import { useUpdateLessonMutation } from "../../../hooks/lesson/update-lesson.hook";
import { notify } from "../../../utils/notifyUtils";
import { ROUTES_CONSTANTS } from "../../../routers/constants";
import { useAuthentication } from "../../../hooks/auth/login.hook";
import LoginReminder from "../../common-pages/LoginReminder";
import CPageTitle from "../../../components/atoms/CPageTitle/CPageTitle";
import { useMemo } from "react";
import { useLessonForm } from "../components/useLessonForm";
import LessonForm from "../components/LessonForm";
import { invalidLessonIdMsg } from "../../../constants/message/validationMsg";
import { editLessonSuccessMsg } from "../../../constants/message/successMsg";
import {
  editLessonErrorMsg,
  uploadFileErrorMsg,
} from "../../../constants/message/errorMsg";

const UpdateLesson = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const { isAuth } = useAuthentication();

  const { data: lesson } = useGetLessonById(id ?? "");
  const { mutate: uploadFile } = useUploadFileMutation();
  const { mutate: updateLesson } = useUpdateLessonMutation();

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
      notify.error(invalidLessonIdMsg);
      return;
    }
    updateLesson(
      { lessonId: id, data },
      {
        onSuccess: () => {
          notify.success(editLessonSuccessMsg);
          navigate(ROUTES_CONSTANTS.MANAGE_MY_UPLOAD.BASE);
        },
        onError: () => {
          notify.error(editLessonErrorMsg);
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
          notify.error(uploadFileErrorMsg);
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
            isEdit={true}
          />
        </div>
      ) : (
        <LoginReminder />
      )}
    </>
  );
};

export default UpdateLesson;
