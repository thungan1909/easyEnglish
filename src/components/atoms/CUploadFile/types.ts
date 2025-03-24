export type CUploadFileProps = {
  onChangeFileSelected?: (data: File) => void;
  accept: "image" | "audio";
  title?: string;
  defaultFileURL?: string | File;
};
