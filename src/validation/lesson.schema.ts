import * as zod from "zod";
import {
  invalidLessonAudioFileMsg,
  invalidLessonContentMsg,
  invalidLessonImageFileMsg,
  invalidLessonTitleMsg,
  invalidLessonWordListMsg,
} from "../constants/errorMessage";

export const LessonSchema = zod.object({
  title: zod.string().min(1, invalidLessonTitleMsg),
  content: zod.string().min(1, invalidLessonContentMsg),
  description: zod.string().optional(),
  wordsWithHint: zod.array(zod.string()).min(1, invalidLessonWordListMsg),
  wordsWithoutHint: zod.array(zod.string()).min(1, invalidLessonWordListMsg),
  audioFile: zod
    .union([
      zod.string().url({ message: invalidLessonAudioFileMsg }),
      zod.instanceof(File, { message: invalidLessonAudioFileMsg }),
    ])
    .optional(),
  imageFile: zod
    .union([
      zod.string().url({ message: invalidLessonImageFileMsg }),
      zod.instanceof(File, { message: invalidLessonImageFileMsg }),
    ])
    .optional(),
  source: zod.string().optional(),
});

export type TLessonSchema = zod.infer<typeof LessonSchema>;
