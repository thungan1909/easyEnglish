import CTextField from "../../../components/atoms/CTextField/CTextField";
import CTextArea from "../../../components/atoms/CTextArea/CTextArea";
import CButton from "../../../components/atoms/CButton/CButton";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { Checkbox, Typography } from "@mui/material";
import CDatePicker from "../../../components/atoms/CDatePicker/CDatePicker";
import dayjs from "dayjs";
import NoDataSection from "../../common-pages/NoDataSection";
import LessonCardSquare from "../../dashboard/components/LessonSection/LessonCard/LessonCardSquare";
import { FaSearch } from "react-icons/fa";

import CUploadFile from "../../../components/atoms/CUploadFile/CUploadFile";
import { LessonDTO } from "../../../types/dtos/lesson.dto";
import { TChallengeSchema } from "../../../validation/challenge.schema";

export interface ChallengeFormProps {
  control: any;
  onSubmit: SubmitHandler<TChallengeSchema>; // Adjusted the type of onSubmit
  isValid: boolean;
  searchTerm: string;
  setSearchTerm: (s: string) => void;
  selectedLessons: string[];
  filteredLessons: LessonDTO[];
  toggleLessonSelection: (id: string) => void;
  handleToggleAll: () => void;
  isAllSelected: boolean;
  handleFileUpload: (file: File, type: "image" | "audio") => void;
}

const ChallengeForm = ({
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
  handleFileUpload,
}: ChallengeFormProps) => {
  return (
    <form
      className="flex flex-col space-y-6 mt-8"
      onSubmit={onSubmit} // Use handleSubmit to wrap your onSubmit function
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
                  value={field.value !== undefined ? String(field.value) : ""}
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
                  value={field.value !== undefined ? String(field.value) : ""}
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
              <Checkbox checked={isAllSelected} onChange={handleToggleAll} />
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
              <div key={lesson._id} className="flex flex-col items-center">
                <LessonCardSquare lesson={lesson} isShowSource={false} />
                <Checkbox
                  checked={selectedLessons.some((l) => l === lesson._id)}
                  onChange={() => toggleLessonSelection(lesson._id)}
                />
              </div>
            ))}
          </div>
        ) : (
          <NoDataSection />
        )}
      </div>
      <CButton className="w-full" type="submit" isRounded disabled={!isValid}>
        Save Challenge
      </CButton>
    </form>
  );
};

export default ChallengeForm;
