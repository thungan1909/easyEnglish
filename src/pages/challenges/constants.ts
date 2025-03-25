import { UserDTO } from "../../types/dtos/user.dto";

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

export default { exUserParticipants };
