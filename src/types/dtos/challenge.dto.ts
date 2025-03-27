import { LessonDTO } from "./lesson.dto";
import { UserDTO } from "./user.dto";

export interface ChallengeDTO {
  _id: string;
  title: string;
  description: string;
  imageFile: string;
  startDate: Date;
  endDate: Date;
  timeLeft?: number;
  participantsCount: number;
  completedUsersCount: number;
  totalCompletionTime: number;
  podcastCount: number;
  coinFee: number;
  coinAward: number;
  averageScore: number;
  averageAccuracy: number;
  isCompleted: boolean;
  lessons: LessonDTO[];
  creator: UserDTO;
}

export interface CreateChallengeResponse {
  message: string;
  challenge: ChallengeDTO;
}
