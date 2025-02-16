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