import { ReactNode } from "react";

export interface ModalProps {
  title?: string | ReactNode;
  description?: string | ReactNode;
  isOpen: boolean;
  onClose: () => void;
  onConfirm?: () => void;
  onCancel?: () => void;
  confirmText?: string;
  cancelText?: string;
}
