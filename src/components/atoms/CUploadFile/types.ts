import { ReactNode } from "react";

export type FileInputProps = {
  /**
   *   If `true`, the file input will have a the default height for the error.
   */
  hasDefaultErrorSpace?: boolean;

  /**
   * The default file name of file input.
   */
  defaultFileName?: string;

  /**
   * Callback function triggered on change of the file input value.
   */
  onChangeFileSelected?: (data?: File) => void;

  /**
   * Callback function triggered on download the default file.
   */
  onClickedDownload?: () => void;

  /**
   * The error message will be displayed below the file input.
   */
  errorMessage?: string;

  /**
   * Width of file input.
   */
  width?: string;

  /**
   * Width of file name.
   */
  linkWidth?: string;

  /**
   * Callback function when you click 'Button'.If you don't define it,  the end 'Button' will not be displayed
   */
  onEnroll?: (file: File, handleRemoveFile?: () => void) => void;

  /**
   * Displayed when no file has been uploaded.
   */
  hint?: ReactNode;

  /**
   * 	If 'true', the component is disabled.
   */
  disabled?: boolean;

  /**
   * Label of end 'Button'.
   */
  buttonLabel?: string;
};
