export interface IChallenge {
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
}
