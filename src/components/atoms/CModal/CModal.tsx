import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import CButton from "../CButton/CButton";
import { ModalProps } from "./types";

const CModal = ({
  title,
  description,
  isOpen,
  onClose,
  onConfirm,
  onCancel,
  confirmText = "Yes",
  cancelText = "No",
}: ModalProps) => {
  return (
    <Dialog
      open={isOpen}
      onClose={onClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      fullWidth
    >
      {title && <DialogTitle id="modal-title">{title}</DialogTitle>}
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {description}
        </DialogContentText>
      </DialogContent>
      <DialogActions className="gap-4">
        {onCancel && (
          <CButton onClick={onCancel} variant="text" textTransform="capitalize">
            {cancelText}
          </CButton>
        )}
        {onConfirm && (
          <CButton
            onClick={onConfirm}
            isRounded
            textTransform="capitalize"
            className="w-[30%]"
          >
            {confirmText}
          </CButton>
        )}
      </DialogActions>
    </Dialog>
  );
};

export default CModal;
