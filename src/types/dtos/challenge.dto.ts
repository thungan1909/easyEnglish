import { LessonDTO } from "./lesson.dto";

export interface ChallengeDTO {
  _id: string;
  title: string;
  description: string;
  imageFile: string;
  startDate: Date; // Updated to match backend
  endDate: Date; // Updated to match backend
  timeLeft?: number; // Duration of the challenge in hours (optional)
  participantsCount: number; // Matches backend
  completedUsersCount: number; // Number of users who completed the challenge
  totalCompletionTime: number; // Total completion time for all users
  podcastCount: number; // If related to lessons
  coinFee: number;
  coinAward: number;
  averageScore: number; // New field
  averageAccuracy: number; // New field
  isCompleted: boolean; // Tracks if challenge is completed
  lessonList: LessonDTO[]; // Array of lessons
}

export interface CreateChallengeResponse {
  message: string;
  challenge: ChallengeDTO;
}
