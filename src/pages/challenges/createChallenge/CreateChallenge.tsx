import CTextField from "../../../components/atoms/CTextField/CTextField";
import CTextArea from "../../../components/atoms/CTextArea/CTextArea";
import CButton from "../../../components/atoms/CButton/CButton";
import LoginReminder from "../../common-pages/LoginReminder";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Checkbox, Typography } from "@mui/material";
import { useAuthentication } from "../../../hooks/auth/login.hook";
import CDatePicker from "../../../components/atoms/CDatePicker/CDatePicker";
import dayjs from "dayjs";
import { useGetLessonList } from "../../../hooks/lesson/get-lesson.hook";
import NoDataSection from "../../common-pages/NoDataSection";
import {
  CreateChallengeSchema,
  TCreateChallengeSchema,
} from "../../../validation/challenge.schema";
import LessonCardSquare from "../../dashboard/components/LessonSection/LessonCard/LessonCardSquare";
import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useCreateChallengeMutation } from "../../../hooks/challenge/create-challenge.hook";
import { notify } from "../../../utils/notify";
import { useNavigate } from "react-router-dom";
import CUploadFile from "../../../components/atoms/CUploadFile/CUploadFile";
import { useUploadFileMutation } from "../../../hooks/upload/upload-file.hook";
import { ROUTES_CONSTANTS } from "../../../routers/constants";
import CPageTitle from "../../../components/atoms/CPageTitle/CPageTitle";

const CreateChallenge = () => {
  const { isAuth } = useAuthentication();
  const navigate = useNavigate();
  const currentDate = dayjs().toDate();

  const { data: lessonList = [] } = useGetLessonList({});
  const { mutate: createChallengeMutation } = useCreateChallengeMutation();
  const { mutate: uploadFileMutation } = useUploadFileMutation();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLessons, setSelectedLessons] = useState<
    { id: string; title: string }[]
  >([]);
  const [isAllSelected, setIsAllSelected] = useState(false);

  const filteredLessons = lessonList.filter((lesson) =>
    lesson.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const {
    control,
    handleSubmit,
    setValue,
    formState: { isValid },
  } = useForm<TCreateChallengeSchema>({
    defaultValues: {
      startDate: currentDate,
      endDate: currentDate,
    },
    mode: "onChange",
    resolver: zodResolver(CreateChallengeSchema),
  });

  const toggleLessonSelection = (lessonId: string, lessonTitle: string) => {
    setSelectedLessons((prev) =>
      prev.some((lesson) => lesson.id === lessonId)
        ? prev.filter((lesson) => lesson.id !== lessonId)
        : [...prev, { id: lessonId, title: lessonTitle }]
    );
  };

  const onSubmit = async (data: TCreateChallengeSchema) => {
    createChallengeMutation(data, {
      onSuccess: () => {
        notify.success("Challenge created successfully");
        navigate(ROUTES_CONSTANTS.CHALLENGE.BASE);
      },
      onError: () => {
        notify.error("Failed to create challenge.");
      },
    });
  };

  const handleFileUpload = async (file: File, type: "audio" | "image") => {
    uploadFileMutation(
      { file, type },
      {
        onSuccess: (data) => {
          setValue("imageFile", data.secureUrl, {
            shouldValidate: true,
          });
        },
        onError: () => {
          notify.error("Upload failed. Please try again.");
        },
      }
    );
  };

  const handleToggleAll = () => {
    if (isAllSelected) {
      setSelectedLessons([]);
    } else {
      setSelectedLessons(
        lessonList.map((lesson) => ({ id: lesson._id, title: lesson.title }))
      );
    }
    setIsAllSelected(!isAllSelected);
  };

  useEffect(() => {
    setValue("lessons", selectedLessons);
  }, [selectedLessons, setValue]);

  useEffect(() => {
    setIsAllSelected(
      lessonList.length > 0 && selectedLessons.length === lessonList.length
    );
  }, [selectedLessons, lessonList]);

  return (
    <>
      {isAuth ? (
        <div>
          <CPageTitle title=" Create a New Challenge" />
          <form
            className="flex flex-col space-y-6 mt-8"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="grid md:grid-cols-2 gap-4">
              <Controller
                name="title"
                control={control}
                render={({ field, fieldState }) => (
                  <div>
                    <CTextField
                      {...field}
                      type="text"
                      label="Challenge's title"
                      placeholder="Enter challenge's title"
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

              <div className="grid md:grid-cols-2 gap-4">
                <Controller
                  name="coinAward"
                  control={control}
                  defaultValue={0}
                  render={({ field, fieldState }) => (
                    <div>
                      <CTextField
                        {...field}
                        type="number"
                        label="Coin Award"
                        placeholder="Enter coin award"
                        className="w-full"
                        value={
                          field.value !== undefined ? String(field.value) : ""
                        }
                        onChange={(e) => {
                          const newValue =
                            e.target.value === "" ? "" : Number(e.target.value);
                          field.onChange(newValue);
                        }}
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
                  name="coinFee"
                  control={control}
                  defaultValue={0}
                  render={({ field, fieldState }) => (
                    <div>
                      <CTextField
                        {...field}
                        type="number"
                        label="Coin Fee"
                        placeholder="Enter coin fee"
                        className="w-full"
                        value={
                          field.value !== undefined ? String(field.value) : ""
                        }
                        onChange={(e) => {
                          const newValue =
                            e.target.value === "" ? "" : Number(e.target.value);
                          field.onChange(newValue);
                        }}
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
            </div>
            <CUploadFile
              accept="image"
              onChangeFileSelected={(file) => handleFileUpload(file, "image")}
              title="Challenge's banner"
            />

            <div className="grid md:grid-cols-2 gap-4">
              <Controller
                name="startDate"
                control={control}
                render={({ field: { value, onChange } }) => (
                  <CDatePicker
                    value={value ? dayjs(value) : null}
                    onChange={(date) => onChange(date ? date.toDate() : null)}
                    label="Start date"
                  />
                )}
              />
              <Controller
                name="endDate"
                control={control}
                render={({ field: { value, onChange } }) => (
                  <CDatePicker
                    value={value ? dayjs(value) : null}
                    onChange={(date) => onChange(date ? date.toDate() : null)}
                    label="End date"
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
                    placeholder="Enter challenge's description"
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
            <div className="">
              <div className="flex md:flex-row flex-col md:items-center items-start ">
                <Typography variant="h6" className="!my-4">
                  Select lessons for this challenge
                </Typography>

                <div className="flex md:flex-row flex-col md:ml-auto">
                  <div className="flex items-center">
                    <Checkbox
                      checked={isAllSelected}
                      onChange={handleToggleAll}
                    />
                    <Typography variant="body2">
                      {selectedLessons.length} selected lessons
                    </Typography>
                  </div>
                  <div className="flex items-center justify-center relative ">
                    <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-purple-500" />
                    <input
                      type="text"
                      placeholder="Search lessons..."
                      className="bg-gray-100 rounded-full pl-10 pr-4 py-2 text-sm outline-none focus:ring-2 focus:ring-purple-400"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                </div>
              </div>

              {filteredLessons.length > 0 ? (
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
                  {filteredLessons.map((lesson) => (
                    <div
                      key={lesson._id}
                      className="flex flex-col items-center"
                    >
                      <LessonCardSquare lesson={lesson} isShowSource={false} />
                      <Checkbox
                        checked={selectedLessons.some(
                          (l) => l.id === lesson._id
                        )}
                        onChange={() =>
                          toggleLessonSelection(lesson._id, lesson.title)
                        }
                      />
                    </div>
                  ))}
                </div>
              ) : (
                <NoDataSection />
              )}
            </div>
            <CButton
              className="w-full"
              type="submit"
              isRounded
              disabled={!isValid}
            >
              Save Challenge
            </CButton>
          </form>
        </div>
      ) : (
        <LoginReminder />
      )}
    </>
  );
};

export default CreateChallenge;
