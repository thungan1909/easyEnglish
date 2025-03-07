export interface CreateLessonResponse {}
export interface CreateLessonDTO {
  title: string;
  description?: string;
  content: string;
  words: string[];
  audioFile: string;
  imageFile: string;
  source?: string;
}

export interface LessonListQueryFilter {
  scope?: string;
}

export interface LessonEntity {
  _id: string;
  code: string;
  title: string;
  content?: string;
  description?: string;
  words?: string;
  audioFile: string;
  imageFile?: string;
  source?: string;
  view: string;
  creator: string;
  progress: string;
  createDate?: string;
}
