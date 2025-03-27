import { useNavigate, useParams } from "react-router-dom";
import { useGetLessonById } from "../../hooks/lesson/get-lesson.hook";
import { useEffect, useState } from "react";
import {
  EditLessonSchema,
  TEditLessonSchema,
} from "../../validation/lesson.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import CTextField from "../../components/atoms/CTextField/CTextField";
import { Typography } from "@mui/material";
import CUploadFile from "../../components/atoms/CUploadFile/CUploadFile";
import CTextArea from "../../components/atoms/CTextArea/CTextArea";
import CButton from "../../components/atoms/CButton/CButton";
import CWordInput from "../../components/atoms/CWordInput/CWordInput";
import {
  exactPunctuationRegex,
  punctuationRegex,
  wordSplitterRegex,
} from "../../constants/regex";
import { notify } from "../../utils/notify";
import { useUploadFileMutation } from "../../hooks/upload/upload-file.hook";
import { useEditLessonMutation } from "../../hooks/lesson/edit-lesson.hook";
import { ROUTES_CONSTANTS } from "../../routers/constants";
import CPageTitle from "../../components/atoms/CPageTitle/CPageTitle";

const EditLesson = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const { data: lesson } = useGetLessonById(id ?? "");
  const [lessonWords, setLessonWords] = useState<{
    withHint: string[];
    withoutHint: string[];
  }>({ withHint: [], withoutHint: [] });
  const [isUpdateLessonContent, setIsUpdateLessonContent] = useState(false);
  const { mutate: uploadFileMutation } = useUploadFileMutation();
  const { mutate: editLessonMutation } = useEditLessonMutation();

  const [isHintValid, setIsHintValid] = useState(false);

  const {
    control,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { isValid },
  } = useForm<TEditLessonSchema>({
    mode: "onChange",
    resolver: zodResolver(EditLessonSchema),
  });

  const lessonContent = watch("content");

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

  const generateWords = (withSuggestions: boolean) => {
    const trimmedContent = lessonContent.trim();
    if (!trimmedContent) return;

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

  const originalWords = lessonContent
    ?.split(wordSplitterRegex)
    .filter((word) => word.trim() || punctuationRegex.test(word));

  const onSubmit = async (data: TEditLessonSchema) => {
    if (!id) {
      notify.error("Lesson ID is missing.");
      return;
    }

    editLessonMutation(
      { lessonId: id, data },
      {
        onSuccess: () => {
          notify.success("Edit lesson successfully");
          navigate(ROUTES_CONSTANTS.MANAGE_MY_UPLOAD.BASE);
        },
        onError: () => {
          notify.error("Failed to edit lesson.");
        },
      }
    );
  };

  useEffect(() => {
    if (lesson) {
      reset(lesson);
    }
  }, [lesson, reset]);

  return (
    <form
      className="mt-16 p-8 md:p-16 flex flex-col space-y-6 "
      onSubmit={handleSubmit(onSubmit)}
    >
      <CPageTitle
        title="Edit lesson"
        titleDescription="Edit my upload lesson"
      />
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
                maxLength={25}
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
      </div>
      <div className="grid md:grid-cols-2 md:gap-6 gap-6">
        <Controller
          name="audioFile"
          control={control}
          render={({ field }) => (
            <CUploadFile
              accept="audio"
              onChangeFileSelected={(file) => handleFileUpload(file, "audio")}
              title="Lesson's audio"
              defaultFileURL={field.value}
            />
          )}
        />
        <Controller
          name="imageFile"
          control={control}
          render={({ field }) => (
            <CUploadFile
              accept="image"
              onChangeFileSelected={(file) => handleFileUpload(file, "image")}
              title="Lesson's image"
              defaultFileURL={field.value}
            />
          )}
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
      <div className="flex flex-col items-center">
        <CButton
          onClick={() => setIsUpdateLessonContent((prev) => !prev)}
          isRounded
          size="medium"
          className="w-[50%]"
        >
          {`${
            isUpdateLessonContent ? `Disable` : `Enable`
          } edit lesson content`}
        </CButton>
      </div>
      {isUpdateLessonContent && (
        <>
          <Controller
            name="content"
            control={control}
            defaultValue=""
            render={({ field, fieldState }) => (
              <div>
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
        </>
      )}
      <CButton
        className="w-full"
        type="submit"
        disabled={!isValid || (isUpdateLessonContent && !isHintValid)}
        isRounded
      >
        Save
      </CButton>
    </form>
  );
};

export default EditLesson;
