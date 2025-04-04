import { useEffect, useState } from "react";
import CTextField from "../../../components/atoms/CTextField/CTextField";
import CTextArea from "../../../components/atoms/CTextArea/CTextArea";
import CButton from "../../../components/atoms/CButton/CButton";
import {
  exactPunctuationRegex,
  punctuationRegex,
  wordSplitterRegex,
} from "../../../constants/regex";
import LoginReminder from "../../common-pages/LoginReminder";
import { useCreateLessonMutation } from "../../../hooks/lesson/create-lesson.hook";
import { LessonSchema, TLessonSchema } from "../../../validation/lesson.schema";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Typography } from "@mui/material";
import { useAuthentication } from "../../../hooks/auth/login.hook";
import CUploadFile from "../../../components/atoms/CUploadFile/CUploadFile";
import { useNavigate } from "react-router-dom";
import { ROUTES_CONSTANTS } from "../../../routers/constants";
import { notify } from "../../../utils/notify";
import CWordInput from "../../../components/atoms/CWordInput/CWordInput";
import { useUploadFileMutation } from "../../../hooks/upload/upload-file.hook";
import CPageTitle from "../../../components/atoms/CPageTitle/CPageTitle";

const CreateLesson = () => {
  const { isAuth } = useAuthentication();
  const navigate = useNavigate();
  const [lessonWords, setLessonWords] = useState<{
    withHint: string[];
    withoutHint: string[];
  }>({ withHint: [], withoutHint: [] });
  const { mutate: createLessonMutation } = useCreateLessonMutation();
  const { mutate: uploadFileMutation } = useUploadFileMutation();

  const [isHintValid, setIsHintValid] = useState(false);

  const {
    control,
    handleSubmit,
    setValue,
    watch,
    formState: { isValid },
  } = useForm<TLessonSchema>({
    mode: "onChange",
    resolver: zodResolver(LessonSchema),
  });

  const lessonContent = watch("content");

  const generateWords = (withSuggestions: boolean) => {
    if (!lessonContent.trim()) return;

    const words = lessonContent
      .split(wordSplitterRegex)
      .filter((word) => word.trim() || punctuationRegex.test(word));

    const blankProbability = withSuggestions ? 0.6 : 0.9;

    const updatedWords = words.map((word) =>
      word.match(exactPunctuationRegex)
        ? word
        : Math.random() < blankProbability
        ? ""
        : word
    );

    setLessonWords((prev) => ({
      ...prev,
      [withSuggestions ? "withHint" : "withoutHint"]: updatedWords,
    }));

    setValue(
      withSuggestions ? "wordsWithHint" : "wordsWithoutHint",
      updatedWords,
      { shouldValidate: true }
    );
    setIsHintValid(true);
  };

  const handleFileUpload = async (file: File, type: "audio" | "image") => {
    uploadFileMutation(
      { file, type },
      {
        onSuccess: (data) => {
          setValue(
            type === "audio" ? "audioFile" : "imageFile",
            data.secureUrl,
            {
              shouldValidate: true,
            }
          );
        },
        onError: () => {
          notify.error("Upload failed. Please try again.");
        },
      }
    );
  };

  const onSubmit = async (data: TLessonSchema) => {
    createLessonMutation(data, {
      onSuccess: () => {
        notify.success("Create lesson successfully");
        navigate(ROUTES_CONSTANTS.LESSON.BASE);
      },
      onError: () => {
        notify.error("Failed to create lesson.");
      },
    });
  };

  useEffect(() => {
    if (lessonContent) {
      setIsHintValid(false);
    }
  }, [lessonContent]);

  const originalWords = lessonContent
    ?.split(wordSplitterRegex)
    .filter((word) => word.trim() || punctuationRegex.test(word));

  return (
    <>
      {isAuth ? (
        <>
          <CPageTitle title="Add new lesson" />
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
        </>
      ) : (
        <LoginReminder />
      )}
    </>
  );
};

export default CreateLesson;
