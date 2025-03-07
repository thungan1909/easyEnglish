import * as zod from "zod";
import {
  invalidLessonAudioFileMsg,
  invalidLessonContentMsg,
  invalidLessonImageFileMsg,
  invalidLessonTitleMsg,
  invalidLessonWordListMsg,
} from "../constants/errorMessage";

export const CreateNewLessonSchema = zod.object({
  title: zod.string().min(1, invalidLessonTitleMsg),
  content: zod.string().min(1, invalidLessonContentMsg),
  description: zod.string(),
  words: zod.array(zod.string()).min(1, invalidLessonWordListMsg),
  audioFile: zod.string().min(1, invalidLessonAudioFileMsg),
  imageFile: zod.string().min(1, invalidLessonImageFileMsg),
  source: zod.string(),
});

export type TCreateNewLessonSchema = zod.infer<typeof CreateNewLessonSchema>;
