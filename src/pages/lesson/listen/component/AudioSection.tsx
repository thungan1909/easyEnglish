import { MenuItem, Select, Slider } from "@mui/material";
import { useRef, useState } from "react";
import { FaCaretLeft, FaCaretRight, FaPause, FaPlay } from "react-icons/fa";
import { FaRepeat } from "react-icons/fa6";
import CButton from "../../../../components/atoms/CButton/CButton";

export type AudioSectionProps = {
  fileURL: string;
};

const AudioSection = ({ fileURL }: AudioSectionProps) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState<number>(0);
  const [speed, setSpeed] = useState<number>(1);

  const togglePlayPause = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleSeek = (_: Event, newValue: number | number[]) => {
    if (!audioRef.current || typeof newValue !== "number") return;
    const newTime = (newValue / 100) * audioRef.current.duration;
    audioRef.current.currentTime = newTime;
    setProgress(newValue);
  };

  const handleTimeUpdate = () => {
    if (!audioRef.current) return;
    const currentTime = audioRef.current.currentTime;
    const duration = audioRef.current.duration;
    if (!duration || isNaN(duration)) return;

    const newProgress = (currentTime / duration) * 100 || 0;
    setProgress(newProgress);
  };

  const handleSpeedChange = (event: any) => {
    const newSpeed = Number(event.target.value);
    if (!audioRef.current) return;
    audioRef.current.playbackRate = newSpeed;
    setSpeed(newSpeed);
  };

  const skipTime = (position: "prev" | "next", seconds: number) => {
    if (!audioRef.current) return;

    const newTime =
      position === "prev"
        ? audioRef.current.currentTime - seconds
        : audioRef.current.currentTime + seconds;

    audioRef.current.currentTime = Math.max(
      0,
      Math.min(audioRef.current.duration, newTime)
    );
  };

  const handleReplay = () => {
    if (!audioRef.current) return;
    audioRef.current.currentTime = 0;
    audioRef.current.play();
    setIsPlaying(true);
  };

  return (
    <div
      className="flex flex-col items-center p-3"
      style={{ backgroundColor: "var(--main-200)" }}
    >
      <div>
        <CButton
          startIcon={<FaRepeat />}
          variant="text"
          onClick={handleReplay}
        />
        <CButton
          startIcon={<FaCaretLeft size={32} />}
          variant="text"
          onClick={() => skipTime("prev", 2)}
        />
        <CButton
          startIcon={isPlaying ? <FaPause size={32} /> : <FaPlay size={32} />}
          onClick={togglePlayPause}
          variant="text"
        />
        <CButton
          startIcon={<FaCaretRight size={32} />}
          variant="text"
          onClick={() => skipTime("next", 2)}
        />
        <Select value={speed} onChange={handleSpeedChange} size="small">
          <MenuItem value={0.5}>0.5x</MenuItem>
          <MenuItem value={1}>1x</MenuItem>
          <MenuItem value={1.5}>1.5x</MenuItem>
          <MenuItem value={2}>2x</MenuItem>
        </Select>
      </div>
      <Slider
        value={progress}
        onChange={(_, newValue) => handleSeek(_, newValue)}
        aria-label="Audio progress"
        style={{ color: "var(--main-color)", width: "50%" }}
      />
      <audio
        ref={audioRef}
        src={fileURL}
        onEnded={() => setIsPlaying(false)}
        onTimeUpdate={handleTimeUpdate}
      />
    </div>
  );
};

export default AudioSection;
