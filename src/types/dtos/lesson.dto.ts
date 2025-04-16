import { UserDTO } from "./user.dto";

// ─── Lesson Core DTO ──────────────────────────────────────────────────────────

export interface LessonDTO {
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
  topScores: {
    userId: string;
    score: number;
    accuracy: number;
    submittedAt: string;
  }[];
}

// ─── Lesson API Responses ─────────────────────────────────────────────────────

export interface CreateLessonResponse {}
export interface EditLessonResponse {}
export interface DeleteLessonResponse {}
export interface SubmitListenLessonResponse {}
export interface CompareLessonResponse {
  accuracy?: number;
  blankCount?: number;
  correctAnswers?: number;
  totalFilledBlanks?: number;
}

// ─── Listening DTOs ───────────────────────────────────────────────────────────

export interface ListenLessonDTO {
  lessonId: string;
  original_array: string[];
  result_array: string[];
  user_array: string[];
}

export interface SubmitListenLessonDTO extends ListenLessonDTO {}
export interface CompareListenLessonDTO extends ListenLessonDTO {}
