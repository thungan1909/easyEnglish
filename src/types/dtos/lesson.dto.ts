export interface CreateLessonResponse {}
export interface CreateLessonDTO {
  title: string;
  code: string;
  content: string;
  words: string[];
  audioFile: string;
  source?: string;
}

export interface LessonListQueryFilter {
  scope?: string;
}

export interface LessonEntity {
  _id: string;
  code: string;
  title: string;
  view: string;
  creator: string;
  provider: string;
  image: string;
  progress: string;
  description?: string;
  content?: string;
  createDate?: string;
}
