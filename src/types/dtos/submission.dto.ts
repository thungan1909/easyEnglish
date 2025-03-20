export interface LessonSubmissionResponse {
  user: string;
  lesson: string;
  original_array: string[];
  user_array: string[];
  result_array: string[];
  correct_answers: number;
  total_filled_blanks: number;
  accuracy: number;
  score: number;
  submittedAt: string;
  createdAt: string;
  updatedAt: string;
}

export interface LessonSubmissionDTO {
  id: string;
}
