import { useNavigate, useParams } from "react-router-dom";
import { useAuthentication } from "../../../hooks/auth/login.hook";
import { useGetChallengeById } from "../../../hooks/challenge/get-challenge.hook";
import { useUpdateChallengeMutation } from "../../../hooks/challenge/update-challenge.hook";
import { useUploadFileMutation } from "../../../hooks/upload/upload-file.hook";
import { useMemo } from "react";
import { useChallengeForm } from "../form/useChallengeForm";
import { notify } from "../../../utils/notifyUtils";
import { ROUTES_CONSTANTS } from "../../../routers/constants";
import CPageTitle from "../../../components/atoms/CPageTitle/CPageTitle";
import ChallengeForm from "../form/ChallengeForm";
import LoginReminder from "../../common-pages/LoginReminder";

const UpdateChallenge = () => {
  const { isAuth } = useAuthentication();
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const { data: challenge } = useGetChallengeById(id ?? "");
  const { mutate: updateChallenge } = useUpdateChallengeMutation();
  const { mutate: uploadFile } = useUploadFileMutation();

  const defaultValues = useMemo(() => {
    return { ...challenge };
  }, [challenge]);

  const {
    control,
    onSubmit,
    handleSubmit,
    isValid,
    searchTerm,
    setSearchTerm,
    selectedLessons,
    filteredLessons,
    toggleLessonSelection,
    handleToggleAll,
    isAllSelected,
    setValue,
  } = useChallengeForm(defaultValues, (data) => {
    if (!id) {
      notify.error("Challenge ID is missing");
      return;
    }

    updateChallenge(
      {
        challengeId: id,
        data,
      },
      {
        onSuccess: () => {
          notify.success("Challenge update successfully");
          navigate(ROUTES_CONSTANTS.CHALLENGE.DETAIL.replace(":id", id));
        },
        onError: () => {
          notify.error("Failed to update challenge.");
        },
      }
    );
  });

  const handleFileUpload = async (file: File, type: "audio" | "image") => {
    uploadFile(
      { file, type },
      {
        onSuccess: (data) => {
          setValue("imageFile", data.secureUrl, {
            shouldValidate: true,
          });
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
        <>
          <CPageTitle title="Update Challenge" />
          <ChallengeForm
            control={control}
            onSubmit={onSubmit}
            isValid={isValid}
            handleSubmit={handleSubmit}
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            selectedLessons={selectedLessons}
            filteredLessons={filteredLessons}
            toggleLessonSelection={toggleLessonSelection}
            handleToggleAll={handleToggleAll}
            isAllSelected={isAllSelected}
            handleFileUpload={handleFileUpload}
          />
        </>
      ) : (
        <LoginReminder />
      )}
    </>
  );
};

export default UpdateChallenge;
