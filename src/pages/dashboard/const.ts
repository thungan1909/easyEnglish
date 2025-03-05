import { Lesson, RecentUserActivity, Setting, Slide, User } from "./types";
import lesson1 from "../../assets/podcast_1059.png";
import lesson2 from "../../assets/podcast_1036.png";
import lesson3 from "../../assets/podcast_1365.png";
import lesson4 from "../../assets/podcast_1366.png";
import banner from "../../assets/banner.png";
import bannerWele from "../../assets/banner-wele.png";

export const exampleLessons: Lesson[] = [
  {
    id: "ESL 52006",
    title: "E6: Breakfast time",
    listens: "4.220",
    provider: "BBC",
    image: lesson1,
    progress: "40",
    scope: "listening",
    description:
      "Hello cả nhà, đây là đáp án của câu hỏi của tuần trước nhé:Helen will go home and study.Hôm nay chúng ta sẽ tiếp tục series “The Flatmates” nha!Helen đang học thì nhận được một cuộc gọi từ mẹ. Cô đã tâm sự với mẹ về tình cảm của mình với Michal, buồn hơn nữa là có vẻ Michal chỉ để ý đến (only has eyes for) Alice mà thôi. Khi nghe được điều này, mẹ của Helen đã bảo rằng còn rất nhiều thời gian (plenty of time) cho việc yêu đương sau này, bây giờ Helen không được mơ mộng (get your head out of the clouds) đến chuyện này mà chỉ được tập trung học hành thôi.This episode's question:Will Helen do what her mum tells her to? 1: Yes 2: No Have fun learning English, guys!",
  },
  {
    id: "ESL 52005",
    title: "E5: Helen at home",
    listens: "4.220",
    provider: "BBC",
    image: lesson1,
    progress: "40",
    scope: "listening",
    description:
      "Hello cả nhà, đây là đáp án của câu hỏi của tuần trước nhé:Helen will go home and study.Hôm nay chúng ta sẽ tiếp tục series “The Flatmates” nha!Helen đang học thì nhận được một cuộc gọi từ mẹ. Cô đã tâm sự với mẹ về tình cảm của mình với Michal, buồn hơn nữa là có vẻ Michal chỉ để ý đến (only has eyes for) Alice mà thôi. Khi nghe được điều này, mẹ của Helen đã bảo rằng còn rất nhiều thời gian (plenty of time) cho việc yêu đương sau này, bây giờ Helen không được mơ mộng (get your head out of the clouds) đến chuyện này mà chỉ được tập trung học hành thôi.This episode's question:Will Helen do what her mum tells her to? 1: Yes 2: No Have fun learning English, guys!",
  },
  {
    id: "ESL 52004",
    title: "E4: Another round",
    listens: "4.220",
    provider: "BBC",
    image: lesson1,
    progress: "40",
    scope: "listening",
    description:
      "Hello cả nhà, đây là đáp án của câu hỏi của tuần trước nhé:Helen will go home and study.Hôm nay chúng ta sẽ tiếp tục series “The Flatmates” nha!Helen đang học thì nhận được một cuộc gọi từ mẹ. Cô đã tâm sự với mẹ về tình cảm của mình với Michal, buồn hơn nữa là có vẻ Michal chỉ để ý đến (only has eyes for) Alice mà thôi. Khi nghe được điều này, mẹ của Helen đã bảo rằng còn rất nhiều thời gian (plenty of time) cho việc yêu đương sau này, bây giờ Helen không được mơ mộng (get your head out of the clouds) đến chuyện này mà chỉ được tập trung học hành thôi.This episode's question:Will Helen do what her mum tells her to? 1: Yes 2: No Have fun learning English, guys!",
  },
  {
    id: "ESL 10328",
    title: "Stepping aside",
    listens: "10.078",
    provider: "BBC",
    image: lesson2,
    progress: "50",
    scope: "listening",
    description:
      "Hello cả nhà, đây là đáp án của câu hỏi của tuần trước nhé:Michal said about Alice: She's beautiful.Hôm nay chúng ta sẽ tiếp tục series “The Flatmates” nha!Trong tập này, Helen nói với Alice rằng cô nghĩ Michal thực sự thích cô ấy nhưng Alice chỉ cảm thấy việc đó thật ngớ ngẩn (daft), cho rằng anh chỉ giữ phép lịch sự (polite) mà thôi. Khi bị Alice rò hỏi tại sao lại đột dưng lại quan tâm đến việc này thì Helen đã khá bối rối, muốn đi về với lí do cô có rất nhiều (loads of) bài tập cần làm. Nhưng Alice bảo cô hãy thư giãn và hỏi cô muốn uống gì vì Tim sẽ mua lượt tiếp theo (next round).This episode's question: What will Helen do? Go home and…1: cry.2: study.3: think about Michal.Have fun learning English, guys!",
  },
  {
    id: "ESL 52003",
    title: "E3: At the pub",
    listens: "1.591",
    provider: "WELE The Wallaby",
    image: lesson3,
    progress: "60",
    scope: "all",
    description:
      "Hello cả nhà, đây là đáp án của câu hỏi của tuần trước nhé:Helen will go home and study.Hôm nay chúng ta sẽ tiếp tục series “The Flatmates” nha!Helen đang học thì nhận được một cuộc gọi từ mẹ. Cô đã tâm sự với mẹ về tình cảm của mình với Michal, buồn hơn nữa là có vẻ Michal chỉ để ý đến (only has eyes for) Alice mà thôi. Khi nghe được điều này, mẹ của Helen đã bảo rằng còn rất nhiều thời gian (plenty of time) cho việc yêu đương sau này, bây giờ Helen không được mơ mộng (get your head out of the clouds) đến chuyện này mà chỉ được tập trung học hành thôi.This episode's question:Will Helen do what her mum tells her to? 1: Yes 2: No Have fun learning English, guys!",
  },
  {
    id: "ESL_6",
    title: "Indonesia – Respecting Nature",
    listens: "59221",
    provider: "WELE The Wallaby",
    image: lesson4,
    progress: "90",
    scope: "mine",
    description:
      "Hello cả nhà, đây là đáp án củlen will go home and study.Hôm nay chúng ta sẽ tiếp tục series “The Flatmates” nha!Helen đang học thì nhận được một cuộc gọi từ mẹ. Cô đã tâm sự với mẹ về tình cảm của mình với Michal, buồn hơn nữa là có vẻ Michal chỉ để ý đến (only has eyes for) Alice mà thôi. Khi nghe được điều này, mẹ của Helen đã bảo rằng còn rất nhiều thời gian (plenty of time) cho việc yêu đương sau này, bây giờ Helen không được mơ mộng (get your head out of the clouds) đến chuyện này mà chỉ được tập trung học hành thôi.This episode's question:Will Helen do what her mum tells her to? 1: Yes 2: No Have fun learning English, guys!",
  },
  {
    id: "ESL_7",
    title: "Alice in Wonderland: Part 1 - Down the...",
    listens: "10.59221",
    provider: "BBC",
    image: lesson2,
    scope: "listened",
    progress: "50",
    description:
      "Hello cả nhà, đây là đáphé:Helen will go home and study.Hôm nay chúng ta sẽ tiếp tục series “The Flatmates” nha!Helen đang học thì nhận được một cuộc gọi từ mẹ. Cô đã tâm sự với mẹ về tình cảm của mình với Michal, buồn hơn nữa là có vẻ Michal chỉ để ý đến (only has eyes for) Alice mà thôi. Khi nghe được điều này, mẹ của Helen đã bảo rằng còn rất nhiều thời gian (plenty of time) cho việc yêu đương sau này, bây giờ Helen không được mơ mộng (get your head out of the clouds) đến chuyện này mà chỉ được tập trung học hành thôi.This episode's question:Will Helen do what her mum tells her to? 1: Yes 2: No Have fun learning English, guys!",
  },
  {
    id: "ESL_8",
    title: "Australia – Home Sweet Home",
    listens: "122591",
    provider: "WELE The Wallaby",
    image: lesson3,
    progress: "60",
    scope: "listened",
    description:
      "Hello cả nhà, đây là đáp á:Helen will go home and study.Hôm nay chúng ta sẽ tiếp tục series “The Flatmates” nha!Helen đang học thì nhận được một cuộc gọi từ mẹ. Cô đã tâm sự với mẹ về tình cảm của mình với Michal, buồn hơn nữa là có vẻ Michal chỉ để ý đến (only has eyes for) Alice mà thôi. Khi nghe được điều này, mẹ của Helen đã bảo rằng còn rất nhiều thời gian (plenty of time) cho việc yêu đương sau này, bây giờ Helen không được mơ mộng (get your head out of the clouds) đến chuyện này mà chỉ được tập trung học hành thôi.This episode's question:Will Helen do what her mum tells her to? 1: Yes 2: No Have fun learning English, guys!",
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

export const exampleSlides: Slide[] = [
  {
    image: bannerWele,
    title: "Chuyến phiêu lưu của WELE the Wallaby",
    description:
      "8 tập kể về hành trình của WELE từ Việt Nam qua nhiều nước Đông Nam Á.",
    stats: {
      numberPodcast: 4,
      numberParticipant: 40,
      daysLeft: 20,
    },
  },
  {
    image: banner,
    title: "Hành trình mới của WELE",
    description: "Khám phá thế giới với WELE cùng những câu chuyện thú vị.",
    stats: {
      numberPodcast: 8,
      numberParticipant: 100,
      daysLeft: 30,
    },
  },
];

export const exLesson: Lesson = {
  id: "ESL_1",
  title: "E5: Helen at home",
  listens: "4.220",
  provider: "BBC",
  image: lesson1,
  progress: "40",
  scope: "listening",
  createDate: "26/01/2025",
  description:
    "Hello cả nhà, đây là đáp án của câu hỏi của tuần trước nhé:Helen will go home and study.Hôm nay chúng ta sẽ tiếp tục series “The Flatmates” nha!Helen đang học thì nhận được một cuộc gọi từ mẹ. Cô đã tâm sự với mẹ về tình cảm của mình với Michal, buồn hơn nữa là có vẻ Michal chỉ để ý đến (only has eyes for) Alice mà thôi. Khi nghe được điều này, mẹ của Helen đã bảo rằng còn rất nhiều thời gian (plenty of time) cho việc yêu đương sau này, bây giờ Helen không được mơ mộng (get your head out of the clouds) đến chuyện này mà chỉ được tập trung học hành thôi.This episode's question:Will Helen do what her mum tells her to? 1: Yes 2: No Have fun learning English, guys!",
};
