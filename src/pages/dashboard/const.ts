import { RecentUserActivity, Setting, User } from "./types";
import lesson1 from "../../assets/podcast_1059.png";
import lesson2 from "../../assets/podcast_1036.png";
import lesson3 from "../../assets/podcast_1365.png";
import lesson4 from "../../assets/podcast_1366.png";

export const exampleUserRanking: User[] = [
  {
    id: "1",
    name: "Alice",
    grades: "18.5",
    ranking: "1",
    avatar: lesson1,
  },
  {
    id: "2",
    name: "James",
    grades: "15.5",
    ranking: "2",
    avatar: lesson2,
  },
  {
    id: "3",
    name: "Nam",
    grades: "12.5",
    ranking: "3",
    avatar: lesson3,
  },
  {
    id: "4",
    name: "Lily",
    grades: "9.5",
    ranking: "4",
    avatar: lesson4,
  },
];

export const exampleUserNewfeed: RecentUserActivity[] = [
  {
    id: "1",
    name: "Alice",
    time: new Date(),
    lesson: "Indonesia – Respecting Nature",
    avatar: lesson1,
  },
  {
    id: "2",
    name: "Jame",
    time: new Date(),
    lesson: "Laos – Respecting Nature",
    avatar: lesson2,
  },
  {
    id: "3",
    name: "David",
    time: new Date(),
    lesson: "Indonesia – Respecting Nature",
    avatar: lesson3,
  },
  {
    id: "4",
    name: "Lucky",
    time: new Date(),
    lesson: "About Sleep",
    avatar: lesson4,
  },
];

export const settingSlider: Setting = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
};
