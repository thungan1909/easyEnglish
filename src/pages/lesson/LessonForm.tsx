import CTextField from "../../components/atoms/CTextField/CTextField";
import CTextArea from "../../components/atoms/CTextArea/CTextArea";
import CButton from "../../components/atoms/CButton/CButton";
import {
  Controller,
  SubmitHandler,
  UseFormReset,
  UseFormSetValue,
} from "react-hook-form";
import { Typography } from "@mui/material";

import CUploadFile from "../../components/atoms/CUploadFile/CUploadFile";
import { FormEventHandler } from "react";
import { TLessonSchema } from "../../validation/lesson.schema";
import CWordInput from "../../components/atoms/CWordInput/CWordInput";

export interface LessonFormProps {
  control: any;
  handleSubmit: (
    callback: SubmitHandler<TLessonSchema>
  ) => FormEventHandler<HTMLFormElement>;
  onSubmit: SubmitHandler<TLessonSchema>;
  isValid: boolean;
  handleFileUpload: (file: File, type: "image" | "audio") => void;
  lessonWords: {
    withHint: string[];
    withoutHint: string[];
  };
  isHintValid: boolean;
  generateWords: (withSuggestions: boolean) => void;
  originalWords: string[];
  lessonContent: string;
}

const LessonForm = ({
  control,
  onSubmit,
  handleSubmit,
  isValid,
  handleFileUpload,
  lessonWords,
  isHintValid,
  generateWords,
  originalWords,
  lessonContent,
}: LessonFormProps) => {
  return (
    <form
      className="flex flex-col space-y-6 mt-8"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="grid md:grid-cols-2 md:gap-6 gap-3">
        <Controller
          name="title"
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
        <Controller
          name="source"
          control={control}
          defaultValue=""
          render={({ field, fieldState }) => (
            <div>
              <CTextField
                {...field}
                type="text"
                label="Lesson's source"
                placeholder="Lesson's source"
                className="w-full"
                maxLength={20}
              />
              {fieldState.error && (
                <Typography color="error" variant="caption">
                  {fieldState.error.message}
                </Typography>
              )}
            </div>
          )}
        />
      </div>
      <div className="grid md:grid-cols-2 md:gap-6 gap-6">
        <CUploadFile
          accept="audio"
          onChangeFileSelected={(file) => handleFileUpload(file, "audio")}
          title="Lesson's audio"
        />
        <CUploadFile
          accept="image"
          onChangeFileSelected={(file) => handleFileUpload(file, "image")}
          title="Lesson's image"
        />
      </div>
      <Controller
        name="description"
        control={control}
        defaultValue=""
        render={({ field, fieldState }) => (
          <div>
            <CTextArea
              {...field}
              maxRows={25}
              minRows={5}
              maxLength={4000}
              placeholder="Enter lesson's description"
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
      <Controller
        name="content"
        control={control}
        defaultValue=""
        render={({ field, fieldState }) => (
          <div className="">
            <CTextArea
              {...field}
              maxRows={25}
              minRows={5}
              maxLength={4000}
              placeholder="Enter lesson's content..."
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
      <div className="flex flex-col items-center">
        <CButton
          onClick={() => {
            generateWords(true);
            generateWords(false);
          }}
          isRounded
          size="medium"
          className="w-[50%] !mb-3"
          disabled={!lessonContent?.trim()}
        >
          Generate hint
        </CButton>

        <Typography color="info" variant="caption">
          Please generate hint before click on Save button
        </Typography>
      </div>
      {isHintValid && (
        <div className="grid md:grid-cols-2 gap-4 mt-4">
          <div className=" p-4 flex flex-wrap gap-2">
            {lessonWords.withHint?.map((word, index) => {
              const originalWord = originalWords?.[index] || "";
              return (
                <CWordInput
                  key={index}
                  word={word}
                  originalWord={originalWord}
                  readOnly
                />
              );
            })}
          </div>
          <div className="p-4 flex flex-wrap gap-2">
            {lessonWords.withoutHint?.map((word, index) => {
              const originalWord = originalWords?.[index] || "";
              return (
                <CWordInput
                  key={index}
                  word={word}
                  originalWord={originalWord}
                  readOnly
                />
              );
            })}
          </div>
        </div>
      )}
      <CButton
        className="w-full"
        type="submit"
        disabled={!isValid || !isHintValid}
        isRounded
      >
        Save
      </CButton>
    </form>
  );
};

export default LessonForm;
