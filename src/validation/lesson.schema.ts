import * as zod from "zod";
import {
  invalidLessonAudioFileMsg,
  invalidLessonContentMsg,
  invalidLessonTitleMsg,
  invalidLessonWordListMsg,
} from "../constants/errorMessage";

export const CreateNewLessonSchema = zod.object({
  lessonTitle: zod.string().min(1, invalidLessonTitleMsg),
  lessonContent: zod.string().min(1, invalidLessonContentMsg),
  wordList: zod.array(zod.string()).min(1, invalidLessonWordListMsg),
  audioFile: zod.string().min(1, invalidLessonAudioFileMsg),
});

export type TCreateNewLessonSchema = zod.infer<typeof CreateNewLessonSchema>;
