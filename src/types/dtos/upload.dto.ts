export interface UploadFileDTO {
  file: File;
  type: "audio" | "image";
}

export type UploadFileResponse = {
  secureUrl: string;
  type: "audio" | "image";
};
