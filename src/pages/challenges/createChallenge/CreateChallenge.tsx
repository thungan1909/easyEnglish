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
import LessonCardSquare from "../../dashboard/components/LessonCard/LessonCardSquare";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";

const CreateChallenge = () => {
  const { isAuth } = useAuthentication();

  const { data: lessonList = [] } = useGetLessonList({});
  const [selectedLessons, setSelectedLessons] = useState<string[]>([]);

  const {
    control,
    handleSubmit,
    formState: { isValid },
  } = useForm<TCreateChallengeSchema>({
    mode: "onChange",
    resolver: zodResolver(CreateChallengeSchema),
  });

  const toggleLessonSelection = (lessonId: string) => {
    setSelectedLessons((prev) =>
      prev.includes(lessonId)
        ? prev.filter((id) => id !== lessonId)
        : [...prev, lessonId]
    );
  };

  const onSubmit = async (data: TCreateChallengeSchema) => {
    console.log("Form Data Submitted:", data);
  };

  return (
    <>
      {isAuth ? (
        <div className="mt-24 md:m-24 mx-4">
          <Typography variant="h5" textTransform="uppercase">
            Add new challenges
          </Typography>
          <form
            className="flex flex-col space-y-6 mt-8"
            onSubmit={handleSubmit(onSubmit)}
          >
            <Controller
              name="title"
              control={control}
              defaultValue=""
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
                name="startDate"
                control={control}
                render={({ field: { value, onChange } }) => (
                  <CDatePicker
                    value={value ? dayjs(value) : null}
                    onChange={onChange}
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
                    onChange={onChange}
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

            <div className="p-4 shadow-lg rounded-lg ">
              <div className="flex">
                <Typography variant="h6" className="!my-4">
                  Select lessons for this challenge
                </Typography>

                <div className=" flex items-center relative ml-auto">
                  <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-purple-500" />
                  <input
                    type="text"
                    placeholder="Search something..."
                    className="bg-gray-100 rounded-full pl-10 pr-4 py-2 text-sm outline-none focus:ring-2 focus:ring-purple-400"
                  />
                </div>
              </div>

              {lessonList.length > 0 ? (
                <div className="grid gap-4 grid-cols-2 md:grid-cols-8">
                  {lessonList.map((lesson) => (
                    <div
                      key={lesson._id}
                      className="flex flex-col items-center gap-2"
                    >
                      <LessonCardSquare lesson={lesson} isShowSource={false} />
                      <Checkbox
                        checked={selectedLessons.includes(lesson._id)}
                        onChange={() => toggleLessonSelection(lesson._id)}
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
