import { useNavigate } from "react-router-dom";
import { useAuthentication } from "../../../hooks/auth/login.hook";
import { useCreateChallengeMutation } from "../../../hooks/challenge/create-challenge.hook";
import { useUploadFileMutation } from "../../../hooks/upload/upload-file.hook";
import { useChallengeForm } from "../form/useChallengeForm";
import { notify } from "../../../utils/notify";
import { ROUTES_CONSTANTS } from "../../../routers/constants";
import LoginReminder from "../../common-pages/LoginReminder";
import ChallengeForm from "../form/ChallengeForm";
import CPageTitle from "../../../components/atoms/CPageTitle/CPageTitle";

const CreateChallenge = () => {
  const { isAuth } = useAuthentication();
  const navigate = useNavigate();

  const { mutate: createChallenge } = useCreateChallengeMutation();
  const { mutate: uploadFile } = useUploadFileMutation();

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
  } = useChallengeForm({}, (data) =>
    createChallenge(data, {
      onSuccess: () => {
        notify.success("Challenge created successfully");
        navigate(ROUTES_CONSTANTS.CHALLENGE.BASE);
      },
      onError: () => {
        notify.error("Failed to create challenge.");
      },
    })
  );

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
          <CPageTitle title=" Create a New Challenge" />
          <ChallengeForm
            control={control}
            onSubmit={onSubmit}
            handleSubmit={handleSubmit}
            isValid={isValid}
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

export default CreateChallenge;
