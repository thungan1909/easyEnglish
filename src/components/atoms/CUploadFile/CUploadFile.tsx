import { Box, Typography } from "@mui/material";
import CButton from "../CButton/CButton";
import { useRef, useState } from "react";
import { FaCloudUploadAlt, FaFileAudio, FaTimes } from "react-icons/fa";

export type CUploadFileProps = {
  onChangeFileSelected?: (data: File) => void;
};

const CUploadFile = ({ onChangeFileSelected }: CUploadFileProps) => {
  const inputElement = useRef<HTMLInputElement | null>(null);
  const audioElement = useRef<HTMLAudioElement | null>(null);
  const [uploadFileName, setUploadFileName] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [audioURL, setAudioURL] = useState<string | null>(null);

  const handleFileChange = () => {
    if (inputElement.current?.files?.length) {
      const selectedFile = inputElement.current.files[0];

      if (selectedFile.type.startsWith("audio/")) {
        setUploadFileName(selectedFile.name);
        onChangeFileSelected?.(selectedFile);
        setAudioURL(URL.createObjectURL(selectedFile));
        setError(null);
      } else {
        setError("Only audio files are allowed.");
      }
    }
  };
  const onClickButton = () => {
    inputElement.current?.click(); // Trigger the hidden file input
  };

  const removeFile = () => {
    setUploadFileName(null);
    setError(null);

    if (audioURL) {
      URL.revokeObjectURL(audioURL);
      setAudioURL(null);
    }

    if (inputElement.current) {
      inputElement.current.value = "";
    }
  };

  return (
    <div className="border-2 border-dashed border-purple-600 p-6 flex flex-col items-center gap-3 rounded-lg justify-center">
      <input
        type="file"
        onChange={handleFileChange}
        ref={inputElement}
        accept="audio/*"
        hidden
      />

      {!uploadFileName && (
        <>
          <CButton onClick={onClickButton} size="large">
            <FaCloudUploadAlt size={28} />
          </CButton>
          <span>Click to upload audio file</span>
        </>
      )}

      {uploadFileName && (
        <div className="relative bg-purple-300 p-6 rounded-2xl">
          <CButton
            className="!absolute right-1 top-1"
            variant="text"
            onClick={removeFile}
          >
            <FaTimes size={28} />
          </CButton>
          <div className="flex items-center space-x-1 mt-4 max-w-[320px] line-clamp-1">
            <FaFileAudio size={28} />
            <Typography>{uploadFileName}</Typography>
          </div>
        </div>
      )}
      {error && (
        <Typography color="error" variant="caption">
          {error}
        </Typography>
      )}

      {audioURL && (
        <Box>
          <audio ref={audioElement} controls>
            <source src={audioURL} type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        </Box>
      )}
    </div>
  );
};

export default CUploadFile;
