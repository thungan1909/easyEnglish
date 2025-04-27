import { useMutation } from "@tanstack/react-query";
import { IHttpError } from "../../types/dtos/http";
import { UploadFileDTO, UploadFileResponse } from "../../types/dtos/upload.dto";
import { uploadFileMutation } from "../../apis/upload.api";

export const useUploadFile = () => {
  return useMutation<UploadFileResponse, IHttpError, UploadFileDTO>({
    mutationFn: async (data: UploadFileDTO) => {
      return uploadFileMutation.fn(data);
    },
  });
};
