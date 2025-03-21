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
