import lesson1 from "../../assets/podcast_1059.png";
import lesson2 from "../../assets/podcast_1036.png";

import { ChallengeDTO } from "../../types/dtos/challenge.dto";
import { UserDTO } from "../../types/dtos/user.dto";
const exampleChallenge: ChallengeDTO[] = [
  {
    _id: "1",
    title: "7-Day English Listening Challenge",
    description: "Improve your listening skills with daily podcast exercises.",
    imageSrc: lesson1,
    startTime: new Date("2025-03-20T00:00:00Z"),
    endTime: new Date("2025-03-27T23:59:59Z"),
    participants: 100,
    podcastCount: 7,
    coin: 500,
    fee: 0,
    lessonList: [
      {
        _id: "01",
        code: "EN-L1",
        title: "Understanding Native Speech",
        content: "Listen to a short dialogue and fill in the blanks.",
        description: "Focus on natural speech patterns and contractions.",
        wordsWithHint: ["gonna", "wanna", "lemme"],
        wordsWithoutHint: ["restaurant", "appointment"],
        audioFile: "https://example.com/audio1.mp3",
        imageFile: lesson1,
        source: "BBC Learning English",
        listenCount: 50,
        listenedBy: ["user1", "user2"],
        creator: {
          _id: "admin123",
          username: "Admin",
          email: "admin@example.com",
          avatarUrl: "",
          totalScore: 0,
          weeklyScores: [],
        },
        progress: "not started",
        createdAt: "2025-03-15T12:00:00Z",
        topScores: [
          {
            userId: "user1",
            score: 95,
            accuracy: 98,
            submittedAt: "2025-03-21T10:00:00Z",
          },
          {
            userId: "user2",
            score: 90,
            accuracy: 95,
            submittedAt: "2025-03-21T11:00:00Z",
          },
        ],
      },
      {
        _id: "02",
        code: "EN-L2",
        title: "News Listening Exercise",
        content: "Listen to a news report and answer questions.",
        description: "Practice listening to real news broadcasts.",
        wordsWithHint: ["economy", "inflation"],
        wordsWithoutHint: ["government", "policy"],
        audioFile: "https://example.com/audio2.mp3",
        imageFile: lesson2,
        source: "CNN News",
        listenCount: 30,
        listenedBy: ["user3", "user4"],
        creator: {
          _id: "admin456",
          username: "Editor",
          email: "editor@example.com",
          avatarUrl: "",
          totalScore: 0,
          weeklyScores: [],
        },
        progress: "in progress",
        createdAt: "2025-03-16T12:00:00Z",
        topScores: [
          {
            userId: "user3",
            score: 88,
            accuracy: 92,
            submittedAt: "2025-03-22T09:30:00Z",
          },
          {
            userId: "user4",
            score: 85,
            accuracy: 90,
            submittedAt: "2025-03-22T10:45:00Z",
          },
        ],
      },
    ],
  },
];

const exUserParticipants: UserDTO[] = [
  {
    _id: "user1",
    username: "john_doe",
    fullName: "John Doe",
    email: "johndoe@example.com",
    phoneNumber: "123456789",
    birthDate: new Date("1995-06-15"),
    gender: "Male",
    city: "New York",
    district: "Brooklyn",
    ward: "Ward 1",
    detailAddress: "123 Main St, Brooklyn",
    university: "NYU",
    major: "Computer Science",
    avatarUrl: "https://example.com/avatar1.jpg",
    listenedLessons: [
      { lesson: "lesson1", listenedAt: "2025-03-20T10:00:00Z" },
      { lesson: "lesson2", listenedAt: "2025-03-21T12:30:00Z" },
    ],
    totalScore: 1500,
    weeklyScores: [
      { weekStart: "2025-03-10", score: 500 },
      { weekStart: "2025-03-17", score: 1000 },
    ],
  },
  {
    _id: "user2",
    username: "jane_doe",
    fullName: "Jane Doe",
    email: "janedoe@example.com",
    phoneNumber: "987654321",
    birthDate: new Date("1998-09-22"),
    gender: "Female",
    city: "Los Angeles",
    district: "Downtown",
    ward: "Ward 2",
    detailAddress: "456 Elm St, LA",
    university: "UCLA",
    major: "Linguistics",
    avatarUrl: "https://example.com/avatar2.jpg",
    listenedLessons: [
      { lesson: "lesson3", listenedAt: "2025-03-22T08:45:00Z" },
    ],
    totalScore: 1200,
    weeklyScores: [
      { weekStart: "2025-03-10", score: 600 },
      { weekStart: "2025-03-17", score: 600 },
    ],
  },
];

export default { exampleChallenge, exUserParticipants };
