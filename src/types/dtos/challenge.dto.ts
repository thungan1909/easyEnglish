import { LessonSubmissionResponse } from "./submission.dto";
import { UserDTO } from "./user.dto";

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
  totalSumission: number;
  totalScore: number;
  isCompleted: boolean;
  lessons: string[];
  creator: UserDTO;
  participants: ChallengeParticipantDTO[];
}

export interface CreateChallengeResponse {
  message: string;
  challenge: ChallengeDTO;
}

export interface ChallengeParticipantDTO {
  userId: string;
  totalScore: number;
  averageAccuracy: number;
  lessonResults: LessonSubmissionResponse[];
}

export interface SubmissionResponse {
  submissionId: string;
  lessonId: string;
  score: number;
  accuracy: number;
}

export interface GetChallengesByLessonIdAPIResponse {
  challenges: ChallengeDTO[];
  exists: boolean;
}

export type UpdateChallengeDTO = Omit<ChallengeDTO, "_id">;
export interface UpdateChallengeResponse {}
