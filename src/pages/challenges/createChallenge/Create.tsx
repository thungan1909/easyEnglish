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
  ChallengeSchema,
  TChallengeSchema,
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
import { validateDateRange } from "../../../utils/helpers/periodDateValidation";
import ChallengeForm from "../../manageMyUpload/challenge/ChallengeForm";
import { useChallengeForm } from "../../../hookForm/useChallengeForm";

const CreateChallenge = () => {
  const { isAuth } = useAuthentication();
  const navigate = useNavigate();

  const { mutate: createChallengeMutation } = useCreateChallengeMutation();
  const { mutate: uploadFileMutation } = useUploadFileMutation();

  const {
    control,
    onSubmit,
    isValid,
    searchTerm,
    setSearchTerm,
    selectedLessons,
    filteredLessons,
    toggleLessonSelection,
    handleToggleAll,
    isAllSelected,
    setValue,
  } = useChallengeForm({}, (data) =>
    createChallengeMutation(data, {
      onSuccess: () => {
        notify.success("Challenge created successfully");
        navigate(ROUTES_CONSTANTS.CHALLENGE.BASE);
      },
      onError: () => {
        notify.error("Failed to create challenge.");
      },
    })
  );

  //   const onSubmit = async (data: TChallengeSchema) => {
  //     const startDate = watch("startDate");
  //     const endDate = watch("endDate");

  //     if (!startDate || !endDate) {
  //       notify.error("Start date and end date are required.");
  //       return;
  //     }
  //     if (!validateDateRange(startDate, endDate)) return;

  //     createChallengeMutation(data, {
  //       onSuccess: () => {
  //         notify.success("Challenge created successfully");
  //         navigate(ROUTES_CONSTANTS.CHALLENGE.BASE);
  //       },
  //       onError: () => {
  //         notify.error("Failed to create challenge.");
  //       },
  //     });
  //   };

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

  // const handleToggleAll = () => {
  //   if (isAllSelected) {
  //     setSelectedLessons([]);
  //   } else {
  //     setSelectedLessons(lessonList.map((lesson) => lesson._id));
  //   }
  //   setIsAllSelected(!isAllSelected);
  // };

  // useEffect(() => {
  //   setValue("lessons", selectedLessons);
  // }, [selectedLessons, setValue]);

  // useEffect(() => {
  //   setIsAllSelected(
  //     lessonList.length > 0 && selectedLessons.length === lessonList.length
  //   );
  // }, [selectedLessons, lessonList]);

  return (
    <>
      {isAuth ? (
        <div>
          <CPageTitle title=" Create a New Challenge" />
          <ChallengeForm
            control={control}
            onSubmit={onSubmit}
            isValid={isValid}
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            selectedLessons={selectedLessons}
            filteredLessons={filteredLessons}
            toggleLessonSelection={toggleLessonSelection}
            handleToggleAll={handleToggleAll}
            isAllSelected={isAllSelected}
            handleFileUpload={handleFileUpload}
          />
        </div>
      ) : (
        <LoginReminder />
      )}
    </>
  );
};

export default CreateChallenge;
