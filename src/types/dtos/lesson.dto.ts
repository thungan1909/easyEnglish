export interface CreateLessonResponse {}
export interface CreatLessonDTO {
  title: string;
  content: string;
  words: string[];
  audioFile: string;
  source?: string;
}
