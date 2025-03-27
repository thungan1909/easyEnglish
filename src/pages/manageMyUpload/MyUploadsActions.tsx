import { useNavigate } from "react-router-dom";
import { ROUTES_CONSTANTS } from "../../routers/constants";
import { FaPenToSquare } from "react-icons/fa6";
import { FaTrash } from "react-icons/fa";
import ActionButton from "../lesson/components/ActionButton";
import { useDeleteLessonMutation } from "../../hooks/lesson/delete-lesson.hook";
import { notify } from "../../utils/notify";
export interface MyUploadsActionsProps {
  id: string;
  type: "lesson" | "challenge";
}
export const MyUploadsActions = ({ id, type }: MyUploadsActionsProps) => {
  const navigate = useNavigate();
  const { mutate: deleteLessonMutation } = useDeleteLessonMutation();
  const { mutate: deleteChallengeMutation } = useDeleteLessonMutation();

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
    }
  };
  return (
    <>
      <ActionButton
        title="Edit"
        onClick={(e) => {
          e.stopPropagation();
          navigate(ROUTES_CONSTANTS.MANAGE_MY_UPLOAD.EDIT.replace(":id", id));
        }}
        icon={<FaPenToSquare />}
      />
      <ActionButton title="Delete" onClick={handleDelete} icon={<FaTrash />} />
    </>
  );
};

export default MyUploadsActions;
