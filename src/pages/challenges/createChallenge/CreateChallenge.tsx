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
import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useCreateLChallengeMutation } from "../../../hooks/challenge/create-challenge.hook";
import { ROUTES_CONSTANTS } from "../../../routers/constants";
import { notify } from "../../../utils/notify";
import { useNavigate } from "react-router-dom";

const CreateChallenge = () => {
  const { isAuth } = useAuthentication();
  const navigate = useNavigate();

  const { data: lessonList = [] } = useGetLessonList({});
  const { mutate: createChallengeMutation } = useCreateLChallengeMutation();
  const [selectedLessons, setSelectedLessons] = useState<
    { id: string; title: string }[]
  >([]);

  const {
    control,
    handleSubmit,
    setValue,
    formState: { isValid },
  } = useForm<TCreateChallengeSchema>({
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

  useEffect(() => {
    setValue("lessons", selectedLessons);
  }, [selectedLessons, setValue]);

  return (
    <>
      {isAuth ? (
        <div className="mt-24 md:m-24 mx-4">
          <Typography variant="h5" textTransform="uppercase">
            Create a New Challenge
          </Typography>
          <form
            className="flex flex-col space-y-6 mt-8"
            onSubmit={handleSubmit(onSubmit)}
          >
            {/* <div className="grid md:grid-cols-2 gap-4"> */}
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
                name="award"
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
                name="fee"
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
              <div className="flex">
                <Typography variant="h6" className="!my-4">
                  Select lessons for this challenge
                </Typography>

                <div className="flex items-center relative ml-auto">
                  <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-purple-500" />
                  <input
                    type="text"
                    placeholder="Search lessons..."
                    className="bg-gray-100 rounded-full pl-10 pr-4 py-2 text-sm outline-none focus:ring-2 focus:ring-purple-400"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {lessonList.length > 0 ? (
                  lessonList.map((lesson) => (
                    <div
                      key={lesson._id}
                      className="flex flex-col items-center gap-2"
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
                  ))
                ) : (
                  <NoDataSection />
                )}
              </div>
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
