import { useNavigate } from "react-router-dom";
import { ROUTES_CONSTANTS } from "../../routers/constants";
import { FaPenToSquare } from "react-icons/fa6";
import { FaTrash } from "react-icons/fa";
import ActionButton from "../lesson/components/ActionButton";
import { useDeleteLessonMutation } from "../../hooks/lesson/delete-lesson.hook";
import { notify } from "../../utils/notify";
import { useDeleteChallengeMutation } from "../../hooks/challenge/delete-challenge.hook";
export interface MyUploadsActionsProps {
  id: string;
  type: "lesson" | "challenge";
}
export const MyUploadsActions = ({ id, type }: MyUploadsActionsProps) => {
  const navigate = useNavigate();
  const { mutate: deleteLessonMutation } = useDeleteLessonMutation();
  const { mutate: deleteChallengeMutation } = useDeleteChallengeMutation();

  const handleDelete = (e: React.MouseEvent<Element, MouseEvent>) => {
    e.stopPropagation();
    if (type === "lesson") {
      deleteLessonMutation(
        {
          lessonId: id,
        },
        {
          onSuccess: () => {
            notify.success("Delete lesson successfully");
            navigate(ROUTES_CONSTANTS.MANAGE_MY_UPLOAD.BASE);
          },
          onError: () => {
            notify.error("Failed to edit lesson.");
          },
        }
      );
    } else {
      deleteChallengeMutation(
        {
          challengeId: id,
        },
        {
          onSuccess: () => {
            notify.success("Delete challenge successfully");
            navigate(ROUTES_CONSTANTS.MANAGE_MY_UPLOAD.BASE);
          },
          onError: () => {
            notify.error("Failed to delete challenge.");
          },
        }
      );
    }
  };

  const handleEdit = (e: React.MouseEvent<Element, MouseEvent>) => {
    e.stopPropagation();
    let routes = "";
    if (type === "challenge") {
      routes = ROUTES_CONSTANTS.MANAGE_MY_UPLOAD.EDIT.CHALLENGE;
    } else {
      routes = ROUTES_CONSTANTS.MANAGE_MY_UPLOAD.EDIT.LESSON;
    }
    navigate(routes.replace(":id", id));
  };

  return (
    <>
      <ActionButton
        title="Edit"
        onClick={handleEdit}
        icon={<FaPenToSquare />}
      />
      <ActionButton title="Delete" onClick={handleDelete} icon={<FaTrash />} />
    </>
  );
};

export default MyUploadsActions;
