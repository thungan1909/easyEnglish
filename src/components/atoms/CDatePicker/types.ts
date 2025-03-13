import { Dayjs } from "dayjs";

export type TDatePicker = "date-picker" | "date-range-picker" | "month-picker";

export interface IDateTimePickerBase {
  /**
   * If `true`, the input will take up the full width of its container.
   */
  fullWidth?: boolean;
  /**
   * Message displayed when validating `false`
   */
  errorMessages?: string;
  /**
   * If `true`, the picker will be disable and the cursor is not-allowed.
   */
  disabled?: boolean;

  /**
   * If Date time picker is use in user page or not.
   */
  isUseInUserPage?: boolean;
}

export interface ICoreDateTimePicker extends IDateTimePickerBase {
  /**
   * If it is `string`, this `string` must to match the `format`
   */
  minDate?: string | Dayjs | null;
  /**
   * If it is `string`, this `string` must to match the `format`
   */
  maxDate?: string | Dayjs | null;
  /**
   * Callback fired when the value changes.
   */
  onChange: (date: string | Dayjs | null) => void;
  /**
   * The format of `date` is displayed and the date as a string is passed
   */
  format?: string;
  /**
   * The text field value.
   */
  value: string | Dayjs | null;
  /**
   * If `true`, has can choose time.
   */
  isShowTime?: boolean;
  /**
   * Text field placeholder.
   */
  placeholder?: string;
  /**
   * Type of date picker component
   */
  type: TDatePicker;
  /**
   * If true, in show full time mode, the value is start of day.
   */
  isStartDay?: boolean;
  /**
   * If true, in show full time mode, the value is start of day.
   */
  isEndDay?: boolean;
  /**
   * Handle neo date range picker.
   */
  hasTypeTime?: boolean;
}

export type ICoreDateTimePickerView = {
  minDate?: Dayjs | null;
  maxDate?: Dayjs | null;
  value: Dayjs | null;
  onClose: () => void;
  onChange: (date: Dayjs | null) => void;
  fullWidth?: boolean;
  errorMessages?: string;
  isShowTime?: boolean;
  disable?: boolean;
  type: TDatePicker;
  /**
   * If true, in show full time mode, the value is start of day.
   */
  isStartDay?: boolean;
  /**
   * If true, in show full time mode, the value is start of day.
   */
  isEndDay?: boolean;
  /**
   * Handle neo date range picker.
   */
  hasTypeTime?: boolean;
};

export interface IDatePicker extends IDateTimePickerBase {
  minDate?: Dayjs | null;
  maxDate?: Dayjs | null;
  value: Dayjs | null;
  onClose: () => void;
  onChange: (date: Dayjs | null) => void;
  fullWidth?: boolean;
  errorMessages?: string;
  isShowTime?: boolean;
  disable?: boolean;
  type: TDatePicker;
  /**
   * If true, in show full time mode, the value is start of day.
   */
  isStartDay?: boolean;
  /**
   * If true, in show full time mode, the value is start of day.
   */
  isEndDay?: boolean;
  /**
   * Handle neo date range picker.
   */
  hasTypeTime?: boolean;
}
