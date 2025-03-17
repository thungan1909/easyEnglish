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
  return word === "" ? (
    <CTextField
      maxLength={originalWord.length}
      className="bg-purple-100"
      disabled={readOnly}
      onChange={(e) => onChange?.(e.target.value)}
      sx={{
        width: `${originalWord.length * 10}px`,
        minHeight: "20px",
        "& .MuiInputAdornment-root": {
          marginRight: "0px !important",
        },
        "& .MuiOutlinedInput-root": {
          padding: "0 !important",
        },
        "& .MuiOutlinedInput-input": {
          padding: "0 !important",
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
