export interface ITextArea {
  maxRows?: number;
  minRows?: number;
  maxLength?: number;
  ariaLabel?: string;
  placeholder?: string;
  className?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  disabled?: boolean;
}
