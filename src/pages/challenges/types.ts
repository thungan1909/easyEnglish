export interface IChallenge {
  challengeId: string;
  title: string;
  description: string;
  imageSrc: string;
  startTime: Date;
  endTime: Date;
  timeLeft?: number;
  participants: number;
  coin: number;
  fee: number;
}
