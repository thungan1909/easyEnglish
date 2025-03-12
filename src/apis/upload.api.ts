import { UploadFileDTO, UploadFileResponse } from "../types/dtos/upload.dto";

export const uploadFileMutation = {
  name: "uploadFile",
  fn: async (data: UploadFileDTO): Promise<UploadFileResponse> => {
    const formData = new FormData();
    formData.append("file", data.file);
    formData.append("upload_preset", "ml_default");

    try {
      const res = await fetch(
        "https://api.cloudinary.com/v1_1/dfjtdhivs/upload",
        {
          method: "POST",
          body: formData,
        }
      );

      const response = await res.json();
      return { secureUrl: response.secure_url, type: data.type };
    } catch (error) {
      throw new Error("Upload failed");
    }
  },
};
