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
  audioFile: zod.union([
    zod.string().url({ message: invalidLessonAudioFileMsg }),
    zod.instanceof(File, { message: invalidLessonAudioFileMsg }),
  ]),
  imageFile: zod.union([
    zod.string().url({ message: invalidLessonImageFileMsg }),
    zod.instanceof(File, { message: invalidLessonImageFileMsg }),
  ]),
  source: zod.string(),
});

export type TCreateNewLessonSchema = zod.infer<typeof CreateNewLessonSchema>;
