export interface LessonSubmissionResponse {
  accuracy: number;
  correct_answers: number;
  lessonId: string;
  original_array: string[];
  result_array: string[];
  score: number;
  total_filled_blanks: number;
  userId: string;
  user_array: string[];
  submittedAt: string;
  createdAt: string;
  updatedAt: string;
}

export interface LessonSubmissionDTO {
  id: string;
}

export interface TopScoresResponse {
  topScores: {
    user: {
      _id: string;
      username: string;
      fullName: string;
      avatarUrl: string;
    };
    score: number;
    accuracy: number;
  }[];
}
