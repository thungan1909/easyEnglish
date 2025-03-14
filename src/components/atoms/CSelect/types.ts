import { IOption } from "../../../types/common";

export interface ISelect {
  options: IOption<string>[];
  value?: string;
  onChangeValue: (value: string) => void;
  placeholder?: string;
  label?: string;
}
