import { useNavigate } from "react-router-dom";
import { ROUTES_CONSTANTS } from "../../routers/constants";
import { FaPenToSquare } from "react-icons/fa6";
import { FaTrash } from "react-icons/fa";
import { useDeleteLessonMutation } from "../../hooks/lesson/delete-lesson.hook";
import { useDeleteChallengeMutation } from "../../hooks/challenge/delete-challenge.hook";
import { notify } from "../../utils/notifyUtils";
import CActionButton from "../../components/molecules/cActionButton/cActionButton";
import CModal from "../../components/atoms/CModal/CModal";
import { useState } from "react";
import { capitalize } from "@mui/material";

export interface MyUploadsActionsProps {
  id: string;
  type: "lesson" | "challenge";
}

export const MyUploadsActions = ({ id, type }: MyUploadsActionsProps) => {
  const navigate = useNavigate();

  const [isDeleteOpen, setIsDeleteOpen] = useState(false);

  const { mutate: deleteLesson } = useDeleteLessonMutation();
  const { mutate: deleteChallenge } = useDeleteChallengeMutation();

  const handleDeleteConfirm = () => {
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

  const handleOpenDelete = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsDeleteOpen(true);
  };

  const handleCloseDelete = () => {
    setIsDeleteOpen(false);
  };

  return (
    <>
      <CActionButton
        title="Edit"
        onClick={handleEdit}
        icon={<FaPenToSquare />}
      />
      <CActionButton
        title="Delete"
        onClick={handleOpenDelete}
        icon={<FaTrash />}
      />
      <CModal
        isOpen={isDeleteOpen}
        title={`Delete ${capitalize(type)}`}
        confirmText="Delete"
        cancelText="Cancel"
        onConfirm={handleDeleteConfirm}
        onCancel={handleCloseDelete}
        onClose={handleCloseDelete}
        description={`Are you sure you want to delete this ${type}? This action cannot be undone.`}
      />
    </>
  );
};

export default MyUploadsActions;
