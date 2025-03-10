import { useState } from "react";
import CTextField from "../../../components/atoms/CTextField/CTextField";
import CTextArea from "../../../components/atoms/CTextArea/CTextArea";
import CButton from "../../../components/atoms/CButton/CButton";
import {
  exactPunctuationRegex,
  punctuationRegex,
  wordSplitterRegex,
} from "../../../constants/regex";
import LoginReminder from "../../LoginReminder";
import { useCreateLessonMutation } from "../../../hooks/lesson/create-lesson.hook";
import {
  CreateNewLessonSchema,
  TCreateNewLessonSchema,
} from "../../../validation/lesson.schema";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Typography } from "@mui/material";
import { useAuthentication } from "../../../hooks/auth/login.hook";
import CUploadFile from "../../../components/atoms/CUploadFile/CUploadFile";
import { useNavigate } from "react-router-dom";
import { ROUTES_CONSTANTS } from "../../../routers/constants";
import { notify } from "../../../utils/notify";

const CreateLesson = () => {
  const { isAuth } = useAuthentication();
  const navigate = useNavigate();
  const [lessonWords, setLessonWords] = useState<string[]>();

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

  const lessonContent = watch("content");

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
      setValue("words", updatedWords, { shouldValidate: true });
    }
  };

  const handleFileUpload = async (file: File, type: "audio" | "image") => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "ml_default"); // Replace with Cloudinary preset

    try {
      const res = await fetch(
        "https://api.cloudinary.com/v1_1/dfjtdhivs/upload",
        {
          method: "POST",
          body: formData,
        }
      );
      const data = await res.json();
      if (type === "audio") {
        setValue("audioFile", data.secure_url, { shouldValidate: true });
      } else {
        setValue("imageFile", data.secure_url, { shouldValidate: true });
      }
    } catch (error) {
      console.error("Upload failed", error);
      alert("Upload failed. Please try again.");
    }
  };

  const onSubmit = async (data: TCreateNewLessonSchema) => {
    if (Array.isArray(data.words) && Array.isArray(data.words[0])) {
      data.words = data.words.flat(); // Flatten nested arrays
    }

    createLessonMutation(data, {
      onSuccess: () => {
        notify.success("Create lesson successfully");
        navigate(ROUTES_CONSTANTS.LESSON.BASE);
      },
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
          <Controller
            name="description"
            control={control}
            defaultValue=""
            render={({ field, fieldState }) => (
              <div>
                <CTextField
                  {...field}
                  type="text"
                  label="Lesson's description"
                  placeholder="Lesson's description"
                  className="w-full"
                  maxLength={400}
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
              name="content"
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

export default CreateLesson;
