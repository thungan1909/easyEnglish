import { Box, Button, Typography, Paper } from "@mui/material";
import { useRef, useState } from "react";

export type CUploadFileProps = {
  onChangeFileSelected?: (data?: File) => void;
  errorMessage?: string;
};

const CUploadFile = ({
  onChangeFileSelected,
  errorMessage,
}: CUploadFileProps) => {
  const inputElement = useRef<HTMLInputElement | null>(null);
  const audioElement = useRef<HTMLAudioElement | null>(null);
  const [uploadFileName, setUploadFileName] = useState<string | null>(null);
  const [audioURL, setAudioURL] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleFileChange = () => {
    if (inputElement.current?.files?.length) {
      const selectedFile = inputElement.current.files[0];

      if (selectedFile.type.startsWith("audio/")) {
        setUploadFileName(selectedFile.name);
        setAudioURL(URL.createObjectURL(selectedFile));
        onChangeFileSelected?.(selectedFile);
        setError(null);
      } else {
        setError("Only audio files are allowed.");
        setAudioURL(null);
      }
    }
  };

  const handlePlayAudio = () => {
    if (audioElement.current) {
      audioElement.current
        .play()
        .catch((err) => console.error("Playback error:", err));
    }
  };

  return (
    <Box sx={{ maxWidth: 400, margin: "auto", padding: 2 }}>
      <Paper
        sx={{ padding: 2, borderRadius: 2, boxShadow: 2, textAlign: "center" }}
      >
        <Typography variant="h6" gutterBottom>
          Upload an Audio File
        </Typography>

        {/* Nút chọn file thay vì input mặc định */}
        <Button variant="contained" component="label">
          Choose File
          <input
            type="file"
            onChange={handleFileChange}
            ref={inputElement}
            accept="audio/*"
            hidden
          />
        </Button>

        {uploadFileName && (
          <Typography variant="body2" color="textSecondary" sx={{ mt: 1 }}>
            Selected: {uploadFileName}
          </Typography>
        )}

        {error && (
          <Typography variant="body2" color="error" sx={{ mt: 1 }}>
            {error}
          </Typography>
        )}

        {errorMessage && (
          <Typography variant="body2" color="error" sx={{ mt: 1 }}>
            {errorMessage}
          </Typography>
        )}

        {audioURL && (
          <Box sx={{ mt: 2 }}>
            <audio ref={audioElement} controls>
              <source src={audioURL} type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          </Box>
        )}
      </Paper>
    </Box>
  );
};

export default CUploadFile;
