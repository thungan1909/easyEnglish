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
}

export interface SubmitListenLessonDTO {
  lessonId: string;
  original_array: string[];
  result_array: string[];
  user_array: string[];
}

export interface SubmitListenLessonResponse {}
