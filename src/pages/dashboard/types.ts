export interface Lesson {
    id: string;
    title: string;
    listens: string;
    provider: string;
    image: string;
    progress: string;
}

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
    dots: boolean,
    infinite: boolean,
    speed: number,
    slidesToShow: number,
    slidesToScroll: number,
    autoplay: boolean,
    autoplaySpeed: number,
}

export interface Slide {
    image: string;
    title: string;
    description: string;
    stats: {
        numberPodcast: number;
        numberParticipant: number;
        daysLeft: number;
    };
}