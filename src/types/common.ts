export interface IOption<TValue extends string | number | boolean = string> {
  label: string;
  value: TValue;
  disabled?: boolean;
}
