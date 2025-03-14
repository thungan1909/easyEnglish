import { Avatar, IconButton } from "@mui/material";
import { FaCamera } from "react-icons/fa";
import { useRef, useState } from "react";
import { getFirstCharAvatar } from "../../../../../utils/helpers/getFirstCharAvatar";
import CButton from "../../../../../components/atoms/CButton/CButton";

export interface CAvatarUploadProps {
  avatarUrl?: string;
  username?: string;
  onUpload?: (file: File) => void;
}

const CAvatarUpload = ({
  avatarUrl,
  username,
  onUpload,
}: CAvatarUploadProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const inputElement = useRef<HTMLInputElement | null>(null);
  const [fileURL, setFileURL] = useState<string | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      console.log("Selected file:", file);
      setFileURL(URL.createObjectURL(file));
      onUpload?.(file);
      event.target.value = "";
    }
  };

  const triggerFileInput = () => {
    inputElement.current?.click();
  };

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
          src={fileURL || avatarUrl}
          sx={{ width: 72, height: 72 }}
        >
          {!avatarUrl && getFirstCharAvatar(username)}
        </Avatar>

        {isHovered && (
          <div className="absolute inset-0 bg-gradient-to-r from-purple-200 bg-gradient-600 flex items-center justify-center rounded-full">
            <IconButton size="medium" onClick={triggerFileInput}>
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

      {fileURL && (
        <CButton className="w-30" variant="text">
          Save
        </CButton>
      )}
    </div>
  );
};

export default CAvatarUpload;
