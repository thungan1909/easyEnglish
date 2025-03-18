import { useEffect, useRef, useState } from "react";
import CTextField from "../CTextField/CTextField";

const CWordInput = ({
  word,
  originalWord,
  readOnly,
  onChange,
}: {
  word: string;
  originalWord: string;
  readOnly?: boolean;
  onChange?: (value: string) => void;
}) => {
  const [inputWidth, setInputWidth] = useState(0);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (!canvasRef.current) {
      canvasRef.current = document.createElement("canvas");
    }
    const context = canvasRef.current.getContext("2d");
    if (context) {
      context.font = "16px Playwrite IT Moderna";
      const width = context.measureText(originalWord).width;
      setInputWidth(width);
    }
  }, [originalWord]);

  return word === "" ? (
    <CTextField
      maxLength={originalWord.length}
      disabled={readOnly}
      onChange={(e) => onChange?.(e.target.value)}
      sx={{
        width: `${inputWidth}px`,
        minHeight: "20px",
        "& .MuiInputAdornment-root": {
          marginRight: "0px !important",
        },
        "& .MuiOutlinedInput-root": {
          padding: "0 !important",
        },
        "& .MuiOutlinedInput-input": {
          padding: "0 !important",
          backgroundColor: "oklch(0.946 0.033 307.174)",
        },
        "& .MuiInputBase-root": {
          padding: "0 !important",
        },
        "& fieldset": {
          border: "none !important",

          borderBottom: "1px solid black !important",
          borderRadius: "0 !important",
        },
      }}
    />
  ) : (
    <span className="whitespace-pre">{word}</span>
  );
};

export default CWordInput;
