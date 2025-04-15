import { SubmitHandler } from "react-hook-form";
import { LessonDTO } from "../../../types/dtos/lesson.dto";
import { TChallengeSchema } from "../../../validation/challenge.schema";
import { FormEventHandler } from "react";
export interface ChallengeFormProps {
  control: any;
  handleSubmit: (
    callback: SubmitHandler<TChallengeSchema>
  ) => FormEventHandler<HTMLFormElement>;
  onSubmit: SubmitHandler<TChallengeSchema>;
  searchTerm: string;
  setSearchTerm: (s: string) => void;
  selectedLessons: string[];
  filteredLessons: LessonDTO[];
  toggleLessonSelection: (id: string) => void;
  handleToggleAll: () => void;
  isAllSelected: boolean;
  isValid: boolean;
  handleFileUpload: (file: File, type: "image" | "audio") => void;
}
