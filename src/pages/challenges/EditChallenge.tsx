import { useNavigate, useParams } from "react-router-dom";
import { useAuthentication } from "../../hooks/auth/login.hook";
import { useUpdateChallengeMutation } from "../../hooks/challenge/update-challenge.hook";
import { useUploadFileMutation } from "../../hooks/upload/upload-file.hook";
import { useChallengeForm } from "../../hookForm/useChallengeForm";
import { notify } from "../../utils/notify";
import { ROUTES_CONSTANTS } from "../../routers/constants";
import CPageTitle from "../../components/atoms/CPageTitle/CPageTitle";
import ChallengeForm from "../manageMyUpload/challenge/ChallengeForm";
import LoginReminder from "../common-pages/LoginReminder";
import { useGetChallengeById } from "../../hooks/challenge/get-challenge.hook";
import { useMemo } from "react";

const EditChallenge = () => {
  const { isAuth } = useAuthentication();
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const { data: challenge } = useGetChallengeById(id ?? "");

  const { mutate: updateChallengeMutation } = useUpdateChallengeMutation();
  const { mutate: uploadFileMutation } = useUploadFileMutation();

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

    updateChallengeMutation(
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
    uploadFileMutation(
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
        <div>
          <CPageTitle title="Edit Challenge" />
          <ChallengeForm
            control={control}
            onSubmit={onSubmit}
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
        </div>
      ) : (
        <LoginReminder />
      )}
    </>
  );
};

export default EditChallenge;
