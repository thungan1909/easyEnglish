export interface UploadFileDTO {
  file: File;
  type: "audio" | "image";
}

// Define the response type
export type UploadFileResponse = {
  secureUrl: string;
  type: "audio" | "image";
};
