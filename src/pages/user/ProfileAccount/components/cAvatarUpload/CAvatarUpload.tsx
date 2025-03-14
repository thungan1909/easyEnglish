import { Avatar, IconButton } from "@mui/material";
import { FaCamera } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";
import { getFirstCharAvatar } from "../../../../../utils/helpers/getFirstCharAvatar";
import CButton from "../../../../../components/atoms/CButton/CButton";
import { FaFloppyDisk } from "react-icons/fa6";
import { useUploadFileMutation } from "../../../../../hooks/upload/upload-file";
import { UploadFileResponse } from "../../../../../types/dtos/upload.dto";

export interface CAvatarUploadProps {
  avatarUrl?: string;
  username?: string;
  onUpload: (avatarUrl: string | File) => void;
  isUpdateAvatarSuccess?: boolean;
}

const CAvatarUpload = ({
  avatarUrl,
  username,
  onUpload,
  isUpdateAvatarSuccess,
}: CAvatarUploadProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const { mutate: uploadFileMutation } = useUploadFileMutation();

  const inputElement = useRef<HTMLInputElement | null>(null);
  const [avatarState, setAvatarState] = useState<{
    fileURL: string | null;
    selectedFile: File | null;
  }>({
    fileURL: null,
    selectedFile: null,
  });

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const objectURL = URL.createObjectURL(file);
      setAvatarState({ fileURL: objectURL, selectedFile: file });
      event.target.value = ""; // Reset input
    }
  };

  const triggerFileInput = () => {
    inputElement.current?.click();
  };

  const handleUpload = async () => {
    if (avatarState.selectedFile) {
      uploadFileMutation(
        { file: avatarState.selectedFile, type: "image" },
        {
          onSuccess: (data: UploadFileResponse) => {
            onUpload(data.secureUrl);
          },
          onError: (error) => {
            console.error(error);
            alert("Upload failed. Please try again.");
          },
        }
      );
    }
  };

  useEffect(() => {
    return () => {
      if (avatarState.fileURL) {
        URL.revokeObjectURL(avatarState.fileURL);
      }
    };
  }, [avatarState.fileURL]);

  // useEffect(() => {
  //   if (isUpdateAvatarSuccess) {
  //     setAvatarState((prev) => ({
  //       ...prev,
  //       fileURL: null, // Keep selected file if it exists
  //     }));
  //   }
  // }, [isUpdateAvatarSuccess, avatarUrl]);

  return (
    <div className="flex flex-col items-center">
      <div
        className="relative inline-block mt-3"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Avatar
          alt="user-avatar"
          className="!bg-purple-400"
          src={avatarState.fileURL || avatarUrl}
          sx={{ width: 72, height: 72 }}
        >
          {!avatarState.fileURL && !avatarUrl && getFirstCharAvatar(username)}
        </Avatar>

        {isHovered && (
          <div className="absolute inset-0 bg-gradient-to-r from-purple-200 bg-gradient-600 flex items-center justify-center rounded-full">
            <IconButton
              size="medium"
              onClick={triggerFileInput}
              aria-label="Upload new avatar"
              className="pointer-events-auto"
            >
              <FaCamera className="text-white" />
            </IconButton>
            <input
              type="file"
              onChange={handleFileChange}
              ref={inputElement}
              accept={`image/*`}
              hidden
            />
          </div>
        )}
      </div>

      {avatarState.fileURL && (
        <CButton
          className="!mt-2"
          variant="text"
          textTransform="capitalize"
          onClick={handleUpload}
          startIcon={<FaFloppyDisk />}
        >
          Save
        </CButton>
      )}
    </div>
  );
};

export default CAvatarUpload;
