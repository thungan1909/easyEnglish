import React, { useState } from "react";
import CTextField from "../../../components/atoms/CTextField/CTextField";
import CTextArea from "../../../components/atoms/CTextArea/CTextArea";
import CButton from "../../../components/atoms/CButton/CButton";
import CUploadFile from "../../../components/atoms/CUploadFile/CUploadFile";
import {
  exactPunctuationRegex,
  punctuationRegex,
  wordSplitterRegex,
} from "../../../constants/regex";
import { useAuthentication } from "../../../apis/api-hooks/auth.hook";
import LoginReminder from "../../LoginReminder";

const AddNewLesson = () => {
  const { isAuth } = useAuthentication();
  const [lessonContent, setLessonContent] = useState("");
  const [lessonWords, setLessonWords] = useState<string[]>();

  const handleGetLessonContent = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setLessonContent(e.target.value);
  };

  const generateWords = (withSuggestions: Boolean) => {
    if (!lessonContent.trim()) return;
    const words = lessonContent
      .split(wordSplitterRegex) // Capture spaces and punctuation separately
      .filter((word) => word.trim() || punctuationRegex.test(word)); // Remove spaces but keep punctuation

    const blankProbability = withSuggestions ? 0.6 : 0.9;

    const updatedWords = words.map((word) =>
      word.match(exactPunctuationRegex) // If the word is ONLY punctuation
        ? word // Keep punctuation unchanged
        : Math.random() < blankProbability
        ? "" // Replace only words with blank
        : word
    );

    if (JSON.stringify(updatedWords) !== JSON.stringify(lessonWords)) {
      setLessonWords(updatedWords);
    }
  };

  return (
    <>
      {isAuth ? (
        <form className=" mt-16 p-8 flex flex-col space-y-6 ">
          <CTextField
            label="Lesson's title"
            className="w-full"
            maxLength={50}
          />

          <div className="grid md:grid-cols-2 gap-6 items-start">
            <CTextArea
              maxRows={25}
              minRows={5}
              maxLength={1500}
              placeholder="Enter lesson content..."
              className="w-full"
              value={lessonContent}
              onChange={handleGetLessonContent}
            />
            <div className="flex gap-x-1 flex-wrap">
              {lessonWords?.map((word, index) => (
                <span
                  className={` ${
                    word ? "" : "border-b-2 border-purple-800 bg-gray-100 "
                  }`}
                  style={{
                    minWidth: word ? `${word.length}px` : "30px",
                  }}
                  key={index}
                >
                  {word !== "" ? word : "\u00A0"}
                </span>
              ))}
            </div>
          </div>
          <div className="flex justify-evenly">
            <CButton onClick={() => generateWords(false)}>
              Generate without suggest
            </CButton>
            <CButton onClick={() => generateWords(true)}>
              Generate with suggest
            </CButton>
          </div>
          <CUploadFile onChangeFileSelected={(file) => console.log(file)} />
          <CButton className="w-full">Save</CButton>
        </form>
      ) : (
        <LoginReminder />
      )}
    </>
  );
};

export default AddNewLesson;

// <TextField
//   key={index}
//   defaultValue={word}
//   variant="standard"
//   id={`word-input-${index}`} // Unique ID for each input
//   onChange={(e) => {
//     if (e.target.value.length === word.length) {
//       // Move focus to the next input field
//       const nextInput = document.getElementById(
//         `word-input-${index + 1}`
//       );
//       if (nextInput) {
//         (nextInput as HTMLInputElement).focus();
//       }
//     }
//   }}
//   slotProps={{
//     input: {
//       inputProps: {
//         maxLength: word.length,
//       },
//     },
//   }}
//   className=" bg-gray-100 !mr-2 "
//   sx={{
//     width: `${word.length * 10}px`, // Adjust width dynamically
//     minWidth: "40px", // Ensure a minimum width
//   }}
// />
