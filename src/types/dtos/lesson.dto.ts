export interface CreateLessonResponse {}

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
  audioFile: File;
  imageFile?: File;
  source?: string;
  view: string;
  creator: string;
  progress: string;
  createdAt?: string;
}
