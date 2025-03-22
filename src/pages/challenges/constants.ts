import lesson1 from "../../assets/podcast_1059.png";
import lesson2 from "../../assets/podcast_1036.png";
import lesson3 from "../../assets/podcast_1365.png";

import { ChallengeDTO } from "../../types/dtos/challenge.dto";
const exampleChallenge: ChallengeDTO[] = [
  {
    _id: "1",
    title: "7-Day English Listening Challenge",
    description: "Improve your listening skills with daily podcast exercises.",
    imageSrc: lesson1,
    startTime: new Date("2025-03-20T00:00:00Z"),
    endTime: new Date("2025-03-27T23:59:59Z"),
    participants: 1,
    podcastCount: 7,
    coin: 500,
    fee: 0,
  },
  {
    _id: "2",
    title: "30-Day Vocabulary Booster",
    description: "Expand your vocabulary with daily word challenges.",
    imageSrc: lesson2,
    startTime: new Date("2025-04-01T00:00:00Z"),
    endTime: new Date("2025-04-30T23:59:59Z"),
    participants: 850,
    podcastCount: 30,
    coin: 1500,
    fee: 5,
  },
  {
    _id: "3",
    title: "Pronunciation Mastery",
    description: "Perfect your pronunciation with guided practice sessions.",
    imageSrc: lesson3,
    startTime: new Date("2025-03-25T00:00:00Z"),
    endTime: new Date("2025-04-05T23:59:59Z"),
    participants: 500,
    podcastCount: 10,
    coin: 800,
    fee: 3,
  },
  {
    _id: "4",
    title: "Pronunciation Mastery",
    description: "Perfect your pronunciation with guided practice sessions.",
    imageSrc: lesson3,
    startTime: new Date("2025-03-25T00:00:00Z"),
    endTime: new Date("2025-04-05T23:59:59Z"),
    participants: 500,
    podcastCount: 10,
    coin: 800,
    fee: 3,
  },
  {
    _id: "5",
    title: "Pronunciation Mastery",
    description: "Perfect your pronunciation with guided practice sessions.",
    imageSrc: lesson3,
    startTime: new Date("2025-03-25T00:00:00Z"),
    endTime: new Date("2025-04-05T23:59:59Z"),
    participants: 500,
    podcastCount: 10,
    coin: 800,
    fee: 3,
  },
];

export default exampleChallenge;
