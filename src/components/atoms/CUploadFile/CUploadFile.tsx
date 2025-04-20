import { Box, Typography } from "@mui/material";
import CButton from "../CButton/CButton";
import { useEffect, useRef, useState } from "react";
import {
  FaCloudUploadAlt,
  FaFileAudio,
  FaImage,
  FaTimes,
} from "react-icons/fa";
import { CUploadFileProps } from "./types";

const CUploadFile = ({
  onChangeFileSelected,
  accept,
  title,
  defaultFileURL,
}: CUploadFileProps) => {
  const inputElement = useRef<HTMLInputElement | null>(null);
  const [uploadFileName, setUploadFileName] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [fileURL, setFileURL] = useState<string | null>(null);

  const handleFileChange = () => {
    if (inputElement.current?.files?.length) {
      const selectedFile = inputElement.current.files[0];

      if (selectedFile.type.startsWith(`${accept}`)) {
        setUploadFileName(selectedFile.name);
        onChangeFileSelected?.(selectedFile);
        setFileURL(URL.createObjectURL(selectedFile));
        setError(null);
      } else {
        setError(`Only ${accept} files are allowed.`);
      }
    }
  };
  const onClickButton = () => {
    inputElement.current?.click();
  };

  const removeFile = () => {
    setUploadFileName(null);
    setError(null);

    if (fileURL) {
      URL.revokeObjectURL(fileURL);
      setFileURL(null);
    }

    if (inputElement.current) {
      inputElement.current.value = "";
    }
  };

  useEffect(() => {
    if (defaultFileURL) {
      if (typeof defaultFileURL === "string") {
        setFileURL(defaultFileURL);
        setUploadFileName(defaultFileURL.split("/").pop() || "Default Audio");
      } else if (defaultFileURL instanceof File) {
        setFileURL(URL.createObjectURL(defaultFileURL));
        setUploadFileName(defaultFileURL.name);
      }
    }
  }, [defaultFileURL]);

  return (
    <div
      className="border-2 border-dashed  p-6 flex flex-col gap-3 rounded-2xl items-center"
      style={{ borderColor: "var(--main-purple-600)" }}
    >
      <Typography variant="h6" className="!mb-2">
        {title}
      </Typography>
      <input
        type="file"
        onChange={handleFileChange}
        ref={inputElement}
        accept={`${accept}/*`}
        hidden
      />

      {!uploadFileName && (
        <>
          <CButton onClick={onClickButton} size="large">
            <FaCloudUploadAlt size={28} />
          </CButton>
          <span className="text-gray-500 text-sm">
            Click to upload {accept} file
          </span>
        </>
      )}

      {uploadFileName && (
        <div
          className="relative  p-4 rounded-2xl"
          style={{ backgroundColor: "var(--main-color)" }}
        >
          <CButton
            className="!absolute right-1 top-1"
            variant="text"
            onClick={removeFile}
          >
            <FaTimes size={24} />
          </CButton>
          <div className="flex items-center space-x-1 mt-2 max-w-[360px] line-clamp-1">
            {accept === "image" ? (
              <FaImage size={28} />
            ) : (
              <FaFileAudio size={28} />
            )}
            <Typography>{uploadFileName}</Typography>
          </div>
        </div>
      )}

      {error && (
        <Typography color="error" variant="caption">
          {error}
        </Typography>
      )}

      {fileURL && accept === "audio" && (
        <Box>
          <audio controls>
            <source src={fileURL} type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        </Box>
      )}
    </div>
  );
};

export default CUploadFile;
