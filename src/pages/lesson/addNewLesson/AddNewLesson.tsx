import { useState } from "react";
import CTextField from "../../../components/atoms/CTextField/CTextField";
import CTextArea from "../../../components/atoms/CTextArea/CTextArea";
import CButton from "../../../components/atoms/CButton/CButton";
import CUploadFile from "../../../components/atoms/CUploadFile/CUploadFile";
import {
  exactPunctuationRegex,
  punctuationRegex,
  wordSplitterRegex,
} from "../../../constants/regex";
import { useAuthentication } from "../../../hooks/auth.hook";
import LoginReminder from "../../LoginReminder";
import { useCreateLessonMutation } from "../../../hooks/lesson.hook";
import {
  CreateNewLessonSchema,
  TCreateNewLessonSchema,
} from "../../../validation/lesson.schema";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Typography } from "@mui/material";

const AddNewLesson = () => {
  const { isAuth } = useAuthentication();
  const [lessonWords, setLessonWords] = useState<string[]>();
  const [_, setAudioFile] = useState<string | null>(null);

  const { mutate: createLessonMutation } = useCreateLessonMutation();

  const {
    control,
    handleSubmit,
    setValue,
    watch,
    formState: { isValid },
  } = useForm<TCreateNewLessonSchema>({
    mode: "onChange",
    resolver: zodResolver(CreateNewLessonSchema),
  });

  const lessonContent = watch("lessonContent");

  const generateWords = (withSuggestions: Boolean) => {
    if (!lessonContent.trim()) return;

    const words = lessonContent
      .split(wordSplitterRegex)
      .filter((word) => word.trim() || punctuationRegex.test(word)); // Remove spaces but keep punctuation

    const blankProbability = withSuggestions ? 0.6 : 0.9;

    const updatedWords = words.map((word) =>
      word.match(exactPunctuationRegex)
        ? word
        : Math.random() < blankProbability
        ? ""
        : word
    );

    if (JSON.stringify(updatedWords) !== JSON.stringify(lessonWords)) {
      setLessonWords(updatedWords);
      setValue("wordList", updatedWords, { shouldValidate: true });
    }
  };

  const handleFileUpload = (file: File) => {
    const fileURL = URL.createObjectURL(file);
    setAudioFile(fileURL);
    setValue("audioFile", fileURL, { shouldValidate: true });
  };

  const onSubmit = (data: TCreateNewLessonSchema) => {
    createLessonMutation(data, {
      onSuccess: () => alert("Lesson created successfully!"),
      onError: (error) => {
        console.error("Error:", error);
        alert("Failed to create lesson.");
      },
    });
  };

  return (
    <>
      {isAuth ? (
        <form
          className="mt-16 p-8 md:p-16 flex flex-col space-y-6 "
          onSubmit={handleSubmit(onSubmit)}
        >
          <Controller
            name="lessonTitle"
            control={control}
            defaultValue=""
            render={({ field, fieldState }) => (
              <div>
                <CTextField
                  {...field}
                  type="text"
                  label="Lesson's title"
                  placeholder="Lesson's title"
                  className="w-full"
                  maxLength={50}
                />
                {fieldState.error && (
                  <Typography color="error" variant="caption">
                    {fieldState.error.message}
                  </Typography>
                )}
              </div>
            )}
          />
          <div className="grid md:grid-cols-2 md:gap-6 items-start">
            <Controller
              name="lessonContent"
              control={control}
              defaultValue=""
              render={({ field, fieldState }) => (
                <div className="">
                  <CTextArea
                    {...field}
                    maxRows={25}
                    minRows={5}
                    maxLength={1500}
                    placeholder="Enter lesson content..."
                    className="w-full"
                  />
                  {fieldState.error && (
                    <Typography color="error" variant="caption">
                      {fieldState.error.message}
                    </Typography>
                  )}
                </div>
              )}
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
          <div className="md:flex md:justify-evenly md:flex-wrap grid grid-cols-1 gap-3">
            <CButton onClick={() => generateWords(false)}>
              Generate without suggest
            </CButton>
            <CButton onClick={() => generateWords(true)}>
              Generate with suggest
            </CButton>
          </div>

          <CUploadFile onChangeFileSelected={handleFileUpload} />

          <CButton className="w-full" type="submit" disabled={!isValid}>
            Save
          </CButton>
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
