import { CSSProperties, ReactNode } from "react";

export interface ITextField {
    children?: string | ReactNode;
    className?: string;
    type?: "text" | "password" | "email" | "number" | "tel";
    disabled?: boolean;
    customStyle?: CSSProperties;
    label?: string;
    placeholder?: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void; 
    onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
    maxLength?: number;
    inputRef?: React.Ref<HTMLInputElement>; 
  }