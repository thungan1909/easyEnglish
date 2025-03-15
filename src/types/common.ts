import { JSX } from "react";

export interface IOption<TValue extends string | number | boolean = string> {
  label: string;
  value: TValue;
  disabled?: boolean;
}

export type TMenuItem = {
    href: string;
    label: string;
    icon?: JSX.Element | null;
  };