import { Lesson, RecentUserActivity, Setting, Slide, User } from "./types";
import lesson1 from '../../assets/podcast_1059.png'
import lesson2 from '../../assets/podcast_1036.png'
import lesson3 from '../../assets/podcast_1365.png'
import lesson4 from '../../assets/podcast_1366.png'
import banner from '../../assets/banner.png'
import bannerWele from '../../assets/banner-wele.png'

export const exampleLessons: Lesson[] = [
  {
    id: "ESL 11001059",
    title: "Alice in Wonderland: Part 3 - The...",
    listens: "4.220",
    provider: "BBC",
    image: lesson1,
    progress: '40'
  },
  {
    id: "ESL 11001036",
    title: "Alice in Wonderland: Part 1 - Down the...",
    listens: "10.078",
    provider: "BBC",
    image: lesson2,
    progress: '50'
  },
  {
    id: "ESL 80008",
    title: "Australia – Home Sweet Home",
    listens: "1.591",
    provider: "WELE The Wallaby",
    image: lesson3,
    progress: '60'
  },
  {
    id: "ESL 800074",
    title: "Indonesia – Respecting Nature",
    listens: "697",
    provider: "WELE The Wallaby",
    image: lesson4,
    progress: '90'
  },
  {
    id: "ESL 110010367",
    title: "Alice in Wonderland: Part 1 - Down the...",
    listens: "10.078",
    provider: "BBC",
    image: lesson2,
    progress: '50'
  },
  {
    id: "ESL 800088",
    title: "Australia – Home Sweet Home",
    listens: "1.591",
    provider: "WELE The Wallaby",
    image: lesson3,
    progress: '60'
  },
];

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
    lesson:"Indonesia – Respecting Nature",
    avatar: lesson1,
  },
  {
    id: "2",
    name: "Jame",
    time: new Date(),
    lesson:"Laos – Respecting Nature",
    avatar: lesson2,
  },
  {
    id: "3",
    name: "David",
    time: new Date(),
    lesson:"Indonesia – Respecting Nature",
    avatar: lesson3,
  },
  {
    id: "4",
    name: "Lucky",
    time: new Date(),
    lesson:"About Sleep",
    avatar: lesson4,
  },
];

export const settingSlider: Setting= {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
};

export const exampleSlides: Slide[] = [
  {
      image: bannerWele,
      title: "Chuyến phiêu lưu của WELE the Wallaby",
      description: "8 tập kể về hành trình của WELE từ Việt Nam qua nhiều nước Đông Nam Á.",
      stats: {
          numberPodcast: 4,
          numberParticipant: 40,
          daysLeft: 20,
      }
  },
  {
      image: banner,
      title: "Hành trình mới của WELE",
      description: "Khám phá thế giới với WELE cùng những câu chuyện thú vị.",
      stats: {
          numberPodcast: 8,
          numberParticipant: 100,
          daysLeft: 30,
      }
  }
];
