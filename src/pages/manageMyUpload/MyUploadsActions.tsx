import { useNavigate } from "react-router-dom";
import { ROUTES_CONSTANTS } from "../../routers/constants";
import { FaPenToSquare } from "react-icons/fa6";
import { FaTrash } from "react-icons/fa";
import { useDeleteLessonMutation } from "../../hooks/lesson/delete-lesson.hook";
import { useDeleteChallengeMutation } from "../../hooks/challenge/delete-challenge.hook";
import { notify } from "../../utils/notifyUtils";
import CActionButton from "../../components/molecules/cActionButton/cActionButton";

export interface MyUploadsActionsProps {
  id: string;
  type: "lesson" | "challenge";
}

export const MyUploadsActions = ({ id, type }: MyUploadsActionsProps) => {
  const navigate = useNavigate();
  const { mutate: deleteLesson } = useDeleteLessonMutation();
  const { mutate: deleteChallenge } = useDeleteChallengeMutation();

  const handleDelete = (e: React.MouseEvent) => {
    e.stopPropagation();

    const onSuccess = () => {
      notify.success(`Deleted ${type} successfully`);
      navigate(ROUTES_CONSTANTS.MANAGE_MY_UPLOAD.BASE);
    };

    const onError = () => {
      notify.error(`Failed to delete ${type}`);
    };

    if (type === "lesson") {
      deleteLesson({ lessonId: id }, { onSuccess, onError });
    } else {
      deleteChallenge({ challengeId: id }, { onSuccess, onError });
    }
  };

  const handleEdit = (e: React.MouseEvent) => {
    e.stopPropagation();
    const route =
      type === "challenge"
        ? ROUTES_CONSTANTS.MANAGE_MY_UPLOAD.EDIT.CHALLENGE
        : ROUTES_CONSTANTS.MANAGE_MY_UPLOAD.EDIT.LESSON;

    navigate(route.replace(":id", id));
  };

  return (
    <>
      <CActionButton
        title="Edit"
        onClick={handleEdit}
        icon={<FaPenToSquare />}
      />
      <CActionButton title="Delete" onClick={handleDelete} icon={<FaTrash />} />
    </>
  );
};

export default MyUploadsActions;
