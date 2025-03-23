import { LessonEntity } from "./lesson.dto";

export interface ChallengeDTO {
  _id: string;
  title: string;
  description: string;
  imageSrc: string;
  startTime: Date;
  endTime: Date;
  timeLeft?: number;
  participants: number;
  podcastCount: number;
  coin: number;
  fee: number;
  lessonList: LessonEntity[];
}
