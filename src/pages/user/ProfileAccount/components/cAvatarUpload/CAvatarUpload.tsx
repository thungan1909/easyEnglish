import { Avatar, IconButton } from "@mui/material";
import { FaCamera } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";
import CButton from "../../../../../components/atoms/CButton/CButton";
import { FaFloppyDisk } from "react-icons/fa6";
import { useUploadFileMutation } from "../../../../../hooks/upload/upload-file.hook";
import { UploadFileResponse } from "../../../../../types/dtos/upload.dto";
import { useUpdateUserAvatarMutation } from "../../../../../hooks/user/update-user.hook";
import { notify } from "../../../../../utils/notifyUtils";
import { getFirstCharAvatar } from "../../../../../utils/avatarUtils";
import {
  invalidFileSizeUploadMsg,
  invalidFileUploadMsg,
} from "../../../../../constants/message/validationMsg";
import {
  updateAvatarErrorMsg,
  uploadFileErrorMsg,
} from "../../../../../constants/message/errorMsg";
import { updateAvatarSuccessMsg } from "../../../../../constants/message/successMsg";

export interface CAvatarUploadProps {
  avatarUrl?: string;
  username?: string;
}

const CAvatarUpload = ({ avatarUrl, username }: CAvatarUploadProps) => {
  const inputElement = useRef<HTMLInputElement | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>();
  const [fileURL, setFileURL] = useState<string | null>(avatarUrl ?? null);
  const [isHovered, setIsHovered] = useState(false);

  const { mutate: uploadFileMutation } = useUploadFileMutation();
  const { mutate: updateUserAvatarMutation } = useUpdateUserAvatarMutation();

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const allowedTypes = ["image/jpeg", "image/png", "image/webp"];
    if (!allowedTypes.includes(file.type)) {
      notify.error(invalidFileUploadMsg);
      return;
    }
    if (file.size > 5 * 1024 * 1024) {
      // 5MB limit
      notify.error(invalidFileSizeUploadMsg);
      return;
    }

    setFileURL(URL.createObjectURL(file));
    setSelectedFile(file);
    event.target.value = "";
  };

  const triggerFileInput = () => {
    inputElement.current?.click();
  };

  const handleUpload = async () => {
    if (!selectedFile) return;

    uploadFileMutation(
      { file: selectedFile, type: "image" },
      {
        onSuccess: (data: UploadFileResponse) => {
          setFileURL(data.secureUrl);

          updateUserAvatarMutation(
            {
              avatarUrl: data.secureUrl,
            },
            {
              onSuccess: () => {
                notify.success(updateAvatarSuccessMsg);
                setSelectedFile(null);
              },
              onError: () => notify.error(updateAvatarErrorMsg),
            }
          );
        },
        onError: () => notify.error(uploadFileErrorMsg),
      }
    );
  };

  useEffect(() => {
    return () => {
      if (fileURL) URL.revokeObjectURL(fileURL);
    };
  }, [fileURL]);

  return (
    <div className="flex flex-col items-center">
      <div
        className="relative inline-block mt-3"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Avatar
          alt="user-avatar"
          style={{ backgroundColor: "var(--main-color)" }}
          src={fileURL || avatarUrl}
          sx={{ width: 72, height: 72 }}
        >
          {!fileURL && !avatarUrl && getFirstCharAvatar(username)}
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

      {selectedFile && (
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
