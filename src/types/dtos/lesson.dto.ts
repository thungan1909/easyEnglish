import { UserDTO } from "./user.dto";

export interface CreateLessonResponse {}

export interface LessonListQueryFilter {
  scope?: string;
}

export interface LessonEntity {
  _id: string;
  code: string;
  title: string;
  content?: string;
  description?: string;
  wordsWithHint: string[];
  wordsWithoutHint: string[];
  audioFile: string | File;
  imageFile?: string | File;
  source?: string;
  listenCount: number;
  listenedBy: string[];
  creator: UserDTO;
  progress: string;
  createdAt?: string;

  // /** ✅ New field: Top scores for the lesson */
  topScores: {
    user: string; // User id
    score: number; // Score achieved
    accuracy: number;
    submittedAt: string; // Timestamp of submission
  }[];
}

export interface ListenLessonDTO {
  lessonId: string;
  original_array: string[];
  result_array: string[];
  user_array: string[];
}
export interface SubmitListenLessonDTO extends ListenLessonDTO {}
export interface CompareListenLessonDTO extends ListenLessonDTO {}

export interface SubmitListenLessonResponse {}
export interface CompareLessonResponse {
  accuracy?: number;
  blankCount?: number;
  correctAnswers?: number;
  totalFilledBlanks?: number;
}
