import { useNavigate } from "react-router-dom";
import { ROUTES_CONSTANTS } from "../../routers/constants";
import { FaPenToSquare } from "react-icons/fa6";
import { FaTrash } from "react-icons/fa";
import ActionButton from "../lesson/components/ActionButton";
import { useDeleteLessonMutation } from "../../hooks/lesson/delete-lesson.hook";
import { notify } from "../../utils/notify";

export const MyUploadsActions = ({ lessonId }: { lessonId: string }) => {
  const navigate = useNavigate();
  const { mutate: deleteLessonMutation } = useDeleteLessonMutation();

  return (
    <>
      <ActionButton
        title="Edit"
        onClick={(e) => {
          e.stopPropagation();
          navigate(
            ROUTES_CONSTANTS.MANAGE_MY_UPLOAD.EDIT.replace(":id", lessonId)
          );
        }}
        icon={<FaPenToSquare />}
      />
      <ActionButton
        title="Delete"
        onClick={(e) => {
          e.stopPropagation();

          deleteLessonMutation(
            {
              lessonId: lessonId,
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
        }}
        icon={<FaTrash />}
      />
    </>
  );
};

export default MyUploadsActions;
