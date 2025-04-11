import { useCreateChallengeMutation } from "../../../hooks/challenge/create-challenge.hook";
import { notify } from "../../../utils/notify";
import { useNavigate } from "react-router-dom";
import { useUploadFileMutation } from "../../../hooks/upload/upload-file.hook";
import { ROUTES_CONSTANTS } from "../../../routers/constants";
import CPageTitle from "../../../components/atoms/CPageTitle/CPageTitle";
import { useChallengeForm } from "../../../hookForm/useChallengeForm";
import { useAuthentication } from "../../../hooks/auth/login.hook";
import ChallengeForm from "../../manageMyUpload/challenge/ChallengeForm";
import LoginReminder from "../../common-pages/LoginReminder";
import { useGetCurrentUser } from "../../../hooks/user/user.hook";

const CreateChallenge = () => {
  const { isAuth } = useAuthentication();
  const navigate = useNavigate();
  const { data: currentUser } = useGetCurrentUser();

  const { mutate: createChallengeMutation } = useCreateChallengeMutation();
  const { mutate: uploadFileMutation } = useUploadFileMutation();

  const {
    control,
    onSubmit,
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
    createChallengeMutation(data, {
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
          <CPageTitle title=" Create a New Challenge" />
          <ChallengeForm
            control={control}
            onSubmit={onSubmit}
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
        </div>
      ) : (
        <LoginReminder />
      )}
    </>
  );
};

export default CreateChallenge;
