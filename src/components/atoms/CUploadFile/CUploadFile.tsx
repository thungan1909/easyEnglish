import { Box, Typography } from "@mui/material";
import CButton from "../CButton/CButton";
import { useRef, useState } from "react";

export type CUploadFileProps = {
  onChangeFileSelected?: (data: File) => void;
}

const CUploadFile = ({ onChangeFileSelected }: CUploadFileProps) => {
  const inputElement = useRef<HTMLInputElement | null>(null);
  const audioElement = useRef<HTMLAudioElement | null> (null)
  const [uploadFileName, setUploadFileName] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
const [audioURL, setAudioURL] = useState<string | null>(null);

  const handleFileChange = () => {
    console.log("This")
    if (inputElement.current?.files?.length) {
      const selectedFile = inputElement.current.files[0];

      if (selectedFile.type.startsWith("audio/")) {
        setUploadFileName(selectedFile.name);
        onChangeFileSelected?.(selectedFile);
        setAudioURL(URL.createObjectURL(selectedFile))
        setError(null);
      } else {
        setError("Only audio files are allowed.")
      }
    }
  }
  const onClickButton = () => {
    inputElement.current?.click(); // Trigger the hidden file input
  };
  return (
    <Box>
      <Typography>Upload an Audio File</Typography>
      <input type="file" onChange={handleFileChange} ref={inputElement} accept="audio/*" hidden  />

      <CButton onClick={onClickButton}>Choose File
      </CButton>

      {uploadFileName && (
        <Typography>Selected: {uploadFileName}</Typography>
      )}
      {error && (
        <Typography>{error}</Typography>
      )}

      {audioURL && (
        <Box>
          <audio ref={audioElement} controls>
            <source src={audioURL} type="audio/mpeg"/> 
            Your browser does not support the audio element.
          </audio>
        </Box>
      )}
    </Box>
  )
}

export default CUploadFile