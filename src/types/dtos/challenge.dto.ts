import { LessonSubmissionResponse } from "./submission.dto";
import { UserDTO } from "./user.dto";

// ─── Challenge Interfaces ─────────────────────────────────────────────────────

export interface ChallengeDTO {
  _id: string;
  title: string;
  description: string;
  imageFile: string;
  startDate: Date;
  endDate: Date;
  timeLeft?: number;
  completedUsersCount: number;
  totalCompletionTime: number;
  podcastCount: number;
  coinFee: number;
  coinAward: number;
  averageScore: number;
  averageAccuracy: number;
  totalSubmission: number;
  totalScore: number;
  isCompleted: boolean;
  lessons: string[];
  creator: UserDTO;
  participants: ChallengeParticipantDTO[];
  createdAt: string;
}

export interface ChallengeParticipantDTO {
  userId: string;
  username?: string;
  fullName?: string;
  totalScore: number;
  totalAccuracy: number;
  averageAccuracy: number;
  averageScore: number;
  lessonResults: LessonSubmissionResponse[];
}

// ─── Challenge API Responses ──────────────────────────────────────────────────

export interface CreateChallengeResponse {
  message: string;
  challenge: ChallengeDTO;
}

export interface UpdateChallengeResponse {}

export interface DeleteChallengeResponse {}

export interface GetChallengesByLessonIdAPIResponse {
  challenges: ChallengeDTO[];
  exists: boolean;
}

// ─── Utility Types ────────────────────────────────────────────────────────────

export type UpdateChallengeDTO = Omit<ChallengeDTO, "_id">;

export interface SubmissionResponse {
  submissionId: string;
  lessonId: string;
  score: number;
  accuracy: number;
}
