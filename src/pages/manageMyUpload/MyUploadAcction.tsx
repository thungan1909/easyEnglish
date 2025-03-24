import { useNavigate } from "react-router-dom";
import { ROUTES_CONSTANTS } from "../../routers/constants";
import { FaPenToSquare } from "react-icons/fa6";
import { FaTrash } from "react-icons/fa";
import ActionButton from "../lesson/components/ActionButton";

export const MyUploadsActions = ({ lessonId }: { lessonId: string }) => {
  const navigate = useNavigate();

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
        onClick={(e) => e.stopPropagation()}
        icon={<FaTrash />}
      />
    </>
  );
};

export default MyUploadsActions;
