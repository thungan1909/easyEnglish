export interface User {
  id: string;
  name: string;
  avatar: string;
  grades: string;
  ranking: string;
}

export interface RecentUserActivity {
  id: string;
  name: string;
  avatar: string;
  time: Date;
  lesson: string;
}

export interface Setting {
  dots: boolean;
  infinite: boolean;
  speed: number;
  slidesToShow: number;
  slidesToScroll: number;
  autoplay: boolean;
  autoplaySpeed: number;
}
