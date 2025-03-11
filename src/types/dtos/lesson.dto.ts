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
  wordsWithHint: string[];
  wordsWithoutHint: string[];
  audioFile: string | File;
  imageFile?: string | File;
  source?: string;
  view: string;
  creator: string;
  progress: string;
  createdAt?: string;
}
