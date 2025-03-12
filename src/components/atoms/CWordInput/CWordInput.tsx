import CTextField from "../CTextField/CTextField";

const CWordInput = ({
  word,
  originalWord,
  readOnly,
}: {
  word: string;
  originalWord: string;
  readOnly?: boolean;
}) => {
  return word === "" ? (
    <CTextField
      maxLength={originalWord.length}
      className="bg-purple-100"
      disabled={readOnly}
      sx={{
        width: `${originalWord.length * 10}px`,
        minHeight: "20px",
        "& .MuiOutlinedInput-input": {
          padding: "0px !important",
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
